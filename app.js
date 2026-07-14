// State variables
let currentBlock = 0;
const QUESTIONS_PER_BLOCK = 60;
let currentUtterance = null;
let isPlaying = false;
let currentPlayingBtn = null;

// DOM Elements
const blocksMenu = document.getElementById('blocks-menu');
const flashcardsContainer = document.getElementById('flashcards-container');
const currentBlockTitle = document.getElementById('current-block-title');
const totalCountBadge = document.getElementById('total-count-badge');
const toggleThemeBtn = document.getElementById('toggle-theme');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.querySelector('.sidebar');
const jumpInput = document.getElementById('jump-to-input');
const jumpBtn = document.getElementById('jump-btn');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    if (typeof window_data === 'undefined') {
        flashcardsContainer.innerHTML = '<div class="flashcard"><p class="question-text" style="color:var(--danger)">Error: No se pudieron cargar los datos (data.js no encontrado).</p></div>';
        return;
    }

    totalCountBadge.textContent = `${window_data.length} Preguntas`;
    
    renderSidebarMenu();
    renderBlock(0);
    setupEventListeners();
}

function setupEventListeners() {
    // Theme toggle
    toggleThemeBtn.addEventListener('click', () => {
        const root = document.documentElement;
        const icon = toggleThemeBtn.querySelector('i');
        
        if (root.getAttribute('data-theme') === 'light') {
            root.removeAttribute('data-theme');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            root.setAttribute('data-theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 900 && sidebar.classList.contains('open')) {
            if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });

    // Jump to specific question
    jumpBtn.addEventListener('click', () => {
        const val = parseInt(jumpInput.value);
        if (!isNaN(val) && val >= 1 && val <= window_data.length) {
            const targetBlock = Math.floor((val - 1) / QUESTIONS_PER_BLOCK);
            renderBlock(targetBlock);
            
            // Highlight the exact question after a short delay
            setTimeout(() => {
                const card = document.getElementById(`q-${val}`);
                if (card) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.style.boxShadow = '0 0 20px var(--accent-primary)';
                    setTimeout(() => {
                        card.style.boxShadow = '';
                    }, 2000);
                }
            }, 100);
        }
    });
}

function renderSidebarMenu() {
    blocksMenu.innerHTML = '';
    const totalBlocks = Math.ceil(window_data.length / QUESTIONS_PER_BLOCK);
    
    for (let i = 0; i < totalBlocks; i++) {
        const start = i * QUESTIONS_PER_BLOCK + 1;
        const end = Math.min((i + 1) * QUESTIONS_PER_BLOCK, window_data.length);
        
        const btn = document.createElement('button');
        btn.className = `menu-btn ${i === currentBlock ? 'active' : ''}`;
        btn.innerHTML = `<span>Bloque ${i + 1}</span> <span style="font-size: 0.8rem; opacity: 0.7;">(${start} - ${end})</span>`;
        
        btn.addEventListener('click', () => {
            renderBlock(i);
            if (window.innerWidth <= 900) {
                sidebar.classList.remove('open');
            }
        });
        
        blocksMenu.appendChild(btn);
    }
}

function renderBlock(blockIndex) {
    // Update Active state in menu
    const buttons = blocksMenu.querySelectorAll('.menu-btn');
    buttons.forEach((btn, idx) => {
        if (idx === blockIndex) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    currentBlock = blockIndex;
    const start = blockIndex * QUESTIONS_PER_BLOCK;
    const end = Math.min(start + QUESTIONS_PER_BLOCK, window_data.length);
    const questions = window_data.slice(start, end);

    currentBlockTitle.textContent = `Preguntas ${start + 1} - ${end}`;
    flashcardsContainer.innerHTML = '';

    // Stop any playing audio
    stopAudio();

    questions.forEach((item, idx) => {
        const qNum = start + idx + 1;
        const card = document.createElement('div');
        card.className = 'flashcard';
        card.id = `q-${qNum}`;
        
        // Clean Q text if it lacks proper punctuation
        let cleanQ = item.q;
        if (!cleanQ.startsWith('¿')) cleanQ = '¿' + cleanQ;
        if (!cleanQ.endsWith('?')) cleanQ += '?';

        card.innerHTML = `
            <div class="flashcard-header">
                <span class="question-number">Pregunta ${qNum}</span>
                <button class="speech-btn" title="Escuchar en voz alta" onclick="toggleAudio(this, ${qNum}, \`${cleanQ.replace(/"/g, '&quot;')}\`, \`${item.a.replace(/"/g, '&quot;')}\`)">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="question-text">${cleanQ}</div>
            
            <button class="reveal-btn" onclick="revealAnswer(this)">
                <i class="fa-solid fa-eye"></i> Revelar Respuesta
            </button>
            
            <div class="answer-container">
                <div class="answer-label">Respuesta</div>
                <div class="answer-text">${item.a}</div>
            </div>
        `;
        
        flashcardsContainer.appendChild(card);
    });
    
    // Scroll to top
    document.querySelector('.main-content').scrollTo(0,0);
}

// Reveal Answer Function
window.revealAnswer = function(btn) {
    const answerContainer = btn.nextElementSibling;
    btn.style.display = 'none';
    answerContainer.classList.add('visible');
};

// Text-to-Speech Functionality
window.toggleAudio = function(btn, qNum, qText, aText) {
    if (isPlaying && currentPlayingBtn === btn) {
        stopAudio();
        return;
    }

    stopAudio();
    
    const synth = window.speechSynthesis;
    if (!synth) {
        alert("Tu navegador no soporta lectura en voz alta.");
        return;
    }

    isPlaying = true;
    currentPlayingBtn = btn;
    btn.classList.add('playing');
    btn.innerHTML = '<i class="fa-solid fa-stop"></i>';

    // Reveal answer automatically when reading
    const revealBtn = btn.closest('.flashcard').querySelector('.reveal-btn');
    if (revealBtn && revealBtn.style.display !== 'none') {
        revealAnswer(revealBtn);
    }

    const textToRead = `Pregunta ${qNum}. ${qText}... ... Respuesta. ${aText}`;
    
    currentUtterance = new SpeechSynthesisUtterance(textToRead);
    currentUtterance.lang = 'es-ES'; // Spanish
    currentUtterance.rate = 1.0; // Normal speed
    
    currentUtterance.onend = function() {
        resetAudioBtn(btn);
    };

    currentUtterance.onerror = function() {
        resetAudioBtn(btn);
    };

    synth.speak(currentUtterance);
};

function stopAudio() {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    if (currentPlayingBtn) {
        resetAudioBtn(currentPlayingBtn);
    }
    isPlaying = false;
}

function resetAudioBtn(btn) {
    btn.classList.remove('playing');
    btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    if (currentPlayingBtn === btn) {
        currentPlayingBtn = null;
        isPlaying = false;
    }
}
