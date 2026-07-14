import os
import re
import json

def main():
    with open("F:\\Z ASCENSO\\preguntas_extraidas.txt", 'r', encoding='utf-8') as f:
        text = f.read()

    text = re.sub(r'Banco de Preguntas del Ministerio de Educación RESPONDIDO.*?prof\. Ivan\n?', '', text)
    text = re.sub(r'^\d+\s*$', '', text, flags=re.MULTILINE)
    text = re.sub(r'\n{3,}', '\n\n', text)
    
    matches = list(re.finditer(r'\sR:\s', text))
    
    qas = []
    start_idx = 0
    
    for i in range(len(matches)):
        match = matches[i]
        q_text = text[start_idx:match.start()].strip()
        
        if i < len(matches) - 1:
            next_match = matches[i+1]
            between = text[match.end():next_match.start()]
            
            split_idx = between.find('\n\n')
            if split_idx != -1:
                a_text = between[:split_idx].strip()
                start_idx = match.end() + split_idx
            else:
                split_idx = between.find('\n¿')
                if split_idx != -1:
                    a_text = between[:split_idx].strip()
                    start_idx = match.end() + split_idx
                else:
                    split_idx = between.find('\n')
                    if split_idx != -1:
                        a_text = between[:split_idx].strip()
                        start_idx = match.end() + split_idx
                    else:
                        a_text = between.strip()
                        start_idx = next_match.start()
        else:
            a_text = text[match.end():].strip()
            
        q_text = re.sub(r'\s+', ' ', q_text)
        a_text = re.sub(r'\s+', ' ', a_text)
            
        qas.append({"q": q_text, "a": a_text})

    out_dir = "F:\\Z ASCENSO\\App_Preguntas"
    os.makedirs(out_dir, exist_ok=True)
    
    # Save as data.js
    with open(os.path.join(out_dir, 'data.js'), 'w', encoding='utf-8') as f:
        f.write("const window_data = ")
        f.write(json.dumps(qas, indent=2, ensure_ascii=False))
        f.write(";\n")

    print(f"Successfully generated {len(qas)} questions into data.js.")

if __name__ == "__main__":
    main()
