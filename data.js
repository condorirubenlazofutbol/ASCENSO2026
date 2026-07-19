const window_data = [
    {
        "id": 1,
        "q": "¿Quién fue el primer científico en proponer la plasticidad en la fuerza y el número de las conexiones neuronales como base del aprendizaje y la memoria?",
        "a": "Santiago Ramón y Cajal."
    },
    {
        "id": 2,
        "q": "¿Qué riesgo enfrenta una educación que ignora los cambios en la socialización, el pensamiento y las habilidades diferenciadas en el contexto tecnológico actual?",
        "a": "Volverse obsoleta y acrecentar las dificultades existentes, al limitar el pleno desarrollo de las capacidades humanas y generar dependencia tecnológica."
    },
    {
        "id": 3,
        "q": "¿Qué tipo de atención requiere un gasto energético alto?",
        "a": "Voluntaria."
    },
    {
        "id": 4,
        "q": "Según la definición de estilo de aprendizaje como conjunto de elementos exteriores que influyen en el contexto de la situación de aprendizaje, ¿cuáles son los indicadores estables que los alumnos perciben, interaccionan y responden a sus ambientes de aprendizaje?",
        "a": "Cognitivos, afectivos, fisiológicos y psicológicos"
    },
    {
        "id": 5,
        "q": "¿Con qué áreas neuroanatómicas está vinculado el proceso de codificación y registro de la información?",
        "a": "Visual y auditiva."
    },
    {
        "id": 6,
        "q": "La motivación es de particular interés para los psicólogos educativos debido al papel crucial que juega en el aprendizaje de los estudiantes. Los teóricos han expresado diferentes puntos de vista sobre la motivación. ¿Cuáles son las tres corrientes sobresalientes que se identifican?",
        "a": "Visión conductista de la motivación, visión cognitiva de la motivación y visión humanista de la motivación."
    },
    {
        "id": 7,
        "q": "Una docente de un instituto denuncia que su esposo le retiró el acceso a la cuenta bancaria conjunta, le confiscó su salario mensual argumentando que él “administra mejor el dinero” y le impide comprar sus propios materiales de trabajo. ¿Qué tipo de violencia describe esta situación?",
        "a": "Violencia patrimonial y económica."
    },
    {
        "id": 8,
        "q": "La “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo” refiere que un acto de naturaleza intencionada o cualquier esfuerzo que trata de socavar la valoración que tiene la niña, el niño y/o adolescente de sí mismo es:",
        "a": "Violencia psicológica o emocional."
    },
    {
        "id": 9,
        "q": "Según la “Guía para la Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo”, cuando progenitores, encargados de su custodia, guardadores o tutores ponen en peligro la integridad física o psicológica de la niña, niño o adolescente, ¿qué tipo de violencia se considera?",
        "a": "Violencia intrafamiliar contra la niñez y adolescencia."
    },
    {
        "id": 10,
        "q": "Considerando la violencia por acción, la tabla de tipologías de violencia sexual y los delitos contra la libertad sexual, ¿cuáles de los siguientes enunciados corresponden a delitos, según la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”?",
        "a": "Violación, abuso sexual, estupro y trata y tráfico."
    },
    {
        "id": 11,
        "q": "La siguiente definición de conflicto: “El conflicto ocurre cuando las partes se hallan en desacuerdo con respecto a la distribución de recursos materiales o simbólicos y actúan movidas por la incompatibilidad de metas o por una profunda divergencia de intereses.” corresponde a:",
        "a": "Ross"
    },
    {
        "id": 12,
        "q": "Considerando que las emociones inciden positiva o negativamente en el aprendizaje, ¿qué condiciones necesita un estudiante para que el sistema límbico funcione correctamente?",
        "a": "Vínculos afectivos sólidos, sentirse valorado y habitar un entorno que despierte curiosidad genuina."
    },
    {
        "id": 13,
        "q": "Entre las responsabilidades de prevención de la violencia asignadas a directoras y directores de unidades educativas, existe una distinción entre acciones que involucran exclusivamente a actores internos de la comunidad educativa y acciones que necesariamente requieren la intervención de actores externos. ¿Cuál de las siguientes afirmaciones es correcta?",
        "a": "Vigilar el cumplimiento de las rutas es una acción interna, mientras que denunciar ante la autoridad competente cualquier hecho delictivo requiere necesariamente la intervención de actores externos."
    },
    {
        "id": 14,
        "q": "En el diseño del aprendizaje basado en proyectos, la etapa final contempla dos tareas simultáneas e inseparables. ¿Cuáles son esas dos tareas que definen la fase conclusiva de dicho diseño?",
        "a": "Verificar la resolución de la situación problemática planteada y favorecer el desarrollo de competencias en los estudiantes."
    },
    {
        "id": 15,
        "q": "Cuando una entidad pública es condenada judicialmente al pago de daños y perjuicios, ¿cuál es la finalidad específica de la auditoría que debe efectuar o contratar la entidad que ejerce tuición?",
        "a": "Aportar los elementos de juicio necesarios para que el Contralor General de la República pueda establecer si existen suficientes indicios de responsabilidad de uno o más ejecutivos, y así emitir o no el dictamen correspondiente."
    },
    {
        "id": 16,
        "q": "Además de procurar la eficiencia de los sistemas de administración, ¿qué deben hacer los sistemas de Control Interno y de Control Externo Posterior?",
        "a": "Evaluar el resultado de la gestión tomando en cuenta, entre otros criterios, las políticas gubernamentales definidas por los sistemas nacionales de Planificación e Inversión Pública."
    },
    {
        "id": 17,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿cuál es el aspecto clave del aprendizaje activo que los estudiantes deben reconocer?",
        "a": "La comprensión de la información es el aspecto clave; los participantes deben reconocer qué entienden y qué no."
    },
    {
        "id": 18,
        "q": "Desde la neurociencia educativa, cuando la amígdala detecta una amenaza activa una respuesta de lucha liberando cortisol y adrenalina, generando reacciones observables en el estudiante. ¿De qué formas puede manifestarse dicha reacción en el aula?",
        "a": "Ofensiva o defensiva"
    },
    {
        "id": 19,
        "q": "¿Cuál de las siguientes opciones corresponde exactamente a una de las siete claves para la crianza positiva y afectiva en el hogar, según la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”?",
        "a": "Valore y estimule la autoestima y seguridad de sus hijas e hijos."
    },
    {
        "id": 20,
        "q": "En el modelo pedagógico tradicional, ¿cuál de las siguientes describe con mayor precisión la finalidad principal que se asigna al proceso de evaluación del aprendizaje estudiantil?",
        "a": "Medir el nivel de reproducción de contenidos transmitidos, verificar la memorización de información y asignar una calificación que certifica el rendimiento académico."
    },
    {
        "id": 21,
        "q": "¿Cuál es una de las finalidades del Escalafón Nacional del Servicio de Educación?",
        "a": "Valora y recompensa la antigüedad y los méritos de los maestros y funcionarios, y estimula su mejor preparación para el eficiente servicio del sistema educativo."
    },
    {
        "id": 22,
        "q": "Un maestro diseña un aula con normas claras, trato respetuoso y actividades desafiantes pero alcanzables. Desde la neurociencia, esta decisión impacta directamente sobre el cerebro profundo. ¿Por qué el funcionamiento de la amígdala influye de manera determinante en el aprendizaje?",
        "a": "Valora el tono afectivo del entorno y abre o cierra el acceso cortical al procesamiento consciente y a la consolidación de la información."
    },
    {
        "id": 23,
        "q": "Al diseñar una secuencia de enseñanza orientada a que el estudiante resignifique sus paradigmas y desarrolle una interpretación consciente de su entorno, ¿qué tipo de estrategia cumple con mayor precisión la función de mantener la atención del estudiante, detectar información principal y conceptualizar el contenido durante el desarrollo mismo de la instrucción?",
        "a": "Utilizar ilustraciones, analogías o redes semánticas que acompañen el desarrollo del contenido y permitan al estudiante procesar, relacionar y construir significados sobre sus paradigmas y la interpretación consciente de su entorno a lo largo de la instrucción."
    },
    {
        "id": 24,
        "q": "Un ciudadano particular permite que un servidor público registre a su nombre la compra de varios inmuebles y vehículos de lujo con el propósito de ocultar el incremento patrimonial injustificado de dicho funcionario ante las autoridades investigadoras. ¿Qué delito tipificado en la normativa de lucha contra la corrupción describe con mayor precisión la conducta del ciudadano particular?",
        "a": "Favorecimiento al enriquecimiento ilícito."
    },
    {
        "id": 25,
        "q": "Un servidor público omite deliberadamente registrar en su declaración jurada varios inmuebles adquiridos durante el ejercicio de su función pública, con el fin de no revelar su incremento patrimonial ante las autoridades competentes. ¿Qué delito tipificado en la normativa de lucha contra la corrupción describe con mayor precisión esta conducta?",
        "a": "Falsedad en la declaración jurada de bienes y rentas."
    },
    {
        "id": 26,
        "q": "La servidora o el servidor público que diere a los caudales que administra, percibe o custodia, una aplicación distinta de aquella a que estuvieren destinados. ¿A qué delito corresponde esta descripción?",
        "a": "Malversación."
    },
    {
        "id": 27,
        "q": "La servidora o el servidor público que aprovechando del cargo que desempeña se apropiare de dinero, valores o bienes de cuya administración, cobro o custodia se hallare encargado, será sancionado con privación de libertad de cinco a diez años y multa de doscientos a quinientos días. ¿A qué delito corresponde esta descripción?",
        "a": "Peculado."
    },
    {
        "id": 28,
        "q": "El director de un instituto utiliza los vehículos institucionales asignados a su entidad para trasladar a sus familiares a actividades personales durante fines de semana, argumentando que tiene acceso a dichos bienes por el ejercicio de su cargo. ¿Qué delito tipificado en la normativa de lucha contra la corrupción describe con mayor precisión esta conducta?",
        "a": "Uso indebido de bienes y servicios públicos."
    },
    {
        "id": 29,
        "q": "A partir de la tabla de indicadores generales en niñas, niños y adolescentes que han sido víctimas de violencia, planteada en la “Guía para la Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de las siguientes opciones corresponde a signos o indicadores físicos evidentes?",
        "a": "Problemas de salud frecuentes, como dolores abdominales, enuresis o encopresis."
    },
    {
        "id": 30,
        "q": "Los principios psicológicos de enseñanza pueden hacer que la enseñanza sea más eficaz y más eficiente al ayudarnos a crear las condiciones que apoyan el aprendizaje de los estudiantes. Para ello, se aconseja utilizar una variedad de principios. En particular, se puede «individualizar el estilo de enseñanza», porque permite:",
        "a": "Usar una variedad de estilos de enseñanza y ejercicios de aprendizaje para que cada estudiante pueda usar su estilo favorito y para que cada estudiante se vuelva más eficiente en todos los estilos."
    },
    {
        "id": 31,
        "q": "Una maestra de secundaria nota que sus estudiantes tienen distintas formas de aprender y decide adaptar su práctica docente. Según los principios psicológicos de la enseñanza, ¿cuál es el propósito del principio «Individualizar el estilo de enseñanza»?",
        "a": "Aplicar una variedad de estilos de enseñanza y ejercicios de aprendizaje para que cada estudiante pueda usar su estilo favorito y para que cada estudiante se vuelva más eficiente en todos los estilos."
    },
    {
        "id": 32,
        "q": "Un maestro observa que sus grupos no participan espontáneamente, un colega le sugiere usar calificaciones altas como incentivo permanente y otro le recomienda crear condiciones ambientales favorables. Debe decidir qué estrategia aplicar. Considerando el texto de Sáez López, ¿cuál es la decisión más fundamentada y por qué?",
        "a": "Crear condiciones ambientales; los estudiantes necesitan motivación localizada que el docente genera en el entorno."
    },
    {
        "id": 33,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué caracteriza específicamente al aprendizaje multimedia?",
        "a": "Usar estímulos auditivos y visuales simultáneamente para adquirir y procesar nueva información significativa."
    },
    {
        "id": 34,
        "q": "¿Qué distingue al aprendizaje episódico de otros tipos de aprendizaje?",
        "a": "Es un cambio de comportamiento producido como resultado de un evento."
    },
    {
        "id": 35,
        "q": "Perrenoud distingue entre currículum formal y currículum real señalando que no son de la misma naturaleza. ¿Qué diferencia estructural fundamental explica que ambos currículums operen en planos distintos dentro del sistema educativo?",
        "a": "Uno prescribe intenciones culturales codificadas didácticamente, mientras que el otro se constituye de experiencias y actividades concretas generadoras de aprendizaje."
    },
    {
        "id": 36,
        "q": "Según el texto «Estilos de Aprendizaje y Métodos de Enseñanza», ¿cuántos objetivos de aprendizaje recomienda la mejor práctica?",
        "a": "No más de seis por curso."
    },
    {
        "id": 37,
        "q": "Según “Convivencia escolar y resolución pacífica de conflictos”, hacer de la educación (formal e informal) una herramienta de comunicación viva, de aprendizaje solidario, de crítica constructiva y pensamiento abierto, capaz de suscitar transformaciones sociales a través de la participación responsable de una ciudadanía que sabe afrontar los conflictos de manera pacífica, es:",
        "a": "Una de las finalidades de la acción integrada que la paz, los derechos humanos y la democracia tienen en el plano educativo y social."
    },
    {
        "id": 38,
        "q": "Desde la neurociencia del aprendizaje, la depresión y la violencia son clasificadas como emociones de tipo:",
        "a": "Secundarias"
    },
    {
        "id": 39,
        "q": "¿Cuál es una condición institucional indispensable para que la innovación educativa pueda desarrollarse de manera sostenida en los sistemas educativos?",
        "a": "Contar con estructuras flexibles y niveles reales de autonomía en la toma de decisiones a nivel local."
    },
    {
        "id": 40,
        "q": "¿Qué cobertura deben alcanzar los maestros de apoyo o los maestros itinerantes, según el Reglamento para el Fortalecimiento de la Educación Inclusiva en el Sistema Educativo Plurinacional — Modalidad Indirecta?",
        "a": "Lugares de difícil acceso, zonas dispersas, zonas fronterizas y de riberas donde habiten personas con discapacidad, sin límites territoriales o jurisdiccionales."
    },
    {
        "id": 41,
        "q": "Una maestra de Tarija presenta un caso real sobre contaminación del río Bermejo. ¿Qué estilos favorece esta técnica?",
        "a": "El Activo, el Teórico y el Reflexivo incentivando y motivando mediante análisis y síntesis."
    },
    {
        "id": 42,
        "q": "¿A quiénes debe ser extensivo todo servicio de atención para mujeres en situación de violencia, además de la propia mujer?",
        "a": "A las hijas e hijos de la mujer en situación de violencia y a otras personas dependientes en condiciones de riesgo."
    },
    {
        "id": 43,
        "q": "El “Manual de resolución de problemas”, refiere que el Diagnóstico de habilidades se compone de preguntas de opción múltiple cuidadosamente seleccionadas y se puede aplicar dos veces:",
        "a": "una vez al inicio del curso como evaluación “pre” y nuevamente al final de este como evaluación “post”."
    },
    {
        "id": 44,
        "q": "La afirmación de que la especie humana codificó su experiencia primero con la palabra y luego básicamente con la imagen y otros signos, ¿qué sesgo implícito revela?",
        "a": "Una jerarquización que coloca el lenguaje verbal como origen privilegiado de la codificación cultural de la experiencia humana."
    },
    {
        "id": 45,
        "q": "Cuando una institución educativa adapta e incluso recrea la normativa externa a sus características concretas, esto refleja principalmente:",
        "a": "El grado de creatividad, autonomía y madurez alcanzado, dado que el cambio genuino requiere estructuras organizativas más flexibles y abiertas."
    },
    {
        "id": 46,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, la mediación, como explica Lederach (1996), es:",
        "a": "Una técnica muy amplia, que consiste en la intervención de un tercero (un individuo, un equipo, etc.) que facilita el logro de acuerdos en torno a un conflicto."
    },
    {
        "id": 47,
        "q": "El desplazamiento en el modo de formular las finalidades educativas entre el siglo XIX y la actualidad expresa:",
        "a": "Un tránsito del registro ideológico y moral hacia un lenguaje psicopedagógico centrado en el desarrollo y la expansión personal."
    },
    {
        "id": 48,
        "q": "¿Qué se entiende por innovación educativa?",
        "a": "Un cambio que incide en algún aspecto estructural de la educación para mejorar su calidad, pudiendo ocurrir a nivel de aula, de institución educativa y de sistema escolar."
    },
    {
        "id": 49,
        "q": "La cultura escolar, tal como opera en la práctica pedagógica concreta, se caracteriza por:",
        "a": "Una recreación permanente mediante esquemas generadores, pues no preexiste como acervo organizado disponible para el maestro."
    },
    {
        "id": 50,
        "q": "El texto «Diseñar el currículum»¿Cuál es la diferencia fundamental entre ambas respecto al valor que atribuyen al conocimiento?",
        "a": "Una lo vincula a la fiabilidad con que refleja una realidad externa; la otra, a su utilidad para el grupo social que lo produce."
    },
    {
        "id": 51,
        "q": "Los centros educativos, asumidos en su naturaleza de organismos vivos y dinámicos, capaces de cambiar desde su responsabilidad para dar respuestas a las demandas de una sociedad en constante transformación, requieren potenciar su crecimiento entendido este como:",
        "a": "Un ejercicio constante de auto-revisión que sea capaz de diagnosticar los aspectos susceptibles de mejora y su priorización."
    },
    {
        "id": 52,
        "q": "La afirmación de que en sociedades medianamente complejas el ámbito de la experiencia personal directa es muy reducido, ¿qué estereotipo cultural presupone?",
        "a": "Una perspectiva urbana y letrada que equipara complejidad social con distanciamiento de la experiencia directa y cotidiana."
    },
    {
        "id": 53,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” señala que el aprendizaje que sostiene la Cultura de Paz no puede abordarse desde una racionalidad que niegue los conflictos que se dan en el seno de la organización escolar, controlando su aparición bajo los principios del control normativo, sino que se precisa la adopción de:",
        "a": "Una perspectiva crítica que los considere como instrumentos esenciales para la transformación de las estructuras educativas."
    },
    {
        "id": 54,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” indica que la calidad de las relaciones entre la dirección y el profesorado se traduce en:",
        "a": "Una estrecha y recíproca colaboración, aumentando las oportunidades para la investigación y la innovación educativas."
    },
    {
        "id": 55,
        "q": "Cuando el currículum formal se describe como una «trama» y la enseñanza como un «tejido», la metáfora implica que el paso de uno al otro requiere fundamentalmente:",
        "a": "Un trabajo permanente de reinvención, explicitación, ilustración y concreción por parte del docente."
    },
    {
        "id": 56,
        "q": "De acuerdo a la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, cuando se sospeche de abuso sexual, la conversación deberá ser realizada por:",
        "a": "Una maestra en un ambiente tranquilo y con privacidad y, si el caso lo amerita, también por un maestro entrenado, amable y con actitud abierta."
    },
    {
        "id": 57,
        "q": "En el marco de los derechos de las personas con discapacidad, la protección de la familia hacia la persona con discapacidad en ningún caso podrá ser entendida como...",
        "a": "Una limitación al ejercicio de sus derechos y deberes de las personas con discapacidad"
    },
    {
        "id": 58,
        "q": "Para construir una representación realista del currículum real, Perrenoud propone abandonar la oposición entre currículum manifiesto y oculto en favor de:",
        "a": "Una gradación continua dentro del currículum real, que va desde lo más patente hasta lo más oculto sin solución de continuidad."
    },
    {
        "id": 59,
        "q": "Según el Reglamento para el Fortalecimiento de Educación Inclusiva en el SEP – Modalidad Indirecta, el personal administrativo y de servicio, al igual que el personal docente, deberán capacitarse de manera progresiva con conocimientos adecuados que le permitan apoyar a estudiantes con discapacidad, dificultades en el aprendizaje o estudiantes con talento extraordinario, lo cual garantizará:",
        "a": "Un trato de respeto con calidez."
    },
    {
        "id": 60,
        "q": "De acuerdo con el planteamiento sobre innovación educativa recogido en la bibliografía de referencia, se afirma que la verdadera innovación no consiste en la mera incorporación de cambios progresivos, sino en la implantación de un nuevo «paradigma educativo» que contemple la innovación permanente como elemento constitutivo del hecho educativo. ¿Qué criterio permite distinguir con mayor precisión una innovación paradigmática de una innovación progresiva?",
        "a": "La innovación progresiva introduce mejoras puntuales sobre estructuras preexistentes sin alterar la concepción de fondo del hecho educativo. La innovación paradigmática transforma profundamente la lógica formativa, ajustándola a la nueva realidad social. Su rasgo distintivo es incorporar el cambio permanente como elemento constitutivo del proceso educativo."
    },
    {
        "id": 61,
        "q": "Según el “Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP – Modalidad Indirecta”, realizar informes trimestrales sobre el desarrollo educativo, avances y logros del estudiante y presentarlos a la dirección educativa, es:",
        "a": "Una función específica del maestro de apoyo a estudiantes con dificultades en el aprendizaje."
    },
    {
        "id": 62,
        "q": "Cuando el currículum transita por distintas instancias de decisión, su contenido no permanece intacto. ¿Qué proceso caracteriza estructuralmente ese tránsito?",
        "a": "Una progresiva resignificación en la que cada instancia filtra y transforma lo establecido por la anterior."
    },
    {
        "id": 63,
        "q": "¿Qué relación establece Feito entre la calidad de la formación del profesorado y el grado de autonomía curricular que puede concederse a los centros educativos?",
        "a": "A mayor formación docente, menor necesidad de prescripciones curriculares centralizadas, lo que permite ampliar la autonomía de los centros."
    },
    {
        "id": 64,
        "q": "Conforme al Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP – Modalidad Indirecta, una vez que la maestra o maestro de aula de Educación Regular observe señales de alerta de posibles dificultades en el aprendizaje en alguno de sus estudiantes, deberá aplicar:",
        "a": "La Guía de Observación - Detección de Signos de Riesgo de Dificultades en el Aprendizaje."
    },
    {
        "id": 65,
        "q": "La innovación en el ámbito escolar es entendida como:",
        "a": "No es una simple mejora sino una transformación; una ruptura con los esquemas y la cultura vigentes en las escuelas."
    },
    {
        "id": 66,
        "q": "¿Cuál es la estructura correcta de las escalas jerárquicas y de promociones establecidas para el personal del magisterio boliviano?",
        "a": "Una escala jerárquica para ascensos docentes, una escala jerárquica paralela para ascensos administrativos y una escala de cinco promociones de categoría para recompensar el tiempo de servicio del personal docente y administrativo."
    },
    {
        "id": 67,
        "q": "La caracterización de la imagen como una llamada de atención para relajarse del arduo proceso de descodificar la escritura, ¿qué sesgo revela?",
        "a": "Una subordinación de lo visual a lo verbal que niega a la imagen su capacidad como sistema autónomo de significación."
    },
    {
        "id": 68,
        "q": "La afirmación de que la experiencia directa y personal genera un conocimiento seguro e imborrable revela un sesgo epistemológico implícito. ¿Cuál es?",
        "a": "Una jerarquización implícita de las fuentes del conocimiento que subordina la mediación simbólica a la vivencia sensorial."
    },
    {
        "id": 69,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿cómo es concebida la no- violencia?",
        "a": "Un principio en virtud del cual se regula toda forma de violencia sea personal, social o política, para buscar soluciones positivas."
    },
    {
        "id": 70,
        "q": "De acuerdo al Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP – Modalidad Indirecta, “Efectivizar la Atención Educativa de estudiantes con discapacidad, dificultades en el aprendizaje o talento extraordinario con calidad y calidez en los diferentes años de escolaridad, niveles y modalidades del Sistema Educativo Plurinacional”, corresponde a:",
        "a": "Una finalidad del Reglamento"
    },
    {
        "id": 71,
        "q": "Las dinámicas de intercambio y trabajo compartido generadas por la innovación educativa de la primera década del siglo XXI, como las comunidades educativas y redes pedagógicas, ¿qué dimensión de la innovación expresan respecto al cambio “desde abajo”?",
        "a": "El protagonismo de las instituciones educativas y docentes en el cambio ‘desde abajo’, generando dinámicas de intercambio y trabajo compartido como comunidades educativas o redes pedagógicas."
    },
    {
        "id": 72,
        "q": "Una maestra decide presentar los contenidos de su asignatura como verdades históricamente construidas en lugar de verdades absolutas. Según el texto «Diseñar el currículum», ¿qué tipo de decisión está tomando?",
        "a": "Una decisión socioideológica, pues la forma de presentar el conocimiento implica opciones valorativas."
    },
    {
        "id": 73,
        "q": "¿Qué tipo de documento recibe la Dirección Departamental de Educación correspondiente a la jurisdicción del instituto solicitante, en el marco de la Documentación y Archivo de la Resolución Ministerial emitida en su favor?",
        "a": "Una copia legalizada de la Resolución Ministerial emitida en favor del instituto."
    },
    {
        "id": 74,
        "q": "La tensión entre diferenciación individualizadora y socialización homogeneizadora en la educación se presenta como:",
        "a": "Una contradicción constitutiva de la educación que exige equilibrios permanentemente inestables entre ambos polos."
    },
    {
        "id": 75,
        "q": "¿Cómo define Deutsch el conflicto?",
        "a": "Un conflicto existe cuando se da cualquier tipo de actividad incompatible."
    },
    {
        "id": 76,
        "q": "Según texto de Innovación Educativa de la UNESCO, la afirmación de que la innovación está fundamentada sobre el aprendizaje porque éste se encuentra ligado a la acción transformadora del mundo, remite específicamente a:",
        "a": "Una concepción en la que conocer implica intervenir críticamente en la realidad, de modo que la renovación pedagógica no se reduce a la mejora técnica sino que orienta la práctica hacia la transformación del entorno."
    },
    {
        "id": 77,
        "q": "¿Qué paradoja implícita encierra el hecho de que un texto escolar dedique dos tercios a la lingüística y solo un tercio a toda la literatura en castellano de los siglos XIX y XX?",
        "a": "Una asignatura cuyo fin declarado es formar lectores sacrifica la experiencia literaria en favor del análisis formal de la lengua."
    },
    {
        "id": 78,
        "q": "De acuerdo con los aspectos fundamentales de la innovación educativa, ¿qué establece la dinámica de acciones con aprendizajes que construye la innovación?",
        "a": "Una sistematización reflexiva sobre los propios errores que consolida en el sujeto la capacidad de resignificar su experiencia y sostener procesos de transformación desde adentro."
    },
    {
        "id": 79,
        "q": "De acuerdo con la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, la violencia por omisión y supresión presenta mayores dificultades para su identificación, ya que representa:",
        "a": "Un tipo de maltrato pasivo."
    },
    {
        "id": 80,
        "q": "La “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo” refiere que la valoración del riesgo es importante para la intervención en un posible caso de violencia y estará definida de acuerdo a:",
        "a": "Un riesgo bajo, medio o alto."
    },
    {
        "id": 81,
        "q": "Para llevar a cabo efectivamente este “Manual de resolución de problemas”, ¿implica?",
        "a": "Un trabajo continuo para ampliar nuestra propia capacidad de participación, y así poder identificar cuando las y los estudiantes viven circunstancias adversas, escuchar al grupo, conectar con ellas y ellos, adaptar estas lecciones a su realidad y evaluar cada implementación para mejorarla."
    },
    {
        "id": 82,
        "q": "Según Kilpatrick, ¿cómo se define un proyecto didáctico?",
        "a": "Una actividad intencional realizada con compromiso y desarrollada colectivamente."
    },
    {
        "id": 83,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que los jóvenes deben saber que el conflicto es:",
        "a": "Un aspecto más o menos permanente de sus vidas y un proceso interactivo que se da en un contexto determinado."
    },
    {
        "id": 84,
        "q": "¿Qué instrumento financiero deben constituir los Gobiernos Autónomos Municipales para administrar las multas destinadas a los Servicios de Atención Integral?",
        "a": "Un fondo y una cuenta fiscal exclusiva para este propósito."
    },
    {
        "id": 85,
        "q": "Según lo descrito en el texto “Convivencia escolar y resolución pacífica de conflictos”, en la actualidad, la Cultura de Paz supone:",
        "a": "Una nueva perspectiva socio-crítica de la organización escolar y una nueva forma de abordar los conflictos que se producen en el seno de los centros educativos."
    },
    {
        "id": 86,
        "q": "La siguiente afirmación: “Promover la matriculación e inscripción sin discriminación alguna en las Unidades, Centros e Instituciones Educativas de los Subsistemas de Educación Regular, Educación Superior y el Ámbito de Educación Alternativa, fiscales, de convenio o privadas” conforme al Reglamento para el funcionamiento de la Educación Inclusiva en el Sistema Educativo Plurinacional – Modalidad Indirecta corresponde a:",
        "a": "Una finalidad."
    },
    {
        "id": 87,
        "q": "¿Qué se otorga a las y los estudiantes inscritos al ser registrados en el Sistema de Información de Institutos, para su seguimiento académico?",
        "a": "Un número de registro RUDE"
    },
    {
        "id": 88,
        "q": "Según el texto de Innovación Educativa, ¿cuál de las siguientes afirmaciones describe con mayor precisión la concepción de innovación como capacidad humana?",
        "a": "Una facultad intrínseca que permite transformar, crear y recrear el entorno, orientando los cambios intencionales hacia la mejora de los procesos y resultados formativos."
    },
    {
        "id": 89,
        "q": "De acuerdo con el documento “Convivencia escolar y resolución pacífica de conflictos”, ¿qué ofrece educar en y para el conflicto?",
        "a": "Una oportunidad sin igual para renovar las prácticas educativas, facilitando el aprendizaje y la construcción colectiva de valores socialmente significativos y promoviendo un tipo de comportamiento individual, colectivo e institucional basado en la interdependencia y en la cooperación."
    },
    {
        "id": 90,
        "q": "Cuando un alumno aprende a vivir en un espacio superpoblado, a tolerar interrupciones y a diferir la satisfacción de sus deseos, ¿qué tipo de aprendizaje está adquiriendo fundamentalmente?",
        "a": "Un hábito incorporado por las rutinas escolares, al margen de cualquier objetivo declarado."
    },
    {
        "id": 91,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que en la actualidad, la conflictividad escolar se ha convertido en:",
        "a": "Una de las preocupaciones mayores de todas las sociedades"
    },
    {
        "id": 92,
        "q": "¿Cuál de las siguientes situaciones ejemplifica un aprendizaje que, según Eggleston, el funcionamiento escolar produce regularmente al margen de los objetivos oficiales?",
        "a": "Un estudiante que aprende a aplazar el deseo de hablar o moverse al vivir permanentemente bajo la mirada de otros en un espacio compartido."
    },
    {
        "id": 93,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que la calidad de la convivencia educativa es un elemento decisivo en la configuración de la convivencia social, pues la comunidad educativa constituye:",
        "a": "Un espacio único y privilegiado de formación y de ejercicio de la ciudadanía democrática."
    },
    {
        "id": 94,
        "q": "¿Cuál de las siguientes situaciones ejemplifica lo que Boudon denomina como efecto perverso en el contexto del currículum real?",
        "a": "Una actividad diseñada para fomentar la cooperación que termina generando competencia entre los alumnos."
    },
    {
        "id": 95,
        "q": "¿Qué documento recibe el propietario o representante legal del instituto como resultado del proceso de autorización de funcionamiento, en materia de Documentación y Archivo?",
        "a": "Un ejemplar original de la Resolución Ministerial emitida en favor del instituto."
    },
    {
        "id": 96,
        "q": "¿Cuál de las siguientes situaciones constituye una falta muy grave?",
        "a": "Un docente expresa abiertamente, su inclinación partidaria hacia sus estudiantes con la intención de inducirlos a que adopten su misma ideología política."
    },
    {
        "id": 97,
        "q": "Una maestra de aula que atiende a estudiantes con discapacidad intelectual y autismo “desarrolla la detección temprana de señales de alerta en el grado y nivel de la Unidad Educativa del nivel de Educación Inicial en Familia Comunitaria o Primaria Comunitaria Vocacional del Subsistema de Educación Regular”, según el Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP, cumple:",
        "a": "Una función."
    },
    {
        "id": 98,
        "q": "Según Perrenoud, hacer visible lo que estaba oculto en el currículum no conduce a su eliminación sino a:",
        "a": "Un debate y eventual polémica sobre su legitimidad respecto a las nuevas formulaciones de los objetivos educativos."
    },
    {
        "id": 99,
        "q": "¿Qué desafíos presenta la economía mundial basada en la tecnología para los países a medida que sus economías nacionales se tornan más dependientes del ámbito internacional?",
        "a": "Un creciente intercambio de información, tecnología, productos, capital e individuos entre las naciones."
    },
    {
        "id": 100,
        "q": "En «El currículum real y el trabajo escolar», el currículum formal es una imagen de la cultura digna de transmitirse, mientras que el currículum real es...",
        "a": "un conjunto de experiencias, tareas y actividades que originan o deben originar aprendizajes."
    },
    {
        "id": 101,
        "q": "Según Sacristán, ¿qué representó el currículo para la crítica progresista frente al conocimiento academicista asentado como saber escolar?",
        "a": "Un espacio de alternativas centradas en el niño y su experiencia frente a contenidos inadecuados."
    },
    {
        "id": 102,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, en los programas de mediación entre iguales, los mediadores siguen un proceso simple. En primer lugar, ¿qué se trata de alcanzar?",
        "a": "Un acuerdo para que los alumnos implicados acepten la participación de una persona neutral (mediador)."
    },
    {
        "id": 103,
        "q": "El practicum se presenta como un componente curricular, como un complejo espacio de aprendizaje y como experiencia personal. Desde esta triple dimensión, ¿cuál de las siguientes afirmaciones caracteriza correctamente su naturaleza en el marco de la formación docente?",
        "a": "Un elemento que articula simultáneamente la estructura del plan de estudios, la construcción situada del aprendizaje y la vivencia subjetiva del futuro docente en su proceso de formación."
    },
    {
        "id": 104,
        "q": "Un buen reglamento escolar disminuye los problemas de comportamiento y de indisciplina, en beneficio de:",
        "a": "Un clima en el que predomine el orden y la seguridad indispensables para aprender."
    },
    {
        "id": 105,
        "q": "¿Qué elementos deben contener obligatoriamente los informes de Inspección Ocular de Evaluación de Infraestructura, Mobiliario y Equipamiento de los Institutos?",
        "a": "Un registro fotográfico y la descripción de las condiciones de funcionamiento, conforme a los lineamientos establecidos por el Ministerio de Educación."
    },
    {
        "id": 106,
        "q": "Una directora de unidad educativa, al inicio de la gestión escolar, realiza las siguientes cuatro acciones: (1) instala cámaras de seguridad en pasillos y baños, (2) autoriza a un maestro a comunicarse por WhatsApp con estudiantes siempre que copie a los padres en los mensajes, (3) elabora junto a maestros y estudiantes el Plan de Convivencia Armónica, y (4) prohíbe que los maestros realicen actividades con estudiantes fuera del horario de la jornada educativa. ¿Cuántas de estas acciones son CORRECTAS según las medidas de prevención establecidas para directivos?",
        "a": "Tres acciones son correctas: instalar cámaras, elaborar el Plan de Convivencia Armónica y prohibir actividades fuera del horario; la acción incorrecta es autorizar la comunicación por WhatsApp aunque se copie a los padres."
    },
    {
        "id": 107,
        "q": "Según la neurociencia, del total de treinta mil genes del genoma humano, ¿cuántos están encargados de modelar el cerebro?",
        "a": "Trece mil."
    },
    {
        "id": 108,
        "q": "Un director encarga a su equipo técnico la selección de contenidos escolares aplicando los criterios epistemológico, psicológico y pedagógico como una lista de verificación. Según el texto «Diseñar el currículum», ¿qué error de fondo comete?",
        "a": "Trata la selección de contenidos como cuestión técnica, cuando es una opción cultural."
    },
    {
        "id": 109,
        "q": "¿Cuál de las siguientes clasificaciones distribuye las consecuencias a mediano plazo de la agresión física entre las categorías emocional, cognitiva y conductual?",
        "a": "Trastornos del sueño: emocional — Síntomas relacionados a trastornos del aprendizaje: cognitiva — Consumo de alcohol y otras drogas: conductual."
    },
    {
        "id": 110,
        "q": "Considerando los indicadores generales en niñas, niños y adolescentes víctimas de violencia, ¿cuál de las siguientes opciones corresponde a una de las conductas que se identifican en la institución educativa?",
        "a": "Cautela con respecto al contacto físico con personas adultas."
    },
    {
        "id": 111,
        "q": "¿Cuál de las siguientes opciones corresponde a una consecuencia cognitiva a largo plazo en niñas, niños o adolescentes víctimas de violencia?",
        "a": "Trastornos del aprendizaje (escritura, lectura, cálculo)."
    },
    {
        "id": 112,
        "q": "Según «Diseñar el currículum», ¿qué ocurre cuando los niveles de los estudiantes actúan como freno para trabajar ciertos contenidos?",
        "a": "Constituyen a la vez un reto para adecuarlos sin que se acumulen lagunas básicas en el estudiante."
    },
    {
        "id": 113,
        "q": "En una clase, los estudiantes trabajan con lentitud sostenida durante varias semanas, lo que obliga al maestro a dejar sin cubrir varios temas del programa y a profundizar otros no previstos. ¿Qué concepto explica ese resultado según Perrenoud?",
        "a": "Currículum real negociado, porque los estudiantes inciden en su contenido a través del ritmo de trabajo."
    },
    {
        "id": 114,
        "q": "Sobre la Innovación Educativa, ¿hacia qué propósito orienta su acción la educación en el contexto de la sociedad de la información?",
        "a": "Posibilitar que el estudiante sea capaz de construir sus propios conocimientos a partir de sus conocimientos previos, de las experiencias vividas directa o indirectamente a través de su familia o grupo social, y de las informaciones a las que puede acceder."
    },
    {
        "id": 115,
        "q": "Desde la concepción tradicional del proceso de aprendizaje, ¿cuál de las siguientes caracteriza con mayor precisión el rol que desempeña el docente en la gestión del conocimiento dentro del aula?",
        "a": "Transmisor central del saber, poseedor exclusivo del conocimiento y responsable de la instrucción directa hacia un estudiante receptor pasivo."
    },
    {
        "id": 116,
        "q": "Según Martinic en el texto de Innovación Educativa, la alteración de sentidos en el ámbito educativo involucra necesariamente cambios en las personas, ¿qué elementos comprenden dichos cambios y cuál es el rol que se destaca en los docentes dentro de este proceso?",
        "a": "Transformaciones en actitudes, creencias, concepciones, prácticas y vínculos interpersonales; el maestro es autor de la renovación, no ejecutor de un libreto predefinido."
    },
    {
        "id": 117,
        "q": "Desde la perspectiva de la innovación educativa, se afirma que esta “produce modificaciones materiales y simbólicas, y por ello tiene una relación profunda con la tradición”, ¿qué implica esta afirmación respecto a la naturaleza de la innovación?",
        "a": "Transformación de lo material y simbólico, recreando y resignificando la tradición."
    },
    {
        "id": 118,
        "q": "Las entidades públicas deben emplear los bienes y servicios contratados en los fines previstos en la Programación de Operaciones y, adicionalmente, están obligadas a:",
        "a": "Realizar el mantenimiento preventivo y la salvaguardia de los activos, identificando a los responsables de su manejo."
    },
    {
        "id": 119,
        "q": "Según los principios del neuroaprendizaje aplicados al aula, ¿cuál es el propósito neurológico de repetir un contenido con variantes novedosas durante el proceso de enseñanza y aprendizaje?",
        "a": "Transferir la memoria de trabajo a largo plazo."
    },
    {
        "id": 120,
        "q": "¿Qué conducta configura el delito de sustracción de utilidades de actividades económicas familiares?",
        "a": "Disponer unilateralmente de las ganancias derivadas de una actividad económica familiar para beneficio personal exclusivo."
    },
    {
        "id": 121,
        "q": "¿Qué riesgo específico genera el uso excesivo de recompensas según la visión conductista?",
        "a": "Transferencia limitada, dependencia de los maestros y socavar la motivación intrínseca."
    },
    {
        "id": 122,
        "q": "La propuesta de implementar el aprendizaje orientado a proyectos como estrategia se enmarca en una estructura curricular que se caracteriza por ser:",
        "a": "Innovadora, flexible, centrada en el estudiante y basada en competencias."
    },
    {
        "id": 123,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje Las emociones y el aprendizaje” ¿Qué herramientas se necesitan para que ocurran los aprendizajes estratégicos?",
        "a": "Marilina Rotger”"
    },
    {
        "id": 124,
        "q": "La siguiente definición de conflicto: “Los conflictos son situaciones en las que dos o más personas entran en oposición o desacuerdo porque sus posiciones, intereses, necesidades, deseos o valores son incompatibles, o son percibidos como incompatibles, donde juegan un papel muy importante las emociones y sentimientos, y donde la relación entre las partes en conflicto puede salir robustecida o deteriorada en función de cómo sea el proceso de resolución del conflicto.” Corresponde a:",
        "a": "Torrego"
    },
    {
        "id": 125,
        "q": "¿Qué disposiciones debe aplicar la Dirección Administrativa respecto de la articulación con el sector productivo?",
        "a": "Toda disposición emitida por la DGESTTLA del Ministerio de Educación."
    },
    {
        "id": 126,
        "q": "Según el enfoque de innovación educativa promovido por los organismos internacionales de educación, ¿cuál es el rol que cumplen las estructuras y procesos micropolíticos en los centros escolares?",
        "a": "Son determinantes tanto para impulsar el cambio y la innovación como para garantizar la estabilidad y el mantenimiento institucional de los centros escolares."
    },
    {
        "id": 127,
        "q": "¿Hasta cuándo tiene vigencia la Resolución Ministerial de autorización de Apertura y Funcionamiento de un Instituto de carácter fiscal y de convenio para la sede central o subsede?",
        "a": "Tiene vigencia hasta la emisión de una disposición normativa específica que la revoque, quedando sujeto a supervisión y seguimiento por las instancias correspondientes."
    },
    {
        "id": 128,
        "q": "En el campo de la Innovación Educativa, se reconoce que la naturaleza misma de la educación y la escuela otorga a la innovación un carácter particular, ¿cuál de los siguientes enunciados describe con mayor precisión dicho carácter?",
        "a": "Tiene un rasgo sistémico, puesto que la interdependencia del hecho formativo implica que cualquier modificación en un componente exige repensar el orden institucional, pedagógico y cultural."
    },
    {
        "id": 129,
        "q": "¿Cuál de las siguientes afirmaciones describe correctamente las características de la Subsede de un Centro de Capacitación Artística o Instituto de Formación Artística?",
        "a": "Depende administrativa y académicamente de la Sede Central, cuenta con organigrama independiente y su máxima autoridad es el Director Académico."
    },
    {
        "id": 130,
        "q": "Los estilos de aprendizaje son diversos enfoques o maneras de aprender que implican métodos educativos. Los docentes deben evaluar los estilos de aprendizaje de sus estudiantes y adaptar los métodos en el aula para que se ajusten mejor al estilo de aprendizaje de cada estudiante. ¿Cuál es el estilo de los estudiantes reflexivos?",
        "a": "Prefieren pensar en ello en silencio primero, piensan en primer lugar, prefieren trabajar solos."
    },
    {
        "id": 131,
        "q": "El conductismo se centra solo en los aspectos objetivamente observables del aprendizaje e interpreta el aprendizaje en términos de conexiones o asociación entre estímulo y respuesta. ¿Qué teorías se pueden incluir bajo esta categoría?",
        "a": "Teoría sobre el ensayo y error (Thorndike), las teorías clásicas (Pavlov) y las teorías de condicionamiento operante (Skinner)."
    },
    {
        "id": 132,
        "q": "Este tipo de aprendizaje «puede proporcionar dimensiones y oportunidades adicionales para los alumnos además de su aprendizaje a través de la experiencia personal y la participación directa en las consecuencias ambientales». ¿A qué teoría del aprendizaje se adecúa la presente descripción?",
        "a": "Teoría Social de Aprendizaje de Bandura, que enfatiza el poder del aprendizaje observacional como fuente de aprendizaje complementaria a la experiencia personal directa y a la participación en las consecuencias ambientales."
    },
    {
        "id": 133,
        "q": "La educación es central a la formación de una cultura de innovación, donde lo importante es hacer que esta actividad se convierta en una cultura y no solo una moda, ¿qué implica ello para evitar caer en la trampa del cambio por el cambio y el rechazo al pasado sin su conocimiento?",
        "a": "Tener una actitud crítica que debe ser trabajada desde unos principios en los cuales se enmarca la innovación."
    },
    {
        "id": 134,
        "q": "Según el Reglamento del Escalafón Nacional del Servicio de Educación, ¿cuál es el requisito de edad establecido para ingresar al sector docente y ejercer el magisterio fiscal?",
        "a": "Tener no menos de 18 ni más de 50 años de edad"
    },
    {
        "id": 135,
        "q": "Según el “Manual de resolución de problemas”, la resolución de problemas es una habilidad esencial para superar obstáculos en la vida diaria. Entre los beneficios de desarrollar esta habilidad se incluyen: Reducción del estrés: ¿en qué consiste este beneficio?",
        "a": "Tener estrategias claras para enfrentar problemas reduce la ansiedad y el estrés."
    },
    {
        "id": 136,
        "q": "A partir de las señales y consecuencias de la violencia a largo plazo descritas en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de los siguientes enunciados corresponde al área emocional en la niñez?",
        "a": "Miedo e inseguridad extrema ante situaciones cotidianas consideradas de bajo riesgo."
    },
    {
        "id": 137,
        "q": "Según el texto Innovación Educativa, las investigaciones educativas revelan que el “estado” político de una organización escolar está constituido por:",
        "a": "Tanto los procesos convergentes y divergentes como las estructuras que configuran las relaciones de poder e interacción al interior de la institución."
    },
    {
        "id": 138,
        "q": "¿Cuál de las siguientes opciones presenta correctamente la tipificación de sanciones correspondiente a cada categoría de falta grave del Reglamento de Faltas y Sanciones?",
        "a": "Suspensión sin goce de haber de 15 a 60 días, postergación de ascenso por un año y descenso a cargo inferior."
    },
    {
        "id": 139,
        "q": "¿Qué sanciones corresponden cuando en un proceso disciplinario se comprueba que hubo deserción elevada de los alumnos causada por la ineptitud o malos tratos del maestro?",
        "a": "Suspensión de funciones sin goce de haber de quince (15) a sesenta (60) días, postergación de ascenso por un (1) año y descenso a un cargo inferior"
    },
    {
        "id": 140,
        "q": "Un maestro nota que ciertos estudiantes manifiestan malestar reiterado sin origen físico, vinculado a situaciones familiares o sociales. ¿Para qué sirve el «botiquín de primeros auxilios emocionales» en este contexto?",
        "a": "Registrar quiénes expresan reiteradamente dolencias emocionales."
    },
    {
        "id": 141,
        "q": "¿Qué efecto tiene el Control Posterior Interno o Externo sobre los actos administrativos que pusieron término a los reclamos de los particulares?",
        "a": "No modificará los actos administrativos que hubieren puesto término a los reclamos de los particulares, y se concretará a determinar la responsabilidad de la autoridad que los autorizó expresamente o por omisión, si la hubiere."
    },
    {
        "id": 142,
        "q": "¿Cuáles son los tres elementos que el docente debe transformar para que su compromiso incida genuinamente en los procesos de innovación educativa?",
        "a": "Sus creencias, sus concepciones y sus prácticas pedagógicas dentro del proceso innovador educativo."
    },
    {
        "id": 143,
        "q": "Según el Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP – Modalidad Indirecta, las instituciones educativas del Sistema Educativo Plurinacional inscribirán a todas las niñas, niños, adolescentes, jóvenes y adultos, independientemente de:",
        "a": "Sus condiciones del neurodesarrollo, personales, culturales, económicas y/o sociales conforme a normativa."
    },
    {
        "id": 144,
        "q": "¿A partir de qué modelo surgió la concepción imperante sobre el proceso de aprendizaje a comienzos del siglo XX y a qué propósito sirvió?",
        "a": "Surgió a partir del modelo industrial de la educación y sirvió a los propósitos de proveer a grandes cantidades de individuos con las habilidades necesarias para puestos laborales que requerían poca calificación en el área de la industria y la agricultura."
    },
    {
        "id": 145,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿cuál es la característica principal que distingue a la impronta de otros tipos de aprendizaje?",
        "a": "Ocurre en una edad o etapa particular de la vida, siendo independiente de las consecuencias del comportamiento."
    },
    {
        "id": 146,
        "q": "Según Baldridge (1970) en el texto de Innovación Educativa, ¿qué característica define al cambio en las organizaciones escolares tradicionales y lo distingue de un proceso de innovación genuinamente participativo?",
        "a": "Opera como una imposición jerárquica descendente mediante la cual las coaliciones dominantes articulan sus valores en la organización."
    },
    {
        "id": 147,
        "q": "La noción de currículum oculto emerge vinculada a una visión racionalista de la escuela porque:",
        "a": "Nombra lo no-dicho que escapa a la formulación precisa exigida por constructores de currícula y taxonomías de objetivos."
    },
    {
        "id": 148,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje. Las emociones y el aprendizaje”¿Cuáles son los tips que favorecen el equilibrio del sistema límbico mediante la modulación de neurotransmisores como la serotonina y la dopamina?",
        "a": "Rodearte de olores agradables y evitar el pensamiento rumiante."
    },
    {
        "id": 149,
        "q": "De acuerdo con la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cómo se puede clasificar la violencia según el tipo de comportamiento o expresión?",
        "a": "Acción, omisión y supresión."
    },
    {
        "id": 150,
        "q": "¿Qué condiciones caracterizan al trabajo colaborativo como estrategia para sostener la innovación educativa en una institución?",
        "a": "Implica un nivel de igualdad en la relación entre los involucrados y una complementariedad de enfoques, logrando una definición compartida de los problemas en la que todos puedan aportar su perspectiva y análisis."
    },
    {
        "id": 151,
        "q": "Según el texto Innovación Educativa, ¿qué rasgos definen al trabajo mancomunado como mecanismo para mantener vivos los procesos de transformación pedagógica en un centro formativo?",
        "a": "Supone paridad en la relación entre los participantes y complementariedad de perspectivas, logrando una identificación compartida de desafíos donde cada actor aporta su visión."
    },
    {
        "id": 152,
        "q": "Según José Manuel Sáez López, ¿qué característica esencial distingue al aprendizaje como proceso cognitivo?",
        "a": "Supone asimilar información con un cambio resultante en el comportamiento relativamente permanente."
    },
    {
        "id": 153,
        "q": "Según el modelo del «Cerebro triuno», ¿cuál de los instintos del cerebro reptil establece que a mayor poder corresponde mayor posición dentro del grupo social?",
        "a": "Jerarquías sociales."
    },
    {
        "id": 154,
        "q": "¿Cuáles son los objetivos generales del Sistema de Control Gubernamental Interno de cada entidad pública?",
        "a": "Promover el acatamiento de normas legales, proteger recursos contra irregularidades, asegurar información útil y oportuna, promover la eficiencia de operaciones y lograr el cumplimiento de planes, programas y presupuestos."
    },
    {
        "id": 155,
        "q": "Para el funcionamiento anual de los sistemas de Programación de Operaciones, Organización Administrativa, Presupuesto y Tesorería y Crédito Público, ¿qué deben hacer los sistemas nacionales de Planificación e Inversión Pública?",
        "a": "Compatibilizar e integrar los objetivos y planes estratégicos de cada entidad y los proyectos de inversión pública con los planes de mediano y largo plazo, la política monetaria, los ingresos alcanzados y el financiamiento disponible."
    },
    {
        "id": 156,
        "q": "¿Cuál de las siguientes es una responsabilidad de los directores de Instituciones de Educación Regular, Alternativa y Superior en el marco de la educación inclusiva?",
        "a": "Proporcionar las planificaciones curriculares e institucionales a los maestros de apoyo cuando los requiera con fines de Apoyo Técnico Pedagógico."
    },
    {
        "id": 157,
        "q": "¿Qué tipo de sujetos busca construir la innovación educativa cuando se orienta con un sentido crítico?",
        "a": "Sujetos sociales e históricos capaces de realizar la innovación con un sentido crítico y transformador del mundo."
    },
    {
        "id": 158,
        "q": "Según el autor Berkowitz (1996), mencionado en el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿cuál de los siguientes factores es un precursor de violencia en la etapa adulta?",
        "a": "Sufrir o estar expuesto a abuso crónico en la niñez."
    },
    {
        "id": 159,
        "q": "De acuerdo con la “Guía de Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo”, la violencia impacta directamente en las posibilidades de desarrollo de las y los estudiantes y supone un mayor riesgo de:",
        "a": "Enfrentar problemas sociales, emocionales y cognitivos de por vida."
    },
    {
        "id": 160,
        "q": "De acuerdo con el “Manual de resolución de problemas”, analizar la importancia de una consecuencia es algo personal o propio de un grupo involucrado. La importancia de una solución es entonces:",
        "a": "Subjetiva, ya que depende de nuestros valores y necesidades, así como de las opiniones de aquellas personas que consideramos relevantes."
    },
    {
        "id": 161,
        "q": "“Viabilizar espacios de coordinación con maestras, maestros y comunidad educativa respecto a los procesos de apoyo educativo”, es una responsabilidad que corresponde a:",
        "a": "Directores de instituciones educativas."
    },
    {
        "id": 162,
        "q": "¿Qué tipo de memoria guarda esquemas de procedimientos que se realizan automáticamente sin intervención de la conciencia?",
        "a": "Implícita."
    },
    {
        "id": 163,
        "q": "¿Cuál de las siguientes descripciones se ajusta a una limitación de los libros de texto según Sacristán?",
        "a": "Su dominio del espacio y tiempo escolar reduce drásticamente las posibilidades de formas, funciones y materiales de lectura."
    },
    {
        "id": 164,
        "q": "Según Perrenoud ¿Qué distingue, estructuralmente, el trabajo escolar de cualquier otro tipo de trabajo?",
        "a": "Su carácter no retribuido, impuesto, fragmentado, repetitivo y supervisado permanentemente."
    },
    {
        "id": 165,
        "q": "Según el Artículo 6 parágrafo III de la R.M. 350-2023, ¿qué requisitos debe cumplir la Subsede en cuanto a su estructura organizativa y autoridad máxima?",
        "a": "Debe contar con organigrama independiente con relación a la Sede Central del Instituto y con Director Académico como máxima autoridad para garantizar su funcionamiento."
    },
    {
        "id": 166,
        "q": "¿Qué distingue a las estrategias de aprendizaje de las simples técnicas para aprender?",
        "a": "La aplicación de conocimientos metacognitivos, de lo contrario se confundirán con simples técnicas para aprender, siendo además intencionada, consciente y controlada."
    },
    {
        "id": 167,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” refiere que un buen sistema de reconocimiento recurre al uso sistemático de los refuerzos sociales y académicos, de manera que el alumnado recibe retroacciones positivas después de sus buenas conductas, percibiendo así que su centro valora:",
        "a": "Su experiencia escolar y sus relaciones sociales."
    },
    {
        "id": 168,
        "q": "Según Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», un docente observa que dos estudiantes aplican las mismas técnicas memorizadas mecánicamente, sin adaptar su enfoque según la complejidad del contenido ni reflexionar sobre su propio proceso. ¿Qué característica fundamental de las estrategias de aprendizaje están ignorando?",
        "a": "Su aplicación es intencionada, consciente y controlada, requiriendo conocimientos metacognitivos, de lo contrario se confundirán con simples técnicas para aprender, sin adaptación al contexto ni autoconocimiento."
    },
    {
        "id": 169,
        "q": "Las competencias genéricas, según el enfoque didáctico planteado, se caracterizan porque:",
        "a": "Su desarrollo permite formarnos mejor como personas en cualquier área de estudio o trabajo, siendo un soporte imprescindible para el desempeño laboral y para desenvolvernos con éxito en la vida."
    },
    {
        "id": 170,
        "q": "Una institución escolar es evaluada negativamente por organismos externos pese a que sus docentes desarrollan procesos pedagógicos innovadores no contemplados en el plan oficial. ¿Qué dimensión del poder regulador del currículum explica este resultado?",
        "a": "Su condición de estándar normativo que fija los límites de lo aceptable, determinando quiénes cumplen y quiénes no."
    },
    {
        "id": 171,
        "q": "Según el texto “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, en el proceso educativo no sólo se hace énfasis en la formación académica de niñas, niños y adolescentes, sino también se promueve el ejercicio de sus derechos y responsabilidades, consigo mismos y con la sociedad, así también se deben defender estos derechos siendo guardianes de:",
        "a": "La observación de indicadores o factores de riesgo presentes y aclarar sospechas."
    },
    {
        "id": 172,
        "q": "El texto “Convivencia escolar y resolución pacífica de conflictos” señala que el arbitraje es el proceso por el cual las partes someten la solución de su conflicto a la decisión de un árbitro elegido por:",
        "a": "Su autoridad y credibilidad."
    },
    {
        "id": 173,
        "q": "¿Qué característica tiene la vigencia de la Ley Integral para Garantizar a las Mujeres una Vida Libre de Violencia respecto a otras normas en materia de delitos establecidos en dicha ley?",
        "a": "Su aplicación es preferente respecto a cualquier otra norma, sin reconocer fuero ni privilegio de ninguna clase."
    },
    {
        "id": 174,
        "q": "¿Qué factor preponderante explica que el libro de texto se haya configurado como el libro dominante en la escolaridad?",
        "a": "Su dominio del espacio y del tiempo escolar, que reduce las posibilidades de otras formas y materiales de lectura."
    },
    {
        "id": 175,
        "q": "¿Cuál es la característica que distingue a las ciencias de transferencia de las ciencias puras, a pesar de compartir el interés por la ciencia exacta?",
        "a": "Su actividad está guiada por resolver problemas de naturaleza social, sus centros de investigación se sitúan en universidades técnicas e industria, y son financiadas en gran parte por el sector industrial."
    },
    {
        "id": 176,
        "q": "Desde la perspectiva del neuroaprendizaje, ¿cuál es la función neurológica de introducir variantes novedosas al reiterar un contenido durante su enseñanza?",
        "a": "Sostener la activación dopaminérgica para que el hipocampo consolide el esquema conceptual en redes corticales duraderas."
    },
    {
        "id": 177,
        "q": "¿Qué rol cumplen las tecnologías de la información y la comunicación (TIC) frente a la nueva economía mundial y los cambios que se producen en la sociedad actual?",
        "a": "Porque constituyen un elemento determinante en la transformación de la nueva economía global y en los rápidos cambios que están tomando lugar en la sociedad."
    },
    {
        "id": 178,
        "q": "Los fines educativos que Sacristán propone más allá de los contenidos disciplinares comparten una característica que invierte la lógica habitual del currículum. ¿Cuál es?",
        "a": "Son derechos del alumnado y por tanto obligaciones para los docentes, no opciones pedagógicas ni referentes transversales voluntarios."
    },
    {
        "id": 179,
        "q": "¿Qué carácter tienen las políticas y normas establecidas por la máxima autoridad del Sistema de Tesorería del Estado para el manejo de fondos, valores y endeudamiento?",
        "a": "Son de cumplimiento obligatorio para todas las entidades del Sector Público sin excepción alguna."
    },
    {
        "id": 180,
        "q": "¿Cuál es la definición de “Deficiencia” que establece la Ley que regula los derechos de las personas con discapacidad?",
        "a": "Son problemas en las funciones fisiológicas o en las estructuras corporales de una persona, que pueden consistir en una pérdida, defecto, anomalía o cualquier otra desviación significativa respecto a la norma estadísticamente establecida"
    },
    {
        "id": 181,
        "q": "¿Cuál de las siguientes afirmaciones describe con mayor precisión la función de las TIC como instrumentos que potencian el aprendizaje cognitivo en entornos colaborativos, en el contexto de la formación docente?",
        "a": "Son poderosas herramientas que apoyan el aprendizaje cognitivo, posibilitando que los grupos compartan espacios de trabajo en línea para desarrollar productos materiales o intelectuales de forma colaborativa."
    },
    {
        "id": 182,
        "q": "¿Qué papel cumplen los errores que viven los docentes al probar nuevas prácticas pedagógicas en el marco de la Innovación Educativa?",
        "a": "Son parte inherente del cambio y constituyen una fuente de aprendizaje, por lo que resulta fundamental un clima de confianza y apoyo que no los censure."
    },
    {
        "id": 183,
        "q": "¿Cómo se describen los impedimentos y resistencias que obstaculizan la apertura al cambio en las instituciones educativas?",
        "a": "Son dificultades que no se pueden observar fácilmente, ni descubrir de dónde se originan."
    },
    {
        "id": 184,
        "q": "Un director institucional afirma que su equipo “no está preparado” para adoptar una nueva estrategia pedagógica. Según el texto de Innovación Educativa, ¿qué naturaleza tienen predominantemente esa tipo de afirmaciones?",
        "a": "Son creencias formadas tempranamente que operan como verdades y reducen la confianza para aprender."
    },
    {
        "id": 185,
        "q": "El estilo de aprendizaje es un conjunto de elementos exteriores que influyen en el contexto de la situación de aprendizaje que vive el estudiante. ¿Cuáles son los indicadores relativamente estables de cómo los estudiantes perciben interacciones y responden a sus ambientes de aprendizaje?",
        "a": "Son los rasgos cognitivos, afectivos y fisiológicos."
    },
    {
        "id": 186,
        "q": "¿Qué características tienen los «Maestros Completos» según el modelo bidimensional de enseñanza efectiva de Lowman?",
        "a": "Son los maestros que son capaces de actuar magníficamente tanto en la sala de conferencias como en la sala de seminarios y modificar su enfoque para motivar a todos los estudiantes, desde lo brillante a lo mediocre."
    },
    {
        "id": 187,
        "q": "Según el neuroaprendizaje, ¿cómo se define a las sensaciones?",
        "a": "Son la representación fisiológica de la emoción, siendo ambas inevitables."
    },
    {
        "id": 188,
        "q": "¿Cómo se caracterizan las iniciativas de cambio en las prácticas escolares cuando se encuentran en un grado incipiente de desarrollo hacia la innovación educativa?",
        "a": "Son iniciativas muy puntuales y pasajeras, escasamente conectadas con una perspectiva estratégica de cambio en la educación."
    },
    {
        "id": 189,
        "q": "¿Qué carácter tienen los presupuestos de gastos del Banco Central y de las entidades públicas de intermediación financiera sometidas al programa monetario del Gobierno y a la vigilancia de la Superintendencia de Bancos?",
        "a": "Son indicativos de sus operaciones de funcionamiento y de inversión no financiera."
    },
    {
        "id": 190,
        "q": "¿Qué carácter tienen los presupuestos de gastos de las entidades con autonomía de gestión y de patrimonio cuyos ingresos provengan exclusivamente por venta de bienes o por prestación de servicios?",
        "a": "Son indicativos de sus operaciones de funcionamiento e inversión."
    },
    {
        "id": 191,
        "q": "¿De qué manera inciden el compromiso y la voluntad de los docentes en los procesos de innovación educativa?",
        "a": "Son imprescindibles para transformar sus creencias, sus concepciones y sus prácticas, constituyendo la base fundamental de todo proceso pedagógico genuino."
    },
    {
        "id": 192,
        "q": "Desde la neurociencia del aprendizaje, ¿qué son los neurotransmisores y por qué su funcionamiento es determinante para la práctica pedagógica del docente?",
        "a": "Son sustancias químicas que transmiten señales entre neuronas a través de la sinapsis; regulan la atención, la motivación y la memoria, y el docente incide en ellos al diseñar entornos con sentido emocional y novedad cognitiva."
    },
    {
        "id": 193,
        "q": "Las competencias genéricas constituyen un soporte imprescindible para el desempeño laboral y permiten desenvolverse con éxito en la vida. ¿Cuál de las siguientes afirmaciones describe con mayor precisión su naturaleza?",
        "a": "Son habilidades y disposiciones transversales que potencian el desarrollo integral de la persona y son compartidas por diversas ocupaciones o profesiones."
    },
    {
        "id": 194,
        "q": "En la Innovación Educativa, ¿qué son los modelos mentales y por qué representan un obstáculo significativo para el cambio en las personas e instituciones?",
        "a": "Son estructuras de pensamiento que condicionan determinadas formas de pensar y actuar; operan sobre la persona condicionándola sin que se dé cuenta de ello, e incluyen prejuicios y creencias formadas sobre la educación."
    },
    {
        "id": 195,
        "q": "En el ámbito de la matemática educativa, diversas comunidades académicas se han consolidado como referentes en la reflexión e investigación sobre la problemática de su enseñanza. ¿Cuál de las siguientes opciones caracteriza con mayor precisión la naturaleza y el propósito de dichas comunidades?",
        "a": "Son agrupaciones de especialistas como didactas, educadores y matemáticos, que convergen para analizar colectivamente los fenómenos propios de la instrucción matemática y difundir los avances investigativos generados en torno a dicha problemática."
    },
    {
        "id": 196,
        "q": "¿Cuál es la característica de las organizaciones educativas denominadas «dinámicas»?",
        "a": "Son centros que han conseguido la deseable armonía entre estabilidad y cambio, tienen claras sus metas y disponen de los recursos suficientes para abordarlas; apoyan su actividad en el trabajo en equipo o colaborativo, y fundamentan sus líneas de mejora en procesos sistemáticos de autoevaluación."
    },
    {
        "id": 197,
        "q": "Las organizaciones educativas son seres vivos que nacen y crecen, se desarrollan a lo largo de su existencia; constituyen sistemas compuestos de diversos elementos que interactúan entre sí y con el entorno, en un sentido evolutivo que las hace susceptibles de transformarse mediante sucesivos cambios. Existen diversas tipologías de centros educativos. En este contexto, ¿en qué se caracterizan los centros denominados «paseantes«?",
        "a": "Son centros muy tradicionales, en los que sus profesores gozan de estabilidad y se mantienen de los éxitos pasados, siendo reticentes a nuevos cambios por considerar que la actual situación o funcionamiento de la institución es la adecuada."
    },
    {
        "id": 198,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos” ¿Cuál es la definición de escuelas pacíficas?",
        "a": "Son centros educativos que inspiran sus proyectos globales de centro desde la perspectiva o mirada que sugiere la Cultura de Paz."
    },
    {
        "id": 199,
        "q": "En la Innovación Educativa, cuando se afirma que “no se está preparado para los cambios”, ¿qué son en realidad esas resistencias en muchos casos?",
        "a": "Son creencias que se formaron desde temprano en la vida y se fueron convirtiendo en verdades en la vida adulta; ideas que quitan seguridad o tranquilidad y restan confianza para seguir aprendiendo algo nuevo."
    },
    {
        "id": 200,
        "q": "Según el texto de Innovación Educativa, ¿qué son en realidad y cómo se originan las ideas que quitan seguridad o tranquilidad y restan confianza para aprender algo nuevo?",
        "a": "Son creencias que se formaron desde temprano en la vida y se fueron convirtiendo en verdades en la vida adulta."
    },
    {
        "id": 201,
        "q": "Según el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿cómo son los mejores centros educativos?",
        "a": "Son aquellos donde el profesorado indica claramente a sus alumnos/as cómo pueden alcanzar el éxito personal y académico, teniendo en cuenta sus capacidades y exigiéndoles las responsabilidades necesarias para ello."
    },
    {
        "id": 202,
        "q": "¿Cuál de las siguientes afirmaciones describe correctamente a las organizaciones que aprenden?",
        "a": "Son aquellas que, asumiendo su naturaleza de organismos vivos y dinámicos, son capaces de cambiar desde su responsabilidad."
    },
    {
        "id": 203,
        "q": "¿Cuáles son las características de las organizaciones educativas que aprenden?",
        "a": "Son aquellas que, asumiendo su naturaleza de organismos vivos y dinámicos, son capaces de cambiar desde su responsabilidad, de dar respuestas adecuadas a las demandas, siempre cambiantes, de una sociedad en constante transformación."
    },
    {
        "id": 204,
        "q": "La experiencia de «vivir dentro de una masa» constituye, según Eggleston, un componente del currículum oculto porque:",
        "a": "La reclusión en un espacio exiguo enseña a tolerar interrupciones y a diferir o renunciar a deseos personales."
    },
    {
        "id": 205,
        "q": "¿Cuántas veces puede la víctima solicitar excepcionalmente la conciliación en casos de violencia?",
        "a": "Solo por única vez."
    },
    {
        "id": 206,
        "q": "El aprendizaje es un proceso activo; aprender es explorar, conceptualizar, experimentar e interactuar, siendo la experiencia con la situación concreta la base para la comprensión. ¿Cuál de las afirmaciones se relaciona con lo descrito previamente?",
        "a": "Solo «hacer» puede traer aprendizaje, pues por la participación activa se aprende de manera significativa."
    },
    {
        "id": 207,
        "q": "¿Con qué año o años concluidos del régimen anual puede un estudiante realizar el traspaso?",
        "a": "Con el primer o segundo año concluido del régimen anual."
    },
    {
        "id": 208,
        "q": "Una de las funciones específicas del maestro de apoyo a estudiantes con discapacidad intelectual es:",
        "a": "Participar en reuniones necesarias de la comisión técnica pedagógica de la institución educativa junto a maestras y maestros de la institución."
    },
    {
        "id": 209,
        "q": "¿Qué pueden hacer las entidades públicas que realizan actividades similares respecto a la normatividad secundaria de administración, información y control interno?",
        "a": "Elaborarla en forma conjunta, total o parcialmente, sin que ello justifique el incumplimiento del plazo establecido para la implantación de la norma por cada entidad."
    },
    {
        "id": 210,
        "q": "Al diseñar una secuencia de enseñanza orientada a que el estudiante comprenda la cultura de paz como un nuevo paradigma para la convivencia, ¿qué estrategia preinstruccional cumple con mayor precisión la función de generar en el estudiante una disposición favorable hacia el contenido y activar sus esquemas cognitivos previos sobre convivencia y resolución de conflictos, antes de que comience la instrucción formal?",
        "a": "Plantear una situación problematizadora o pregunta detonadora que recupere las experiencias y saberes previos del estudiante sobre convivencia humana y conflicto, generando un puente cognitivo entre su bagaje experiencial y el nuevo paradigma de cultura de paz que se abordará durante la instrucción."
    },
    {
        "id": 211,
        "q": "En el “Manual de resolución de problemas”, ¿qué se recomienda antes de implementar la primera lección?",
        "a": "Aplicar el diagnóstico de habilidades."
    },
    {
        "id": 212,
        "q": "¿Sobre qué aspectos específicos se manifiestan los efectos de la motivación en la educación, según los estudios realizados en el ámbito de la psicología educativa?",
        "a": "Sobre cómo los estudiantes aprenden y cómo se comportan hacia la materia."
    },
    {
        "id": 213,
        "q": "Los objetivos de aprendizaje deben centrarse en el rendimiento del estudiante. Los expertos recomiendan usar el acrónimo S-K-A para enmarcar los objetivos de aprendizaje. ¿Qué representan estas siglas?",
        "a": "Skills (habilidades), Knowledge (conocimiento) y Awareness (conciencia/sensibilización)"
    },
    {
        "id": 214,
        "q": "Pasado el tiempo en que el cerebro se mantiene atento, ¿qué se requiere para recuperar su atención?",
        "a": "Situaciones placenteras o amenazantes."
    },
    {
        "id": 215,
        "q": "Desde los planteamientos sobre innovación educativa, aceptar que el cambio es un aprendizaje implica que las escuelas deberían ser:",
        "a": "Sitios en que los docentes aprendan de la experiencia."
    },
    {
        "id": 216,
        "q": "¿Cuál de las siguientes capacidades cognitivas se define como la habilidad de seleccionar y articular estrategias?",
        "a": "Planificar"
    },
    {
        "id": 217,
        "q": "Durante una sesión de clase, un estudiante reacciona con bloqueo e inhibición ante una pregunta del maestro frente a sus compañeros. Desde la neurociencia, comprender qué sistema cerebral origina esa respuesta permite al maestro intervenir pedagógicamente de forma pertinente. ¿Qué sistema cerebral regula las respuestas afectivas y condiciona el acceso a los procesos cognitivos superiores?",
        "a": "Sistema límbico."
    },
    {
        "id": 218,
        "q": "Desde la neurociencia, las experiencias emocionales como la pena, el miedo y la alegría no se procesan de forma aleatoria en el cerebro. ¿En qué estructura neurológica se procesan estas emociones?",
        "a": "Sistema límbico"
    },
    {
        "id": 219,
        "q": "¿Cómo se denomina en neurociencia al sistema que regula la velocidad, el contenido y el tipo de información que transita hacia el sistema límbico y, desde allí, al cerebro superior?",
        "a": "Sistema activador reticular ascendente"
    },
    {
        "id": 220,
        "q": "Conforme a la Ley General para personas con discapacidad, ¿qué condiciones expresas existentes justifican alguna dificultad para llevar a cabo las actividades de la vida diaria en el Grado de Discapacidad Leve?",
        "a": "Síntomas, signos o secuelas existentes, compatibles con la práctica de las actividades de la vida diaria."
    },
    {
        "id": 221,
        "q": "En los niveles múltiples de identificación y de prevención que se menciona en el texto “Convivencia escolar y resolución pacífica de conflictos”, el nivel que hace referencia a factores que crean un clima de aceptación de la violencia, los que reducen las inhibiciones contra ésta, y los que crean y mantienen las brechas entre distintos segmentos de la sociedad, o generan tensiones entre diferentes grupos o países, es:",
        "a": "Social."
    },
    {
        "id": 222,
        "q": "Desde el neuroaprendizaje, ¿cómo favorece la buena hidratación al cerebro durante el proceso de aprendizaje?",
        "a": "Estado anímico estable, agudización mnémica y concentración sostenida."
    },
    {
        "id": 223,
        "q": "Un maestro observa que un estudiante muestra gran facilidad para narrar historias, argumentar ideas con precisión, aprender idiomas con rapidez y disfrutar de la lectura y la escritura. ¿Qué campo de la inteligencia humana describe este perfil?",
        "a": "Lingüístico-verbal."
    },
    {
        "id": 224,
        "q": "¿Qué implica para un docente reconocer las diferencias individuales de los alumnos como elemento de la enseñanza, considerando que la calidad de esta se mide por la calidad del aprendizaje al que conduce?",
        "a": "Significa tomar en cuenta que cada estudiante aprende de manera distinta; por ejemplo, un profesor que adapta sus estrategias usando materiales visuales para unos y actividades prácticas para otros, promoviendo así un aprendizaje deseable en todos."
    },
    {
        "id": 225,
        "q": "¿Cuál es el significado del término innovar, que se establece en el texto “innovación educativa”?",
        "a": "Que produzcan transformaciones en el enfoque mismo de la educación, en el rol del docente, en las estrategias de enseñanza centradas en el aprendizaje, o en la creación de relaciones no violentas y de cooperación en la convivencia de la institución educativa."
    },
    {
        "id": 226,
        "q": "Considerando el acápite de las manifestaciones de la violencia intrafamiliar descrito en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuándo existe violencia en el ámbito familiar?",
        "a": "Cuando hay maltrato entre miembros de la familia, con comportamientos deliberados y recurrentes, en los que uno o más componentes de la familia con mayor poder, abusan de otros con menor poder."
    },
    {
        "id": 227,
        "q": "¿En qué contexto debe producirse la conducta para configurar el delito de padecimientos sexuales?",
        "a": "En el marco de un ataque generalizado o sistemático contra una población o grupo humano."
    },
    {
        "id": 228,
        "q": "Considerando el acápite de las manifestaciones de la violencia intrafamiliar establecidas en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuándo existe violencia contra la niñez y adolescencia?",
        "a": "Cuando progenitores, encargados de su custodia, guardadores o tutores ponen en peligro la integridad física o psicológica de la niña, del niño o adolescente."
    },
    {
        "id": 229,
        "q": "En la tabla de “Orientaciones cuando se conoce un caso de violencia”, contenida en la “Guía para la Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo”, en el momento de la “Detección de la violencia”, lo que sí se puede hacer es:",
        "a": "Sí: escuchar de manera atenta; colocándose frente a frente en un mismo nivel/altura; haciéndole saber con todos los sentidos que se le está atendiendo; contactar con la emoción que genera; creer y aceptar lo que escuchamos, y obtener datos generales."
    },
    {
        "id": 230,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿los conflictos o disputas requieren siempre de un tercero para encontrar una solución satisfactoria?",
        "a": "No siempre los conflictos o disputas requieren de un tercero para encontrar una solución satisfactoria."
    },
    {
        "id": 231,
        "q": "Una estudiante con discapacidad visual es objeto de violencia sexual dentro de la unidad educativa por una persona ajena, el director de la unidad educativa al recibir la denuncia no realiza ninguna acción. ¿Su conducta puede ser objeto de algún tipo de responsabilidad de acuerdo al Protocolo de Prevención?",
        "a": "Sí, el director de la Unidad Educativa puede ser sujeto a responsabilidad penal y ser acusado de complicidad por la omisión de denuncia."
    },
    {
        "id": 232,
        "q": "De acuerdo con la tabla “Orientaciones cuando se conoce un caso de violencia”, en el momento “Durante la referencia si corresponde”, presentada en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, se establecen acciones que SÍ se pueden hacer. ¿Cuál de los siguientes enunciados corresponde a este momento?",
        "a": "Sí tener varias opciones de solución."
    },
    {
        "id": 233,
        "q": "La “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo” describe orientaciones cuando se conoce un caso de violencia, estas se dividen en momentos, ¿cuál de las siguientes opciones identifica lo que SÍ se puede hacer “Durante la contrarreferencia o seguimiento”?",
        "a": "Sí evaluar los pasos de acción."
    },
    {
        "id": 234,
        "q": "Dentro de la tabla del rol de maestras y maestros en la detección de violencia intrafamiliar, cada elemento cuenta con una recomendación. ¿Cuál de las siguientes recomendaciones corresponde al elemento para la intervención “Examinar sus limitaciones”?",
        "a": "Si el adulto no siente que cuenta con los elementos que se requieren para apoyar a la víctima en el proceso, ya sea porque tiene una experiencia de abuso no trabajada o por cualquier otra causa, lo mejor será traspasar el caso a quien pueda atenderlo."
    },
    {
        "id": 235,
        "q": "De acuerdo con la tabla “Orientaciones cuando se conoce un caso de violencia”, “Durante la intervención” se establecen acciones que SÍ se pueden hacer. ¿Cuál de los siguientes enunciados corresponden a este momento?",
        "a": "Sí mantener una postura objetiva ante la situación."
    },
    {
        "id": 236,
        "q": "Una maestra reporta que un estudiante de secundaria es sometido por un compañero a insultos reiterados, apodos humillantes y exclusión deliberada del grupo. ¿Este caso configura violencia psicológica, para activar el Protocolo de Prevención y Actuación y Denuncia en Casos de Violencia Física, Psicológica y Sexual?",
        "a": "Sí configura violencia psicológica, pero no se activa Protocolo de Prevención y Actuación y Denuncia en Casos de Violencia Física, Psicológica y Sexual."
    },
    {
        "id": 237,
        "q": "Considerando la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo” y la tabla del rol de maestras y maestros en la detección de violencia intrafamiliar, cada elemento para la intervención cuenta con una recomendación. ¿Cuál de las siguientes recomendaciones corresponde al elemento de intervención de “Contención emocional de emergencia”?",
        "a": "Si bien no existe una capacitación especializada para dar asesoría psicológica, es importante que se conozcan los procedimientos básicos de primeros auxilios psicológicos, que permitan iniciar un trabajo de contención emocional."
    },
    {
        "id": 238,
        "q": "Una maestra de primaria diseña su clase incluyendo actividades con elementos de novedad y sorpresa. Desde la perspectiva de la neurociencia, ¿qué sustancia química se libera en el cerebro?",
        "a": "Serotonina, dopamina y noradrenalina"
    },
    {
        "id": 239,
        "q": "¿Qué consecuencia establece la normativa vigente para el estudiante que no presenta el diploma de bachiller como requisito de ingreso a un Instituto?",
        "a": "No podrá proseguir su formación profesional"
    },
    {
        "id": 240,
        "q": "¿Qué sanción adicional recibe la entidad cuyos representantes o ex representantes legales hubieren incrementado su patrimonio afectando al Estado mediante actividad privada?",
        "a": "Restituirá al Estado los bienes afectados y los obtenidos como producto del delito, además de ser sancionada con una multa del 25% de su patrimonio."
    },
    {
        "id": 241,
        "q": "El personal docente, administrativo o de apoyo profesional que, habiendo detectado una situación de violencia, no la hubiera reportado a la autoridad correspondiente, ¿qué consecuencia legal enfrenta?",
        "a": "Será pasible a las sanciones legales que correspondan."
    },
    {
        "id": 242,
        "q": "Cuando un caso de violencia en el ámbito educativo es tipificado como delito, ¿cuál es la instancia o conjunto de instancias que debe atenderlo según los procedimientos de remisión a la justicia ordinaria?",
        "a": "Será atendido por el Ministerio Público y, en su caso, adicionalmente por el Juzgado de la Niñez y Adolescencia, de acuerdo con la normativa vigente."
    },
    {
        "id": 243,
        "q": "De acuerdo con el documento de referencia, ¿qué condición estructural debe reunir el entorno normativo y organizativo para que los centros formativos puedan sostener procesos de cambio de manera continua?",
        "a": "Ser más permeable y otorgar niveles reales de independencia en la toma de decisiones propias de cada centro formativo."
    },
    {
        "id": 244,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, en los programas de mediación entre iguales, los alumnos implicados deben aceptar seis condiciones. La primera condición es:",
        "a": "Resolver el problema."
    },
    {
        "id": 245,
        "q": "¿En qué consiste el principio de proceder de lo conocido a lo desconocido en la enseñanza?",
        "a": "Afianzar en los estudiantes lo que ya saben, para que estén listos para aprender el nuevo conocimiento."
    },
    {
        "id": 246,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, según Lederach (1989), el requisito “Facilitar y mejorar la comunicación” implica:",
        "a": "Controlar la dinámica destructiva de hacer generalizaciones, proliferar los problemas y estereotipar a las personas; crear un ambiente de diálogo para buscar soluciones verdaderas y constructivas."
    },
    {
        "id": 247,
        "q": "¿Cuál de las siguientes es una consecuencia EMOCIONAL a corto plazo, identificada en el protocolo de prevención y actuación, que puede presentar una persona en el período inicial tras haber sufrido una agresión?",
        "a": "Sentimientos de vergüenza, culpa e irritabilidad sin causa aparente."
    },
    {
        "id": 248,
        "q": "En la “Guía para la Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo”, se describe la tabla de señales y consecuencias de la violencia a largo plazo en la adolescencia. ¿Cuál de los siguientes enunciados corresponde al área emocional?",
        "a": "Sentimientos de desesperanza frente al futuro."
    },
    {
        "id": 249,
        "q": "Dentro de la tabla de las señales y consecuencias de la violencia a corto y mediano plazo en la niñez, descritas en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de las siguientes opciones corresponde al área conductual?",
        "a": "Alteración del equilibrio entre rutinas de sueño, actividad y vigilia."
    },
    {
        "id": 250,
        "q": "Según la neurociencia, ¿cómo se denomina al proceso de reconocer la emoción a través de la sensación corporal, eligiendo cómo manifestarla y asignándole un nombre, una cualidad y una intensidad mediante el uso de los lóbulos prefrontales?",
        "a": "Sentimiento"
    },
    {
        "id": 251,
        "q": "La ontogenia del desarrollo cognoscitivo humano, entendida como el proceso individual de maduración intelectual desde el nacimiento hasta la adultez, encuentra su sustento teórico en los estadios descritos por Jean Piaget. ¿Cuál es el orden cronológico correcto de dichos estadios?",
        "a": "Sensoriomotor → Preoperatorio → Operaciones concretas → Operaciones formales"
    },
    {
        "id": 252,
        "q": "Para que el maestro logre activar las redes cognitivas racionales en el proceso de enseñanza- aprendizaje, ¿qué redes debe considerar necesariamente como punto de partida?",
        "a": "Instintivas emocionales"
    },
    {
        "id": 253,
        "q": "Se destacan diferentes modalidades de enseñanza y aprendizaje que se diferencian entre sí en función de los propósitos de la acción didáctica, las tareas a realizar y los recursos necesarios para su ejecución. Es evidente que distintas modalidades de enseñanza reclaman tipos de trabajos distintos y diferentes herramientas metodológicas para docentes y estudiantes. ¿Cuáles son las modalidades más reconocidas?",
        "a": "Clases teóricas, clases prácticas, clases presenciales y clases no presenciales."
    },
    {
        "id": 254,
        "q": "¿Qué tipo de atención es la que requiere un mínimo esfuerzo, según el neuroaprendizaje?",
        "a": "Espontánea."
    },
    {
        "id": 255,
        "q": "Según el “Manual de resolución de problemas”, una vez que se tienen las posibles rutas o soluciones, ¿cuál es otra parte esencial del proceso de resolución de problemas?",
        "a": "Comparar y contrastar las alternativas de manera eficaz."
    },
    {
        "id": 256,
        "q": "Según Nisbet y Shucksmith, ¿cuál es el propósito de las estrategias de aprendizaje?",
        "a": "Facilitar la adquisición, almacenamiento y utilización de información o conocimientos."
    },
    {
        "id": 257,
        "q": "¿Para qué es útil la técnica del «Estímulo correcto» en la neurociencia del aprendizaje?",
        "a": "Seleccionar aquello que resulta relevante o significativo según el propio interés personal."
    },
    {
        "id": 258,
        "q": "Según el neuroaprendizaje, ¿qué condiciones requiere el cerebro racional para funcionar correctamente en el proceso de aprendizaje?",
        "a": "Novedad, desafíos cognitivos, estímulos motivacionales internos externos."
    },
    {
        "id": 259,
        "q": "Según normativa vigente, ¿en función de qué criterios se determinan los porcentajes de horas teóricas y prácticas en la estructura curricular de los Institutos?",
        "a": "Según la especificidad y área productiva de la carrera"
    },
    {
        "id": 260,
        "q": "En el marco de las responsabilidades para el fortalecimiento de la Educación Inclusiva, ¿qué obligación tienen los estudiantes con necesidades y/o potencialidades educativas que requieren apoyo educativo?",
        "a": "Cumplir las tareas propias del grado o nivel en el que se encuentren registrados con las adecuaciones necesarias."
    },
    {
        "id": 261,
        "q": "¿Qué tipo de emoción es la depresión?",
        "a": "Secundaria"
    },
    {
        "id": 262,
        "q": "¿Cuál es la definición normativa completa y exacta de los dos sectores que comprende el Servicio de Educación?",
        "a": "Sector docente: atiende el sistema educativo en todos sus ciclos y áreas. Sector administrativo: desempeña funciones no docentes en todas las reparticiones del ramo."
    },
    {
        "id": 263,
        "q": "¿A cuál de los siguientes cargos corresponde la función de recibir, controlar, custodiar y distribuir la documentación interna y externa que se expide y recibe con eficiencia y fluidez?",
        "a": "Secretaria(o) del Instituto."
    },
    {
        "id": 264,
        "q": "Un maestro es denunciado por una falta disciplinaria. La autoridad competente, sin haber concluido el proceso ni comprobado culpabilidad, decide suspenderlo preventivamente argumentando que la falta es «grave». ¿Qué principio normativo vulnera esta decisión y cuál es la única excepción legalmente válida para proceder a la suspensión inmediata?",
        "a": "Se vulnera el principio de presunción de inocencia; la única excepción válida para suspensión inmediata es la falta tipificada en el inciso a) de faltas muy graves."
    },
    {
        "id": 265,
        "q": "¿Qué consecuencia jurídica tiene una sanción disciplinaria impuesta sin el cumplimiento de las normas procesales establecidas en el «Reglamento de Faltas y Sanciones del Magisterio y Personal Docente y Administrativo»?",
        "a": "Se tendrá por inexistente."
    },
    {
        "id": 266,
        "q": "Desde la interacción de elementos de la innovación educativa, ¿qué ocurre cuando la política educativa institucional no considera el campo de conocimiento ni los patrones culturales del territorio?",
        "a": "Se producen prácticas descontextualizadas que no dinamizan ni transforman el orden formativo, al prescindir del saber disciplinar y del arraigo sociocultural del contexto."
    },
    {
        "id": 267,
        "q": "¿Qué característica fundamental distingue a la innovación como proceso dentro de las instituciones educativas?",
        "a": "Resulta de la deliberación colectiva, el intercambio de perspectivas y la negociación de acuerdos entre quienes conforman la comunidad educativa."
    },
    {
        "id": 268,
        "q": "¿Qué acción se lleva a cabo cuando el formulario de Inspección Ocular refleja que el Proyecto Educativo cumple con las condiciones de infraestructura, equipamiento y mobiliario?",
        "a": "Se procede a elaborar el Informe Técnico para la emisión de la Resolución Ministerial."
    },
    {
        "id": 269,
        "q": "Cuando se señala que resulta «extraño» que una clase consista en que un profesor dicte un texto, tomando como referencia lo que hacen «los países más destacados», ¿qué estereotipo cultural subyace en esta afirmación y qué riesgo implica para el diseño curricular?",
        "a": "Se asume que los modelos pedagógicos de países «destacados» son universalmente válidos, ignorando la diversidad de contextos culturales."
    },
    {
        "id": 270,
        "q": "Desde la perspectiva del constructivismo contemporáneo, ¿cuál es el rol que debe asumir el docente en el proceso de enseñanza-aprendizaje y de qué manera impulsa el desarrollo cognitivo del aprendiz?",
        "a": "Se posiciona como orientador del proceso formativo, propiciando el avance intelectual del aprendiz a través de escenarios problemáticos ficticios o reales, mientras la conducción del aprendizaje recae sobre el propio sujeto que aprende."
    },
    {
        "id": 271,
        "q": "¿En cuántos grupos se organizan las competencias en la aplicación de las TIC y cuáles son?",
        "a": "Se organizan en cuatro grupos: pedagogía, colaboración y trabajo en red, aspectos sociales, y aspectos técnicos vinculados al aprendizaje permanente."
    },
    {
        "id": 272,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué defiende Bandura sobre cómo adquirimos la mayor parte del aprendizaje?",
        "a": "Se obtiene simplemente observando e imitando el comportamiento de otros que son tomados como modelos."
    },
    {
        "id": 273,
        "q": "¿Qué consecuencia genera el uso de métodos convencionales centrados en la clase magistral expositiva y la memorización en el proceso de aprendizaje del estudiante?",
        "a": "Se obstaculiza el desarrollo de habilidades cognitivas y metacognitivas del estudiante para analizar y procesar información, mientras que éste sólo espera que el profesor le proporcione conocimiento."
    },
    {
        "id": 274,
        "q": "¿Cuál de las siguientes afirmaciones describe correctamente el aprendizaje organizativo tecnológico-científico?",
        "a": "Se basa en la explicación de la realidad de las organizaciones para transformarla."
    },
    {
        "id": 275,
        "q": "En un proceso de cambio de paradigmas, el trabajo docente se caracteriza porque:",
        "a": "No puede reducirse al interior del aula, sino que debe ser parte importante de la reestructuración curricular para apropiarse, identificarse y comprometerse con éste."
    },
    {
        "id": 276,
        "q": "En el texto «El currículum real y el trabajo escolar», ¿qué caracteriza la relación entre la cultura escolar y la cultura de la organización escolar?",
        "a": "Se intersectan parcialmente, existiendo aprendizajes que pertenecen a ambas y otros propios de cada una."
    },
    {
        "id": 277,
        "q": "Según Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», un docente diseña actividades donde sus estudiantes analizan partes aisladas de un problema sin relacionarlas entre sí, obteniendo conclusiones fragmentadas. ¿Qué principio fundamental del aprendizaje perspicaz de Kohler está siendo ignorado y cuál sería la orientación correcta?",
        "a": "Se ignora que el estudiante percibe siempre la situación en conjunto, evalúa toda la relación y los factores involucrados en la situación y finalmente llega a una solución perspicaz, enfatizando ver la situación como un todo."
    },
    {
        "id": 278,
        "q": "¿Cuáles son las señas de identidad que caracterizan a una escuela innovadora frente a una institución educativa tradicional?",
        "a": "Se reconocen por tener un proyecto institucional sólido, cultura de colaboración, apertura al entorno, reflexión crítica permanente y capacidad para sostener procesos de cambio pedagógico."
    },
    {
        "id": 279,
        "q": "Según los principios psicológicos de la enseñanza, ¿qué efecto se produce cuando el docente mantiene expectativas positivas sobre sus estudiantes?",
        "a": "Se produce el efecto Pygmalion, donde las expectativas positivas del docente influyen favorablemente en el rendimiento académico del estudiante."
    },
    {
        "id": 280,
        "q": "En el texto de Innovación Educativa, los factores de tipo personal, conductual y cultural son señalados como causas de la dificultad para cambiar, ¿qué rasgo comparten estos tres tipos de factores que los convierte en obstáculos para la transformación educativa?",
        "a": "Se han sedimentado a lo largo de la trayectoria vital de los sujetos y operan en sentido contrario a lo que todo proceso de renovación educativa pretende alcanzar."
    },
    {
        "id": 281,
        "q": "¿En qué se han basado las nuevas formas de concebir el proceso de aprendizaje y el cambio hacia un aprendizaje centrado en el alumno?",
        "a": "Se han basado en investigaciones sobre el aprendizaje cognitivo y la convergencia de diversas teorías acerca de la naturaleza y el contexto del aprendizaje."
    },
    {
        "id": 282,
        "q": "Desde la interacción de elementos de la innovación educativa, ¿qué consecuencia genera priorizar el campo de conocimiento sin articular la finalidad educativa ni los patrones culturales del territorio?",
        "a": "Se generan prácticas de carácter técnico que desvinculan el saber disciplinar del sentido formativo y del contexto sociocultural en que se desarrollan."
    },
    {
        "id": 283,
        "q": "Como se menciona en el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿qué ocurre cuando los vínculos entre los miembros de un grupo son débiles?",
        "a": "Existe mayor posibilidad de que los conflictos no sean resueltos positivamente, facilitando comportamientos hostiles y generando una actitud negativa hacia todo lo que acontece en el centro."
    },
    {
        "id": 284,
        "q": "Desde la perspectiva sistémica de la innovación educativa, ¿qué fenómeno se produce cuando la innovación genera una reorganización del sistema en el que ocurre, y qué revela dicho fenómeno sobre la naturaleza de ese sistema?",
        "a": "Se produce autopoiesis, lo que pone de manifiesto el carácter abierto del entorno donde emerge el cambio, evidenciando su capacidad de reorganizarse y renovarse desde su propia dinámica interna."
    },
    {
        "id": 285,
        "q": "Según Rafael Feito Alonso, ¿cuál es la consecuencia pedagógica más profunda de organizar el currículum de forma estrictamente secuencial y avanzar sin detenerse en los intereses del alumnado?",
        "a": "Se inhibe el desarrollo de la curiosidad intelectual genuina al subordinar los intereses del estudiante al avance del programa."
    },
    {
        "id": 286,
        "q": "El texto Las “Tecnologias de la Información y la Comunicación en la Formación Docente - UNESCO”, advierte sobre un riesgo específico en la forma de concebir la innovación. ¿Qué consecuencia se produce cuando la innovación es entendida únicamente como producto y no como proceso?",
        "a": "Se cae en la reproducción rutinaria, instalando prácticas o modelos que en su momento significaron una ruptura pero que han dejado de serlo en el contexto actual."
    },
    {
        "id": 287,
        "q": "Según Gimeno Sacristán, ¿cuál es la principal implicación de que las dimensiones estructurantes del currículum sean implícitas e invisibles para quienes actúan en la práctica?",
        "a": "Se naturalizan opciones contingentes que los agentes educativos asumen como normas incuestionables, potenciando el control sin resistencia consciente."
    },
    {
        "id": 288,
        "q": "La “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo” menciona que cuando se observan inconsistencias entre los relatos de la madre, padre, tutor o cuidador, o de la misma víctima, y lo registrado por la maestra o el maestro, es posible que:",
        "a": "Se esté frente a un caso de violencia."
    },
    {
        "id": 289,
        "q": "¿Cuál es la definición de “ajustes razonables” establecida en la normativa boliviana para personas con discapacidad?",
        "a": "Se entenderán las modificaciones, adaptaciones necesarias y adecuadas, que no impongan una carga desproporcionada o indebida, cuando se requiera en un caso particular para garantizar a las personas con discapacidad el goce o ejercicio en igualdad de condiciones, de los derechos humanos y libertades fundamentales."
    },
    {
        "id": 290,
        "q": "Una característica del cerebro reptiliano es:",
        "a": "Se encarga de las respuestas automáticas de supervivencia"
    },
    {
        "id": 291,
        "q": "¿Cómo se clasifican las estrategias de enseñanza según su función didáctica?",
        "a": "Se dividen en estrategias preinstruccionales, coinstruccionales y postinstruccionales, según el momento del proceso didáctico en que se emplean para orientar, acompañar o consolidar el aprendizaje."
    },
    {
        "id": 292,
        "q": "Según Perrenoud, ¿qué ocurre con el interés inicial que despiertan las actividades nuevas en los estudiantes?",
        "a": "Se desvanece en la medida en que la escuela impone la repetición y el ejercicio sistemático sobre esas mismas actividades."
    },
    {
        "id": 293,
        "q": "¿Dónde se desarrolla el modelo de entrenamiento o institucional, según Imbernón?",
        "a": "Se desarrolla mediante cursos de actualización científica en instituciones como los centros de profesores o facultades."
    },
    {
        "id": 294,
        "q": "¿Qué caracteriza al aprendizaje cognitivo y qué beneficios genera en los alumnos dentro del proceso instructivo?",
        "a": "Se define como el proceso instructivo en el que docentes o pares con más experiencia proveen a los alumnos un sistema de andamios para apoyar su desarrollo y crecimiento cognitivo, permitiendo que aprendan mediante la interacción, construyan sus propias estructuras de conocimiento y compartan estas experiencias con otros integrantes de su entorno educativo."
    },
    {
        "id": 295,
        "q": "Según Gimeno Sacristán et al., cuando la escuela no logra que todos los estudiantes dominen los códigos lingüísticos legítimos, ¿cuál es la consecuencia estructural más profunda para el sistema educativo?",
        "a": "La institución escolar reproduce y legitima jerarquías sociales preexistentes en lugar de compensarlas."
    },
    {
        "id": 296,
        "q": "¿Por qué se corre un riesgo cuando la innovación es considerada únicamente como un producto?",
        "a": "Se corre el riesgo de caer en la rutina y en la instalación de prácticas o modelos que en su día pudieron significar una ruptura pero que ya no lo son hoy en día."
    },
    {
        "id": 297,
        "q": "¿De qué manera la investigación-acción, la autoevaluación, la sistematización y la reflexión sobre las prácticas pedagógicas contribuyen al marco de la innovación educativa?",
        "a": "Se constituyen en estrategias esenciales para alimentar y sostener las innovaciones educativas, funcionando a la vez como herramientas de formación profesional docente en servicio."
    },
    {
        "id": 298,
        "q": "¿Qué afirmación se hace sobre el origen de las disciplinas escolares respecto de las universitarias, según Linuesa?",
        "a": "Adquieren formas peculiares en el ámbito escolar y no son simples adaptaciones del conocimiento científico."
    },
    {
        "id": 299,
        "q": "¿En qué se centran los objetivos del aprendizaje basado en problemas (ABP) y cómo se desarrollan las habilidades de pensamiento en los alumnos?",
        "a": "Se centran en desarrollar habilidades de pensamiento de orden superior, presentando al alumno problemas y casos auténticos y complejos."
    },
    {
        "id": 300,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué limitación específica reconoce este texto sobre la práctica principal del aprendizaje memorístico?",
        "a": "Permite recordar rápidamente el material por repetición, pero no necesariamente su significado cuanto más se repita."
    },
    {
        "id": 301,
        "q": "¿Qué caracteriza al aprendizaje en el modelo educativo tradicional y qué limitación presenta respecto al rol del alumno en la construcción del conocimiento?",
        "a": "El aprendizaje es un proceso de transferencia y recepción de información, donde una parte considerable de los esfuerzos educativos continúa orientada hacia la información, y los alumnos deben reproducir conocimiento en lugar de producir su propio conocimiento."
    },
    {
        "id": 302,
        "q": "En el ámbito de la innovación educativa, ¿cuál de las siguientes opciones explica mejor el riesgo de concebir la innovación únicamente como un producto y no como un proceso?",
        "a": "Se cae en la tendencia a normalizar e institucionalizar prácticas o modelos que en su momento representaron una ruptura, pero que con el tiempo han perdido su carácter transformador."
    },
    {
        "id": 303,
        "q": "¿Qué caracteriza fundamentalmente a la motivación interna o intrínseca dentro del proceso de enseñanza y aprendizaje?",
        "a": "Se basa en tomar placer en una actividad en lugar de trabajar hacia una recompensa externa."
    },
    {
        "id": 304,
        "q": "La educación superior tiene como función central que los docentes contribuyan al desarrollo óptimo de la sociedad. ¿Cuál de las siguientes afirmaciones describe con mayor precisión el fundamento de la educación como preparación para la vida?",
        "a": "Se fundamenta en la necesidad de adquirir, actualizar y utilizar el conocimiento, dado que es un proceso continuo que se efectúa en múltiples espacios y modalidades."
    },
    {
        "id": 305,
        "q": "Un maestro quiere diseñar actividades que promuevan el funcionamiento óptimo de la corteza prefrontal —sede del pensamiento racional, la planificación y la toma de decisiones— en sus estudiantes. ¿Qué condiciones pedagógicas favorecen específicamente su activación y desarrollo?",
        "a": "Incorporar novedad, desafíos, estímulos internos y externos, motivación genuina y aprendizaje a través de la acción, pues estos elementos activan los circuitos que sostienen el pensamiento ejecutivo."
    },
    {
        "id": 306,
        "q": "¿Qué mecanismo neurobiológico explica por qué una vivencia negativa anterior puede obstruir la adquisición de conocimiento en el aula?",
        "a": "Codificación amigdalar de huellas emocionales que desencadena alertas e interrumpe la conectividad prefrontal."
    },
    {
        "id": 307,
        "q": "Un maestro utiliza al inicio de cada clase una herramienta en la que los estudiantes identifican y expresan cómo se sienten. ¿Cómo funciona este recurso y qué beneficio aporta al proceso de aprendizaje?",
        "a": "Promueve conciencia sobre el estado emocional previo, reduciendo el nivel de alerta y generando condiciones de seguridad que abren la disposición cerebral hacia nuevos conocimientos."
    },
    {
        "id": 308,
        "q": "Según Brophy, ¿cuándo está en nivel óptimo la motivación?",
        "a": "Cuando la dificultad es moderada y valoran sus habilidades para dominar la tarea."
    },
    {
        "id": 309,
        "q": "¿Qué ámbitos propone Stenhouse para extraer el currículum escolar?",
        "a": "Disciplinas académicas, artes, destrezas básicas, lenguas y convenciones y valores de la enseñanza."
    },
    {
        "id": 310,
        "q": "Para ilustrar el sentido del aprendizaje por competencias, Feito recurre al caso de quien domina la ley de Ohm pero es incapaz de explicar el funcionamiento del circuito de una linterna eléctrica, con lo que sostiene que:",
        "a": "Saber implica poder movilizar lo aprendido en contextos distintos a aquel en que fue adquirido, algo que el aprendizaje memorístico no garantiza."
    },
    {
        "id": 311,
        "q": "¿Cuál de las siguientes opciones es una responsabilidad exclusiva de las Directoras y Directores de Instituciones Educativas de Educación Regular, Alternativa y Superior en el marco del Reglamento para el Fortalecimiento de la Educación Inclusiva?",
        "a": "Garantizar procesos educativos de calidad oportunos y pertinentes para la población estudiantil del ámbito de Educación Especial."
    },
    {
        "id": 312,
        "q": "Perrenoud afirma que el volumen de trabajo efectivamente realizado en el aula es, en parte, independiente de la voluntad del maestro. ¿Qué consecuencia tiene este fenómeno sobre la relación entre el currículum formal y el currículum real?",
        "a": "Confirma que la implicación del estudiante en las tareas escolares es una variable que amplía la brecha entre lo prescrito y lo aprendido."
    },
    {
        "id": 313,
        "q": "Según el enfoque de la innovación educativa promovido por la UNESCO, ¿cuál es el aporte central del estudio de la innovación educativa a la labor docente?",
        "a": "Revalorizar el rol de las y los docentes como actores del cambio educativo, reconociendo a la institución escolar como su territorio y motor de transformación."
    },
    {
        "id": 314,
        "q": "¿Por qué es fundamental la participación de la amígdala cerebral en el proceso de aprendizaje según el neuroaprendizaje?",
        "a": "Transfiere información significativa a la memoria duradera cuando va acompañada de una vivencia afectiva favorable."
    },
    {
        "id": 315,
        "q": "Según la neurociencia, ¿qué son las emociones?",
        "a": "Fenómenos psico-fisiológicos de adaptación a estímulos del entorno o de uno mismo, inevitables y de corta duración."
    },
    {
        "id": 316,
        "q": "En el marco de la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, la violencia por omisión y supresión incluye la negligencia o el abandono, y se entiende como la omisión de:",
        "a": "Responsabilidades de uno o más miembros de la familia, en relación a necesidades básicas para el desarrollo físico, emocional, social o cognitivo de las niñas, los niños y adolescentes."
    },
    {
        "id": 317,
        "q": "¿Cuál fue el propósito central que motivó el surgimiento del Aprendizaje Basado en Problemas (ABP) en 1969?",
        "a": "Reorientar la formación médica para producir profesionales integrales y con capacidad de resolver situaciones complejas de forma autónoma."
    },
    {
        "id": 318,
        "q": "La improvisación que el maestro despliega ante situaciones imprevistas en el aula se distingue de una improvisación libre porque:",
        "a": "Está regulada por el hábito profesional, que orienta la reacción del maestro sin necesidad de un plan o regla explícitos."
    },
    {
        "id": 319,
        "q": "Dentro del modelo del «Cerebro triuno», el cerebro reptiliano dota al ser humano de un sentido de territorialidad. ¿En qué consiste este sentido según dicho modelo?",
        "a": "Defender posesiones e ideas mediante lucha y resguardar el espacio interior mediante fuga."
    },
    {
        "id": 320,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿para qué situaciones específicas puede utilizarse la lluvia de ideas?",
        "a": "Enfrentar problemas, buscar ideas y para tomar decisiones propiciando motivación en un proceso grupal."
    },
    {
        "id": 321,
        "q": "De acuerdo al Escalafón Nacional del Magisterio Público, una vez que el Jefe del Distrito dicta el auto de legalización de los comprobantes de servicios, ¿a través de qué instrumento normativo se reconoce oficialmente el tiempo de servicios del docente?",
        "a": "Resolución Suprema"
    },
    {
        "id": 322,
        "q": "Conforme al Escalafón Nacional del Servicio de Educación, los maestros interinos que acreditan 10 años de servicios docentes y aprueban un examen de capacidad, ¿mediante qué instrumento legal obtienen el título que determina su incorporación definitiva en la carrera del magisterio?",
        "a": "Resolución Suprema"
    },
    {
        "id": 323,
        "q": "¿Cuál es la Resolución Ministerial que aprueba el Reglamento para el Fortalecimiento de la Educación Inclusiva en el Sistema Educativo Plurinacional – Modalidad Indirecta?",
        "a": "Resolución Ministerial N° 0069/2025"
    },
    {
        "id": 324,
        "q": "¿Qué Resolución Ministerial se encuentra en el Marco Jurídico del Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP – Modalidad Indirecta?",
        "a": "Resolución Ministerial N° 1040/2022."
    },
    {
        "id": 325,
        "q": "¿Qué se incrementa al desarrollar habilidades de autoconocimiento?",
        "a": "Autoestima."
    },
    {
        "id": 326,
        "q": "Desde la neurociencia, ¿cuáles son las dos características más importantes del cerebro humano que le permitieron sobrevivir y adaptarse a los cambios del nuevo contexto artificial creado por el propio hombre?",
        "a": "Plasticidad y supervivencia."
    },
    {
        "id": 327,
        "q": "Un maestro de historia, consciente de que la enseñanza exige combinar múltiples tareas y objetivos de manera simultánea, decide incorporar mapas, líneas de tiempo y esquemas en sus clases. Además, invita a sus estudiantes a elaborar sus propios recursos gráficos para representar los contenidos trabajados. Desde los principios psicológicos de la enseñanza, ¿qué fundamento respalda esta práctica docente?",
        "a": "Radica en que la mayoría de las personas prefieren el aprendizaje visual porque aporta una mejor retención, siendo positivo animar a los estudiantes a generar sus propios medios de aprendizaje visual."
    },
    {
        "id": 328,
        "q": "¿Cuál es la función del Personal de Apoyo respecto al acceso y protección de las instalaciones, equipamiento y mobiliario del Instituto?",
        "a": "Resguardar y cuidar las instalaciones del Instituto de manera permanente, impidiendo el ingreso no autorizado y asegurándose que el equipamiento y mobiliario estén protegidos."
    },
    {
        "id": 329,
        "q": "¿Qué implica para un docente centrarse en la necesidad como elemento de la enseñanza, tomando en cuenta que la calidad de esta solo puede probarse en términos del aprendizaje al que conduce?",
        "a": "Requiere que el docente identifique y atienda lo que los estudiantes verdaderamente necesitan aprender; por ejemplo, un profesor que detecta que su grupo no comprendió una operación matemática y reorganiza su clase para reforzar ese punto antes de avanzar."
    },
    {
        "id": 330,
        "q": "Una maestra aplica siempre las mismas rutinas sin variar su enfoque, nunca retroalimenta a sus estudiantes y mantiene expectativas bajas sobre sus capacidades. Según los principios psicológicos de la enseñanza, ¿qué tres principios fundamentales está vulnerando simultáneamente?",
        "a": "Individualizar el estilo, proporcionar retroalimentación rápida y positiva, y creer que sus estudiantes son capaces de grandes cosas."
    },
    {
        "id": 331,
        "q": "Según el “Manual de resolución de problemas”, identificar un problema significa ser capaz de observar una situación y detectar que hay algo sobre lo que se debe tomar una decisión, algo que no está funcionando correctamente o que puede...",
        "a": "Generar un conflicto."
    },
    {
        "id": 332,
        "q": "Los modelos educativos actuales demandan un proceso enseñanza-aprendizaje más activo y dinámico, en el que sus protagonistas deben:",
        "a": "Asumir roles decididos y comprometidos con sus responsabilidades, conscientes de sus implicaciones en lo personal, institucional y social."
    },
    {
        "id": 333,
        "q": "¿Qué necesidad generó en el cerebro humano la constante adaptación a distintos entornos a lo largo de la evolución?",
        "a": "Incorporar conocimientos novedosos."
    },
    {
        "id": 334,
        "q": "¿Qué rasgo diferencia a las disciplinas escolares del conocimiento científico del que provienen, según Linuesa?",
        "a": "Integran discursos, contenidos y prácticas que se transforman por los usos de las instituciones escolares."
    },
    {
        "id": 335,
        "q": "Los prejuicios de género, raciales y religiosos son mencionados en el texto de Innovación Educativa como ejemplos de un fenómeno más amplio, ¿qué función cumplen dentro del análisis de la resistencia al cambio educativo?",
        "a": "Ejemplifican modelos mentales que condicionan la valoración de los demás sin que la persona lo advierta."
    },
    {
        "id": 336,
        "q": "¿Cuál es la doble lectura que genera la aparición de las TIC y la consolidación de la era digital en relación con los sistemas educativos?",
        "a": "Implica, para muchos, el fin definitivo de la escuela tal como ha sido conocida con poca modificación, y para los sistemas educativos que buscan innovar, una última oportunidad para adaptarse."
    },
    {
        "id": 337,
        "q": "¿Qué es la amígdala, según la neurociencia?",
        "a": "Es un núcleo del cerebro profundo"
    },
    {
        "id": 338,
        "q": "¿A qué tipo de motivación se hace referencia desde las teorías cognitivas cuando la organización de la enseñanza induce un desequilibrio que impulsa al estudiante a buscar soluciones por iniciativa propia, convirtiendo el aprendizaje en un proceso con valor inherente?",
        "a": "Es una forma de motivación intrínseca en la que el aprendizaje ocurre por sí mismo, fundamentada en la necesidad de restaurar el equilibrio cognitivo mediante la indagación autónoma."
    },
    {
        "id": 339,
        "q": "Según el modelo bidimensional de enseñanza efectiva de Lowman, ¿qué característica define al maestro conferencista?",
        "a": "Presenta un entusiasmo intelectual alto y una relación interpersonal moderada."
    },
    {
        "id": 340,
        "q": "La neurociencia del aprendizaje identifica un conjunto de condiciones cerebrales fundamentales que deben estar presentes en todo proceso de enseñanza para que el aprendizaje ocurra de manera efectiva. ¿Cuáles son estos dispositivos básicos que el docente debe activar en el aula?",
        "a": "Motivación, atención, sensopercepción, emoción y memoria."
    },
    {
        "id": 341,
        "q": "Según el neuroaprendizaje, ¿qué capacidad se ve afectada negativamente en el estudiante ante niveles elevados de estrés?",
        "a": "Rendimiento y desempeño."
    },
    {
        "id": 342,
        "q": "Históricamente, ¿con qué factor se vinculaba de manera predominante el éxito docente?",
        "a": "Logros académicos."
    },
    {
        "id": 343,
        "q": "Un Centro de Capacitación Artística de carácter fiscal organiza una exposición de arte y obtiene ingresos por la venta de obras de sus estudiantes. Según la normativa vigente, ¿qué obligación debe cumplir respecto a los recursos obtenidos?",
        "a": "Llevar un registro contable financiero de ingresos y egresos de los recursos obtenidos, sujetos a fiscalización por las instancias correspondientes y de acuerdo a normativa vigente."
    },
    {
        "id": 344,
        "q": "¿Qué debe hacer la dirección colegiada o la autoridad superior del ente que ejerce tuición cuando decide no aplicar las recomendaciones del dictamen de responsabilidad ejecutiva?",
        "a": "Fundamentar dentro de los diez días hábiles siguientes a la recepción del dictamen las razones por las cuales no aplicará, bajo su responsabilidad, las recomendaciones contenidas en éste."
    },
    {
        "id": 345,
        "q": "¿Cuál es la responsabilidad de la Directora o el Director Departamental de Educación respecto a los planes de convivencia armónica y pacífica en las unidades educativas y centros de educación especial a su cargo?",
        "a": "Garantizar que cada unidad educativa y centro de educación especial cuente con su plan de convivencia armónica y pacífica."
    },
    {
        "id": 346,
        "q": "¿Cuál de las siguientes responsabilidades en el tema de violencia le corresponde de manera exclusiva al Nivel Central?",
        "a": "Prevención de la violencia contra niñas, niños y adolescentes, a partir la consolidación anual de información de casos remitidos por las Direcciones Departamentales y Distritales Educativas."
    },
    {
        "id": 347,
        "q": "¿Cuál es la responsabilidad del Ministerio de Educación respecto a la información sobre casos de violencia contra niñas, niños y adolescentes detectados en unidades educativas?",
        "a": "Consolidar anualmente la información de casos de violencia física, psicológica y sexual remitidos por las Direcciones Departamentales y Distritales para formular políticas, planes y programas de prevención."
    },
    {
        "id": 348,
        "q": "En «El sentido del currículum en la enseñanza obligatoria», ¿qué función cumple la cita de Ortega sobre el esfuerzo inútil y la melancolía?",
        "a": "Rematar irónicamente la denuncia de prácticas que exigen esfuerzo sin producir aprendizaje real."
    },
    {
        "id": 349,
        "q": "Desde el enfoque del neuroaprendizaje, un ambiente alegre, dinámico y novedoso permite:",
        "a": "Un mejor aprendizaje"
    },
    {
        "id": 350,
        "q": "¿Qué cambios fisiológicos produce la liberación de noradrenalina en el organismo?",
        "a": "Incrementa el ritmo cardíaco y la tensión arterial."
    },
    {
        "id": 351,
        "q": "Según el libro de Marilina Rotger, ¿Cuál es el efecto que produce en el cerebro del estudiante anticipar los contenidos y actividades del aula mediante una agenda visible organizada por días, semanas o meses?",
        "a": "Relaja el cerebro, reduce la ansiedad del grupo y prepara y motiva a los estudiantes para cada actividad, al eliminar la incertidumbre sobre lo que ocurrirá en la clase."
    },
    {
        "id": 352,
        "q": "¿Qué tipo de relación debe existir entre el autor y la víctima para que se configure el delito de violencia patrimonial?",
        "a": "Relación de matrimonio o unión libre entre el autor y la mujer afectada."
    },
    {
        "id": 353,
        "q": "En el marco de las atribuciones normativas reconocidas a los niveles autonómicos subnacionales para garantizar la accesibilidad de personas con discapacidad, ¿cuál de los siguientes ámbitos está expresamente contemplado como obligación de las Asambleas Legislativas Departamentales y Concejos Municipales, en concordancia con las normas regulatorias de la autoridad competente?",
        "a": "Dictar normas sobre rutas y vías peatonales accesibles, libres de barreras arquitectónicas, así como señalización en espacios públicos."
    },
    {
        "id": 354,
        "q": "Respecto a la Innovación Educativa, ¿cómo contribuye la política educativa al impulso del cambio y al avance hacia la calidad de la educación?",
        "a": "Fomentando que las instituciones educativas generen experiencias innovadoras que contribuyan a dinamizar el cambio educativo y avanzar hacia el logro de la calidad de la educación, aportando al cumplimiento de las metas educativas nacionales e internacionales."
    },
    {
        "id": 355,
        "q": "En el neuroaprendizaje, ¿qué implica un proceso neurofisiológico?",
        "a": "Creación o recreación de redes neuronales."
    },
    {
        "id": 356,
        "q": "¿Qué otra función cumple el sistema límbico?",
        "a": "Rige la percepción sensorial."
    },
    {
        "id": 357,
        "q": "¿Cuál de las siguientes opciones corresponde correctamente a una de las finalidades del Escalafón Nacional del Servicio de Educación?",
        "a": "Regula el ingreso y garantiza la continuidad de los maestros y funcionarios del ramo en el sistema educativo."
    },
    {
        "id": 358,
        "q": "En neurociencia educativa, la dopamina recibe la denominación de «amiga del aprendizaje». ¿Cuál es el fundamento neurocientífico de esta afirmación?",
        "a": "Cuando se experimenta logro o novedad, el cerebro libera dopamina."
    },
    {
        "id": 359,
        "q": "Un maestro incorpora al inicio de sus clases una actividad en la que los estudiantes intercambian abrazos entre sí. ¿Cuál es la utilidad de esta técnica para el proceso de aprendizaje?",
        "a": "Libera dopamina."
    },
    {
        "id": 360,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje. Las emociones y el aprendizaje”, ¿Qué tipo de estrezas cognitivas ha desarrollado el estudiante si conoce como extender, aplicar, analizar y crear?",
        "a": "Conexiones con experiencias previas y transferencia hacia situaciones reales"
    },
    {
        "id": 361,
        "q": "Según el “Manual de resolución de problemas”, “Es una herramienta clave para medir el nivel de habilidades de las y los estudiantes al inicio del programa y para rastrear su progreso a lo largo del mismo.” ¿Cuál es esta herramienta?",
        "a": "Diagnóstico de habilidades (pre y post)"
    },
    {
        "id": 362,
        "q": "¿Cuál es la secuencia de acuerdo al Protocolo de Prevención y Actuación que cualquier integrante de la comunidad educativa debe ejecutar al identificar, ausentismo frecuente, bajo rendimiento y señales de descuido en el higiene personal de un estudiante de 9 años con discapacidad intelectual?",
        "a": "Registrar y documentar los indicadores observados para su reporte anual y comunicar inmediatamente a la dirección de la unidad educativa, para su derivación ante la instancia que corresponda."
    },
    {
        "id": 363,
        "q": "Una estudiante es agredida de forma verbal por su maestro frente a toda la clase, en varias ocasiones. ¿Cuál es la acción inmediata que se debe seguir en esta situación por el director de la Unidad Educativa?",
        "a": "Registrar por escrito en un informe el testimonio de la estudiante con fecha y descripción de los hechos, informe que debe ser objetivo, evitando juicios de valor o supuestos, evitando la revictimización."
    },
    {
        "id": 364,
        "q": "La Ley General para Personas con Discapacidad establece obligaciones específicas en materia de comunicación para instituciones públicas, servicios privados y Unidades Educativas orientadas a la atención de personas con discapacidad auditiva y visual. ¿Qué dos condiciones deben cumplir obligatoriamente dichas instituciones para garantizar esa atención?",
        "a": "Contar con recursos humanos capacitados en lengua de señas y disponer de señalización apropiada interna y externa en la institución."
    },
    {
        "id": 365,
        "q": "¿Cuáles son los servicios especializados y gratuitos que las Casas de Acogida y Refugio Temporal deben prestar a las mujeres y, en su caso, a sus hijas e hijos?",
        "a": "Hospedaje y alimentación; programas reeducativos integrales; capacitación en habilidades laborales; y acceso prioritario al sistema de colocación de empleo."
    },
    {
        "id": 366,
        "q": "Un maestro pide a sus estudiantes que, antes de nombrar lo que sienten, identifiquen las manifestaciones físicas de su organismo para luego decidir conscientemente cómo responder. ¿Qué beneficio aporta esta práctica al aprendizaje?",
        "a": "Desarrolla la autorregulación emocional fortaleciendo la disponibilidad cognitiva para nuevos saberes."
    },
    {
        "id": 367,
        "q": "La incorporación de criterios de eficiencia en la escolarización introdujo unidades de tiempo intermedias entre la clase y la escolaridad total. ¿Qué consecuencia estructural tuvo esto sobre la práctica educativa?",
        "a": "Reforzó la especialización disciplinar sometiendo a docentes y estudiantes a un control externo mediante un orden secuencial regulado."
    },
    {
        "id": 368,
        "q": "Según los principios del neuroaprendizaje, ¿cuál es la razón fundamental por la que el maestro debe retomar los contenidos ya trabajados incorporando variaciones, nuevos ejemplos o conexiones distintas cada vez?",
        "a": "Consolidar una red neuronal nueva, pasando de la memoria de trabajo a la memoria a largo plazo."
    },
    {
        "id": 369,
        "q": "Se describe una doble reacción ante las tendencias dominantes de clasificación y normalización en la escuela. La segunda de esas reacciones, a diferencia de la primera, implica:",
        "a": "Sustituir la graduación anual por ciclos más amplios, diversificar el tratamiento pedagógico dentro de agrupamientos flexibles y aumentar las opciones para cada estudiante."
    },
    {
        "id": 370,
        "q": "Desde la perspectiva del neuroaprendizaje, cuando el aprendizaje no ocurre de forma natural en el estudiante, ¿cuál es el rol que debe asumir el maestro?",
        "a": "Intervenir y facilitar."
    },
    {
        "id": 371,
        "q": "¿Cuál es la condición fundamental para que los sistemas educativos puedan afrontar el desafío de integrar las TIC y proveer a los estudiantes con las herramientas y conocimientos necesarios para el siglo XXI?",
        "a": "Que los docentes estén preparados para empoderar a los estudiantes con las ventajas de las TIC, contando ellos mismos con las competencias y recursos necesarios en materia de tecnología."
    },
    {
        "id": 372,
        "q": "¿Cuál el objetivo de los factores que favorecen u obstaculizan la innovación?",
        "a": "Que la experiencia en desarrollo apunte efectivamente a transformaciones más profundas."
    },
    {
        "id": 373,
        "q": "Atendiendo a la integración de TIC en los procesos educativos, ¿qué capacidades deben desarrollar los alumnos para responder a los constantes cambios tecnológicos?",
        "a": "Pensar por sí mismos, actualizar su conocimiento en forma continua a medida que la tecnología avanza y apoyarse mutuamente."
    },
    {
        "id": 374,
        "q": "¿Qué define la Capacidad de Experimentación Activa según Kolb?",
        "a": "Emplear estas teorías para tomar decisiones y solucionar problemas."
    },
    {
        "id": 375,
        "q": "¿Cómo se define a la atención?",
        "a": "Proceso cognitivo que elige qué estímulos serán captados"
    },
    {
        "id": 376,
        "q": "Según María Clemente Linuesa, ¿qué papel cumplen las actividades en el ámbito del aula, más allá de su función como generadoras de aprendizaje?",
        "a": "Conforman la vida social del aula, de modo que al planificarlas se está diseñando la práctica en una doble dimensión: cognitiva y socializadora."
    },
    {
        "id": 377,
        "q": "Cuando se observan inconsistencias entre los relatos de la madre, padre, tutor o cuidador, o de la misma víctima, y lo registrado por la maestra o el maestro, es posible que se esté frente a un caso de violencia. ¿Qué acción debe considerarse en estos casos?",
        "a": "Derivación hacia el centro de salud más cercano, donde el personal de salud podrá verificar, después de una revisión física, si existe la posibilidad de que la o el estudiante sea víctima de violencia y se procederá a la derivación o denuncia ante autoridad competente."
    },
    {
        "id": 378,
        "q": "¿Cuál es el riesgo principal de una educación que no considera las modificaciones en la socialización, el desarrollo del pensamiento y la manifestación de habilidades y competencias diferenciadas en el contexto tecnológico actual?",
        "a": "Generar más problemas de los que pueda resolver y hacer excesivamente dependientes a los seres humanos de una tecnología que los supera, al no desarrollar el máximo potencial humano."
    },
    {
        "id": 379,
        "q": "¿Cuáles son los reduccionismos que cuestiona Sacristán en los debates curriculares?",
        "a": "Negar toda cultura escolar por criticar su forma empobrecida, y defender esa misma forma como si representara la cultura en su totalidad."
    },
    {
        "id": 380,
        "q": "Según el lilbro «Estilos de Aprendizaje y Métodos de Enseñanza«, ¿qué debe aplicar un maestro para mejorar su proceso de enseñanza y aprendizaje?",
        "a": "Comprensión, apreciación y aplicación de los principios psicológicos para la mejora general del proceso."
    },
    {
        "id": 381,
        "q": "Desde la neurociencia, ¿cuál es una forma efectiva de mantener una salud mental óptima?",
        "a": "Estando atentos y curiosos a los nuevos aprendizajes."
    },
    {
        "id": 382,
        "q": "¿Qué ventaja específica atribuye «Diseñar el currículum» docente?",
        "a": "Posibilita un modelo de colaboración entre docentes frente al aislamiento frecuente en los centros."
    },
    {
        "id": 383,
        "q": "El esquema de la concepción del currículum como proceso y praxis presenta un punto ciego estructural cuando se lo examina desde un contexto intercultural. ¿Cuál es?",
        "a": "Asume un aprendiz culturalmente neutro, invisibilizando cosmovisiones y epistemologías ajenas al texto oficial."
    },
    {
        "id": 384,
        "q": "Según la lógica del pensamiento sistémico aplicada a la enseñanza, el principal problema del enfoque analítico cartesiano en la escuela es que:",
        "a": "Presupone que comprender cada elemento por separado es condición suficiente para dar cuenta del fenómeno en su totalidad."
    },
    {
        "id": 385,
        "q": "En el texto de Gimeno Sacristán sobre educación obligatoria, la operación de simplificación mediante categorías o tipologías para comprender la variedad humana cumple, en primer término, una función de:",
        "a": "Anticipación del comportamiento ajeno para hacer manejable la complejidad de lo diverso en el trato cotidiano."
    },
    {
        "id": 386,
        "q": "Desde la neurociencia educativa, ¿cómo se denomina también al neocórtex?",
        "a": "Cerebro racional."
    },
    {
        "id": 387,
        "q": "El Estado Plurinacional de Bolivia establece fuentes específicas de financiamiento para la gestión pública en materia de discapacidad. ¿Cuáles son los recursos económicos destinados a este fin?",
        "a": "Recursos provenientes de la eliminación de subsidios a partidos políticos, junto con donaciones, legados y recursos de cooperación nacional e internacional."
    },
    {
        "id": 388,
        "q": "¿En un proceso disciplinario seguido a un maestro, qué recurso puede interponer si se creyere agraviado?",
        "a": "Recurso de Apelación"
    },
    {
        "id": 389,
        "q": "Aprender mediante proyectos, desde la perspectiva didáctica planteada, pretende colocar a los estudiantes en situaciones que los conduzcan a:",
        "a": "Recuperar, comprender y aplicar los diversos aprendizajes obtenidos a lo largo de su proceso formativo."
    },
    {
        "id": 390,
        "q": "El texto “Convivencia escolar y resolución pacífica de conflictos” señala que la construcción de la cultura de paz en los centros educativos exige educar en y para el conflicto (Cascón, 2001), descubriendo la perspectiva positiva del conflicto, aprendiendo a analizar los conflictos y a descubrir su complejidad y:",
        "a": "Encontrando soluciones a los conflictos que se producen en su seno."
    },
    {
        "id": 391,
        "q": "Para el neuroaprendizaje, ¿en qué proceso de la memoria se produce el análisis de la información según el estímulo?",
        "a": "Almacenamiento."
    },
    {
        "id": 392,
        "q": "Considerando la tabla de señales y consecuencias de la violencia a corto y mediano plazo en la adolescencia, referidas en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de las siguientes opciones corresponde al área cognitiva?",
        "a": "Recuerdos recurrentes, involuntarios y angustiantes sobre lo ocurrido."
    },
    {
        "id": 393,
        "q": "¿Cuál es la estructura de personal que deben tener los Centros de Capacitación Artística según la estructura institucional de la Formación Superior Artística?",
        "a": "Rector/a, Plantel Docente y Personal Administrativo."
    },
    {
        "id": 394,
        "q": "¿A cuál de los siguientes cargos corresponde la función de identificar los espacios para el desarrollo de prácticas profesionales y/o pasantías, gestionar ante las autoridades del Instituto la firma de convenios y/o alianzas estratégicas y supervisar las mismas en el marco de la normativa vigente?",
        "a": "Jefe(a) o Responsable de Carrera del Instituto."
    },
    {
        "id": 395,
        "q": "Uno de los tres elementos esenciales que propone Galtung para adoptar el enfoque humanista e integrador en un centro educativo es la “reparación”, el cual consiste en:",
        "a": "Reconstrucción del daño causado o, lo que es lo mismo, restablecer la situación que existía antes de que el conflicto estallara."
    },
    {
        "id": 396,
        "q": "Dentro de las medidas generales de prevención de la violencia en la comunidad educativa, se contempla el fortalecimiento de habilidades de autoprotección en niñas, niños y adolescentes. ¿Cuál de las siguientes opciones describe con mayor precisión estas capacidades que deben desarrollarse en el marco de esta medida?",
        "a": "Reconocer situaciones de riesgo, diferenciar entre contacto adecuado e inadecuado, establecer límites personales y comunicar oportunamente la situación a un adulto de confianza."
    },
    {
        "id": 397,
        "q": "Según el “Manual de resolución de problemas”, ¿cuál es el objetivo de la Lección 1: Qué es la resolución de problemas?",
        "a": "Reconocer que la resolución de problemas es la capacidad de identificar una dificultad y tomar medidas lógicas para encontrar una solución deseada, así como de supervisar y evaluar su implementación."
    },
    {
        "id": 398,
        "q": "Desde el neuroaprendizaje, ¿en qué nos ayudan las emociones básicas?",
        "a": "Descubrir y sobrevivir en el entorno o contexto durante los primeros años de vida."
    },
    {
        "id": 399,
        "q": "En Innovación Educativa se legitima el papel del docente investigador desde corrientes como la Pedagogía Popular, ¿qué distingue esta concepción de la investigación respecto a la visión tradicional del conocimiento pedagógico?",
        "a": "Reconoce que el maestro produce saber válido a partir de la reflexión sistemática sobre lo que acontece en su quehacer formativo cotidiano."
    },
    {
        "id": 400,
        "q": "¿Qué dispone la norma anticorrupción «Marcelo Quiroga Santa Cruz» respecto a la inmunidad, fuero o privilegio en su ámbito de aplicación?",
        "a": "No reconoce inmunidad, fuero o privilegio alguno, debiendo ser de aplicación preferente."
    },
    {
        "id": 401,
        "q": "¿En qué marco se desarrolla la Planificación Curricular de Aula, según el Reglamento para el Fortalecimiento de la Educación Inclusiva del SEP – Modalidad Indirecta?",
        "a": "Diseño Plural para los Aprendizajes"
    },
    {
        "id": 402,
        "q": "En el documento “Convivencia escolar y resolución pacífica de conflictos”, la fase del proceso mediador denominada “Análisis de los problemas” consiste en:",
        "a": "Recogida de los hechos, identificación y reconocimiento de las características generales (visibles e invisibles) de los conflictos presentados, clarificación de las posiciones, necesidades e intereses de las partes, determinación de las prioridades y delimitación de las características de los posibles acuerdos."
    },
    {
        "id": 403,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje. Las emociones y el aprendizaje”.  ¿Qué capacidad del cerebro permite compensar la privación de experiencias que no implica pérdida definitiva de destrezas?",
        "a": "Recobrar facultades perdidas con el entrenamiento."
    },
    {
        "id": 404,
        "q": "¿Qué pena se aplica a quien ayude a otra persona a cometer suicidio o la instigue a ello, cuando la muerte se hubiere intentado o consumado?",
        "a": "Reclusión de dos (2) a seis (6) años."
    },
    {
        "id": 405,
        "q": "¿Cuál es la sanción establecida para quien mate a otra u otro en estado de emoción violenta excusable?",
        "a": "Reclusión de dos (2) a ocho (8) años."
    },
    {
        "id": 406,
        "q": "¿Cuál es la sanción de reclusión establecida para quien matare a otra u otro en estado de emoción violenta excusable?",
        "a": "Reclusión de dos (2) a ocho (8) años"
    },
    {
        "id": 407,
        "q": "Según el libro de Marilina Rotger, un cerebro que, por razones médicas, hubiera perdido plasticidad, no podrá:",
        "a": "Aprender nuevas cosas"
    },
    {
        "id": 408,
        "q": "Un maestro identifica que sus creencias sobre el rol del docente le impiden adoptar nuevas formas de enseñanza. Según el texto de Innovación Educativa, ¿qué condición es indispensable para que pueda sustituir ese modelo mental por otro más funcional?",
        "a": "Haber identificado, observado y reconocido cómo ese modelo mental actúa sobre sus propias decisiones, como condición indispensable para impulsar un cambio pedagógico genuino y sostenido."
    },
    {
        "id": 409,
        "q": "¿Cuál de las siguientes consecuencias a corto plazo dentro de la agresión corresponde a la categoría conductual, en un caso de violencia sexual?",
        "a": "Rechazo a la autoridad y referentes adultos."
    },
    {
        "id": 410,
        "q": "En materia de prevención de la violencia en la comunidad educativa, ¿cuál de las siguientes condiciones debe cumplirse obligatoriamente cuando los trabajos curriculares requieren apoyo fuera del horario regular de clases?",
        "a": "Realizarlo preferentemente en grupo, contando con el consentimiento expreso de las madres, padres y/o tutores de los estudiantes involucrados."
    },
    {
        "id": 411,
        "q": "En el marco de la contención emocional de emergencia, ¿qué acción vulnera el protocolo de intervención en casos de violencia?",
        "a": "Emitir juicios de valor con relación a lo sucedido."
    },
    {
        "id": 412,
        "q": "¿Cuál de las siguientes es una función específica tanto de los maestros de apoyo de estudiantes con condición o Trastorno del Espectro Autista como de discapacidad intelectual, dentro del Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP – Modalidad Indirecta?",
        "a": "Realizar talleres de formación y sensibilización dirigidos a la comunidad educativa."
    },
    {
        "id": 413,
        "q": "En la tabla de “Orientaciones cuando se conoce un caso de violencia”, de la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, denominado “Durante la intervención” ante un caso de violencia detectado. ¿Cuál de las siguientes opciones identifica lo que NO se puede hacer en este momento?",
        "a": "No realizar preguntas con respuestas de sí/no"
    },
    {
        "id": 414,
        "q": "¿Qué acción debe realizar el Docente tras participar en becas, conferencias, seminarios, simposios o congresos?",
        "a": "Realizar la réplica en el Instituto a docentes y estudiantes."
    },
    {
        "id": 415,
        "q": "¿Cuál de las siguientes opciones describe correctamente el conjunto completo de responsabilidades de las Maestras y Maestros de Aula, de acuerdo con el “Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP - Modalidad Indirecta”?",
        "a": "Planificar con enfoque inclusivo, garantizar procesos educativos de calidad, sensibilizar sobre diversidad y desarrollar evaluaciones con instrumentos adecuados."
    },
    {
        "id": 416,
        "q": "Una persona con discapacidad acude a un centro de salud público solicitando orientación en planificación familiar. El personal de salud propone someterla a esterilización sin su consentimiento. ¿Qué obligación tiene el Estado Plurinacional de Bolivia frente a esta situación?",
        "a": "Asegurar, en todos los servicios públicos de salud, el acceso a información sobre salud sexual y reproductiva, resguardando a la persona con discapacidad frente a esterilizaciones forzadas o imposición de anticonceptivos, a través de servicios especializados de planificación familiar."
    },
    {
        "id": 417,
        "q": "¿Qué debe procurar evitar el Ministerio Público al reunir las pruebas en casos de violencia contra las mujeres?",
        "a": "Someter a la mujer agredida a pruebas médicas, interrogatorios, reconstrucciones o peritajes, careos que constituyan revictimización."
    },
    {
        "id": 418,
        "q": "¿Qué acción de la comunidad educativa hacia una víctima de violencia, que aparenta ser una medida de apoyo y protección, es identificada como una forma de revictimización que debe evitarse?",
        "a": "Sobreproteger a la víctima, observarla constantemente o ignorarla."
    },
    {
        "id": 419,
        "q": "En el marco de la neurociencia educativa, comprender qué es una emoción resulta fundamental para que el docente interprete el comportamiento de sus estudiantes y diseñe entornos de aprendizaje adecuados. ¿Cuál de las siguientes definiciones describe correctamente a la emoción desde una perspectiva neurológica?",
        "a": "Reacción subjetiva al ambiente con cambios orgánicos de origen innato"
    },
    {
        "id": 420,
        "q": "¿Qué dispositivos básicos del aprendizaje deben estar presentes en cada proceso de enseñanza?",
        "a": "Atención, motivación, memoria, sensopercepción y emoción."
    },
    {
        "id": 421,
        "q": "Según la tabla de factores de riesgo para la violencia descrita en la “Guía para la Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de los siguientes enunciados corresponde a uno de los factores familiares?",
        "a": "Número de miembros, niñas y niños que conforman el hogar."
    },
    {
        "id": 422,
        "q": "Durante los primeros años de vida, el cerebro infantil experimenta una aceleración de conexiones neuronales que explica la extraordinaria velocidad con la que los niños adquieren nuevos aprendizajes. ¿Qué proceso neurológico subyace a este fenómeno?",
        "a": "Sobreproducción y posterior selección sináptica."
    },
    {
        "id": 423,
        "q": "En «Diseño, desarrollo e innovación del currículum», cada autor aborda el currículum desde una perspectiva distinta. ¿Qué autor lo analiza prioritariamente desde la sociología de la experiencia escolar y las desigualdades que reproduce?",
        "a": "Rafael Feito Alonso"
    },
    {
        "id": 424,
        "q": "Según la neurociencia, ¿qué tipos de emociones existen en el ser humano?",
        "a": "Primarias y secundarias."
    },
    {
        "id": 425,
        "q": "Según el modelo del «Cerebro triuno», ¿en qué cerebro están presentes las funciones ejecutivas?",
        "a": "Racional"
    },
    {
        "id": 426,
        "q": "¿Cuál de los siguientes enunciados ilustra mejor que la conciencia de los efectos de socialización escolar es más clara que la de los mecanismos que los producen?",
        "a": "Quienes acusan a la escuela de no formar el espíritu de sacrificio lo hacen globalmente, sin señalar prácticas concretas."
    },
    {
        "id": 427,
        "q": "Según el Reglamento del Escalafón Nacional del Servicio de Educación, ¿qué condición define a una persona como jefe de familia para los efectos de dicho reglamento?",
        "a": "Quien tenga un hijo menor a su cargo."
    },
    {
        "id": 428,
        "q": "De acuerdo con las definiciones establecidas en la Ley Integral para Garantizar a las Mujeres una Vida Libre de Violencia, ¿quién es considerado “Agresor o Agresora”?",
        "a": "Quien comete una acción u omisión que implique cualquier forma de violencia hacia la mujer u otra persona."
    },
    {
        "id": 429,
        "q": "Según «El currículum real y el trabajo escolar», ¿qué ocurre con los aprendizajes producidos por el currículum oculto una vez concluida la escolaridad?",
        "a": "Se transfieren a otros grupos y organizaciones, siendo pertinentes para la integración social en su sentido más amplio."
    },
    {
        "id": 430,
        "q": "En «Diseñar el currículum», ¿qué argumento esgrimía Kirk (1989) frente a quienes objetaban las limitaciones del currículum común?",
        "a": "Que dichas limitaciones serían resueltas mediante la respuesta profesional de los docentes en su quehacer."
    },
    {
        "id": 431,
        "q": "Se objeta que el currículum común no puede atender adecuadamente la diversidad del alumnado. Desde Kirk, ¿cómo se responde a esta objeción?",
        "a": "Que las limitaciones del currículum común quedan resueltas en el quehacer profesional de los docentes."
    },
    {
        "id": 432,
        "q": "Una maestra planifica sus actividades de aula enfocándose exclusivamente en los contenidos que los estudiantes deben aprender. ¿Qué dimensión esencial de las actividades está omitiendo según Linuesa?",
        "a": "Que las actividades también configuran la vida social del aula y los esquemas prácticos del docente."
    },
    {
        "id": 433,
        "q": "Una maestra plantea una actividad grupal con el único propósito de que los estudiantes aprendan un contenido específico. Según el texto «Diseñar el currículum», ¿qué concepción limitada revela esta decisión?",
        "a": "Que reduce las intenciones curriculares a un solo fin, ignorando que las actividades propician fines múltiples simultáneos."
    },
    {
        "id": 434,
        "q": "El conocimiento que circula en la escuela no equivale a la ciencia, la literatura o la historia en abstracto. ¿Qué proceso explica esa diferencia?",
        "a": "Que los usos y códigos escolares lo seleccionan, ordenan y empaquetan con moldes propios."
    },
    {
        "id": 435,
        "q": "¿Cuál es una miseria señalada sobre el libro de texto?",
        "a": "Que su uso ha generado movimientos de rechazo al ser responsable de una pedagogía que empobrece el conocimiento escolar."
    },
    {
        "id": 436,
        "q": "Cuando se examina el papel de la escuela en la formación del sentido común, ¿qué limitación fundamental se reconoce a esa función?",
        "a": "Que la escolarización no es condición necesaria para su adquisición, pues está contenido en toda práctica social."
    },
    {
        "id": 437,
        "q": "¿Qué posición puede inferirse del análisis que hace Sacristán sobre los enfoques tecnocráticos en educación?",
        "a": "Que representan una forma de despolitización aparente que en realidad consolida opciones ideológicas sin someterlas a debate."
    },
    {
        "id": 438,
        "q": "¿Qué crítica a la psicología puede detectarse en «El significado del currículum»?",
        "a": "Que el conductismo y la psicometría redujeron el aprendizaje a lo observable, ignorando la construcción de significados."
    },
    {
        "id": 439,
        "q": "¿Qué se puede derivar del hecho de que la lectura del libro de texto no sea considerada recreativa?",
        "a": "Que el estudiante lo abandona en cuanto concluye satisfactoriamente las tareas académicas asociadas a él."
    },
    {
        "id": 440,
        "q": "¿Qué visión puede inferirse sobre los otros materiales o fuentes de información además del libro de texto?",
        "a": "Que su existencia evidencia las limitaciones del libro de texto, aunque no han logrado desplazar su uso dominante en la escolaridad."
    },
    {
        "id": 441,
        "q": "Según Perrenoud, en el texto «El Currículum real y el trabajo escolar», ¿qué revela el análisis de las disciplinas consideradas poco selectivas respecto al funcionamiento de la organización escolar?",
        "a": "Que no todos los componentes curriculares tienen igual peso funcional para la organización."
    },
    {
        "id": 442,
        "q": "¿Qué revela la apariencia del libro de texto sobre su peculiaridad como objeto cultural?",
        "a": "Que su apariencia delata su contenido y activa las connotaciones derivadas de las experiencias escolares asociadas a su uso."
    },
    {
        "id": 443,
        "q": "¿Qué critican algunas posiciones más radicales sobre la cultura transmitida por los libros de texto?",
        "a": "Que son una herramienta cultural ligada a una metodología conservadora que transmite conocimientos empobrecidos."
    },
    {
        "id": 444,
        "q": "¿A qué están obligados los Institutos respecto a los mecanismos de difusión destinados a su promoción y publicidad?",
        "a": "Que sean veraces, ajustándose a la naturaleza, características, condiciones y finalidad del servicio de formación técnica tecnológica en el marco de la normativa vigente."
    },
    {
        "id": 445,
        "q": "¿Qué condición establece «Diseñar el currículum» para que el concepto de autonomía del centro no resulte problemático?",
        "a": "Que permita generar cambios e innovaciones propias articulando el trabajo docente colaborativamente."
    },
    {
        "id": 446,
        "q": "De acuerdo con el “Manual de resolución de problemas”, una parte importante del proceso para solucionar un problema es recurrir a lo que sabemos sobre éste y a delimitarlo con precisión para poderlo resolver antes de:",
        "a": "Que se vuelva inmanejable."
    },
    {
        "id": 447,
        "q": "¿Qué condición debe cumplirse para que el cambio en las instituciones educativas constituya una cultura arraigada y no una tendencia transitoria?",
        "a": "Que sea abordada desde una postura crítica fundamentada en principios que orienten la transformación con sentido reflexivo, ético y contextualizado."
    },
    {
        "id": 448,
        "q": "Cuando los docentes prueban nuevas ideas y desarrollan nuevas prácticas, ¿qué condición institucional resulta indispensable para sostener ese proceso innovador?",
        "a": "Que exista un clima de confianza y apoyo que permita atreverse a asumir riesgos y que no censure los errores, ya que éstos forman parte del proceso y también constituyen una fuente de aprendizaje."
    },
    {
        "id": 449,
        "q": "El cambio pedagógico puede producirse a distintas escalas dentro del entorno formativo, ¿qué característica lo distingue de los procesos de transformación que operan exclusivamente desde el nivel central?",
        "a": "Que incide en algún aspecto estructural para mejorar la formación, pudiendo generarse desde el aula, la institución o el conjunto del entorno formativo sin restricción."
    },
    {
        "id": 450,
        "q": "Para aprovechar de manera efectiva el poder de las TIC en educación, ¿cuáles son las condiciones esenciales que deben cumplirse?",
        "a": "Que los alumnos y docentes tengan acceso suficiente a tecnologías digitales e internet; que dispongan de contenidos educativos digitales significativos, de calidad y culturalmente pertinentes; y que los docentes posean las habilidades necesarias para ayudar a los alumnos a alcanzar altos niveles académicos mediante el uso de recursos digitales."
    },
    {
        "id": 451,
        "q": "Desde los criterios de permanencia del cambio pedagógico, ¿qué elemento garantiza que una práctica transformadora se mantenga vigente más allá de la rotación de las autoridades del centro formativo?",
        "a": "Que se arraigue articulando la identidad colectiva, la finalidad compartida y la política territorial propia, independientemente de quienes conduzcan el centro."
    },
    {
        "id": 452,
        "q": "Sacristán plantea una condición necesaria para que cualquier propuesta cultural escolar produzca un cambio real en la intermediación didáctica. ¿Cuál es esa condición?",
        "a": "Que se alteren los mecanismos que producen la intermediación, pues toda propuesta cultural será siempre mediatizada por ellos."
    },
    {
        "id": 453,
        "q": "¿Qué característica del aprendizaje del sentido común lo convierte, según Perrenoud, en el componente mejor escondido del currículum oculto?",
        "a": "Que salta a la vista precisamente porque se presenta como la única forma posible de ver el mundo, ocultando así su carácter arbitrario."
    },
    {
        "id": 454,
        "q": "Según el texto de Innovación Educativa, ¿cuál es el principal obstáculo que presentan los modelos mentales para el cambio en las personas e instituciones educativas?",
        "a": "Que operan sobre la persona condicionándola sin que esta se percate de ello."
    },
    {
        "id": 455,
        "q": "Un equipo docente intenta impulsar cambios en su unidad educativa, pero encuentra obstáculos que no logra identificar ni explicar con claridad. Según el texto de Innovación Educativa, ¿qué hace que esos obstáculos sean difíciles de superar?",
        "a": "Que no se perciben con facilidad ni se puede determinar con claridad desde dónde se originan."
    },
    {
        "id": 456,
        "q": "Desde el enfoque de Innovación Educativa, ¿qué condición distingue a una experiencia innovadora sostenible de una iniciativa aislada sin continuidad institucional?",
        "a": "Que vincule de manera coherente el propósito formativo, el entorno sociocultural y las orientaciones organizacionales que le dan soporte y proyección a largo plazo."
    },
    {
        "id": 457,
        "q": "Sacristán sitúa en los siglos XVI y XVII la consolidación de un dispositivo que resultó decisivo para la escolaridad tal como hoy la conocemos. ¿Qué lo hace históricamente significativo más allá de su función organizativa?",
        "a": "Que articuló contenidos, tiempos y sujetos en un orden normativo cuyas estructuras básicas perduran hasta hoy."
    },
    {
        "id": 458,
        "q": "La afirmación de que de todas las codificaciones posibles la escritura se convirtió en la dominante con la escolaridad, ¿qué presupone?",
        "a": "Que la institución escolar ha sido el agente que ha determinado qué forma de codificación adquiere legitimidad cultural."
    },
    {
        "id": 459,
        "q": "Según Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», un docente formula objetivos demasiado abstractos, otros excesivamente concretos y la mayoría limitados a habilidades cognitivas de nivel inferior, sin relacionarlos con la meta general del curso. ¿Qué criterios fundamentales está ignorando en la formulación de sus objetivos?",
        "a": "Que los objetivos deben describir lo que los estudiantes deben saber o ser capaces de hacer, no ser demasiado abstractos ni concretos, y cada objetivo debe apoyar la meta general del curso siendo no más de seis."
    },
    {
        "id": 460,
        "q": "¿Qué implica, en «El currículum real y el trabajo escolar», que la escuela sea más partidaria del orden y el esfuerzo que del espíritu crítico o la creatividad?",
        "a": "Que puede prescindir de ciertos aprendizajes del currículum formal acomodándose a estudiantes dóciles."
    },
    {
        "id": 461,
        "q": "¿Qué revela, según Perrenoud, el hecho de que algunos maestros administren pruebas con todas las características de la evaluación formal pero sin asignar nota?",
        "a": "Que en ciertas clases el trabajo escolar ordinario se concibe explícitamente como preparación para la evaluación con nota."
    },
    {
        "id": 462,
        "q": "¿Qué exigencia cognitiva y procedimental plantea el principio de «fomentar el aprendizaje activo» dentro de los fundamentos de la enseñanza efectiva para que el conocimiento sea verdaderamente asimilado por el estudiante?",
        "a": "Que los estudiantes hablen de lo que aprenden, escriban sobre ello, lo relacionen con experiencias pasadas y lo apliquen a su vida cotidiana, haciendo del saber una parte integral de sí mismos."
    },
    {
        "id": 463,
        "q": "¿Qué consecuencia tiene, según Perrenoud, el hecho de que los maestros dispongan de distintos hábitos y esquemas generadores de contenidos aunque hayan recibido la misma formación?",
        "a": "Que la unidad curricular proclamada en los textos no se corresponde con lo que efectivamente ocurre en cada aula."
    },
    {
        "id": 464,
        "q": "La intermediación cultural didáctica produce resultados muy dispares en la escolaridad. ¿Qué condición distingue los casos en que logra preservar la calidad del conocimiento de aquellos en que lo deforma?",
        "a": "Que la calidad cultural y pedagógica del profesorado y los textos reflejen los valores primigenios del contenido intermediado."
    },
    {
        "id": 465,
        "q": "¿Qué implica, en «El currículum real y el trabajo escolar», que la escolarización no sea condición necesaria para la formación del sentido común?",
        "a": "Que el sentido común es difuso y está contenido en las prácticas e interacciones cotidianas más allá del contexto escolar."
    },
    {
        "id": 466,
        "q": "Un director de una unidad educativa observa que todos sus maestros siguen empleando exclusivamente la lección magistral como única estrategia, sin considerar que los estilos de enseñanza han evolucionado significativamente. Si se analiza esta situación según lo sostenido por Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», ¿qué transformación fundamental están ignorando estos docentes?",
        "a": "Que en los últimos años ha habido un cambio notable de actividades basadas en lección magistral hacia actividades centradas en los estudiantes, siendo esta transformación parte de la propia naturaleza de los estilos."
    },
    {
        "id": 467,
        "q": "¿Qué crítica implícita formula Feito al señalar que cuando se recomienda la lectura de libros en secundaria estos son casi siempre de literatura?",
        "a": "Que la lectura se concibe como un fin en sí mismo vinculado al placer estético, ignorando su función como herramienta de acceso al conocimiento en cualquier disciplina."
    },
    {
        "id": 468,
        "q": "¿Qué argumento de Sacristán relativiza las críticas más rotundas sobre el libro de texto?",
        "a": "Que la crítica más radical no contempla matices y resulta excesivamente rotunda como valoración general."
    },
    {
        "id": 469,
        "q": "¿Qué condición establece «El currículum real y el trabajo escolar» para que pueda hablarse de currículum oculto en sentido estricto?",
        "a": "Que las rutinas escolares generen regularmente aprendizajes ignotos, ajenos a los que la escuela declara querer favorecer."
    },
    {
        "id": 470,
        "q": "Un funcionario defiende el currículum básico argumentando que genera cohesión social y objetividad entre todos los estudiantes. Según el texto «Diseñar el currículum», ¿qué objeción formula Apple a este argumento?",
        "a": "Que esos fines son inalcanzables ante las profundas diferencias culturales, económicas y sociales de las que parten los estudiantes."
    },
    {
        "id": 471,
        "q": "¿Qué revelan en conjunto las nuevas líneas de trabajo en torno al currículum que indagan el cruce de dimensiones, conflictos y realidades?",
        "a": "Que el currículum es un campo importante para la investigación que exige un enfoque holístico e interdisciplinar."
    },
    {
        "id": 472,
        "q": "Cuando Perrenoud cuestiona la oposición frontal entre currículum manifiesto y oculto, ¿qué implicación tiene eso para comprender los aprendizajes escolares?",
        "a": "Que los aprendizajes se ubican en un espectro sin ruptura entre lo declarado y lo inconsciente."
    },
    {
        "id": 473,
        "q": "¿Qué implica, según Perrenoud, la afirmación de que los maestros deben tanto a su escolaridad general como a su formación pedagógica?",
        "a": "Que el dominio personal de la cultura a enseñar es tan constitutivo del currículo real como la preparación metodológica."
    },
    {
        "id": 474,
        "q": "¿Qué implica, según el texto «El currículum real y el trabajo escolar», que la excelencia escolar se identifique en la práctica con el ejercicio cualificado del oficio de alumno?",
        "a": "Que la evaluación informal valora también el ajuste del alumno a las rutinas de la organización escolar."
    },
    {
        "id": 475,
        "q": "En el texto de Innovación Educativa, ¿qué implica afirmar que la innovación es el resultado de un proceso acumulativo de sucesivos cambios?",
        "a": "Que lo nuevo se transforma y se define en relación con lo anterior, distinguiéndose del inventar, que implica hallar o descubrir algo nuevo o desconocido en el proceso."
    },
    {
        "id": 476,
        "q": "¿Qué implica asumir el principio de sospecha epistémica en el pensamiento pedagógico?",
        "a": "Que lo evidente es solo la parte visible del iceberg, pues las intenciones no siempre se corresponden con lo que realmente se hace en la enseñanza."
    },
    {
        "id": 477,
        "q": "Las TIC se definen como el conjunto de herramientas, soportes y canales desarrollados y sustentados por las tecnologías —telecomunicaciones, informática, programas, computadores e internet— que permiten la adquisición, producción, almacenamiento, tratamiento, comunicación, registro y presentación de informaciones en forma de voz, imágenes y datos. ¿Qué elemento distingue esta definición de una concepción meramente instrumental de las TIC?",
        "a": "Que las TIC trascienden la dimensión instrumental al incorporar como finalidad explícita la mejora de la calidad de vida de las personas, lo que orienta el uso de sus herramientas, soportes y canales hacia un propósito humano y social que va más allá de la mera gestión y transmisión de información."
    },
    {
        "id": 478,
        "q": "¿Cuál es la condición fundamental para que las TIC contribuyan verdaderamente a la comprensión de los estudiantes?",
        "a": "Que la comprensión requiere una participación activa de los estudiantes mediante la transformación y revisión interna del contenido recibido."
    },
    {
        "id": 479,
        "q": "Considerando que la innovación está fundamentada sobre el aprendizaje ligado a la acción transformadora del mundo, ¿qué condición permite que el espacio de innovación-aprendizaje logre sus impactos en los múltiples ámbitos de la sociedad?",
        "a": "Que sus rasgos distintivos sean deliberadamente estructurados y proyectados de manera colectiva, dado que sus efectos no emergen de forma fortuita."
    },
    {
        "id": 480,
        "q": "¿Qué condición es indispensable para que la incorporación de las TIC a los procesos de enseñanza sea verdaderamente efectiva?",
        "a": "Que se produzcan otros cambios en el sistema de enseñanza, más allá de la sola introducción de nuevas tecnologías."
    },
    {
        "id": 481,
        "q": "¿Qué tensión revela la coexistencia, en el mismo sistema educativo, de pruebas externas que evalúan competencias y evaluaciones internas que privilegian lo memorístico?",
        "a": "Que los estudiantes son formados con un modelo pero evaluados externamente con criterios para los que no fueron preparados."
    },
    {
        "id": 482,
        "q": "Dos maestros reciben el mismo programa oficial y la misma formación pedagógica, pero sus clases producen aprendizajes notablemente distintos. ¿Qué explica este fenómeno según Perrenoud?",
        "a": "Que cada maestro moviliza esquemas generadores de contenidos, imágenes de la cultura y valores distintos."
    },
    {
        "id": 483,
        "q": "Considerando que la innovación está fundamentada en el aprendizaje ligado a la acción transformadora del mundo, ¿qué condición permite que el espacio de innovación-aprendizaje logre sus impactos en los múltiples ámbitos de la sociedad?",
        "a": "Que las características de la innovación sean organizadas y planificadas, dado que estas no se producen por generación espontánea."
    },
    {
        "id": 484,
        "q": "El aumento exponencial de la velocidad de procesamiento de información multimedia coloca a los jóvenes en clara ventaja frente a sus familiares adultos e incluso frente a los docentes. ¿Qué implicación pedagógica se desprende de esta realidad para la función docente?",
        "a": "Que el docente debe reconocer la brecha generacional en el procesamiento de información multimedia y reconfigurar sus estrategias pedagógicas para incorporar formatos que respondan a la velocidad y naturaleza multimodal con que los jóvenes procesan y construyen conocimiento."
    },
    {
        "id": 485,
        "q": "Entre las dimensiones estructurantes del currículum figuran las opciones epistémicas acerca del conocimiento. ¿Qué consecuencia tiene su carácter estructurante sobre la práctica educativa?",
        "a": "Que prefiguran qué se considera conocimiento legítimo, condicionando lo que puede enseñarse y aprenderse antes de que el docente intervenga."
    },
    {
        "id": 486,
        "q": "¿Qué implica que la experiencia de otros solo pueda apropiarse de manera indirecta como fuente de aprendizaje?",
        "a": "Que el ámbito de lo experimentable personalmente es tan reducido que obliga a recurrir al archivo de la experiencia ajena."
    },
    {
        "id": 487,
        "q": "Al reflexionar sobre el alcance de los cambios emprendidos en el aula o en la gestión institucional, ¿cuál es el criterio que distingue una innovación educativa de una simple mejora?",
        "a": "Que la experiencia desarrollada apunte efectivamente a modificaciones profundas en el hecho formativo, pues solo así puede afirmarse que se está ante un proceso genuinamente transformador."
    },
    {
        "id": 488,
        "q": "En el marco de la innovación tecnológica aplicada a la formación técnica, ¿cuál de los siguientes criterios permite afirmar que una práctica docente mediada por TIC ha alcanzado el nivel más alto de integración según el modelo SAMR?",
        "a": "Que la tecnología posibilite experiencias de aprendizaje técnico cualitativamente nuevas, inéditas e imposibles de replicar sin su uso, transformando roles, procesos y resultados formativos."
    },
    {
        "id": 489,
        "q": "Desde la dimensión tecnológica de la innovación educativa, ¿qué condición impide que la incorporación de tecnología digital se convierta en una experiencia innovadora educativa genuina?",
        "a": "Que la tecnología educativa se implemente sin articular finalidad pedagógica ni contexto cultural institucional."
    },
    {
        "id": 490,
        "q": "Según Mangham (1979) en el texto de Innovación Educativa, ¿qué revelan los estudios sobre micropolítica y cambio al sostener que la innovación refleja el fuerte apoyo de unos y la férrea oposición de los otros?",
        "a": "Que los conflictos de intereses son inherentes a la innovación, y cada grupo moviliza todos sus recursos para promoverla o resistirla."
    },
    {
        "id": 491,
        "q": "La regulación curricular construye un estándar que trasciende la organización de contenidos. ¿Qué implica estructuralmente ese estándar para el funcionamiento de la institución escolar?",
        "a": "Que fija el parámetro desde el cual se juzga el éxito, el fracaso y la normalidad de instituciones, docentes y estudiantes."
    },
    {
        "id": 492,
        "q": "¿Qué tensión implícita revela el texto «El sentido del currículum en la enseñanza obligatoria» cuando señala que las preguntas que el alumnado considera relevantes explorar son precisamente las que la escuela no está organizada para responder?",
        "a": "Que la organización disciplinar del currículo es estructuralmente incompatible con las preguntas que más movilizan el interés genuino del alumnado."
    },
    {
        "id": 493,
        "q": "¿Qué revela el hecho de que en la evaluación formal se repitan tareas que constituyen «el pan nuestro de cada día» del escolar?",
        "a": "Que la evaluación formal mide en realidad el dominio del currículum real, no el de los objetivos generales prescritos."
    },
    {
        "id": 494,
        "q": "Los proyectos curriculares elaborados con regulación específica y plazos determinados generan poco compromiso docente porque no se perciben como una necesidad surgida de los propios docentes y carecen de elementos motivadores ni recompensas prácticas. ¿Qué condición es necesaria para que un proceso de renovación curricular sea genuinamente asumido por los docentes?",
        "a": "Que el proceso sea percibido por los docentes como una necesidad propia, respaldado por elementos motivadores y recompensas prácticas que generen compromiso real, en lugar de ser impuesto mediante regulaciones externas con plazos predeterminados."
    },
    {
        "id": 495,
        "q": "Según Gimeno Sacristán, ¿qué implica que el currículum sea una selección regulada de contenidos y no una transmisión neutral del conocimiento disponible?",
        "a": "Que al definir qué se enseña, simultáneamente se estipula qué no se puede ni debe enseñar, evidenciando que el currículum expresa opciones de poder e intereses."
    },
    {
        "id": 496,
        "q": "La introducción de las TIC en las aulas obliga al docente a salir de su rol clásico como única fuente de conocimiento, otorgando al alumno mayor autonomía y responsabilidad en el aprendizaje, generando incertidumbres, tensiones y temores que exigen una readecuación creativa de la institución. ¿Qué implicación organizacional se desprende de este planteamiento?",
        "a": "Que la mayor autonomía y responsabilidad que las TIC otorgan al alumno en el proceso de aprendizaje implica que la institución debe redefinir creativamente los roles de docentes y estudiantes, asumiendo que las tensiones e incertidumbres generadas son parte constitutiva del proceso de transformación institucional."
    },
    {
        "id": 497,
        "q": "¿Qué consecuencia encuentra Habermas en el papel del saber en la sociedad moderna respecto de la productividad?",
        "a": "Que el saber se ha hecho ajeno a la formación en la medida en que ha impregnado la praxis profesional subordinándose a la productividad."
    },
    {
        "id": 498,
        "q": "¿Qué aspecto del criterio epistemológico resulta más relevante para la didáctica, según «Diseñar el currículum»?",
        "a": "Que cada tipo de disciplina requiere planteamientos didácticos en cierto modo diferenciales."
    },
    {
        "id": 499,
        "q": "Según Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», un docente aplica la misma estrategia para todos sus estudiantes sin considerar sus diferencias individuales en la forma de procesar la información. ¿Qué principio fundamental del modelo de Kolb está ignorando y cuáles son los estilos que este modelo diferencia?",
        "a": "Que la preferencia por cada polo de las dos dimensiones determina el patrón de conducta, siendo divergentes, asimiladores, convergentes y acomodadores los cuatro perfiles diferenciados."
    },
    {
        "id": 500,
        "q": "Si se diseñan actividades donde algunos estudiantes parten de experiencias directas y otros de lecturas teóricas, pero todos transforman sus vivencias en conocimiento mediante reflexión y experimentación. ¿Qué planteamiento de Kolb sustenta esta práctica pedagógica?",
        "a": "Que podemos partir de una experiencia concreta o de una conceptualización abstracta, transformándose en conocimiento cuando reflexionamos y cuando experimentamos, destacando las fases de teorizar, experimentar, actuar y reflexionar."
    },
    {
        "id": 501,
        "q": "Las TIC no son suficientes ni imprescindibles para el desarrollo humano, aunque su permanencia en el contexto contemporáneo es inevitable, por lo que resulta urgente encausarlas hacia un papel social al servicio del desarrollo colectivo y los sectores más necesitados. ¿Qué principio orienta la relación entre las TIC y el desarrollo humano?",
        "a": "Que las TIC deben ser encausadas hacia un papel social que las subordine al servicio del desarrollo de los pueblos y los sectores más necesitados, reconociendo que su presencia es inevitable pero que su contribución al desarrollo humano depende de la orientación con que sean gestionadas y no de su mera disponibilidad."
    },
    {
        "id": 502,
        "q": "¿Cuál es el límite de la pena impuesta para que pueda ser reemplazada por una sanción alternativa a la privación de libertad en delitos de violencia hacia las mujeres?",
        "a": "Que la pena impuesta no sea mayor a tres años."
    },
    {
        "id": 503,
        "q": "¿Qué condición es indispensable para que la innovación educativa logre impactos en los múltiples ámbitos de la sociedad?",
        "a": "Que el espacio de innovación-aprendizaje sea organizado y planificado, dado que sus características no se producen por generación espontánea."
    },
    {
        "id": 504,
        "q": "Un maestro observa que sus estudiantes recuerdan con facilidad cómo andar en bicicleta, pero tienen dificultades para explicar verbalmente los pasos que siguieron para aprenderlo. ¿Qué revela esta diferencia sobre la organización de la memoria y cómo debería considerarla en su práctica docente?",
        "a": "Que existe una memoria de capacidad ilimitada y duración indefinida que se divide en memoria explícita —que almacena hechos, conceptos y experiencias conscientes— y memoria implícita —que guarda habilidades, hábitos y procedimientos automatizados sin acceso consciente directo—."
    },
    {
        "id": 505,
        "q": "En el balance del proyecto de aula sobre el agua y la ciudad presentado en el texto de Innovación Educativa, ¿qué revela pedagógicamente la dificultad de articular los distintos contenidos del plan de estudios con dicha temática?",
        "a": "Que la integración transversal en experiencias de aula no emerge espontáneamente, sino que demanda un esfuerzo deliberado y sistemático de articulación entre áreas."
    },
    {
        "id": 506,
        "q": "Sacristán advierte que los docentes no operan en el vacío ni desde la nada al intentar orientar su práctica. ¿Qué consecuencia tiene esto sobre su capacidad de acción pedagógica?",
        "a": "Que actúan dentro de contextos estructurantes que prefiguran lo que parece posible y normal antes de cualquier decisión docente."
    },
    {
        "id": 507,
        "q": "La mejora de la calidad educativa resulta imposible de ejecutar dentro del paradigma educativo tradicional, al cual desde hace décadas se le exigen cambios sustanciales en vez de meras reformas. ¿Qué implicación se desprende de este planteamiento para la transformación del sistema educativo?",
        "a": "Que la imposibilidad de mejorar la calidad educativa dentro del paradigma tradicional exige cambios sustanciales en el sistema educativo, pues las meras reformas resultan insuficientes para garantizar la educación como derecho fundamental que impacte efectivamente en la calidad de vida de las personas."
    },
    {
        "id": 508,
        "q": "¿Qué visión sobre la cultura de la imagen se desprende del texto en relación con los libros de texto?",
        "a": "Que el libro de texto no puede absorber la profusión de imágenes ni competir en atractivo con otros materiales del mercado."
    },
    {
        "id": 509,
        "q": "Perrenoud afirma que el currículum oculto produce efectos más allá de la escolaridad, pertinentes para la integración social en su sentido más amplio. ¿Qué implicación tiene esto para la comprensión del «oficio de alumno»?",
        "a": "Que dominar las normas implícitas de la vida escolar constituye una socialización que trasciende el aula y condiciona la inserción del sujeto en la vida colectiva."
    },
    {
        "id": 510,
        "q": "En «El currículum real y el trabajo escolar», ¿qué ocurre cuando el trabajo escolar se transforma en un conjunto de rutinas como cualquier actividad regular en una organización burocrática?",
        "a": "Que la excelencia escolar queda definida en la práctica por el ejercicio cualificado del oficio de estudiante y no por la apropiación del currículum formal."
    },
    {
        "id": 511,
        "q": "¿Qué consecuencia tiene para el alumno el carácter permanentemente visible de su trabajo en clase?",
        "a": "Que el maestro puede intervenir en su proceso antes de que concluya, sin dejarle tiempo para reflexionar o corregir por sí mismo."
    },
    {
        "id": 512,
        "q": "Una escuela premia sistemáticamente a los estudiantes dóciles y aplicados, mientras que quienes cuestionan las actividades o proponen soluciones originales reciben valoraciones más bajas. Según Perrenoud, ¿qué tensión estructural ilustra esa situación?",
        "a": "Que las demandas operativas de la institución se imponen sobre los propósitos formativos que ella misma declara."
    },
    {
        "id": 513,
        "q": "Según el enfoque del currículum en la enseñanza obligatoria, ¿qué implica el hecho de que ciertos objetivos curriculares —como el trabajo en equipo, el manejo de tecnologías o el espíritu crítico— no puedan lograrse si el profesorado imparte exclusivamente clases magistrales y evita metodologías activas?",
        "a": "Que la autonomía docente debe subordinarse a la coherencia metodológica exigida por los propósitos de aprendizaje establecidos."
    },
    {
        "id": 514,
        "q": "¿Qué implica que el trivium y el quadrivium pervivan desde la Antigüedad hasta el currículo actual, según Feito Alonso?",
        "a": "Que los grupos profesional-académicos presionan para blindar sus materias frente a cualquier revisión."
    },
    {
        "id": 515,
        "q": "¿Qué revela sobre la concepción del aprendizaje en la escuela convencional el hecho de que se prefiera que el alumnado copie de una enciclopedia, en papel, antes que utilizar información obtenida de Internet?",
        "a": "Que la escuela valora el esfuerzo físico de la copia como indicador de trabajo y dedicación, independientemente de si ese proceso implica comprensión alguna."
    },
    {
        "id": 516,
        "q": "¿Qué tensión irresuelta revela el texto cuando Feito Alonso afirma simultáneamente que los conocimientos científicos crecen exponencialmente y que no se puede prever qué conocimientos serán imprescindibles en el futuro?",
        "a": "Que la concepción canónica del conocimiento escolar es estructuralmente incompatible con una sociedad en cambio acelerado."
    },
    {
        "id": 517,
        "q": "Gimeno Sacristán afirma que acceder a «todo lo escrito» mediante la alfabetización constituye «la gran oportunidad» del aprendizaje escolar, mientras que la oralidad queda referida como una forma de codificación anterior y menos frecuente en la escuela. ¿Qué presupuesto teórico subyace a esa jerarquización?",
        "a": "Que la escritura reestructura el pensamiento hacia la abstracción, convirtiendo la cultura oral en un estadio cognitivo inferior que el currículo debe superar."
    },
    {
        "id": 518,
        "q": "La incorporación de las TIC en la educación parte del supuesto de que la realidad educativa podía ser mejorada en eficiencia, eficacia y productividad mediante un conocimiento altamente tecnológico y a través de procesos de innovación concebidos desde la tecnología. ¿Qué supuesto pedagógico subyace a esta concepción?",
        "a": "Que la realidad educativa es susceptible de ser optimizada bajo criterios propios del ámbito productivo —eficiencia, eficacia y productividad—, asumiendo que la tecnología y los procesos de innovación concebidos desde ella constituyen el medio privilegiado para alcanzar dicha optimización."
    },
    {
        "id": 519,
        "q": "El uso de las TIC para crear y transmitir mensajes puede impedir hacer justicia, fomentar la concentración del poder en pocas manos y dificultar la reciprocidad en la comunicación. ¿Qué implicación pedagógica se desprende de este planteamiento para la formación de los estudiantes?",
        "a": "Que la educación debe formar sujetos con capacidad crítica para identificar y cuestionar los usos de las TIC que concentran el poder, obstaculizan la justicia y anulan la reciprocidad en la comunicación, trascendiendo la dimensión técnica hacia una comprensión ética y social de las tecnologías."
    },
    {
        "id": 520,
        "q": "Quienes denuncian la intermediación didáctica como degradación intelectual parten de una premisa que el texto cuestiona implícitamente. ¿Cuál es esa premisa?",
        "a": "Que enseñar bien equivale a exponer las ideas más elaboradas directamente, sin necesidad de mediación didáctica alguna."
    },
    {
        "id": 521,
        "q": "La intermediación didáctica impone configuraciones cognitivas específicas en la transmisión del saber. ¿Qué tensión irresuelta genera ese proceso?",
        "a": "Que la misma elaboración que hace transmisible el saber puede preservar su calidad o producir caricaturas empobrecidas de él."
    },
    {
        "id": 522,
        "q": "La diversidad de denominaciones sobre los resultados del aprendizaje ¿qué implica, según «El significado del currículum»?",
        "a": "Que detrás de cada término hay posiciones ideológicas irresueltas sobre qué se considera deseable lograr en el aprendiz."
    },
    {
        "id": 523,
        "q": "En el texto sobre escolaridad obligatoria, se propone que diversificar la pedagogía tiene una condición sine qua non que delimita su validez. ¿Cuál es esa condición?",
        "a": "Que la diferenciación introducida no genere a su vez nuevas formas de desigualdad entre los estudiantes que pretende atender."
    },
    {
        "id": 524,
        "q": "Desde el enfoque de derechos aplicado al proceso educativo, se sostiene que la educación debe ser la base para el libre y efectivo ejercicio de los demás derechos fundamentales interconectados, y que su «producto» no puede seguir siendo el de grandes masas de jóvenes con conocimientos descontextualizados que requieren formaciones adicionales para insertarse en la realidad laboral. ¿Qué exigencia pedagógica se desprende de este planteamiento para la reconfiguración del hecho educativo?",
        "a": "Que la educación debe generar aprendizajes contextualizados y actualizados que habiliten el ejercicio efectivo de los derechos fundamentales interconectados, superando la lógica de transmisión masiva de conocimientos desvinculados de la realidad cambiante."
    },
    {
        "id": 525,
        "q": "¿Qué implicación tiene, para Linuesa, concebir la selección de contenidos como una opción cultural y no como una cuestión técnica?",
        "a": "Que los criterios deben interpretarse como marco para la discusión y no como lista de aplicación."
    },
    {
        "id": 526,
        "q": "¿Qué debe probarse para que quede eximida la responsabilidad administrativa, ejecutiva o civil de un servidor público?",
        "a": "Que la decisión fue tomada en procura de mayor beneficio y en resguardo de los bienes de la entidad, dentro de los riesgos propios de operación y las circunstancias imperantes, o que situaciones de fuerza mayor originaron la decisión o incidieron en el resultado final."
    },
    {
        "id": 527,
        "q": "¿Qué paradoja emerge al relacionar la afirmación de que «la democracia no se aprende, se practica» con la descripción del funcionamiento habitual de las aulas que hace Feito Alonso?",
        "a": "Que la escuela proclama formar ciudadanos participativos mientras silencia estructuralmente al alumnado."
    },
    {
        "id": 528,
        "q": "El desarrollo explosivo de las TIC ha dado forma a la «Sociedad del Conocimiento» o «de la Información», impactando prácticamente todos los ámbitos de la vida humana. ¿Qué implicación pedagógica se desprende de este alcance para la educación?",
        "a": "Que la configuración de la «Sociedad del Conocimiento» exige que la educación reconozca el carácter transversal del impacto de las TIC y reoriente sus procesos formativos para preparar a los estudiantes en una realidad donde ningún ámbito de la vida humana permanece ajeno a su influencia."
    },
    {
        "id": 529,
        "q": "Que el currículum refleje distintos tipos de luchas tiene una consecuencia directa para quienes lo gestionan desde enfoques tecnocráticos, según Sacristán. ¿Cuál es esa consecuencia?",
        "a": "Que sus argumentos técnicos encubren opciones culturales y políticas sin resolver los conflictos subyacentes."
    },
    {
        "id": 530,
        "q": "Según Sacristán, ¿qué significa que la discusión curricular bajo la óptica de la experiencia cultural subjetiva quede «muy pendiente de la categoría aprendizaje y menos de la de contenidos»?",
        "a": "Que centrar el currículo en la experiencia subjetiva disuelve la posibilidad de establecer un proyecto cultural común y generalizable."
    },
    {
        "id": 531,
        "q": "Un maestro omite en la prueba final los contenidos que no alcanzó a desarrollar completamente durante el curso. ¿Qué principio de «El currículum real y el trabajo escolar» explica esta decisión?",
        "a": "Que evaluar lo efectivamente trabajado le parece más equitativo que remitirse a un programa que no siguió completamente."
    },
    {
        "id": 532,
        "q": "Se considera normal que los contenidos se organicen por asignaturas separadas. ¿Qué revela esto sobre las dimensiones estructurantes del currículum?",
        "a": "Que son opciones contingentes naturalizadas como inevitables, cuyo poder reside en su invisibilidad para quienes actúan en la práctica."
    },
    {
        "id": 533,
        "q": "Sacristán describe una estructura esencial de la práctica educativa moderna trabada por dispositivos articulados. ¿Qué condición hace que esa estructura resulte funcional como sistema?",
        "a": "Que la clasificación del alumnado, la secuenciación temporal y el orden pedagógico operen de forma mutuamente dependiente."
    },
    {
        "id": 534,
        "q": "Cuando se afirma que el currículum real es resultado de una negociación entre maestro y alumnos, ¿qué aspecto de esa negociación resulta más relevante para comprender su naturaleza?",
        "a": "Que opera como confrontación de estrategias, con o sin acuerdo explícito, dentro de una relación de fuerza."
    },
    {
        "id": 535,
        "q": "¿Qué supone implícitamente la afirmación de Feito de que el proverbio chino «escucho y olvido, veo y recuerdo y hago y aprendo» sintetiza la crítica a la pedagogía transmisiva?",
        "a": "Que la escuela privilegia la modalidad que menor huella cognitiva deja mientras margina las que generan aprendizaje más duradero."
    },
    {
        "id": 536,
        "q": "El cambio pedagógico puede producirse a distintas escalas dentro del sistema educativo, ¿qué característica lo distingue de los procesos de reforma que operan exclusivamente desde el nivel central?",
        "a": "Que incide en algún aspecto estructural para mejorar la formación, pudiendo generarse desde el aula, la institución o el conjunto del sistema sin restricción."
    },
    {
        "id": 537,
        "q": "En el contexto de la innovación educativa y el desarrollo económico, ¿qué demostró el análisis de Solow respecto al valor total de las economías y su relación con la innovación?",
        "a": "Que hasta un 85% del valor total de las economías no tiene relación con el incremento de capital o trabajo, siendo ese valor residual directamente proporcional a la innovación, denominada factor tecnológico."
    },
    {
        "id": 538,
        "q": "¿Qué se puede interpretar del papel de las nuevas tecnologías en la cadena que va desde las fuentes del aprendizaje hasta el libro de texto?",
        "a": "Que han ampliado la variedad de fuentes disponibles sin lograr desplazar el uso dominante del libro de texto en la escolaridad."
    },
    {
        "id": 539,
        "q": "Sacristán advierte que la incorporación del currículum a la tradición anglosajona no fue casual sino resultado de fuerzas sociales e ideológicas concretas. ¿Qué consecuencia epistemológica se desprende de esta afirmación?",
        "a": "Que responde a condiciones ideológicas y sociales particulares, no a una racionalidad pedagógica neutral o universal."
    },
    {
        "id": 540,
        "q": "Cuando Bourdieu sostiene que la escuela actúa como «fuerza formadora de hábitos», ¿qué distingue ese aporte del simple dominio de saberes y saber hacer particulares?",
        "a": "Que genera una disposición general creadora de esquemas aplicables a campos diversos del pensamiento y la acción."
    },
    {
        "id": 541,
        "q": "¿Cuál es una condición fundamental para que las innovaciones impulsadas en las instituciones educativas sean pertinentes y sostenibles?",
        "a": "Que estén articuladas con los objetivos estratégicos definidos a nivel nacional."
    },
    {
        "id": 542,
        "q": "¿Qué rasgo del currículo moral escolar lleva a Perrenoud a afirmar que no puede considerarse verdaderamente oculto?",
        "a": "Que su función socializadora es ampliamente intuida por los actores sociales."
    },
    {
        "id": 543,
        "q": "¿Qué distingue, en «El currículum real y el trabajo escolar», las normas de excelencia propias de las tareas discursivas menos estructuradas respecto a las de los ejercicios individuales?",
        "a": "Que en las tareas discursivas se exige iniciativa, implicación personal y cierta originalidad, no solo exactitud y cobertura."
    },
    {
        "id": 544,
        "q": "¿Qué representa la analogía entre la innovación educativa y la interpretación de una pieza de jazz, presentada en el texto “innovación educativa”?",
        "a": "Puso énfasis en el protagonismo de los docentes y su participación activa en los cambios educativos."
    },
    {
        "id": 545,
        "q": "¿Qué implica que el aprendizaje del sentido común forme parte del oficio de alumno, al igual que los demás aprendizajes del currículum oculto?",
        "a": "Que los aprendizajes ocultos no son efectos colaterales, sino condiciones funcionales para operar dentro de la organización escolar."
    },
    {
        "id": 546,
        "q": "El desarrollo de las innovaciones debe generar valor sin responder exclusivamente a necesidades comerciales, preservando la centralidad del ser humano en el proceso educativo y evitando que el ritmo acelerado derive en un aprendizaje mayor y más veloz pero superficial. ¿Qué principio pedagógico orienta la innovación educativa desde este planteamiento?",
        "a": "Que la innovación educativa debe preservar la centralidad del estudiante como sujeto del proceso formativo, evitando que la velocidad y la lógica comercial deriven en aprendizajes acelerados pero superficiales que subordinen el desarrollo humano a las demandas del mercado."
    },
    {
        "id": 547,
        "q": "Perrenoud sostiene que, en la práctica docente cotidiana, la valoración del «buen alumno» no se reduce al dominio de los contenidos curriculares. ¿Qué revela esta afirmación sobre los criterios de excelencia que operan realmente en el aula?",
        "a": "Que la excelencia escolar se construye sobre una combinación de criterios académicos explícitos y disposiciones comportamentales no declaradas en el currículum."
    },
    {
        "id": 548,
        "q": "¿Qué condición debe cumplirse para considerar que la incorporación de computadoras en una escuela constituye una innovación educativa?",
        "a": "Que el recurso tecnológico genere transformaciones en el enfoque pedagógico, la función del maestro y las formas de construcción del aprendizaje."
    },
    {
        "id": 549,
        "q": "El cambio pedagógico constituye un proceso permanentemente abierto, ¿qué riesgo específico surge cuando dicho cambio es abordado exclusivamente como un resultado acabado?",
        "a": "Que las prácticas adoptadas pierdan su carácter transformador y se consoliden como nuevas rutinas dentro de la institución."
    },
    {
        "id": 550,
        "q": "En el aprendizaje basado en proyectos, ¿qué característica esencial revela el hecho de que el problema pueda ser estructurado por el docente o determinado por los estudiantes a partir de una temática definida por él?",
        "a": "Que el problema puede ser estructurado por el docente mediante una situación generadora, o bien determinado por los estudiantes a partir de una temática o situación que el docente establece."
    },
    {
        "id": 551,
        "q": "¿Qué argumento aporta Capra al debate sobre la globalización curricular que Feito incorpora para cuestionar la organización disciplinar de la escuela?",
        "a": "Que la ciencia del siglo XX exige comprender los fenómenos en relación con el sistema al que pertenecen, no de forma aislada."
    },
    {
        "id": 552,
        "q": "¿En qué consiste el principio de proceder de lo particular a lo general en la enseñanza?",
        "a": "Que los hechos y ejemplos particulares deben ser presentados a los estudiantes antes de darles reglas y principios generales."
    },
    {
        "id": 553,
        "q": "¿Cuál es la posición de Sacristán respecto de los modelos pedagógicos en referencia al currículo?",
        "a": "Que las polaridades entre modelos son simplificaciones de un dilema irresoluble que no admite solución técnica ni ideológica definitiva."
    },
    {
        "id": 554,
        "q": "¿Qué consecuencia puede inferirse del descubrimiento y expansión de las modernas tecnologías de impresión y fotoimpresión de imágenes en los libros de texto?",
        "a": "Que el libro de texto incorporó mayor presencia de imágenes aunque sin lograr competir en atractivo con otros materiales del mercado."
    },
    {
        "id": 555,
        "q": "Cuando se compara la cultura escolar con la cultura hospitalaria o carcelaria, ¿qué particularidad distingue la situación del estudiante respecto a la de otros sujetos institucionales?",
        "a": "Que el estudiante no distingue entre lo que aprende como contenido y lo que aprende para funcionar en la organización."
    },
    {
        "id": 556,
        "q": "El psicólogo de la Gestalt, Köhler, enfatizó que el aprendizaje humano tiene siempre un propósito con objetivos dirigidos y se basa esencialmente en el cognitivismo. ¿A qué conclusión llegó sobre el aprendizaje del estudiante?",
        "a": "Que el estudiante percibe siempre la situación en conjunto, evalúa toda la relación y los factores involucrados en la situación y finalmente llega a una solución perspicaz."
    },
    {
        "id": 557,
        "q": "¿Cuál es la condición que determina que una persona jurídica quede sujeta a los sistemas de Administración y Control Gubernamentales?",
        "a": "Que el Estado tenga la mayoría del patrimonio en la persona jurídica correspondiente."
    },
    {
        "id": 558,
        "q": "Dentro de la arquitectura de una enseñanza efectiva, ¿cuál es la implicación pedagógica fundamental del principio de «dar pronta respuesta» para el proceso de consolidación del aprendizaje en el estudiante?",
        "a": "Que los estudiantes cuenten con oportunidades frecuentes para realizar y recibir sugerencias específicas para mejorar, lo que les permite monitorear su propio progreso y ajustar su comprensión sobre lo que saben y lo que aún no dominan."
    },
    {
        "id": 559,
        "q": "Se plantea que el nuevo modelo docente exige crear vínculos más sólidos entre el objeto de estudio y la realidad concreta, integrando diversas disciplinas y trascendiendo los límites de lo que hasta ahora ha significado la docencia e incluso lo que socialmente se espera de ella. ¿Qué implicación pedagógica se desprende directamente de este planteamiento para el ejercicio de la función docente?",
        "a": "Que el docente debe reconfigurar su rol más allá de la transmisión disciplinar, asumiendo la integración de saberes, la colaboración interdisciplinaria y la contextualización realista del objeto de estudio como condiciones constitutivas de una docencia que trasciende las expectativas sociales tradicionales del ejercicio profesional."
    },
    {
        "id": 560,
        "q": "Entre los aspectos sobre los que el poder regulador del currículum ejerce sus determinaciones figura el modelo de individuo normal. ¿Qué consecuencia tiene esto para los sujetos que transitan la escolaridad?",
        "a": "Que el desarrollo personal de los sujetos queda orientado y prefigurado por las determinaciones estructurales del propio currículum."
    },
    {
        "id": 561,
        "q": "¿Qué implica que la intersección entre cultura escolar y cultura de la organización escolar no sea ni nula ni total?",
        "a": "Que existen componentes del currículum irrelevantes para la organización y exigencias organizacionales."
    },
    {
        "id": 562,
        "q": "Según Gimeno Sacristán, ¿qué implica asumir que la enseñanza de contenidos es la única meta de la escuela?",
        "a": "Que se reduce el currículum a su dimensión académica, ignorando fines educativos más amplios como la formación ciudadana y el desarrollo integral."
    },
    {
        "id": 563,
        "q": "Aplicando lo dicho por María Clemente Linuesa, el caso de la enseñanza de la lengua que transitó del enfoque tradicional al estructuralismo y luego a la gramática generativa, generando altos índices de fracaso escolar, ¿qué principio curricular cuestiona?",
        "a": "Que el avance paradigmático de una disciplina no implica mayor pertinencia educativa, pues su traslado automático al aula puede derivar en fracaso escolar."
    },
    {
        "id": 564,
        "q": "¿Qué destaca la teoría de la cognición distribuida respecto al crecimiento cognitivo y cómo se desarrolla la comprensión en este marco teórico?",
        "a": "Destaca que el crecimiento cognitivo es estimulado mediante la interacción con otros, y que requiere del diálogo y el discurso, convirtiendo el conocimiento privado en algo público y desarrollando una comprensión compartida."
    },
    {
        "id": 565,
        "q": "Una maestra observa que un adulto de la comunidad educativa realiza caricias y toqueteos reiterados en la espalda, brazos y cabeza de una niña de 9 años, quien en ocasiones manifiesta incomodidad y en otras no reacciona. Según el «Protocolo de prevención y actuación», ¿cuál es la característica que determina que este hecho constituye violencia sexual?",
        "a": "Que el contacto físico provenga de un adulto hacia una niña, independientemente de la zona del cuerpo tocada y del consentimiento o reacción de la víctima."
    },
    {
        "id": 566,
        "q": "¿Qué visión puede inferirse en Sacristán respecto a los enfoques constructivistas en el currículo?",
        "a": "Que sus aportes son válidos para orientar los procesos de aprendizaje pero insuficientes para resolver la pregunta fundamental sobre qué cultura impartir."
    },
    {
        "id": 567,
        "q": "Sacristán identifica una paradoja en torno al debate curricular: su ausencia no indica acuerdo genuino sino algo cualitativamente distinto. ¿Qué revela esa ausencia según el autor?",
        "a": "Que el conflicto ha sido suprimido mediante su conversión en problema técnico, sustrayendo a la educación la posibilidad de participar en él."
    },
    {
        "id": 568,
        "q": "La innovación educativa “produce modificaciones materiales y simbólicas, y por ello tiene una relación profunda con la tradición”, ¿qué implica esta afirmación?",
        "a": "Que el cambio pedagógico transforma lo tangible y lo cultural desde la capacidad humana de generar y reinterpretar el conocimiento acumulado."
    },
    {
        "id": 569,
        "q": "¿Qué implica que la excelencia escolar se identifique en la práctica con el ejercicio cualificado del oficio de alumno?",
        "a": "Que la evaluación informal valora también las exigencias funcionales de la organización escolar, más allá del dominio de saberes."
    },
    {
        "id": 570,
        "q": "¿Qué ha demostrado la teoría del condicionamiento operante sobre el material de aprendizaje?",
        "a": "Que el aprendizaje es más efectivo si el material de aprendizaje está diseñado de manera que produzca menos oportunidades de fracaso y más oportunidades de éxito."
    },
    {
        "id": 571,
        "q": "¿Qué consecuencia tiene para la continuidad de la escolaridad el hecho de que un alumno no aprenda suficientemente su oficio?",
        "a": "Que la organización escolar puede eliminarlo de cursos o niveles en los que sus carencias funcionales lo hacen inviable."
    },
    {
        "id": 572,
        "q": "¿Cuál es el resultado que debe producirse para que se configure el delito de incumplimiento de deberes de protección a mujeres en situación de violencia?",
        "a": "Que se propicie la impunidad u obstaculice la investigación de delitos de violencia contra las mujeres."
    },
    {
        "id": 573,
        "q": "¿Qué implica que la construcción del sentido común por la escuela sea en parte arbitraria?",
        "a": "Que se presenta como única o inevitable una forma de ver la realidad que es, en rigor, contingente."
    },
    {
        "id": 574,
        "q": "En relación con la naturaleza de la innovación educativa, ¿qué condición es indispensable considerar al momento de impulsarla en cualquier contexto institucional?",
        "a": "Que es preciso concebirla como un proceso siempre inconcluso, sometido a una revisión crítica y reflexiva constante."
    },
    {
        "id": 575,
        "q": "Una institución educativa adapta creativamente las prescripciones curriculares externas a sus características propias sin ignorarlas ni rechazarlas. De acuerdo con Innovación Educativa, ¿qué revela esa capacidad de adaptación sobre dicha institución?",
        "a": "Que posee un índice elevado de creatividad, autonomía y madurez institucional consolidada, que le permite adaptar las prescripciones externas a sus propias características sin rechazarlas."
    },
    {
        "id": 576,
        "q": "Al ordenar el currículum se regula simultáneamente una serie de dimensiones que van más allá de los contenidos. ¿Qué revela esto sobre su naturaleza como instrumento?",
        "a": "Que es un sistema normativo que regula tiempos, fronteras disciplinares y criterios de éxito y fracaso simultáneamente."
    },
    {
        "id": 577,
        "q": "Sacristán recurre a la imagen de un juego para explicar la relación entre las reglas curriculares y quienes participan en la escolaridad. ¿Qué aspecto de esa relación queda iluminado con esa imagen?",
        "a": "Que las reglas determinan qué movimientos son legítimos y cuáles quedan excluidos, con independencia de la voluntad de los participantes."
    },
    {
        "id": 578,
        "q": "En «El currículum real y el trabajo escolar», ¿qué rasgo compartido justifica la comparación entre el trabajo escolar y ciertas actividades laborales?",
        "a": "Que en ninguno de los dos casos quien ejecuta la tarea la ha elegido ni tiene por qué sentir interés por ella."
    },
    {
        "id": 579,
        "q": "Los procesos de innovación en el uso de las TIC en la docencia suelen partir de las disponibilidades y soluciones tecnológicas existentes, lo que genera un clima en que la innovación se centra demasiado en la presencia o ausencia de la herramienta tecnológica. ¿Qué limitación pedagógica se desprende de este enfoque?",
        "a": "Que al subordinar la innovación a la presencia o ausencia de herramientas tecnológicas, el acento recae en las necesidades materiales y se desplaza la atención de los criterios pedagógicos que deberían orientar el proceso, limitando el alcance y la profundidad del cambio educativo."
    },
    {
        "id": 580,
        "q": "En el análisis sobre los efectos de las clasificaciones escolares en la heterogeneidad de los estudiantes, ¿qué consecuencia paradójica se deriva de ese mecanismo?",
        "a": "Que al absorber solo una parte de la variabilidad natural, deja subsistir una diferencia irreductible que sigue perturbando el engranaje escolar."
    },
    {
        "id": 581,
        "q": "Desde la dimensión pedagógica de la Innovación Educativa, ¿qué condición define al docente como agente innovador y no como ejecutor de reformas educativas externas?",
        "a": "Que genere experiencias educativas situadas partiendo de la reflexión crítica sobre su propia práctica en un contexto específico."
    },
    {
        "id": 582,
        "q": "Según el texto de Innovación Educativa, ¿qué énfasis caracterizó al movimiento innovador de los años 70 y 80 en educación, diferenciándolo de períodos anteriores?",
        "a": "Puso énfasis en el protagonismo de los docentes y su participación activa en los cambios educativos."
    },
    {
        "id": 583,
        "q": "¿De qué manera pueden utilizarse las TIC para apoyar el entorno de aprendizaje sociocultural y qué beneficios generan en los alumnos?",
        "a": "Pueden utilizarse como herramientas para promover el diálogo, la discusión, la escritura en colaboración y la resolución de problemas, y al brindar sistemas de apoyo online para apuntalar el progreso en la comprensión de los alumnos y su crecimiento cognitivo."
    },
    {
        "id": 584,
        "q": "Según la síntesis presentada en el texto Innovación Educativa, ¿en qué ámbitos del entorno formativo puede producirse el cambio pedagógico transformador?",
        "a": "Puede producirse en el espacio del aula, del centro educativo y del conjunto del entorno formativo de manera articulada."
    },
    {
        "id": 585,
        "q": "¿Cuál de las siguientes manifestaciones corresponde a una somatización clasificada dentro de los indicadores psicológicos, emocionales y conductuales de una posible situación de violencia en el ámbito educativo?",
        "a": "Taquicardia, sensación de ahogo y mareos, que se presentan como respuestas físicas ante el impacto psicológico de una situación de violencia."
    },
    {
        "id": 586,
        "q": "La Ley de Discapacidad es aplicable en todo el territorio del Estado Plurinacional y de cumplimiento obligatorio por todos los Órganos del Estado, así como por las instituciones...",
        "a": "públicas, privadas, cooperativas y/o de economía mixta."
    },
    {
        "id": 587,
        "q": "¿Qué obligación tienen las personas que reciban recursos del Estado, se beneficien de subsidios, subvenciones, ventajas o exenciones, o presten servicios públicos no sujetos a la libre competencia, respecto a la entidad pública competente?",
        "a": "Informar a la entidad pública competente sobre el destino, forma y resultados del manejo de los recursos y privilegios públicos, y presentar estados financieros debidamente auditados."
    },
    {
        "id": 588,
        "q": "Una docente planifica su clase de historia seleccionando contenidos a partir de los textos oficiales del sistema educativo, priorizando la coherencia con el programa establecido y la secuencia lógica de los hechos. ¿Qué criterio está descuidando según María Clemente Linuesa?",
        "a": "Socioideológico."
    },
    {
        "id": 589,
        "q": "Desde el neuroaprendizaje, ¿con qué tipo de instrumentos se sugiere evaluar aprendizajes mecánicos?",
        "a": "Respuesta simple, breves o múltiples."
    },
    {
        "id": 590,
        "q": "¿Sobre qué documentos recae la responsabilidad de registro digital de la Dirección General de Educación Superior Técnica, Tecnológica, Lingüística y Artística en el Sistema de Información de Institutos?",
        "a": "Proyecto institucional y programas académicos autorizados de los Institutos, una vez emitida la Resolución Ministerial correspondiente."
    },
    {
        "id": 591,
        "q": "¿Cuál es la función principal del componente «Actitudes» dentro del acrónimo S-K-A al momento de formular los objetivos de aprendizaje de un curso?",
        "a": "Proyectar las valoraciones, opiniones y disposiciones que los participantes habrán construido respecto al contenido temático al concluir la experiencia formativa."
    },
    {
        "id": 592,
        "q": "En una secuencia didáctica que aborda el origen y las conductas que definen a una especie, ¿qué estrategia metodológica permite que los estudiantes profundicen progresivamente en la comprensión de dichas conductas?",
        "a": "Plantear interrogantes iniciales, analizar un recurso audiovisual mediante un cuadro comparativo, contrastar conclusiones por equipos y reformular las respuestas con mayor precisión."
    },
    {
        "id": 593,
        "q": "Un maestro identifica que sus estudiantes se encuentran en el período de mayor activación y receptividad cerebral dentro de la sesión. ¿Qué tipo de actividades aprovechan mejor ese estado neurológico para maximizar el aprendizaje?",
        "a": "Introducción de contenidos nuevos y complejos"
    },
    {
        "id": 594,
        "q": "Perrenoud advierte que la escuela, al igual que otras organizaciones, mantiene en secreto su cultura interna, y que los alumnos no perciben con claridad los límites entre la cultura escolar encarnada en el currículum y la cultura de la organización. ¿Qué efecto produce esta indistinción sobre la experiencia formativa del alumno?",
        "a": "El alumno incorpora simultáneamente saberes disciplinares y disposiciones institucionales sin distinguir el origen ni la intencionalidad de cada uno."
    },
    {
        "id": 595,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje. Las emociones y el aprendizaje”, ¿Qué caracteriza al pensamiento rumiante y qué implicación tiene para el estado emocional del estudiante?",
        "a": "Es autoconstruido de forma repetitiva y provoca sensaciones persistentes de angustia interior."
    },
    {
        "id": 596,
        "q": "¿Cuál es el aporte más relevante de Internet en los procesos de innovación educativa?",
        "a": "Proveer entornos y ambientes que promueven interacciones y experiencias de interconexión e innovación educativa."
    },
    {
        "id": 597,
        "q": "Una maestra de secundaria nota que sus estudiantes trabajan de forma aislada y obtienen resultados desiguales. Decide aplicar el principio psicológico de enseñanza que sugiere hacer la clase más cooperativa. ¿Qué acción concreta corresponde a ese principio?",
        "a": "Implementar ejercicios de grupo cooperativos dentro del aula durante el desarrollo de los contenidos."
    },
    {
        "id": 598,
        "q": "“La neurociencia advierte que los estudiantes experimentan estrés durante las evaluaciones porque su cerebro interpreta dicha instancia como una situación de peligro, activando respuestas emocionales negativas a través de la amígdala. ¿Qué propuesta plantea el texto “Neurociencias Neuroaprendizaje. Las emociones y el aprendizaje” para transformar esta percepción en el entorno educativo?",
        "a": "Concebir la valoración como intercambio y crecimiento."
    },
    {
        "id": 599,
        "q": "De acuerdo con Rychen y Salganik (2003), los elementos analíticos subyacentes a las competencias genéricas incluyen que son:",
        "a": "Transversales en diferentes campos sociales, de orden superior de complejidad mental, multifuncionales y multidimensionales, considerando dimensiones perceptivas, normativas, cooperativas y conceptuales."
    },
    {
        "id": 600,
        "q": "Cuando Gimeno Sacristán afirma que los objetivos educativos establecidos por la normativa son «excesivamente polisémicos», ¿cuál es la consecuencia pedagógica más problemática que esta característica genera en la práctica escolar?",
        "a": "Generan ambigüedad interpretativa que dificulta traducir las intenciones declaradas en prácticas de enseñanza concretas y evaluables."
    },
    {
        "id": 601,
        "q": "¿Cuál de las siguientes funciones específicas corresponde a un maestro de apoyo de estudiantes con discapacidad auditiva?",
        "a": "Promueve y orienta políticas y culturas inclusivas en la comunidad educativa brindando oportunidades en igualdad de condiciones."
    },
    {
        "id": 602,
        "q": "Una de las funciones de las maestras y maestros de apoyo para estudiantes con discapacidad auditiva es:",
        "a": "Promueve la independencia y responsabilidad en las tareas asignadas por la comunidad educativa, sin caer en el error de realizar las tareas de los estudiantes."
    },
    {
        "id": 603,
        "q": "En el marco de los principios psicológicos de la enseñanza, un maestro de ciencias naturales organiza sus clases de manera que los estudiantes primero identifican conceptos clave, luego los aplican en situaciones concretas y finalmente resuelven problemas relacionados, permitiendo además que sean ellos quienes construyan parte de la secuencia. ¿Qué principio psicológico de la enseñanza está aplicando este docente?",
        "a": "Establece una jerarquía estructurada de contenido, donde la organización del material es clara pero también brinda oportunidades para que el estudiante realice alguna estructuración, integrando conceptos, aplicaciones y resolución de problemas."
    },
    {
        "id": 604,
        "q": "Según la normativa boliviana sobre derechos de las personas con discapacidad, ¿cuál es la medida que el Órgano Ejecutivo debe promover para facilitar la constitución de empresas de economía social por parte de personas con discapacidad, así como de sus padres, madres y/o tutores?",
        "a": "Promover el acceso al microcrédito para personas con discapacidad, padres, madres y/o tutores de personas con discapacidad, destinado a la constitución de empresas de economía social."
    },
    {
        "id": 605,
        "q": "Para motivar a los estudiantes hacia un aprendizaje efectivo en el aula, se debe considerar, para quienes lo necesitan, fomentar el desarrollo del logro de necesidades, la confianza en sí mismo y la autodirección. ¿Cómo se debe proceder?",
        "a": "Usar técnicas de entrenamiento de motivación de logro e incentivar un sentido de autoeficacia."
    },
    {
        "id": 606,
        "q": "El Órgano Ejecutivo tiene la obligación de promover una medida económica específica dirigida a personas con discapacidad, así como a padres, madres y/o tutores de personas con discapacidad, con el propósito de facilitar la constitución de empresas de economía social. ¿En qué consiste dicha medida?",
        "a": "El acceso al microcrédito destinado a la constitución de empresas de economía social."
    },
    {
        "id": 607,
        "q": "Según la nueva concepción del aprendizaje que fundamenta el desarrollo de competencias TIC en el profesorado, ¿hacia qué perfil docente deben orientarse los programas de formación impulsados por organismos internacionales especializados en educación?",
        "a": "Facilitador de entornos activos donde el estudiante construye saberes, colabora con sus pares y resuelve problemas reales mediante el uso pedagógico de la tecnología."
    },
    {
        "id": 608,
        "q": "¿Qué deben articular los Órganos del Estado, las Entidades Territoriales Autónomas e Instituciones Públicas para la prevención, atención, sanción y erradicación de la violencia contra las mujeres?",
        "a": "Los instrumentos, políticas, servicios y acciones interinstitucionales vinculadas, para la prevención, atención, sanción y erradicación de la violencia contra las mujeres."
    },
    {
        "id": 609,
        "q": "De acuerdo con el libro «Estilos de Aprendizaje y Métodos de Enseñanza», cuando los estudiantes muestran ansiedad y miedo al fracaso, ¿qué se debe hacer?",
        "a": "Producir niveles óptimos de motivación ayudándolos a valorar los procesos y productos del aprendizaje."
    },
    {
        "id": 610,
        "q": "¿Qué tipo de dinámicas generan tanto la incorporación de las TIC como el protagonismo docente en los procesos de innovación educativa?",
        "a": "Producen formas de intercambio y trabajo colaborativo, tales como agrupaciones formativas o redes de cooperación pedagógica interinstitucional."
    },
    {
        "id": 611,
        "q": "Según Perrenoud, cuando se hace explícito lo que permanecía oculto en el currículum, ¿qué efecto produce esa revelación?",
        "a": "Abre el debate sobre su legitimidad, sin que ello implique su eliminación."
    },
    {
        "id": 612,
        "q": "Una maestra diseña su aula con normas claras, trato respetuoso y actividades desafiantes pero alcanzables. ¿Por qué el funcionamiento de la amígdala influye de manera determinante en el proceso de aprendizaje?",
        "a": "Evalúa el valor afectivo del entorno y, según lo perciba como seguro o amenazante, facilita u obstaculiza el acceso a las áreas corticales."
    },
    {
        "id": 613,
        "q": "Según Beltrán (1993, 2003), ¿cuál de los siguientes constructos describe un plan de acción con carácter propositivo e intencional dentro de las estrategias de aprendizaje?",
        "a": "Estrategias, porque constituyen un esquema deliberado y dirigido hacia una meta específica de aprendizaje."
    },
    {
        "id": 614,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿cómo define el texto al aprendizaje informal?",
        "a": "Aprender de la vida, durante una comida con los padres, jugar, explorar, a través de situaciones cotidianas."
    },
    {
        "id": 615,
        "q": "Un maestro observa que algunos estudiantes, ante una tarea nueva, primero analizan qué se les pide, deciden cómo abordarla, verifican si van comprendiendo y modifican su enfoque cuando algo no funciona. ¿Qué tipo de aprendizaje refleja esta conducta?",
        "a": "Modo autorregulado donde el sujeto planifica, monitorea y reajusta su propio desarrollo cognitivo."
    },
    {
        "id": 616,
        "q": "Según la neurociencia, ¿qué caracteriza al cerebro mamífero o límbico?",
        "a": "Gestiona funciones vitales como el sueño y el hambre; vincula el olfato con la necesidad de vínculos afectivos."
    },
    {
        "id": 617,
        "q": "¿Qué señala el nuevo paradigma de la evaluación según el neuroaprendizaje?",
        "a": "Herramienta orientada al desarrollo de la comprensión, brindando mayores competencias."
    },
    {
        "id": 618,
        "q": "¿Cuál de los sistemas de almacenamiento de la memoria declarativa o explícita funciona como archivo de conocimientos conceptuales?",
        "a": "Semántica."
    },
    {
        "id": 619,
        "q": "¿En qué grupos se divide la memoria a largo plazo?",
        "a": "Declarativa e implícita."
    },
    {
        "id": 620,
        "q": "En Tupiza, un maestro enseña geometría mostrando solo dibujos en la pizarra, sin usar objetos reales. ¿Qué principio incumple?",
        "a": "Proceder de lo real a lo representativo; el profesor debe mostrar los objetos reales siempre que sea posible."
    },
    {
        "id": 621,
        "q": "Una maestra de Matemáticas inicia la enseñanza de fracciones presentando directamente la definición formal y las reglas de operación, sin partir de situaciones concretas previas. Los grupos muestran confusión y no logran relacionar el concepto con su experiencia cotidiana. Considerando los principios de enseñanza del texto de «Estilos de aprendizaje y métodos de aprendizaje», ¿cuáles son los dos principios que la maestra incumplió simultáneamente en su planificación?",
        "a": "Proceder de lo concreto a lo abstracto y de lo conocido a lo desconocido, pues ambos exigen partir de experiencias previas antes de alcanzar niveles más altos de pensamiento."
    },
    {
        "id": 622,
        "q": "Un buen maestro debe estar familiarizado con algunas prácticas generales de la enseñanza. ¿Cuál de las siguientes representa una de esas prácticas?",
        "a": "Proceder de lo conocido a lo desconocido."
    },
    {
        "id": 623,
        "q": "La maestra Lucía inicia su clase explicando el tema durante toda la hora, los estudiantes escuchan en silencio, copian las definiciones del pizarrón y al final responden preguntas cerradas sobre el contenido. Según los principios basados en la investigación sobre la buena enseñanza, ¿qué limitación fundamental presenta la práctica de la maestra Lucía?",
        "a": "Restringe la participación activa, pues los estudiantes no aprenden mucho simplemente sentados en las clases escuchando a los maestros, memorizando tareas preestablecidas y aportando respuestas."
    },
    {
        "id": 624,
        "q": "Sacristán concibe el currículum como un campo atravesado por tensiones entre cultura escolar y culturas previas de los sujetos. En un contexto de fuerte interculturalidad como el boliviano, ¿qué limitación presenta su enfoque?",
        "a": "Al construirse desde la tradición europea, podría tender a subordinar los saberes indígenas al conocimiento escolar occidental."
    },
    {
        "id": 625,
        "q": "¿Cuál es la sanción para el delito de violación cometido contra una persona menor de catorce años?",
        "a": "Privación de libertad de veinte (20) a veinticinco (25) años."
    },
    {
        "id": 626,
        "q": "¿Cuál es la pena establecida para el delito de padecimientos sexuales?",
        "a": "Privación de libertad de quince (15) a treinta (30) años."
    },
    {
        "id": 627,
        "q": "El que falseare u omitiere insertar los datos económicos, financieros o patrimoniales que la declaración jurada de bienes y rentas deba contener. ¿Cuál es la sanción establecida para esta conducta?",
        "a": "Privación de libertad de uno a cuatro años y multa de cincuenta a doscientos días."
    },
    {
        "id": 628,
        "q": "¿Qué sanción se aplica cuando el daño físico o psicológico causado genere una incapacidad laboral de hasta catorce días?",
        "a": "Trabajos comunitarios de uno (1) a tres (3) años y cumplimiento de instrucciones que la jueza o el juez determine."
    },
    {
        "id": 629,
        "q": "¿Cuál es la sanción para el servidor o servidora pública que propicie la impunidad u obstaculice la investigación de delitos de violencia contra las mujeres?",
        "a": "Trabajos comunitarios de noventa (90) días a ciento veinte (120) días e inhabilitación de uno (1) a cuatro (4) años para el ejercicio de la función pública."
    },
    {
        "id": 630,
        "q": "¿Cuál es la sanción establecida para el servidor público que otorgue un fin distinto al cual se hallaren destinados bienes, derechos y acciones pertenecientes al Estado o a sus instituciones, en beneficio propio o de terceros?",
        "a": "Privación de libertad de uno a cuatro años."
    },
    {
        "id": 631,
        "q": "¿Cuál es la sanción establecida para quien, con la finalidad de ocultar, disimular o legitimar el incremento patrimonial ilícito, facilitare su nombre o participare en actividades económicas, financieras y comerciales?",
        "a": "Privación de libertad de tres a ocho años, inhabilitación para el ejercicio de la función pública y/o cargos electos y multa de cincuenta a quinientos días."
    },
    {
        "id": 632,
        "q": "El que utilice fuerza física, amenazas, intimidación, promesas, ofrecimiento o la concesión de un beneficio indebido para inducir a una persona a prestar falso testimonio u obstaculizar la prestación de testimonio o la aportación de pruebas en procesos por delitos de corrupción. ¿Cuál es la sanción establecida para esta conducta?",
        "a": "Privación de libertad de tres a ocho años y multa de treinta a quinientos días."
    },
    {
        "id": 633,
        "q": "¿Qué sanción corresponde a la servidora o servidor público que, en consideración a su cargo, admitiere regalos u otros beneficios?",
        "a": "Privación de libertad de tres a ocho años y multa de cien a doscientos cincuenta días."
    },
    {
        "id": 634,
        "q": "¿Cuál es la pena base establecida para el delito de esterilización forzada?",
        "a": "Privación de libertad de cinco (5) a doce (12) años."
    },
    {
        "id": 635,
        "q": "¿Cuál es la pena privativa de libertad establecida para el delito de violación cuando la víctima es una niña, niño o adolescente menor de catorce (14) años?",
        "a": "Privación de libertad de treinta (30) años sin derecho a indulto."
    },
    {
        "id": 636,
        "q": "¿Cuál es la sanción establecida para el servidor público que hubiere incrementado desproporcionadamente su patrimonio respecto de sus ingresos legítimos y que no pueda ser justificado, según la normativa de lucha contra la corrupción?",
        "a": "Privación de libertad de cinco a diez años, inhabilitación para el ejercicio de la función pública y/o cargos electos, multa de doscientos hasta quinientos días y el decomiso de los bienes obtenidos ilegalmente."
    },
    {
        "id": 637,
        "q": "¿Cuál es la sanción establecida para el delito de abuso sexual cuando no existe penetración o acceso carnal?",
        "a": "Privación de libertad de seis (6) a diez (10) años."
    },
    {
        "id": 638,
        "q": "¿Cuál es la sanción establecida para la persona natural que, mediante actividad privada, hubiere incrementado desproporcionadamente su patrimonio respecto de sus ingresos legítimos afectando el patrimonio del Estado, sin poder desvirtuar tal situación?",
        "a": "Privación de libertad de tres a ocho años, multa de cien a trescientos días y el decomiso de los bienes obtenidos ilegalmente."
    },
    {
        "id": 639,
        "q": "¿Cuál es la sanción establecida para el funcionario público extranjero o de una organización internacional pública que solicitare o aceptare, en forma directa o indirecta, un beneficio indebido con el fin de actuar o abstenerse de actuar en el ejercicio de sus funciones?",
        "a": "Privación de libertad de tres a ocho años y multa de cincuenta a quinientos días."
    },
    {
        "id": 640,
        "q": "¿Cuál es la sanción establecida para el delito de violencia patrimonial contra la mujer?",
        "a": "Multa de cien (100) hasta trescientos sesenta y cinco (365) días."
    },
    {
        "id": 641,
        "q": "¿Cuál es la pena establecida para el delito de violencia económica contra la mujer?",
        "a": "Privación de libertad de dos (2) a cuatro (4) años."
    },
    {
        "id": 642,
        "q": "¿Cuál es la pena base establecida para el delito de acoso sexual?",
        "a": "Privación de libertad de cuatro (4) a ocho (8) años."
    },
    {
        "id": 643,
        "q": "El que prometiere, ofreciere u otorgare en forma directa o indirecta, a un funcionario público extranjero o de una organización internacional pública, beneficios como dádivas, favores o ventajas, con el fin de que dicho funcionario actúe o se abstenga de actuar en el ejercicio de sus funciones para obtener o mantener un beneficio indebido en relación con la realización de actividades comerciales internacionales. ¿Cuál es la sanción establecida para esta conducta?",
        "a": "Privación de libertad de cinco a diez años y multa de cien a quinientos días."
    },
    {
        "id": 644,
        "q": "¿Qué pena corresponde a quien cause un daño físico o psicológico que genere incapacidad laboral de quince hasta noventa días?",
        "a": "Privación de libertad de tres (3) a seis (6) años."
    },
    {
        "id": 645,
        "q": "¿Cuál es la sanción para quien cause un aborto forzado mediante violencia física, psicológica o sexual contra la mujer?",
        "a": "Reclusión de cuatro (4) a ocho (8) años."
    },
    {
        "id": 646,
        "q": "¿Qué característica distingue la innovación educativa de la primera década del siglo XXI respecto a las Reformas Educativas de los años 90?",
        "a": "Se vinculó con la incorporación de las TIC en la educación y con el protagonismo de las instituciones educativas y docentes en el cambio ‘desde abajo’, generando dinámicas de comunidades educativas y redes pedagógicas."
    },
    {
        "id": 647,
        "q": "¿Cuál es el criterio fundamental para seleccionar un método de enseñanza?",
        "a": "La aptitud para el objetivo de aprendizaje que se pretende alcanzar."
    },
    {
        "id": 648,
        "q": "Usted es maestro en una unidad educativa y aplica el método de caso. Un colega le pregunta cómo debe evaluar. ¿Qué le responde?",
        "a": "Con listas de control, escalas evaluativas y criterios conocidos por adelantado; la evaluación debe ser procesual y continua."
    },
    {
        "id": 649,
        "q": "¿Qué rasgo distintivo tienen las competencias fundamentales propuestas por DeSeCo frente a las planteadas por la Unión Europea?",
        "a": "Su carácter metacurricular las hace aplicables más allá de cualquier área disciplinar específica."
    },
    {
        "id": 650,
        "q": "¿Cuáles son las características que definen el modelo educativo basado en la organización mecanicista y su relación con la formación del ciudadano en el Estado Moderno Industrial?",
        "a": "Prioriza la eficiencia repetitiva mediante rutinas que forman el comportamiento ciudadano, y homogeniza la enseñanza y el conocimiento como estructuras rígidas que refuerzan la autoridad incuestionable del Estado."
    },
    {
        "id": 651,
        "q": "En el documento “Convivencia escolar y resolución pacífica de conflictos”, Cortina (1997), siguiendo a Kant, examina la resolución de los conflictos desde tres aspectos o imperativos. ¿Cuáles son?",
        "a": "Principio de habilidad, principio de prudencia y principio de moralidad."
    },
    {
        "id": 652,
        "q": "De acuerdo a la Ley General para personas con discapacidad, en el marco del derecho a protección de su familia, ¿cómo se define a la familia en relación con la persona con discapacidad?",
        "a": "Primer espacio de inclusión."
    },
    {
        "id": 653,
        "q": "El nivel central del Estado y las Entidades Territoriales Autónomas crearán y adoptarán medidas de prevención para modificar los comportamientos individuales y sociales violentos y aquellos que toleran, naturalizan y reproducen la violencia. ¿Cuáles son los tres criterios de acción bajo los que se organizan dichas medidas?",
        "a": "Prevención Estructural, Individual y Colectiva."
    },
    {
        "id": 654,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, en el cuadro “Actitudes: organización escolar v. conflicto/violencia/disciplina”, ¿qué actitudes caracterizan el paradigma Normativo Individualista Positivo?",
        "a": "Prestar la menor atención posible a los casos de indisciplina y violencia e intentar que cada profesor los resuelva aisladamente. Aislar el problema y sancionar / excluir al alumnado de manera contundente sin otras medidas complementarias."
    },
    {
        "id": 655,
        "q": "La pretendida neutralidad del conocimiento escolar resulta precisamente en:",
        "a": "Encubrir bajo argumentos técnicos las opciones culturales, epistémicas y políticas que atraviesan toda decisión sobre los contenidos del currículum."
    },
    {
        "id": 656,
        "q": "Una empresa privada recibe una subvención del Estado para ejecutar un proyecto de infraestructura comunitaria. ¿Cuál es la obligación principal de esta empresa respecto al manejo de los recursos públicos recibidos?",
        "a": "Informar a la entidad pública competente sobre el destino, forma y resultados del manejo de los recursos y privilegios públicos recibidos, y presentar estados financieros debidamente auditados por una firma independiente."
    },
    {
        "id": 657,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué principios psicológicos satisface el aprendizaje programado según Skinner?",
        "a": "Retroalimentación, auto-aprendizaje y aprendizaje individualizado como principios psicológicos básicos del método."
    },
    {
        "id": 658,
        "q": "Una maestra observa que uno de sus estudiantes muestra falta de concentración frecuente, conductas variables durante las clases y se niega sistemáticamente a hablar sobre su situación familiar. Según el “Protocolo de Prevención y Actuación”, ¿cuál de las siguientes conductas adicionales, identificables en la institución educativa, reforzaría la alerta de una posible situación de violencia?",
        "a": "Expresar temor a permanecer en el establecimiento educativo y miedo a regresar a su casa al finalizar clases."
    },
    {
        "id": 659,
        "q": "¿Qué capacidades desarrollan los maestros que cuentan con infraestructura tecnológica y asistencia técnica adecuada?",
        "a": "Presentan una mejora continua de sus habilidades relacionadas con las TIC, estando capacitados para usar y seleccionar recursos tecnológicos adecuados para mejorar su efectividad personal y profesional, y para actualizar voluntariamente sus habilidades y conocimientos ante los nuevos desarrollos."
    },
    {
        "id": 660,
        "q": "¿Qué características tiene el «maestro inadecuado» según el modelo bidimensional de enseñanza efectiva de Lowman?",
        "a": "Presenta un entusiasmo intelectual bajo (vago y aburrido) y una relación interpersonal baja (frío, distante y muy controlador), constituyendo el perfil docente menos efectivo dentro del modelo bidimensional de Lowman al no alcanzar niveles satisfactorios en ninguna de las dos dimensiones."
    },
    {
        "id": 661,
        "q": "De acuerdo al procedimiento para la atención educativa, una vez que se identifique la presencia de Dificultades Específicas en el Aprendizaje, el estudiante podrá inscribirse en un Centro de Educación Especial para recibir el apoyo educativo correspondiente en modalidad:",
        "a": "Directa"
    },
    {
        "id": 662,
        "q": "El maestro Rodrigo imparte sus clases sin realizar evaluaciones intermedias ni ofrecer comentarios sobre el desempeño de sus estudiantes; únicamente aplica un examen al finalizar la unidad y entrega las calificaciones sin explicación. Según los principios basados en la investigación sobre la buena enseñanza, ¿qué elemento esencial del aprendizaje está ignorando el maestro Rodrigo?",
        "a": "Prescinde de la retroalimentación adecuada sobre el rendimiento, pues los estudiantes necesitan ayuda para evaluar el conocimiento y la competencia existentes, y oportunidades para reflexionar sobre lo que han aprendido, lo que todavía necesitan saber y cómo evaluarse a sí mismos."
    },
    {
        "id": 663,
        "q": "En Potosí, una maestra aplica el método de caso sobre contaminación minera. Los grupos no lograron debatir porque carecían de destrezas analíticas. ¿Qué condición previa fue omitida?",
        "a": "Tener cierta experiencia y conocimientos previos, pues este método requiere destrezas analíticas."
    },
    {
        "id": 664,
        "q": "Un estudiante reacciona con bloqueo e inhibición ante una pregunta del maestro frente a sus compañeros. ¿Qué estructura neurológica regula esa respuesta afectiva y condiciona el acceso a los procesos cognitivos superiores?",
        "a": "Límbico."
    },
    {
        "id": 665,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué riesgo presenta un componente asimilador excesivo en el estilo de Kolb?",
        "a": "Tienden a construir «castillos en el aire» siendo incapaces de aplicar sus conocimientos en situaciones prácticas."
    },
    {
        "id": 666,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué distingue al estudiante intuitivo del sensorial en su forma de aprender?",
        "a": "Les gusta la innovación y detestan la repetición; son buenos en captar nuevos conceptos y abstracciones matemáticas."
    },
    {
        "id": 667,
        "q": "El sistema reptiliano regula comportamientos instintivos vinculados a la organización grupal y la posición que cada individuo ocupa dentro de un colectivo. En relación con el sentido de jerarquías sociales que activa esta estructura, ¿cuál de las siguientes descripciones lo define correctamente?",
        "a": "Tendencia automática a reconocer rangos de poder y dominancia, orientando conductas de sumisión o liderazgo."
    },
    {
        "id": 668,
        "q": "Según los estilos de aprendizaje y métodos de enseñanza, el perfil docente que reflexiona sistemáticamente sobre su práctica pedagógica, concibe su profesionalización en colaboración con el equipo docente y orienta su trabajo hacia un proyecto común de transformación e innovación curricular, corresponde a un maestro con predominancia del estilo:",
        "a": "Reflexivo, porque observa y analiza su práctica desde múltiples perspectivas antes de proponer transformaciones curriculares colectivas."
    },
    {
        "id": 669,
        "q": "De acuerdo con Tobón (2008), una de las características principales de las competencias genéricas es que:",
        "a": "Aumentan las posibilidades de empleabilidad, permiten adaptarse a diferentes entornos laborales, no están ligadas a una ocupación particular y su adquisición puede evaluarse de manera rigurosa."
    },
    {
        "id": 670,
        "q": "Un maestro diseña actividades donde los estudiantes exploran sus fortalezas, se integran a grupos según afinidades y reciben retroalimentación positiva sobre sus capacidades. ¿Qué impacto tiene este tipo de experiencias en el desarrollo integral del estudiante?",
        "a": "Favorecen el autoconocimiento, mejoran las relaciones sociales, promueven la inserción en diversos grupos y fortalecen su autoestima"
    },
    {
        "id": 671,
        "q": "Un maestro planifica tareas donde los estudiantes identifican sus capacidades, se vinculan con compañeros según afinidades y reciben comentarios valorativos sobre sus logros. ¿Qué efecto produce esto en la formación integral del estudiante?",
        "a": "Potencian el autoconocimiento, la integración social y consolidan una imagen positiva de sí mismo."
    },
    {
        "id": 672,
        "q": "¿Cómo se denomina a uno de los mecanismos principales del aprendizaje y la memoria?",
        "a": "Potenciación a largo plazo."
    },
    {
        "id": 673,
        "q": "¿Qué transformación produce la sistematización constante de las prácticas de aprendizaje en los sujetos que participan en procesos de innovación educativa?",
        "a": "Convierte al individuo en creador y productor de saber, quien reorienta y conduce su propio quehacer formativo desde una postura activa y reflexiva."
    },
    {
        "id": 674,
        "q": "¿Cuál es una de las principales virtudes de las TIC en el ámbito educativo?",
        "a": "Desarrollar herramientas para la búsqueda, clasificación y selección de información con un propósito, sentando las bases de una actitud investigativa sustentada en competencias."
    },
    {
        "id": 675,
        "q": "¿Qué papel atribuye «Diseñar el currículum» a los proyectos del centro respecto del desarrollo profesional docente?",
        "a": "Posibilitan el desarrollo profesional de los docentes de manera coordinada y productiva."
    },
    {
        "id": 676,
        "q": "Según el “Manual de resolución de problemas”, “Esta herramienta se basa directamente en los contenidos de cada manual y se enfoca en medir la comprensión y aplicación de los conceptos, las actitudes y las habilidades enseñadas.” ¿Cuál es esta herramienta?",
        "a": "Revisión final de aprendizajes"
    },
    {
        "id": 677,
        "q": "¿Por qué las prácticas educativas tradicionales resultan insuficientes para la formación docente actual y qué deben lograr los docentes en sus alumnos?",
        "a": "Porque ya no brindan las herramientas necesarias para enseñar a sobrevivir económicamente en el mundo laboral actual, y los docentes deben capacitar a sus alumnos para resolver problemas reales, aprender, calcular, colaborar y comunicarse."
    },
    {
        "id": 678,
        "q": "¿Por qué se ha producido una depauperación del libro de texto como objeto cultural?",
        "a": "Porque su monopolio en la mediación de la información escolar es una consecuencia inevitable de su propio formato."
    },
    {
        "id": 679,
        "q": "¿Por qué razón resulta indispensable desarrollar las competencias docentes en el marco de una propuesta de enseñanza orientada a la calidad educativa?",
        "a": "Porque su desarrollo continuo posibilita la actualización profesional del docente y el diseño de programas que impulsen aprendizajes genuinamente significativos, mediante estrategias didácticas pertinentes."
    },
    {
        "id": 680,
        "q": "¿Por qué Feito califica a la pedagogía transmisiva como un ejemplo de esfuerzo inútil?",
        "a": "Porque solo sirve para un aprendizaje a corto plazo que permite superar exámenes pero no produce comprensión duradera ni una visión más amplia del mundo."
    },
    {
        "id": 681,
        "q": "¿Por qué la cultura que proporciona la escuela podría considerarse bastante pobre en referencia al libro de texto?",
        "a": "Porque siendo el libro de texto su depositario básico, su formato conduce inevitablemente a una cultura empobrecida."
    },
    {
        "id": 682,
        "q": "¿Por qué gran parte de los problemas de la escuela, relacionados con la didáctica y la organización escolar, deben ser planteados en una línea de resolución satisfactoria desde el planteamiento de investigación acción?",
        "a": "Porque a través de esta modalidad de investigación se ayuda a los participantes a incrementar su propia comprensión de los problemas educativos, se centra en problemas de preocupación inmediata, busca soluciones prácticas, por lo que es una investigación aplicada."
    },
    {
        "id": 683,
        "q": "¿Por qué razón Feito considera que la introducción del aprendizaje por competencias representa una ocasión de oro para replantearse el sentido del quehacer educativo?",
        "a": "Porque obliga a preguntarse qué debe haber adquirido una persona tras diez años de escolarización para desenvolverse en distintos ámbitos vitales."
    },
    {
        "id": 684,
        "q": "¿Por qué es importante el modelo de «desarrollo profesional desde la investigación»?",
        "a": "Porque ayuda a los participantes a incrementar su propia comprensión de los problemas educativos, se centra en problemas de preocupación inmediata, buscando soluciones prácticas, constituyéndose en una investigación aplicada."
    },
    {
        "id": 685,
        "q": "¿Por qué los proyectos didácticos deben tener valor para los individuos, relación con asignaturas o disciplinas, ser factibles y desafiantes, y buscar soluciones a un problema?",
        "a": "Porque permite desarrollar habilidades individuales y colectivas, integrar la teoría a la práctica y preparar a los estudiantes para su futura vida profesional."
    },
    {
        "id": 686,
        "q": "Según Imbernón, quien concibe el modelo de formación del profesorado como el marco organizativo y de gestión de los procesos de formación, ¿por qué se caracteriza la formación orientada individualmente?",
        "a": "Porque en esta modalidad de formación permanente de los profesores es el propio docente quien realiza el diagnóstico de sus necesidades formativas."
    },
    {
        "id": 687,
        "q": "En el marco de la escuela que aprende, ¿por qué es importante «diagnosticar sistemáticamente líneas de mejora»?",
        "a": "Porque permite fundamentar en ellas el cambio, a través de procesos de evaluación interna o institucional, que debe ser asumida como una actividad de auto-reflexión colaborativa del equipo de colegas, o claustro, y que se proyecta en los diferentes ámbitos, áreas o variables del centro escolar."
    },
    {
        "id": 688,
        "q": "¿Cómo se justifica la inclusión del «manejo efectivo del tiempo» como uno de los fundamentos esenciales para alcanzar una enseñanza efectiva en el ámbito educativo?",
        "a": "Porque el modo en que una institución define las expectativas de tiempo para los estudiantes, profesores, administradores y otro personal profesional puede establecer la base de alto rendimiento para todos."
    },
    {
        "id": 689,
        "q": "¿Por qué es importante reflexionar sobre el alcance de las mejoras emprendidas en el aula antes de calificarlas como innovación educativa?",
        "a": "Porque permite aprender a reconocer si los cambios emprendidos apuntan a transformaciones profundas o pasan rápido."
    },
    {
        "id": 690,
        "q": "Según Gimeno Sacristán, en el capítulo «Grandeza y miseria del libro de texto», ¿por qué el libro de texto es reconocible a simple vista?",
        "a": "Porque presenta una estructura estandarizada que lo distingue de cualquier otro tipo de texto."
    },
    {
        "id": 691,
        "q": "Según los principios de la enseñanza, ¿cuál es la razón pedagógica por la que el docente debe presentar primero material más sencillo antes de introducir contenidos complejos y difíciles?",
        "a": "Porque mantener el interés de los alumnos en la lección exige que cualquier material que se enseñe al niño sea graduado, avanzando de lo fácil y sencillo hacia lo complejo."
    },
    {
        "id": 692,
        "q": "¿Por qué el modelo tradicional de organizar los sistemas educativos en torno a escuelas como unidades aisladas resulta insuficiente frente a los nuevos escenarios y exigencias de la educación actual?",
        "a": "Porque la educación actual demanda una dimensión sistémica que articule a las escuelas con su entorno social, cultural y comunitario, superando el aislamiento institucional para responder de manera pertinente a contextos cambiantes y complejos."
    },
    {
        "id": 693,
        "q": "Según el texto de Innovación Educativa, ¿por qué el riesgo y la incertidumbre son condiciones inherentes a todo proceso de transformación educativa?",
        "a": "Porque toda innovación supone adentrarse en el terreno de lo desconocido, y no hay aprendizaje genuino sin desequilibrio ni conflicto cognitivo."
    },
    {
        "id": 694,
        "q": "Según el texto «El significado del currículum», ¿por qué el sentido para quien educa y el significado construido por quien es educado pertenecen a órdenes distintos?",
        "a": "Porque la intención de enseñar y el efecto de aprender son realidades irreductibles entre sí."
    },
    {
        "id": 695,
        "q": "¿Por qué es insuficiente perfeccionar el texto curricular para alcanzar los resultados educativos esperados?",
        "a": "Porque entre el texto prescrito y los efectos reales median procesos de interpretación y subjetivación incontrolables."
    },
    {
        "id": 696,
        "q": "En el análisis de los procesos de innovación educativa, ¿por qué resulta especialmente relevante reconocer las dificultades que generan los intentos de cambio en instituciones tradicionales y complejas?",
        "a": "Porque los intentos de cambio generan resistencias vinculadas a las relaciones de poder existentes dentro de esas instituciones, lo cual condiciona el curso y los resultados de la innovación."
    },
    {
        "id": 697,
        "q": "Según Francisco Imbernón, los maestros pueden elegir distintos modelos de desarrollo profesional. ¿Por qué los maestros eligen el modelo de desarrollo profesional de «formación orientada individualmente»?",
        "a": "Porque los docentes aprenden por sí mismos a través de lectura, experiencias y puesta en práctica de determinados planteamientos."
    },
    {
        "id": 698,
        "q": "¿Por qué se habla del libro de texto como un monopolio en el ámbito escolar?",
        "a": "Porque concentra y regula las formas, funciones y materiales de lectura disponibles para estudiantes y docentes en la escuela."
    },
    {
        "id": 699,
        "q": "¿Por qué la innovación educativa es considerada un proceso que lleva tiempo y que nunca está totalmente acabado?",
        "a": "Porque la escuela es un sistema vivo y cambiante que demanda una adaptación y revisión permanente de sus prácticas, actores y contextos."
    },
    {
        "id": 700,
        "q": "¿Por qué  Perrenoud afirma que el interés inicial de los alumnos ante una actividad nueva tiende a desvanecerse en el transcurso de la escolaridad?",
        "a": "Porque la escuela convierte las actividades en ejercicios estereotipados y repetitivos que anulan la sensación de descubrimiento."
    },
    {
        "id": 701,
        "q": "¿Por qué concebir la innovación educativa como un producto representa un riesgo para las instituciones educativas?",
        "a": "Porque se corre el riesgo de caer en la rutina y en la instalación de prácticas o modelos que en su momento pudieron representar una ruptura, pero que ya no lo son."
    },
    {
        "id": 702,
        "q": "¿Por qué la pedagogía constituye un aspecto determinante al momento de integrar la tecnología al plan de estudios, según el documento «Las TIC en la Formación Docente»?",
        "a": "Porque sin un enfoque didáctico que oriente su uso, la tecnología no contribuye al logro de los objetivos curriculares de aprendizaje"
    },
    {
        "id": 703,
        "q": "¿Por qué según la visión humanista de la motivación solo las necesidades insatisfechas influyen en el comportamiento y las necesidades satisfechas no?",
        "a": "Porque los seres humanos tienen deseos y anhelos que influyen en su comportamiento."
    },
    {
        "id": 704,
        "q": "¿Por qué las necesidades de deficiencia (fisiológicas, de seguridad, pertenencia, amor y estima) se deben satisfacer antes de que las necesidades de crecimiento (autorrealización, conocimiento y comprensión, estética)?",
        "a": "Porque cuando las necesidades de deficiencia han sido satisfechas, la persona motivada por el crecimiento busca una tensión placentera y participa en el aprendizaje autodirigido."
    },
    {
        "id": 705,
        "q": "¿Cuál es el fundamento por el que la innovación educativa adquiere un carácter sistémico?",
        "a": "Porque modificar un componente escolar genera efectos inmediatos en los demás elementos con los que se vincula e interactúa dentro del sistema educativo."
    },
    {
        "id": 706,
        "q": "¿Por qué el sector empresarial aporta apoyo financiero a la investigación y a la creación de nuevos conocimientos?",
        "a": "Porque la producción industrial y las disciplinas técnicas que la acompañan necesitan poder acceder a las ciencias exactas o predictivas para solventar problemas tecnológicos complejos, canalizando dicho apoyo de manera directa o por intermedio de fundaciones sin fines de lucro."
    },
    {
        "id": 707,
        "q": "¿Por qué es importante «tener expectativas positivas de los estudiantes» para que la enseñanza sea más eficaz y más eficiente?",
        "a": "Porque un maestro que realmente cree que sus estudiantes son capaces de grandes cosas genera las condiciones motivacionales y pedagógicas que potencian el aprendizaje y el desarrollo integral de cada estudiante."
    },
    {
        "id": 708,
        "q": "¿Por qué el «desarrollo profesional mediante el desarrollo curricular y la formación del centro« está cargado de conflictos de valor?",
        "a": "Porque no hay neutralidad y uniformidad de valores en la práctica educativa en la escuela y los maestros."
    },
    {
        "id": 709,
        "q": "Según Howard Gardner, la mayoría de las personas tienen la capacidad de desarrollar habilidades en cada una de las siete inteligencias y aprender a través de ellas. Sin embargo, ¿por qué se privilegia el aprendizaje lógico-matemático y el aprendizaje verbal-lingüístico en la educación?",
        "a": "Porque la educación ha tendido históricamente a enfatizar estas formas de aprendizaje por encima de las demás inteligencias."
    },
    {
        "id": 710,
        "q": "¿Por qué Sacristán señala que existe una incapacidad de la escuela por sí sola para cumplir la promesa de la modernidad ilustradora?",
        "a": "Porque se le exigen objetivos contradictorios: preparar para la vida, las profesiones y fomentar la independencia de juicio ciudadano."
    },
    {
        "id": 711,
        "q": "Según el texto de Sáez López, ¿por qué es crucial la motivación del maestro?",
        "a": "Porque los estudiantes idealizan a los maestros y tratan de copiarlos; por eso la motivación docente afecta directamente."
    },
    {
        "id": 712,
        "q": "¿Por qué la innovación educativa tiene un carácter sistémico?",
        "a": "Porque la naturaleza misma de la educación y la escuela implica que introducir cambios en algún componente tiene repercusiones más o menos inmediatas en los otros componentes con los que se relaciona e interactúa, de modo que cualquier cambio implica repensar todo el orden."
    },
    {
        "id": 713,
        "q": "En el proyecto descrito en el texto de Innovación Educativa, las maestras de una escuela rural transformaron profundamente su práctica pedagógica orientándola al desarrollo de la sensibilidad artística, lúdica, científica, comunicativa y social de los niños, sin replicar modelos externos ni esperar mandato estatal, ¿por qué esta experiencia no puede clasificarse como innovación incremental?",
        "a": "Porque la innovación incremental introduce ajustes menores sin transformar las estructuras de fondo, mientras que esta experiencia transformó profundamente la relación pedagógica, la misión de la escuela y su vínculo con la comunidad desde adentro y sin mandato externo."
    },
    {
        "id": 714,
        "q": "El modelo «entrenamiento o institucional» de Imbernón se desarrolla mediante cursos de actualización científica en instituciones como los centros de formación de maestros. ¿Por qué se la caracteriza como un modelo de orientación vertical?",
        "a": "Porque el formador selecciona las estrategias que ayudan al docente a lograr resultados."
    },
    {
        "id": 715,
        "q": "¿Por qué se prefiere hablar de “experiencias educativas innovadoras” en lugar de un modelo único aplicable a todos los contextos formativos?",
        "a": "Porque la finalidad formativa, el campo disciplinar y los patrones culturales de cada territorio otorgan significados propios e intransferibles a cada proceso de cambio."
    },
    {
        "id": 716,
        "q": "Según Sacristán, la cultura escolar se convierte en campo de disputas no porque los actores educativos sean irracionales, sino por una razón estructural más profunda. ¿Cuál es?",
        "a": "Porque toda selección de contenidos implica opciones políticas e ideológicas sobre el conocimiento y el modelo de sociedad."
    },
    {
        "id": 717,
        "q": "¿Por qué un estudiante de 10 años que no sabe leer ni escribir no puede desempeñar adecuadamente su papel en la organización escolar, según Perrenoud?",
        "a": "Porque sin ese saber hacer básico no puede ejecutar la mayor parte del trabajo escolar que se le demanda."
    },
    {
        "id": 718,
        "q": "En el proyecto descrito en el texto de Innovación Educativa de la UNESCO, ¿por qué se considera a la escuela como una “encrucijada de culturas”?",
        "a": "Porque la escuela escapa a la simple transmisión de saberes constituidos para dar lugar a procesos de conocimiento de la realidad local, incidiendo en las problemáticas de las diversas comunidades y convirtiendo lo pedagógico en un factor de reconocimiento de la diversidad cultural."
    },
    {
        "id": 719,
        "q": "Gimeno Sacristán califica como «la más espinosa cuestión» la definición de los contenidos de cada materia, una vez resuelta la selección de disciplinas del currículum. ¿Por qué razón esta decisión resulta más conflictiva que la de establecer qué asignaturas deben enseñarse?",
        "a": "Porque los contenidos expresan opciones de valor sobre qué cultura merece transmitirse, generando tensiones ideológicas irresolubles con criterios técnicos."
    },
    {
        "id": 720,
        "q": "¿Por qué se considera fundamental el principio de «desarrollar la reciprocidad y la cooperación entre los estudiantes» dentro de los fundamentos de la enseñanza efectiva?",
        "a": "Porque el aprendizaje se mejora cuando se parece más a un esfuerzo de equipo que a una carrera en solitario, es colaborativo y no competitivo y aislado."
    },
    {
        "id": 721,
        "q": "¿Por qué Perrenoud afirma que revelar el currículum oculto no provoca su desaparición?",
        "a": "Porque su manifestación abre debate sobre su legitimidad y su reordenación bajo nuevas formulaciones del currículum formal."
    },
    {
        "id": 722,
        "q": "¿Por qué la escuela favorece el orden y la aplicación por encima del espíritu crítico y la creatividad?",
        "a": "Porque puede prescindir de la creatividad, pero necesita a corto plazo alumnos ordenados y aplicados para funcionar."
    },
    {
        "id": 723,
        "q": "¿Por qué la indagación es considerada un elemento indispensable para sostener y profundizar los procesos de innovación educativa?",
        "a": "Porque constituye una forma de pensamiento científico que permite aprender de la experiencia, explorar nuevas posibilidades y encontrar formas de enseñanza que promuevan el desarrollo profesional docente y el aprendizaje de los estudiantes."
    },
    {
        "id": 724,
        "q": "Según los principios psicológicos de enseñanza, ¿por qué es importante alentar a los estudiantes a enseñar a otros estudiantes?",
        "a": "Porque los estudiantes que enseñan también aprenden y desarrollan un sentido de logro y confianza en su capacidad."
    },
    {
        "id": 725,
        "q": "¿Por qué Perrenoud sostiene  que aprender a leer y escribir no puede reducirse a un objetivo de la enseñanza primaria?",
        "a": "Porque es también condición funcional para desempeñar el oficio de alumno dentro de la organización escolar."
    },
    {
        "id": 726,
        "q": "¿Por qué la alfabetización tecnológica debe seguir siendo parte estructurada de los conocimientos en el ámbito educativo?",
        "a": "Porque amplía la gama de usos de las TIC dentro de los sistemas de enseñanza-aprendizaje, partiendo del conocimiento de su significado, uso y potencialidad."
    },
    {
        "id": 727,
        "q": "En Innovación Educativa se afirma que toda innovación implica riesgo e incertidumbre, ¿por qué estos elementos son considerados inherentes al proceso innovador y no como señales de fracaso?",
        "a": "Porque son condiciones propias de internarse en territorios pedagógicos inexplorados, sin cuya presencia no es posible generar aprendizaje transformador auténtico."
    },
    {
        "id": 728,
        "q": "Desde el neuroaprendizaje, ¿Por qué se recomienda al maestro incorporar actividades cortas de neuroacción que requieran movimiento del cuerpo en el aula?",
        "a": "Porque genera dopamina en el aula."
    },
    {
        "id": 729,
        "q": "¿Por qué el aprendizaje de vivir en un ambiente superpoblado constituye, para Perrenoud, un ejemplo paradigmático del currículum oculto en su sentido más profundo?",
        "a": "Porque opera un doble ocultamiento: no figura en ningún texto normativo y los propios alumnos ignoran haberlo incorporado como hábito."
    },
    {
        "id": 730,
        "q": "¿Por qué la capacidad de comunicación y las habilidades interpersonales son muy importantes para una enseñanza efectiva?",
        "a": "Porque estas habilidades permiten crear relaciones de los estudiantes que los motivan a trabajar de forma independiente."
    },
    {
        "id": 731,
        "q": "Según Gimeno Sacristán, en el capítulo «Grandeza y miseria del libro de texto», ¿por qué se afirma que el libro de texto es el último reductor de la experiencia en las aulas?",
        "a": "Porque filtra y simplifica el conocimiento cultural, determinando qué contenidos y en qué forma llegan al aula."
    },
    {
        "id": 732,
        "q": "La escuela como organización educativa, aunque sea desde una perspectiva formal, se entiende como una organización compleja, con una serie de roles desempeñados mediante la interacción de las normas establecidas y en función de la propia personalidad de quienes los ejercen, y todo ello en el marco de unos objetivos que debe cumplir y de otras variables implicadas. ¿Por qué se concibe a la escuela como una micro-sociedad?",
        "a": "Porque tiene cultura propia y clima particular, a su vez integrados en múltiples subculturas que influyen en la conducta y actividad de sus miembros."
    },
    {
        "id": 733,
        "q": "¿Por qué el aprendizaje perspicaz destaca la organización del plan de estudios, esquema de estudios, plan de trabajo y procedimiento de planificación del programa de aprendizaje?",
        "a": "Porque enfatiza que el aprendizaje humano tiene siempre un propósito y con objetivos dirigidos."
    },
    {
        "id": 734,
        "q": "Considerando la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿por qué el Comité de los Derechos del Niño recomienda la prohibición del castigo corporal?",
        "a": "Porque es una violación a sus derechos, a su integridad física, dignidad humana e igual protección ante la ley."
    },
    {
        "id": 735,
        "q": "Según Perrenoud, ¿cuál es la razón fundamental por la que el trabajo escolar difiere de los demás trabajos?",
        "a": "Porque su razón de ser no es producir algo útil para alguien, sino favorecer aprendizajes que solo rinden fruto a largo plazo."
    },
    {
        "id": 736,
        "q": "¿Por qué el método de demostración es considerado un excelente método de enseñanza?",
        "a": "Porque permite convencer al alumno, demostrar un punto, validar la aplicación de una teoría, impartir una habilidad mecánica y fomenta la participación activa de los estudiantes."
    },
    {
        "id": 737,
        "q": "Según Philippe Perrenoud, en el currículum real y el trabajo escolar, ¿por qué la escolarización no es condición suficiente ni necesaria para la formación del sentido común?",
        "a": "Porque es difuso y está contenido en cualquier práctica e interacción de la organización social."
    },
    {
        "id": 738,
        "q": "Tomando en cuenta el desarrollo de habilidades en TIC por parte de los formadores de docentes, ¿por qué estos encuentran más difícil integrar las TIC a su práctica profesional en comparación con los docentes?",
        "a": "Porque en general tienen un conocimiento mayor en contenido y pedagogía que debe ser respetado, y trabajan en diversos contextos dentro y fuera de la institución, sintiendo más dramáticamente la falta de condiciones esenciales para la implementación de las TIC."
    },
    {
        "id": 739,
        "q": "¿Por qué el trabajo escolar se aproxima, según el texto, a las tareas profesionales realizadas por motivos puramente lucrativos?",
        "a": "Porque ambos se ejecutan sin interés intrínseco, orientados a obtener una recompensa externa."
    },
    {
        "id": 740,
        "q": "Según la teoría de la motivación del logro, ¿por qué algunas personas pueden experimentar un temor al éxito?",
        "a": "Porque se preocupan de que el éxito puede interferir con las relaciones positivas con los demás."
    },
    {
        "id": 741,
        "q": "¿Por qué, según Sacristán, lo mejor que puede hacer la burocracia de las administraciones educativas es producir un buen texto curricular?",
        "a": "Porque el desarrollo real del currículum depende de mediadores cuya interpretación y práctica ninguna administración puede sustituir."
    },
    {
        "id": 742,
        "q": "Según la perspectiva del desarrollo profesional docente en el uso de TIC, ¿por qué es importante brindar oportunidades continuas de desarrollo profesional incluso cuando esta práctica ya está extendida?",
        "a": "Porque la tecnología cambia rápidamente y los docentes y personal administrativo deben mantenerse actualizados de forma constante."
    },
    {
        "id": 743,
        "q": "¿Por qué el trabajo cooperativo prioriza la cooperación frente a la competición?",
        "a": "Porque el aprendizaje cooperativo es un enfoque interactivo de organización del trabajo en el aula en el cual los alumnos son responsables de su aprendizaje y del de sus compañeros en una estrategia de corresponsabilidad para alcanzar metas e incentivos grupales."
    },
    {
        "id": 744,
        "q": "¿Por qué razón, según «Diseñar el currículum», las actividades constituyen el elemento más específico y relevante del aula por encima de otros componentes curriculares?",
        "a": "Porque articulan la práctica, revelan los esquemas del profesor y configuran la vida social del aula."
    },
    {
        "id": 745,
        "q": "¿Por qué son esenciales las estructuras y los procesos micropolíticos en las instituciones educativas?",
        "a": "Porque son fundamentales para el cambio y la innovación, así como para la estabilidad y el mantenimiento de los centros escolares"
    },
    {
        "id": 746,
        "q": "Según el documento “Convivencia escolar y resolución pacífica de conflictos”, ¿por qué la educación es un instrumento valioso para la transformación humanizadora de la sociedad?",
        "a": "Porque auspicia también formas de relacionarse unos con otros desde la generosidad inequívoca, desde la emoción y desde los sentimientos más profundos del ser humano."
    },
    {
        "id": 747,
        "q": "Al analizar por qué la escuela pública representa históricamente una apuesta a favor de la igualdad, se señalan dos razones que fundamentan esa afirmación. ¿Cuál de las siguientes opciones recoge una de ellas?",
        "a": "Porque debe dar cabida a toda la diversidad de estudiantes, constituyéndose en el modelo históricamente más integrador de las diferencias."
    },
    {
        "id": 748,
        "q": "¿Por qué es importante concebir la innovación como algo orgánico, inconcluso y sujeto a revisión crítica permanente?",
        "a": "Porque de lo contrario se cae en la reproducción rutinaria e instalación de prácticas o modelos que en su momento pudieron significar una ruptura pero que ya no lo son, derivando en repetición, rutina y monotonía."
    },
    {
        "id": 749,
        "q": "¿Por qué las creencias, costumbres, normas y conductas internalizadas a lo largo de la vida pueden convertirse en obstáculos para el cambio en las instituciones educativas?",
        "a": "Porque actúan en dirección contraria a lo que busca evolucionar en nosotros o en nuestras instituciones y, como consecuencia, pueden generar resistencias y temores."
    },
    {
        "id": 750,
        "q": "En el marco de la escuela que aprende, ¿por qué es importante «concebir la calidad educativa como un referente»?",
        "a": "Porque la escuela que aprende entiende que la calidad es esa tensión utópica que mueve y motiva hacia la mejora permanente en todo cuanto se hace."
    },
    {
        "id": 751,
        "q": "¿Por qué, según Sacristán, progresistas y conservadores incurren en errores simétricos respecto al currículum?",
        "a": "Porque ambos confunden el conocimiento escolar con la cultura que dice representar, sin advertir que uno es una versión mediada de la otra."
    },
    {
        "id": 752,
        "q": "¿Cuántas veces puede un estudiante solicitar el traspaso?",
        "a": "Por una sola vez."
    },
    {
        "id": 753,
        "q": "Según Wynne (1980), citado en el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿cómo se caracterizan los centros educativos con un buen clima escolar?",
        "a": "Por un elevado nivel de interacción entre los docentes, basado en la cooperación y el apoyo mutuo."
    },
    {
        "id": 754,
        "q": "En los procesos de enseñanza, todo docente quiere llegar a las redes cognitivas racionales de sus estudiantes, es decir a su cerebro racional. Sin embargo, antes de llegar allí, ¿por qué estructura debe pasar obligatoriamente la información?",
        "a": "Por sus redes instintivas emocionales, es decir por sus cerebros reptiliano y mamífero."
    },
    {
        "id": 755,
        "q": "¿Por cuántas horas debe hacer seguimiento la Fuerza Especial de Lucha Contra la Violencia a la mujer en situación de violencia para garantizar la eficacia de su protección?",
        "a": "Por setenta y dos (72) horas."
    },
    {
        "id": 756,
        "q": "¿Cuál es el mecanismo que el Estado Plurinacional establece para garantizar el desarrollo educativo permanente de las potencialidades individuales de las personas con discapacidad psicosocial?",
        "a": "A través de la constante capacitación de los diferentes estamentos educativos para la atención efectiva del desarrollo de esas potencialidades individuales."
    },
    {
        "id": 757,
        "q": "De acuerdo con el enfoque de la educación superior como gran contexto, ¿cuáles son los tres pilares a través de los cuales los docentes contribuyen al desarrollo óptimo de la sociedad?",
        "a": "A través del trabajo como práctica docente, la investigación como generación de conocimiento y la intervención como contribución activa en la sociedad."
    },
    {
        "id": 758,
        "q": "Las estructuras de conocimiento almacenadas en la memoria semántica como esquemas o mapas cognitivos determinan la forma en que los estudiantes aprenden. ¿Qué proceso describe con precisión ese aprendizaje?",
        "a": "A través de la ampliación, combinación y reorganización de redes interconectadas de representaciones mentales que se superponen y asocian entre sí de manera compleja."
    },
    {
        "id": 759,
        "q": "Al examinar la función legitimadora de la escuela respecto de las desigualdades entre estudiantes, ¿mediante qué mecanismo opera esa legitimación?",
        "a": "Mediante la apreciación del mérito personal, convirtiendo las diferencias y desigualdades entre sujetos en un escalonamiento de logros escolares."
    },
    {
        "id": 760,
        "q": "¿Por qué razón, según Linuesa, la implicación docente en los proyectos de centro fue escasa tras la reforma de los noventa, en el contexto del libro?",
        "a": "Por la falta de preparación del profesorado y la ausencia de una cultura colaborativa."
    },
    {
        "id": 761,
        "q": "En neurociencia educativa se denomina «cerebro humano» o neocórtex a la estructura que nos distingue como especie. ¿Cómo está conformada?",
        "a": "Por la corteza prefrontal y lóbulos asociados."
    },
    {
        "id": 762,
        "q": "¿Por cuánto tiempo se acepta provisionalmente la constancia de diploma de bachiller en trámite como requisito de ingreso a los Institutos?",
        "a": "Por el tiempo improrrogable de seis (6) meses"
    },
    {
        "id": 763,
        "q": "Según el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿por qué se ve afectado el clima escolar?",
        "a": "Por la calidad del sistema de reconocimiento y el desarrollo de la autoestima del alumnado."
    },
    {
        "id": 764,
        "q": "¿En qué situaciones el superior jerárquico es civilmente corresponsable por el daño causado al Estado?",
        "a": "Cuando el superior jerárquico hubiere autorizado el uso indebido de bienes, servicios y recursos del Estado, o cuando dicho uso fuere posibilitado por las deficiencias de los sistemas de administración y control interno factibles de ser implantados en la entidad."
    },
    {
        "id": 765,
        "q": "¿Bajo qué condición pueden ser convocados de manera extraordinaria los docentes de los Institutos fiscales y de convenio?",
        "a": "De acuerdo a las necesidades académicas y administrativas, por convocatoria de las autoridades superiores"
    },
    {
        "id": 766,
        "q": "Respecto a las obligaciones del Estado Plurinacional de Bolivia en materia de discapacidad, ¿cuál de las siguientes opciones describe correctamente lo que el Estado debe adoptar e implementar?",
        "a": "Políticas públicas destinadas a la protección y el desarrollo integral de la persona con discapacidad, de su familia y/o tutores."
    },
    {
        "id": 767,
        "q": "¿En qué esferas se producen los importantes cambios que enfrentan las nuevas generaciones al ingresar al mundo actual?",
        "a": "Científica y tecnológica, política, económica, social y cultural."
    },
    {
        "id": 768,
        "q": "¿Qué condición deben cumplir los Directivos de Institutos para postular a una convocatoria docente dentro del mismo Instituto?",
        "a": "No podrán postular a una convocatoria docente dentro del mismo Instituto si se encuentran cumpliendo funciones, salvo presentación de renuncia."
    },
    {
        "id": 769,
        "q": "Un docente presenta una denuncia formal contra el Director por presuntas irregularidades en el manejo de recursos institucionales. Según la normativa de administración y control gubernamentales, ¿cuál es el alcance de la protección y la responsabilidad que recae sobre el docente denunciante?",
        "a": "No podrá ser procesado administrativamente ni sancionado dentro de la entidad por haber presentado la denuncia, pero ésta podrá originarle responsabilidad civil o penal."
    },
    {
        "id": 770,
        "q": "¿Qué proceso neurológico explica la explosión de conexiones en el cerebro infantil?",
        "a": "Proliferación acelerada de sinapsis que maximiza enlaces neuronales"
    },
    {
        "id": 771,
        "q": "¿Cómo se denomina al proceso en el que el organismo elimina conexiones poco utilizadas para asegurar que la capacidad cerebral esté disponible para conexiones frecuentes?",
        "a": "Poda neuronal"
    },
    {
        "id": 772,
        "q": "¿Qué constituye el sistema atencional?",
        "a": "PLP."
    },
    {
        "id": 773,
        "q": "¿A quién se atribuye la frase «El cerebro no es un vaso por llenar, sino una lámpara por encender»?",
        "a": "Plutarco."
    },
    {
        "id": 774,
        "q": "Según los nuevos desafíos planteados por la neurociencia, ¿qué factores intelectivos deben intervenir en el proceso de aprendizaje?",
        "a": "Afecto, expectativas, motivación, confianza y autoestima."
    },
    {
        "id": 775,
        "q": "Según el modelo del «Cerebro triuno», el cerebro reptiliano manifiesta ciertos sentidos a través de comportamientos observables en la vida cotidiana. ¿Cuál de estos sentidos se expresa mediante rituales, supersticiones, hábitos y la necesidad de ambientes y personas previsibles?",
        "a": "Resistencia al cambio por seguridad neurológica"
    },
    {
        "id": 776,
        "q": "Al diseñar una secuencia de enseñanza orientada a equilibrar la abstracción conceptual y la aplicación pragmática en el aprendizaje de las ciencias y las matemáticas, ¿qué estrategia coinstruccional cumple con mayor precisión la función de tender un puente entre el razonamiento formal abstracto y la resolución de situaciones concretas durante el desarrollo mismo de la instrucción?",
        "a": "Utilizar analogías y ejemplificaciones contextualizadas que acompañen el desarrollo del contenido científico-matemático, permitiendo al estudiante establecer relaciones entre los modelos abstractos trabajados y situaciones concretas de su entorno, sosteniendo la construcción del conocimiento a lo largo de la instrucción."
    },
    {
        "id": 777,
        "q": "¿Cuál de las siguientes opciones describe correctamente uno de los objetos de la Ley N° 1178 en relación con la captación y uso de los recursos públicos?",
        "a": "Programar, organizar, ejecutar y controlar la captación y el uso eficaz y eficiente de los recursos públicos para el cumplimiento y ajuste oportuno de las políticas, los programas, la prestación de servicios y los proyectos del Sector Público."
    },
    {
        "id": 778,
        "q": "La corteza prefrontal dorsolateral es la principal sede de las funciones ejecutivas en el cerebro humano. ¿Qué conjunto de procesos neurológicos superiores constituyen dichas funciones?",
        "a": "Planificación, inhibición de respuestas, memoria de trabajo y flexibilidad cognitiva."
    },
    {
        "id": 779,
        "q": "¿Cuáles son las seis dimensiones de competencia docente que el marco de la UNESCO articula transversalmente en cada uno de sus tres enfoques progresivos para el desarrollo de habilidades TIC?",
        "a": "Política educativa, currículo y evaluación, pedagogía, TIC, organización y administración, y formación profesional docente."
    },
    {
        "id": 780,
        "q": "En el modelo bidimensional de la enseñanza efectiva de Joseph Lowman, que sintetiza la investigación sobre la dinámica del aula, el aprendizaje de los estudiantes y la enseñanza para desarrollar un modelo de buena enseñanza, puede distinguirse una primera dimensión y una segunda dimensión, caracterizadas como:",
        "a": "Entusiasmo intelectual y relación interpersonal."
    },
    {
        "id": 781,
        "q": "¿Cuáles son los criterios que determina el Ministerio de Educación para la asignación de ítems para cargos directivos, docentes y administrativos de los Institutos de carácter fiscal y de convenio?",
        "a": "Ampliación de nuevas carreras, plan de estudios autorizados, número de estudiantes en el instituto y techo presupuestario asignado"
    },
    {
        "id": 782,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué ocurre si las estrategias de aprendizaje se aplican sin conocimientos metacognitivos?",
        "a": "Se confundirán con simples técnicas para aprender perdiendo su carácter intencionado, consciente y controlado."
    },
    {
        "id": 783,
        "q": "¿Qué consideraciones son importantes para el armado de una evaluación, según el neuroaprendizaje?",
        "a": "Coherente, clima distendido y tomar en cuenta inteligencias múltiples."
    },
    {
        "id": 784,
        "q": "El texto “Convivencia escolar y resolución pacífica de conflictos” menciona que se consideran como básicos tres ámbitos de actuación, ¿cuáles son?",
        "a": "Individual, familiar y escolar."
    },
    {
        "id": 785,
        "q": "¿Cuál fue la razón del uso de viñetas secuenciadas cronológicamente en la enseñanza de la historia?",
        "a": "Permitir la enseñanza oral de la historia mediante representaciones visuales de personajes y acontecimientos señalados."
    },
    {
        "id": 786,
        "q": "Un maestro incorpora pausas breves de movimiento, respiración y actividades lúdicas durante sus clases cuando percibe que sus estudiantes han caído en el período de baja activación. ¿Cuál es la utilidad de estos «recreos cerebrales» o «neuro-acción» desde la perspectiva del aprendizaje?",
        "a": "Permiten reactivar el estado de alerta, oxigenar el cerebro, liberar neurotransmisores asociados al bienestar y la motivación, y renovar la capacidad de atención y procesamiento para continuar aprendiendo con mayor eficacia."
    },
    {
        "id": 787,
        "q": "En relación a las técnicas vinculadas a los estilos de aprendizaje, ¿cuál de las siguientes características corresponde a los foros de discusión?",
        "a": "Permiten la interacción entre participantes para debatir ideas y construir conocimiento de manera colaborativa."
    },
    {
        "id": 788,
        "q": "Según el “Manual de resolución de problemas”, la resolución de problemas es una habilidad esencial para superar obstáculos en la vida diaria. Entre los beneficios de desarrollar esta habilidad se incluyen: El desarrollo de autonomía. ¿En qué consiste este beneficio?",
        "a": "Te hace más independiente y capaz de tomar decisiones informadas."
    },
    {
        "id": 789,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿qué permite y favorece el clima de pertenencia en la comunidad educativa?",
        "a": "Permite la cohesión de los grupos y favorece los lazos estables de los miembros de la comunidad educativa, especialmente del alumnado, con el centro educativo."
    },
    {
        "id": 790,
        "q": "En los estilos de aprendizaje se puede partir de una experiencia concreta o una conceptualización abstracta; estas experiencias se transforman en conocimientos cuando los analizamos y aplicamos a la realidad. ¿Cuáles son las fases de este proceso?",
        "a": "Teorizar, experimentar, actuar y reflexionar."
    },
    {
        "id": 791,
        "q": "¿Cuáles son tres funciones ejecutivas que desarrolla la neocorteza según la neurociencia?",
        "a": "Planificar, prever y cambiar los planes."
    },
    {
        "id": 792,
        "q": "Un violinista, además de haber desarrollado inteligencia musical, también desarrolla la inteligencia:",
        "a": "Corporal-kinestésica"
    },
    {
        "id": 793,
        "q": "La inteligencia Lógico-Matemática trata del razonamiento inductivo y deductivo, los números y el reconocimiento de patrones abstractos. Se activa en situaciones que requieren resolución de problemas o satisfacer un nuevo reto, así como situaciones que requieren reconocimiento de patrones. ¿Cómo se la denomina alternativamente?",
        "a": "Pensamiento científico"
    },
    {
        "id": 794,
        "q": "El texto “Convivencia escolar y resolución pacífica de conflictos” menciona que el clima escolar, para algunos autores, también es llamado:",
        "a": "Institucional, organizativo o social."
    },
    {
        "id": 795,
        "q": "Según el texto de Innovación Educativa, una escuela rural cuyas maestras transforman sus prácticas pedagógicas para atender el conflicto entre comunidades campesinas y urbanas, sin apoyo del Estado, ¿qué dimensión de la innovación educativa explica esta decisión y en qué se diferencia de una reforma sistémica?",
        "a": "Pedagógica, porque transforma el acto de enseñanza desde el contexto sociocultural, distinguiéndose de la reorganización estructural en que actúa sobre el vínculo educativo sin requerir mandatos normativos externos."
    },
    {
        "id": 796,
        "q": "¿En qué áreas temáticas principales deben desarrollar habilidades los educadores de docentes, y dentro de qué contexto debe realizarse dicho desarrollo?",
        "a": "Pedagogía, trabajo en red, dimensión social y dominio técnico, desarrolladas en un entorno cultural de formación continua, liderazgo educativo y gestión del cambio institucional."
    },
    {
        "id": 797,
        "q": "En el aula, ¿qué estados genera el color gris en los estudiantes?",
        "a": "Paz, tenacidad."
    },
    {
        "id": 798,
        "q": "¿Qué son los modelos mentales en el contexto del cambio educativo?",
        "a": "Estructuras de pensamiento que condicionan formas de pensar y actuar en las personas, operando sobre ellas sin que se percaten, y que reflejan maneras de mirar, explicar y valorar el mundo y a los demás."
    },
    {
        "id": 799,
        "q": "En el ámbito de la innovación educativa, ¿qué distinción conceptual establece el paso del lenguaje de los actores al lenguaje de los autores?",
        "a": "Pasar de ejecutar un papel previamente definido a crear, definir el propio papel y ser causa de un cambio o acción."
    },
    {
        "id": 800,
        "q": "Según Morales Vera, ¿cuál de los siguientes representa un nuevo reto pedagógico que enfrentan los docentes técnicos en el marco de las nuevas tecnologías?",
        "a": "Pasar de planificar clases expositivas con apoyo visual digital a diseñar entornos de aprendizaje técnico donde las TIC medien activamente la construcción del conocimiento."
    },
    {
        "id": 801,
        "q": "Según la neurociencia, ¿en qué dimensión temporal opera el sistema límbico o emocional?",
        "a": "Pasado y presente."
    },
    {
        "id": 802,
        "q": "¿Cuál es la condición fundamental que deben cumplir las actividades didácticas para promover el desarrollo de un concepto matemático?",
        "a": "Partir de situaciones de referencia que provoquen la necesidad de usar un signo, cuya interacción constante con dicha situación promueve el desarrollo del concepto."
    },
    {
        "id": 803,
        "q": "Dentro del proceso de innovación educativa, modificar los modelos mentales implica atravesar una secuencia de pasos que comienza con una acción interna específica, ¿cuál de las siguientes opciones describe con mayor precisión ese primer paso indispensable para transformar los modelos mentales?",
        "a": "Tomar conciencia de las propias convicciones, examinarlas con atención y reconocer de qué manera condicionan la conducta y qué efectos generan sobre las decisiones cotidianas."
    },
    {
        "id": 804,
        "q": "Un Director Departamental de Educación identifica que en tres municipios de su departamento existe un incremento significativo de casos de violencia sexual en unidades educativas. Considerando el conjunto de sus responsabilidades, ¿qué combinación de acciones articuladas debe activar de manera prioritaria y simultánea para dar una respuesta integral a esta situación?",
        "a": "Sistematizar la información de los casos identificados para hacer gestión con autoridades municipales y departamentales, fortalecer la coordinación con Defensorías de la Niñez y Adolescencia, Servicios de Gestión Social y CEPAT, y promover acuerdos con instituciones especializadas para que las intervenciones en las unidades educativas tengan impacto."
    },
    {
        "id": 805,
        "q": "El modelo de desarrollo profesional autónomo se desarrolla en base a seminarios permanentes de formación docente, operando a partir del análisis de tareas, la reflexión del equipo, el intercambio de experiencias e investigaciones en la propia práctica. ¿Cuál es su supuesto de aprendizaje?",
        "a": "Parte del supuesto del aprendizaje adulto, que asume la capacidad de diseñar y desarrollar su propia formación."
    },
    {
        "id": 806,
        "q": "Según Imbernón, en el modelo de Desarrollo y Mejora, el aprendizaje de los docentes:",
        "a": "Se guía por dar respuesta a determinados problemas y situaciones contextualizadas."
    },
    {
        "id": 807,
        "q": "Desde la perspectiva del neuroaprendizaje, ¿cómo conciben erróneamente los estudiantes la evaluación?",
        "a": "Parámetro que determina el éxito o el fracaso."
    },
    {
        "id": 808,
        "q": "¿Para qué sirve el dictamen de responsabilidad civil cuando la Contraloría General identifica diferencias en un informe de auditoría?",
        "a": "Para que la Contraloría General de la República exprese divergencia en cuanto al monto del presunto daño económico, los presuntos responsables o cualquier otro aspecto contenido en un informe de auditoría interna o externa."
    },
    {
        "id": 809,
        "q": "¿Por qué se requiere que la innovación-aprendizaje sea organizada y planificada?",
        "a": "Para que logre los indicadores de desempeño sistémico definidos por el modelo educativo."
    },
    {
        "id": 810,
        "q": "Considerando el objetivo del proceso de apoyo educativo a estudiantes con discapacidad visual, ¿para qué se busca “Garantizar el acceso, permanencia y conclusión de procesos educativos de estudiantes con Discapacidad Visual matriculados o inscritos en los diferentes niveles y modalidades de las Unidades, Centros e Instituciones Educativas de los Subsistemas de Educación Regular, Educación Superior y el Ámbito de Educación Alternativa, fiscales, de convenio o privadas, a través de la implementación de estrategias tiflotécnicas”?",
        "a": "El logro de la independencia y autonomía personal y social."
    },
    {
        "id": 811,
        "q": "¿Con qué finalidad las Direcciones Departamentales de Educación realizan visitas continuas de seguimiento, supervisión y evaluación a los Institutos de carácter fiscal, de convenio y privado?",
        "a": "Para verificar el funcionamiento legal, desarrollo de actividades institucionales, académicas, administrativas y aplicación de la normativa vigente."
    },
    {
        "id": 812,
        "q": "Los años de servicios prestados a países extranjeros, ¿para qué fines no se computan?",
        "a": "Para fines de jubilación y calificación de servicios"
    },
    {
        "id": 813,
        "q": "¿Con qué objetivo se incorpora la referencia a la Biblia Pauperum en el argumento del texto?",
        "a": "Para ilustrar que la indoctrinación recurrió a soportes icónicos antes de consolidar el uso masivo del texto escrito."
    },
    {
        "id": 814,
        "q": "Un criterio fundamental en la selección de un método de enseñanza debe ser la «aptitud para el objetivo de aprendizaje». Un solo método no puede satisfacer todas las metas ni puede acomodar todos los estilos de aprendizaje a la vez. En algunos casos, los estudiantes pueden preferir conferencias, demostraciones o enseñanza en equipo; en otros, excursiones y toma de notas. ¿Para qué naturaleza de participación de los estudiantes describe estas preferencias?",
        "a": "Para estudiantes que escuchan, observan, miran y se mueven."
    },
    {
        "id": 815,
        "q": "De acuerdo al texto “Convivencia escolar y resolución pacífica de conflictos”, ¿por qué es importante el grado de calidad del clima de pertenencia?",
        "a": "Para la prevención de la violencia ya que en ocasiones ésta es debida a las contradicciones de la propia institución escolar, su singular micropolítica y el desmedido ejercicio de la autoridad."
    },
    {
        "id": 816,
        "q": "¿Para qué efectos son válidos en el cómputo de antigüedad los servicios prestados por maestros normalistas en cargos administrativos del ramo de educación?",
        "a": "Para efectos de la categorización y jubilación."
    },
    {
        "id": 817,
        "q": "De acuerdo al “Manual de resolución de problemas”, ¿para qué es útil el enfoque de “pros y contras de soluciones”?",
        "a": "Para evitar soluciones impulsivas que podrían tener efectos negativos a largo plazo."
    },
    {
        "id": 818,
        "q": "De acuerdo con el “Manual de resolución de problemas”, ¿por qué es importante desarrollar la resolución de problemas?",
        "a": "Para desarrollar otras habilidades como la creatividad y la toma de decisiones."
    },
    {
        "id": 819,
        "q": "Desde la neurociencia, ¿para qué le sirvieron a la humanidad la plasticidad y la supervivencia como características fundamentales del cerebro a lo largo de su evolución y desarrollo?",
        "a": "Para adaptarse al nuevo contexto enfrentando situaciones de amenaza y placer a lo largo de su evolución y desarrollo."
    },
    {
        "id": 820,
        "q": "Proponer actividades con metas alcanzables y reconocer los logros obtenidos por el estudiante favorece la liberación de:",
        "a": "Dopamina."
    },
    {
        "id": 821,
        "q": "Un maestro incorpora movimiento físico, celebración de logros y actividades novedosas en su clase. ¿Qué sustancias cerebrales está activando principalmente con esta estrategia?",
        "a": "Dopamina, endorfinas y noradrenalina."
    },
    {
        "id": 822,
        "q": "¿Qué caracteriza a los Cursos de Capacitación dentro de los niveles de Formación Superior?",
        "a": "No otorgan grado académico alguno, desarrollan competencias técnicas especializadas en un ámbito específico de acuerdo a la demanda de los sectores socioeconómicos productivos de la región, concordante con las áreas de formación ofertadas por el Instituto"
    },
    {
        "id": 823,
        "q": "Los gobiernos autónomos departamentales y municipales tienen atribuciones para dictar normas que garanticen accesibilidad para personas con discapacidad en diversos ámbitos. ¿Cuál de las siguientes opciones refleja correctamente uno o más de esos ámbitos?",
        "a": "Reducción de tarifas en distintas modalidades de transporte para personas con discapacidad y quienes las acompañen, preferencia en espacios de estacionamiento público y sistemas de señalización sonora en entornos de uso colectivo."
    },
    {
        "id": 824,
        "q": "¿Cuál de las siguientes opciones es una función del Jefe(a) o Responsable de Carrera del Instituto?",
        "a": "Brindar asistencia técnico-pedagógica a docentes y estudiantes en diferentes aspectos de la gestión académica."
    },
    {
        "id": 825,
        "q": "Desde la perspectiva del aprendizaje basado en proyectos, ¿qué propósito pedagógico integrador se persigue al involucrar al estudiante en la identificación y resolución de una problemática?",
        "a": "Desarrollar la capacidad creativa, la reflexión sobre las estrategias a implementar y el trabajo cooperativo para atender una problemática"
    },
    {
        "id": 826,
        "q": "¿Cuál es la relación entre las competencias genéricas y la selección de estrategias didácticas?",
        "a": "Orientan al docente en la elección de procedimientos pedagógicos que impulsen habilidades transferibles al desempeño laboral, como el razonamiento crítico, la colaboración y la resolución de situaciones problemáticas reales."
    },
    {
        "id": 827,
        "q": "¿Cómo se concibe la escuela como microsociedad?",
        "a": "Con cultura propia y clima particular."
    },
    {
        "id": 828,
        "q": "Considerando que la Educación Inclusiva es parte indisoluble del Modelo Educativo Sociocomunitario Productivo, que se constituye como política educativa del Estado Plurinacional de Bolivia, ¿qué brinda?",
        "a": "Respuestas educativas oportunas a las necesidades, expectativas, intereses, ritmos, estilos y potencialidades de aprendizaje de los estudiantes de la diversidad de grupos poblacionales del país"
    },
    {
        "id": 829,
        "q": "¿Qué función específica cumplió el concepto de clase dentro del entramado de dispositivos que estructuraron la escolaridad moderna?",
        "a": "Reguló la variedad del alumnado agrupándolo y diferenciándolo en categorías que lo definían y clasificaban."
    },
    {
        "id": 830,
        "q": "¿Qué acción deberá tomar toda entidad pública respecto a los sistemas de administración y control interno?",
        "a": "Organizarlos internamente en función de sus objetivos y la naturaleza de sus actividades."
    },
    {
        "id": 831,
        "q": "Una maestra de una unidad educativa del área rural en el departamento del Beni, antes de introducir el concepto de fracción, pide a sus estudiantes que recuerden cómo dividen una naranja en partes iguales para compartirla entre compañeros. A partir de esa experiencia cotidiana, ella construye el puente hacia el nuevo contenido matemático. ¿Qué principio de la enseñanza fundamenta esta práctica pedagógica?",
        "a": "Afianzar en los alumnos lo que ya saben para que estén listos para aprender el nuevo conocimiento, facilitando las experiencias del alumno que al recordarlas se asegura la bienvenida del nuevo conocimiento."
    },
    {
        "id": 832,
        "q": "Dado que el objetivo de la enseñanza es el aprendizaje deseable, la calidad de la enseñanza puede ser probada solo en términos de la calidad del aprendizaje al que conduce. ¿Cuál de estas descripciones refiere a algunos de los elementos de la enseñanza?",
        "a": "Reconocer las diferencias individuales de los alumnos; centrarse en la necesidad; mejorar la calidad de vida de cada estudiante; contenido interesante, y planear y sistematizar."
    },
    {
        "id": 833,
        "q": "Según Blase J. en el texto de Innovación Educativa, ¿cómo se consideran las escuelas y los sistemas escolares?",
        "a": "Organizaciones políticas"
    },
    {
        "id": 834,
        "q": "De acuerdo con la propuesta metodológica para la realización de proyectos en el ámbito educativo, ¿cuál de las siguientes opciones presenta correctamente las cuatro fases que deben considerarse en su desarrollo?",
        "a": "Organización, contextualización, diseño y ejecución."
    },
    {
        "id": 835,
        "q": "¿Cuál es el rol de la integración dentro de las condiciones que aseguran un buen aprendizaje?",
        "a": "Perfecciona el proceso que puede tener lugar en mente y llevado a una solución exitosa en menos tiempo."
    },
    {
        "id": 836,
        "q": "¿Cómo define Rozenblum el conflicto?",
        "a": "Parte natural de nuestra vida; no es ni bueno ni malo, simplemente existe."
    },
    {
        "id": 837,
        "q": "Considerando las herramientas para detectar la violencia y/o abuso contra niñas, niños y adolescentes descritas en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, cuando la o el estudiante relata espontáneamente acciones de violencia, por ningún motivo se puede emitir:",
        "a": "Opiniones, ni manifestar rechazo, desaprobación o acusaciones en torno a lo revelado."
    },
    {
        "id": 838,
        "q": "¿Cuál es la función central que cumplen las tecnologías de la información y comunicación dentro de un entorno de aprendizaje constructivista?",
        "a": "Servir como herramientas para promover el diálogo, la discusión, la escritura en colaboración y la resolución de problemas, brindando sistemas de apoyo online para apuntalar el progreso en la comprensión y el crecimiento cognitivo de los alumnos."
    },
    {
        "id": 839,
        "q": "Según el texto de Innovación Educativa, ¿qué característica distingue a los modelos mentales como obstáculos para el cambio educativo, frente a otras barreras visibles en una institución?",
        "a": "Operan desde etapas tempranas y se imponen como verdades únicas sin que el individuo las perciba."
    },
    {
        "id": 840,
        "q": "La investigación-acción, autoevaluación, sistematización y reflexión sobre las prácticas pedagógicas cumplen un doble rol en la innovación educativa, ¿en qué consiste ese doble rol?",
        "a": "Emergen como estrategias esenciales que alimentan y sostienen los procesos de cambio educativo, constituyéndose simultáneamente en vías de desarrollo y actualización profesional docente."
    },
    {
        "id": 841,
        "q": "Según el neuroaprendizaje, ¿de qué manera pueden diferenciarse los períodos atencionales de los estudiantes?",
        "a": "UPTIME y DOWNTIME."
    },
    {
        "id": 842,
        "q": "Usted es maestro en una unidad educativa de Santa Cruz de la Sierra y aplica el método de caso sobre el uso del agua en el río Piraí. Al revisar su planificación, un colega le señala tres errores: primero, no determinó el conocimiento básico ni el concepto central antes de diseñar el caso; segundo, planificó evaluar únicamente con un examen final de definiciones; tercero, no incluyó material de apoyo como referencias ni mapas conceptuales. ¿Cuál de estas tres observaciones contradice de manera más directa y simultánea dos principios esenciales del método de caso según el texto?",
        "a": "No determinar el conocimiento básico ni identificar la situación real relacionada con dicho conocimiento, incumpliendo dos pasos fundamentales del diseño."
    },
    {
        "id": 843,
        "q": "Según Perrenoud, ¿qué tipo de transgresión al programa es la más vigilada institucionalmente?",
        "a": "Omitir componentes esenciales del currículum formal o introducir contenidos ajenos al programa prescrito."
    },
    {
        "id": 844,
        "q": "Considerando la tabla de valoración del riesgo descrita en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, bajo la categoría “omisión”, ¿cuál de las siguientes opciones corresponde al nivel de riesgo BAJO?",
        "a": "Hay omisiones y descuido en los cuidados; sin embargo, no afectan significativamente y de forma negativa en el crecimiento, desarrollo, educación, salud y relaciones sociales de la niña, del niño o adolescente."
    },
    {
        "id": 845,
        "q": "Según Gimeno Sacristán, en el capítulo «Grandeza y miseria del libro de texto», ¿cuál es la mayor bondad del libro de texto como recurso pedagógico?",
        "a": "Poner al alcance de todos un saber organizado y accesible, democratizando el acceso al conocimiento cultural."
    },
    {
        "id": 846,
        "q": "Al abordar el potencial igualador del enfoque por competencias, Feito incorpora el estudio etnográfico de Willis en Coventry para argumentar que dicho enfoque:",
        "a": "Puede contribuir a reducir la brecha entre el conocimiento escolar abstracto y las demandas concretas del entorno social del alumnado."
    },
    {
        "id": 847,
        "q": "¿Cuál es el plazo máximo que tiene el Ministerio Público para reunir las pruebas necesarias en casos de violencia contra las mujeres?",
        "a": "Ocho (8) días bajo responsabilidad."
    },
    {
        "id": 848,
        "q": "El que utilice fuerza física, amenazas, intimidación, promesas, ofrecimiento o la concesión de un beneficio indebido para inducir a una persona a prestar falso testimonio u obstaculizar la prestación de testimonio o la aportación de pruebas en procesos por delitos de corrupción. ¿A qué delito corresponde esta descripción?",
        "a": "Obstrucción de la justicia."
    },
    {
        "id": 849,
        "q": "El concepto de inseguridad lingüística, desarrollado por Bentolila, describe una situación en la que la incapacidad de expresar y recibir el pensamiento con precisión:",
        "a": "Encierra a los jóvenes en círculos restringidos de comunicación con consecuencias que alcanzan la exclusión social y la violencia."
    },
    {
        "id": 850,
        "q": "Desde el neuroaprendizaje, ¿cuál es el aspecto más relevante de la atención que todo docente debe considerar en su práctica pedagógica?",
        "a": "Entrenarla y trabajarla."
    },
    {
        "id": 851,
        "q": "De acuerdo con la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, para definir el riesgo en los casos de maltrato hacia las y los estudiantes, ¿cuál de las opciones debe tomar en cuenta la maestra o el maestro?",
        "a": "Intervenciones o denuncias previas por maltrato a la víctima o a otros NNA, sin resultados favorables."
    },
    {
        "id": 852,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿cuáles son las dos dimensiones que configuran el modelo bidimensional de Kolb?",
        "a": "Percepción, cómo se prefiere percibir el entorno; y procesamiento, cómo se prefiere transformar la información entrante."
    },
    {
        "id": 853,
        "q": "¿Cuáles son las dos dimensiones que configuran el modelo bidimensional de aprendizaje de Kolb?",
        "a": "Percepción del entorno y procesamiento de la información entrante, configurando pensamiento concreto versus abstracto y activo contra reflexivo."
    },
    {
        "id": 854,
        "q": "Según la Resolución Ministerial No 0069/2025, “impulsar la provisión de equipamiento y recursos técnicos en cumplimiento de las competencias concurrentes de los Gobiernos Subnacionales” es una:",
        "a": "Finalidad para consolidar la Educación Inclusiva"
    },
    {
        "id": 855,
        "q": "El educar en y para el conflicto propone en el manual de Convivencia escolar y resolución pacífica de conflictos distinguir tres formas de introducir los conflictos en los procesos educativos. ¿Cuál de las siguientes es una de ellas?",
        "a": "Estrategia para mejorar el clima relacional y organizativo del centro."
    },
    {
        "id": 856,
        "q": "El Directorio del Comité Nacional de las Personas con Discapacidad está conformado por representantes de la sociedad civil organizada y del Órgano Ejecutivo. ¿Cuántos representantes aporta cada parte, mediante qué instrumento normativo son designados los representantes estatales y qué condición económica se establece para ellos?",
        "a": "Nueve representantes de la Confederación Boliviana de Personas con Discapacidad y nueve del Órgano Ejecutivo designados mediante Resolución Ministerial, sin percepción de dietas ni remuneraciones."
    },
    {
        "id": 857,
        "q": "¿Qué establecerá la reglamentación respecto a los bienes de las entidades?",
        "a": "Mecanismos para la baja o venta oportuna de los bienes tomando en cuenta las necesidades específicas de las entidades propietarias."
    },
    {
        "id": 858,
        "q": "La “Inclusión Laboral”, en el marco de los derechos de las personas con discapacidad, se define como el derecho al empleo integrado en empresas... ¿Cuál es la opción que completa correctamente esta definición?",
        "a": "Normalizadas y adaptadas, en las mismas condiciones y equiparación de oportunidades, de remuneraciones, horarios y beneficios sociales, en instituciones públicas o privadas donde la proporción mayoritaria de empleados no tenga discapacidad alguna"
    },
    {
        "id": 859,
        "q": "¿Cómo se llama el neurotransmisor excitador que se deriva de la norepinefrina, controla el enfoque mental y la atención, y regula el estado de ánimo y la excitación física y mental?",
        "a": "Noradrenalina."
    },
    {
        "id": 860,
        "q": "El neurotransmisor que controla los movimientos voluntarios del cuerpo, está asociado con el mecanismo de reacción del cerebro y regula las emociones satisfactorias, ¿cómo se llama?",
        "a": "Dopamina."
    },
    {
        "id": 861,
        "q": "¿Cuál es el neurotransmisor conocido como el amigo del aprendizaje, debido a que genera satisfacción y motiva a los estudiantes a trabajar con las propuestas del maestro?",
        "a": "Dopamina"
    },
    {
        "id": 862,
        "q": "Además de la dopamina y la serotonina, ¿cuál es el otro neurotransmisor importante para el aprendizaje?",
        "a": "Noradrenalina"
    },
    {
        "id": 863,
        "q": "Según el marco «Las TIC en la Formación Docente» de la UNESCO, ¿cuál de los siguientes tres enfoques progresivos articula el desarrollo de competencias TIC en los docentes, orientado a transformar la práctica pedagógica desde la adquisición básica hasta la innovación educativa?",
        "a": "Nociones básicas de TIC, profundización del conocimiento y generación del conocimiento."
    },
    {
        "id": 864,
        "q": "Según Gimeno Sacristán, ¿cuál es la condición fundamental que deben respetar los modelos institucionales de escuela, independientemente de la libertad para crearlos?",
        "a": "No vulnerar el acceso equitativo a una formación de igual calidad para todos los estudiantes."
    },
    {
        "id": 865,
        "q": "En el modelo ecológico de prevención de violencia, se menciona que si bien la violencia como fenómeno complejo comprende diferentes definiciones, hay que tener en cuenta que:",
        "a": "No tiene una sino múltiples causas, por lo que exige soluciones variadas y contextualizadas que atiendan los numerosos factores asociados a la misma."
    },
    {
        "id": 866,
        "q": "Una escuela adopta sucesivamente los paradigmas científicos más recientes en distintas áreas y termina reportando altos índices de fracaso. Según el criterio epistemológico, ¿cuál es la causa principal?",
        "a": "Se incorporaron paradigmas científicos sin considerar su complejidad para cada nivel de escolarización."
    },
    {
        "id": 867,
        "q": "Cuando un maestro nota que sus estudiantes se desconectan progresivamente durante sus clases, ¿qué explica este fenómeno según el texto de Sáez López?",
        "a": "No se espera interacción ni discusión con los estudiantes, lo que conduce a la monotonía."
    },
    {
        "id": 868,
        "q": "En relación al resarcimiento del daño económico, ¿qué efecto tiene el pago realizado por el servidor o ex servidor público antes o después de la ejecutoria del pliego de cargo o sentencia?",
        "a": "No libera ni excluye al servidor o ex servidor público de la responsabilidad administrativa, ejecutiva o penal, si la hubiere, independientemente del momento en que se efectúe el resarcimiento del daño económico."
    },
    {
        "id": 869,
        "q": "Las normativas curriculares, los horarios y los libros de texto son descritos en el texto de Innovación Educativa como posibles obstáculos para innovar, ¿qué distingue a una institución que innova de una que no lo hace frente a esas mismas prescripciones?",
        "a": "No las concibe como límites definitivos, sino como marcos susceptibles de ser reinterpretados y recreados desde la práctica pedagógica cotidiana."
    },
    {
        "id": 870,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, en los programas de mediación entre iguales, los alumnos implicados deben aceptar seis condiciones. La tercera condición es:",
        "a": "No interrumpir."
    },
    {
        "id": 871,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», un colega diseñó el objetivo: «los estudiantes entenderán qué es la buena literatura». ¿Qué error técnico comete?",
        "a": "El objetivo es demasiado abstracto; los buenos objetivos deben describir el rendimiento del estudiante con verbos medibles."
    },
    {
        "id": 872,
        "q": "¿Qué restricción establece la normativa vigente respecto al conflicto de intereses para Directivos, Administrativos, Docentes, Propietarios y Representantes Legales de los Institutos?",
        "a": "Quedan terminantemente prohibidos cursar estudios en cualquiera de las carreras o cursos de capacitación en los Institutos en los cuales ejercen funciones o tengan relación de propiedad."
    },
    {
        "id": 873,
        "q": "Según la “Guía para la Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo”, de acuerdo con la tabla de orientaciones cuando se conoce un caso de violencia, en el tercer momento denominado “Durante la referencia si corresponde”, se establece lo que NO se puede hacer, ¿cuál de los siguientes enunciados corresponde a este momento?",
        "a": "No crear ideas que no se pueden realizar."
    },
    {
        "id": 874,
        "q": "¿Cuál de las siguientes acciones constituye una causal de responsabilidad del abogado en relación a los recursos legales presentados?",
        "a": "Presentar recursos en forma extemporánea o con defectos formales insubsanables"
    },
    {
        "id": 875,
        "q": "¿Cuál de las siguientes constituye una causal de responsabilidad del auditor o consultor especializado para auditoría?",
        "a": "No excusarse de la realización de un trabajo en caso de incompatibilidad o conflicto de intereses manifiesto"
    },
    {
        "id": 876,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿cuál es la última de las nueve claves que apunta Mitchell para la resolución de conflictos intratables?",
        "a": "No pensar en la resolución de conflictos como un estadio final sino como un proceso que continúa."
    },
    {
        "id": 877,
        "q": "El maestro de apoyo con ítem completo y horas desglosadas, de acuerdo al área de dificultades en el aprendizaje, desarrollará su trabajo bajo la siguiente relación docente — estudiante:",
        "a": "Más de 20 estudiantes, 4 horas mensuales promedio"
    },
    {
        "id": 878,
        "q": "La tabla de “Orientaciones cuando se conoce un caso de violencia” está descrita en momentos. Considerando el cuarto momento, denominado “Durante la contrarreferencia o seguimiento”, ¿cuál de las siguientes opciones identifica lo que NO se puede hacer?",
        "a": "No realizar un plan de acción por sí mismo."
    },
    {
        "id": 879,
        "q": "¿Por qué es fundamental nivelar los estados emocionales en el aula y qué efecto produce en la adquisición de conocimientos?",
        "a": "Cuanto más abiertas están las amígdalas más situaciones satisfactorias se generan."
    },
    {
        "id": 880,
        "q": "Un maestro, como ejemplo de estrategia socioemocional, pide cada viernes a sus estudiantes que escriban en una hoja su nombre, teléfono y las situaciones emocionales que están viviendo. Luego convierten la hoja en un avión de papel, lo lanzan al centro del aula, cada compañero recoge uno al azar y durante el fin de semana llama a su dueño para conversar. ¿Cuál es el propósito pedagógico de esta estrategia desde la neurociencia educativa?",
        "a": "Nivelar los estados emocionales del grupo desarrollando empatía"
    },
    {
        "id": 881,
        "q": "En un proceso de investigación técnica apoyado en TIC, un docente propone que sus estudiantes utilicen software de análisis estadístico para procesar los datos que antes calculaban manualmente, obteniendo los mismos resultados con mayor rapidez. ¿En qué nivel de integración tecnológica se ubica este esquema investigativo?",
        "a": "Nivel de ampliación, porque la tecnología mejora funcionalmente el proceso de análisis de datos incrementando la eficiencia y precisión, sin modificar la naturaleza ni los objetivos del proceso investigativo."
    },
    {
        "id": 882,
        "q": "La visión sistémica del cambio educativo propuesta por la UNESCO para la integración de las TIC en la formación docente requiere la articulación de niveles específicos del sistema educativo. Señala cuál de las siguientes opciones identifica correctamente esos niveles y la lógica que los articula.",
        "a": "Nivel áulico, nivel institucional y nivel de política nacional; niveles que se articulan de forma interdependiente para garantizar que la integración de las TIC trascienda el aula y transforme el sistema educativo en su conjunto."
    },
    {
        "id": 883,
        "q": "De acuerdo con la Ley N° 348, ¿cuál es la finalidad de las medidas de protección establecidas en dicha norma a favor de las mujeres en situación de violencia?",
        "a": "Interrumpir e impedir un hecho de violencia contra las mujeres, o garantizar, en caso de que este se haya consumado, que no se repita, asegurando a la mujer el ejercicio pleno de sus derechos"
    },
    {
        "id": 884,
        "q": "Desde la neurociencia, ciertos neurotransmisores cumplen funciones esenciales en el bienestar y el comportamiento humano. ¿Qué es la serotonina y cuál es su efecto reconocido en el ser humano?",
        "a": "Neurotransmisor inhibidor con efecto sobre emociones y ansiedad"
    },
    {
        "id": 885,
        "q": "Según la neurociencia, ¿cómo se denomina la capacidad del cerebro para adaptarse, reorganizarse y modificarse a lo largo de toda la vida?",
        "a": "Neuroplasticidad"
    },
    {
        "id": 886,
        "q": "Desde la neurociencia educativa, el modelo del «Cerebro triuno» organiza las estructuras cerebrales en tres niveles jerárquicos. ¿Cuál es la denominación que recibe la estructura del primer nivel?",
        "a": "Reptiliano instintivo"
    },
    {
        "id": 887,
        "q": "Según el modelo del «Cerebro triuno», ¿qué estructura cerebral es compartida anatómica y funcionalmente con los demás mamíferos y se encarga del procesamiento emocional que condiciona el acceso al aprendizaje consciente?",
        "a": "Sistema límbico"
    },
    {
        "id": 888,
        "q": "Cuando la amígdala detecta una amenaza y activa la respuesta de fuga, ¿de qué formas puede manifestarse dicha reacción?",
        "a": "Huida, omisión o inhibición de acción."
    },
    {
        "id": 889,
        "q": "La visión humanista de la motivación considera que las necesidades humanas se organizan en orden jerárquico. ¿Cuáles son estas necesidades enumeradas desde las más básicas hasta las más complejas?",
        "a": "Necesidades fisiológicas; seguridad / refugio / necesidades de salud; necesidades de pertenencia / amor / amistad; autoestima / reconocimiento / necesidades de logro y autorrealización."
    },
    {
        "id": 890,
        "q": "Gimeno Sacristán et al. critican que, ante el desinterés del alumnado por su actividad académica, los centros de secundaria adoptan una postura que consiste en:",
        "a": "Naturalizar el fracaso sin cuestionar la práctica docente ni proponer cambios."
    },
    {
        "id": 891,
        "q": "Un director de unidad educativa llama a uno de sus maestros frente a todos los estudiantes del curso y, en voz alta, lo reprende severamente por los bajos resultados académicos de su aula, menoscabando públicamente su autoridad y dignidad ante los alumnos. Esta conducta se tipifica como falta:",
        "a": "Grave, porque se constituye en el apercibimiento o la observación grave a un inferior en presencia de los maestros o alumnos ya que se menoscaba la autoridad y/o la dignidad del maestro."
    },
    {
        "id": 892,
        "q": "Un director de una unidad educativa urbana descubre que un docente ha organizado una fiesta dentro del establecimiento donde se consumieron bebidas alcohólicas. Semanas después, ese mismo docente es sorprendido organizando otra actividad similar, esta se constituye una falta:",
        "a": "Muy grave, porque al tratarse de una reincidencia voluntaria de una falta grave se configura una falta muy grave conforme al Artículo 11, inciso a) del Reglamento de Faltas y Sanciones."
    },
    {
        "id": 893,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que el proyecto “La escuela de los pies desnudos” fue implantado en:",
        "a": "Tilonia (Rajasthan), al norte de la India, a inicios de la década de los ochenta."
    },
    {
        "id": 894,
        "q": "Según la “Guía para la Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo” la complejidad de la violencia contra la infancia y la adolescencia requiere una atención:",
        "a": "Multidisciplinaria y multisectorial."
    },
    {
        "id": 895,
        "q": "¿Cuál es la pena establecida para el delito de sustracción de utilidades de actividades económicas familiares?",
        "a": "Privación de libertad de seis (6) meses a un (1) año más multa de hasta el cincuenta por ciento (50%) del salario hasta trescientos sesenta y cinco (365) días."
    },
    {
        "id": 896,
        "q": "¿Cuál es el propósito central de las estrategias postinstruccionales en el proceso de enseñanza?",
        "a": "Facilitar al estudiante la construcción de una visión integradora, sintética y valorativa de los aprendizajes alcanzados al concluir una secuencia didáctica."
    },
    {
        "id": 897,
        "q": "¿Cómo se denomina al conjunto de condiciones que hacen posible el aprendizaje e identifican un estado de excitabilidad óptima para iniciar un condicionamiento?",
        "a": "Motivación"
    },
    {
        "id": 898,
        "q": "Según la neurociencia del aprendizaje, ¿cuáles son los factores que favorecen la consolidación del aprendizaje en el cerebro?",
        "a": "Emoción, atención, sueño y repetición."
    },
    {
        "id": 899,
        "q": "El aprendizaje colaborativo está centrado en los alumnos y dirigido por ellos con la ayuda del maestro,  y tiene etapas bien definidas. ¿Cuáles son?",
        "a": "Fase previa, desarrollo y final."
    },
    {
        "id": 900,
        "q": "Un equipo docente de una unidad educativa de La Paz debate sobre qué contenidos son fundamentales para comprender los procesos de enseñanza aprendizaje. Algunos priorizan únicamente las teorías del aprendizaje, otros solo los métodos de enseñanza. Según Sáez López en «Estilos de aprendizaje y métodos de enseñanza», ¿qué conjunto de contenidos debe abordarse de manera integral para una comprensión completa?",
        "a": "Tipos de aprendizaje, objetivos, estrategias, dominios, estilos de aprendizaje en función de los estudiantes, y métodos como lección magistral, demostración, proyectos, aprendizaje programado, cooperativo, basado en problemas y método del caso."
    },
    {
        "id": 901,
        "q": "La decisión que se tome sobre las condiciones presentes en el proceso de enseñanza para un «aprendizaje efectivo« es de mucha importancia. El aprendizaje varía en función de su eficacia. En este contexto, ¿cuáles son las condiciones que pueden asegurar un buen aprendizaje?",
        "a": "Motivación; seguridad psicológica; experimentación; retroalimentación; práctica; pertenencia y configuración; integración."
    },
    {
        "id": 902,
        "q": "En «El sentido del currículum en la enseñanza obligatoria», la referencia a la élite nazi que se deleitaba con Wagner cumple una función argumentativa precisa. ¿Cuál es?",
        "a": "Mostrar que la formación cultural es insuficiente si no se acompaña de una dimensión ética y convivencial."
    },
    {
        "id": 903,
        "q": "¿Cuál de las siguientes características de las nuevas tecnologías educativas permite que las limitaciones de tiempo y distancia entre naciones y culturas dejen de ser un obstáculo?",
        "a": "Interconexión, porque facilita que se rompan las barreras temporales y espaciales de las naciones y las culturas."
    },
    {
        "id": 904,
        "q": "El método de caso se refiere a un análisis completo de un hecho o problema real con la finalidad de conocerlo, interpretarlo, resolverlo, generar hipótesis, contrastar datos y reflexionar en el proceso. ¿Cuáles son los tres modelos en razón de sus propósitos?",
        "a": "Modelos: centrado en el análisis de casos, centrado en la aplicación de principios y centrado en el entrenamiento."
    },
    {
        "id": 905,
        "q": "Según el texto de Innovación Educativa, ¿cómo se denominan las estructuras de pensamiento profundamente arraigadas que condicionan la manera en que las personas perciben la realidad, actúan y se relacionan, y que tienden a imponerse sobre otros como si fueran la única verdad posible?",
        "a": "Modelos mentales, entendidos como configuraciones internas que moldean la percepción, la acción y el vínculo con los demás."
    },
    {
        "id": 906,
        "q": "El Informe Mundial sobre la Violencia (OMS, 2002), propone un modelo como instrumento de examen de las raíces de la violencia y con enfoque global de la prevención, ¿cuál es ese modelo?",
        "a": "Modelo ecológico."
    },
    {
        "id": 907,
        "q": "En la concepción de que los adultos aprenden de manera más eficaz cuando tienen la necesidad de conocer algo concreto o resolver un problema, el aprendizaje de los docentes se guía por dar respuesta a determinados problemas y situaciones contextualizadas. ¿A qué modelo de formación del profesorado, según Imbernón, corresponde esta descripción?",
        "a": "Modelo de desarrollo y mejora"
    },
    {
        "id": 908,
        "q": "Imbernón concibe el modelo de formación del profesorado como el marco organizativo y de gestión de los procesos de formación en el que se incluyen diferentes sistemas de orientación, organización, intervención y evaluación. ¿Cuáles son los 5 modelos que destaca principalmente?",
        "a": "Formación orientada individualmente; observación evaluación; desarrollo y mejora; entrenamiento o institucional; investigación o indagativo."
    },
    {
        "id": 909,
        "q": "Para que el maestro logre llegar a las redes cognitivas racionales en el proceso de enseñanza- aprendizaje, ¿qué redes debe tomar en cuenta necesariamente?",
        "a": "Instintivas emocionales."
    },
    {
        "id": 910,
        "q": "¿Quiénes pueden realizar la solicitud de apertura y funcionamiento de Institutos de carácter fiscal y de convenio, de la Sede Central o Subsede?",
        "a": "Gobiernos Autónomos Departamentales, Gobiernos Autónomos Municipales, Organizaciones Sociales e Instituciones de Convenio."
    },
    {
        "id": 911,
        "q": "¿Cuál es el período mínimo y máximo de los trabajos comunitarios, como sanción alternativa, en delitos de violencia hacia las mujeres?",
        "a": "Mínimo de un año que equivale a cincuenta y dos semanas y máximo de ciento cuatro semanas."
    },
    {
        "id": 912,
        "q": "El Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP – Modalidad Indirecta indica en su capítulo de gestión organizacional que la maestra de apoyo para estudiantes con discapacidad visual con ítem completo desarrollará su trabajo con:",
        "a": "Más de 5 estudiantes."
    },
    {
        "id": 913,
        "q": "¿En qué propiedad neurológica se basa la capacidad de aprendizaje?",
        "a": "Plasticidad"
    },
    {
        "id": 914,
        "q": "La plasticidad neuronal es una de las características más destacadas del cerebro infantil. ¿De qué elementos se nutre principalmente este cerebro para desarrollarse de forma continua?",
        "a": "Experiencia propia e información genética."
    },
    {
        "id": 915,
        "q": "Dado que el cerebro de un niño tiene gran plasticidad, ¿de qué se nutre constantemente para desarrollarse?",
        "a": "Experiencia propia y la información genética."
    },
    {
        "id": 916,
        "q": "El método docente comprende las decisiones relativas a los procedimientos en los procesos pedagógicos que se relacionan con los elementos curriculares. ¿Cuáles son algunos de los métodos docentes reconocidos?",
        "a": "Lección magistral, método de proyectos, aprendizaje cooperativo y aprendizaje basado en problemas."
    },
    {
        "id": 917,
        "q": "Entre los métodos de enseñanza, ¿qué técnica recomienda formar grupos de 3 a 6 miembros, en la que cada estudiante se convierte en experto en su rol o sección, los expertos de cada sección de diferentes grupos se reúnen, comparten conocimientos, aportaciones e ideas y vuelven a su grupo original con los principales puntos para instruir a los demás miembros?",
        "a": "Aprendizaje cooperativo: técnica Jigsaw o puzle de Aronson, en la que cada estudiante domina una sección, se reúne con expertos de otros grupos y regresa a instruir a su grupo original."
    },
    {
        "id": 918,
        "q": "De los diversos métodos de enseñanza, uno se caracteriza por presentar una serie de eventos preestablecidos y organizados a un grupo de estudiantes acompañados de observaciones. Este método ayuda a promover la autoconfianza y permite concentrarse en los detalles específicos en lugar de las teorías generales. Corresponde al:",
        "a": "Método de demostración"
    },
    {
        "id": 919,
        "q": "El objetivo del estudio de caso puede resumirse como la creación de una situación activa y participativa de enseñanza y aprendizaje en la que el tema refleja muy bien el mundo exterior, pues se trata de buscar la mejora en la capacidad del estudiante para identificar principios subyacentes, pensar rápidamente bajo presión y aplicar su visión para desentrañar un complejo nudo de relaciones y eventos, aprendiendo en situaciones nuevas. Una de las formas de plantear el caso busca la participación de fuentes externas para agregar nuevas dimensiones a la actividad de aprendizaje o ejemplos de la vida real de los profesionales, por eso puede resumirse como:",
        "a": "Método de caso centrado en invitación a maestros externos"
    },
    {
        "id": 920,
        "q": "¿En qué tipo de aprendizaje las destrezas cognitivas involucradas tienen que ver con procesos como identificar, reconocer y clasificar?",
        "a": "Superficial"
    },
    {
        "id": 921,
        "q": "¿Con qué proceso cognitivo se relaciona directamente la estrategia de «Recreos cerebrales o neuro-acción»?",
        "a": "Atención."
    },
    {
        "id": 922,
        "q": "En un modelo curricular por competencias orientado a la formación profesional integral, se identifican competencias genéricas que articulan el desarrollo cognitivo, comunicativo, social y de gestión del estudiante. ¿Cuál de las siguientes opciones corresponde al conjunto de competencias genéricas que se desprenden de dicho modelo?",
        "a": "Aprender a aprender; comunicación oral y escrita; atención a la diversidad e interculturalidad; resolución de problemas; trabajo en equipo; gestión de proyectos y manejo de una segunda lengua."
    },
    {
        "id": 923,
        "q": "Las instrucciones programadas, discusión estructurada, panel de discusión, foro de discusión abierto, sesiones de preguntas-respuestas y diálogo, caracterizan a los estudiantes que:",
        "a": "Hablan, escriben y responden."
    },
    {
        "id": 924,
        "q": "¿Por qué se considera indispensable la inteligencia emocional según la neurociencia aplicada al aprendizaje?",
        "a": "Inserción social, crecimiento personal y profesional."
    },
    {
        "id": 925,
        "q": "Desde el neuroaprendizaje, ¿cuál es la función central de la atención en el proceso de aprendizaje?",
        "a": "Filtra y selecciona estímulos relevantes, siendo la puerta de entrada al procesamiento y consolidación."
    },
    {
        "id": 926,
        "q": "¿Cuáles son los requisitos establecidos para la autorización de apertura y funcionamiento de un Instituto de carácter privado?",
        "a": "Memorial de solicitud, documentos legales, proyecto institucional y programa académico."
    },
    {
        "id": 927,
        "q": "Según el libro de Marilina Rotger, ¿Con qué se relaciona la forma en que actuamos o nos comportamos en determinadas situaciones?",
        "a": "Sentimientos y pensamientos."
    },
    {
        "id": 928,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje. Las emociones y el aprendizaje” ¿En base a qué, los estímulos que percibe el cerebro mamífero generan respuestas de supervivencia?",
        "a": "Archivo del dolor y archivo de placer."
    },
    {
        "id": 929,
        "q": "Desde la perspectiva de la neurociencia, ¿por qué es importante trabajar estrategias de autoconocimiento desde temprana edad?",
        "a": "Manejar la frustración."
    },
    {
        "id": 930,
        "q": "¿Qué tipo de memoria permite mantener activa la información actual para resolver una situación en conjunto con otra guardada en bancos de memoria, por un tiempo limitado?",
        "a": "Memoria de trabajo"
    },
    {
        "id": 931,
        "q": "Desde la perspectiva del neuroaprendizaje, la inteligencia emocional se estructura sobre dimensiones específicas que integran procesos internos y relacionales. ¿Cuáles son esas dimensiones fundamentales?",
        "a": "Autoconciencia, motivación interna y destrezas interpersonales."
    },
    {
        "id": 932,
        "q": "El Docente del Instituto elabora y propone ensayos, artículos, manuales de práctica, prototipos, instrumentos, aparatos o equipos, ¿con qué propósito específico realiza dicha función?",
        "a": "Lograr las competencias en la asignatura que desempeña."
    },
    {
        "id": 933,
        "q": "Una maestra de secundaria organiza reuniones semanales con sus estudiantes, tanto en el aula como en espacios extracurriculares, para conocer sus dudas, intereses y metas personales. Según los principios de la buena enseñanza, ¿cuál es el efecto más significativo que esta práctica genera en los estudiantes?",
        "a": "Mejora el compromiso intelectual del estudiante y los anima a pensar en sus propios valores y planes futuros."
    },
    {
        "id": 934,
        "q": "En el campo de la psicopedagogía, ¿en qué ayuda la Programación Neurolingüística (PNL)?",
        "a": "Identificar el estilo de una persona con una vía sensorial preferente."
    },
    {
        "id": 935,
        "q": "A partir de las herramientas para detectar la violencia y/o abuso contra niñas, niños y adolescentes descritas en la “Guía para la Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo”, cuando se conoce o sospecha que un estudiante sufre algún tipo de violencia, ¿cómo se deben aclarar sospechas?",
        "a": "Para esto se puede entablar una conversación amigable con la posible víctima, que se realizará en un lugar reservado y debe estar fundada en preguntas abiertas."
    },
    {
        "id": 936,
        "q": "¿Mediante qué instrumento se aprueba el reglamento interno que determina la conformación y funciones del Consejo Académico de un Instituto?",
        "a": "Mediante Resolución Administrativa emitida por la Dirección Departamental de Educación"
    },
    {
        "id": 937,
        "q": "¿Mediante qué instrumento normativo se aprueba la reglamentación específica interna para el otorgamiento de otras becas de estudio en los Institutos de carácter privado?",
        "a": "Mediante Resolución Administrativa emitida por la Dirección Departamental de Educación."
    },
    {
        "id": 938,
        "q": "En el ámbito del cambio pedagógico, las redes y colectivos formativos despliegan dinámicas de intercambio y trabajo mancomunado que potencian la renovación de las prácticas, ¿cómo se producen dichas dinámicas?",
        "a": "Mediante la colaboración horizontal entre docentes, la construcción colectiva de saber pedagógico, la reflexión crítica sobre el quehacer y la generación de aprendizajes situados que se retroalimentan mutuamente."
    },
    {
        "id": 939,
        "q": "¿En qué formatos deben los Institutos Técnicos y Tecnológicos mantener la información actualizada de su comunidad educativa?",
        "a": "De manera física y digital, respecto a las y los estudiantes, docentes, personal administrativo y directivo, en cumplimiento al presente Reglamento."
    },
    {
        "id": 940,
        "q": "¿De qué manera realiza el Ministerio de Educación la fiscalización y seguimiento permanente a los Institutos de carácter fiscal, de convenio y privado?",
        "a": "De oficio, conforme a lo establecido en el Reglamento General de Institutos."
    },
    {
        "id": 941,
        "q": "Según el texto, la escolaridad obligatoria sostiene simultáneamente el principio de igualdad universal y la realidad de sujetos profundamente heterogéneos. ¿De qué modo opera esa tensión en la práctica institucional?",
        "a": "De formas contradictorias, al exigir igualdad de trato en contextos de diversidad irreductible."
    },
    {
        "id": 942,
        "q": "¿Qué se conoce como neuroplasticidad?",
        "a": "Facultad del tejido nervioso de reorganizarse formando nuevos enlaces ante estímulos."
    },
    {
        "id": 943,
        "q": "De acuerdo con la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, las niñas, niños y adolescentes que sufren violencia física en su casa y que experimentaron violencia sexual tienen:",
        "a": "Mayor dificultad en el desempeño escolar que puede repercutir en su promoción."
    },
    {
        "id": 944,
        "q": "¿Qué papel cumple una educación bien definida, atractiva y adaptable frente al uso de las tecnologías y la abrumadora cantidad de recursos disponibles?",
        "a": "Matizar o minimizar los efectos de la abundancia de recursos tecnológicos, convirtiendo las tecnologías en herramientas que potencien las habilidades humanas y eviten la dependencia de las máquinas."
    },
    {
        "id": 945,
        "q": "El desarrollo profesional a través de los cursos de formación (Cardona, 2008) es el modelo de formación continua:",
        "a": "Más utilizado y el menos valorado por todos para el desarrollo profesional."
    },
    {
        "id": 946,
        "q": "¿Quién es la autora del libro «Neurociencias, Neuroaprendizaje: Las emociones y el aprendizaje»?",
        "a": "Marilina Rotger"
    },
    {
        "id": 947,
        "q": "En el marco del Reglamento General de Centros de Capacitación Artística e Institutos de Formación Artística, ¿cuál de las siguientes opciones define correctamente el Currículo?",
        "a": "Es el conjunto de criterios, planes de estudio, programas, metodologías y de evaluación que contribuyen a la formación integral artística."
    },
    {
        "id": 948,
        "q": "¿Para qué sirve la estrategia del «Botiquín de primeros auxilios emocionales» en el aula según la neurociencia?",
        "a": "Llevar un registro de quienes presentan síntomas fisiológicos o somáticos."
    },
    {
        "id": 949,
        "q": "Desde el neuroaprendizaje, el cerebro humano opera mediante un conjunto de procesos bioeléctricos que sustentan la adquisición del conocimiento. ¿De qué son responsables los impulsos electroquímicos en el cerebro?",
        "a": "Adquiramos nuevos conocimientos o aprendizajes"
    },
    {
        "id": 950,
        "q": "El texto afirma que la escuela pública es «el modelo históricamente más integrador de las diferencias». La condición que se señala para que ese atributo no se convierta en una desigualdad encubierta es que:",
        "a": "Mantenga niveles de calidad equiparables a los de las escuelas privadas, pues de lo contrario se produciría una desigualdad ante el derecho fundamental a la educación."
    },
    {
        "id": 951,
        "q": "Desde la perspectiva de la matemática educativa como problema de comunicación, ¿qué principio pedagógico fundamental orienta la práctica docente cuando los estudiantes no logran los aprendizajes esperados?",
        "a": "Reformular los procesos de emisión del mensaje pedagógico a partir de la retroalimentación conductual del receptor, ajustando las estrategias de enseñanza hasta alcanzar los objetivos formativos originalmente propuestos."
    },
    {
        "id": 952,
        "q": "En el marco de las responsabilidades para el fortalecimiento de la educación inclusiva, la responsabilidad de “Garantizar que los apoyos educativos sean oportunos, pertinentes y de calidad” es una responsabilidad que corresponde a:",
        "a": "Directores de centros de educación especial"
    },
    {
        "id": 953,
        "q": "En el marco del Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP – Modalidad Indirecta, en el proceso de apoyo educativo a estudiantes con dificultades en el aprendizaje, los responsables de cumplir las recomendaciones establecidas en el informe de la evaluación multidisciplinaria y/o psicopedagógica son:",
        "a": "Maestros de aula."
    },
    {
        "id": 954,
        "q": "En el marco del apoyo a estudiantes con talento extraordinario, ¿quiénes son responsables de los procesos de detección de señales de alerta?",
        "a": "Maestro de aula."
    },
    {
        "id": 955,
        "q": "¿A qué perfil de maestro de apoyo corresponde el siguiente enunciado: “Dominio de procesos de capacitación con metodologías diversas”?",
        "a": "Maestro de apoyo a estudiantes con discapacidad visual."
    },
    {
        "id": 956,
        "q": "Los profesionales que cumplen la función específica de coordinar, orientar, sensibilizar e informar a las madres y padres de familia o tutores, autoridades e instituciones comprometidas con la educación inclusiva, relacionadas con el acompañamiento familiar pertinente y adecuado en estudiantes con condición o trastornos del espectro autista, son:",
        "a": "Maestras y maestros de apoyo."
    },
    {
        "id": 957,
        "q": "La responsabilidad de “Recibir el informe de parte del equipo multidisciplinario que realiza la evaluación integral del estudiante con discapacidad intelectual y cumplir las recomendaciones para el desarrollo de los procesos educativos” corresponde a:",
        "a": "Maestras y maestros de apoyo."
    },
    {
        "id": 958,
        "q": "El aprendizaje es un proceso de construcción individual y social que el estudiante debe regular. Por eso, John Biggs (2005) sostiene que se necesitan cuatro condiciones para el aprendizaje efectivo. ¿Cuáles son las cuatro condiciones necesarias para el aprendizaje?",
        "a": "Base de conocimientos bien estructurada; contexto motivacional adecuado; actividades por parte del estudiante; interacción con otros."
    },
    {
        "id": 959,
        "q": "Según el libro de Marilina Rotger, ¿por qué es pedagógicamente relevante que el maestro genere situaciones de bienestar durante el proceso de aprendizaje?",
        "a": "Las emociones positivas preparan al cerebro para asimilar nuevos saberes."
    },
    {
        "id": 960,
        "q": "¿Qué distingue a los videojuegos de la gamificación del aprendizaje y en qué radica la diferencia entre ambos enfoques?",
        "a": "Los videojuegos tienen un alcance fundamentalmente lúdico y su éxito depende de entretener simplificando las cosas, mientras que gamificar el aprendizaje implica ofrecer retos que estimulen y entretengan al mismo tiempo que se aprende."
    },
    {
        "id": 961,
        "q": "¿En qué convergen Gimeno Sacristán, Feito Alonso y Clemente Linuesa respecto a la selección de contenidos curriculares?",
        "a": "Los tres reconocen que la selección de contenidos no es neutral, sino que está atravesada por opciones ideológicas, culturales y de poder."
    },
    {
        "id": 962,
        "q": "¿Qué supuesto común subyace a la crítica que Feito dirige simultáneamente a la segmentación disciplinar, a la pedagogía transmisiva y al modelo evaluativo memorístico?",
        "a": "Los tres conciben al estudiante como destinatario de un saber externo que debe incorporar tal como se le presenta, sin necesidad de transformarlo."
    },
    {
        "id": 963,
        "q": "Los aspectos verdaderamente ocultos del currículum, según Perrenoud, residen menos en valores y representaciones que en:",
        "a": "Los sistemas de pensamiento y el hábito, cuyos esquemas permanecen inconscientes y solo funcionan en la práctica."
    },
    {
        "id": 964,
        "q": "¿Qué sistemas deben estar establecidos y funcionar adecuadamente para evitar un dictamen de responsabilidad ejecutiva?",
        "a": "Los sistemas de operación, administración, información y control interno o la unidad legal."
    },
    {
        "id": 965,
        "q": "Cuando un estudiante con discapacidad intelectual transita por el Sistema Educativo Plurinacional, ¿qué documento es decisivo para proyectar su recorrido educativo más pertinente?",
        "a": "El Informe de Evaluación Integral y Multidisciplinario"
    },
    {
        "id": 966,
        "q": "¿Quiénes son los sujetos que pueden cometer una infracción en los institutos, y qué tipo de perjuicio debe causarse para que sea considerada como tal?",
        "a": "Las autoridades designadas, personal docente y administrativo de los institutos de carácter fiscal y de convenio, causando un perjuicio académico-administrativo a las y los estudiantes y/o egresados de dicha institución."
    },
    {
        "id": 967,
        "q": "En el diseño curricular, el binomio teoría-práctica exige la participación articulada de múltiples actores para generar estrategias metodológicamente sustentadas. ¿Quiénes se constituyen como actores fundamentales en ese proceso?",
        "a": "Los constructores del currículo, la voz de los docentes, los estudiantes y demás implicados en el proceso formativo, articulando sus perspectivas para sustentar metodológicamente las estrategias de enseñanza y aprendizaje."
    },
    {
        "id": 968,
        "q": "Ainscow es invocado para señalar que la escuela obligatoria debe ser «promotora de todos». Lo que esta formulación añade respecto de una concepción meramente integradora es que:",
        "a": "No basta con garantizar el acceso de todos a una misma institución si las prácticas internas de organización, evaluación y las actitudes del profesorado siguen operando como mecanismos de exclusión."
    },
    {
        "id": 969,
        "q": "Desde el giro constructivista, ¿qué debe considerar el conocimiento escolar para evitar la enajenación del alumno?",
        "a": "Las concepciones previas y significados culturales propios del alumno."
    },
    {
        "id": 970,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” refiere que en muchas ocasiones el liderazgo directivo y la gestión del centro imponen un solo canal de información y comunicación y una organización de centro excesivamente rígida y normativa, que impide la flexibilidad necesaria para dar respuesta a:",
        "a": "Los problemas imprevistos, a las distintas posiciones y modos de hacer bien las cosas."
    },
    {
        "id": 971,
        "q": "Un docente observa que algunos estudiantes, tras reprobar un examen, concluyen que no tienen capacidad y abandonan el esfuerzo, mientras otros asumen que deben esforzarse más. Según las teorías de la motivación relacionadas con el aprendizaje, ¿qué explica esta diferencia entre ambos grupos?",
        "a": "Los de bajo rendimiento tienden a atribuir el fracaso a su falta de capacidad asumiendo que no hay nada que hacer, mientras los de alto rendimiento atribuyen el fracaso a la falta de esfuerzo y asumen que pueden tener éxito si se esfuerzan más."
    },
    {
        "id": 972,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué diferencia el modo de retención entre los participantes visuales y verbales?",
        "a": "Los primeros recuerdan mejor lo que ven: cuadros, diagramas y películas; los segundos prefieren la explicación escrita y hablada."
    },
    {
        "id": 973,
        "q": "¿Cuándo se establecen las bases neurológicas que sustentarán los futuros aprendizajes?",
        "a": "Los primeros años de vida."
    },
    {
        "id": 974,
        "q": "La capacidad más elevada para establecer relaciones sinápticas se establece en:",
        "a": "Los primeros años de vida"
    },
    {
        "id": 975,
        "q": "Según la teoría del condicionamiento operante del aprendizaje, ¿cuáles de los siguientes elementos actúan como motivadores que influyen en el proceso de aprendizaje del estudiante?",
        "a": "Las alabanzas verbales y expresiones faciales del maestro, el sentimiento de éxito, los altos puntajes, los premios y las calificaciones."
    },
    {
        "id": 976,
        "q": "Los métodos de enseñanza se pueden clasificar en función de la naturaleza de la participación de los estudiantes. Los métodos con instrucciones programadas, discusiones estructuradas, panel de discusión, foro de discusión abierto, sesiones de preguntas y respuesta y diálogo Socrático caracterizan a:",
        "a": "Los métodos interactivos"
    },
    {
        "id": 977,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿qué estrategia se utiliza en los aspectos metodológicos como área de intervención?",
        "a": "Las estrategias del aprendizaje cooperativo."
    },
    {
        "id": 978,
        "q": "¿Qué se define a partir del puntaje final obtenido en la ficha de calificación de cada maestro, como factor objetivo en los casos de concurso para el ascenso a cargos jerárquicos?",
        "a": "Los méritos docentes"
    },
    {
        "id": 979,
        "q": "Las “experiencias educativas innovadoras” no obedecen a un camino único, sino que sus significados se configuran en función de contextos institucionales específicos, ¿cuáles son los elementos cuya interacción determina dichos significados?",
        "a": "La finalidad de la educación, el campo de conocimiento y los patrones culturales específicos de un territorio."
    },
    {
        "id": 980,
        "q": "¿Para producir niveles óptimos de motivación, qué necesitan hacer los maestros para ayudar a los estudiantes?",
        "a": "Los maestros necesitan ayudar a los estudiantes a eliminar actitudes negativas, ansiedad y miedo al fracaso, y valorar los procesos y productos del aprendizaje"
    },
    {
        "id": 981,
        "q": "¿Qué características tiene la segunda dimensión de la enseñanza efectiva de Lowman, referida a la relación interpersonal denominada «obligación del maestro hacia los estudiantes»?",
        "a": "Los profesores desarrollan una relación con los estudiantes mostrando un interés en ellos como individuos, además de saber el nombre de cada estudiante."
    },
    {
        "id": 982,
        "q": "Orientar a las familias, madres y padres, sobre la proyección educativa más favorable para estudiantes con Trastorno del Espectro Autista, es una función específica de:",
        "a": "Los maestros de apoyo"
    },
    {
        "id": 983,
        "q": "Considerando integralmente el balance de la innovación del proyecto disciplinar sobre el agua y la ciudad presentado en el texto Innovación Educativa, ¿qué relación se establece entre los logros alcanzados y las dificultades pedagógicas detectadas?",
        "a": "Los logros en integración temática y visibilización sociocultural coexisten con dificultades pedagógicas de articulación curricular y profundización disciplinar, revelando la complejidad inherente a la innovación situada."
    },
    {
        "id": 984,
        "q": "¿Qué comprende el control interno posterior a cargo de los responsables superiores?",
        "a": "Los procedimientos de control incorporados en el plan de organización y en los reglamentos, manuales y procedimientos administrativos y operativos de cada entidad, aplicados sobre los resultados de las operaciones bajo su directa competencia."
    },
    {
        "id": 985,
        "q": "¿Quiénes son los únicos sujetos pasibles de dictamen de responsabilidad ejecutiva en cada entidad pública?",
        "a": "El máximo ejecutivo, la dirección colegiada si la hubiere, o ambos."
    },
    {
        "id": 986,
        "q": "¿Qué problemas manifiestan los internautas en relación con el uso excesivo de la red?",
        "a": "Los internautas manifiestan efectos negativos sobre sus relaciones sociales y familiares, reducción de actividades cotidianas, pérdida de control sobre la duración de la conexión, pérdida de tiempo laboral o de estudios, mayor deseo de estar conectados, sentimientos de culpa y pérdida de la noción del tiempo."
    },
    {
        "id": 987,
        "q": "Según el texto de Innovación Educativa, en el análisis de los obstáculos para el cambio en las organizaciones educativas, ¿qué factores corresponden a la dimensión micropolítica institucional?",
        "a": "Los intereses creados, las asimetrías en el ejercicio del poder, la cultura conservadora y la exclusión docente de las decisiones."
    },
    {
        "id": 988,
        "q": "En la tercera fase del proceso de desarrollo y consolidación de la innovación educativa, ¿qué elemento central debe identificarse para viabilizar una mejora o cambio educativo?",
        "a": "Los insumos materiales, humanos, tecnológicos e infraestructura con que se cuenta y los que se requieren pero aún no se poseen para concretar la transformación pedagógica prevista."
    },
    {
        "id": 989,
        "q": "Desde la neurociencia, existe un mecanismo neurológico responsable de la adquisición de nuevos conocimientos mediante la formación de conexiones sinápticas entre neuronas. ¿Cómo se denominan los responsables de este proceso?",
        "a": "Los impulsos electroquímicos"
    },
    {
        "id": 990,
        "q": "En el marco de las obligaciones del Estado Plurinacional de Bolivia en materia de salud para personas con discapacidad, se establecen distintas responsabilidades para diferentes instancias del Estado. Considerando la gestión de los equipos multidisciplinarios destinados a la calificación continua de todas las personas con discapacidad, ¿qué instancia es responsable de mantenerlos y distribuirlos racionalmente, incluyendo mancomunidades de municipios?",
        "a": "El Estado Plurinacional de Bolivia, mediante el Ministerio de Salud y Deportes en coordinación con las entidades territoriales autónomas."
    },
    {
        "id": 991,
        "q": "Además del tálamo, el hipotálamo y la amígdala cerebral, ¿qué otro componente conforma el sistema límbico?",
        "a": "El hipocampo"
    },
    {
        "id": 992,
        "q": "¿Quiénes tienen la obligación de constituirse en parte querellante de los delitos de corrupción y vinculados, una vez conocidos éstos?",
        "a": "La máxima autoridad ejecutiva de la entidad afectada o las autoridades llamadas por ley."
    },
    {
        "id": 993,
        "q": "Según Sáez López en «Estilos de aprendizaje y métodos de enseñanza», una maestra de una unidad educativa de Sucre organiza una actividad donde sus estudiantes diseñan y ejecutan un proyecto interdisciplinar sobre la preservación del patrimonio histórico de la ciudad, integrando contenidos de historia, ciencias y comunicación para resolver situaciones reales. ¿Qué técnica está aplicando y cuáles son sus características definitorias?",
        "a": "El método de proyectos, que acerca una realidad concreta al ambiente educativo, estimula el desarrollo de habilidades para resolver situaciones reales con enfoque interdisciplinar, favoreciendo los estilos Activo, Reflexivo, Teórico y Pragmático."
    },
    {
        "id": 994,
        "q": "¿En qué consiste la paradoja central que identifica Sacristán en los discursos educativos contemporáneos sobre los fines del currículum?",
        "a": "Los fines amplios del currículum quedan reducidos a referentes transversales inútiles mientras la práctica se orienta al éxito escolar medible."
    },
    {
        "id": 995,
        "q": "El aprendizaje colaborativo destaca por los objetivos del equipo y recompensas basadas en el crecimiento individual del aprendizaje. También se pueden destacar problemas al integrar el aprendizaje cooperativo, uno de los cuales se ha llamado «Efecto Gandul», caracterizado por:",
        "a": "Los estudiantes se atribuyen tareas para no hacerlas de forma completa, como lo harían individualmente."
    },
    {
        "id": 996,
        "q": "En el marco de un proceso de investigación técnica mediado por TIC, ¿cuál de los siguientes esquemas evidencia que la tecnología opera únicamente en un nivel de sustitución, sin aportar valor transformador a la lógica investigativa?",
        "a": "Los estudiantes emplean software especializado para digitalizar el cuestionario de su investigación y enviarlo por correo electrónico, reemplazando el formulario impreso sin modificar el diseño ni el alcance del instrumento."
    },
    {
        "id": 997,
        "q": "¿Qué demandan los estudiantes actuales del proceso de aprendizaje y qué competencias requiere el mundo actual según la concepción educativa contemporánea?",
        "a": "Los estudiantes demandan participar activamente del proceso de aprendizaje sin ser recipientes vacíos, y el mundo actual requiere que puedan trabajar en equipo, pensar de forma crítica y creativa y reflexionar acerca de su propio proceso de aprendizaje."
    },
    {
        "id": 998,
        "q": "Algunas personas pueden experimentar un temor al éxito, en el sentido de que se preocupan de que el éxito puede interferir con las relaciones positivas con los demás. Los estudios que llevaron a la formulación de la teoría de la atribución revelaron que:",
        "a": "Los estudiantes de bajo rendimiento tienden a atribuir el fracaso en la escuela a su falta de capacidad y por lo tanto asumen que no hay nada que hacer para tener éxito."
    },
    {
        "id": 999,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿cuáles son dos limitaciones explícitas del método de proyectos descritas en el texto?",
        "a": "Estudiantes brillantes pueden adquirir mucho más protagonismo que los pasivos; la enseñanza puede desorganizarse debido a la libertad y flexibilidad del método."
    },
    {
        "id": 1000,
        "q": "¿Qué estilos de aprendizaje favorece el juego de roles según el texto de Sáz López?",
        "a": "Los estilos Activo, Reflexivo, Teórico y Pragmático simultáneamente."
    },
    {
        "id": 1001,
        "q": "Una maestra de Pando necesita que sus estudiantes contrasten posiciones sobre minería ilegal. ¿Qué estilos favorece la técnica más adecuada?",
        "a": "Los estilos Activo y Reflexivo intercambiando información estimulando el pensamiento crítico."
    },
    {
        "id": 1002,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que se trata, en definitiva, de educar los sentimientos del alumnado en su dimensión socio-afectiva, eliminando:",
        "a": "Los estereotipos de género"
    },
    {
        "id": 1003,
        "q": "La identificación de estudiantes con Talento Extraordinario es realizada por:",
        "a": "Los Equipos Multidisciplinarios."
    },
    {
        "id": 1004,
        "q": "Un aprendizaje resulta oculto por partida doble cuando:",
        "a": "Se ignora el papel de la escuela en la formación del hábito y sus esquemas permanecen inconscientes, operando solo en la práctica."
    },
    {
        "id": 1005,
        "q": "Una estudiante víctima de violencia sexual regresa a clases después de ausentarse. Sus docentes, con intención de protegerla, la observan constantemente durante las clases y evitan llamarle la atención como al resto. ¿Qué error específico están cometiendo los docentes y qué principio en casos de violencia están vulnerando?",
        "a": "Los docentes están vulnerando el principio de no revictimización, ya que el comportamiento hacia la víctima debe ser habitual y con buen trato."
    },
    {
        "id": 1006,
        "q": "Promover el acceso a la educación de estudiantes con discapacidad en el marco de las responsabilidades designadas para el fortalecimiento de la educación inclusiva, corresponde a:",
        "a": "Las direcciones distritales educativas."
    },
    {
        "id": 1007,
        "q": "Gimeno Sacristán afirma que «en esta red de determinaciones quedan prendidos y se contienen lo que denominamos contenidos; es ahí donde adquieren su significación real en la práctica». ¿Qué consecuencia se deriva de esta afirmación para la comprensión de los contenidos curriculares?",
        "a": "Los contenidos no pueden comprenderse como entidades con significado propio: su sentido real emerge de la red de determinaciones estructurantes en que quedan insertos y de sus relaciones con los demás elementos del currículum."
    },
    {
        "id": 1008,
        "q": "Según Gimeno Sacristán, confundir la «cultura escolar» con la cultura que dice representar produce un error simétrico en posiciones ideológicas opuestas. ¿Cuál es la consecuencia más precisa de esa confusión?",
        "a": "Progresistas rechazan toda cultura; conservadores defienden la versión escolar empobrecida creyendo proteger la cultura real."
    },
    {
        "id": 1009,
        "q": "¿Cómo define Vinyamata el conflicto?",
        "a": "Los conflictos son el motor y la expresión de las relaciones entre las personas. Las relaciones personales e individuales y las relaciones sociales e internacionales se expresan y fundamentan en el conflicto."
    },
    {
        "id": 1010,
        "q": "Según el texto “Convivencia escolar y resolución pacífica de conflictos”, mejorar la convivencia escolar implica el desarrollo de un proyecto global de centro y una actitud organizativa basada en un modelo comprensivo, humanista, integrador y ecológico de afrontar los conflictos y de prevenir:",
        "a": "Los comportamientos y las acciones contrarias a un clima escolar adecuado."
    },
    {
        "id": 1011,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que se da un giro en los programas de prevención física, situacional o basada en la exclusión escolar hacia enfoques más integrales, a través de políticas y programas que, junto a la atención de los problemas individuales del alumnado, tienen en cuenta las necesidades de los docentes y de las familias, estableciendo vínculos de colaboración entre:",
        "a": "Los centros educativos y la comunidad"
    },
    {
        "id": 1012,
        "q": "¿Cuál es la diferencia entre los Centros de Capacitación Artística y los Institutos de Formación Artística según la estructura institucional de la Formación Superior Artística?",
        "a": "Los Centros de Capacitación Artística desarrollan programas de corta duración, mientras que los Institutos de Formación Artística desarrollan programas a nivel de capacitación, técnico medio y superior."
    },
    {
        "id": 1013,
        "q": "¿Cómo se caracteriza la relación entre los avances científicos y las actividades técnicas prácticas durante las primeras fases del proceso de innovación educativa?",
        "a": "Los avances científicos desempeñan un rol primordial, siendo tan estrecha su relación con las actividades técnicas prácticas que ambas llegan a fusionarse en un solo tipo de actividad."
    },
    {
        "id": 1014,
        "q": "Dentro del marco conceptual para la competencia tecnológica docente apoyado en los seis estándares de la ISTE, ¿qué aspectos aborda específicamente el Estándar VI?",
        "a": "Los aspectos sociales, éticos, legales y humanos inherentes a la expansión de las comunicaciones a escala mundial y las oportunidades de aprendizaje derivadas del desarrollo tecnológico."
    },
    {
        "id": 1015,
        "q": "Partiendo de la evolución del programa Enlaces, ¿qué factores han generado nuevas metas que apuntan a una expansión aún mayor de la tecnología educativa?",
        "a": "Los propios logros del programa y los continuos avances de la tecnología de la información y la comunicación a escala mundial."
    },
    {
        "id": 1016,
        "q": "El Sistema de Programación de Operaciones traduce los objetivos y planes estratégicos de cada entidad en distintos elementos. ¿Cuál de las siguientes opciones enumera correctamente y de forma completa todos esos elementos?",
        "a": "Resultados concretos a alcanzar en el corto y mediano plazo; tareas específicas a ejecutar; procedimientos a emplear; y medios y recursos a utilizar, todo en función del tiempo y del espacio."
    },
    {
        "id": 1017,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje Las emociones y el aprendizaje”¿Qué otorga el cerebro reptil?",
        "a": "Marilina Rotger"
    },
    {
        "id": 1018,
        "q": "¿Qué ocurre cuando el maestro separa la enseñanza de la evaluación?",
        "a": "Puede convertirse en entrenador y aliado cuya meta es ayudar a aprender."
    },
    {
        "id": 1019,
        "q": "En la tabla de “Orientaciones cuando se conoce un caso de violencia” que se encuentra en la “Guía para la Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo”, se describen cuatro momentos, ¿Cuáles son estos?",
        "a": "Detección de la violencia, durante la intervención, durante la referencia si corresponde y durante la contrarreferencia o seguimiento."
    },
    {
        "id": 1020,
        "q": "Desde la perspectiva de la neurociencia, ¿cómo se denomina el epicentro de la atención ejecutiva que permite mantenerla de manera voluntaria?",
        "a": "Corteza cingulada anterior"
    },
    {
        "id": 1021,
        "q": "Según la neurociencia, ¿qué parte del cerebro se estimula cuando usamos palabras positivas con mayor frecuencia?",
        "a": "Lóbulo frontal."
    },
    {
        "id": 1022,
        "q": "Bajo el enfoque de derechos humanos de la OREALC/UNESCO, ¿a través de qué dimensiones se amplía el concepto de calidad educativa más allá de los criterios de rendimiento institucional?",
        "a": "Lo amplía hacia la igualdad y equidad social, la relevancia, la pertinencia, la contextualización territorial y la interculturalidad, superando los criterios de eficacia y eficiencia."
    },
    {
        "id": 1023,
        "q": "Una maestra presenta a sus estudiantes de primaria la noción de «fracción» mostrando primero una naranja partida en trozos reales, luego dibujos de naranjas divididas y finalmente la notación simbólica. Posteriormente, pide a los niños que observen, describan lo que ven y formulen con sus propias palabras qué es una fracción. ¿Cuáles son los dos principios de enseñanza que está aplicando simultáneamente?",
        "a": "De lo real a lo representativo, porque el niño aprende más rápidamente de los objetos reales, y de lo empírico a lo racional, comenzando con lo que vemos, sentimos y experimentamos, y posteriormente con lo que discutimos, generalizamos y explicamos."
    },
    {
        "id": 1024,
        "q": "¿Qué combina el estilo acomodador según Kolb?",
        "a": "Lo concreto con la experiencia activa llevando planes orientados a la acción."
    },
    {
        "id": 1025,
        "q": "¿Qué método de aprendizaje permite ampliar la experiencia de los participantes y su habilidad para resolver problemas desde diferentes puntos de vista, abre perspectivas de acercamiento a la realidad con creatividad y desinhibición, propicia la discusión desde diferentes tipos de roles promoviendo la empatía, y favorece los estilos de aprendizaje Activo (EA), Reflexivo (OR), Teórico (CA) y Pragmático (EC)?",
        "a": "Juego de roles"
    },
    {
        "id": 1026,
        "q": "¿Cuál es la función que cumple la propincuidad promovida por el docente en el contexto del aprendizaje, según el planteamiento del texto?",
        "a": "Lleva la concientización por entrar en armonía en el contexto del aprendizaje, siendo un primer momento para la interiorización de la aceptación de las diferencias como principio para la diversidad entre la familia, clase social, nivel económico o creencias."
    },
    {
        "id": 1027,
        "q": "¿En qué década llegó el término innovación al campo educativo y desde qué disciplina fue transferido originalmente?",
        "a": "Llegó en los años 60, transferido desde el campo de la administración hacia el ámbito educativo."
    },
    {
        "id": 1028,
        "q": "Desde la neurociencia, ¿cómo se hacen presentes las sensaciones en el cuerpo?",
        "a": "Sonrojo, palidez, palpitaciones y sudor"
    },
    {
        "id": 1029,
        "q": "El Protocolo de Prevención y Actuación ante casos de violencia en unidades educativas establece como propósito central sensibilizar y salvaguardar la integridad de las y los estudiantes. ¿Qué elementos lo distinguen de otros instrumentos normativos del ámbito educativo?",
        "a": "Lineamientos de prevención, actuación, denuncia y protección a víctimas ante violencia ejercida por cualquier miembro adulto de la comunidad educativa."
    },
    {
        "id": 1030,
        "q": "La neocorteza, los hemisferios cerebrales y el asiento de la inteligencia emocional e intelectual, ¿con qué cerebro del modelo del «Cerebro triuno» se identifican?",
        "a": "Racional."
    },
    {
        "id": 1031,
        "q": "El tálamo, el hipotálamo, el hipocampo y la amígdala cerebral son estructuras que integran un mismo sistema cerebral vinculado al procesamiento emocional y la memoria. ¿A qué sistema corresponden?",
        "a": "Límbico."
    },
    {
        "id": 1032,
        "q": "Según el neuroaprendizaje, ¿qué condiciones básicas requiere el cerebro reptiliano para operar adecuadamente durante los procesos de enseñanza-aprendizaje?",
        "a": "Suministro de aire, rutinas predecibles, sentido de pertenencia al grupo y percepción de seguridad."
    },
    {
        "id": 1033,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje. Las emociones y el aprendizaje”. Un efecto neurológico de la incorporación de TICS y dispositivos móviles en los procesos de enseñanza aprendizaje es:",
        "a": "Motivación del cerebro, promoción de innovación y enlace a contextos familiares enriquecidos"
    },
    {
        "id": 1034,
        "q": "La conducta que consiste en subordinar las instancias administrativas a intereses político- partidarios o sectarios en desmedro de la docencia se clasifica como una falta:",
        "a": "Muy grave"
    },
    {
        "id": 1035,
        "q": "Una maestra suspende las actividades pedagógicas del día para organizar junto a sus colegas un agasajo sorpresa al director del establecimiento con motivo de su cumpleaños, utilizando el horario de clases para la celebración. Esta conducta se tipifica como falta:",
        "a": "Leve, porque se configura en la suspensión de labores por cumpleaños y agasajos a directores o docentes."
    },
    {
        "id": 1036,
        "q": "¿A quién se atribuye la frase «El aprendizaje es experiencia, todo lo demás es información»?",
        "a": "Albert Einstein"
    },
    {
        "id": 1037,
        "q": "¿Quién afirmó «Loco es aquel que, haciendo siempre lo mismo, espera resultados distintos»?",
        "a": "Albert Einstein."
    },
    {
        "id": 1038,
        "q": "Presentar la proyección de ideales y metas de mejora como rasgo inherente a la condición humana invisibiliza que dicha concepción:",
        "a": "Es una construcción histórica de la modernidad occidental presentada como universal al incorporarse al proyecto educativo."
    },
    {
        "id": 1039,
        "q": "¿En qué aspectos incide de manera particular la deshidratación sobre el funcionamiento cerebral?",
        "a": "Rendimiento cognitivo, memoria."
    },
    {
        "id": 1040,
        "q": "Según la neurociencia, la capacidad cerebral de adaptarse a cada nuevo entorno, situación o contexto, modificándose constantemente, ¿a qué característica fundamental del cerebro corresponde?",
        "a": "Neuroplasticidad cerebral funcional"
    },
    {
        "id": 1041,
        "q": "¿Cuál es el efecto neurológico que produce en el cerebro del estudiante la incorporación de las TICs y dispositivos móviles en los procesos de enseñanza-aprendizaje, en contraste con el uso exclusivo de métodos tradicionales?",
        "a": "Activa circuitos dopaminérgicos en un entorno significativo que previene la desconexión atencional."
    },
    {
        "id": 1042,
        "q": "En materia de educación universitaria para personas con discapacidad, ¿cuál de las siguientes afirmaciones describe correctamente una obligación que recae exclusivamente sobre el Sistema Universitario Estatal, diferenciándola de la que corresponde al sistema universitario privado?",
        "a": "El Sistema Universitario Estatal debe liberar el pago de valores académicos en todos sus niveles de estudio, beneficiando a las personas con discapacidad, a sus hijos y a los padres de niños con discapacidad."
    },
    {
        "id": 1043,
        "q": "Considerando la integración de TIC en la formación docente, ¿cuáles son los principios fundamentales que deben orientar dicha integración?",
        "a": "Las TIC deben integrarse a todo el programa de formación docente, incorporarse de acuerdo al contexto y los futuros docentes deben participar de entornos de aprendizaje asistidos por TIC que favorezcan la innovación."
    },
    {
        "id": 1044,
        "q": "Según Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», un docente aplica castigos frecuentes para eliminar conductas inadecuadas, pero observa que estas persisten y que sus estudiantes evitan participar por miedo al error. ¿Qué principios del condicionamiento operante de Skinner está ignorando y cuáles debería aplicar?",
        "a": "Evitar el castigo por desaprender el comportamiento indeseable, y recompensar el comportamiento apropiado e ignorar el comportamiento inapropiado para su extinción gradual."
    },
    {
        "id": 1045,
        "q": "¿Qué condiciones promueven el aprendizaje cooperativo y lo fortalecen con las aportaciones de otros?",
        "a": "Las situaciones, los contextos y la toma de decisiones, en tanto la cotidianidad exige del diálogo que se aprende en la práctica, en la pluralidad y en la expansión de los horizontes de la convivencia y la cultura."
    },
    {
        "id": 1046,
        "q": "La «situación» formal o informal es un aspecto importante en el proceso de aprendizaje efectivo. El tipo de situación disponible para el alumno determina la calidad y velocidad del aprendizaje. ¿Cuáles son las características de las situaciones informales?",
        "a": "Las situaciones informales de aprendizaje se encuentran en el entorno familiar, medio ambiente y ambiente escolar, fuera de los marcos estructurales."
    },
    {
        "id": 1047,
        "q": "Para implementar buenas prácticas educativas es necesario reflexionar sobre el alcance de los cambios emprendidos, ¿qué diferencia sustancial existe entre una simple mejora y una innovación educativa propiamente dicha?",
        "a": "Las simples mejoras pasan rápido y se olvidan pronto o dejan huellas, mientras que la innovación educativa ocurre solo cuando la experiencia apunta efectivamente a transformaciones más profundas."
    },
    {
        "id": 1048,
        "q": "El texto “Convivencia escolar y resolución pacífica de conflictos” refiere que son las partes involucradas directamente en el conflicto las que se obligan a encontrar una solución pacífica a sus diferencias, renunciando a un arbitraje o a la imposición de una solución externa. De acuerdo con estos criterios, la mediación se basa en principios, uno de ellos es:",
        "a": "Los acuerdos tomados son mejor respetados si las personas están directamente implicadas en el proceso de producción de los mismos."
    },
    {
        "id": 1049,
        "q": "La evolución del concepto de innovación educativa muestra distintos énfasis según cada época. ¿Qué diferencia sustancial existe entre la innovación promovida por las Reformas Educativas de los años 90 y la innovación de la primera década del siglo XXI?",
        "a": "Las Reformas de los 90 promovieron modelos de descentralización y autonomía de los centros educativos, mientras que en la primera década del siglo XXI la innovación se vinculó con las TIC y el protagonismo de instituciones y docentes en el cambio ‘desde abajo’."
    },
    {
        "id": 1050,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje. Las emociones y el aprendizaje”, ¿Por qué el maestro debe contemplar prioritariamente las redes emocionales antes de activar las redes cognitivas de sus estudiantes?",
        "a": "El cerebro profundo, al percibir malestar o peligro, activa respuestas de bloqueo que impiden que la información alcance las zonas superiores responsables de la comprensión y la construcción de significados."
    },
    {
        "id": 1051,
        "q": "El modelo de Kolb diferencia cuatro estilos de aprendizaje —convergentes, asimiladores, divergentes y acomodadores— caracterizados por un patrón de conducta. ¿Cómo se caracterizan los estilos de aprendizaje convergentes?",
        "a": "Las personas poseen un pensamiento abstracto y procesan la información de forma activa."
    },
    {
        "id": 1052,
        "q": "Dentro de la sustanciación de un proceso disciplinario, nadie puede ser sancionado sin haber sido oído y juzgado, este derecho debe ser ejercido por parte de:",
        "a": "La persona sometida al proceso disciplinario, no pudiendo omitirse bajo ninguna circunstancia antes de emitir una resolución sancionatoria."
    },
    {
        "id": 1053,
        "q": "Según el texto “Convivencia escolar y resolución pacífica de conflictos”, el consenso es una forma de resolver los conflictos a través de la cual:",
        "a": "Las partes en conflicto intercambian sus preocupaciones y necesidades y tratan de encontrar un acuerdo aceptado por ambas partes."
    },
    {
        "id": 1054,
        "q": "Los centros educativos que promueven activamente la autoestima de cada estudiante, favorecen las buenas relaciones entre maestros y estudiantes, facilitan vías para la información y la participación, y fomentan lazos sólidos entre centro, familia y comunidad en general son:",
        "a": "Las organizaciones educativas saludables."
    },
    {
        "id": 1055,
        "q": "Según Perrenoud, la incorporación plena de la vida cotidiana al aula es inviable porque:",
        "a": "Ciertos temas son delicados y su abordaje extenso restaría tiempo a los contenidos esenciales del plan de estudios."
    },
    {
        "id": 1056,
        "q": "Entre los factores de riesgo de violencia en el entorno familiar, se encuentran los relacionados con las formas de educar y corregir a las niñas, los niños y adolescentes. En este sentido, existe una delgada línea entre la disciplina, el castigo y la violencia; para distinguir uno de otro, ¿qué aspectos deben examinarse?",
        "a": "La intensidad, las normas sociales, la intencionalidad y el daño ocasionado."
    },
    {
        "id": 1057,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, se menciona que de una u otra forma, las prácticas educativas son matizadas y precisadas por un conjunto determinante de elementos, entre ellos “El comportamiento esperado en el cumplimiento de las normas de convivencia”, el cual refiere que:",
        "a": "Las normas ayudan tanto al profesorado como al alumnado a enfrentar situaciones estresantes o complejas (Rich, 1982). Es de suma importancia establecer reglas claras, bien conocidas por todos, revisadas regularmente con los alumnos y aplicadas de manera uniforme e imparcial."
    },
    {
        "id": 1058,
        "q": "La visión humanista de la motivación considera que las necesidades humanas se organizan en orden jerárquico, de tal manera que cuando las necesidades de deficiencia han sido satisfechas, la persona motivada por el crecimiento busca una tensión placentera y participa en el aprendizaje autodirigido. ¿Cuáles son las necesidades de deficiencia?",
        "a": "Las necesidades de deficiencia son las fisiológicas, de seguridad, pertenencia, amor y estima."
    },
    {
        "id": 1059,
        "q": "Los esquemas que permiten al maestro producir contenidos, ejemplos y ejercicios no previstos tienen su origen en:",
        "a": "El hábito profesional anclado en la relación personal del maestro con la cultura, el mundo, la lengua y la excelencia."
    },
    {
        "id": 1060,
        "q": "La transposición pragmática del currículum formal al real no depende exclusivamente de las concepciones didácticas del maestro porque:",
        "a": "La dinámica del grupo y las preferencias y resistencias de los alumnos condicionan igualmente su configuración final."
    },
    {
        "id": 1061,
        "q": "La precisión con que el programa regula los contenidos de cada materia es, según Perrenoud, variable porque:",
        "a": "Algunas materias admiten temas diversos como pretexto, mientras en otras las omisiones son inmediatamente visibles."
    },
    {
        "id": 1062,
        "q": "En el contexto de la evaluación del aprendizaje en la docencia, ¿qué instrumento resulta más adecuado para valorar el trabajo en equipo y el cumplimiento de avances en proyectos formativos?",
        "a": "Las escalas estimativas, dado que permiten registrar de forma gradual el nivel de logro en procesos colaborativos y el seguimiento progresivo de avances."
    },
    {
        "id": 1063,
        "q": "En el texto sobre educación obligatoria, la imposibilidad de una escuela radicalmente individualizada para todos se fundamenta principalmente en:",
        "a": "Las limitaciones económicas, temporales y de trabajo docente que hacen inviable la educación tutorial masiva."
    },
    {
        "id": 1064,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que tradicionalmente se ha considerado al profesor como único agente educativo relevante, teniendo sus relaciones con el alumnado y sus estilos de enseñar un rango predominante para determinar el clima educativo, olvidando otros componentes esenciales del mismo, como:",
        "a": "Las interacciones entre el alumnado o la pertinencia del propio programa de estudios."
    },
    {
        "id": 1065,
        "q": "¿Cuál es el elemento más importante para que exista una verdadera red, según el entramado de personas, tecnología e instituciones?",
        "a": "El factor humano, desde el momento en que decide compartir recursos y experiencias o cooperar en su creación."
    },
    {
        "id": 1066,
        "q": "El modelo ecológico que plantea diferentes niveles de identificación y prevención indicados en el texto “Convivencia escolar y resolución pacífica de conflictos”, en el tercer nivel (comunitario) se examina contextos de la comunidad en los que se inscriben las relaciones sociales, como:",
        "a": "La escuela, el lugar de trabajo y el vecindario, y busca identificar las características de estos ámbitos que se asocian con ser víctimas o agresores."
    },
    {
        "id": 1067,
        "q": "Al analizar el alcance de las innovaciones en la práctica educativa, se identifica una tendencia predominante respecto a los componentes que estas involucran, ¿cuál de los siguientes postulados describe con mayor precisión dicha tendencia?",
        "a": "Las innovaciones educativas difícilmente implican cambios en un área o componente concreto; por el contrario, la gran mayoría involucra transformaciones en diferentes aspectos de la práctica educativa, lo que refleja la naturaleza interdependiente y multidimensional de los procesos de innovación."
    },
    {
        "id": 1068,
        "q": "Considerando las funciones específicas del maestro de apoyo para estudiantes con discapacidad auditiva, ¿qué recursos utiliza el maestro de apoyo cuando el estudiante Sordo no comprende una palabra durante la explicación de un tema en el proceso de enseñanza-aprendizaje?",
        "a": "Los lingüísticos que coadyuven en este propósito."
    },
    {
        "id": 1069,
        "q": "¿Qué ha ocurrido con la valoración de las diferentes disciplinas en los debates curriculares contemporáneos dominantes?",
        "a": "Las humanidades y ciencias sociales han perdido apreciación frente al ascenso de las ciencias, las matemáticas y el conocimiento aplicado."
    },
    {
        "id": 1070,
        "q": "¿Qué se constituye como una reacción química y neuronal ante un estímulo desde una perspectiva neurológica?",
        "a": "Las emociones"
    },
    {
        "id": 1071,
        "q": "En el marco del régimen disciplinario docente, ¿cómo se distribuye la competencia sancionadora según la gravedad de la falta cometida por un maestro?",
        "a": "Las faltas leves son sancionadas por la autoridad inmediata superior, mientras que las faltas graves y muy graves corresponden al tribunal correspondiente, distribuyéndose así la competencia disciplinaria en función de la gravedad de la infracción cometida."
    },
    {
        "id": 1072,
        "q": "Desde la finalidad de la innovación educativa, ¿qué relación existe entre las experiencias innovadoras institucionales y el logro de las metas educativas nacionales e internacionales?",
        "a": "Las experiencias educativas innovadoras dinamizan el cambio institucional contribuyendo al cumplimiento de metas."
    },
    {
        "id": 1073,
        "q": "Según Díaz Barriga y Hernández Rojas (2010), ¿qué distingue el uso de las estrategias de aprendizaje de la simple aplicación de técnicas para aprender?",
        "a": "Su aplicación es intencionada, consciente y controlada. Las estrategias requieren de la aplicación de conocimientos metacognitivos, de lo contrario se confundirán con simples técnicas para aprender."
    },
    {
        "id": 1074,
        "q": "¿Cómo define Jhonson y Jhonson el conflicto?",
        "a": "Los conflictos se producen continuamente. Son una parte normal e inevitable de la vida escolar."
    },
    {
        "id": 1075,
        "q": "¿Qué instancia es responsable de la tenencia, custodia y validación de la información académica, centralizadores de calificaciones, registro de certificados de egreso, certificado de capacitación, datos estadísticos y actas de defensa?",
        "a": "Las Direcciones Departamentales de Educación, a través de las Subdirecciones de Educación Superior de Formación Profesional."
    },
    {
        "id": 1076,
        "q": "Gimeno Sacristán caracteriza las dimensiones estructurantes del currículum, como la duración de los tramos horarios, la separación por asignaturas o la menor carga horaria de ciertas materias, como «opciones no necesarias que podrían haber sido de otra manera, pero con un importante valor o poder estructurante». ¿Qué diferencia estructural expresa esta afirmación respecto a la forma en que dichas dimensiones son percibidas por quienes actúan en la práctica curricular?",
        "a": "Las dimensiones estructurantes son percibidas en la práctica como condiciones naturales e inevitables de la escolarización, cuando en realidad son construcciones históricas contingentes que ejercen un poder regulador sobre lo que es posible hacer en el currículum."
    },
    {
        "id": 1077,
        "q": "Rodrigo, estudiante de 14 años, ha sido víctima de agresión reiterada por parte de un docente durante dos años consecutivos. Su tutora reporta que presenta dificultades severas en lectura y cálculo, ha comenzado a consumir alcohol los fines de semana y muestra una percepción de sí mismo profundamente negativa. El equipo de orientación debe priorizar la derivación según la categoría de consecuencia que compromete directamente su capacidad de aprendizaje formal. ¿Cuál de las siguientes opciones identifica correctamente dicha consecuencia y la distingue de las demás categorías presentes en el caso?",
        "a": "Las dificultades severas en lectura y cálculo constituyen la consecuencia cognitiva que compromete directamente su capacidad de aprendizaje formal, diferenciándose del consumo de alcohol —conductual— y de la autopercepción negativa —emocional—."
    },
    {
        "id": 1078,
        "q": "Clemente Linuesa sostiene que el centro educativo, al comportarse como un organismo, debe tomar decisiones curriculares que lo afectan globalmente. ¿Cuál de las siguientes opciones describe con mayor precisión la naturaleza de estas decisiones y las condiciones que las sostienen?",
        "a": "Las decisiones curriculares del centro son colectivas y sistémicas, abarcando desde metodología hasta evaluación institucional, y se sostienen en el desarrollo profesional docente, la coordinación con otros centros y la relación con la comunidad."
    },
    {
        "id": 1079,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que el clima educativo definido explícitamente en todo proyecto curricular, como proyecto colectivo, no es ajeno a:",
        "a": "Las coordenadas organizativas en las que éste se desarrolla."
    },
    {
        "id": 1080,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” indica que es evidente que un buen clima escolar auspicia los aprendizajes sociales y escolares, compromete y sostiene la participación y colaboración del profesorado y del alumnado en las tareas académicas, permite la implicación de las familias en la gestión del centro. ¿Qué reduce además?",
        "a": "Las constantes tensiones de la convivencia."
    },
    {
        "id": 1081,
        "q": "La experiencia pedagógica documentada en el texto de Innovación Educativa muestra que el conflicto intercomunal, la marginalidad, la contaminación ambiental y la ausencia de apoyo estatal configuran el escenario en que surge la trayectoria pedagógica de la escuela, ¿qué relación existe entre este tipo de contextos adversos y el surgimiento de innovaciones disruptivas?",
        "a": "Las condiciones desfavorables actúan como catalizadores de rupturas pedagógicas profundas, interpelando al profesorado a construir respuestas pertinentes desde adentro sin replicar modelos ajenos ni aguardar mandatos superiores."
    },
    {
        "id": 1082,
        "q": "En la preparación de un escenario de aprendizaje, ¿qué condiciones deben preverse en sus fases para lograr una sensibilización socioafectiva y cognoscitiva que motive al estudiante?",
        "a": "Las condiciones iniciales de desarrollo y de cierre que propicien un ambiente psicológico adecuado para sostener el interés por aprender"
    },
    {
        "id": 1083,
        "q": "¿Qué medio utilizan actualmente las computadoras para procesar información, y qué tecnologías alternativas se encuentran aún en etapa de investigación?",
        "a": "Las computadoras procesan información mediante señales eléctricas; la luz y mecanismos bioquímicos similares a los organismos vivos son alternativas aún en etapa temprana de investigación."
    },
    {
        "id": 1084,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” indica que es necesario que las actitudes y esperanzas del profesorado sobre su alumnado sean positivas y objetivas en base a:",
        "a": "Las competencias reales del mismo"
    },
    {
        "id": 1085,
        "q": "Una estudiante de una unidad educativa del área rural trabaja durante el día y solo puede conectarse por las noches. Prefiere estudiar a su propio ritmo, pero ocasionalmente necesita consultar dudas en tiempo real con su docente. ¿Qué modalidad de enseñanza y aprendizaje se adapta mejor a su situación y cuáles son sus características definitorias?",
        "a": "La modalidad a distancia, porque permite una mayor flexibilidad general, se puede estudiar en cualquier momento según posibilidades propias, consultando dudas con herramientas síncronas como videoconferencia o teléfono."
    },
    {
        "id": 1086,
        "q": "El Escalafón Nacional del Servicio de Educación determina las normas que rigen:",
        "a": "Las promociones de categoría y los ascensos jerárquicos."
    },
    {
        "id": 1087,
        "q": "Perrenoud sostiene que el fracaso escolar, lo mismo que la excelencia académica, son «puras derivaciones del funcionamiento de las escuelas». Esta afirmación presupone que:",
        "a": "Las categorías de éxito y fracaso no describen atributos intrínsecos de los sujetos sino efectos producidos por la forma en que la institución organiza el currículum, los tiempos y las exigencias normativas."
    },
    {
        "id": 1088,
        "q": "Según el régimen de estudio, ¿qué ofertas académicas pueden ser implementadas los días sábados y domingos?",
        "a": "Únicamente los Cursos de Capacitación."
    },
    {
        "id": 1089,
        "q": "La “Guía para la Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo” menciona que el riesgo, en una situación de maltrato, está determinado por diversos factores vinculados a:",
        "a": "Las características de las NNA, al ambiente donde desarrollan su vida cotidiana, al tipo de maltrato, a las características de quien ejerce el maltrato, así como a su continuidad o finalización."
    },
    {
        "id": 1090,
        "q": "¿Qué tienen un impacto extraordinario sobre el clima relacional (sobre todo entre el profesorado y el equipo directivo de los centros, y el profesorado entre sí) así como en el clima educativo y el clima de pertenencia?",
        "a": "Las prácticas educativas y la gestión escolar"
    },
    {
        "id": 1091,
        "q": "Respecto a las responsabilidades de los estudiantes en materia de prevención de la violencia, ¿cuál de las siguientes condiciones debe cumplirse obligatoriamente cuando los estudiantes desarrollan acciones de prevención de la violencia desde su perspectiva al interior de la unidad educativa?",
        "a": "Las acciones no deben generar erogación de recursos económicos y deben realizarse en coordinación con los centros y gobiernos estudiantiles."
    },
    {
        "id": 1092,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que la educación que inspira la Cultura de Paz dirigida al proceso de reglamentación de los conflictos interpersonales se fundamenta, en los principios de la no-violencia, respecto de uno mismo y de los otros, así como en:",
        "a": "La voluntad de encontrar soluciones mutuamente aceptadas."
    },
    {
        "id": 1093,
        "q": "Según Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», en una actividad desarrollada en una unidad educativa de Sucre, estudiantes asumen el papel de poetas quechuas y redactan textos literarios expresando ideas sobre la identidad boliviana mediante la palabra escrita y hablada. ¿Qué inteligencia múltiple están desarrollando y cuál es su característica definitoria?",
        "a": "La verbal-lingüística, que se relaciona con la palabra hablada, lectura, ideas, pensamientos o poesía."
    },
    {
        "id": 1094,
        "q": "Según el libro de Marilina Rotger, ¿Por qué se recomienda que el maestro incorpore formas evaluativas que vayan más allá de las pruebas escritas y orales tradicionales?",
        "a": "Los instrumentos alegres, dinámicos y novedosos generan un clima emocional positivo que potencia el aprendizaje."
    },
    {
        "id": 1095,
        "q": "Montaigne sostiene que «el hombre no es más que remiendo y mezcolanza» y que «la cualidad más universal es su diversidad». Incorporada esta idea al análisis de la escolaridad obligatoria, la consecuencia que se deriva es que:",
        "a": "La variación intraindividual e interindividual no es una perturbación del orden escolar sino su condición constitutiva, de modo que tratar de someterla a un patrón normativo supone contrariar la naturaleza misma del sujeto."
    },
    {
        "id": 1096,
        "q": "¿Quiénes tienen la obligación de proseguir con diligencia la tramitación de la causa penal hasta su conclusión?",
        "a": "El máximo ejecutivo y el asesor legal principal"
    },
    {
        "id": 1097,
        "q": "¿De quién depende la Unidad de Auditoría Interna y cuál es su condición para formular y ejecutar su programa de actividades?",
        "a": "La máxima autoridad ejecutiva de la entidad, sea ésta colegiada o no, formulando y ejecutando con total independencia el programa de sus actividades."
    },
    {
        "id": 1098,
        "q": "Tres estudiantes de diferentes cursos presentan simultáneamente: baja autoestima, resistencia a opinar frente a adultos, desconocimiento de sus derechos sobre su cuerpo y ausencia de habilidades para resolver conflictos de forma pacífica. ¿Cuál es la falla estructural en la implementación de las medidas preventivas en la unidad educativa?",
        "a": "La unidad educativa no articuló de forma integrada las medidas de fortalecimiento del pensamiento crítico, la autoestima, la educación sobre el cuerpo, que deben implementarse de manera complementaria."
    },
    {
        "id": 1099,
        "q": "¿Qué instancia realiza el seguimiento, supervisión y evaluación permanente a los Institutos de carácter fiscal, de convenio y privado?",
        "a": "La Dirección Departamental de Educación, a través de la Subdirección de Educación Superior de Formación Profesional."
    },
    {
        "id": 1100,
        "q": "¿Qué institución tiene a su cargo el Sistema Integrado de Información Anticorrupción y de Recuperación de Bienes del Estado - SIIARBE, según la normativa de lucha contra la corrupción?",
        "a": "El Ministerio de Transparencia Institucional y Lucha Contra la Corrupción, como institución responsable de centralizar e intercambiar información en el ámbito de la lucha contra la corrupción."
    },
    {
        "id": 1101,
        "q": "¿Quién es el responsable de contrastar los formularios impresos con el Sistema de Información de Institutos?",
        "a": "La Dirección Departamental de Educación."
    },
    {
        "id": 1102,
        "q": "Gimeno Sacristán distingue dos planos en los que se manifiesta la variabilidad constitutiva del ser humano. Respecto al plano intraindividual, ¿qué afirmación refleja con mayor precisión su planteamiento?",
        "a": "La unicidad del sujeto deriva de ser una combinación irrepetible de condiciones no del todo estáticas, que varían con el tiempo y las circunstancias."
    },
    {
        "id": 1103,
        "q": "La contribución de Eggleston al concepto de currículum real consiste en señalar que:",
        "a": "Emerge de la confrontación hora a hora entre las estrategias del maestro y las de los alumnos, con o sin compromiso explícito."
    },
    {
        "id": 1104,
        "q": "¿Qué transferencia no se permitirá en la ejecución de los presupuestos de gastos de las entidades?",
        "a": "La transferencia de gastos de inversión o excedentes de ingresos presupuestados a gastos de funcionamiento."
    },
    {
        "id": 1105,
        "q": "Que Lorenzo Luzuriaga tradujera en 1944 «The child and the curriculum» de Dewey como «El niño y el programa escolar» permite inferir que:",
        "a": "La tradición hispanohablante carecía del concepto de currículum como campo autónomo, reduciendo su sentido al de programa de contenidos."
    },
    {
        "id": 1106,
        "q": "¿Qué oposición puede inferirse entre la tradición anglosajona del currículum y la perspectiva que defiende Sacristán?",
        "a": "La tradición anglosajona enfatiza el control externo y la secuenciación disciplinar, frente a una visión procesual, crítica y emancipadora."
    },
    {
        "id": 1107,
        "q": "¿Qué caracteriza las formas que asume la tensión entre educación y TIC y qué ejemplo ilustra uno de sus retos particulares?",
        "a": "La tensión tiene varias manifestaciones cuya raíz está en la estructura de cada una, generando retos particulares, como la lucha entre el hombre y la máquina."
    },
    {
        "id": 1108,
        "q": "La variedad intraindividual se distingue de la interindividual en que la primera alude fundamentalmente a:",
        "a": "La inconstancia en el modo de ser y comportarse de una persona a lo largo de su propia trayectoria vital."
    },
    {
        "id": 1109,
        "q": "¿Cuál es el factor principal que impulsa la construcción del entramado informacional en la sociedad del conocimiento, surgida a partir de los procesos de mundialización y globalización?",
        "a": "La tecnología"
    },
    {
        "id": 1110,
        "q": "¿Qué tendencia global refleja la relación entre las máquinas y el ser humano en la producción y distribución de bienes y servicios?",
        "a": "Aunque las máquinas no han sustituido por completo al ser humano, la tendencia global muestra una reducción anual de al menos 6% de puestos laborales por sustitución de máquinas, ejecutando estas al menos un tercio de las labores de producción."
    },
    {
        "id": 1111,
        "q": "El caso presentado en el texto de Innovación Educativa une a la comunidad para exigir sus derechos sobre el acceso al agua potable y genera compromiso con la conservación de recursos, ¿cuál es el indicador que mejor garantiza la sostenibilidad de esta innovación educativa?",
        "a": "La pertinencia contextual y el compromiso comunitario, porque el proyecto nació de una necesidad real de la comunidad, orientó su misión pedagógica a la conservación de recursos y al acceso al agua potable, generando apropiación colectiva como base de su permanencia."
    },
    {
        "id": 1112,
        "q": "Perrenoud describe el trabajo escolar como una actividad impuesta, fragmentada y bajo supervisión constante. ¿Qué consecuencia estructural se deriva de estas condiciones sobre la disposición del estudiante hacia el aprendizaje?",
        "a": "La ausencia de autonomía y significado intrínseco en las tareas escolares orienta la energía del alumno hacia la gestión del cumplimiento mínimo, antes que hacia la búsqueda genuina de logro."
    },
    {
        "id": 1113,
        "q": "¿Quién es el responsable de elaborar el Acta de visita de seguimiento realizada a los Institutos de carácter fiscal, de convenio y privado?",
        "a": "La Subdirección de Educación Superior de Formación Profesional."
    },
    {
        "id": 1114,
        "q": "¿Qué instancia es responsable de realizar las inspecciones oculares periódicas para verificar y evaluar la infraestructura, mobiliario y equipamiento de los Institutos?",
        "a": "La Dirección Departamental de Educación, a través de la Subdirección de Educación Superior de Formación Profesional."
    },
    {
        "id": 1115,
        "q": "¿Qué debe prohibirse de manera expresa como requisito para el acceso a un puesto de trabajo, ascenso, salario o estabilidad en el empleo?",
        "a": "La presentación de pruebas de laboratorio, prueba de VIH/SIDA, de embarazo, entrevistas sobre decisiones o situaciones personales u otras que afecten una decisión más allá de la idoneidad."
    },
    {
        "id": 1116,
        "q": "Respecto al rol de la sociedad y del individuo frente a las desigualdades informativas y de calidad de vida, ¿cuál de las siguientes afirmaciones refleja correctamente el planteamiento del texto?",
        "a": "La sociedad actual exige una visión holística donde cada quien sea tomado en cuenta; es compromiso de cada uno de nosotros promover el cambio por aquellos que resultan disminuidos en su personalidad, y la individualidad tendrá que transcurrir hacia una colectividad más eficaz, menos absolutista, más solidaria, con mayor conciencia."
    },
    {
        "id": 1117,
        "q": "Un docente de secundaria constata que sus estudiantes comprenden los contenidos de cada asignatura de forma aislada pero son incapaces de relacionarlos entre disciplinas. Desde el planteamiento de Gimeno Sacristán sobre la naturaleza histórica del currículum, ¿cómo se puede interpretar esta situación?",
        "a": "La situación es una expresión de la paradoja estructural del currículum: al desempeñar su función organizadora refuerza simultáneamente las fronteras entre disciplinas, produciendo un conocimiento fragmentado en los estudiantes."
    },
    {
        "id": 1118,
        "q": "Según la perspectiva de innovación educativa, uno de sus aspectos fundamentales señala que el proceso innovador “convierte al sujeto de ellas en un creador y productor de saber, quien reorienta y orienta su quehacer”, ¿qué condición hace posible este resultado?",
        "a": "La sistematización constante del aprendizaje en la práctica genera en el sujeto la capacidad reflexiva de construir y resignificar el conocimiento desde su experiencia cotidiana."
    },
    {
        "id": 1119,
        "q": "Comenius, en la «Didáctica Magna», afirma que la diversidad de cualidades entre los hombres «no es sino exceso o defecto de la armonía natural». Esta formulación implica que:",
        "a": "Las diferencias individuales constituyen desviaciones respecto de un estado de equilibrio compartido, lo que justifica orientar la educación hacia fines y contenidos comunes para todos."
    },
    {
        "id": 1120,
        "q": "El objetivo del proceso de apoyo educativo a estudiantes con discapacidad visual busca garantizar el acceso, permanencia y conclusión de procesos educativos de estudiantes con Discapacidad Visual matriculados o inscritos en los diferentes niveles y modalidades de las Unidades, Centros e Instituciones Educativas, ¿a través de cuál de las siguientes acciones se concreta dicho objetivo?",
        "a": "La implementación de estrategias tiflológicas para el logro de la independencia y autonomía personal y social."
    },
    {
        "id": 1121,
        "q": "Clemente Linuesa propone cuatro criterios para la selección y organización de contenidos curriculares en el ámbito del aula. ¿Cuál de las siguientes opciones caracteriza con mayor precisión la naturaleza de estos criterios y su función en el diseño curricular?",
        "a": "Los criterios de selección de contenidos configuran un marco para la discusión, no una aplicación técnica, porque seleccionar contenidos implica una opción cultural que involucra posicionamientos epistemológicos, socioideológicos, psicológicos y pedagógicos."
    },
    {
        "id": 1122,
        "q": "Según la definición de violencia sexual realizada por UNICEF un adulto para involucrar a una niña o un niño en actividades sexuales o erotizadas de cualquier índole, puede utilizar las siguientes estrategias:",
        "a": "La seducción, el chantaje, la amenaza, la manipulación psicológica y/o el uso de fuerza física."
    },
    {
        "id": 1123,
        "q": "¿Qué instituciones reconoce el Ministerio de Educación como instituciones académicas de formación artística?",
        "a": "La Sede Central y Subsedes de un CECA o IFA, autorizadas conforme a normativa vigente."
    },
    {
        "id": 1124,
        "q": "En una institución educativa, ¿qué fuerzas internas operan casi automáticamente contra las posibilidades de cambio significativo?",
        "a": "Sus principios, su visión, su patrón de relaciones de poder, su sentido de la tradición y lo que parece correcto, natural y adecuado dentro de la institución."
    },
    {
        "id": 1125,
        "q": "Según Biehl (2003), mencionado en el texto “Convivencia escolar y resolución pacífica de conflictos” ¿cuáles son las tres actuaciones que deben incluirse en cualquier proyecto integral de Educación para la Cultura de Paz?",
        "a": "La revisión curricular con perspectiva de género, el control y prevención de la violencia entre iguales y la puesta en marcha de programas educativos de resolución pacífica de los conflictos."
    },
    {
        "id": 1126,
        "q": "Un maestro aplica repetición constante con sus estudiantes, pero estos no logran integrar ni relacionar los contenidos con su experiencia previa. Si analizamos esta situación a partir de lo sostenido por Sáez López en su libro  «Estilos de aprendizaje y métodos de enseñanza», ¿qué condición del aprendizaje está siendo ignorada y cómo se la define?",
        "a": "La pertenencia y configuración, pues el aprendizaje es una reestructuración de la experiencia y si la experiencia no es reestructurada, no hay aprendizaje ni integración posible."
    },
    {
        "id": 1127,
        "q": "Cuando en el Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP – Modalidad Indirecta, habla sobre la “capacidad de orientar en la resolución de conflictos en instituciones o comunidades educativas renuentes a la inclusión de personas con discapacidad visual”, se hace referencia a:",
        "a": "El perfil de maestro de apoyo"
    },
    {
        "id": 1128,
        "q": "Durante los periodos de cambio educativo, ¿qué fenómeno organizacional se intensifica y se hace más visible tanto en los espacios formales como informales de la vida escolar?",
        "a": "La interacción micropolítica, que se intensifica y se vuelve más perceptible en los espacios formales e informales de la escuela cuando se producen procesos de transformación."
    },
    {
        "id": 1129,
        "q": "Los estudiantes no siempre están motivados internamente, por lo que a veces necesitan una motivación localizada en las condiciones ambientales que crea el docente. Si los maestros decidieran recompensar de manera extrínseca, se puede crear una dependencia de estas recompensas. Por eso, ¿cuál es uno de los mayores detractores del uso de recompensas extrínsecas en el aula?",
        "a": "La dependencia estudiantil de las recompensas extrínsecas representa uno de los mayores detractores de su uso en el aula."
    },
    {
        "id": 1130,
        "q": "El uso dominante del libro de texto en las aulas provoca que la cultura transmitida por la escuela sea considerada empobrecida. ¿Cuál es el mecanismo específico que explica ese empobrecimiento?",
        "a": "Su formato conduce inevitablemente a la depauperación cultural al monopolizar la mediación de la información escolar."
    },
    {
        "id": 1131,
        "q": "Según el marco de innovación educativa de la UNESCO, ¿qué condición distingue a una innovación que impacta genuinamente en la calidad educativa de una mejora escolar incremental?",
        "a": "La articulación sostenible entre prácticas pedagógicas, estructuras institucionales y condiciones del sistema en conjunto."
    },
    {
        "id": 1132,
        "q": "La normativa boliviana sobre protección económica para personas con discapacidad grave y muy grave establece una renta solidaria sujeta a condiciones y exclusiones específicas. ¿Cuál de las siguientes afirmaciones describe correctamente tanto el alcance como las condiciones de exclusión previstas para dicha renta?",
        "a": "La renta solidaria se establece a favor de personas con discapacidad grave y muy grave, a ser regulada por norma reglamentaria, excluyendo de su percepción tanto a las personas con discapacidad visual como a quienes desempeñen funciones en el sector público."
    },
    {
        "id": 1133,
        "q": "Gimeno Sacristán concluye que «no habrá cambio significativo de cultura en la escolarización si no se alteran los mecanismos que producen la intermediación cultural didáctica» y que «toda propuesta cultural será siempre mediatizada por esos mecanismos». ¿Qué implicación se deriva directamente de esta afirmación para la valoración de cualquier propuesta de renovación curricular?",
        "a": "Una propuesta curricular no puede valorarse únicamente por la calidad o pertinencia de los contenidos que propone, sino por lo que esos contenidos pueden llegar a convertirse una vez sometidos a los mecanismos de intermediación que los modelan."
    },
    {
        "id": 1134,
        "q": "¿Qué consecuencia jurídica genera el ejercicio de la jurisdicción coactiva fiscal por parte de autoridades administrativas u otras no competentes?",
        "a": "La nulidad de pleno derecho de sus actuaciones y resoluciones."
    },
    {
        "id": 1135,
        "q": "Según Jares (1999), citado en el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿qué debe plantearse un proyecto de centro de educación para la Cultura de Paz?",
        "a": "La relación que existe entre las cuestiones organizativas -la estructura, las normas, el estilo de dirección, la participación, la comunicación, el sistema de relaciones, el tratamiento de los conflictos, la evaluación institucional, etc.- y los valores y objetivos que dicho proyecto persigue."
    },
    {
        "id": 1136,
        "q": "Un maestro inicia su clase de matemáticas con reconocimiento emocional y construcción de confianza antes de presentar contenidos algebraicos. ¿Qué mecanismo neurobiológico justifica con mayor precisión esta secuencia pedagógica?",
        "a": "La corteza prefrontal"
    },
    {
        "id": 1137,
        "q": "¿Cuál de los siguientes criterios identifica con mayor precisión las condiciones imprescindibles para que los maestros logren transformar sus creencias, sus concepciones y sus prácticas en el proceso de cambio educativo?",
        "a": "El compromiso y la voluntad del propio personal docente, como requisitos que emergen desde el interior del quehacer formativo para renovar sus referentes y su actuación pedagógica."
    },
    {
        "id": 1138,
        "q": "¿Cuál es el principal factor que inhibe la neuroplasticidad en estudiantes que aprenden en un clima de aula hostil?",
        "a": "La producción sostenida de glucocorticoides por hiperactivación del eje neuroendocrino, que suprime la potenciación sináptica duradera en el hipocampo."
    },
    {
        "id": 1139,
        "q": "Un maestro quiere asegurarse de que los contenidos trabajados en clase no se olviden con el paso del tiempo. ¿Cuál es el proceso neurológico mediante el cual la información pasa de un registro temporal a convertirse en un recuerdo estable y duradero?",
        "a": "La consolidación"
    },
    {
        "id": 1140,
        "q": "De acuerdo con McCarthy y Still (1993) en el texto de Innovación Educativa, ¿qué factor relacionado con el apoyo institucional externo contribuyó de manera específica a la implementación exitosa de la reestructuración escolar?",
        "a": "El apoyo político de las autoridades educativas hacia los nuevos programas de desarrollo basado en la propia escuela."
    },
    {
        "id": 1141,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” establece que un programa de intervención debe tener en consideración cada uno de los elementos que conforman el clima escolar, sin olvidar que la calidad de éste depende directamente de las prácticas educativas y de:",
        "a": "La propia organización formal e informal del centro"
    },
    {
        "id": 1142,
        "q": "Un diseño curricular basado en competencias promueve una preparación profesional adaptable y orientada a resultados, articulando los procesos formativos desde múltiples ambientes de aprendizaje que reproducen condiciones propias del ejercicio laboral. ¿Qué característica distintiva define estructuralmente este tipo de propuesta pedagógica?",
        "a": "La promoción de una preparación polivalente y transferible sustentada en resultados, donde los procesos formativos se construyen desde distintos entornos que acercan al estudiante a situaciones propias del ejercicio profesional real."
    },
    {
        "id": 1143,
        "q": "El principio de comprensividad encierra una característica que opera simultáneamente como su mayor fortaleza y como el argumento más frecuente en su contra. ¿Cuál es esa característica?",
        "a": "La promoción de la mezcla social entre estudiantes de distintas condiciones en un mismo espacio educativo."
    },
    {
        "id": 1144,
        "q": "¿Cuál es la diferencia de innovar e inventar?",
        "a": "Porque la finalidad formativa, el campo disciplinar y los patrones culturales de cada territorio otorgan significados propios e intransferibles a cada proceso de cambio."
    },
    {
        "id": 1145,
        "q": "El texto “Convivencia escolar y resolución pacífica de conflictos” señala que la violencia y la resolución de los conflictos en la escuela tienen una gran tradición pedagógica y evolución sobre todo en:",
        "a": "La segunda mitad del siglo XX, aunque su implantación y reconocimiento en los sistemas educativos ha sido reciente."
    },
    {
        "id": 1146,
        "q": "En el ámbito de la Innovación Educativa, ¿qué diferencia a una innovación de tipo disruptiva de una innovación de tipo incremental dentro de una institución educativa?",
        "a": "La primera transforma de raíz las estructuras vigentes del sistema; la segunda perfecciona y ajusta las prácticas que ya se encuentran en funcionamiento."
    },
    {
        "id": 1147,
        "q": "¿Qué diferencia establece Perrenoud entre la cultura escolar y la cultura de la organización escolar?",
        "a": "La primera supera al sistema de enseñanza mientras que la segunda es interna a la institución y necesaria para ejercer el oficio de estudiante."
    },
    {
        "id": 1148,
        "q": "Un ministerio de educación decide priorizar matemáticas y ciencias en el currículo, reduciendo horas de humanidades y ciencias sociales. Según Sacristán, ¿qué fenómeno explica esta tendencia?",
        "a": "La vocacionalización del currículo, que selecciona contenidos por su valor de aplicación."
    },
    {
        "id": 1149,
        "q": "Gimeno Sacristán organiza el análisis del currículum en torno a tres preguntas articuladas: qué contenidos entran y cuáles quedan fuera, qué valor tiene lo seleccionado para distintos individuos y grupos, y al servicio de qué intereses opera el poder regulador que mueve esa selección. ¿Qué afirmación sintetiza mejor el argumento central que el autor desarrolla mediante esta arquitectura de preguntas?",
        "a": "El currículum es un sistema de opciones no neutras cuyo análisis exige interrogar simultáneamente qué se selecciona, a quiénes beneficia diferencialmente esa selección y qué intereses orientan el poder que la regula, pues ninguna de estas dimensiones es suficiente por sí sola."
    },
    {
        "id": 1150,
        "q": "Según las condiciones que aseguran un buen aprendizaje, ¿qué ocurre cuando la experiencia no es reestructurada en el proceso de aprendizaje?",
        "a": "El alumno no puede integrar y organizar las experiencias en ciertas relaciones requeridas, por lo tanto el aprendizaje no tendrá lugar."
    },
    {
        "id": 1151,
        "q": "Una institución privada especializada en atención a personas con discapacidad opera sin acreditación formal y sus protocolos de atención no han sido validados técnicamente. Al mismo tiempo, un centro de educación especial de la misma región continúa funcionando bajo su modelo tradicional sin avanzar hacia nuevas modalidades de atención comunitaria. Un especialista en políticas públicas sostiene que el CONALPEDIS carece de atribuciones para intervenir en ambas situaciones porque se trata de entidades privadas y especializadas fuera de su ámbito de acción. La valoración técnica más precisa sobre dicha postura es:",
        "a": "La postura es incorrecta en ambos casos: el CONALPEDIS tiene atribuciones para fiscalizar y regular entidades privadas mediante mecanismos de acreditación e implantación de protocolos técnicos y científicos, y para orientar la transformación gradual de centros especializados hacia centros de recursos de rehabilitación conforme a la política mundial de rehabilitación basada en la comunidad."
    },
    {
        "id": 1152,
        "q": "La “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo” expresa que cualquier persona de la comunidad educativa que tenga conocimiento de una situación de violencia contra una niña, un niño o adolescente, cometido por sus familiares, debe informar inmediatamente a:",
        "a": "La maestra, al maestro o la autoridad institucional."
    },
    {
        "id": 1153,
        "q": "Según el neuroaprendizaje, ¿qué factor, al aumentar los niveles de cortisol, provoca una disminución en el rendimiento y el desempeño en el aprendizaje?",
        "a": "El estrés"
    },
    {
        "id": 1154,
        "q": "¿En qué consiste el modelo bidimensional de la enseñanza efectiva de Joseph Lowman?",
        "a": "La investigación sobre la dinámica del aula, el aprendizaje de los estudiantes y la buena enseñanza."
    },
    {
        "id": 1155,
        "q": "En el enfoque de profundización del conocimiento, el docente desplaza el centro de la acción pedagógica desde la enseñanza hacia el aprendizaje. ¿Cuál de las siguientes opciones describe correctamente el principio que sustenta ese desplazamiento y la competencia docente que le corresponde en el uso de las TIC?",
        "a": "El estudiante es el centro; el docente gestiona comunidades de indagación, orienta la resolución colaborativa de problemas reales y emplea las TIC como soporte de la construcción colectiva del saber."
    },
    {
        "id": 1156,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿junto a qué otras formas integra la memoria episódica el aprendizaje explícito?",
        "a": "La perceptiva y la semántica, siendo las tres formas de aprendizaje y recuperación explícita reconocidas."
    },
    {
        "id": 1157,
        "q": "Desde la neurociencia educativa, el cerebro humano posee una capacidad fundamental que le permite procesar, codificar, almacenar, evocar, registrar y comunicar información. ¿Cómo se define esta capacidad?",
        "a": "La memoria"
    },
    {
        "id": 1158,
        "q": "Según la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, el delito de estupro consiste en que una persona logra tener relaciones sexuales con otra menor de edad (14 a 17 años) mediante engaño y seducción. ¿Cuál es la pena máxima de prisión?",
        "a": "La pena máxima es de 6 años de privación de libertad."
    },
    {
        "id": 1159,
        "q": "Una maestra de secundaria, al iniciar cada clase, comparte con sus estudiantes su genuina pasión por la materia, celebra los descubrimientos y transmite alegría al enseñar. Según los principios psicológicos de la enseñanza, ¿qué efecto primordial genera esta actitud docente en el proceso de aprendizaje?",
        "a": "El entusiasmo es motivador y ayudará a los estudiantes a disfrutar de la clase."
    },
    {
        "id": 1160,
        "q": "Los estudios sobre reestructuración escolar identifican condiciones que se asocian directamente con una implementación exitosa en los centros educativos, ¿cuáles son estas condiciones?",
        "a": "La participación política de los docentes en la toma de decisiones escolares, la autonomía del aula y la crítica reflexiva sobre el currículum y la instrucción."
    },
    {
        "id": 1161,
        "q": "La Directora o el Director Departamental de Educación tiene entre sus responsabilidades participar en espacios interinstitucionales e intersectoriales, como establecer acuerdos y alianzas con instituciones especializadas en prevención de la violencia. ¿En qué se diferencian ambas responsabilidades según lo establecido en el protocolo?",
        "a": "La participación en espacios interinstitucionales e intersectoriales, busca fortalecer la implementación de estrategias de prevención y atención de denuncias; los acuerdos y alianzas con instituciones especializadas permiten acciones de impacto."
    },
    {
        "id": 1162,
        "q": "Gimeno Sacristán identifica en el currículum una paradoja constitutiva que define su naturaleza desde sus orígenes hasta la actualidad. ¿Cuál de las siguientes opciones describe con mayor precisión en qué consiste esta paradoja y por qué el autor la considera estructural?",
        "a": "La paradoja consiste en que el currículum cumple una función unificadora al articular episodios aislados de la enseñanza, pero simultáneamente refuerza las fronteras entre disciplinas, siendo esta tensión constitutiva desde sus orígenes y vigente hasta la actualidad."
    },
    {
        "id": 1163,
        "q": "El principio de Equidad de Género definido en la Ley N° 223 establece que se equiparan las diferencias en razón de género existentes entre hombres y mujeres con discapacidad, reconociendo...",
        "a": "la orientación sexual e identidad de género, en el marco del ejercicio de los derechos reconocidos en la Constitución Política del Estado."
    },
    {
        "id": 1164,
        "q": "Un docente demuestra dominio sobre las metas educativas, los procesos de evaluación y la distribución de temas a lo largo de los distintos niveles de formación. ¿Qué tipo de conocimiento profesional está poniendo en práctica este docente?",
        "a": "El conocimiento curricular, que implica la comprensión integral del plan de estudios respecto a los propósitos formativos, los criterios de evaluación y los contenidos organizados por niveles educativos."
    },
    {
        "id": 1165,
        "q": "¿Qué organismo internacional considera que la violencia contra niñas, niños y adolescentes es un problema de salud pública?",
        "a": "La Organización Mundial de la Salud (OMS)."
    },
    {
        "id": 1166,
        "q": "En la práctica docente, los conocimientos valorados, las actividades posibles y el ritmo de progreso del aprendizaje son elementos estructurados según Gimeno Sacristán. ¿Cuál de los siguientes corresponde a una dimensión estructurante que los condiciona?",
        "a": "La organización disciplinar de los contenidos y la acotación del tiempo escolar."
    },
    {
        "id": 1167,
        "q": "¿Qué factores confluyen en el fortalecimiento del pensamiento inclusivo dentro de una comunidad educativa?",
        "a": "La variedad de seres sociales que conforman una comunidad, la caracterización de quienes se consideran próximos, y la suma de elementos como clase social, edad, lengua, procedencia, historia y religión."
    },
    {
        "id": 1168,
        "q": "Los métodos de enseñanza dependen de una serie de factores tales como el nivel de desarrollo de los estudiantes, las metas, la intención, los objetivos, el contenido y el entorno, incluyendo el tiempo. En este contexto, los métodos docentes se caracterizan por:",
        "a": "Las decisiones relativas a los procedimientos en los procesos pedagógicos que se relacionan con los elementos curriculares."
    },
    {
        "id": 1169,
        "q": "El siguiente enunciado: “reconoce la importancia primordial de la familia, incluida la familia extensa, en la atención y protección del niño y en la prevención de la violencia. Sin embargo, reconoce también que la mayor parte de los actos de violencia se produce en el ámbito familiar y que, por consiguiente, es preciso adoptar medidas de intervención y apoyo cuando los niños sean víctimas de las dificultades y penurias sufridas o generadas en las familias”, extraído de la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, corresponde a:",
        "a": "El Comité de los Derechos del Niño (CRC, en su Observación General N° 13 de 2011), recomendación h."
    },
    {
        "id": 1170,
        "q": "La teoría del Aprendizaje por Ensayo y Error considera que para aprender o enseñar, primero debemos identificar los aspectos que hay que recordar y los que pueden ser olvidados. Podemos tratar de fortalecer los vínculos o conexiones entre los estímulos y las respuestas de aquellas cosas que hay que recordar. Para recordar: ¿qué mecanismos sugiere utilizar el conductismo?",
        "a": "La repetición, el ejercicio y la recompensa."
    },
    {
        "id": 1171,
        "q": "¿Por qué dentro del neuroaprendizaje el objetivo de una enseñanza exitosa es controlar el flujo de información que pasa a través del SARA de los estudiantes?",
        "a": "El contenido relevante genera redes cognitivas prefrontales convirtiéndose en conocimiento."
    },
    {
        "id": 1172,
        "q": "¿Qué crítica articulan Gimeno Sacristán y Feito Alonso al modelo evaluativo dominante?",
        "a": "La norma graduada genera artificialmente el fracaso escolar; el aprendizaje por competencias es una alternativa pertinente."
    },
    {
        "id": 1173,
        "q": "¿Qué documento deben presentar los Institutos ante la Dirección Departamental de Educación para obtener autorización de otorgación de Certificados de Egreso?",
        "a": "La nómina de las y los estudiantes que hayan culminado sus estudios y vencido la modalidad de graduación."
    },
    {
        "id": 1174,
        "q": "¿Qué debe contener el dictamen de responsabilidad civil emitido por el Contralor General?",
        "a": "La relación de hechos, actos u omisiones que causaron daño económico al Estado, fundamentación legal, cuantificación del posible daño e identificación del presunto o presuntos responsables."
    },
    {
        "id": 1175,
        "q": "¿Qué concepto describe la capacidad del sistema nervioso de reorganizarse funcionalmente?",
        "a": "La neuroplasticidad, que permite al tejido nervioso modificar su arquitectura sináptica en respuesta a estímulos."
    },
    {
        "id": 1176,
        "q": "El currículum real se aparta inevitablemente de la intención docente porque:",
        "a": "Las resistencias de los alumnos y los avatares de la práctica impiden el desarrollo exacto de lo previsto."
    },
    {
        "id": 1177,
        "q": "El hecho de que el maestro tenga siempre abierto un margen de negociación sobre lo que puede enseñar implica que:",
        "a": "El currículum real nunca constituye la realización estricta de una intención del maestro, pues escapa en parte a su control."
    },
    {
        "id": 1178,
        "q": "El énfasis que el docente otorga a ciertos dominios del currículum por encima de otros responde, según Perrenoud, a:",
        "a": "Una preferencia consciente o inconsciente que se expresa en el modo de organizar el tiempo escolar."
    },
    {
        "id": 1179,
        "q": "¿Cuál de las siguientes conductas constituye una falta muy grave en el ámbito educativo?",
        "a": "El cambio de máquinas de escribir, equipos, mobiliario, herramientas y otros nuevos o en buen estado, por otros usados o en mal estado."
    },
    {
        "id": 1180,
        "q": "En el documento “Convivencia escolar y resolución pacífica de conflictos”, Cortina (1997), siguiendo a Kant, examina la resolución de los conflictos desde tres aspectos o imperativos. El principio de prudencia implica:",
        "a": "Valorar las consecuencias de las posibles salidas del conflicto para obtener la felicidad personal, pero también el bienestar de los demás."
    },
    {
        "id": 1181,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, para el profesorado, la cooperación supone también un cambio del papel que le tenía asignado la escuela tradicional, jerárquica y competitiva, de modo que la aceptación de este nuevo modelo supone reconocer:",
        "a": "La existencia de distintas formas de adquirir y construir los conocimientos, la valoración del trabajo en equipo y la necesidad de un aumento en la motivación a través de la ayuda mutua."
    },
    {
        "id": 1182,
        "q": "Cuando Aristóteles sostiene en la Política que «la educación debe necesariamente ser única y la misma para todos», el argumento que subyace a esa afirmación presupone que:",
        "a": "La existencia de un fin común a toda la ciudad hace que la responsabilidad sobre la educación no pueda dejarse al arbitrio de cada familia sin traicionar ese fin colectivo."
    },
    {
        "id": 1183,
        "q": "¿En qué consiste la principal limitación del modelo de formación docente que separa una fase de especialización disciplinar seguida de un curso pedagógico breve?",
        "a": "La naturaleza de la formación didáctica del profesorado aún no está esclarecida, pues el curso pedagógico breve no logra articular de forma suficiente la especialización disciplinar recibida en las facultades."
    },
    {
        "id": 1184,
        "q": "¿Qué formas de codificación de la experiencia humana se mencionan como medios para comunicar y transmitir la cultura?",
        "a": "La palabra, la imagen, el dibujo, otros signos y la codificación sonora, esta última de aparición más tardía."
    },
    {
        "id": 1185,
        "q": "Los factores que facilitan el aprendizaje organizativo requieren de la implementación de una estrategia adecuada, cuya intervención se fundamentará en los siguientes principios:",
        "a": "La concienciación de los diferentes estamentos comunitarios, la optimización del conocimiento, la emergencia y consolidación de una cultura genuina, la sensibilización de la comunidad educativa y el impulso de la formación permanente."
    },
    {
        "id": 1186,
        "q": "¿Qué aspectos deben tomarse en cuenta al momento de diseñar las experiencias de aprendizaje para los alumnos, considerando que el aprendizaje es un proceso natural?",
        "a": "Los distintos estilos de aprendizaje, las distintas percepciones y personalidades de los alumnos, dado que no todos aprenden de la misma manera."
    },
    {
        "id": 1187,
        "q": "Según los estudios sobre estilos y métodos de aprendizaje, la motivación del maestro es un elemento dinámico que interactúa con múltiples dimensiones del proceso educativo. ¿Qué relación existe entre el comportamiento del estudiante y la motivación del maestro, y cómo influye esta interacción en la calidad del proceso de enseñanza y aprendizaje?",
        "a": "El comportamiento del estudiante actúa como un factor bidireccional: un comportamiento positivo y participativo puede fortalecer la motivación del maestro, mientras que conductas disruptivas o desinteresadas pueden desalentarla, afectando directamente la calidad del proceso educativo, dado que los estudiantes tienden a emular a sus docentes."
    },
    {
        "id": 1188,
        "q": "Hasta las últimas décadas del siglo XX, la innovación estuvo restringida al terreno de la tecnología y los avances técnicos. ¿Qué fenómeno logró ampliar su comprensión hacia otros ámbitos?",
        "a": "La globalización, que amplió la comprensión de la innovación más allá del terreno tecnológico y técnico, retomando la visión integral que J. Schumpeter ya había planteado desde el primer tercio del siglo XX."
    },
    {
        "id": 1189,
        "q": "Durante una clase de matemáticas, un estudiante resuelve un problema difícil y experimenta una intensa sensación de satisfacción. Desde la neurociencia, ¿cuál es el mecanismo por el que este momento fortalece la consolidación del aprendizaje a nivel sináptico?",
        "a": "La dopamina activa el circuito de recompensa cerebral."
    },
    {
        "id": 1190,
        "q": "Se sostiene que el principio de comprensividad es especialmente polémico cuando se aplica a la enseñanza secundaria. La razón específica que explica esa mayor conflictividad en ese nivel respecto de la primaria es que:",
        "a": "El principio de comprensividad se respeta universalmente en primaria pero no es universal en secundaria, donde coexiste con tradiciones selectivas que lo cuestionan."
    },
    {
        "id": 1191,
        "q": "Según la neurociencia, ¿qué controla el sistema límbico, compuesto por estructuras primitivas situadas entre el tronco cerebral y la corteza?",
        "a": "Las emociones."
    },
    {
        "id": 1192,
        "q": "Desde la dimensión sistémica de la innovación educativa, ¿qué distingue a una experiencia innovadora de un proceso de mejora escolar convencional en una institución educativa?",
        "a": "La mejora escolar corrige deficiencias educativas puntuales; la innovación articula cultura, finalidad y política."
    },
    {
        "id": 1193,
        "q": "Un maestro impulsa cambios en su práctica pedagógica que luego se replican en otras instituciones y eventualmente influyen en la política educativa nacional. De las siguientes opciones, ¿cuál describe con mayor precisión la naturaleza de este proceso?",
        "a": "La capacidad de la innovación de incidir en aspectos estructurales de la educación a nivel de aula, de institución educativa y de sistema escolar, mejorando su calidad."
    },
    {
        "id": 1194,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿cómo define Uranga la mediación?",
        "a": "La mediación es una extensión de la negociación. El mediador o el equipo mediador representa a una tercera parte neutral que facilita el proceso de negociación."
    },
    {
        "id": 1195,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿cómo define Boqué la mediación?",
        "a": "La mediación es arte y ciencia al mismo tiempo, en tanto integra componentes creativos y herramientas para hacerlos aflorar, siempre dentro de un cultivo eminentemente ético en donde son abolidas las jerarquías y la comunicación pasa a ser horizontal."
    },
    {
        "id": 1196,
        "q": "Según los datos presentados por Gimeno Sacristán sobre el uso de la biblioteca escolar en secundaria, ¿qué conclusión pedagógica se puede extraer respecto a la formación en competencias de búsqueda y uso de la información del alumnado?",
        "a": "Los estudiantes quedan sistemáticamente privados de oportunidades curriculares para desarrollar la capacidad de aprender a aprender mediante fuentes diversas."
    },
    {
        "id": 1197,
        "q": "¿Qué inteligencia múltiple se relaciona con la autorreflexión y la metacognición?",
        "a": "La intrapersonal, que se despierta en situaciones de introspección requiriendo conocimiento de aspectos internos del yo."
    },
    {
        "id": 1198,
        "q": "Según el “Manual de resolución de problemas”, ¿cuál es la estrategia que nos ayuda a profundizar sobre la causa raíz del problema y ampliar la perspectiva respecto al mismo?",
        "a": "Los cinco porqués"
    },
    {
        "id": 1199,
        "q": "Una maestra diseña una actividad donde sus estudiantes asumen diferentes roles sociales para debatir sobre el acceso al agua potable en comunidades rurales, abriendo la discusión del tema desde distintos puntos de vista. Según Sáez López, ¿qué técnica está aplicando y cuáles son sus características definitorias?",
        "a": "El aprendizaje basado en problemas, donde los estudiantes trabajan en grupos para sintetizar contenidos y resolver problemas que parten la realidad, favoreciendo el estilo Pragmático."
    },
    {
        "id": 1200,
        "q": "Según Sáez, en el marco de los estilos y métodos de aprendizaje, ¿cuál es la limitación epistemológica más significativa de los modelos unimodales de estilos de aprendizaje — aquellos que clasifican al estudiante en una única categoría predominante— frente a los modelos multimodales, y qué consecuencia tiene esta limitación para el diseño de la enseñanza?",
        "a": "Los modelos unimodales reducen la complejidad cognitiva del estudiante a una categoría fija y estática que ignora la capacidad del sujeto de activar distintos modos de procesamiento según las demandas de la tarea y el contexto; esta limitación obliga al docente a superar la lógica clasificatoria y diseñar una enseñanza que estimule la flexibilidad cognitiva del estudiante, potenciando su capacidad de aprender desde múltiples modalidades."
    },
    {
        "id": 1201,
        "q": "¿Qué fenómeno describe la dinámica generada por la liberalización de los mercados y de las sociedades de regímenes totalitarios en relación con la información y el conocimiento?",
        "a": "La información y el conocimiento comenzaron a circular libremente con apenas restricciones, potenciados por herramientas cada vez más poderosas y eficaces."
    },
    {
        "id": 1202,
        "q": "La teoría del Aprendizaje por Ensayo y Error destaca que al tratar de aprender un comportamiento correcto, uno se esfuerza de muchas maneras y puede cometer tantos errores antes de conseguir un éxito casual. Aprendemos a través de un mecanismo de ensayo y error. Thorndike planteó algunas leyes del aprendizaje. ¿Cuáles son estas leyes del aprendizaje?",
        "a": "La ley de preparación (es decir, uno puede aprender si uno está listo para aprender), la ley del ejercicio (es decir, el aprendizaje necesita repetición o ejercicio) y la ley de efecto (es decir, el efecto o consecuencia decide el destino de su aprendizaje)."
    },
    {
        "id": 1203,
        "q": "John Stuart Mill sugería que «la naturaleza humana no es una máquina que se construye según un modelo y dispuesta a hacer exactamente el trabajo que le sea prescrito, sino un árbol que necesita crecer y desarrollarse por todos los lados». Trasladada esta metáfora al debate sobre la escolaridad obligatoria, lo que queda cuestionado es:",
        "a": "La legitimidad de una organización escolar que estandariza tareas, ritmos y niveles de exigencia idénticos para todos, ignorando que el desarrollo humano no sigue una línea de progreso uniforme ni prescrita."
    },
    {
        "id": 1204,
        "q": "Según Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», ¿cuál es el concepto clave en los procesos pedagógicos?",
        "a": "Los estilos de aprendizaje con importancia en procesos pedagógicos."
    },
    {
        "id": 1205,
        "q": "Según la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, si bien existe un amplio marco normativo que garantiza el respeto y la defensa de los derechos de todos los actores que conviven en la unidad educativa, es necesario reconocer que la ley no es suficiente y resulta imprescindible unir esfuerzos de los actores sociales y de las instituciones responsables de proteger a:",
        "a": "Nunca existe la opción de mediación con la persona agresora, sin importar quién sea (papá, mamá, amistad, pariente, maestra, maestro, autoridad, etc.), tampoco existe la posibilidad de llegar a arreglos extrajudiciales."
    },
    {
        "id": 1206,
        "q": "Cuando un maestro ejerce castigos físicos sobre un estudiante como medida disciplinaria. ¿Qué autoridad es competente de conocer el hecho?",
        "a": "La Jueza o el Juez Público en materia de Niñez y Adolescencia es la autoridad competente a denuncia de la Defensoría de la Niñez y Adolescencia."
    },
    {
        "id": 1207,
        "q": "Durante la planificación de un módulo, un docente identifica que sus estudiantes presentan distintos niveles de conocimiento previo, que el contenido exige desarrollo de habilidades procedimentales y que el tiempo disponible es limitado. Considerando estos elementos de manera simultánea, ¿qué criterio debe priorizar al seleccionar la estrategia de enseñanza más pertinente?",
        "a": "La coherencia entre los objetivos de aprendizaje, el perfil del estudiante y el contexto formativo, garantizando que el procedimiento seleccionado favorezca el logro de las capacidades previstas."
    },
    {
        "id": 1208,
        "q": "La tensión consustancial al proyecto “El agua asunto vital para todos” descrita en el texto de Innovación Educativa emergió precisamente durante el proceso de investigación porque:",
        "a": "La investigación sobre los imaginarios comunitarios de los niños expuso el conflicto entre el saber mágico-religioso local y el conocimiento científico sistemático que la escuela debe generar."
    },
    {
        "id": 1209,
        "q": "De acuerdo con el documento sobre TIC en la formación docente, ¿qué sustenta el cambio hacia un aprendizaje centrado en el estudiante?",
        "a": "La investigación sobre el aprendizaje cognitivo y la convergencia de diversas teorías acerca de la naturaleza y el contexto del aprendizaje."
    },
    {
        "id": 1210,
        "q": "Estudiantes de La Paz expresan conocimientos sobre la cultura aimara mediante danza y drama corporal. ¿Qué inteligencia están desarrollando?",
        "a": "La corporal-kinestésica, relacionada con el movimiento físico y el conocimiento del cuerpo."
    },
    {
        "id": 1211,
        "q": "El texto “Convivencia escolar y resolución pacífica de conflictos” expone que en la actualidad la conflictividad escolar se ha convertido en una de las preocupaciones mayores de todas las sociedades. Lejos de considerar este fenómeno como inevitable, frente al cual la sociedad, y en concreto las instituciones educativas, no pueden más que responder con medidas duras de choque para reducir sus efectos, existe abundante literatura que se orienta hacia:",
        "a": "La prevención como una de las mejores formas de solución, centrándose no sólo y únicamente en las consecuencias del fenómeno, sino sobretodo en sus causas."
    },
    {
        "id": 1212,
        "q": "Según Bonafé (2003), citado en el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿en qué se sostiene la intervención de un tercero?",
        "a": "La intervención de un tercero se sostiene en primer lugar porque ésta se centra en favorecer la comunicación y no sobre las relaciones de poder. Y en segundo lugar, porque el mediador tiene como objetivo crear o recrear un círculo de comunicación entre las personas para establecer o restablecer lazos sociales."
    },
    {
        "id": 1213,
        "q": "En el marco de la innovación tecnológica aplicada a la formación técnica, el modelo TPACK plantea que una integración pedagógica efectiva de las TIC requiere que el docente domine de manera articulada tres dimensiones del conocimiento. ¿Cuál de las siguientes opciones describe correctamente la intersección central de ese modelo?",
        "a": "La intersección entre el conocimiento tecnológico, el pedagógico y el del contenido disciplinar, que permite al docente diseñar estrategias donde la tecnología transforma significativamente el aprendizaje técnico."
    },
    {
        "id": 1214,
        "q": "En la didáctica de la matemática aplicada a la formación técnica, existen distintas interpretaciones sobre su naturaleza y propósito. ¿Cuál de las siguientes opciones describe con mayor precisión la interpretación que concibe la didáctica matemática como una disciplina orientada a transformar el saber sabio en saber enseñable, adecuando el conocimiento matemático a las condiciones y posibilidades del contexto formativo?",
        "a": "La interpretación transposición didáctica, que reconoce que el conocimiento matemático debe ser recontextualizado y transformado por el docente para hacerlo accesible, significativo y funcionalmente aplicable en el contexto técnico del estudiante."
    },
    {
        "id": 1215,
        "q": "Según el neuroaprendizaje, la ansiedad, el temor o la angustia son emociones que pueden ser provocadas por:",
        "a": "La evaluación"
    },
    {
        "id": 1216,
        "q": "Estudiantes de Huarina asumen diferentes funciones en un equipo para resolver un conflicto hídrico. ¿Qué componente cooperativo aplican?",
        "a": "La interdependencia positiva, pues uno no puede tener éxito si todos los demás no lo tienen."
    },
    {
        "id": 1217,
        "q": "Existe una serie de acciones que se pueden realizar en la contención emocional de emergencia, pero también se deben considerar ciertas recomendaciones sobre acciones que no son adecuadas, una de ellas es:",
        "a": "Vulnerar la confidencialidad de quien realiza el relato."
    },
    {
        "id": 1218,
        "q": "Según la teoría de las inteligencias múltiples aplicada al pensamiento inclusivo, ¿cuál de las siguientes afirmaciones describe correctamente la naturaleza de la inteligencia?",
        "a": "La inteligencia no se desarrolla, sino que es algo innato que adquirimos desde el nacimiento; de acuerdo al contexto cultural del individuo pueden desarrollarse habilidades que favorecen su posibilidad para adaptarse al medio ambiente, distinguiéndose varias clases de ella."
    },
    {
        "id": 1219,
        "q": "Una maestra observa que ciertos estudiantes destacan al identificar secuencias numéricas en fenómenos climáticos del altiplano, resuelven retos nuevos con facilidad y reconocen estructuras abstractas en situaciones cotidianas. Si aplicamos el planteamiento de Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», ¿qué inteligencia múltiple manifiestan estos estudiantes y cuál es su característica definitoria?",
        "a": "La inteligencia lógico-matemática, llamada pensamiento científico, que trata del razonamiento inductivo y deductivo, los números y el reconocimiento de patrones abstractos."
    },
    {
        "id": 1220,
        "q": "El Comité de los Derechos del Niño recomienda la prohibición del castigo corporal porque constituye una violación a la integridad física, la dignidad humana e igual protección ante la ley. ¿Cuáles son los derechos fundamentales que amenaza en su ejercicio?",
        "a": "La educación, el desarrollo, la salud y la supervivencia."
    },
    {
        "id": 1221,
        "q": "¿Cuál de las siguientes afirmaciones describe con mayor precisión las implicaciones del principio de competencia digital docente cuando la tecnología se integra de manera natural al proceso pedagógico?",
        "a": "El docente incorpora los recursos digitales como mediadores transparentes, subordinando su uso a los objetivos pedagógicos y no a la novedad del artefacto tecnológico."
    },
    {
        "id": 1222,
        "q": "Considerando que la incorporación de todos los estudiantes al sistema educativo representa una aspiración de reciente construcción teórica y normativa, ¿cuál es la afirmación que mejor describe el propósito de este principio en relación con la educación y la sociedad?",
        "a": "La inclusión educativa es un concepto relativamente nuevo, aspiración de todos los sistemas educativos, que pretende que la educación contribuya al desarrollo de sociedades más justas, democráticas y solidarias."
    },
    {
        "id": 1223,
        "q": "Los factores que facilitan el aprendizaje organizativo deben apoyarse en principios que orienten los procesos de mejora institucional. ¿Cuál de las siguientes opciones presenta correctamente la secuencia de principios de intervención propuestos para facilitar dicho aprendizaje?",
        "a": "La concienciación de los diferentes estamentos comunitarios, la optimización del conocimiento, la emergencia y consolidación de una cultura genuina, la sensibilización de la comunidad educativa y el impulso de la formación permanente."
    },
    {
        "id": 1224,
        "q": "En el marco del sentido del currículum en la enseñanza obligatoria, ¿qué principio pedagógico subyace a la idea de que abordar en profundidad un problema específico desarrolla capacidades transferibles a otros contextos?",
        "a": "La selección rigurosa y el tratamiento intensivo de saberes favorece la generalización del pensamiento analítico."
    },
    {
        "id": 1225,
        "q": "¿Cuáles son los criterios orientadores que identificó Bruner para guiar el desarrollo de la instrucción en el marco de su concepción del aprendizaje como proceso activo?",
        "a": "La instrucción debe estar relacionada con las experiencias y contextos que hacen que el alumno esté deseoso y sea capaz de aprender (disposición); debe estar estructurada de modo que el alumno pueda aprehenderla fácilmente (organización espiral); y debe estar diseñada para facilitar la extrapolación y/o para completar las brechas de conocimiento (llegando más allá de la información dada)."
    },
    {
        "id": 1226,
        "q": "En el proceso de contrarreferencia tras la derivación de un caso de violencia, ¿qué combinación de obligaciones de la instancia receptora, del director o directora y de la Dirección Departamental de Educación refleja correctamente el protocolo de prevención y atención en casos de violencia?",
        "a": "La instancia receptora comunica al director o directora las acciones realizadas y sus recomendaciones; el director o directora garantiza las adecuaciones curriculares cuando el profesional competente recomiende el retorno a clases; y la Dirección Departamental de Educación toma las acciones de seguimiento y monitoreo que correspondan."
    },
    {
        "id": 1227,
        "q": "En el ámbito de la innovación, ¿qué condiciones son necesarias para que esta se genere y cuál es el papel que desempeña la ciencia y la tecnología en dicho proceso?",
        "a": "La innovación puede generarse en cualquier lugar sin necesitar tecnología avanzada, aunque la ciencia y tecnología bien orientadas potencian el número de innovaciones y su impacto en la sociedad."
    },
    {
        "id": 1228,
        "q": "¿De qué manera la ciencia y la tecnología inciden en el proceso de innovación?",
        "a": "La innovación puede generarse en cualquier lugar sin necesitar ciencia y tecnología avanzada, sin embargo la ciencia y la tecnología bien orientadas son incomparables en el número de innovaciones que pueden propiciar y en el impacto social y económico que cada una puede tener."
    },
    {
        "id": 1229,
        "q": "En el debate sobre innovación y educación aplicada a la formación técnica, ¿cuál de las siguientes afirmaciones describe con mayor precisión la relación entre cambio tecnológico e innovación pedagógica?",
        "a": "La innovación pedagógica genuina en la formación técnica se produce cuando el cambio tecnológico se articula con una transformación intencional de los métodos, roles y objetivos formativos, generando aprendizajes que no serían posibles sin esa articulación."
    },
    {
        "id": 1230,
        "q": "¿Qué relación entre la innovación educativa y la tradición, diferenciándola de una concepción que la reduce a simple novedad?",
        "a": "La innovación produce modificaciones materiales y simbólicas, por lo que mantiene una relación profunda con la tradición."
    },
    {
        "id": 1231,
        "q": "¿Qué característica de la innovación educativa explica que sus efectos no surgen de manera espontánea, sino que requieren planificación y organización deliberada?",
        "a": "La innovación genera un proceso de autopoiesis que reorganiza el sistema, haciendo visible el carácter abierto de cualquier institución."
    },
    {
        "id": 1232,
        "q": "Una de las funciones de la innovación educativa en relación con las instituciones escolares es su capacidad de transformar su dinámica interna, ¿en qué consiste dicha transformación y qué tipo de sistemas construye?",
        "a": "La innovación flexibiliza a las instituciones educativas, las dinamiza evitando su parálisis y contribuye a construir sistemas menos individualistas y más participativos."
    },
    {
        "id": 1233,
        "q": "Desde una comprensión profunda de la innovación educativa como proceso social, ¿cuál es la relación que establece con la tradición y qué tipo de modificaciones produce?",
        "a": "La innovación educativa, como proceso social, mantiene una relación profunda con la tradición, produciendo modificaciones materiales y simbólicas que van más allá de la simple introducción de lo nuevo."
    },
    {
        "id": 1234,
        "q": "Según el documento de Innovación Educativa, ¿cuál de las siguientes opciones describe con mayor precisión el alcance de la innovación en la práctica educativa?",
        "a": "La innovación implica la alteración del sentido de las prácticas educacionales corrientes y la creación de un nuevo orden; supone además asumir una intencionalidad y la movilización de los actores educativos hacia ese propósito."
    },
    {
        "id": 1235,
        "q": "¿Qué componente resulta esencial para que la planificación e implementación de la tecnología en los programas de formación docente sea exitosa?",
        "a": "La visión y el liderazgo, que constituyen un componente esencial y requieren tanto del liderazgo como del apoyo de las autoridades de la institución."
    },
    {
        "id": 1236,
        "q": "¿Qué aspectos fiscaliza y supervisa permanentemente el Ministerio de Educación, a través de la Dirección General de Educación Superior Técnica, Tecnológica, Lingüística y Artística, a los Institutos de carácter fiscal, de convenio y privado?",
        "a": "El funcionamiento legal, desarrollo de actividades institucionales, académicas, administrativas y de aplicación de la normativa vigente."
    },
    {
        "id": 1237,
        "q": "Según el texto “Convivencia escolar y resolución pacífica de conflictos”, en la mejora de la convivencia no puede olvidarse la micropolítica de los centros en cuanto organización, ya que, como sostiene Ball (1989), son territorios donde:",
        "a": "La influencia interpersonal, el compromiso y las negociaciones entre bastidores llegan a ser tan importantes como los procesos formales."
    },
    {
        "id": 1238,
        "q": "¿Cuál de las siguientes conductas constituye una falta grave para el personal docente del sistema educativo plurinacional?",
        "a": "Participar o encubrir la extensión de calificaciones a cambio de sumas de dinero, especie o servicios."
    },
    {
        "id": 1239,
        "q": "Según el texto de Innovación Educativa, ¿qué dinámicas propias del proceso de cambio intensifican y visibilizan la interacción micropolítica en los ámbitos formales e informales de la vida escolar?",
        "a": "La ambigüedad, la falta de certeza, la incertidumbre y la complejidad de metas que caracterizan los periodos de transformación."
    },
    {
        "id": 1240,
        "q": "¿Qué aspectos comprende la actualización necesaria para incorporar las tecnologías digitales de manera integral en los sistemas educativos?",
        "a": "Un desafío pedagógico para incorporar las TIC al aula y en el currículo escolar, políticas públicas de reforma sistémica y aseguramiento de la infraestructura tecnológica en cobertura y calidad."
    },
    {
        "id": 1241,
        "q": "¿Cuál de las siguientes tensiones se reconoce como irresuelta en la educación obligatoria?",
        "a": "La coexistencia del ideal igualador con una institución que estructuralmente jerarquiza y excluye."
    },
    {
        "id": 1242,
        "q": "El arte de enseñar requiere un alto grado de flexibilidad y adaptación que va mucho más allá de la aplicación mecánica de los procedimientos paso a paso. Por eso es importante:",
        "a": "La comprensión adecuada, la apreciación y la aplicación de los principios psicológicos de la enseñanza que ayudan a los profesores en la mejora general del proceso de enseñanza aprendizaje."
    },
    {
        "id": 1243,
        "q": "Bolívar concibe cuatro condiciones para configurar el centro docente como una organización que aprende (OA): dos externas (cambios en el entorno y en la política educativa) y dos internas (experiencia anterior de desarrollo e historia y cultura escolar). Desde estos presupuestos, es necesario que el centro esté inmerso en programas integrados y compartidos de desarrollo. ¿Qué presupone esto?",
        "a": "Una aceptación compartida de visiones y necesidades que van provocando un cambio en la cultura escolar, que, al institucionalizarse, facilitan el desarrollo de la organización."
    },
    {
        "id": 1244,
        "q": "Desde la perspectiva de la innovación educativa, ¿cuál de los siguientes factores de tipo institucional contribuye de manera determinante a fortalecer y sostener los procesos de cambio al interior de los centros escolares?",
        "a": "La generación de espacios de reflexión colectiva sobre la práctica docente, que construyen acuerdos compartidos y consolidan una visión común de la transformación pedagógica."
    },
    {
        "id": 1245,
        "q": "Según el documento “Convivencia escolar y resolución pacífica de conflictos”, ¿cuáles son los tres elementos esenciales que propone Galtung para adoptar el enfoque humanista e integrador?",
        "a": "La reparación, la reconciliación y la resolución del conflicto."
    },
    {
        "id": 1246,
        "q": "De acuerdo a la definición establecida en el Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP – Modalidad Indirecta, la Evaluación Multidisciplinaria permite:",
        "a": "La creación de condiciones para el desarrollo curricular y recorrido educativo más pertinente."
    },
    {
        "id": 1247,
        "q": "Dentro de los Niveles múltiples de identificación y prevención, citados en el documento “Convivencia escolar y resolución pacífica de conflictos”, el segundo nivel (relacional) del modelo ecológico indaga:",
        "a": "El modo en el que las relaciones sociales cercanas aumentan el riesgo de convertir a una persona en víctima o responsable de actos violentos."
    },
    {
        "id": 1248,
        "q": "De acuerdo con la “Guía de Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuáles son las herramientas para detectar violencia contra niñas, niños y adolescentes?",
        "a": "La observación de indicadores o factores de riesgo presentes y aclarar sospechas."
    },
    {
        "id": 1249,
        "q": "¿Qué debe gestionar el Rectorado ante la DDE correspondiente respecto a la normativa interna del Instituto?",
        "a": "La aprobación de toda normativa interna que mejore la gestión académica y administrativa del Instituto."
    },
    {
        "id": 1250,
        "q": "Según Sacristán, la escuela, estructurada con anterioridad a la aceptación del modelo democrático, eligió el camino del sometimiento de lo diverso a la norma homogeneizadora. Lo que esta elección revela sobre la relación entre institución escolar y democracia es que:",
        "a": "La lógica interna de la institución escolar precedió y condicionó su adaptación al modelo democrático, de modo que la tolerancia a la diversidad no fue un principio fundacional sino una exigencia sobrevenida."
    },
    {
        "id": 1251,
        "q": "Según el marco de Innovación Educativa de la UNESCO, ¿qué condiciones se vinculan directamente con la reestructuración exitosa de un centro educativo?",
        "a": "La eficacia política del profesorado, la autonomía en el aula y la reflexión crítica sobre el currículum."
    },
    {
        "id": 1252,
        "q": "Según Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», un docente observa que sus estudiantes memorizan contenidos pero no modifican su conducta ni resuelven situaciones nuevas. Considerando la definición de aprendizaje y las condiciones planteadas por Biggs, ¿qué elemento fundamental está ausente en este proceso?",
        "a": "Un cambio de comportamiento relativamente permanente producido por la experiencia, junto a una base de conocimientos bien estructurada, contexto motivacional adecuado, actividad del estudiante e interacción con otros."
    },
    {
        "id": 1253,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que “En clave de Paz” es un programa pedagógico realizado en el año 2000 por:",
        "a": "La Fundación Catalana de Tiempo Libre."
    },
    {
        "id": 1254,
        "q": "Gimeno Sacristán sostiene que el currículum no se limita a organizar los contenidos de la enseñanza, sino que opera como un dispositivo de regulación que actúa en múltiples niveles simultáneos. ¿Cuál de las siguientes opciones caracteriza con mayor precisión los niveles en que opera esta función reguladora y su alcance sobre la escolaridad?",
        "a": "El currículum regula simultáneamente los contenidos que se enseñan, el tiempo escolar mediante grados secuenciados y a las personas mismas, constituyéndose además en el estándar que define el éxito, el fracaso y lo normal dentro de la escolaridad."
    },
    {
        "id": 1255,
        "q": "Al planear, autorregular y evaluar el aprendizaje, ¿cuál es el elemento central que el docente debe identificar en el estudiante para determinar la eficacia de las estrategias de enseñanza en su rendimiento académico?",
        "a": "El conocimiento que tiene el estudiante de las estrategias y la eficacia de las mismas en su rendimiento académico"
    },
    {
        "id": 1256,
        "q": "Gimeno Sacristán señala que, incluso en sistemas comprensivos de secundaria obligatoria, la escuela recurre a múltiples mecanismos para excluir a los estudiantes menos académicos. ¿Qué concepto sintetiza con mayor precisión la crítica de fondo que el autor formula frente a esta realidad?",
        "a": "La escuela reproduce desigualdades estructurales al convertir diferencias individuales en criterios de exclusión institucional."
    },
    {
        "id": 1257,
        "q": "¿Qué propósito formativo central buscaba desarrollar en los estudiantes el proyecto sobre experiencias transformadoras descrito en el texto de Innovación Educativa?",
        "a": "La capacidad indagatoria y laboral, junto con una formación ética que genere actitudes de cuidado, racionalización y prevención hacia el agua y el entorno natural."
    },
    {
        "id": 1258,
        "q": "De acuerdo con el marco «Las TIC en la Formación Docente» de la UNESCO, ¿qué afirmación describe mejor el enfoque que debe orientar la formación tecnológica de los futuros docentes?",
        "a": "La formación debe articular el uso de la tecnología a un contexto pedagógico que le otorgue sentido y dirección educativa"
    },
    {
        "id": 1259,
        "q": "A partir del análisis de Oriol Homs sobre la transformación del trabajo postfordista, ¿qué implicación curricular de mayor profundidad se puede inferir para la formación de trabajadores en la actualidad?",
        "a": "El currículo debe orientarse hacia la iniciativa, la resolución de imprevistos y el trabajo colaborativo, superando la lógica de la previsibilidad y la jerarquía."
    },
    {
        "id": 1260,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿a qué llama Goleman “la escolarización de las emociones”?",
        "a": "El aprendizaje de habilidades sociales y comunicativas como el desarrollo de la inteligencia emocional."
    },
    {
        "id": 1261,
        "q": "Una nueva línea de estudio en la enseñanza de disciplinas específicas examina de qué modo la incorporación de la tecnología en la práctica docente produce cambios profundos en tres dimensiones del quehacer educativo. ¿Cuáles son esas tres dimensiones que se ven transformadas según dicha perspectiva?",
        "a": "La forma de concebir la pedagogía, de estructurar la didáctica y de comprender las teorías que explican cómo se produce el aprendizaje, al integrar la tecnología en la apropiación del saber disciplinar por parte del docente."
    },
    {
        "id": 1262,
        "q": "Las experiencias educativas innovadoras no surgen de manera aislada, sino que obedecen a la interacción de diversos elementos, ¿cuáles son algunos de esos elementos que las configuran?",
        "a": "La finalidad formativa, el campo del saber y los patrones culturales propios de un territorio, que articulados entre sí dan forma al cambio pedagógico genuino."
    },
    {
        "id": 1263,
        "q": "El siguiente enunciado: “Garantizar el acceso, permanencia y conclusión de procesos educativos de estudiantes con discapacidad visual matriculados o inscritos en los diferentes niveles y modalidades de Unidades, Centros e Instituciones Educativas de los Subsistemas de Educación Regular, Educación Superior y el Ámbito de Educación Alternativa, fiscales, de convenio o privadas, a través de la implementación de estrategias tiflológicas para el logro de la independencia y autonomía personal y social”, hace referencia a:",
        "a": "El objetivo del proceso de apoyo educativo a estudiantes con discapacidad visual."
    },
    {
        "id": 1264,
        "q": "Según la Ley N° 223, respecto al deber de consumir la medicación prescrita establecido en el Artículo sobre Deberes de las Personas con Discapacidad, ¿quiénes son los responsables de garantizar el cumplimiento de este deber?",
        "a": "La familia o el Estado, para lograr la estabilidad en la salud de la persona con discapacidad."
    },
    {
        "id": 1265,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos” se menciona que el modelo ecológico de prevención, se caracteriza a la violencia por:",
        "a": "Su complejidad como por la multitud de sus rasgos o elementos constitutivos."
    },
    {
        "id": 1266,
        "q": "¿Qué implicación tiene para la democracia el hecho de que la escuela no forme sistemáticamente en la expresión oral y el debate, según lo que se desprende del planteamiento de Feito?",
        "a": "La ciudadanía queda inhabilitada para participar en decisiones colectivas cada vez más complejas porque carece de las herramientas comunicativas que esa participación exige."
    },
    {
        "id": 1267,
        "q": "Una comisión de evaluación pedagógica visita una unidad educativa y constata lo siguiente: los docentes implementan actividades de deconstrucción de estereotipos de género y se realizan talleres de resolución pacífica de conflictos. Sin embargo, los estudiantes desconocen que su cuerpo es su territorio privado, no identifican situaciones de riesgo y, ante situaciones de violencia, no recurren a ningún adulto de confianza. La comisión concluye que existe una falla específica y localizable en el sistema preventivo. ¿Cuál es la falla correctamente identificada?",
        "a": "La falla radica en que no se implementaron las medidas de enseñanza sobre el cuerpo, diferenciación de caricias, autoprotección ante el peligro, ni el fortalecimiento de la autoestima para que el estudiante recurra a alguien de confianza en caso de ser víctima de violencia."
    },
    {
        "id": 1268,
        "q": "Entre los factores que explican la variación en la implementación del currículum real de un docente a otro, el texto destaca especialmente:",
        "a": "Los valores, las imágenes de la cultura y de la excelencia que cada maestro porta y moviliza en su práctica cotidiana."
    },
    {
        "id": 1269,
        "q": "¿Qué argumento emplea «Diseñar el currículum» para justificar la revisión periódica de los programas educativos?",
        "a": "La exigencia de incorporar tanto el avance científico como las necesidades sociales emergentes."
    },
    {
        "id": 1270,
        "q": "¿Cuál de las siguientes situaciones se ajusta a lo que Perrenoud denomina «trabajo de aficionado»?",
        "a": "La etapa de preparación, en que el maestro construye un escenario de actividades sin poder prever con exactitud su desarrollo."
    },
    {
        "id": 1271,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje. Las emociones y el aprendizaje”, ¿A través de qué podemos tener aprendizajes de larga y corta duración?",
        "a": "Diferentes capacidades e inteligencias."
    },
    {
        "id": 1272,
        "q": "Un maestro observa que sus estudiantes se esfuerzan más y recuerdan mejor los contenidos cuando la clase incluye momentos de logro reconocido y retroalimentación positiva inmediata. ¿Qué principio neurológico explica esta relación entre reconocimiento del logro y mejora del aprendizaje?",
        "a": "La activación del circuito de recompensa."
    },
    {
        "id": 1273,
        "q": "En el análisis de la organización escolar desde una perspectiva micropolítica, ¿cuáles son los aspectos centrales que se han señalado como constitutivos de esta dimensión?",
        "a": "El poder y la influencia, la diversidad de valores y metas, y los procesos cooperativos y conflictivos en la organización escolar."
    },
    {
        "id": 1274,
        "q": "Se afirma que los profesores parecen haber perdido la capacidad profesional de trabajar con la diversidad si ésta no es reducida por algún tipo de clasificación de estudiantes. Lo que esta pérdida revela sobre la mentalidad pedagógica dominante es que:",
        "a": "La diversidad natural de los estudiantes solo puede ser gestionada pedagógicamente cuando ha sido previamente reducida mediante categorías que hagan manejable la heterogeneidad."
    },
    {
        "id": 1275,
        "q": "Desde la neurociencia educativa, ¿qué enunciado refleja con mayor precisión el funcionamiento del sistema nervioso central en relación con los procesos cognitivos?",
        "a": "La reorganización neuronal ante nuevas experiencias ocurre durante toda la existencia del individuo."
    },
    {
        "id": 1276,
        "q": "¿Qué tensión implícita recorre el texto de Feito entre la lógica de la escuela heredada del siglo XIX y las exigencias que plantea la sociedad contemporánea?",
        "a": "La escuela forma para la estabilidad laboral y la acumulación de saberes disciplinares en un contexto que demanda movilidad, adaptación permanente y capacidad de trabajar con otros."
    },
    {
        "id": 1277,
        "q": "El Escalafón Nacional del Servicio de Educación, entre sus finalidades, establece dos escalas orientadas al desarrollo de la carrera docente y administrativa. ¿Cuáles son estas dos escalas?",
        "a": "La Escala de Categoría, que regula la progresión según tiempo de servicio y formación, y la Escala Jerárquica, que ordena los cargos de responsabilidad y autoridad en el sistema educativo."
    },
    {
        "id": 1278,
        "q": "¿Qué efecto produjo la era industrial en la educación y de qué manera condicionó la formación de los estudiantes?",
        "a": "La mecanización de la era industrial se manifestó en la educación a través de una serie de rutinas que, más allá de su valor formativo, moldeaban la actitud de los estudiantes hacia el tipo de sociedad que tendrían que vivir."
    },
    {
        "id": 1279,
        "q": "¿Cuál de las siguientes conductas, cometidas por un maestro, es considerada una falta grave?",
        "a": "La entrega de informaciones, documentos que no son de uso público a personas ajenas al servicio."
    },
    {
        "id": 1280,
        "q": "¿Qué fenómeno concreto ilustra «Diseñar el currículum» para advertir sobre el riesgo de adoptar automáticamente el último paradigma científico en la enseñanza escolar?",
        "a": "La enseñanza de la lengua, cuyo tránsito acelerado por sucesivos paradigmas lingüísticos derivó en notables índices de fracaso escolar."
    },
    {
        "id": 1281,
        "q": "En una unidad educativa se identifican simultáneamente las siguientes deficiencias: (1) espacios físicos inadecuados, (2) ausencia de Plan de Convivencia Pacífica y Armónica, (3) maestras y maestros sin formación en estrategias pedagógicas de prevención, y (4) nula coordinación con servicios de salud y protección externos. ¿Cuál de los siguientes componentes tiene carácter estructurante?",
        "a": "La elaboración e implementación del Plan de Convivencia Pacífica y Armónica."
    },
    {
        "id": 1282,
        "q": "¿Qué papel juega la educación frente al creciente aumento de recursos tecnológicos disponibles y cuál es el gran reto en el uso de las tecnologías?",
        "a": "La educación bien definida, atractiva y adaptable puede matizar o minimizar los efectos de la abrumadora cantidad de recursos tecnológicos disponibles, siendo el gran reto convertir las tecnologías en herramientas complejas que potencien las habilidades humanas."
    },
    {
        "id": 1283,
        "q": "La escuela graduada adoptó como criterio dominante de clasificación de los estudiantes una variable que, siendo simplificadora, permitía gestionar la heterogeneidad de manera operativa. ¿Cuál era ese criterio?",
        "a": "La edad cronológica, en tanto variable accesible y suficientemente homogeneizadora para organizar colectivos manejables."
    },
    {
        "id": 1284,
        "q": "En el contexto de la innovación educativa, ¿cuál de las siguientes condiciones institucionales se considera fundamental para que los actores educativos se atrevan a experimentar, asumir riesgos y aprender de sus errores sin temor a ser sancionados?",
        "a": "La consolidación de un ambiente organizacional de confianza y respaldo mutuo que reconozca las equivocaciones como parte constitutiva del proceso creador y fuente genuina de conocimiento."
    },
    {
        "id": 1285,
        "q": "Según el texto de Innovación Educativa, al planificar un proceso de transformación institucional, ¿qué conjunto de dimensiones debe abordarse de forma sistémica e integrada?",
        "a": "El propósito orientador, la cultura colectiva, las dinámicas de poder, las prácticas de aula, los esquemas de pensamiento de los actores y los vínculos con el contexto."
    },
    {
        "id": 1286,
        "q": "En una clase, dos estudiantes obtienen el mismo resultado de fracaso en una prueba. Frente a esta situación, el estudiante A reacciona con vergüenza y se retrae socialmente; el estudiante B, en cambio, responde con determinación y busca estrategias para mejorar. ¿Qué factor explica principalmente que un mismo estímulo provoque respuestas emocionales tan distintas?",
        "a": "La gestión emocional y el contexto vital."
    },
    {
        "id": 1287,
        "q": "Al reflexionar sobre los límites de la atención individualizada en la escuela obligatoria, se descarta una modalidad específica como solución general. ¿Cuál es?",
        "a": "La enseñanza autoadministrada según el ritmo individual de cada estudiante."
    },
    {
        "id": 1288,
        "q": "Según Sacristán, la proliferación de más de 60.000 entradas sobre «currículum» en Google Books y 9.000 en la Biblioteca del Congreso de Washington permite inferir que:",
        "a": "La proliferación bibliográfica evidencia dispersión conceptual y el desafío de articular concepciones diversas."
    },
    {
        "id": 1289,
        "q": "La polisemia del término currículum no responde a una imprecisión conceptual sino a una condición constitutiva del mismo. ¿Qué factor explica estructuralmente esa condición?",
        "a": "Su naturaleza de construcción social e histórica atravesada por intereses y relaciones de poder divergentes."
    },
    {
        "id": 1290,
        "q": "Aunque compartan el mismo currículum formal y una formación profesional equivalente, los docentes producen currículos reales distintos porque:",
        "a": "Cada implementación moviliza hábitos, esquemas generadores, imágenes de la cultura y valores que difieren de un docente a otro."
    },
    {
        "id": 1291,
        "q": "Según Bourdieu, citado en el capítulo «El currículum real y el trabajo escolar», ¿cuál es el producto más específico de un sistema de enseñanza en relación con el hábito cultivado?",
        "a": "La disposición general creadora de esquemas particulares aplicables en campos diferentes del pensamiento y la acción."
    },
    {
        "id": 1292,
        "q": "Según Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», un estudiante que experimentó métodos defectuosos de enseñanza muestra rechazo generalizado hacia todas las materias, incluso aquellas que nunca le generaron problemas. ¿Qué fenómenos del condicionamiento clásico de Pavlov explican simultáneamente esta situación?",
        "a": "La generalización de estímulo, porque responde de manera generalizada a estímulos similares, y el condicionamiento provocado por métodos defectuosos que condicionan al niño a desarrollar desagrado y odio hacia el ambiente escolar."
    },
    {
        "id": 1293,
        "q": "Una de las instancias responsable de publicar el Reglamento para el Fortalecimiento de la Educación Inclusiva en el Sistema Educativo Plurinacional — Modalidad Indirecta, es:",
        "a": "La Dirección General de Asuntos Administrativos."
    },
    {
        "id": 1294,
        "q": "Una estudiante revela a su maestra que viene siendo víctima de violencia sexual por parte del director de la unidad educativa. ¿Cuál es la instancia que debe llevar adelante los procedimientos de actuación y bajo qué condición?",
        "a": "La Dirección Distrital Educativa en coordinación con la Dirección Departamental de Educación correspondiente, dado que la autoridad de la unidad educativa es la presunta agresora."
    },
    {
        "id": 1295,
        "q": "¿Qué instancia emite la autorización de traspaso al instituto de destino para la inscripción y continuidad académica del estudiante?",
        "a": "La Subdirección de Educación Superior de Formación Profesional de la Dirección Departamental de Educación."
    },
    {
        "id": 1296,
        "q": "En el área rural, los niños presentan bajo desarrollo de oralidad, lectoescritura y corporalidad, carecen de espacios afectivos y están vinculados desde temprana edad al trabajo, ¿qué dimensión de la innovación educativa debe priorizarse en este contexto?",
        "a": "La dimensión pedagógica, rediseñando las prácticas de enseñanza desde el contexto sociocultural y afectivo de los niños, promoviendo el juego, la corporalidad y la oralidad como ejes de aprendizaje situado."
    },
    {
        "id": 1297,
        "q": "¿Qué dimensiones del aprendizaje potencia el uso de las TIC en la formación docente, al permitir la interacción entre individuos más allá de los límites geográficos y del espacio físico del aula?",
        "a": "La dimensión cooperativa y conectada, al proporcionar instrumentos que favorecen el trabajo conjunto entre personas dentro del aula y a través de redes globales de comunicación."
    },
    {
        "id": 1298,
        "q": "Debido a que las tareas de aprendizaje en el aula son cognitivas, obligatorias y evaluadas públicamente, Jere Brophy argumenta que la motivación del estudiante está en un nivel óptimo cuando:",
        "a": "La dificultad de la tarea es moderada (con un 50 por ciento de posibilidades de éxito)."
    },
    {
        "id": 1299,
        "q": "El criterio que permite distinguir cuándo una diferencia es admisible en la escolaridad obligatoria es que:",
        "a": "La diferencia no suponga desigualdad entre individuos o grupos, pues solo las diferencias y las prácticas que las protegen sin desigualar pueden admitirse en la escolaridad obligatoria."
    },
    {
        "id": 1300,
        "q": "En el documento “Convivencia escolar y resolución pacífica de conflictos”, esta propuesta se basa en los principios de la noviolencia, de manera que toda acción educativa trate de resolver los conflictos principalmente en tres niveles consecutivos y en paralelo. ¿Cómo se denominan estos niveles?",
        "a": "La provención, el análisis y la negociación, y la mediación escolar."
    },
    {
        "id": 1301,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, según Díaz Bazo y Thornton (2000), dentro de la fase de implantación se incluye:",
        "a": "La constitución de un equipo de trabajo que coordine el desarrollo del proyecto, formado por miembros de la comunidad educativa."
    },
    {
        "id": 1302,
        "q": "Cuando el Sistema de Organización Administrativa detecta que dos entidades públicas comparten exactamente los mismos objetivos institucionales y atribuciones legales, ¿cuáles son los mecanismos previstos para resolver esta situación?",
        "a": "La fusión o supresión de las entidades que presentan duplicidad de objetivos y atribuciones."
    },
    {
        "id": 1303,
        "q": "¿Cuál de los siguientes factores es identificado como una barrera estructural que dificulta la consolidación de procesos de innovación educativa en los centros escolares?",
        "a": "La cultura organizacional arraigada y la inercia institucional, que reproducen rutinas sedimentadas y generan resistencia ante cualquier intento de transformación pedagógica genuina."
    },
    {
        "id": 1304,
        "q": "Durante la aplicación de la ruta de actuación establecida en el “Protocolo de Prevención y Actuación”, el director de una unidad educativa toma conocimiento de un hecho de violencia sexual cometido por un docente en ejercicio de funciones dentro del establecimiento contra un estudiante. ¿Qué agravantes del Artículo 310 del Código Penal boliviano deben consignarse en el ámbito educativo por ser específicamente relativos a este contexto?",
        "a": "Ser el autor encargado de la educación o guarda de la víctima, y haber cometido el hecho en el interior de un establecimiento de educación, conforme al Artículo 310 del Código Penal boliviano."
    },
    {
        "id": 1305,
        "q": "¿Cuál es el procedimiento correcto cuando la parte denunciada por violencia física y psicológica es la propia directora o director de la unidad educativa?",
        "a": "La denuncia puede ser presentada por cualquier maestra, maestro, padre, madre o estudiante ante la Defensoría de la Niñez y Adolescencia y a la Dirección Distrital."
    },
    {
        "id": 1306,
        "q": "El hecho de que la mayor parte del alumnado se niegue a estudiar más de tres días antes de los exámenes es interpretado en el texto como evidencia de que:",
        "a": "El modelo evaluativo vigente produce aprendizajes de usar y tirar cuyo contenido se olvida poco después de superada la prueba."
    },
    {
        "id": 1307,
        "q": "Al examinar los resultados de distintas pruebas a las que se somete al alumnado, el texto «Diseño, desarrollo e innovación del currículum» identifica un problema estructural que consiste en que:",
        "a": "Lo que el sistema premia en las aulas no coincide con lo que las pruebas externas exigen, dejando al alumnado sin herramientas para responder a ambas demandas."
    },
    {
        "id": 1308,
        "q": "Walzer introduce el concepto de «igualdad simple» en el marco del debate sobre la escolaridad obligatoria. Asumir ese principio supone aceptar que:",
        "a": "Ofrecer a todos el mismo proyecto educativo es condición necesaria pero no suficiente para resolver la tensión entre el derecho universal a la educación y la realidad de sujetos con trayectorias, capacidades y expectativas profundamente heterogéneas."
    },
    {
        "id": 1309,
        "q": "De acuerdo con el documento de Innovación Educativa, ¿cuál es el principal factor que dificulta los cambios en las escuelas?",
        "a": "La fuerza del statu quo —sus principios, visión, patrones de relaciones de poder y sentido de la tradición— que descarta casi automáticamente las posibilidades de cambio."
    },
    {
        "id": 1310,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que los alumnos introducen su cultura juvenil en los centros educativos, una cultura caracterizada a veces por ciertos comportamientos denunciados y sentidos como conflictivos por el profesorado, del mismo modo que algunas culturas institucionales son sentidas por los alumnos como una presión anormal, que refuerza su desarraigo hacia:",
        "a": "La cultura escolar"
    },
    {
        "id": 1311,
        "q": "¿Qué posición adopta Apple frente a la supuesta virtualidad del currículum básico para crear cohesión social?",
        "a": "La cuestiona por las diferencias culturales, económicas y sociales de las que parten los estudiantes."
    },
    {
        "id": 1312,
        "q": "¿Qué demanda ideológica y social explica que el currículum haya debido ampliar su alcance más allá de la preparación para estudios superiores?",
        "a": "La aspiración igualitaria progresista que impulsó una escolaridad prolongada y no diferenciada para una base social heterogénea."
    },
    {
        "id": 1313,
        "q": "Una estructura del cerebro profundo evalúa cada experiencia escolar como positiva o negativa, condicionando si el estudiante se acerca o se aleja del proceso de aprendizaje. ¿Qué estructura cerebral cumple esta función y cuál es su propósito evolutivo fundamental?",
        "a": "La amígdala, cuya función principal es la supervivencia."
    },
    {
        "id": 1314,
        "q": "¿Por qué es importante neutralizar emociones negativas y fomentar emociones positivas en el aula según la neurociencia?",
        "a": "El sistema límbico estará dispuesto a abrirse, dejando pasar la información al cerebro racional."
    },
    {
        "id": 1315,
        "q": "Desde el neuroaprendizaje, ¿cuál es la razón principal por la que se recomienda al maestro aprovechar los avances tecnológicos en el aula?",
        "a": "El cerebro se motive, innove y se sienta en un contexto conocido."
    },
    {
        "id": 1316,
        "q": "El material “Convivencia escolar y resolución pacífica de conflictos” indica que los jóvenes participantes del programa “En clave de Paz” desarrollaron proyectos centrados en:",
        "a": "Las relaciones interpersonales, la resolución de conflictos y la mejora del medioambiente."
    },
    {
        "id": 1317,
        "q": "Toda deuda pública interna o externa con plazo igual o mayor a un año debe ser contraída por:",
        "a": "La máxima autoridad del Sistema de Tesorería del Estado, por cuenta del Tesoro Nacional o de la entidad beneficiaria que asume la responsabilidad del servicio de la deuda."
    },
    {
        "id": 1318,
        "q": "¿Quiénes ejercen el control gubernamental interno?",
        "a": "Los servidores de las unidades ejecutoras, los responsables superiores de las operaciones realizadas y la unidad de auditoría interna de cada entidad."
    },
    {
        "id": 1319,
        "q": "En el enfoque de generación de conocimiento, el docente consolida el salto de la enseñanza al aprendizaje llevándolo a su máxima expresión. ¿Cuál de las siguientes opciones describe correctamente el principio que sustenta ese nivel y la competencia docente que le corresponde en el uso de las TIC?",
        "a": "El estudiante innovador es el centro; el docente actúa como mentor y aprendiz permanente, forma productores autónomos de saber y sostiene comunidades de práctica con soporte en TIC."
    },
    {
        "id": 1320,
        "q": "¿Cuáles son los cuatro componentes básicos que estructuran la fase de diseño dentro de la planeación del trabajo por proyectos?",
        "a": "La guía formativa del proyecto, el diseño del proyecto, la intervención pedagógica y la evaluación."
    },
    {
        "id": 1321,
        "q": "La educación superior enfrenta el reto de formar profesionistas capaces de responder ética y responsablemente a las necesidades sociales. Para que este propósito se concrete, la enseñanza debe orientarse fundamentalmente hacia:",
        "a": "El desarrollo de competencias que amplíen las posibilidades del individuo para actuar exitosamente en la vida, articulando compromiso, creatividad y flexibilidad más allá de la simple transferencia de información."
    },
    {
        "id": 1322,
        "q": "Al reflexionar sobre los aspectos fundamentales del cambio en las instituciones formativas, ¿qué implica dicho proceso en relación con quienes lo llevan a cabo?",
        "a": "La configuración de actores sociales e históricos con capacidad de emprender transformaciones desde una perspectiva reflexiva, crítica y contextualizada."
    },
    {
        "id": 1323,
        "q": "¿Qué criterios determinan la aplicación de sanciones a los infractores por parte de los tribunales que tramitan los procesos disciplinarios en contra de maestras y maestros?",
        "a": "La concurrencia de circunstancias atenuantes o agravantes."
    },
    {
        "id": 1324,
        "q": "¿Qué estrategia de enseñanza responde mejor a un paradigma donde la inclusión se vive como forma de vida y no como simple mandato normativo?",
        "a": "La concientización con la diversidad social y la atención hacia los grupos vulnerables, revisando críticamente las formas de convivencia colectiva."
    },
    {
        "id": 1325,
        "q": "En el texto sobre objetivos curriculares, Clemente Linuesa cuestiona una concepción reduccionista y propone una visión más integral. ¿Cuál de las siguientes opciones describe con mayor precisión la diferencia entre ambas concepciones?",
        "a": "La concepción reduccionista limita los objetivos a conductas medibles y resultados predefinidos, mientras que la concepción integral los entiende como metas que orientan procesos donde las actividades generan fines múltiples y simultáneos."
    },
    {
        "id": 1326,
        "q": "¿Qué ha fallado cuando un estudiante tiene dificultades para relacionarse con sus pares, reacciona con frustración y no logra integrarse al trabajo en equipo?",
        "a": "La comprensión y gestión de las emociones"
    },
    {
        "id": 1327,
        "q": "El arte de enseñar requiere un alto grado de flexibilidad y adaptación que va mucho más allá de la aplicación mecánica de los procedimientos paso a paso. Así:",
        "a": "La comprensión adecuada, la apreciación y la aplicación de los principios psicológicos ayudan a los maestros en la mejora general del proceso de enseñanza aprendizaje."
    },
    {
        "id": 1328,
        "q": "Clemente Linuesa argumenta que la selección de contenidos es una opción cultural y no una cuestión técnica, y que las actividades diseñan la práctica en un doble sentido —aprendizaje y vida social del aula—. A partir de ambas ideas, ¿cuál de las siguientes conclusiones es más coherente con el planteamiento global de Linuesa?",
        "a": "El diseño curricular en sus distintos niveles —político, de centro y de aula— trasciende la dimensión técnica e instrumental, constituyendo en cada caso una decisión cultural, pedagógica y social que sitúa al docente como agente activo."
    },
    {
        "id": 1329,
        "q": "Para el condicionamiento operante, desarrollado por Skinner, el proceso de aprendizaje y el entorno deben estar diseñados para crear el ambiente de:",
        "a": "La frustración mínima y la máxima satisfacción."
    },
    {
        "id": 1330,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos” ¿Qué otros factores importantes determinan la calidad de las prácticas educativas?",
        "a": "La calidad y los tiempos dedicados a la enseñanza, así como las posibilidades de ofrecer al alumnado diferentes ocasiones para descubrir y desarrollar sus intereses a través de actividades extraescolares y complementarias."
    },
    {
        "id": 1331,
        "q": "De acuerdo con el planteamiento sobre la cognición y la construcción de la identidad individual, ¿cuál de las siguientes afirmaciones describe correctamente la relación entre el individuo, la cultura y los semejantes?",
        "a": "La cognición posee una fuente de estímulos para su desarrollo en la cultura y la relación con los semejantes; es desde la visión del otro que cada individuo construye su identidad, y la existencia de la individualidad se erige desde los rasgos del otro."
    },
    {
        "id": 1332,
        "q": "Perrenoud sostiene que la escuela prepara a los alumnos para la vida adulta sin que se sepa con precisión cómo ni en qué consiste esa preparación. ¿Qué tensión curricular fundamental revela esta afirmación?",
        "a": "La coexistencia de efectos formativos reales con una opacidad estructural sobre los procesos que los generan."
    },
    {
        "id": 1333,
        "q": "El libro de texto representa el último eslabón de un proceso de reducción progresiva de la experiencia humana. ¿Qué caracteriza ese proceso?",
        "a": "La especialización pedagógica va restringiendo sucesivamente las fuentes del saber hasta concentrarlas en un único soporte escolar."
    },
    {
        "id": 1334,
        "q": "El currículum moral no puede considerarse verdaderamente oculto porque:",
        "a": "Los actores sociales tienen conciencia de que la escuela forma para la sociedad, aunque ignoren los mecanismos concretos que lo producen."
    },
    {
        "id": 1335,
        "q": "¿Qué condición favorece la mejora continua de las habilidades TIC de los docentes y su aplicación en el ámbito educativo y en la sociedad local y mundial?",
        "a": "Contar con infraestructura tecnológica adecuada y asistencia técnica oportuna que sustente el desarrollo y actualización permanente de sus capacidades en el uso de las TIC."
    },
    {
        "id": 1336,
        "q": "¿Qué elemento central estructura el marco conceptual para la aplicación de las tecnologías en la formación docente según el documento «Las TIC en la Formación Docente»?",
        "a": "La articulación de tres enfoques progresivos que orientan el desarrollo de competencias docentes desde el uso básico hasta la producción de nuevo conocimiento"
    },
    {
        "id": 1337,
        "q": "La distancia que un docente mantiene respecto a las didácticas oficiales incide directamente sobre su práctica porque:",
        "a": "A mayor apego a las metodologías oficiales, menor necesidad de reinvención personal, y a mayor distancia de ellas, mayor inversión de sí mismo."
    },
    {
        "id": 1338,
        "q": "Según los planteamientos sobre estilos y métodos de aprendizaje, ¿qué factores del entorno educativo pueden afectar directamente la motivación del estudiante?",
        "a": "El ambiente del aula y la actitud y personalidad del profesor"
    },
    {
        "id": 1339,
        "q": "¿Qué beneficio aporta la técnica «Agrupa estímulos en una categoría» en la neurociencia del aprendizaje?",
        "a": "La tarea cognitiva se simplifica, logrando prestar atención de forma dirigida y productiva."
    },
    {
        "id": 1340,
        "q": "La enseñanza eficaz puede definirse como cualquier medio por el cual los estudiantes deben ser emocional e intelectualmente estimulados. ¿Qué habilidades docentes son fundamentales para lograr una enseñanza eficaz?",
        "a": "La capacidad de comunicación y las habilidades interpersonales son muy importantes."
    },
    {
        "id": 1341,
        "q": "Cuando Sacristán menciona que ciertos fines educativos no son cuantificables «para los tecnocráticos analistas de la calidad», ¿qué crítica implícita se formula?",
        "a": "Medir solo lo cuantificable encubre una decisión política sobre qué fines educativos son legítimos."
    },
    {
        "id": 1342,
        "q": "¿A qué hace referencia lo que se denomina también «retraso genómico» en el estudio del cerebro y el aprendizaje?",
        "a": "El desfase entre nuestro cerebro y el mundo artificial."
    },
    {
        "id": 1343,
        "q": "¿Qué tensión existe entre Feito Alonso y Clemente Linuesa respecto al currículum común obligatorio?",
        "a": "El currículum común puede garantizar igualdad formal, pero su diseño elitista reproduce desigualdades y requiere reforma profunda."
    },
    {
        "id": 1344,
        "q": "Al momento de verificar un formulario de Centralizadores de Calificaciones, se evidencia que carece de los sellos de pie de firma de las autoridades y de la institución, aunque cuenta con todas las firmas requeridas. ¿Qué acción corresponde adoptar?",
        "a": "Debe ser observado y devuelto al instituto para su corrección, puesto que los sellos de pie de firma de las autoridades y de la institución son un requisito indispensable establecido en la norma."
    },
    {
        "id": 1345,
        "q": "Según el documento Innovación Educativa de la UNESCO, ¿cuál de los siguientes factores de tipo institucional obstaculizan los procesos de cambio e innovación educativa?",
        "a": "La rigidez de las estructuras organizativas y la ausencia de culturas abiertas al cambio, que bloquean la apropiación colectiva de nuevas formas de trabajo pedagógico."
    },
    {
        "id": 1346,
        "q": "¿Qué relación implícita establece Feito entre el silencio del alumnado en el aula y la persistencia de ideas erróneas o prejuicios?",
        "a": "Sin espacios de expresión oral, los preconceptos nunca son sometidos al contraste que haría posible su revisión."
    },
    {
        "id": 1347,
        "q": "En el documento de Innovación Educativa, ¿qué factores exacerban la interacción micropolítica en las instituciones educativas durante los periodos de cambio?",
        "a": "La ambigüedad, la falta de certeza, la incertidumbre y la complejidad de metas propias de las dinámicas transformadoras que intensifican los vínculos en los ámbitos formales e informales."
    },
    {
        "id": 1348,
        "q": "En el escenario actual de la educación, ¿cuál es el principal condicionante que impide que la integración de las TIC se convierta en una verdadera innovación educativa, más allá de la disponibilidad de equipos?",
        "a": "La ausencia de competencia pedagógica digital en el docente, que limita el uso de las TIC a la transmisión de información sin transformar el proceso de enseñanza-aprendizaje."
    },
    {
        "id": 1349,
        "q": "Las madres y padres de familia que detecten señales de alerta en sus hijos relacionadas con dificultades en el aprendizaje o discapacidad tienen la responsabilidad de poder solicitar:",
        "a": "La aplicación de pruebas de detección o evaluación."
    },
    {
        "id": 1350,
        "q": "David Kolb considera que las cuatro capacidades (activo, pragmático, teórico y reflexivo) son diametralmente opuestas y cuando aprendemos debemos elegir entre ellas. Estas capacidades configuran un modelo bidimensional del proceso de aprendizaje formado por:",
        "a": "La percepción y el procesamiento."
    },
    {
        "id": 1351,
        "q": "De acuerdo con Blase y Blase (1994) en el texto de Innovación Educativa, ¿qué aspecto del liderazgo facilitador, vinculado a los principios del gobierno compartido, contribuyó directamente al sentido de eficacia política de los docentes?",
        "a": "La construcción de responsabilidad, el desarrollo de estructuras democráticas de decisión y el fomento de la autonomía e innovación."
    },
    {
        "id": 1352,
        "q": "El texto “Convivencia escolar y resolución pacífica de conflictos” señala que el elemento principal de cualquier educación que pretenda construir o fabricar la paz es:",
        "a": "El estudio de los conflictos y las formas de gestionarlos de modo cooperativo."
    },
    {
        "id": 1353,
        "q": "Según Clemente Linuesa, las decisiones curriculares del centro deben apoyarse en tres pilares fundamentales. Dos de ellos son el desarrollo profesional del profesorado y la coordinación con otros centros. ¿Cuál es el tercer pilar?",
        "a": "La apertura al entorno mediante las relaciones con la comunidad."
    },
    {
        "id": 1354,
        "q": "Según Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», cuando los estudiantes que solo trabajan por premios dejan de participar ante la ausencia de los mismos. ¿Qué explica esto?",
        "a": "La dependencia de recompensas extrínsecas representa uno de los mayores detractores de su uso en el aula."
    },
    {
        "id": 1355,
        "q": "Desde el neuroaprendizaje, cuando los estudiantes perciben el examen como una situación amenazante, ¿qué parte del cerebro se activa?",
        "a": "La amígdala."
    },
    {
        "id": 1356,
        "q": "Según la neurociencia, ............ consolida el contenido potencial en la memoria a largo plazo cuando este se acompaña de una emoción positiva y agradable en el proceso de aprendizaje.",
        "a": "La amígdala"
    },
    {
        "id": 1357,
        "q": "¿Qué estructura cerebral, al no recibir activación afectiva durante una sesión de enseñanza, impide que las conexiones neuronales alcancen el umbral necesario para migrar la información hacia el neocórtex?",
        "a": "La amígdala regula neurotransmisores vinculados a la plasticidad sináptica."
    },
    {
        "id": 1358,
        "q": "¿Por qué el maestro debe contemplar prioritariamente las redes instintivas emocionales antes de activar las redes cognitivas racionales de sus estudiantes?",
        "a": "La amenaza subcortical bloquea el acceso a zonas superiores de comprensión."
    },
    {
        "id": 1359,
        "q": "El CONALPEDIS fue creado como una entidad descentralizada para la defensa de los derechos de las personas con discapacidad. Un profesional del área social afirma que esta entidad cuenta con un órgano interno cuya función principal es la planificación estratégica, y que sus resoluciones se aprueban cuando todos sus integrantes votan a favor. La valoración técnica más precisa sobre dicha afirmación es:",
        "a": "La afirmación incurre en dos errores: el órgano interno tiene funciones de control y fiscalización, y sus resoluciones se aprueban por mayoría de votos del total de sus miembros."
    },
    {
        "id": 1360,
        "q": "¿Cuál de las siguientes situaciones ejemplifica un trabajo de las administraciones curriculares que no busca suplir las funciones de los intérpretes?",
        "a": "La administración publica el texto curricular con ejemplos ilustrativos de sus novedades y abre espacios de debate entre el profesorado."
    },
    {
        "id": 1361,
        "q": "¿Qué proceso histórico explica que la innovación haya sido considerada necesaria para lograr la modernización de la escuela?",
        "a": "La adecuación a cambios en el conocimiento, la tecnología, los nuevos lenguajes y la comunicación, transfiriendo la noción de innovación desde la administración y la empresa hacia la escuela en la segunda mitad del siglo XX."
    },
    {
        "id": 1362,
        "q": "¿Qué mecanismo neurológico fortalece de forma duradera las conexiones nerviosas cuando se practica de manera repetida, espaciada y significativa?",
        "a": "La activación reiterada entre neuronas potencia y estabiliza su sinapsis."
    },
    {
        "id": 1363,
        "q": "Una sensación intensa de satisfacción posterior a la resolución de un problema difícil permite la consolidación del aprendizaje a nivel sináptico debido a:",
        "a": "La activación del circuito de recompensa cerebral por liberación de dopamina."
    },
    {
        "id": 1364,
        "q": "¿Qué tipo de elementos han puesto en cuestión la idea de progreso en la que se apoya el complejo ciencia-tecnología?",
        "a": "Las desigualdades persistentes, el deterioro ambiental y los peligros de una ciencia desvinculada de valores morales."
    },
    {
        "id": 1365,
        "q": "Durante un acto eleccionario, el encargado de un recinto de votación indica a una persona con discapacidad visual que debe ser acompañada por un funcionario del recinto para recibir asistencia al momento de votar. ¿Cómo se valora esta acción?",
        "a": "La acción vulnera el derecho de la persona con discapacidad a ingresar al recinto de votación acompañada de una persona de confianza elegida por ella misma para recibir la ayuda necesaria."
    },
    {
        "id": 1366,
        "q": "¿A quién se atribuye la frase «El verdadero arte de la memoria es el arte de la atención»?",
        "a": "Ben Jonson."
    },
    {
        "id": 1367,
        "q": "El condicionamiento clásico fue demostrado experimentalmente por:",
        "a": "Iván Petróvich Pavlov"
    },
    {
        "id": 1368,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, la negociación razonada o colaboradora es un método basado en los trabajos de:",
        "a": "Fisher y Ury (2002) de la Universidad de Harvard."
    },
    {
        "id": 1369,
        "q": "¿De qué emoción primaria deriva la inseguridad como emoción secundaria?",
        "a": "Miedo"
    },
    {
        "id": 1370,
        "q": "¿Cuál de las siguientes opciones corresponde a un objetivo de la Formación Superior Artística?",
        "a": "Recuperar, desarrollar, recrear y difundir las expresiones culturales de las naciones y pueblos indígena originario campesinos, comunidades interculturales y afrobolivianas."
    },
    {
        "id": 1371,
        "q": "¿Cuál de las siguientes opciones corresponde a un objetivo de los Centros de Capacitación Artística?",
        "a": "Desarrollar programas de recuperación de los saberes de nuestras culturas."
    },
    {
        "id": 1372,
        "q": "¿Qué factores NO provocan las dificultades en el aprendizaje, de acuerdo al Reglamento de Fortalecimiento de Educación Inclusiva en el SEP – Modalidad Indirecta?",
        "a": "Intelectuales o sensoriales"
    },
    {
        "id": 1373,
        "q": "Las motivaciones intrínsecas endógenas de trabajar cooperativamente de forma innata generalmente caracterizan a la inteligencia:",
        "a": "Interpersonal"
    },
    {
        "id": 1374,
        "q": "¿Cuál es el rol predominante que desempeñan los laboratorios universitarios, los centros de investigación gubernamentales y las organizaciones sin fines de lucro en el ámbito de la innovación?",
        "a": "Contribuyen de forma considerable a los avances científicos y tecnológicos, pero son marginalmente responsables de la innovación comercial."
    },
    {
        "id": 1375,
        "q": "Ante conflictos y situaciones de violencia leves que se presentan entre estudiantes dentro de la unidad educativa, ¿cuál es la obligación concreta que tiene el personal docente?",
        "a": "Intervenir de manera inmediata para detener el ciclo de la violencia y proponer modos de resolución de conflictos por la vía pacífica."
    },
    {
        "id": 1376,
        "q": "Cuando una maestra o maestro detecta en el día a día indicadores que sugieren que una niña, niño o adolescente está sufriendo algún tipo de violencia en el ámbito familiar o educativo, ¿cuál es la acción que debe realizarse?",
        "a": "Intervenir de manera inmediata y, en su caso, derivar a la Defensoría de la Niñez y Adolescencia."
    },
    {
        "id": 1377,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que las intervenciones se clasifican tradicionalmente en tres niveles de prevención. La prevención primaria se refiere a:",
        "a": "Actuaciones dirigidas a prevenir la violencia antes de que ocurra."
    },
    {
        "id": 1378,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que las intervenciones se clasifican tradicionalmente en tres niveles de prevención. La prevención secundaria se refiere a:",
        "a": "Medidas centradas en las respuestas más inmediatas después de un acto violento."
    },
    {
        "id": 1379,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que las intervenciones se clasifican tradicionalmente en tres niveles de prevención. La prevención terciaria se refiere a:",
        "a": "Intervenciones centradas en la atención prolongada después de actos violentos."
    },
    {
        "id": 1380,
        "q": "¿En qué consisten los recreos mentales según la neurociencia aplicada al aprendizaje?",
        "a": "Pausas breves con humor o desplazamiento físico."
    },
    {
        "id": 1381,
        "q": "¿Cuál es la finalidad de las medidas de protección respecto a un hecho de violencia contra las mujeres?",
        "a": "Interrumpir e impedir un hecho de violencia, o garantizar, en caso de que éste se haya consumado, que se realice la investigación, procesamiento y sanción correspondiente."
    },
    {
        "id": 1382,
        "q": "Desde el neuroaprendizaje, ¿por qué los estudiantes tienen un concepto erróneo sobre la evaluación?",
        "a": "Perciben dicho instrumento como parámetro definitorio del éxito o fracaso."
    },
    {
        "id": 1383,
        "q": "¿Dónde se encuentra ubicado el sistema límbico en el cerebro?",
        "a": "Parte superior del tronco cerebral."
    },
    {
        "id": 1384,
        "q": "¿Cuál de las siguientes opciones señala los principios rectores establecidos en el Protocolo de Prevención y Actuación ante situaciones de violencia en unidades educativas?",
        "a": "Interés superior de la niña, niño y adolescente, confidencialidad, no revictimización e intervención oportuna."
    },
    {
        "id": 1385,
        "q": "Según la neurociencia ¿para qué es útil trabajar la técnica del «panel emocional» en el aula?",
        "a": "Enseñar a poner en palabras lo que se siente"
    },
    {
        "id": 1386,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” indica que el facilitador es un proceso más preventivo que resolutivo, que consiste en la participación de una tercera persona que dirige un debate entre las partes, con objeto de que éstas tengan la oportunidad de:",
        "a": "Comunicar sus sentimientos y expresar sus percepciones e ideas, origen de sus diferencias."
    },
    {
        "id": 1387,
        "q": "Si una persona tiene la capacidad para explicar, enseñar, hablar o persuadir, ¿qué tipo de inteligencia posee según Gardner?",
        "a": "Inteligencia lingüística."
    },
    {
        "id": 1388,
        "q": "Desde el neuroaprendizaje, un estudiante que prefiere trabajar de forma individual, es consciente de sí mismo y comprende con claridad sus propias emociones, motivaciones y metas. ¿Qué tipo de inteligencia caracteriza este perfil?",
        "a": "Inteligencia intrapersonal"
    },
    {
        "id": 1389,
        "q": "Según la neurociencia del aprendizaje, un estudiante que demuestra autonomía en su proceso formativo, reconoce sus propias fortalezas y limitaciones, regula sus emociones frente a la frustración y traza metas personales sin necesidad de motivación externa, corresponde al desarrollo de la:",
        "a": "Inteligencia intrapersonal"
    },
    {
        "id": 1390,
        "q": "Un estudiante extrovertido, con sensibilidad hacia los demás, sus emociones, motivaciones y disposición para cooperar y trabajar en equipo, ¿qué tipo de inteligencia posee según el neuroaprendizaje?",
        "a": "Inteligencia interpersonal"
    },
    {
        "id": 1391,
        "q": "Según el Psicólogo Howard Gardner, ¿Qué tipo de inteligencia posee la persona que tiene la sensibilidad  para criar y cultivar sus propios alimentos?",
        "a": "Inteligencia naturalista"
    },
    {
        "id": 1392,
        "q": "¿Qué dimensiones debe abordar el maestro dentro del aula según las exigencias actuales de la neurociencia aplicada al aprendizaje?",
        "a": "Académico y socioafectivo."
    },
    {
        "id": 1393,
        "q": "¿De qué manera los ambientes de simulación contribuyen a la formación profesional?",
        "a": "Ejecutando en ambientes virtuales de riesgo controlado aprendizajes cada vez más prácticos, reduciendo la brecha entre el saber académico y el saber técnico."
    },
    {
        "id": 1394,
        "q": "¿Qué características debe tener la atención que presten los programas y servicios organizados en cada municipio para las mujeres en situación de violencia?",
        "a": "Prioritaria, permanente, especializada y multidisciplinaria."
    },
    {
        "id": 1395,
        "q": "De acuerdo con José Manuel Sáez López, ¿qué elementos integran una propuesta de enseñanza verdaderamente eficaz?",
        "a": "Contempla la necesidad del estudiante, la preparación para aprender, la situación formal de aprendizaje y la interacción."
    },
    {
        "id": 1396,
        "q": "Según el modelo de aprendizaje experiencial de Kolb, ¿cuál es la característica principal del estilo de aprendizaje «asimilador»?",
        "a": "Combina la conceptualización abstracta con la observación reflexiva; prefiere construir modelos teóricos lógicos y coherentes antes que la aplicación práctica."
    },
    {
        "id": 1397,
        "q": "¿Cuál es la característica definitoria que distingue al Aprendizaje Basado en Problemas de los métodos de enseñanza tradicionales?",
        "a": "Coloca al estudiante como protagonista del proceso formativo, desplazando al maestro del rol protagónico central de la enseñanza."
    },
    {
        "id": 1398,
        "q": "En el documento “Convivencia escolar y resolución pacífica de conflictos”, el programa de mediación escolar denominado “Mediación educativa/Construcción de una escuela pacífica y segura e implantación de programas curriculares de resolución de conflictos” consiste en:",
        "a": "Se educa a toda la comunidad educativa en los conceptos y habilidades básicas de resolución de conflictos y se promueven los valores clave de la mediación, como la cooperación, la comunicación, el respeto a la diversidad, la responsabilidad y la participación. Al mismo tiempo, se incluyen en el currículo contenidos para la comprensión y gestión de los conflictos."
    },
    {
        "id": 1399,
        "q": "El modelo ecológico que plantea diferentes niveles de identificación y prevención indicados en el texto “Convivencia escolar y resolución pacífica de conflictos”, el nivel que describe el enunciado: “las investigaciones sobre la violencia muestran que determinados ámbitos comunitarios favorecen la violencia más que otros; por ejemplo, las zonas de pobreza o deterioro físico, o donde hay poco apoyo institucional”, es:",
        "a": "Comunitario"
    },
    {
        "id": 1400,
        "q": "El castigo no solo daña físicamente, sino también pone en estado de confusión emocional a la niña, al niño o adolescente, generándole:",
        "a": "Miedo y sumisión y disminuyendo su capacidad para crecer como persona autónoma y responsable."
    },
    {
        "id": 1401,
        "q": "En el enfoque de «profundización del conocimiento» propuesto por la UNESCO para el desarrollo de competencias TIC docentes, ¿cuál de las siguientes describe con mayor precisión la competencia central que lo caracteriza?",
        "a": "Aplicar metodologías centradas en el estudiante, usar las TIC para resolver problemas disciplinares complejos y gestionar entornos de aprendizaje colaborativo."
    },
    {
        "id": 1402,
        "q": "¿Qué concepto ha sido acuñado para describir el conjunto de transformaciones que implica la incorporación de las TIC en las instituciones educativas?",
        "a": "Reingeniería de las instituciones educativas, término empleado para acompasar los cambios que involucra la introducción de las TIC en los centros de formación."
    },
    {
        "id": 1403,
        "q": "El abogado defensor toma conocimiento de que un director de unidad educativa fue denunciado penalmente por presunta violencia sexual contra una estudiante. Sin embargo, la Defensoría de la Niñez y Adolescencia aún no ha remitido la información sobre el avance del proceso penal. ¿Cuál debe ser la acción inmediata del abogado defensor ante esta situación?",
        "a": "Solicitar información a la Defensoría de la Niñez y Adolescencia y coordinar acciones con las Fiscalías Departamentales."
    },
    {
        "id": 1404,
        "q": "¿Cuál es la acción inmediata que corresponde ejecutar a la Directora o al Director Distrital de Educación al recibir una denuncia de una falta grave por violencia que involucra a un miembro del plantel docente?",
        "a": "Iniciar el proceso disciplinario de sumario interno contra el miembro del plantel por ser una falta grave."
    },
    {
        "id": 1405,
        "q": "El texto “Convivencia escolar y resolución pacífica de conflictos” menciona que el modelo ecológico de prevención de la violencia, introducido a fines de los años setenta, se aplicó:",
        "a": "Inicialmente al maltrato de menores y posteriormente a la violencia juvenil."
    },
    {
        "id": 1406,
        "q": "Según la neurociencia, ¿cómo se denomina al proceso de desarmar o desechar redes neuronales poco activas o inactivas?",
        "a": "Plasticidad negativa"
    },
    {
        "id": 1407,
        "q": "En el contexto del neuroaprendizaje, cuando un estudiante reacciona de forma inmediata ante una situación de aula que percibe como amenazante antes incluso de poder razonar sobre ella, ¿cómo se caracterizan las reacciones amigdalinas ante la información que recibe desde el tálamo?",
        "a": "Fuga o lucha."
    },
    {
        "id": 1408,
        "q": "¿Cómo se denomina uno de los mecanismos principales del aprendizaje y la memoria?",
        "a": "Potenciación a largo plazo."
    },
    {
        "id": 1409,
        "q": "El Protocolo de Prevención y Actuación identifica cinco aspectos que deben considerarse en las acciones de prevención de violencia en el ámbito educativo para asegurar condiciones favorables de convivencia pacífica y armónica. ¿Cuál de las siguientes opciones los enumera correctamente?",
        "a": "Infraestructura segura; funcionamiento mediante Planes de Convivencia Pacífica y Armónica; formación de recursos humanos; participación de niños, niñas y adolescentes; y articulación con otros servicios y actores de la comunidad."
    },
    {
        "id": 1410,
        "q": "En el caso de Educación Superior para estudiantes con discapacidad intelectual, ¿qué documento corrobora el cumplimiento del perfil de entrada y las capacidades para el ejercicio profesional?",
        "a": "Informe Multidisciplinario."
    },
    {
        "id": 1411,
        "q": "Según el documento “Convivencia escolar y resolución pacífica de conflictos”, es importante que la cultura del centro se caracterice por una coherencia entre las decisiones a tomar y la forma de alcanzarlas, a través de la creación de unos buenos canales de comunicación. ¿Cuáles son esos canales?",
        "a": "Informativa, relacional y decisoria"
    },
    {
        "id": 1412,
        "q": "¿Qué obligación tiene la autoridad competente cuando impone una sanción como consecuencia de un dictamen de responsabilidad ejecutiva?",
        "a": "Informar inmediatamente al Contralor General de la República sobre la sanción impuesta."
    },
    {
        "id": 1413,
        "q": "La Directora Distrital Educativa toma conocimiento de un hecho de violencia sexual en su distrito. ¿Qué acciones debe seguir obligatoriamente según las establecidas en el protocolo?",
        "a": "Informar a la Directora o Director Departamental de Educación para el inicio del proceso disciplinario, coordinar con las Defensorías de la Niñez y Adolescencia la atención de la víctima."
    },
    {
        "id": 1414,
        "q": "¿Cuál es la acción que debe ejecutar la Directora o el Director Distrital de Educación tras recibir el informe de la Directora o el Director de la unidad educativa sobre una falta grave relativa a violencia física, psicológica o la comisión de un delito de orden sexual por parte de un miembro del plantel?",
        "a": "Iniciar el proceso disciplinario hasta su culminación e informar a la Directora o Director Departamental de Educación sobre el hecho denunciado."
    },
    {
        "id": 1415,
        "q": "¿Cuál de los siguientes principios establece que en todos los niveles de la administración pública destinada a prevenir, atender, detectar, procesar y sancionar cualquier forma de violencia hacia las mujeres, no se exigirá el cumplimiento de requisitos formales o materiales que entorpezcan el proceso de restablecimiento de los derechos vulnerados?",
        "a": "Informalidad"
    },
    {
        "id": 1416,
        "q": "¿Cuáles son los fines para que la comisión técnica pedagógica de las instituciones educativas donde existan casos de estudiantes con discapacidad, dificultades en el aprendizaje o con talento extraordinario, puedan convocar a maestros de apoyo educativo?",
        "a": "Información, orientación, asesoramiento y capacitación."
    },
    {
        "id": 1417,
        "q": "¿Qué tipo de información deben actualizar los Institutos en el Sistema de Información?",
        "a": "Información académica y administrativa-institucional"
    },
    {
        "id": 1418,
        "q": "¿Cuáles son los factores de riesgo para la violencia descritos en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”?",
        "a": "Individuales, familiares, comunitarios, sociales y relacionales."
    },
    {
        "id": 1419,
        "q": "Desde la neurociencia aplicada al aprendizaje, el fracaso escolar no solo afecta el rendimiento académico del estudiante, sino que genera consecuencias que trascienden el aula. ¿En qué ámbitos impacta de manera indirecta el fracaso escolar?",
        "a": "Personal, emocional y social"
    },
    {
        "id": 1420,
        "q": "¿Qué implicación micropolítica tiene para los procesos de innovación escolar el hecho de que los docentes intercambien lealtad a cambio del apoyo de los directores frente a conflictos con estudiantes y padres?",
        "a": "Evidencia que los docentes sin respaldo político del director limitan su compromiso con cambios que puedan alterar ese equilibrio."
    },
    {
        "id": 1421,
        "q": "La tabla sobre el rol de maestras y maestros en la detección de violencia intrafamiliar incluye elementos para guiar la intervención. ¿Cuál de las siguientes opciones corresponde a dichos elementos?",
        "a": "Información, examinar sus limitaciones, contención emocional de emergencia, empatía, fortalecer la relación, asegurar la atención integral y seguimiento del caso."
    },
    {
        "id": 1422,
        "q": "El servidor público que hubiere incrementado desproporcionadamente su patrimonio respecto de sus ingresos legítimos y que no pueda ser justificado, será sancionado con privación de libertad de cinco a diez años, inhabilitación para el ejercicio de la función pública y/o cargos electos, multa de doscientos hasta quinientos días y el decomiso de los bienes obtenidos ilegalmente. ¿A qué delito corresponde esta descripción?",
        "a": "Enriquecimiento ilícito."
    },
    {
        "id": 1423,
        "q": "Una persona natural propietaria de una empresa de construcción privada incrementa desproporcionadamente su patrimonio mediante contratos con entidades del Estado, sin poder justificar el origen legítimo de dicho incremento y causando afectación al patrimonio estatal. ¿Qué delito tipificado en la normativa de lucha contra la corrupción describe con mayor precisión esta conducta?",
        "a": "Enriquecimiento ilícito de particulares con afectación al Estado."
    },
    {
        "id": 1424,
        "q": "Una estudiante de secundaria presenta bajo rendimiento académico, dificultades en lectura y escritura, y ha sido identificada como víctima de agresión reiterada por parte de una autoridad educativa dentro de la unidad. ¿Identifique cuál es la consecuencia cognitiva a largo plazo?",
        "a": "Disminución del desempeño cognitivo en el ámbito escolar, generalizado a las actividades extracurriculares."
    },
    {
        "id": 1425,
        "q": "Desde la neurociencia, ¿cuál es la finalidad de proveer estímulo, motivación, afecto, reconocimiento y curiosidad durante los primeros 5 años de vida?",
        "a": "Lograr una vida con aprendizajes y experiencias significativas."
    },
    {
        "id": 1426,
        "q": "¿Cuáles son los logros de las situaciones de recompensas cooperativas en las que los estudiantes trabajan independientemente o cooperativamente en formas no competitivas para mejorar su dominio de la materia?",
        "a": "Tienden a promover la motivación para aprender en casi todos los estudiantes"
    },
    {
        "id": 1427,
        "q": "¿Qué consecuencia tiene, según Perrenoud, el hecho de que el trabajo del alumno sea permanentemente visible ante el docente?",
        "a": "Se ve sometido a una intromisión continua en su proceso de trabajo, sin margen para elaborar respuestas propias."
    },
    {
        "id": 1428,
        "q": "Desde la perspectiva del neuroaprendizaje, ¿cuál es la razón principal por la que se recomienda que el maestro anticipe los contenidos?",
        "a": "Relaja al cerebro."
    },
    {
        "id": 1429,
        "q": "El movimiento innovador de los años 70 y 80 marcó una diferencia respecto a los procesos de reforma educativa impulsados verticalmente por el Estado, ¿en qué radica esa diferencia sustancial?",
        "a": "Puso énfasis en el protagonismo de los docentes y marcó el inicio de nuevos tiempos con su participación activa en los cambios educativos."
    },
    {
        "id": 1430,
        "q": "Desde la dimensión sistémica de la innovación educativa, ¿qué elemento resulta indispensable para que una experiencia innovadora trascienda el aula y genere cambio institucional?",
        "a": "Articular política educativa institucional con los patrones culturales propios del territorio específico"
    },
    {
        "id": 1431,
        "q": "En materia de trabajo e inclusión laboral para personas con discapacidad, el Estado Plurinacional de Bolivia, en todos sus niveles de gobierno, tiene la obligación de:",
        "a": "Incorporar planes, programas y proyectos de desarrollo inclusivo basado en la comunidad orientados al desarrollo económico y a la creación de puestos de trabajo."
    },
    {
        "id": 1432,
        "q": "En el contexto de las competencias digitales docentes y la integración de tecnologías en la educación, ¿cuál es la condición esencial que define a un verdadero innovador?",
        "a": "Integrar múltiples conocimientos acumulados y destrezas variadas para demostrar que una propuesta genera valor real y merece ser reconocida como innovación."
    },
    {
        "id": 1433,
        "q": "Cuando se plantea que la discusión sobre inclusión debe trascender el ámbito teórico y superar los discursos meramente sensibles o simpáticos, para aproximarse a un paradigma donde la igualdad se viva desde las oportunidades, la calidad de vida y la satisfacción de necesidades, ¿qué orientación pedagógica resulta más coherente con dicha perspectiva?",
        "a": "Rebasar el discurso sensible y simpático para llegar a una visión compatible con el sentido de diferencia existente en la sociedad, acercándose a un paradigma donde la igualdad se viva desde las oportunidades, la calidad de vida y la satisfacción de necesidades."
    },
    {
        "id": 1434,
        "q": "En una secuencia de enseñanza basada en problemas, ¿qué estrategia postinstruccional cumple con mayor precisión la función de consolidar, transferir y valorar críticamente los aprendizajes construidos por el estudiante una vez concluido el proceso de resolución del problema planteado?",
        "a": "Proponer al estudiante, una vez concluido el proceso de resolución, la elaboración de un ensayo reflexivo o informe crítico que le permita sistematizar los hallazgos, evaluar las soluciones construidas y transferir los aprendizajes logrados a nuevos contextos de aplicación."
    },
    {
        "id": 1435,
        "q": "¿Qué podemos hacer los maestros para trabajar la inteligencia emocional en la unidad educativa?",
        "a": "Reducir tensiones cotidianas y transitar de una perspectiva rígida hacia una flexible y dinámica."
    },
    {
        "id": 1436,
        "q": "¿Qué ventaja específica atribuye el texto a las tres competencias fundamentales del proyecto DeSeCo frente a las propuestas por la Unión Europea?",
        "a": "Son competencias metacurriculares, es decir, no están circunscritas a ninguna disciplina o área escolar concreta."
    },
    {
        "id": 1437,
        "q": "Uno de los aspectos fundamentales de la innovación educativa, establece que, esta produce una reorganización del sistema en la que se genera autopoiesis, ¿qué efecto produce específicamente este proceso sobre el sistema?",
        "a": "Hace visible el carácter abierto de cualquier sistema."
    },
    {
        "id": 1438,
        "q": "Las escuelas pacíficas desarrollan proyectos integradores orientados por la sinergia de cinco principios, los cuales son:",
        "a": "Cooperación, comunicación, tolerancia, expresión positiva de las emociones y resolución de conflictos."
    },
    {
        "id": 1439,
        "q": "El aprendizaje orientado a proyectos, como estrategia didáctica, procura que los estudiantes:",
        "a": "Incidan directamente en su proceso mediante construcción, trabajo colaborativo y cooperativo, orientados por el profesor facilitador, logrando competencias a través del «aprender haciendo»."
    },
    {
        "id": 1440,
        "q": "La innovación tiene un profundo sentido de cambio pues produce unas características que no se dan por generación espontánea, ¿qué se debe hacer con estas características para que el espacio de innovación-aprendizaje logre sus impactos en los múltiples ámbitos de la sociedad?",
        "a": "Deben ser deliberadamente construidas y articuladas para que el entorno de aprendizaje transformador genere efectos concretos y sostenidos en los distintos niveles de la vida social."
    },
    {
        "id": 1441,
        "q": "¿Cuál de las siguientes opciones es una función del Director Académico(a) del Instituto?",
        "a": "Elaborar convenios interinstitucionales de articulación con Instituciones públicas y privadas, como herramienta para el beneficio de la formación profesional."
    },
    {
        "id": 1442,
        "q": "El cerebro reptiliano regula las funciones vitales automáticas para mantener la homeostasis corporal. ¿Qué sentido fundamental otorga esta estructura?",
        "a": "Impulsa el dominio territorial y el instinto de preservación."
    },
    {
        "id": 1443,
        "q": "Un maestro planifica una actividad grupal, pero al iniciarla nota que la mayoría de estudiantes no comprende la consigna. Sin consultar ningún documento, reorganiza la actividad en el momento. ¿Cómo denomina Perrenoud ese tipo de respuesta docente?",
        "a": "Improvisación regulada, porque el maestro reacciona ante lo imprevisto desde su hábito profesional sin seguir regla explícita."
    },
    {
        "id": 1444,
        "q": "Según el “Manual de resolución de problemas”, ¿a qué concepto corresponde lo siguiente? “La resolución de problemas es una habilidad esencial para superar obstáculos en la vida diaria.”",
        "a": "Importancia de la resolución de problemas"
    },
    {
        "id": 1445,
        "q": "Según el neuroaprendizaje, ¿cuáles son los dos sistemas diferentes de almacenamiento con los que cuenta la memoria declarativa?",
        "a": "Episódico y semántico."
    },
    {
        "id": 1446,
        "q": "¿Cómo se denomina el grupo de la memoria a largo plazo que contiene información evocada, almacenada y que puede ser recuperada conscientemente?",
        "a": "Explícita."
    },
    {
        "id": 1447,
        "q": "En el campo de la innovación educativa, existe una distinción conceptual fundamental entre la simple mejora o ajuste de lo existente y la innovación propiamente dicha, ¿cuál de las siguientes opciones caracteriza con mayor rigor esa distinción?",
        "a": "Implica una transformación profunda y sostenida de las concepciones, las prácticas pedagógicas y las estructuras institucionales, modificando de manera sustantiva el qué, el cómo y el para qué de la educación."
    },
    {
        "id": 1448,
        "q": "Un buen maestro debe estar familiarizado con algunas prácticas generales de la enseñanza. ¿En qué consiste la práctica denominada «proceder de lo conocido a lo desconocido»?",
        "a": "Consiste en afianzar en los estudiantes lo que ya saben, para que estén listos para aprender el nuevo conocimiento; el maestro debe facilitar las experiencias del estudiante, de modo que al recordarlas se asegure la bienvenida del nuevo conocimiento."
    },
    {
        "id": 1449,
        "q": "Según el texto de Innovación Educativa, ¿qué implica toda innovación educativa en su dimensión pedagógica y cognitiva?",
        "a": "Adentrarse en el terreno de lo desconocido, lo que conlleva ciertas dosis de riesgo, incertidumbre, contradicciones y conflictos, pues no hay aprendizaje sin desequilibrio ni conflicto cognitivo."
    },
    {
        "id": 1450,
        "q": "¿Qué implica necesariamente toda innovación al adentrarse en el terreno de lo desconocido?",
        "a": "Implica ciertas dosis de riesgo, incertidumbre, contradicciones y conflictos, dado que no hay aprendizaje sin desequilibrio ni conflicto cognitivo."
    },
    {
        "id": 1451,
        "q": "En el documento “Convivencia escolar y resolución pacífica de conflictos”, el programa de mediación escolar denominado “Mediación con un adulto como mediador” consiste en:",
        "a": "Comporta la formación del personal adulto (dirección, profesorado, orientador, personal no docente, madres y padres) con el objetivo de intervenir en los conflictos que suceden en el ámbito del centro."
    },
    {
        "id": 1452,
        "q": "Un maestro observa que en su aula los estudiantes compiten constantemente entre sí, los de menor rendimiento se desmotivan y él mismo prioriza proyectar una buena imagen antes que apoyar genuinamente a sus estudiantes. Apoyándonos en el libro «Estilos de aprendizaje y métodos de enseñanza», de Sáez López, ¿cuáles son los dos cambios fundamentales que el maestro debe implementar para revertir esa situación?",
        "a": "Implementar situaciones de recompensas cooperativas en formas no competitivas para promover la motivación para aprender, y actuar motivado por un sentido de responsabilidad moral para ayudar a los estudiantes a aprender."
    },
    {
        "id": 1453,
        "q": "¿Cuál de las siguientes situaciones constituye una causal de pérdida de beneficios para las personas a cargo de una persona con discapacidad?",
        "a": "Impedir o limitar la participación de la persona con discapacidad en actividades sociales, laborales, educativas, culturales, políticas, deportivas o recreacionales."
    },
    {
        "id": 1454,
        "q": "En el marco de las medidas de protección a víctimas de violencia en el ámbito educativo, ¿qué combinación de acciones de la directora o el director y de las maestras o maestros refleja correctamente el protocolo de prevención y atención en casos de violencia?",
        "a": "Impedir la divulgación de los nombres de víctimas y testigos, orientar a la comunidad educativa para apoyar a la víctima sin revictimizarla, realizar adaptaciones curriculares para compensar los días de inasistencia y referir a la víctima de violencia sexual a la DNA o al CEPAT mediante el formato de informe de derivación."
    },
    {
        "id": 1455,
        "q": "¿Qué función cumple la cita irónica de Millás sobre la compra de libros de texto en supermercados en el argumento de Sacristán?",
        "a": "Introducir desde la cultura popular una crítica a la degradación de la consideración intelectual y social del libro de texto."
    },
    {
        "id": 1456,
        "q": "La historia de la coeducación es presentada como un ejemplo especialmente acertado para ilustrar las resistencias al cambio en materia de segregación escolar. Lo que la hace ejemplar en ese sentido es que:",
        "a": "Pone en evidencia que las resistencias ideológicas a la mezcla social en la escuela pueden sostenerse durante largo tiempo amparadas en valores morales y religiosos, dejando una secuela duradera de incomprensión sobre la igualdad."
    },
    {
        "id": 1457,
        "q": "Desde el enfoque de derechos humanos (OREALC, 2007), la excelencia formativa trasciende la eficacia y la eficiencia, articulándose en torno a cinco dimensiones, ¿cuáles son?",
        "a": "Igualdad y equidad social, relevancia, pertinencia, contextualización territorial e interculturalidad como ejes articuladores del derecho a una formación de calidad."
    },
    {
        "id": 1458,
        "q": "En la unidad educativa «Germán Busch» de Guayaramerín, una maestra de Ciencias Sociales aplica el método de caso sobre el conflicto territorial entre comunidades indígenas y empresas madereras. Diseña el caso basándose en los intereses personales de los grupos, pero durante el desarrollo observa dos problemas simultáneos: primero, varios equipos no lograron preparar individualmente el caso antes de la sesión grupal; segundo, algunos integrantes evitaron exponer sus conclusiones por temor a ser cuestionados. Considerando estos dos obstáculos, ¿qué condiciones esenciales del método fueron incumplidas?",
        "a": "Omitieron el estudio previo y preparación individual del caso; además, son reacias a someter sus ideas a la crítica, limitación propia de este método."
    },
    {
        "id": 1459,
        "q": "Una maestra basa su metodología en exposiciones magistrales donde los estudiantes escuchan atentamente, copian definiciones del pizarrón y responden cuestionarios con respuestas predefinidas, considerando que así se garantiza la adquisición del conocimiento. Según los principios de la buena enseñanza, ¿qué limitación fundamental presenta esta forma de enseñar?",
        "a": "Ignora que los estudiantes deben hablar de lo que están aprendiendo, escribir sobre ello, relacionarlo con experiencias pasadas y aplicarlo a su vida cotidiana para aprender significativamente."
    },
    {
        "id": 1460,
        "q": "Para modificar los modelos mentales que obstaculizan el cambio, ¿cuál es el primer paso indispensable según la perspectiva de la innovación educativa?",
        "a": "Identificarlos, observarlos y reconocer cómo están actuando sobre uno mismo, así como el efecto que tienen sobre las propias acciones."
    },
    {
        "id": 1461,
        "q": "¿Cuáles son las funciones que cumplirá el Sistema de Administración de Personal en procura de la eficiencia en la función pública?",
        "a": "Determinará los puestos de trabajo efectivamente necesarios, los requisitos y mecanismos para proveerlos, implantará regímenes de evaluación y retribución del trabajo, desarrollará las capacidades y aptitudes de los servidores y establecerá los procedimientos para el retiro de los mismos."
    },
    {
        "id": 1462,
        "q": "Según la Lección 8 “Comparar y contrastar” del “Manual de resolución de problemas”, comparar implica identificar similitudes entre dos o más elementos, mientras que contrastar se enfoca en:",
        "a": "Identificar sus diferencias."
    },
    {
        "id": 1463,
        "q": "Un estudiante aprende mejor cuando el maestro explica en voz alta, utiliza debates, ritmos o canciones para presentar los contenidos. Según el modelo de estilos de aprendizaje, ¿qué implicación pedagógica tiene para el maestro identificar este perfil predominante en su grupo mediante test?",
        "a": "Identificar que predomina el estilo auditivo en ese perfil orienta al docente a planear sus clases contemplando entradas sensoriales variadas que lleguen también a los estudiantes visuales y kinestésicos del grupo."
    },
    {
        "id": 1464,
        "q": "En la Lección 9 “Implementar y evaluar” del “Manual de resolución de problemas”, una buena planificación ayuda a:",
        "a": "Anticipar obstáculos y cumplir con los tiempos establecidos, asegurando así una implementación más eficiente y efectiva."
    },
    {
        "id": 1465,
        "q": "¿Cuál de las siguientes ocpiones de respuesta describe con mayor precisión la competencia central que caracteriza al nivel inicial de desarrollo de competencias TIC docentes propuesto por la UNESCO?",
        "a": "Identificar herramientas digitales básicas, incorporar recursos multimedia en la clase y cumplir las políticas institucionales de uso de TIC."
    },
    {
        "id": 1466,
        "q": "Feito utiliza la teoría de las inteligencias múltiples de Gardner principalmente para argumentar que:",
        "a": "Las dos inteligencias que la escuela privilegia son insuficientes para dar cuenta de la diversidad real de formas en que las personas aprenden."
    },
    {
        "id": 1467,
        "q": "Según el documento “Convivencia escolar y resolución pacífica de conflictos”, ¿qué estrategias propone Francisco Cascón (2000) para afrontar los conflictos adecuadamente en los centros educativos?",
        "a": "Crear grupo en un ambiente de aprecio y confianza, favorecer la comunicación, tomar las decisiones por consenso y trabajar la cooperación."
    },
    {
        "id": 1468,
        "q": "De acuerdo al documento “Convivencia Escolar y Resolución Pacífica de Conflictos”, las fases de la mediación no difieren de las otras técnicas de resolución de conflictos. No obstante, su singularidad reside en la:",
        "a": "Creación, en el marco de cualquier organización, de un sistema de comunicación y de relaciones más horizontal, de manera que se implanta, en nuestro caso en los centros educativos, una forma diferente de gestionar los conflictos."
    },
    {
        "id": 1469,
        "q": "¿Cuáles son las actuaciones que deben seguirse cuando se conoce un caso de violencia contra niñas, niños y adolescentes?",
        "a": "Detección de la violencia, intervención, referencia si corresponde y contrarreferencia o seguimiento."
    },
    {
        "id": 1470,
        "q": "¿Cuál de las siguientes consecuencias a mediano plazo por agresión, pertenece a la categoría emocional?",
        "a": "Ideas suicidas y/o intento de suicidio."
    },
    {
        "id": 1471,
        "q": "La “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo” establece que en el maltrato psicológico existen tres niveles de riesgo. ¿Cuál de las siguientes opciones corresponde al riesgo ALTO?",
        "a": "Los insultos, control excesivo, amenazas, rechazo o aislamiento del NNA son habituales y producen daño notorio en los ámbitos: emocional, desarrollo y relaciones sociales."
    },
    {
        "id": 1472,
        "q": "Según Howard Gardner los campos en los que se moviliza la inteligencia humana son: lingüística, lógico – matemática, musical, espacial, corporal – kinestésica, interpersonal, intrapersonal y:",
        "a": "Naturalista"
    },
    {
        "id": 1473,
        "q": "¿A quién se atribuye la frase «No somos responsables de las emociones, pero sí de lo que hacemos con las emociones»?",
        "a": "Jorge Bucay."
    },
    {
        "id": 1474,
        "q": "¿Qué propósito cumple la reflexión sobre el alcance de las mejoras emprendidas en el aula o en la gestión institucional?",
        "a": "Reconocer si los cambios emprendidos son simples mejoras pasajeras o si apuntan efectivamente a transformaciones más profundas y duraderas."
    },
    {
        "id": 1475,
        "q": "La racionalidad taylorista aplicada a la organización escolar se plasma en un modelo que tiene como base una lógica específica. Esa lógica consiste en:",
        "a": "Dividir procesos complejos en acciones parciales encadenadas gradualmente, especializando los tratamientos a cargo de expertos en cada tarea, asignatura o curso."
    },
    {
        "id": 1476,
        "q": "Al asociar los grados con la edad de los estudiantes, el currículum asumió una función que excede la mera organización de contenidos. ¿Cuál es esa función?",
        "a": "Actuar como regulador de las personas, normando el ritmo y la progresión esperada a lo largo de la escolaridad."
    },
    {
        "id": 1477,
        "q": "Desde el enfoque de integración de TIC en la formación docente, ¿cuál es la función principal que cumple la tecnología en relación con los contenidos disciplinares que los futuros docentes deben enseñar?",
        "a": "Permitir acceder a recursos del mundo real, proveer herramientas para analizar y sintetizar información, y transmitir contenidos a través de distintos medios y formatos."
    },
    {
        "id": 1478,
        "q": "¿Cuál es la paradoja estructural que Sacristán identifica en el poder regulador del currículum respecto a la organización de contenidos y la práctica docente?",
        "a": "Unifica la enseñanza y simultáneamente refuerza fronteras disciplinares, limitando la autonomía docente."
    },
    {
        "id": 1479,
        "q": "Según el modelo del cerebro triuno, ¿desde qué etapa de la evolución humana se conserva esta estructura cerebral en tres niveles?",
        "a": "Homo sapiens sapiens."
    },
    {
        "id": 1480,
        "q": "Desde la neurociencia, ¿qué estructuras cerebrales intervienen directamente en el almacenamiento de la información aprendida?",
        "a": "Hipocampo y corteza."
    },
    {
        "id": 1481,
        "q": "El modelo del Cerebro Triuno describe tres estructuras cerebrales con funciones diferenciadas que evolucionaron de forma secuencial. ¿Cuál de las siguientes opciones identifica correctamente las tres estructuras que conforman este modelo?",
        "a": "Complejo reptiliano, sistema límbico y neocórtex."
    },
    {
        "id": 1482,
        "q": "Según la neurociencia, ¿cuáles son los dos módulos que se encuentran dentro del sistema límbico?",
        "a": "Hipocampo y amígdala."
    },
    {
        "id": 1483,
        "q": "Desde la neurociencia educativa, ¿qué estructura cerebral resulta comprometida cuando la enseñanza omite el componente afectivo, afectando directamente la codificación y retención de nuevos saberes?",
        "a": "Amígdala libera neurotransmisores que regulan la plasticidad sináptica."
    },
    {
        "id": 1484,
        "q": "¿Qué herramientas novedosas ofrecen las TIC a los alumnos para representar su conocimiento?",
        "a": "Herramientas para representar su conocimiento por medio de texto, imágenes, gráficos y video."
    },
    {
        "id": 1485,
        "q": "Los métodos de enseñanza dependen de una serie de factores tales como el nivel de desarrollo de los estudiantes, las metas, la intención, los objetivos, el contenido y el entorno, incluyendo el tiempo, el entorno físico y los recursos. Un buen maestro debe estar familiarizado con algunas prácticas generales de la enseñanza. Una de ellas es «Proceder de lo conocido a lo desconocido». ¿Cuál de las siguientes opciones caracteriza correctamente esta práctica?",
        "a": "Hay que afianzar a los estudiantes lo que ya saben, para que estén listos para aprender el nuevo conocimiento. El maestro debe facilitar las experiencias del estudiante, que al recordarlas se asegura la bienvenida del nuevo conocimiento."
    },
    {
        "id": 1486,
        "q": "Según la tabla de valoración del riesgo de la “Guía para la Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de las siguientes opciones describe el nivel de riesgo MEDIO en la categoría “omisión”?",
        "a": "Hay omisiones que determinan una ligera afectación en el crecimiento, desarrollo, educación, salud y relaciones sociales de la niña, niño o adolescente."
    },
    {
        "id": 1487,
        "q": "¿Cuál es el monto máximo de multa que puede aplicarse como sanción administrativa a un servidor público por responsabilidad administrativa?",
        "a": "Hasta un veinte por ciento de la remuneración mensual."
    },
    {
        "id": 1488,
        "q": "Cuando la Directora o el Director Departamental de Educación denuncia actos de violencia sexual contra estudiantes del Sistema Educativo Plurinacional, ¿hasta qué etapa debe proseguir las acciones judiciales?",
        "a": "Hasta la conclusión del proceso penal."
    },
    {
        "id": 1489,
        "q": "¿Hasta qué grado de parentesco consanguíneo o afín comprende el sujeto activo del delito de violencia familiar o doméstica?",
        "a": "Hasta el cuarto grado en línea directa y colateral."
    },
    {
        "id": 1490,
        "q": "En un proceso disciplinario en el sistema educativo boliviano, ¿cuál es el plazo máximo de suspensión temporal sin goce de haberes que puede aplicarse a un maestro como sanción?",
        "a": "Hasta sesenta (60) días hábiles"
    },
    {
        "id": 1491,
        "q": "La posición de que ningún currículum común puede ser neutral, pues la cultura que transmite refleja valores de grupos dominantes y no garantiza equidad real entre culturas distintas, ¿a qué autor corresponde, según María Clemente Linuesa?",
        "a": "Apple"
    },
    {
        "id": 1492,
        "q": "¿Qué impacto han generado las TIC en el ámbito laboral y en las exigencias de la fuerza de trabajo?",
        "a": "Han cambiado la naturaleza del trabajo y el tipo de habilidades necesarias en la mayoría de los oficios y profesiones, exigiendo que la fuerza de trabajo adquiera nuevos conocimientos y habilidades."
    },
    {
        "id": 1493,
        "q": "¿Qué término designa el estado óptimo de alerta sensorial plena durante el proceso atencional?",
        "a": "UPTIME"
    },
    {
        "id": 1494,
        "q": "¿Hacia dónde debe conducir la innovación educativa en las instituciones que asumen desafíos de transformación?",
        "a": "Hacia crecientes niveles de crecimiento de los docentes y las escuelas, lo cual redundará en un mayor desarrollo y aprendizaje de los y las estudiantes."
    },
    {
        "id": 1495,
        "q": "Desde la neurociencia del aprendizaje, la información procesada en la memoria de trabajo debe ser transferida hacia otro sistema para consolidarse de manera duradera. ¿Hacia qué sistema debe transferirse para lograr la consolidación de la red neuronal?",
        "a": "Hacia la memoria de largo plazo"
    },
    {
        "id": 1496,
        "q": "¿Hacia qué propósito se orienta la propuesta didáctica que vincula el razonamiento lógico con los procesos cognitivos mediante el uso de material concreto?",
        "a": "Hacia la promoción del razonamiento numérico y su relación con memoria, atención, percepción y lenguaje ante situaciones que exigen manipulación de objetos."
    },
    {
        "id": 1497,
        "q": "Desde la perspectiva de la Innovación Educativa, ¿cuál es el propósito central de la educación respecto a la cultura de innovación?",
        "a": "Hacer que la innovación se convierta en una cultura y no solo una moda, siendo la educación central en la formación de dicha cultura."
    },
    {
        "id": 1498,
        "q": "¿A qué conjunto de capacidades corresponde la habilidad de identificar las partes de un problema, plantear hipótesis pertinentes, trabajar colaborativamente, recurrir a fuentes confiables y sustentar posiciones con argumentos sólidos?",
        "a": "Competencias y habilidades prácticas, que integran el análisis crítico de situaciones, la colaboración, el uso de fuentes válidas y la defensa argumentada de conclusiones."
    },
    {
        "id": 1499,
        "q": "¿Cómo ha evolucionado la valoración de habilidades como los cálculos aritméticos, la caligrafía y la memorización en el contexto del proceso de enseñanza-aprendizaje a lo largo del tiempo?",
        "a": "Habilidades como los cálculos aritméticos y la caligrafía se han convertido en algo especializado con menor importancia práctica en la vida social, de manera similar a lo ocurrido con la memorización como soporte del proceso enseñanza-aprendizaje."
    },
    {
        "id": 1500,
        "q": "Un maestro afirma que ciertos estudiantes «simplemente no pueden aprender» determinados contenidos porque así nació su cerebro. ¿Qué es la neuroplasticidad y cuál es su implicación más relevante para el aula?",
        "a": "Propiedad del cerebro de modificar su estructura y conexiones en respuesta a la experiencia; las decisiones pedagógicas pueden generar nuevos circuitos."
    },
    {
        "id": 1501,
        "q": "¿Qué caracteriza al principio de proceder del análisis a la síntesis?",
        "a": "Una mezcla juiciosa de ambos, ni puramente analítico ni puramente sintético."
    },
    {
        "id": 1502,
        "q": "Una persona presenta síntomas y secuelas que le causan una disminución importante para realizar algunas actividades de la vida diaria, pero se mantiene independiente en sus actividades de autocuidado. ¿A qué grado de discapacidad corresponde esta calificación?",
        "a": "Grado de Discapacidad Moderada"
    },
    {
        "id": 1503,
        "q": "Un Centro de Habilitación y Rehabilitación debidamente acreditado desea importar equipos especializados para sus beneficiarios. ¿Cuál es el alcance y la limitación correcta del beneficio tributario que el Estado Plurinacional le otorga para dicha importación?",
        "a": "Goza de exención total de tributos para importar órtesis, prótesis y ayudas técnicas usadas en habilitación y rehabilitación y los bienes importados no pueden ser transferidos a título oneroso."
    },
    {
        "id": 1504,
        "q": "Tomando en cuenta la neurociencia, ¿cómo se llama el epicentro de la atención ejecutiva que contribuye a mantenerla de manera voluntaria?",
        "a": "Corteza cingulada anterior."
    },
    {
        "id": 1505,
        "q": "¿Qué diferencia de intención argumentativa distingue a Gimeno Sacristán de Perrenoud en sus respectivos aportes sobre el currículum?",
        "a": "Gimeno Sacristán adopta una intención diagnóstico-propositiva; Perrenoud una intención analítico-comprensiva sin prescripciones explícitas."
    },
    {
        "id": 1506,
        "q": "Según el libro de Marilina Rotger, ¿Con qué recursos se deben trabajar para interpretar las sensaciones corporales, identificar la emoción y elegir el sentimiento,?",
        "a": "Sonidos, historias, cuentos."
    },
    {
        "id": 1507,
        "q": "¿Cuál de las siguientes opciones es una función del Rector del Instituto?",
        "a": "Diseñar, definir y ejecutar políticas, planes, programas y proyectos que promuevan la articulación con el sector productivo para que beneficien el crecimiento académico de las y los estudiantes."
    },
    {
        "id": 1508,
        "q": "¿Qué acción debe realizar el Rectorado para garantizar la óptima utilización de los recursos necesarios para el funcionamiento del Instituto?",
        "a": "Gestionar ante las instancias correspondientes los recursos necesarios para el funcionamiento del Instituto garantizando la óptima utilización de los mismos."
    },
    {
        "id": 1509,
        "q": "En el proyecto de innovación educativa “El agua, asunto vital para todos”, ¿qué descriptores caracterizan la naturaleza de dicha innovación?",
        "a": "Relación con el medio ambiente, fortalecimiento comunal y currículo transversal."
    },
    {
        "id": 1510,
        "q": "De acuerdo con el análisis de la UNESCO sobre TIC y formación docente, ¿qué efecto tuvo el enfoque «mecanicista» de las revoluciones industriales sobre el concepto amplio de innovación en las sociedades?",
        "a": "Redujo la capacidad transformadora del cambio tecnológico al convertirlo en una repetición sistemática de esquemas fijos, alejándolo de su potencial disruptivo y creativo."
    },
    {
        "id": 1511,
        "q": "En el contexto del aprendizaje, comprender cómo se comunican las neuronas es fundamental para el maestro. ¿Cuál es la función principal de los neurotransmisores en la comunicación neuronal?",
        "a": "Transmitir información de una célula nerviosa a otra a través de la sinapsis mediante moléculas específicas."
    },
    {
        "id": 1512,
        "q": "¿Cuál es la función central de las prácticas en contextos reales dentro del diseño curricular en la formación profesional, considerando el binomio teoría-práctica y el rol de los actores involucrados en la planificación formativa?",
        "a": "Propiciar la reflexión conjunta de profesores y estudiantes, desarrollar competencias genéricas y específicas mediante la aplicación de saberes en ámbitos disciplinares auténticos, logrando que los estudiantes se empoderen en la escena real y construyan identidad profesional."
    },
    {
        "id": 1513,
        "q": "¿Qué efecto genera el pasaje de un aprendizaje centrado en el docente hacia uno centrado en el alumno?",
        "a": "Puede crear un entorno de aprendizaje más interactivo y más motivador tanto para los alumnos como para los propios docentes."
    },
    {
        "id": 1514,
        "q": "Una característica esencial del cambio pedagógico es la dinámica que genera en relación con sus propios procedimientos, ¿en qué consiste dicha dinámica y qué habilidad fortalece en quienes la protagonizan?",
        "a": "Genera una dinámica de acción con aprendizaje, estableciendo una reflexión continua que posibilita a los actores aprender de aciertos y desaciertos del recorrido."
    },
    {
        "id": 1515,
        "q": "Desde la perspectiva del neuroaprendizaje, ¿cuál es la razón fundamental por la que los maestros deben incorporar conocimientos de neurociencia en su práctica pedagógica?",
        "a": "Genera nuevas comprensiones sobre el funcionamiento cerebral que optimizan los procesos de enseñanza y aprendizaje"
    },
    {
        "id": 1516,
        "q": "Según Blase y Blase (1994) en el texto Innovación Educativa, ¿cuál es el efecto específico del liderazgo facilitador del director sobre la dimensión política de la participación docente en la toma de decisiones escolares?",
        "a": "Genera incrementos sustanciales en la implicación docente, la expresión de opiniones y el compromiso con las decisiones alcanzadas democráticamente."
    },
    {
        "id": 1517,
        "q": "Dentro de las responsabilidades para el Fortalecimiento de la Educación Inclusiva, ¿cuál de las siguientes afirmaciones corresponde a una responsabilidad del maestro de apoyo?",
        "a": "Promover la creación de condiciones necesarias y pertinentes de accesibilidad pedagógica."
    },
    {
        "id": 1518,
        "q": "Hacer que la innovación se convierta en una cultura y no solo en una moda implica trabajar desde una actitud crítica fundamentada en principios, ¿cuál es el propósito central de asumir dicha actitud crítica en el ámbito educativo?",
        "a": "Evitar la trampa del cambio por el cambio y el rechazo al pasado sin su conocimiento, orientando la transformación pedagógica desde referentes que le otorguen sentido y dirección."
    },
    {
        "id": 1519,
        "q": "¿Qué función cumple la evaluación informal que el maestro practica a diario?",
        "a": "Controlar el compromiso del alumno con la tarea y ejercer sobre la calidad de su trabajo un juicio permanente y cotidiano."
    },
    {
        "id": 1520,
        "q": "Un maestro de matemática de secundaria, al enseñar el concepto de fracción, reparte físicamente una naranja entre cuatro estudiantes antes de introducir la notación simbólica ¼. ¿Qué principio pedagógico fundamenta esta estrategia y cuál es su propósito central según los principios de la enseñanza?",
        "a": "Acercar al estudiante mediante objetos concretos, actividades y ejemplos, dado que la imaginación es muy ayudada por el material concreto, para luego conducir a niveles más altos de pensamiento."
    },
    {
        "id": 1521,
        "q": "Ante situaciones de violencia en unidades educativas, una vez que el Director o Directora ha registrado el caso y determinado que requiere derivación externa, ¿cuál es el orden correcto de las acciones que se deben seguir?",
        "a": "Garantizar la protección y contención emocional del estudiante, informar y orientar a la familia, derivar a la Defensoría de la Niñez y Adolescencia y notificar al Distrito Educativo."
    },
    {
        "id": 1522,
        "q": "El Docente del Instituto implementa estrategias metodológicas apoyadas en las TICs, ¿cuál es la finalidad específica de dicha función?",
        "a": "Garantizar la participación activa de las y los estudiantes en el proceso formativo."
    },
    {
        "id": 1523,
        "q": "De acuerdo a la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, en la contrarreferencia o seguimiento, cuando los casos son derivados a las instancias de protección, la autoridad educativa debe dar seguimiento a las medidas de protección dictaminadas para la víctima (en el marco de su competencia) en el proceso judicial o administrativo, al interior de la institución educativa, con el fin de:",
        "a": "Garantizar la debida protección que la niña, el niño o adolescente requiera."
    },
    {
        "id": 1524,
        "q": "Un grupo de docentes experimenta confusión y desequilibrio al implementar nuevas prácticas pedagógicas. De acuerdo con las ideas planteadas en Innovación Educativa, ¿qué condición institucional resulta indispensable para que ese momento inicial no se convierta en un obstáculo?",
        "a": "Disponer de un clima institucional de confianza y apoyo que permita a los docentes asumir riesgos pedagógicos sin que los errores sean censurados durante el proceso de innovación."
    },
    {
        "id": 1525,
        "q": "La directora o el director de la unidad educativa y/o centro de educación especial debe asegurarse de que todas las acciones que se efectúan en un proceso de intervención con la víctima estén encaminadas a:",
        "a": "Garantizar el interés superior de la niña, el niño y/o adolescente, por encima del interés de las funcionarias o funcionarios del plantel docente y/o administrativo, madres y padres de familia y/o representantes legales, inclusive por encima de la reputación de la institución educativa."
    },
    {
        "id": 1526,
        "q": "De acuerdo a la Ley de Discapacidad, ¿cuál de las siguientes opciones queda FUERA de los fines establecidos en dicha norma?",
        "a": "Garantizar a las personas con discapacidad el ejercicio pleno de sus derechos, deberes y obligaciones en igualdad de condiciones."
    },
    {
        "id": 1527,
        "q": "¿Cuál es la definición del objeto de la Ley General para personas con discapacidad?",
        "a": "Garantizar a las personas con discapacidad el ejercicio pleno de sus derechos y deberes en igualdad de condiciones y equiparación de oportunidades, trato preferente bajo un sistema de protección integral."
    },
    {
        "id": 1528,
        "q": "Un equipo docente argumenta que la interdisciplinariedad mejora la comprensión de los estudiantes porque presenta el conocimiento de forma integrada. ¿Qué beneficio adicional, menos evidente, señala Clemente Linuesa sobre esta forma de organización?",
        "a": "Favorece la colaboración docente y el uso de materiales distintos al libro de texto."
    },
    {
        "id": 1529,
        "q": "Según María Clemente Linuesa, cuando las administraciones prescriben aspectos metodológicos o formas de evaluación, ¿qué consecuencia implícita tiene ello sobre la naturaleza del diseño curricular?",
        "a": "Reduce el diseño curricular a una cuestión técnica, despojando al docente de su condición de profesional autónomo y convirtiendo la enseñanza en ejecución de instrucciones externas."
    },
    {
        "id": 1530,
        "q": "El Sistema de Contabilidad Integrada, además de incorporar transacciones presupuestarias, financieras y patrimoniales, debe asegurar que el sistema contable específico para cada entidad:",
        "a": "Responda a la naturaleza de las entidades y a sus requerimientos operativos y gerenciales, respetando los principios y normas de aplicación general."
    },
    {
        "id": 1531,
        "q": "Una maestra nota que sus estudiantes prestan más atención cuando introduce una actividad inesperada. Desde el neuroaprendizaje, ¿qué sustancia cerebral explica principalmente esta respuesta de alerta y concentración ante la novedad?",
        "a": "Noradrenalina."
    },
    {
        "id": 1532,
        "q": "¿Qué distingue al modelo de proceso de Stenhouse respecto del diseño en el ámbito del aula, según «Diseñar el currículum»?",
        "a": "Centra el diseño en la organización de contenidos, actividades y evaluación continua de sujetos y prácticas."
    },
    {
        "id": 1533,
        "q": "¿Qué papel cumplieron la investigación-acción, la autoevaluación y la sistematización dentro de los procesos de innovación educativa?",
        "a": "Funcionaron como estrategias esenciales para alimentar y sostener las innovaciones, y como herramientas de formación profesional."
    },
    {
        "id": 1534,
        "q": "¿Qué función cumple el desarrollo de un clima de cooperación y trabajo compartido en una institución que aspira a mantener dinámicas de transformación pedagógica?",
        "a": "Constituye una condición colectiva que potencia la capacidad del profesorado para impulsar, sostener y enriquecer las dinámicas de renovación pedagógica de manera continua."
    },
    {
        "id": 1535,
        "q": "Según el modelo del «Cerebro triuno», ¿cuál es el cerebro que constituye la sede del pensamiento reflexivo y distingue al ser humano del resto de las especies?",
        "a": "Racional"
    },
    {
        "id": 1536,
        "q": "En el documento “Convivencia escolar y resolución pacífica de conflictos” ¿qué autor menciona que la construcción de la Cultura de Paz implica necesariamente una revisión de las prácticas discriminatorias de las mujeres en el contexto escolar?",
        "a": "Atable"
    },
    {
        "id": 1537,
        "q": "Según la tabla de señales y consecuencias de la violencia a largo plazo en la adolescencia, establecidas en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de los siguientes enunciados corresponde al área cognitiva?",
        "a": "Autoconcepto y autovaloración disminuida."
    },
    {
        "id": 1538,
        "q": "Según el documento “Convivencia escolar y resolución pacífica de conflictos”, la calidad de la convivencia educativa es un elemento decisivo en la configuración de la convivencia social, pues la comunidad educativa constituye un espacio único y privilegiado de formación y de ejercicio de la ciudadanía democrática. De este modo, los centros educativos se convierten en lugares idóneos para:",
        "a": "Aprender a vivir juntos, esencia básica de la Cultura de la Paz."
    },
    {
        "id": 1539,
        "q": "El Estado Plurinacional, respecto a las formas de auto organización de las personas con discapacidad adoptadas para la defensa de sus derechos y obligaciones civiles, sociales y económicas, asume el compromiso de:",
        "a": "Promover todas sus formas de auto organización y garantizar su participación efectiva en la toma de decisiones en materia de políticas públicas permanentes sobre discapacidad."
    },
    {
        "id": 1540,
        "q": "La recomendación “Mantener un interés efectivo en el caso para fortalecer la relación y confianza tanto de la niña, niño o adolescente y su familia”, dentro de la tabla del rol de maestras y maestros en la detección de violencia intrafamiliar, ¿a qué elemento para la intervención corresponde?",
        "a": "Fortalecer la relación."
    },
    {
        "id": 1541,
        "q": "¿Qué debe impulsar la Dirección Administrativa respecto al trabajo del personal a su cargo en relación al cuidado y buen uso de los bienes y servicios del Instituto?",
        "a": "Fomentar el trabajo en equipo interdisciplinario de las diferentes jefaturas o responsables de carrera a su cargo que generen procesos de concienciación, cuidado y buen uso de los bienes y servicios del Instituto."
    },
    {
        "id": 1542,
        "q": "Ante la insuficiencia de las prácticas educativas tradicionales para preparar a los estudiantes frente a las demandas del mundo laboral actual, ¿cuál es el rol fundamental que deben asumir los docentes en su labor pedagógica?",
        "a": "Formar a los estudiantes en la aplicación de estrategias para resolver situaciones reales, empleando herramientas que potencien el aprendizaje, el cálculo, el trabajo colaborativo y la comunicación."
    },
    {
        "id": 1543,
        "q": "Según el texto “Convivencia escolar y resolución pacífica de conflictos”, es necesario considerar la convivencia escolar como un proceso caracterizado por una especial relación comunicativa entre todos los miembros de la comunidad educativa, con miras a:",
        "a": "Construir cada vez mayores espacios de confianza y de consenso."
    },
    {
        "id": 1544,
        "q": "“Según el “”Manual de resolución de problemas””, la resolución de problemas es una habilidad esencial para superar obstáculos en la vida diaria. Entre los beneficios de desarrollar esta habilidad se incluyen: Contribuye al bienestar: ¿en qué consiste este beneficio?",
        "a": "Te ayuda a mantener un equilibrio emocional al poder enfrentar y superar desafíos.”"
    },
    {
        "id": 1545,
        "q": "Un profesor de secundaria decide reorganizar su clase de ciencias implementando proyectos grupales donde los estudiantes investigan, debaten y presentan soluciones colectivas, en lugar de evaluaciones individuales competitivas. Según los principios de la buena enseñanza, ¿qué característica fundamental define este tipo de aprendizaje?",
        "a": "Es colaborativo y social, no competitivo y aislado, y trabajar con otros a menudo aumenta la participación y el aprendizaje."
    },
    {
        "id": 1546,
        "q": "Según el “Manual de resolución de problemas”, la resolución de problemas es una habilidad esencial para superar obstáculos en la vida diaria. Entre los beneficios de desarrollar esta habilidad se incluyen: Las habilidades para el futuro. ¿En qué consiste este beneficio?",
        "a": "Te prepara para manejar situaciones difíciles en la vida adulta y en el trabajo."
    },
    {
        "id": 1547,
        "q": "¿Qué documentos debe presentar el estudiante ante la Dirección Departamental de Educación para solicitar el traspaso a otro Instituto?",
        "a": "Carta de solicitud de traspaso, fotocopia simple de Cédula de Identidad y Certificados de Calificaciones originales o historial académico emitidos por el Instituto de origen para su legalización."
    },
    {
        "id": 1548,
        "q": "La propuesta del profesor Osborne sobre cómo promover debates en clase invierte la lógica habitual de la enseñanza al sugerir que:",
        "a": "Preocuparse menos por transmitir la idea correcta y más por explicar el error ajeno produce un conocimiento más sólido en el alumnado."
    },
    {
        "id": 1549,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que la comprensión de la violencia social o de la violencia juvenil requiere en su estudio, junto a una buena definición de las mismas, el auxilio de diversas disciplinas (etología, ciencias biológicas, psicología, sociología, ciencias políticas, criminología...) y la adopción de enfoques tanto:",
        "a": "Correctivos como preventivos."
    },
    {
        "id": 1550,
        "q": "Cuando Gimeno Sacristán et al. plantean que la democracia actual exige a la ciudadanía opinar sobre asuntos cada vez más complejos, ¿qué responsabilidad específica atribuyen a la institución escolar?",
        "a": "Formar sujetos con la preparación intelectual suficiente para ejercer una participación política informada y crítica."
    },
    {
        "id": 1551,
        "q": "¿Qué respuesta ofrece Feito a la pregunta sobre cuál debería ser el sentido del currículum en la enseñanza obligatoria?",
        "a": "Formar personas capaces de aprender permanentemente, participar como ciudadanos, desenvolverse en el trabajo y desarrollar un proyecto personal de vida."
    },
    {
        "id": 1552,
        "q": "¿Qué papel atribuye Perrenoud a la escuela primaria en la formación del sentido común, a diferencia de otros espacios de socialización?",
        "a": "Formar las rutinas intelectuales mediante las cuales se dan por evidentes e indiscutibles múltiples facetas de la realidad."
    },
    {
        "id": 1553,
        "q": "¿Cuál es la combinación de medidas preventivas que la unidad educativa debe implementar de forma articulada, con relación a la obediencia a ciegas hacia un adulto de la comunidad educativa?",
        "a": "Formar estudiantes con pensamiento reflexivo y crítico."
    },
    {
        "id": 1554,
        "q": "Además de transmitir conocimientos disciplinares, el maestro de hoy enfrenta el desafío de formar personas capaces de afrontar los retos de la vida. ¿Qué implica asumir este rol desde una perspectiva integral del aprendizaje?",
        "a": "Formar a los estudiantes no solo con conocimientos académicos, sino también con herramientas, habilidades sociales y emocionales que les permitan reconocer y gestionar sus emociones, relacionarse efectivamente y afrontar los desafíos de la vida."
    },
    {
        "id": 1555,
        "q": "Durante una jornada pedagógica, un maestro observa que varios estudiantes de secundaria manifiestan obediencia ciega ante las indicaciones de sus compañeros mayores, sin cuestionar situaciones que claramente vulneran su bienestar. Según las medidas generales de prevención de violencia, ¿qué acción preventiva debe priorizar el maestro para revertir esta situación?",
        "a": "Formar a los estudiantes con pensamiento reflexivo y crítico, estimulando su capacidad y derecho a opinar y disentir respetuosamente frente a pares y adultos, orientándolos hacia la autoprotección y el ejercicio de su autonomía de criterio."
    },
    {
        "id": 1556,
        "q": "Un niño que arma y desarma estructuras con precisión ha desarrollado inteligencia lógico- matemática, así como:",
        "a": "Espacial"
    },
    {
        "id": 1557,
        "q": "El jigsaw o puzle es una técnica de aprendizaje cooperativo en la que los estudiantes trabajan en grupos pequeños con distintos roles. Según Johnson et al. (1998), ¿cuáles son los pasos del procedimiento de la técnica puzle en el aprendizaje cooperativo?",
        "a": "Formación de grupos de trabajo, preparación en pares, reunión de expertos y retorno al grupo original."
    },
    {
        "id": 1558,
        "q": "En el modelo de entrenamiento o institucional, según Imbernón, ¿cuáles son las condiciones necesarias para incidir en la práctica posterior en el aula?",
        "a": "Formación adecuada, oportunidades para resolver problemas, normas para apoyar la experimentación y estructuras organizativas que facilitan el aprendizaje."
    },
    {
        "id": 1559,
        "q": "Dirigir las experiencias de aprendizaje hacia los sentimientos de éxito en un esfuerzo por alentar un nivel real de aspiración, una orientación hacia el logro y un concepto positivo de sí mismo, supone:",
        "a": "Hacer uso de objetivos que son desafiantes pero alcanzables para los estudiantes."
    },
    {
        "id": 1560,
        "q": "En el proyecto descrito en el texto de Innovación Educativa, ¿cuál fue el propósito central que se buscaba promover en los niños, articulando la capacidad investigativa con procesos de formación ética orientados al cuidado del entorno natural?",
        "a": "Promover la capacidad investigativa y para el trabajo, generando procesos de formación ética que incidan en actitudes de protección, racionalización y prevención hacia el agua y el medio ambiente."
    },
    {
        "id": 1561,
        "q": "Un docente solicita a sus estudiantes que redacten expresiones afectuosas sobre cada uno de sus pares y las compartan entre sí. Según la neurociencia, ¿qué beneficio aporta esta dinámica al proceso educativo?",
        "a": "Eleva la confianza interna, detona vínculos afectivos grupales y predispone al cerebro hacia nuevos saberes."
    },
    {
        "id": 1562,
        "q": "Según los estudios del neuroaprendizaje, ¿cuáles son las redes que integran la atención?",
        "a": "Foco, conciencia y la ejecutiva."
    },
    {
        "id": 1563,
        "q": "¿Qué tipos de deficiencias de función reconoce expresamente la Ley General para personas con discapacidad en su definición de discapacidad?",
        "a": "Físicas, psíquicas, intelectuales y/o sensoriales."
    },
    {
        "id": 1564,
        "q": "Según la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, la violencia puede clasificarse de acuerdo con el tipo de comportamiento o expresión. Esta clasificación, a su vez, se subclasifica según las modalidades de agresión en:",
        "a": "Física, psicológica, sexual, sexual-comercial, explotación laboral y negligencia o abandono."
    },
    {
        "id": 1565,
        "q": "¿Cuál es la atribución del Consejo Nacional de Lucha Contra la Corrupción respecto al Plan Nacional de Lucha Contra la Corrupción?",
        "a": "Aprobar el Plan Nacional de Lucha Contra la Corrupción elaborado por el Ministerio del ramo responsable de esas funciones."
    },
    {
        "id": 1566,
        "q": "Según el texto “Convivencia escolar y resolución pacífica de conflictos” menciona que “Los jóvenes participantes (12 a 16 años) han desarrollados proyectos centrados en las relaciones interpersonales, la resolución de conflictos y la mejora del medioambiente, e intercambiando experiencias de solidaridad con el movimiento de los “niños/as de la calle” ¿en qué países implementaron estos proyectos?",
        "a": "Las relaciones interpersonales, la resolución de conflictos y la mejora del medioambiente."
    },
    {
        "id": 1567,
        "q": "Bolívar concibe los procesos clave en la configuración del centro docente como una organización que aprende (OA), considerando cuatro condiciones para fomentar dicha condición en la escuela: dos internas (experiencia anterior de desarrollo, e historia y cultura escolar) y dos externas. ¿Cuáles son esas dos condiciones externas?",
        "a": "Cambios en el entorno y cambios en la política educativa."
    },
    {
        "id": 1568,
        "q": "Dentro de los ejercicios para promover la atención, ¿en qué consiste el ejercicio de estímulo correcto y cuál es su propósito específico en el aula?",
        "a": "Identificar rápidamente un estímulo específico dentro de una imagen con múltiples distractores, entrenando la selección relevante frente a información irrelevante."
    },
    {
        "id": 1569,
        "q": "Un maestro observa que sus estudiantes pueden repetir definiciones y datos inmediatamente después de la clase, pero no logran aplicarlos ni transferirlos a nuevas situaciones. ¿En qué consiste este tipo de procesamiento?",
        "a": "Reproducción pasiva de información"
    },
    {
        "id": 1570,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿qué autor señala: “Un factor crucial para determinar la respuesta global favorable por parte de los alumnos a la mayoría de sus escuelas depende de en qué medida profesores y alumnos hayan logrado una serie de acuerdos no oficiales o ‘treguas’ que fijen los límites de conflicto permitidos para los integrantes de la comunidad escolar”?",
        "a": "Reynolds"
    },
    {
        "id": 1571,
        "q": "Una maestra de biología de secundaria, antes de enseñar las partes de la célula, muestra a sus estudiantes un video general sobre cómo funciona una célula completa en el organismo. ¿Qué fundamento pedagógico sustenta esta decisión didáctica?",
        "a": "El aprendizaje progresa más rápidamente y se conserva mejor cuando el material a aprender tiene sentido, organización y estructura, siendo el aprendizaje completo-global generalmente superior al de «la parte»."
    },
    {
        "id": 1572,
        "q": "Según Sacristán, la escuela comprensiva se define como modelo de organización escolar cuya característica esencial consiste en:",
        "a": "Mantener juntos a todos los estudiantes, sin segregarlos por especialidades ni niveles de capacidad, con un currículum común para todos."
    },
    {
        "id": 1573,
        "q": "¿Qué efecto generan los cambios en las telecomunicaciones y sus aplicaciones educativas en el ámbito institucional?",
        "a": "Presentan nuevos retos a las instituciones y hacen resurgir el debate sobre la conceptualización misma del campo de la educación."
    },
    {
        "id": 1574,
        "q": "Según el marco de Innovación Educativa, ¿qué elementos identifica correctamente factores “favorecedor” y “obstaculizador” del cambio en las instituciones educativas?",
        "a": "Favorecedor: la visión compartida, la colaboración entre actores y el liderazgo distribuido; obstaculizador: los intereses creados, los modelos mentales rígidos y la concentración del poder decisional."
    },
    {
        "id": 1575,
        "q": "Una profesora de secundaria decide que sus evaluaciones sean realizadas por un evaluador externo. Según los principios psicológicos de la enseñanza, ¿cuál es el beneficio principal de separar la enseñanza de la evaluación?",
        "a": "Permite que la profesora se convierta en un entrenador y aliado cuya meta es ayudar al estudiante a aprender."
    },
    {
        "id": 1576,
        "q": "Sobre la Innovación Educativa, ¿cómo incide el liderazgo del director, sustentado en principios de gobierno compartido, sobre la participación y el compromiso de los docentes en la institución educativa?",
        "a": "Contribuye al sentido de eficacia política de los docentes e incrementa sustancialmente su implicación en la toma de decisiones, expresión de opiniones y compromiso con las decisiones alcanzadas democráticamente."
    },
    {
        "id": 1577,
        "q": "Según Perrenoud, la orientación de la pedagogía hacia una escuela más activa tiene una consecuencia paradójica para el docente. ¿En qué consiste esa paradoja?",
        "a": "Amplía la libertad del docente respecto a la institución, pero al mismo tiempo ensancha el campo de negociación con sus alumnos."
    },
    {
        "id": 1578,
        "q": "Según el texto “Convivencia escolar y resolución pacífica de conflictos” y lo descrito en “Planificando la acción”: “Evaluar los resultados y modificar el proyecto, introduciendo las revisiones oportunas. Esta fase comprende la aplicación de los instrumentos de valoración, como la elaboración de una memoria final que incluya las modificaciones pertinentes de mejora”, ¿a qué fase corresponde esta descripción?",
        "a": "Fase evaluadora."
    },
    {
        "id": 1579,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, según Díaz Bazo y Thornton (2000), ¿cuáles son las etapas de base que debe seguir cada proceso?",
        "a": "Fase previa, fase de preparación, fase de diseño, fase de implantación, fase evaluadora y fase de generalización."
    },
    {
        "id": 1580,
        "q": "Considerando el texto “Convivencia escolar y resolución pacífica de conflictos” y lo descrito en “Planificando la acción”, como “Diseñar el proyecto educativo, formulando los fundamentos teóricos de base, reconociendo los aspectos de la realidad del centro a mejorar, formulando los fines y objetivos generales, definiendo los rasgos del perfil de los destinatarios, concretando las líneas de acción prioritarias (propuesta curricular, propuesta de gestión y programas) y estableciendo los mecanismos e instrumentos de evaluación y revisión”, ¿a qué fase corresponde esta descripción?",
        "a": "Fase de diseño."
    },
    {
        "id": 1581,
        "q": "Dentro de la innovación educativa, ¿en qué fase se considera a la flexibilidad como un factor fundamental para asegurar el avance del cambio propuesto?",
        "a": "Fase 4: Implementación, porque durante la puesta en marcha la apertura ante lo imprevisto resulta indispensable para adaptarse a las condiciones reales del proceso."
    },
    {
        "id": 1582,
        "q": "La cultura para la paz se basa en el equilibrio o armonía de los seres humanos en tres niveles ¿cuáles son esos niveles?",
        "a": "Personal, nacional e internacional"
    },
    {
        "id": 1583,
        "q": "Una maestra de primaria, organizó junto a los padres de familia una cena de agradecimiento al finalizar el año escolar. Durante el evento, los padres le entregaron un sobre con dinero en efectivo y varios obsequios como reconocimiento por haber promovido a todos los estudiantes del curso, incluyendo a aquellos que no cumplían los requisitos académicos ¿cómo se tipifica esta conducta y qué sanción corresponde?",
        "a": "Falta grave, porque la maestra aceptó regalos en dinero y en especie de padres de familia a cambio de favores, correspondiendo la sanción de suspensión de funciones sin goce de haber, postergación de ascenso por un año, o descenso a un cargo inferior."
    },
    {
        "id": 1584,
        "q": "Un docente establece un acuerdo verbal privado con el propietario de una librería cercana al establecimiento educativo, mediante el cual recibe un porcentaje de las ganancias generadas por cada venta de útiles escolares y textos que los padres de familia adquieren siguiendo sus indicaciones. ¿Si esta conducta se encontrase tipificada en el Reglamento de Faltas y Sanciones del magisterio boliviano, a qué tipo de falta correspondería?",
        "a": "Falta grave que constituye en primera instancia la suspensión temporal del cargo, al haber utilizado la función pública para obtener beneficios económicos personales."
    },
    {
        "id": 1585,
        "q": "Una maestra o maestro recauda dineros provenientes de rifas y kermesses organizadas en la unidad educativa, pero no rinde cuentas ni realiza los depósitos correspondientes ante las autoridades competentes, esta conducta se tipifica como:",
        "a": "Falta muy grave, por no rendir cuentas de dineros recaudados por concepto de rifas y kermesses."
    },
    {
        "id": 1586,
        "q": "Un docente presenta ante autoridad correspondiente un certificado médico falso para obtener una licencia por enfermedad y así ausentarse de sus funciones durante varios días, esta conducta se constituye en una:",
        "a": "Falta muy grave, por la simulación de enfermedad para obtener licencias u otras ventajas, presentando certificados falsos."
    },
    {
        "id": 1587,
        "q": "La “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo” presenta la tabla de factores de riesgo para la violencia. ¿Cuál de los siguientes enunciados corresponde a uno de los factores comunitarios?",
        "a": "Falta de satisfacción de las necesidades básicas, lo que puede generar estrés y, consecuentemente, violencia. También, la carencia de recursos que genera la violencia por omisión o supresión."
    },
    {
        "id": 1588,
        "q": "De acuerdo con los indicadores generales en niñas, niños y adolescentes víctimas de violencia, planteados en la “Guía de Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de los siguientes enunciados corresponde a uno de los signos o indicadores de comportamiento?",
        "a": "Uso de vestimenta inadecuada para el clima (para ocultar las lesiones)."
    },
    {
        "id": 1589,
        "q": "Respecto a la Innovación Educativa, ¿cuáles son los tipos de factores que intervienen y hacen difícil emprender un cambio significativo en el ámbito personal, profesional o institucional?",
        "a": "Factores personales, conductuales y culturales."
    },
    {
        "id": 1590,
        "q": "En los niveles múltiples de identificación y prevención, que aborda el texto “Convivencia escolar y resolución pacífica de conflictos” el primer nivel (individual) del modelo ecológico pretende identificar:",
        "a": "Factores biológicos y de la historia personal que influyen en el comportamiento de una persona."
    },
    {
        "id": 1591,
        "q": "Las acciones de prevención en el ámbito educativo deben estar dirigidas a:",
        "a": "Facilitar que las niñas, los niños y adolescentes se empoderen y sean capaces de tomar decisiones respecto a sus proyectos de vida de manera consciente, libre y autónoma."
    },
    {
        "id": 1592,
        "q": "¿Cuál es el criterio que eleva a las estrategias de aprendizaje por encima de simples técnicas?",
        "a": "La aplicación de conocimientos metacognitivos de forma intencionada, consciente y controlada."
    },
    {
        "id": 1593,
        "q": "¿Cuál es la finalidad específica que persigue la Directora o el Director Distrital Educativo al mantener la coordinación interinstitucional con las Defensorías de la Niñez y Adolescencia y las Instancias Técnicas Departamentales de Políticas Sociales (SEDEGES/SEDEPOS)?",
        "a": "Facilitar en todo momento la derivación de casos de violencia y la atención de la violencia, en especial en el proceso terapéutico de la víctima de la niñez y adolescencia en los Centros Especializados de Prevención y Atención Terapéutica (CEPAT)."
    },
    {
        "id": 1594,
        "q": "¿Cuál es el propósito principal del diseño de herramientas para la colaboración en línea en el contexto de las competencias digitales docentes?",
        "a": "Apoyar la construcción de conocimiento colaborativo y compartirlo dentro del salón de clase mediante entornos digitales de trabajo conjunto."
    },
    {
        "id": 1595,
        "q": "¿Qué establecieron “Smyle y Crowson”, respecto al apoyo oficial para la formación de los docentes y de los directores en los procesos colaborativos?",
        "a": "El movimiento innovador de esa época se vinculó con el protagonismo de los docentes, dando una señal de nuevos tiempos mediante su participación activa en los cambios educativos."
    },
    {
        "id": 1596,
        "q": "Según el “Manual de resolución de problemas”, la resolución de problemas es una habilidad esencial para superar obstáculos en la vida diaria. Entre los beneficios de desarrollar esta habilidad se incluyen: Mejora académica: ¿en qué consiste este beneficio?",
        "a": "Ayuda a entender y aplicar mejor lo que aprendiste en clase."
    },
    {
        "id": 1597,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que la organización interviene, pues, como elemento mediador entre la enseñanza y el aprendizaje, de manera que:",
        "a": "Determina cualquier acción que se realice en ese ámbito."
    },
    {
        "id": 1598,
        "q": "De acuerdo con el texto de Sáez López, la cuarta fase del ciclo de aprendizajes es:",
        "a": "Extender."
    },
    {
        "id": 1599,
        "q": "Según la neurociencia y el neuroaprendizaje, ¿qué condiciones favorecen que la conexión sináptica se consolide con mayor facilidad durante el aprendizaje?",
        "a": "Motivación, repetición novedosa, estímulos multisensoriales y contexto emocionalmente resonante."
    },
    {
        "id": 1600,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje. Las emociones y el aprendizaje”, ¿Qué estrategias activan la liberación de dopamina en el organismo?",
        "a": "Agua, contacto con la naturaleza y trabajo en equipo."
    },
    {
        "id": 1601,
        "q": "¿Cuáles son los 7 pasos del Aprendizaje Basado en Problemas para un trabajo sistemático?",
        "a": "Explicar términos y conceptos desconocidos, definir el problema, analizar el problema con torbellino de ideas, hacer un inventario sistemático de explicaciones, formular asignaciones de auto-estudio, realizar asignaciones de auto-estudio e informar y evaluar sobre el auto-estudio."
    },
    {
        "id": 1602,
        "q": "Una vez que se tiene un mayor conocimiento de las características de los estudiantes, se debe tener en cuenta que cada uno de ellos aprende de manera diferente a los demás. Ningún método de enseñanza les alcanzará efectivamente a todos y no es posible abordar todos los estilos de aprendizaje todo el tiempo. En este contexto, ¿cuál es el ciclo de aprendizaje que consta de cinco fases?",
        "a": "Comprometerse, explorar, explicar, extender y evaluar"
    },
    {
        "id": 1603,
        "q": "¿Qué influye en las emociones primarias?",
        "a": "Genética"
    },
    {
        "id": 1604,
        "q": "Se conciben los siguientes procesos clave en la configuración del centro docente como una organización que aprende, considerando cuatro condiciones para fomentar dicha condición en la escuela: dos externas —cambios en el entorno y en la política educativa— y dos internas. ¿Cuáles son las dos condiciones internas?",
        "a": "Experiencia anterior de desarrollo e historia y cultura escolar."
    },
    {
        "id": 1605,
        "q": "Según David Kolb, a la hora de aprender se ponen en juego cuatro capacidades diferentes. ¿Cuáles son?",
        "a": "Experiencia concreta (EC), Observación reflexiva (OR), Conceptualización abstracta (CA) y Experimentación activa (EA)."
    },
    {
        "id": 1606,
        "q": "Los foros de discusión permiten conocer diferentes orientaciones respecto a un tema, intercambiar información variada, estimular el pensamiento crítico, contrastar puntos de vista y motivar a los alumnos a investigar contenidos. ¿Qué estilos de aprendizaje favorece principalmente este método?",
        "a": "Experimentación activa (EA) y observación reflexiva (OR)"
    },
    {
        "id": 1607,
        "q": "Bajo la premisa de que no es posible enseñar aquello que no se domina, ¿qué implicación directa tiene este principio para la formación de futuros docentes en el área de matemáticas?",
        "a": "Exige que los futuros docentes desarrollen un dominio sólido y profundo del contenido matemático como condición previa e indispensable para ejercer la enseñanza."
    },
    {
        "id": 1608,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” indica que la mediación escolar representa una alternativa al modelo disciplinario tradicional, basado en la aplicación de sanciones, según un conjunto de normas de convivencia previamente establecidas, que:",
        "a": "Excluye y estigmatiza al alumnado implicado en el acto enjuiciado"
    },
    {
        "id": 1609,
        "q": "¿En qué casos no existe confidencialidad respecto a las operaciones financieras realizadas por personas naturales o jurídicas, bolivianas o extranjeras, en el marco de la normativa de lucha contra la corrupción?",
        "a": "En procesos judiciales donde se presuma la comisión de delitos financieros, en investigaciones de fortunas, en investigaciones de delitos de corrupción y en procesos de recuperación de bienes defraudados al Estado."
    },
    {
        "id": 1610,
        "q": "¿En qué situación podrá extenderse en un radio territorial intermunicipal o interdistrital el apoyo educativo que desarrollan los maestros de apoyo en la Modalidad Indirecta?",
        "a": "Falta de acreditación en el área de atención requerido en los Centros de Educación Especial del Municipio o Distrito Educativo correspondiente"
    },
    {
        "id": 1611,
        "q": "¿En qué proceso de la memoria, según el neuroaprendizaje, se tiene la capacidad de utilizar la información?",
        "a": "Evocación."
    },
    {
        "id": 1612,
        "q": "¿Cómo se denomina el proceso que se relaciona con la capacidad atencional para que la información ingrese a la memoria y se dé el aprendizaje?",
        "a": "Codificación y registro de información."
    },
    {
        "id": 1613,
        "q": "En el marco de los principios psicológicos de la enseñanza, ¿qué caracteriza la práctica de una maestra que, al iniciar cada sesión, comunica claramente a sus estudiantes los objetivos de la clase, anticipa lo que vendrá a continuación y organiza los contenidos según el nivel de desarrollo del grupo, considerando que la enseñanza es una actividad compleja que obliga a combinar múltiples tareas simultáneamente?",
        "a": "Demuestra que la docente estructura sus sesiones en fases claramente diferenciadas, asegurando que cada estudiante comprenda el propósito de cada actividad y pueda autorregular su proceso de aprendizaje mediante criterios de evaluación compartidos al inicio de la clase."
    },
    {
        "id": 1614,
        "q": "En el marco de los elementos de la enseñanza, ¿qué caracteriza la práctica de un maestro que construye vínculos de cercanía y confianza con sus estudiantes, eliminando barreras jerárquicas que obstaculizan la comunicación dentro del aula, considerando que la calidad de la enseñanza solo puede probarse en términos del aprendizaje al que conduce?",
        "a": "Evidencia que el maestro pone en práctica reducir la distancia entre el maestro y el estudiante, construyendo vínculos de cercanía y confianza que eliminan barreras jerárquicas y generan condiciones favorables para que ocurra un aprendizaje deseable en el aula."
    },
    {
        "id": 1615,
        "q": "En el marco de los elementos de la enseñanza, ¿qué caracteriza la práctica de un maestro de nivel secundario que implementa estrategias activas para que sus estudiantes sean protagonistas de su propio proceso formativo, considerando que la calidad de la enseñanza solo puede probarse en términos del aprendizaje al que conduce?",
        "a": "Evidencia que el maestro pone en práctica promover el aprendizaje, impulsando activamente la participación, la reflexión y la construcción de conocimiento en sus estudiantes, lo cual conduce a un aprendizaje deseable y determina la calidad real de su enseñanza."
    },
    {
        "id": 1616,
        "q": "En el marco de los elementos de la enseñanza, ¿qué caracteriza la práctica de un maestro que organiza con anticipación los contenidos, actividades y recursos de sus clases siguiendo una secuencia ordenada y coherente, considerando que la calidad de la enseñanza solo puede probarse en términos del aprendizaje al que conduce?",
        "a": "Evidencia que el maestro pone en práctica planear y sistematizar, organizando con intencionalidad pedagógica los contenidos, actividades y recursos en una secuencia coherente que orienta el proceso formativo hacia un aprendizaje deseable."
    },
    {
        "id": 1617,
        "q": "¿Qué evidencia la teoría de la motivación del logro sobre los estudiantes de alto rendimiento?",
        "a": "Evidencia que atribuyen el fracaso a la falta de esfuerzo y asumen que pueden tener éxito si se esfuerzan más."
    },
    {
        "id": 1618,
        "q": "Según el modelo bidimensional de enseñanza efectiva de Lowman (1985), ¿cuál es el propósito central de las habilidades interpersonales y de comunicación en el proceso de enseñanza?",
        "a": "Establecer vínculos con los estudiantes que los motivan a trabajar de forma independiente, siendo fundamentales dentro del modelo para lograr una enseñanza que estimule emocional e intelectualmente."
    },
    {
        "id": 1619,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, según Díaz Bazo y Thornton (2000), la fase evaluadora consiste en:",
        "a": "Evaluar los resultados y modificar el proyecto, introduciendo las revisiones oportunas. Esta fase comprende la aplicación de los instrumentos de valoración, como la elaboración de una memoria final que incluya las modificaciones pertinentes de mejora."
    },
    {
        "id": 1620,
        "q": "De acuerdo con el “Manual de resolución de problemas” ¿Qué significa generar posibles soluciones?",
        "a": "Pensar en diferentes posibilidades para resolver un problema."
    },
    {
        "id": 1621,
        "q": "¿Qué acción debe realizar la Dirección Administrativa respecto al personal de su Dirección?",
        "a": "Evaluar al personal de su Dirección y proponer los ajustes necesarios."
    },
    {
        "id": 1622,
        "q": "Según la Taxonomía de Bloom, un docente diseña una actividad en la que los estudiantes deben examinar un texto argumentativo, identificar las premisas ocultas, detectar falacias lógicas y extraer conclusiones sobre la intención del autor. ¿En qué nivel del dominio cognitivo se ubica predominantemente esta actividad y cuál es su característica definitoria?",
        "a": "Análisis, porque implica descomponer el material informativo en sus partes componentes, examinar su estructura organizativa y desarrollar conclusiones divergentes identificando motivos, haciendo inferencias y encontrando evidencias que sustenten generalizaciones."
    },
    {
        "id": 1623,
        "q": "En el documento “Convivencia escolar y resolución pacífica de conflictos”, la fase del proceso mediador que consiste en realizar un seguimiento del acuerdo o solución tomada para resolver el conflicto, de modo que pueda revisarse por las partes en caso de necesidad, es:",
        "a": "Seguimiento y balance."
    },
    {
        "id": 1624,
        "q": "Los objetivos de aprendizaje deben ir acompañados de resultados medibles. ¿Cuáles son algunas de las formas que pueden adoptar los métodos de evaluación de aprendizajes?",
        "a": "Exámenes, ponencias, presentaciones orales y proyectos de equipo."
    },
    {
        "id": 1625,
        "q": "Un maestro nota gestos de incomodidad en sus alumnos y adapta su metodología. ¿Qué emociones universales, según el psicólogo que clasificó las expresiones faciales transculturales, debe identificar para regular el ambiente afectivo del aula?",
        "a": "Miedo, asco, sorpresa, alegría, ira y tristeza."
    },
    {
        "id": 1626,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que la variedad de facetas implica que la comprensión de la violencia social o de la violencia juvenil requiere en su estudio, junto a una buena definición de las mismas, el auxilio de diversas disciplinas. ¿Cuáles son estas disciplinas?",
        "a": "Etología, ciencias biológicas, psicología, sociología, ciencias políticas, criminología"
    },
    {
        "id": 1627,
        "q": "Para el Fortalecimiento de la Educación Inclusiva, “practicar valores de respeto, tolerancia, complementariedad y reciprocidad enmarcados en las normas vigentes” corresponde a una responsabilidad de:",
        "a": "Estudiantes y participantes"
    },
    {
        "id": 1628,
        "q": "Los estudiantes a menudo prefieren descubrir las posibilidades y las relaciones. Les gusta la innovación y detestan la repetición. Son buenos en captar nuevos conceptos y se sienten cómodos con abstracciones y formulaciones matemáticas. Son las características de los:",
        "a": "Estudiantes intuitivos"
    },
    {
        "id": 1629,
        "q": "¿En qué población específica la o el profesional de apoyo a estudiantes, en coordinación con los Centros de Educación Especial, adoptará las medidas oportunas para que los padres y/o madres de familia reciban asesoramiento individualizado, así como la información necesaria sobre la atención educativa que recibirán sus hijos?",
        "a": "Estudiantes con talento extraordinario"
    },
    {
        "id": 1630,
        "q": "¿En qué población específica, el profesional de apoyo a estudiantes en coordinación con los centros de educación especial, adoptará las medidas oportunas para que los padres de familia de estos estudiantes reciban asesoramiento individualizado, así como la información necesaria sobre la atención educativa que recibirán sus hijos?",
        "a": "Estudiantes con talento extraordinario."
    },
    {
        "id": 1631,
        "q": "Algunos estudiantes tienden a ganar entendimiento en pasos lineales, con cada paso siguiendo lógicamente desde el anterior; mientras otros tienden a aprender en grandes saltos, absorbiendo material casi al azar sin ver las conexiones, pero siendo capaces de resolver problemas complejos. ¿A qué estilos de aprendizaje corresponden estas descripciones?",
        "a": "Estudiantes secuenciales y globales, donde los primeros comprenden en pasos lógicos y ordenados, y los segundos aprenden en grandes saltos pudiendo resolver problemas complejos aunque sin ver las conexiones intermedias."
    },
    {
        "id": 1632,
        "q": "Algunos estudiantes tienden a aprender hechos, a menudo resuelven problemas por métodos bien establecidos y les disgustan las complicaciones y sorpresas; mientras otros estudiantes prefieren descubrir las posibilidades y las relaciones, buscan la innovación y detestan la repetición. ¿Qué estilos de aprendizaje se describen en ambos casos?",
        "a": "Estudiantes sensoriales e intuitivos, donde los primeros aprenden hechos y métodos establecidos, y los segundos prefieren descubrir posibilidades y relaciones innovadoras."
    },
    {
        "id": 1633,
        "q": "David Kolb considera que en el proceso de aprendizaje podemos partir de una experiencia concreta o de una conceptualización abstracta cuando leemos acerca de algo; mientras que las experiencias que tengamos, concretas o abstractas, se transforman en conocimiento cuando reflexionamos y cuando experimentamos. ¿Qué tipos de estudiantes presenta esta descripción?",
        "a": "Estudiante activo, estudiante teórico, estudiante reflexivo y estudiante pragmático, como tipos que se corresponden con las fases de experimentar, teorizar, reflexionar y actuar del modelo de aprendizaje experiencial."
    },
    {
        "id": 1634,
        "q": "En neurociencia educativa, el «neocórtex» es la estructura que distingue al ser humano como especie. ¿Cómo está conformada?",
        "a": "Dos hemisferios conectados por el cuerpo calloso."
    },
    {
        "id": 1635,
        "q": "Durante una clase, un maestro nota que algunos estudiantes se paralizan y otros se muestran agresivos cuando perciben el ambiente como amenazante. Desde la neurociencia educativa, ¿cuáles son las reacciones amigdalinas que el maestro debe aprender a identificar en el aula?",
        "a": "Lucha y huida."
    },
    {
        "id": 1636,
        "q": "¿Cuáles son los factores que afectan la neuroplasticidad según el neuroaprendizaje?",
        "a": "Actividad física, educación cerebro-compatible, buena nutrición, descanso e interacción social."
    },
    {
        "id": 1637,
        "q": "Para Díaz y Hernández (2010), la clasificación de las estrategias didácticas incluye entre sus tipos:",
        "a": "Estrategias para activar conocimientos previos, mejorar la integración constructiva, discursivas, para organizar información, para diseño de textos y para promover una enseñanza situada."
    },
    {
        "id": 1638,
        "q": "El modelo ecológico favorece la comprensión de las causas y los ámbitos de intervención y auspicia un conjunto diversificado de acciones y de estrategias educativas, las cuales son:",
        "a": "Estrategias individuales, relacionales, comunitarias y sensibilización de la sociedad."
    },
    {
        "id": 1639,
        "q": "¿Qué deben adoptar los Órganos del Estado, las Entidades Territoriales Autónomas e Instituciones Públicas para garantizar la preservación de la vida, la seguridad y la integridad de las mujeres en situación de violencia?",
        "a": "Medidas concretas de acción y responsabilidades claras y específicas, con el nivel de atención y prioridad que requiere la preservación de la vida, la seguridad y la integridad de las mujeres."
    },
    {
        "id": 1640,
        "q": "Según Díaz Barriga y Hernández Rojas, la caracterización como «procedimientos flexibles», que «implica que el aprendiz tome decisiones», por lo que «su empleo debe realizarse en forma flexible» y cuya «aplicación es intencionada, consciente y controlada», son propios de:",
        "a": "Estrategias de aprendizaje"
    },
    {
        "id": 1641,
        "q": "El complejo reptiliano regula funciones vitales de supervivencia y puede bloquear el acceso a procesos cognitivos superiores. ¿Qué condiciones debe garantizar el maestro para que esta estructura no interfiera durante la enseñanza?",
        "a": "Proveer seguridad física y fisiológica, temperatura adecuada y ritmo predecible para liberar la corteza."
    },
    {
        "id": 1642,
        "q": "Un maestro reconoce que el desarrollo socioemocional de sus estudiantes es tan importante como el académico y decide incorporarlo de manera explícita en su práctica pedagógica. ¿Qué acciones concretas puede implementar para trabajar este ámbito desde la neurociencia educativa?",
        "a": "Nombrar sus emociones, vínculos y rutinas de seguridad"
    },
    {
        "id": 1643,
        "q": "Según el neuroaprendizaje, ¿qué debe incluirse para que los estudiantes estén listos para inscribir el aprendizaje en la memoria a largo plazo?",
        "a": "Atender las necesidades de los dos cerebros más primitivos, permitiendo que la neocorteza haga su trabajo."
    },
    {
        "id": 1644,
        "q": "Desde los estudios sobre inteligencia emocional aplicados al aula, ¿en qué debe pensar el maestro al momento de enseñar?",
        "a": "Promover el autoconocimiento para que cada estudiante reconozca sus capacidades"
    },
    {
        "id": 1645,
        "q": "¿Para qué es útil saber comunicarse y reconocer emociones propias y ajenas, según la neurociencia del aprendizaje?",
        "a": "Lograr la competencia necesaria para convivir plenamente en la sociedad y alcanzar el bienestar."
    },
    {
        "id": 1646,
        "q": "Al momento de confeccionar una evaluación, ¿cuál de las siguientes opciones reúne correctamente las consideraciones que deben ser tomadas en cuenta según la neurociencia?",
        "a": "Coherencia pedagógica, diversidad cognitiva y ambiente emocional favorable."
    },
    {
        "id": 1647,
        "q": "Según el “Manual de resolución de problemas”, la resolución de problemas es una habilidad esencial para superar obstáculos en la vida diaria. Entre los beneficios de desarrollar esta habilidad se incluyen: La creatividad. ¿En qué consiste este beneficio?",
        "a": "Fomenta el pensamiento creativo al buscar diferentes soluciones."
    },
    {
        "id": 1648,
        "q": "¿Qué beneficio aporta la estrategia «Sensaciones en mi cuerpo para interpretar la emoción y elegir el sentimiento» según la neurociencia?",
        "a": "Favorece el autoconocimiento y la autorregulación."
    },
    {
        "id": 1649,
        "q": "¿Cuáles son los estilos de aprendizaje que plantea David Kolb?",
        "a": "Estilo pragmático, estilo activo, estilo teórico y estilo reflexivo"
    },
    {
        "id": 1650,
        "q": "Ampliar las horas de aprendizaje o introducir computadoras en la escuela son mejoras importantes, pero no constituyen innovaciones educativas por sí solas, ¿qué condición deben cumplir para considerarse innovaciones?",
        "a": "Generar transformaciones en el enfoque formativo, la función del maestro, las estrategias centradas en el estudiante o la construcción de vínculos cooperativos y no violentos."
    },
    {
        "id": 1651,
        "q": "Las TIC posibilitan que el docente construya redes de colaboración profesional y articule comunidades de práctica entre estudiantes, colegas e instituciones. ¿Cuál es el alcance principal de esta función en el proceso formativo?",
        "a": "Extender el aprendizaje más allá del espacio físico del aula, vinculando a los actores educativos en entornos digitales compartidos que trascienden los límites del salón de clase."
    },
    {
        "id": 1652,
        "q": "¿Qué ocurre con los estudiantes afectados por el cierre definitivo de un Instituto?",
        "a": "Son sujetos de traspaso al nivel correspondiente de la carrera similar a la de origen en un Instituto legalmente autorizado mediante disposición normativa correspondiente."
    },
    {
        "id": 1653,
        "q": "¿A qué fuentes de información confiables se puede recurrir en la etapa “Analizar un problema” que se menciona en el “Manual de resolución de problemas”?",
        "a": "Libros, periódicos, revistas especializadas, especialistas, docentes o páginas web de instituciones conocidas. En algunos casos también es necesario realizar encuestas o entrevistas."
    },
    {
        "id": 1654,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, según Lederach (1989), el requisito “Clarificar el origen, la estructura y la magnitud del problema” implica:",
        "a": "Establecer quién está involucrado y quién puede influir en el resultado del proceso; concretar los asuntos más importantes a tratar; distinguir y separar los intereses y las necesidades de cada uno."
    },
    {
        "id": 1655,
        "q": "Una maestra detecta que sus estudiantes rechazan los contenidos escolares porque no guardan relación con sus prácticas culturales cotidianas. Desde el giro constructivista, ¿cuál sería la respuesta más adecuada?",
        "a": "Establecer puentes entre la experiencia cultural previa del alumno y los contenidos escolares."
    },
    {
        "id": 1656,
        "q": "¿Cuál es el objetivo del “Manual de resolución de problemas”?",
        "a": "Brindar los conocimientos y las herramientas necesarias para trabajar la resolución de problemas con estudiantes de secundaria."
    },
    {
        "id": 1657,
        "q": "La motivación es la voluntad y esfuerzo para lograr una meta en particular. La motivación para dominar las tareas del aula se ve afectada por la naturaleza de la tarea de aprendizaje, las características de los estudiantes, la atmósfera de la clase y la personalidad del maestro. ¿Cuál es el propósito de la motivación?",
        "a": "Dirigir la energía de un grupo a canales constructivos, estimulando el interés en un tema particular."
    },
    {
        "id": 1658,
        "q": "¿Cuál es la función principal del Diseño Plural para los Aprendizajes en el marco de la educación boliviana?",
        "a": "Orientar el desarrollo del currículo que permite generar condiciones educativas en el marco de los principios de la Educación Inclusiva."
    },
    {
        "id": 1659,
        "q": "¿Cuál es la función principal del Diseño Plural para los Aprendizajes en el marco de la educación boliviana?",
        "a": "Orientar el desarrollo del currículo que permite generar condiciones educativas en el marco de los principios de la Educación Inclusiva."
    },
    {
        "id": 1660,
        "q": "¿Cuál es la finalidad del dictamen de responsabilidad ejecutiva?",
        "a": "Fortalecer la capacidad gerencial del nivel superior, promover la transparencia y lograr que el personal jerárquico responda públicamente por los beneficios obtenidos para la sociedad o la falta de ellos."
    },
    {
        "id": 1661,
        "q": "En el documento “Convivencia escolar y resolución pacífica de conflictos”, Cortina (1997), siguiendo a Kant, examina la resolución de los conflictos desde tres aspectos o imperativos. El principio de moralidad implica:",
        "a": "La necesidad de encontrar soluciones justas para quienes se encuentran implicados en alguna situación conflictiva."
    },
    {
        "id": 1662,
        "q": "En el «modelo bidimensional» de Lowman, ¿en qué consiste la primera dimensión denominada entusiasmo intelectual?",
        "a": "Esta dimensión incluye contenido y desempeño; se refiere a la organización y la claridad de presentación de material actualizado."
    },
    {
        "id": 1663,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, los conflictos tienen un carácter:",
        "a": "Cíclico, con una determinada estructura y una dinámica singular."
    },
    {
        "id": 1664,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que los centros educativos no son únicamente lugares donde se instruye o se aprenden conocimientos, sino que, como organización, son:",
        "a": "Espacios de una convivencia caracterizada por las interrelaciones entre sus miembros, reguladas por normas básicas de organización y funcionamiento."
    },
    {
        "id": 1665,
        "q": "¿En qué corriente psicológica se basa esencialmente el aprendizaje perspicaz de Kohler?",
        "a": "Esencialmente en el cognitivismo, enfatizando propósito y objetivos dirigidos."
    },
    {
        "id": 1666,
        "q": "¿Por qué es importante que el maestro active el Circuito de Recompensa (DAS) en el aula?",
        "a": "Esos neurotransmisores ayudan en el aprendizaje."
    },
    {
        "id": 1667,
        "q": "Según el texto “Convivencia escolar y resolución pacífica de conflictos”, la conciliación consiste en la intervención de una tercera persona neutral, que busca reconciliar a las partes en conflicto que tienen opiniones divergentes, elaborando y proponiendo soluciones posibles que satisfacen las necesidades de ambas partes. En este caso, ¿quién es el conciliador?",
        "a": "Es una persona que tiene una intervención más activa que el mediador, ya que porta soluciones para ser examinadas y aceptadas por las partes enfrentadas."
    },
    {
        "id": 1668,
        "q": "Según el texto de Innovación Educativa, en la experiencia del Carnaval Soloriental, los maestros incorporan autónomamente una propuesta pedagógica que vincula la actividad de aula con proyectos de la comunidad, ¿qué característica esencial define a este tipo de práctica?",
        "a": "Es una innovación educativa sistémica, porque genera cambios intencionales en las relaciones entre escuelas, docentes y comunidad, produciendo nuevos sentidos pedagógicos que trascienden el aula individual."
    },
    {
        "id": 1669,
        "q": "Una directora de unidad educativa, al inicio de la gestión escolar, comunica a los padres de familia que para garantizar la inscripción de sus hijos y el acceso a los materiales de aula, deben realizar un aporte económico obligatorio que ella administrará directamente, sin emitir recibo ni respaldo institucional alguno. Algunos padres, temerosos de que sus hijos sean perjudicados, realizan el pago. Considerando que esta conducta no se considera legal ya que es ejercida desde una posición de autoridad institucional, ¿cómo se clasifica esta falta según el Reglamento de Faltas y Sanciones del magisterio boliviano y qué la distingue de una falta leve o muy grave?",
        "a": "Es una falta grave ya que las exacciones a los padres de familia se diferencian de la falta leve por su mayor lesividad al bien jurídico protegido y de la falta muy grave por no implicar aún destitución directa."
    },
    {
        "id": 1670,
        "q": "¿Cuál es la naturaleza del proceso mediante el cual se origina la innovación educativa, según la síntesis presentada en el texto de Innovación Educativa?",
        "a": "Es una dinámica de carácter social con múltiples impactos que construye y amplía la capacidad humana de transformar la realidad mediante el acto educativo."
    },
    {
        "id": 1671,
        "q": "Una unidad educativa fiscal rechaza la matrícula de un estudiante con discapacidad intelectual leve argumentando que no cuenta con personal docente capacitado para atenderlo adecuadamente. Desde la normativa boliviana sobre el derecho a la educación de personas con discapacidad, ¿cómo se valora esta acción?",
        "a": "Es una acción ilegal, porque la falta de personal capacitado no constituye causal de rechazo de matrícula; la responsabilidad de garantizar condiciones adecuadas recae en el Estado y la dirección distrital, no en el estudiante."
    },
    {
        "id": 1672,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje. Las emociones y el aprendizaje” ¿Por qué la inteligencia emocional se puede aprender?",
        "a": "Es una habilidad"
    },
    {
        "id": 1673,
        "q": "En el marco del denominado «Cerebro profundo», un maestro necesita comprender qué estructura es responsable de evaluar el valor afectivo de los estímulos del aula y cómo esta influye en la disposición del estudiante para aprender. ¿Qué es la amígdala y cuál es su función principal?",
        "a": "Es un núcleo del cerebro profundo que detecta estímulos con carga afectiva, evalúa su nivel de amenaza o recompensa y desencadena respuestas que pueden facilitar u obstaculizar el acceso a los recursos cognitivos superiores."
    },
    {
        "id": 1674,
        "q": "Un director de unidad educativa observa que todos sus docentes utilizan exclusivamente la lección magistral: hablan durante toda la hora mientras sus estudiantes escuchan pasivamente. ¿Qué características y limitaciones define el texto «Estilos de aprendizaje y métodos de enseñanza» para este método?",
        "a": "Es un método centrado en el maestro que involucra la comunicación unidireccional, con mínima participación activa de los estudiantes."
    },
    {
        "id": 1675,
        "q": "Desde la perspectiva de la didáctica para la formación, ¿cuál es el rol que cumple la tecnología en relación con las matemáticas dentro del proceso formativo?",
        "a": "Es fundamental en la enseñanza y el aprendizaje, ejerce influencia sobre las matemáticas que se enseñan y enriquece su aprendizaje."
    },
    {
        "id": 1676,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje. Las emociones y el aprendizaje”, ¿Cuál de las siguientes opciones define correctamente qué es un sentimiento?",
        "a": "Es la representación consciente y elaborada que el cerebro construye a partir de una reacción corporal y neural previa, otorgándole un significado subjetivo que el estudiante puede identificar, nombrar y comunicar, condicionando su disposición ante el aprendizaje."
    },
    {
        "id": 1677,
        "q": "¿Cuál es el rol que cumple el docente en la articulación entre la educación innovadora adaptada a las TIC y el desarrollo del máximo potencial humano?",
        "a": "Es un eslabón primordial e insustituible en la cadena educativa, cuyo justo papel y valoración social resultan indispensables para superar la tensión entre humanidad y tecnología."
    },
    {
        "id": 1678,
        "q": "¿En qué consiste la instrucción anclada como enfoque para el diseño de la instrucción y qué rol cumple la tecnología en este contexto?",
        "a": "Es un enfoque que se organiza alrededor de un ancla que es un contexto, problema o situación de la vida real, y la tecnología, particularmente por medio de videos, se utiliza para ayudar a crear contextos y situaciones del mundo real."
    },
    {
        "id": 1679,
        "q": "¿Cuál es la función del Historial Académico en los Institutos?",
        "a": "Es un instrumento de comunicación oficial y de acreditación de los resultados parciales y finales del desarrollo curricular logrados por las y los estudiantes."
    },
    {
        "id": 1680,
        "q": "¿Qué es la Beca de Estudio según normativa vigente?",
        "a": "Es una política de responsabilidad social de los Institutos de carácter privado constituidos legalmente, en beneficio de las y los bachilleres con la finalidad de impulsar estudios superiores en las carreras autorizadas por el Ministerio de Educación."
    },
    {
        "id": 1681,
        "q": "Según los aspectos enumerados en el texto de Innovación Educativa, ¿qué papel cumple el saber previo del grupo en el proceso de  innovación?",
        "a": "Es sometido a prueba en los diferentes niveles de la experiencia, más allá de la simple experimentación disciplinar."
    },
    {
        "id": 1682,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué distingue al aprendizaje no formal del formal e informal?",
        "a": "Es organizado fuera del sistema formal reuniendo personas con intereses similares en clubes, organizaciones o talleres."
    },
    {
        "id": 1683,
        "q": "¿Cuál es el método más obvio para el desarrollo profesional del docente y en qué consiste esta práctica común en muchos países?",
        "a": "Es ofrecer cursos dictados por expertos en centros regionales y nacionales, donde se adquieren habilidades y conocimientos tecnológicos básicos, dictados en centros de capacitación o universidades con un plan de estudios diseñado por agencias nacionales o regionales."
    },
    {
        "id": 1684,
        "q": "¿Qué es el método docente?",
        "a": "Es la decisión relativa a los procedimientos en los procesos pedagógicos que se relacionan con los elementos curriculares."
    },
    {
        "id": 1685,
        "q": "¿Cuál es la definición de “Inclusión Social” en el marco de los derechos de las personas con discapacidad?",
        "a": "Es el proceso socioeconómico complejo, multifactorial y transdisciplinario que vincula el desarrollo de capacidades de todos los miembros de la sociedad con el acceso igualitario a oportunidades a lo largo del ciclo vital, y con ello, el acceso al bienestar, a redes de relaciones y al ejercicio de la ciudadanía"
    },
    {
        "id": 1686,
        "q": "El cerebro reptil otorga al ser humano el sentido de resistencia al cambio como una respuesta instintiva de supervivencia. ¿Cuál de las siguientes opciones describe correctamente en qué consiste este sentido según el modelo del «Cerebro triuno»?",
        "a": "Es la necesidad innata de mantener rituales, supersticiones, hábitos y entornos previsibles como mecanismo de seguridad ante lo desconocido."
    },
    {
        "id": 1687,
        "q": "¿Qué afirmación describe de manera integral la concepción de innovación como resultado de un proceso social con múltiples impactos?",
        "a": "Es la construcción de la capacidad humana de transformar, crear y recrear el mundo; produce modificaciones materiales y simbólicas con relación profunda a la tradición, e implica sujetos sociales e históricos con sentido crítico."
    },
    {
        "id": 1688,
        "q": "Según la síntesis presentada en “Innovación Educativa” de la UNESCO, ¿cuál es la naturaleza del proceso mediante el cual se origina la innovación educativa?",
        "a": "Es el resultado de un proceso social con múltiples impactos que construye la capacidad humana de transformar el mundo."
    },
    {
        "id": 1689,
        "q": "Desde la neurociencia educativa, distinguir entre emoción y sentimiento permite al docente comprender con mayor precisión los estados internos de sus estudiantes y su influencia en el aprendizaje. ¿Cuál de las siguientes opciones define correctamente qué es un sentimiento?",
        "a": "Es la representación consciente y subjetiva elaborada a partir de una reacción corporal previa; implica interpretación cognitiva de cambios orgánicos y deja huella duradera en la memoria."
    },
    {
        "id": 1690,
        "q": "¿Qué visión subyacente sobre la psicología psicométrica se desprende del análisis curricular de Sacristán?",
        "a": "Es insuficiente e inadecuada para abordar la complejidad de los problemas que plantea el estudio del currículum."
    },
    {
        "id": 1691,
        "q": "¿Qué aspecto se debe considerar en el diseño de un caso dentro del método de estudio de caso?",
        "a": "Es importante determinar el conocimiento básico, concepto, principio o tema que será objeto del estudio de caso, asimismo, se debe identificar la situación real que se relaciona con el conocimiento básico."
    },
    {
        "id": 1692,
        "q": "¿Cuál de las siguientes opciones corresponde exactamente a la definición de discapacidad según la normativa boliviana?",
        "a": "Es el resultado de la interacción de la persona, con deficiencias de función físicas, psíquicas, intelectuales y/o sensoriales a largo plazo o permanentes, con diversas barreras físicas, psicológicas, sociales, culturales y comunicacionales."
    },
    {
        "id": 1693,
        "q": "¿Cuál de las siguientes afirmaciones describe correctamente el aprendizaje organizativo técnico-práctico?",
        "a": "Es el resultado de la consecución de habilidades."
    },
    {
        "id": 1694,
        "q": "¿Cuál de las siguientes definiciones describe con precisión al Escalafón Nacional del Servicio de Educación?",
        "a": "Es el registro sistemático, permanente y centralizado, de los datos personales y profesionales referentes a los maestros y funcionarios de servicio educativo."
    },
    {
        "id": 1695,
        "q": "Según el condicionamiento clásico, la mayor parte de nuestro comportamiento puede ser considerado como el producto del condicionamiento. La respuesta a los estímulos de una manera tan generalizada se denomina generalización de estímulo. Lo opuesto a la generalización es la discriminación. ¿En qué consiste la discriminación?",
        "a": "Es el proceso por el cual aprendemos a responder a un estímulo específico y a inhibir las respuestas a todos los demás estímulos."
    },
    {
        "id": 1696,
        "q": "¿Cuál es la definición del principio de accesibilidad señalado en la Ley N° 223 General de Personas con Discapacidad?",
        "a": "Es el principio por el que los servicios que goza la sociedad puedan también acomodarse para ser accedidos por las personas con discapacidad, sin restricción alguna, sean arquitectónicas, físicas, sociales, económicas, culturales o comunicacionales."
    },
    {
        "id": 1697,
        "q": "¿Qué es el estilo de aprendizaje?",
        "a": "Son los rasgos cognitivos, afectivos y fisiológicos que sirven como indicadores relativamente estables de cómo los alumnos perciben interacciones y responden a sus ambientes de aprendizaje."
    },
    {
        "id": 1698,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué es el m-learning y cómo se relaciona con el e-learning?",
        "a": "Es un e-learning específico y más difundido que utiliza equipos de telecomunicaciones móviles como teléfonos."
    },
    {
        "id": 1699,
        "q": "¿Cómo se define a la educación en relación con las fuerzas políticas, tecnológicas y educativas, y cuál es el objetivo de las iniciativas que impulsan los países para transformar el proceso de enseñanza-aprendizaje?",
        "a": "Es el punto donde confluyen poderosas fuerzas políticas, tecnológicas y educativas en constante cambio, y muchos países están involucrados en iniciativas que intentan transformar el proceso de enseñanza-aprendizaje, preparando a los alumnos para formar parte de la sociedad de la información y la tecnología."
    },
    {
        "id": 1700,
        "q": "Un docente sostiene que la cultura de paz debe supeditarse al consenso institucional previo, antes de incorporarla individualmente en la práctica profesional. ¿Cómo se evalúa esta postura desde el desempeño ético y social del profesional?",
        "a": "Es incorrecta porque la cultura de paz es un enfoque ético social que el profesional debe interiorizar y ejercer de forma autónoma y permanente, sin condicionarla a factores externos."
    },
    {
        "id": 1701,
        "q": "Según Lowman, ¿qué distingue al ‘Maestro Completo’ de los demás perfiles docentes en su modelo bidimensional de enseñanza efectiva?",
        "a": "Es capaz de actuar magníficamente tanto en la sala de conferencias como en la sala de seminarios y modificar su enfoque para motivar a todos los estudiantes, desde lo brillante a lo mediocre."
    },
    {
        "id": 1702,
        "q": "¿Qué psicólogo propuso la existencia de dos tipos de atención?",
        "a": "Michael Posner."
    },
    {
        "id": 1703,
        "q": "¿Qué autor, en 1949, propuso la plasticidad asociativa en la que la actividad pre-sináptica y post- sináptica podría modelar las conexiones neuronales en determinadas estructuras cerebrales?",
        "a": "Donald Hebb."
    },
    {
        "id": 1704,
        "q": "¿Qué neurocientífico propone la teoría del cerebro triple y su implicación en el aprendizaje?",
        "a": "Paul D. MacLean."
    },
    {
        "id": 1705,
        "q": "De acuerdo al “Reglamento para el Fortalecimiento de la Educación Inclusiva en el Sistema Educativo Plurinacional – Modalidad Indirecta”, ¿a quién corresponde la función específica de orientar a las familias, madres y padres, sobre la proyección educativa más favorable para estudiantes con Trastornos del Espectro Autista?",
        "a": "Maestros y maestras de apoyo"
    },
    {
        "id": 1706,
        "q": "Desde la neurociencia, ¿qué memorias no se olvidan?",
        "a": "Emocional y motora."
    },
    {
        "id": 1707,
        "q": "¿Cuál es la obligación de la unidad educativa de origen cuando un estudiante con discapacidad, dificultades en el aprendizaje o talento extraordinario se traslada o cambia de institución educativa?",
        "a": "Remitir el archivo de trayectoria educativa a las instituciones fiscales, de convenio o privadas destinatarias según corresponda."
    },
    {
        "id": 1708,
        "q": "A partir de lo mencionado por María Clemente Linuesa sobre el ámbito político del currículum, ¿cuál es la tensión central que atraviesa el debate sobre el currículum básico?",
        "a": "Entre la homogeneidad que garantiza igualdad y la autonomía que preserva la diversidad cultural y profesional."
    },
    {
        "id": 1709,
        "q": "¿Entre qué elementos interviene el libro de texto como mediador en el proceso escolar?",
        "a": "Entre las informaciones que circulan en los centros y el conocimiento que podrán obtener sus usuarios."
    },
    {
        "id": 1710,
        "q": "El texto de Gimeno Sacristán describe una tensión estructural que la educación debe resolver permanentemente mediante equilibrios siempre inestables. ¿Entre qué fuerzas opuestas se produce esa tensión?",
        "a": "Entre la diferenciación individualizadora y la tendencia a integrar a los sujetos en comunidades de pensamiento, valores y comportamientos compartidos."
    },
    {
        "id": 1711,
        "q": "En el año 2017, se calcularon 40.150 víctimas de homicidio en un estudio que, por primera vez, incluyó cifras correspondientes a niñas, niños y adolescentes. ¿A qué rango de edad correspondían las víctimas consideradas en dicho estudio, según la “Guía para la Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo”?",
        "a": "Entre 0 a 18 años."
    },
    {
        "id": 1712,
        "q": "La motivación del maestro es muy importante, ya que afecta directamente a los estudiantes. ¿Cuáles de los siguientes elementos corresponden a factores que afectan la motivación del maestro?",
        "a": "Entorno de clase, estatus socioeconómico y confianza en sí mismo"
    },
    {
        "id": 1713,
        "q": "Según Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», ¿cuál es la función específica de las rúbricas en el proceso de evaluación?",
        "a": "Para que entiendan lo esperado y usen la retroalimentación para fortalecer su desempeño."
    },
    {
        "id": 1714,
        "q": "El Aprendizaje Basado en Problemas (ABP) es un enfoque pedagógico que transforma el proceso enseñanza y aprendizaje superando enfoques tradicionales y otorgando protagonismo a los estudiantes, quienes desarrollan sus habilidades en situaciones y problemas vinculados a la vida real. ¿Cuál es la enseñanza más importante para los estudiantes en el Método de Aprendizaje Basado en Problemas (ABP)?",
        "a": "Enseña a los estudiantes cómo trabajar en grupos y gestionar proyectos grupales, desarrolla habilidades de resolución de problemas y fomenta la motivación, la curiosidad y el razonamiento."
    },
    {
        "id": 1715,
        "q": "Desde el neuroaprendizaje, la evaluación debe trascender la simple medición de contenidos y orientarse hacia la comprensión profunda. ¿Qué instrumentos son más convenientes para evaluar la comprensión y estimular un aprendizaje significativo y duradero?",
        "a": "Preguntas de desarrollo, ítems interpretativos e informes"
    },
    {
        "id": 1716,
        "q": "El funcionario público extranjero o funcionario de una organización internacional pública que solicitare o aceptare, en forma directa o indirecta, un beneficio indebido que redunde en su propio provecho o en el de otra persona o entidad, con el fin de que dicho funcionario actúe o se abstenga de actuar en el ejercicio de sus funciones. ¿A qué delito corresponde esta descripción?",
        "a": "Cohecho pasivo transnacional."
    },
    {
        "id": 1717,
        "q": "Según Keefe, ¿qué son los estilos de aprendizaje?",
        "a": "Rasgos cognitivos, afectivos y fisiológicos que indican cómo perciben y responden a sus ambientes."
    },
    {
        "id": 1718,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, la convivencia escolar que inspira la cultura de paz no puede obviar el:",
        "a": "Enfoque de género."
    },
    {
        "id": 1719,
        "q": "Durante una jornada de autoevaluación docente en una institución de educación superior boliviana, un maestro describe su práctica así: «Mis estudiantes ya no reciben información, la producen; innovan en su disciplina, lideran comunidades de práctica con TIC y yo actúo como su mentor». El comité evaluador, aplicando el marco «Las TIC en la Formación Docente» de la UNESCO, debe determinar en qué enfoque se ubica esta práctica y qué principio sobre el aprendizaje la fundamenta. ¿Cuál de las siguientes opciones es la correcta?",
        "a": "Enfoque de generación de conocimiento; el aprendizaje es activo y no pasivo, por lo que el estudiante debe ser formado como productor autónomo e innovador de nuevo saber con soporte en TIC."
    },
    {
        "id": 1720,
        "q": "El aprendizaje situado fundamenta una competencia docente específica en el uso pedagógico de las TIC. Identifica la opción que relaciona correctamente esa teoría con el enfoque y la competencia que le corresponde.",
        "a": "Enfoque de profundización del conocimiento; el docente vincula saberes disciplinares a problemas auténticos del entorno y orienta su resolución colaborativa mediada por TIC."
    },
    {
        "id": 1721,
        "q": "¿Qué neurotransmisor se libera principalmente al aplicar la técnica de los abrazos según la neurociencia?",
        "a": "Dopamina."
    },
    {
        "id": 1722,
        "q": "¿En qué plazo máximo debe la Dirección Departamental de Educación legalizar los Certificados de Calificaciones originales?",
        "a": "En un tiempo no mayor a cinco (5) días hábiles."
    },
    {
        "id": 1723,
        "q": "¿En qué plazo máximo deben ser emitidos los Certificados de Calificaciones originales por el instituto?",
        "a": "En un plazo no mayor a quince (15) días hábiles."
    },
    {
        "id": 1724,
        "q": "¿En qué plazo la Dirección Departamental de Educación debe emitir el Certificado de Capacitación a partir de la solicitud realizada por la o el estudiante?",
        "a": "En un plazo no mayor a cinco (5) días hábiles contados a partir de la solicitud realizada por la o el estudiante."
    },
    {
        "id": 1725,
        "q": "¿En qué plazo la Dirección Departamental de Educación debe emitir el Certificado de Capacitación a partir de la solicitud realizada por el estudiante?",
        "a": "En un plazo no mayor a cinco (5) días hábiles contados a partir de la solicitud realizada por el estudiante."
    },
    {
        "id": 1726,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿en qué enfoque debe inspirarse el reglamento escolar?",
        "a": "En un enfoque educativo que vaya más allá del control disciplinario."
    },
    {
        "id": 1727,
        "q": "En cuanto al cuarto elemento “El tipo de intervención del profesorado ante el comportamiento del alumnado” de las prácticas educativas del texto “Convivencia escolar y resolución pacífica de conflictos”, ¿cómo reagrupan los autores Clarizio y McCoy la actuación del profesorado?",
        "a": "En tres categorías: las que refuerzan el control del alumnado, las que le prestan ayuda para la realización de las tareas académicas y las referidas al mundo de los valores."
    },
    {
        "id": 1728,
        "q": "La “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, tiene un carácter orientador, no es un documento normativo, ya que el procedimiento para actuar frente a los casos de violencia intrafamiliar se encuentra descrito en el Protocolo de prevención, actuación y denuncia de casos de violencia física, psicológica y sexual en:",
        "a": "Nunca existe la opción de mediación con la persona agresora, sin importar quién sea (papá, mamá, amistad, pariente, maestra, maestro, autoridad, etc.), tampoco existe la posibilidad de llegar a arreglos extrajudiciales."
    },
    {
        "id": 1729,
        "q": "¿En qué situaciones la teoría del condicionamiento operante aboga por evitar el castigo?",
        "a": "En situaciones en las que se desea desaprender el comportamiento indeseable."
    },
    {
        "id": 1730,
        "q": "En el texto sobre educación obligatoria, al examinar la propuesta de itinerarios formativos distintos como estrategia para atender la diversidad, se señala una condición que la distingue de otras medidas más puntuales. ¿En qué consiste esa condición?",
        "a": "En que supone romper el marco organizativo dominante, concibiendo la individualización como estrategia para períodos largos que trasciende las clasificaciones de grados."
    },
    {
        "id": 1731,
        "q": "¿En qué consiste la singularidad del libro de texto según Sacristán?",
        "a": "En que su propia apariencia delata su contenido y activa connotaciones escolares que lo diferencian de cualquier otro libro."
    },
    {
        "id": 1732,
        "q": "Según Sacristán, la escuela única genera un dilema que va más allá de la organización pedagógica. ¿En qué consiste ese dilema?",
        "a": "En que decidir qué cultura compartir entre públicos heterogéneos es una decisión irreductiblemente política, no pedagógica."
    },
    {
        "id": 1733,
        "q": "En el marco de la escuela que aprende, ¿en qué consiste el enfoque que «potencia las relaciones con su comunidad educativa»?",
        "a": "En que se percibe a la comunidad escolar como un conjunto al que se incorporan los diversos entornos educativos ubicados en su geografía, contribuyendo cada uno de ellos en función de la cultura que le es propia."
    },
    {
        "id": 1734,
        "q": "El texto Innovación Educativa se establece que el movimiento innovador de los años 70 y 80 marcó una diferencia respecto a los procesos de reforma educativa impulsados verticalmente por el Estado, ¿en qué radica esa diferencia sustancial?",
        "a": "En que colocó al maestro como protagonista del cambio, abriendo paso a su participación activa en la construcción de nuevas dinámicas pedagógicas."
    },
    {
        "id": 1735,
        "q": "¿En qué consiste el poder del aprendizaje observacional en la Teoría Social de Aprendizaje de Bandura?",
        "a": "En que aprendemos simplemente observando e imitando el comportamiento de otros que son tomados como modelos."
    },
    {
        "id": 1736,
        "q": "Las empresas de televisión pública y privada tienen la obligación de incluir la interpretación a la Lengua de Señas Boliviana en determinados tipos de programas. ¿En cuáles de los siguientes tipos de programas aplica esta obligación?",
        "a": "En programas de interés general, cultural, recreativo, político, educativo y social, además de la utilización tecnológica apropiada que permita sustituir la información sonora."
    },
    {
        "id": 1737,
        "q": "Según Blase J. et al., en el texto de Innovación Educativa, ¿en qué está cimentado el poder político de individuos y grupos en las organizaciones escolares?",
        "a": "En estructuras organizativas y culturales que trabajan para preservar el statu quo"
    },
    {
        "id": 1738,
        "q": "Se establece una distinción entre el modelo educativo industrial —centrado en dotar de competencias para el mundo laboral y garantizar un empleo estable para toda la vida— y el modelo educativo actual. ¿En qué consiste la transformación de la finalidad educativa que plantea el modelo actual?",
        "a": "En desplazar la preparación para obtener un empleo estable hacia la formación de sujetos capaces de adaptarse permanentemente a nuevos contextos, dotados tanto de competencias como de herramientas para su formación continua y la construcción autónoma de sus opciones profesionales."
    },
    {
        "id": 1739,
        "q": "En el marco del derecho a la protección de su familia, ¿en qué casos la protección de la familia podrá ser entendida como una limitación al ejercicio de los derechos y deberes de las personas con discapacidad?",
        "a": "En ningún caso, la protección de la familia no podrá ser entendida como una limitación al ejercicio de los derechos y deberes de las personas con discapacidad."
    },
    {
        "id": 1740,
        "q": "¿En qué se enfoca la intencionalidad dentro del ciclo “proceso de desarrollo y consolidación de la innovación”?",
        "a": "La finalidad formativa, el campo del saber y los patrones culturales propios de un territorio, que articulados entre sí dan forma al cambio pedagógico genuino."
    },
    {
        "id": 1741,
        "q": "¿Dónde se encuentran incorporados los instrumentos de control previo y posterior que comprende el Sistema de Control Interno?",
        "a": "En el plan de organización y en los reglamentos y manuales de procedimientos de cada entidad, y la auditoría interna."
    },
    {
        "id": 1742,
        "q": "El método de demostración, en el que la palabra hablada se complementa con la demostración usando una variedad de ayudas que apoyan los sentidos auditivos y visuales, ¿en qué objetivo de aprendizaje se centra?",
        "a": "El objetivo de aprendizaje se centra en las habilidades"
    },
    {
        "id": 1743,
        "q": "¿En qué instancia o factor se encuentra principalmente la «motivación localizada» cuando un estudiante no manifiesta una motivación intrínseca o interna hacia el aprendizaje?",
        "a": "En las condiciones ambientales que crea el docente dentro del proceso de enseñanza y aprendizaje."
    },
    {
        "id": 1744,
        "q": "¿En qué se enfoca la herramienta “Revisión final de aprendizajes” propuesta en el Manual de resolución de problemas?",
        "a": "En medir la comprensión y aplicación de los conceptos, las actitudes y las habilidades enseñadas."
    },
    {
        "id": 1745,
        "q": "De acuerdo con la clasificación internacional de las ciencias y tecnologías (2015), ¿en qué nivel jerárquico quedan comprendidas formalmente las estrategias de enseñanza?",
        "a": "En la subdisciplina «métodos pedagógicos», dentro de la disciplina «teoría y métodos educativos», en el campo científico de la pedagogía"
    },
    {
        "id": 1746,
        "q": "¿En qué debe fundamentarse la transformación educativa orientada a la formación del ciudadano en la sociedad global, según el documento «Las TIC en la Formación Docente»?",
        "a": "En el análisis crítico y las deliberaciones sobre las repercusiones que los avances actuales tienen y tendrán en el porvenir de la vida humana."
    },
    {
        "id": 1747,
        "q": "Según Morrinson y Morrinson (1994), citados en el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿en qué factores de protección se basa el modelo de escuela segura?",
        "a": "En las capacidades individuales, el entorno físico del centro, el ambiente social y el entorno cultural."
    },
    {
        "id": 1748,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿en qué se basa el clima relacional como elemento esencial de la educación?",
        "a": "En la interacción y en la democracia."
    },
    {
        "id": 1749,
        "q": "La innovación educativa se define como una ruptura con los esquemas y la cultura vigentes en las escuelas, ¿en cuáles dimensiones específicas deben producirse transformaciones para que un cambio sea considerado innovación educativa y no una simple mejora?",
        "a": "En la orientación formativa, la función del docente, las formas de mediación centradas en quien aprende y la construcción de vínculos cooperativos y no violentos en la convivencia escolar."
    },
    {
        "id": 1750,
        "q": "Cuando un maestro reconoce que sus creencias sobre “cómo se debe enseñar” limitan su apertura a nuevas metodologías, ¿en qué fase del proceso de cambio se encuentra según la perspectiva del texto de Innovación Educativa?",
        "a": "En la fase de identificación, que constituye la condición previa e indispensable para poder modificar los modelos mentales que limitan la apertura a nuevas metodologías pedagógicas."
    },
    {
        "id": 1751,
        "q": "Según Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», una maestra de una unidad educativa de Riberalta observa que sus estudiantes absorben contenidos sobre biodiversidad amazónica de manera aparentemente desordenada, sin identificar conexiones entre los temas, pero de repente comprenden las relaciones entre todos los elementos estudiados. Considerando el ciclo de aprendizaje, ¿en qué fase se produce precisamente ese momento de comprensión y conexión?",
        "a": "En la fase de explicar, donde se pide a los estudiantes que expliquen lo descubierto y el maestro conduce una discusión para refinar la comprensión."
    },
    {
        "id": 1752,
        "q": "Como se menciona en el texto “Convivencia escolar y resolución pacífica de conflictos”, el clima educativo que inspira la Cultura de Paz se basa en:",
        "a": "En la cooperación, a través de modelos de aprendizaje que permitan aumentar considerablemente las interacciones con los compañeros, facilitando así el desarrollo de habilidades sociales y garantizando que dichos contactos sean positivos."
    },
    {
        "id": 1753,
        "q": "¿Qué formación postgradual debería tener una maestra o maestro de apoyo a estudiantes con discapacidad intelectual, de acuerdo al “Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP – Modalidad Indirecta”?",
        "a": "En el área de atención y áreas afines."
    },
    {
        "id": 1754,
        "q": "El acceso a las TIC incrementa las responsabilidades de todos los miembros de la sociedad, incluyendo la obligación de respetar la propiedad intelectual incluso en recursos de libre acceso en internet. ¿En cuál de los siguientes enfoques de competencia digital docente se enmarca esta responsabilidad según el marco de la UNESCO?",
        "a": "En el enfoque de nociones básicas de TIC, donde el docente adquiere habilidades instrumentales para el uso responsable de herramientas digitales, incluyendo el reconocimiento de licencias y derechos de autor en entornos virtuales."
    },
    {
        "id": 1755,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿en qué se basa el enfoque aplicado por las escuelas pacíficas?",
        "a": "En la consideración de la organización escolar desde un paradigma humanista y comunicativo, lejos de los modelos industriales, economicistas o de clientela."
    },
    {
        "id": 1756,
        "q": "Los maestros que no tengan acumulación y desempeñen solamente un cargo principal en cualquiera de los ciclos del sistema escolar fiscal, ¿en qué tipo de instituciones pueden atender otras actividades de horario compatible?",
        "a": "En instituciones autárquicas, semiautárquicas o privadas"
    },
    {
        "id": 1757,
        "q": "¿En función de qué se definirá y ajustará el Sistema de Organización Administrativa?",
        "a": "En función de la Programación de Operaciones."
    },
    {
        "id": 1758,
        "q": "¿En función de qué criterio el Sistema de Presupuesto preverá los montos y fuentes de los recursos financieros para cada gestión anual, y a qué instrumentos de gestión se asignarán dichos recursos?",
        "a": "En función de las prioridades de la política gubernamental, asignando los recursos a los requerimientos monetarios de la Programación de Operaciones y de la Organización Administrativa adoptada."
    },
    {
        "id": 1759,
        "q": "Al describir el ideal filosófico que sostiene a la educación obligatoria universal, se plantea una aspiración que va más allá de la simple igualdad de acceso. ¿En qué consiste esa aspiración?",
        "a": "En hacer compatible la universalización efectiva con el principio de igualdad simple y la aspiración de que cada sujeto desarrolle su propia singularidad."
    },
    {
        "id": 1760,
        "q": "¿Cómo deben estar respaldados los informes de auditoría externa y quién los conserva?",
        "a": "En papeles de trabajo conservados por la Contraloría o disponibles para su inspección por parte de ésta y las autoridades competentes."
    },
    {
        "id": 1761,
        "q": "Una vez recibida formalmente la apelación interpuesta por un maestro sancionado, el Tribunal de Apelación deberá pronunciarse mediante una resolución que únicamente podrá:",
        "a": "En el término de quince (15) días, confirmando o revocando el fallo."
    },
    {
        "id": 1762,
        "q": "¿En qué circunstancia se agravará la sanción del delito de obstrucción de la justicia en una mitad?",
        "a": "Cuando se utilice fuerza física, amenazas o intimidación para obstaculizar el cumplimiento de las funciones oficiales de jueces, fiscales, policías y otros servidores responsables de luchar contra la corrupción."
    },
    {
        "id": 1763,
        "q": "Según el documento “Convivencia escolar y resolución pacífica de conflictos”, la Cultura de Paz en la actualidad supone una nueva perspectiva socio-crítica de la organización escolar y una nueva forma de abordar los conflictos. ¿Dónde se producen dichos conflictos?",
        "a": "En el seno de los centros educativos"
    },
    {
        "id": 1764,
        "q": "¿En qué plazo máximo deben presentar sus documentos de ingreso los estudiantes extranjeros en un Instituto?",
        "a": "En el plazo máximo de seis (6) meses calendario"
    },
    {
        "id": 1765,
        "q": "¿En qué plazo máximo debe la Fuerza Especial de Lucha Contra la Violencia poner a disposición del Ministerio Público a los aprehendidos en caso de delito flagrante?",
        "a": "En el plazo máximo de ocho (8) horas."
    },
    {
        "id": 1766,
        "q": "¿En qué plazo máximo debe la o el solicitante subsanar las observaciones y reingresar el trámite, cuando el Proyecto Educativo es devuelto por evidenciarse incumplimiento de requisitos técnicos o legales?",
        "a": "En el plazo máximo de diez (10) días hábiles, contados a partir de la devolución del Proyecto Educativo."
    },
    {
        "id": 1767,
        "q": "¿En qué plazo la Dirección General de Educación Superior Técnica, Tecnológica, Lingüística y Artística debe realizar la verificación y revisión técnica de cumplimiento de requisitos del Proyecto Educativo, y qué tipo de responsabilidad recae sobre el servidor público?",
        "a": "En el plazo de quince (15) días hábiles, con responsabilidad administrativa del servidor público."
    },
    {
        "id": 1768,
        "q": "Una vez vencido el término de prueba, ¿en qué plazo la Subdirección de Educación Superior de Formación Profesional de la Dirección Departamental de Educación debe remitir el informe pormenorizado a la Dirección General de Educación Superior Técnica, Tecnológica, Lingüística y Artística?",
        "a": "En el plazo de 5 días hábiles."
    },
    {
        "id": 1769,
        "q": "Con o sin la presentación de la documentación requerida al instituto, ¿en qué plazo la Subdirección de Educación Superior de Formación Profesional debe elaborar el Informe Técnico determinando las presuntas infracciones?",
        "a": "En el plazo de 3 días hábiles."
    },
    {
        "id": 1770,
        "q": "El equipamiento y mobiliario dotado por el Gobierno Central, Gobiernos Autónomos Departamentales u otras instancias mediante Actas de Entrega, queda bajo la custodia y responsabilidad de las autoridades ejecutivas del Instituto de carácter fiscal y de convenio. ¿En qué documento debe ser reportado dicho equipamiento y mobiliario?",
        "a": "En el Informe de gestión académica, institucional y administrativa"
    },
    {
        "id": 1771,
        "q": "¿En qué marco deben los Poderes Legislativo y Judicial aplicar las normas de la Ley N° 1178 a sus unidades administrativas?",
        "a": "En el marco de la independencia y coordinación de poderes."
    },
    {
        "id": 1772,
        "q": "¿En el marco de qué ley debe elaborar la Dirección Administrativa los informes financieros para la rendición de cuentas ante el Gobierno Autónomo Departamental correspondiente?",
        "a": "En el marco de la Ley N° 070 de Educación."
    },
    {
        "id": 1773,
        "q": "¿Conforme a qué normativa complementaria deben otorgarse las becas sociales en los Institutos de carácter privado para personas con discapacidad?",
        "a": "Conforme a la Ley General de Personas con Discapacidad N° 223 de 2 de marzo de 2012 y su Decreto Supremo Reglamentario N° 1893 de 12 de febrero de 2014, Artículo 10."
    },
    {
        "id": 1774,
        "q": "Según texto de Innovación Educativa, ¿en qué ámbitos puede ocurrir un cambio que incida en algún aspecto estructural de la educación para mejorar su calidad?",
        "a": "En el espacio de práctica pedagógica, en la unidad organizativa institucional y en el conjunto de estructuras del sistema."
    },
    {
        "id": 1775,
        "q": "¿Qué función desempeñan las TIC en el ámbito pedagógico ante las mutaciones sociales y culturales que caracterizan a la sociedad de la información?",
        "a": "En el entorno didáctico, se manifiestan como un poderoso recurso para adaptarse a las nuevas exigencias de la sociedad de la información"
    },
    {
        "id": 1776,
        "q": "Según Sáez López, ¿qué diferencia fundamental existe entre aprendizaje cooperativo y colaborativo?",
        "a": "En el cooperativo el profesor diseña y mantiene casi por completo el control de interacciones y resultados."
    },
    {
        "id": 1777,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿en qué se diferencia el aprendizaje colaborativo del cooperativo respecto al control de las interacciones?",
        "a": "En el colaborativo los estudiantes diseñan su estructura de interacciones; en el cooperativo el profesor mantiene casi por completo el control."
    },
    {
        "id": 1778,
        "q": "¿Cuáles son las diferencias esenciales entre el aprendizaje colaborativo y el aprendizaje cooperativo?",
        "a": "En el aprendizaje colaborativo los alumnos diseñan su estructura de interacciones y mantienen el control sobre las decisiones que repercuten en su aprendizaje, mientras que en el cooperativo es el profesor quien diseña y mantiene casi por completo el control de la estructura de interacciones y de los resultados que se han de obtener."
    },
    {
        "id": 1779,
        "q": "¿En cuánto se agrava la pena del delito de lesiones gravísimas cuando la víctima sea niña, niño o adolescente?",
        "a": "En dos tercios tanto en el mínimo como en el máximo."
    },
    {
        "id": 1780,
        "q": "¿En cuántas y en qué proyecciones se desarrolla la carrera docente y la administrativa en el Servicio de Educación?",
        "a": "En dos proyecciones complementarias: ascensos de jerarquía y promociones de categoría"
    },
    {
        "id": 1781,
        "q": "¿En cuántas y cuáles categorías se clasifican los Centros de Capacitación Artística e Institutos de Formación Artística según su carácter jurídico?",
        "a": "En tres categorías: fiscales, de convenio y privados."
    },
    {
        "id": 1782,
        "q": "Desde la perspectiva constructivista adoptada en el marco de las TIC para la Formación Docente, el aprendizaje es concebido como un proceso de construcción de significados. ¿En qué tipo de contextos se desarrolla fundamentalmente dicho proceso?",
        "a": "En dimensiones sociales, culturales, históricas y políticas que condicionan la manera en que el sujeto atribuye sentido al mundo."
    },
    {
        "id": 1783,
        "q": "Según el régimen de estudio establecido para los Institutos, ¿en qué condición se permite impartir clases los días sábados?",
        "a": "Únicamente para completar la carga horaria del plan de estudios, sin reemplazar los días regulares de lunes a viernes establecidos por el Instituto."
    },
    {
        "id": 1784,
        "q": "Según Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», ¿en qué áreas y campos de desempeño destacan los estudiantes con estilo divergente?",
        "a": "En las artes o humanidades, desempeñándose en consejería y desarrollo organizacional."
    },
    {
        "id": 1785,
        "q": "Considerando el “maltrato físico” como acciones intencionadas que causan daño corporal, que no son accidentales y que también pueden ocasionar enfermedad o generar un grave riesgo de padecerla, ¿cuál de los siguientes enunciados corresponde al maltrato físico con riesgo MEDIO?",
        "a": "Uso frecuente de la fuerza física que ocasiona lesiones y que no pone en riesgo la vida."
    },
    {
        "id": 1786,
        "q": "Al diseñar una secuencia de enseñanza que considera la educación superior como gran contexto formativo, ¿qué estrategia coinstruccional cumple con mayor precisión la función de vincular los contenidos disciplinares con las demandas sociales, laborales y científicas del entorno educativo durante el desarrollo mismo de la instrucción?",
        "a": "Proponer durante el desarrollo del contenido el análisis de casos reales del entorno educativo, científico o laboral que permitan al estudiante relacionar los conceptos disciplinares trabajados con las exigencias concretas del contexto de la educación superior en el que se está formando."
    },
    {
        "id": 1787,
        "q": "Una unidad académica tiene como objetivo que los estudiantes «adquieran los conocimientos básicos de la construcción del número y la resolución de problemas de la vida diaria». ¿Cuál estrategia de enseñanza responde de forma más integral a ese propósito?",
        "a": "Utilizar la estrategia de aprendizaje basado en problemas (ABP), partiendo de situaciones reales que demanden la comprensión y uso del sistema numérico para su resolución reflexiva."
    },
    {
        "id": 1788,
        "q": "Un profesor de una Unidad Educativa del área rural de Santa Cruz, al enseñar el tema de la célula, primero descompone sus partes —membrana, citoplasma, núcleo— explicando la función de cada una por separado; luego, guía a los estudiantes para que integren todos esos elementos en una comprensión global del funcionamiento celular. ¿Cuál de las siguientes opciones describe con mayor precisión el principio de enseñanza que este profesor está aplicando?",
        "a": "Aplica una mezcla juiciosa de ambos procedimientos: comienza con un análisis para ver el todo complejo a través de sus elementos constitutivos y luego la síntesis lo hace definitivo y fijo."
    },
    {
        "id": 1789,
        "q": "Según la neurociencia, la estrategia «Cartas que emocionan» desarrolla la habilidad socioemocional de la:",
        "a": "Empatía"
    },
    {
        "id": 1790,
        "q": "¿Qué habilidad socioemocional desarrolla principalmente la estrategia «Cartas que emocionan» según la neurociencia?",
        "a": "Empatía."
    },
    {
        "id": 1791,
        "q": "El psicólogo Paul Ekman identificó un conjunto de emociones presentes desde el nacimiento en todos los seres humanos, independientemente de su cultura o contexto social. ¿Cómo se denominan también estas seis emociones básicas?",
        "a": "Emociones primarias"
    },
    {
        "id": 1792,
        "q": "¿Qué tipo de inteligencia se caracteriza por el desarrollo del autoconocimiento en las personas?",
        "a": "Emocional."
    },
    {
        "id": 1793,
        "q": "¿Qué áreas comprende la tabla de señales y consecuencias de la violencia a corto, mediano y largo plazo, según la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”?",
        "a": "Emocional, cognitiva y conductual."
    },
    {
        "id": 1794,
        "q": "En casos de violencia física y psicológica cometidos contra estudiantes en unidades educativas y centros de educación especial, si la Defensoría de la Niñez y Adolescencia determina que la falta cometida por el maestro o maestra no constituye infracción ni delito, ¿qué medida debe adoptar la Directora o Director de la Unidad Educativa?",
        "a": "Emitir una amonestación escrita al maestro para evitar situaciones similares en el futuro."
    },
    {
        "id": 1795,
        "q": "¿Cuál de las siguientes conductas cometidas por una maestra o maestro en ejercicio de sus funciones está tipificada como Falta Grave?",
        "a": "El uso indebido de fondos recaudados por concepto de donativos, funciones de beneficencia, cuotas, suscripciones."
    },
    {
        "id": 1796,
        "q": "Si la entidad pertinente no inicia el proceso administrativo o la acción judicial dentro del plazo establecido tras recibir el dictamen, ¿qué acción toma el Contralor General?",
        "a": "Instruye la destitución del ejecutivo y del asesor legal principal, iniciándose contra ellos la acción judicial correspondiente."
    },
    {
        "id": 1797,
        "q": "Según la neurociencia, ¿A qué modelo de cerebro corresponde el complejo reptiliano, sistema límbico y neocórtex?",
        "a": "Triuno"
    },
    {
        "id": 1798,
        "q": "Según el libro de Marilina Rotger, ¿Qué implica el proceso del cerebro cuando tiene la capacidad de reorganizarse, adaptarse y modificarse?",
        "a": "Eliminación y modificación de redes ya existentes, así como la formación de nuevas redes."
    },
    {
        "id": 1799,
        "q": "Conforme a la “Guía para la Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo” y las recomendaciones para la actuación, si se conoce que la madre de la niña, el niño o adolescente vive una situación de violencia y/o violencia sexual, se le deberá:",
        "a": "Brindar apoyo e información sobre la situación de vulneración de derechos en la que vive, dándole como opción realizar la respectiva denuncia ante las instancias competentes, para que estas emitan las medidas de protección necesarias."
    },
    {
        "id": 1800,
        "q": "Un maestro identifica que algunos estudiantes reconocen emociones complejas surgidas de su experiencia personal y el contexto social. ¿A qué tipo de emociones corresponden?",
        "a": "Secundarias."
    },
    {
        "id": 1801,
        "q": "¿Cuál de las siguientes afirmaciones describe uno de los procedimientos de atención educativa a estudiantes con Dificultades en el Aprendizaje, según el “Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP - Modalidad Indirecta”?",
        "a": "Capacitación a maestros de aula en procesos de detección, identificación y atención."
    },
    {
        "id": 1802,
        "q": "¿Qué instancias deberán priorizar el acceso de personas con discapacidad a planes y programas de promoción e inclusión social y a estrategias de reducción de la pobreza, destinadas a eliminar la exclusión, discriminación y superar la marginalidad social?",
        "a": "Las entidades gubernamentales del nivel central del Estado y las entidades territoriales autónomas deberán priorizar el acceso de personas con discapacidad a planes y programas de promoción e inclusión social y a estrategias de reducción de la pobreza."
    },
    {
        "id": 1803,
        "q": "¿Qué porcentaje máximo del salario del sancionado se considera para el cálculo de la multa en delitos de violencia hacia las mujeres?",
        "a": "El cincuenta por ciento (50%) del salario del sancionado."
    },
    {
        "id": 1804,
        "q": "Cuando Gimeno Sacristán et al. recuperan la idea de García Márquez sobre «el juguete que llevan dentro» los niños, ¿qué principio pedagógico fundamental están reivindicando para el diseño del currículum?",
        "a": "Partir de las potencialidades propias del niño como condición para que la educación adquiera sentido real."
    },
    {
        "id": 1805,
        "q": "En el proyecto “El agua asunto vital para todos” presentado en el texto Innovación Educativa, ¿cuál fue la problemática del entorno que motivó a las docentes a incorporar el agua como eje del currículo institucional?",
        "a": "La falta de acueducto y alcantarillado en la vereda obligaba a los habitantes a proveerse de agua de quebradas contaminadas con desechos orgánicos, inorgánicos y químicos, lo que generaba problemas de salud en la comunidad."
    },
    {
        "id": 1806,
        "q": "En el contexto de la innovación educativa mediante nuevas tecnologías, ¿qué característica distingue un uso meramente instrumental de las TIC de un uso pedagógicamente innovador en la formación técnica?",
        "a": "El uso instrumental se limita a digitalizar contenidos y actividades preexistentes sin modificar la estructura didáctica, mientras que el uso innovador transforma los procesos de enseñanza y aprendizaje generando nuevas formas de construcción del conocimiento."
    },
    {
        "id": 1807,
        "q": "¿Qué fenómeno emergente se describe en relación con el uso de las tecnologías digitales y cuál es su alcance social?",
        "a": "La adicción a las computadoras, al internet, a los dispositivos móviles y a los videojuegos se desarrolla a niveles acelerados, al punto de comenzar a figurar entre los debates de salud pública."
    },
    {
        "id": 1808,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, la Organización Mundial de la Salud define la violencia como:",
        "a": "El uso deliberado de la fuerza física o el poder, ya sea en grado de amenaza o efectivo, contra uno mismo, otra persona o un grupo o comunidad, que provoque o tenga muchas probabilidades de causar lesiones, muerte, daños psicológicos, trastornos del desarrollo o privaciones."
    },
    {
        "id": 1809,
        "q": "Desde la perspectiva de la innovación educativa, ¿qué factor determina el tipo de innovación según los primeros teóricos que abordaron esta temática?",
        "a": "El grado o intensidad del cambio que se introduce y lo que significa en términos de impacto es lo que determina el tipo de innovación."
    },
    {
        "id": 1810,
        "q": "Las consecuencias de la violencia son diferentes, según la acción u omisión que se ejerce contra una niña, un niño o adolescente y depende de diversos factores como:",
        "a": "El tipo de conducta, la relación de la agresora o del agresor con la víctima, la frecuencia, la relación del contexto, etc. que suponen efectos inmediatos y, en ocasiones, crónicos si no se interviene de forma temprana y adecuada."
    },
    {
        "id": 1811,
        "q": "En el contexto de la innovación educativa, ¿cuál es el ámbito donde se origina principalmente la innovación y qué tipo de respuestas abarca?",
        "a": "El terreno empresarial y el ámbito económico, es decir el mercado, donde la innovación es toda respuesta tecnológica o no a las adaptaciones que este demanda."
    },
    {
        "id": 1812,
        "q": "Existiendo el aprendizaje organizativo técnico-práctico y el aprendizaje organizativo tecnológico-científico, debemos convenir en que lo técnico es pre-científico, con un fundamento esencialmente empírico, mientras que con lo tecnológico nos situamos en:",
        "a": "El terreno más experimental y científico, ya que un cuerpo de conocimiento es tecnológico si, y sólo si, es compatible con la ciencia coetánea y controlable con el método científico."
    },
    {
        "id": 1813,
        "q": "El método de conferencia es una técnica de instrucción a través de la cual se presenta una valoración oral sobre un tema en particular. Se describe como un método centrado en el maestro, que involucra la comunicación unidireccional y la transmisión de buena cantidad de conocimiento a un gran número de individuos. ¿Cuáles son los requisitos previos de una conferencia?",
        "a": "El tema debe ser claramente identificado, los objetivos deben ser especificados y el material de instrucción debe ser organizado de forma sistemática y secuencial."
    },
    {
        "id": 1814,
        "q": "Al comparar cómo se originan las representaciones mentales con la manera en que estas pueden ser alteradas, ¿qué afirmación describe con precisión la relación entre ambos según el documento de Innovación Educativa?",
        "a": "Ambos son igualmente viables: el mismo mecanismo que dio lugar a las representaciones puede emplearse deliberadamente para reconstituirlas."
    },
    {
        "id": 1815,
        "q": "Cuando la innovación educativa convierte el aprendizaje de las prácticas en una constante sistematización, ¿qué transformación opera en el sujeto que protagoniza dicho proceso?",
        "a": "El sujeto se convierte en creador y productor de saber, quien a partir de la sistematización permanente de sus prácticas reorienta y orienta su propio quehacer educativo."
    },
    {
        "id": 1816,
        "q": "Conductas como la protección, dominio y resguardo territorial son mecanismos que se activan a través de:",
        "a": "El sistema reptiliano"
    },
    {
        "id": 1817,
        "q": "Un estudiante se paraliza al ser interrogado frente al grupo. ¿Qué estructura encefálica evalúa la carga afectiva de cada situación?",
        "a": "El circuito límbico."
    },
    {
        "id": 1818,
        "q": "Durante una jornada escolar, un maestro prioriza crear un clima de aula donde cada estudiante se siente reconocido, mantiene vínculos afectivos positivos con sus pares y experimenta bienestar emocional. Desde la neurociencia, ¿por qué estas condiciones son indispensables para que el cerebro límbico habilite el aprendizaje significativo?",
        "a": "El sistema límbico activa un estado de amenaza que bloquea los circuitos de atención, emoción y memoria, cuando no hay reconocimiento y vínculos seguros"
    },
    {
        "id": 1819,
        "q": "¿Qué institución es la encargada de certificar los antecedentes de violencia ejercida contra una mujer o cualquier miembro de su familia, con sentencia ejecutoriada en calidad de cosa juzgada, como requisito para el acceso a un cargo público?",
        "a": "El Sistema Integral Plurinacional de Prevención, Atención, Sanción y Erradicación de la Violencia en razón de Género."
    },
    {
        "id": 1820,
        "q": "¿Qué característica del sistema educativo finlandés menciona Feito para explicar por qué en ese país es posible incrementar la autonomía curricular de los centros?",
        "a": "El sistema finlandés recluta a su profesorado entre los mejores graduados de cada cohorte, lo que garantiza una formación docente de alto nivel."
    },
    {
        "id": 1821,
        "q": "La anécdota sobre García Márquez y la que refiere al caso de Sir Paul McCartney son presentadas de forma contrastada para ilustrar que:",
        "a": "La intervención oportuna de un docente puede activar una vocación, mientras que su ausencia puede dejar sin descubrir capacidades extraordinarias."
    },
    {
        "id": 1822,
        "q": "¿Cuál es la idea central del texto de José Gimeno Sacristán «¿Qué significa el currículum?»?",
        "a": "El currículum es una invención reguladora no neutra que ordena contenidos, tiempos y personas, reconociéndose plenamente solo en el proceso de su desarrollo práctico."
    },
    {
        "id": 1823,
        "q": "En la distinción entre trama y tejido aplicada al desarrollo curricular, la cultura escolar concretamente enseñada y evaluada en el aula representa:",
        "a": "El tejido compacto de nociones, esquemas, métodos y códigos que el maestro elabora a partir del encuadre que le proporciona el programa."
    },
    {
        "id": 1824,
        "q": "Según Feito Alonso, ¿qué revela la secuencia de atención durante una explicación magistral?",
        "a": "La asimilación efectiva se concentra en los extremos temporales, siendo mínima en el tramo central de la exposición."
    },
    {
        "id": 1825,
        "q": "La secuencia histórica que va del bolígrafo a la calculadora y de esta a los trabajos en ordenador es utilizada en el texto para sostener que:",
        "a": "La escuela ha mantenido una actitud sistemáticamente reacia ante cualquier novedad tecnológica, replicando el mismo patrón de rechazo en cada época."
    },
    {
        "id": 1826,
        "q": "Estudiantes de Yacuiba asumen perspectivas de negociadores en un conflicto de tierras. ¿Qué tipo de participación caracteriza esta actividad?",
        "a": "El que toma decisiones o realiza productos mediante torbellino de ideas y método de caso."
    },
    {
        "id": 1827,
        "q": "En el aprendizaje organizativo, ¿cuál es el indicador que describe la evaluación interna como una actividad de autorreflexión colaborativa del equipo docente, proyectada en los diferentes ámbitos o áreas del centro escolar?",
        "a": "El que diagnostica sistemáticamente líneas de mejora."
    },
    {
        "id": 1828,
        "q": "La visión humanista de la motivación plantea que las necesidades humanas se organizan en orden jerárquico. ¿Qué psicólogo humanista propuso esta teoría?",
        "a": "El psicólogo humanista Abraham Maslow, quien organizó las necesidades humanas en una jerarquía que culmina en la autorrealización."
    },
    {
        "id": 1829,
        "q": "¿Qué aspectos debe considerar la implementación del método de enseñanza por proyectos?",
        "a": "El proyecto debe ser planeado de acuerdo a las capacidades y habilidades de los estudiantes, tratando de asegurar la aceptación total del proyecto por parte de los mismos."
    },
    {
        "id": 1830,
        "q": "¿Qué enfatizan las teorías cognitivas en el proceso de aprendizaje?",
        "a": "El propósito, la comprensión, el razonamiento, la memoria y factores cognitivos."
    },
    {
        "id": 1831,
        "q": "¿Qué instancia queda como responsable del registro de los documentos digitales en el Sistema de Información de Institutos del proyecto institucional y programas académicos autorizados, una vez emitida la Resolución Ministerial correspondiente?",
        "a": "La Dirección General de Educación Superior Técnica, Tecnológica, Lingüística y Artística."
    },
    {
        "id": 1832,
        "q": "Perrenoud sostiene que una enseñanza divergente es positiva para todos cuando «a cada estudiante se le sitúa en condiciones didácticas fecundas para él». Lo que esta condición exige a la organización escolar es que:",
        "a": "Las actividades e interacciones pedagógicas permitan que cada estudiante obtenga algún provecho de lo que hace, sea cual sea el nivel de competencia del que parte, sin que todos estén obligados a hacer lo mismo."
    },
    {
        "id": 1833,
        "q": "¿Qué distingue, en «El currículum real y el trabajo escolar», la situación del profesional en ejercicio respecto a la del estudiante en cuanto a la visibilidad de su trabajo?",
        "a": "El profesional entrega un producto terminado cuya forma de producción queda en parte oculta, mientras que el trabajo del estudiante es siempre visible."
    },
    {
        "id": 1834,
        "q": "¿Qué relación existe entre la terapia de rehabilitación del agresor y la sanción impuesta por los hechos de violencia?",
        "a": "No sustituirá la sanción impuesta por los hechos de violencia."
    },
    {
        "id": 1835,
        "q": "¿Qué se entiende por “evaluación multidisciplinaria”, de acuerdo con el Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP — Modalidad Indirecta?",
        "a": "El proceso sistemático de recolección de información sobre el estudiante, realizado por un equipo de profesionales de distintas disciplinas, orientado a conocer sus características, potencialidades y necesidades de apoyo para favorecer su inclusión educativa."
    },
    {
        "id": 1836,
        "q": "¿Qué es el aprendizaje organizativo?",
        "a": "La habilidad de la gente, grupos y organizaciones para modificar los modos en que habitualmente piensan sobre cómo tratar y resolver los problemas."
    },
    {
        "id": 1837,
        "q": "Según el “Manual de resolución de problemas”, ¿qué es planificar?",
        "a": "El proceso de definir una serie de pasos necesarios para alcanzar una meta específica."
    },
    {
        "id": 1838,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” señala que desde un punto de vista teórico (Ortega, 1997) las variables que influyen en el comportamiento antisocial en las escuelas se encuentran en:",
        "a": "El proceso de desarrollo sociomoral y emocional de los estudiantes (dimensión evolutiva), que determinan el tipo de relaciones con sus iguales; en el proceso de socialización (dimensión psicosocial) que afecta a los aspectos socioafectivos de las relaciones interpersonales dentro de las comunidades y grupos de pertenencia o vínculo; y en los procesos convivenciales que ofrece el medio escolar (dimensión educativa)."
    },
    {
        "id": 1839,
        "q": "Un buen maestro debe estar familiarizado con algunas prácticas generales de la enseñanza. Así, «proceder de lo particular a lo general» permite que los hechos y ejemplos particulares sean presentados a los estudiantes antes de darles reglas y principios generales, ya que son más fáciles de seguir. El estudio de hechos particulares debería permitir a los propios estudiantes llegar a reglas generales, puesto que:",
        "a": "El proceso de aprendizaje sólo puede llegar a ser completo si procedemos de lo particular y terminamos con las reglas generales o definiciones."
    },
    {
        "id": 1840,
        "q": "¿Qué es la evaluación comunitaria en el contexto de los Institutos de carácter fiscal?",
        "a": "El proceso de valoración que realiza la comunidad respecto de su participación en el desenvolvimiento institucional y el cumplimiento de objetivos comunes alcanzados"
    },
    {
        "id": 1841,
        "q": "Según el libro  «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué estilo de aprendizaje de Kolb favorece la técnica de exposición?",
        "a": "El pragmático (EC); permite presentar información ordenada pudiendo usarse para introducir contenidos o exponer conclusiones."
    },
    {
        "id": 1842,
        "q": "Respecto a la obligatoriedad de denuncia ante situaciones de violencia contra niñas, niños o adolescentes en el ámbito educativo, ¿qué combinación de plazo, instancia receptora y consecuencia jurídica por omisión es correcta?",
        "a": "El plazo máximo para denunciar es de 24 horas de conocido el hecho, ante las Defensorías de la Niñez y Adolescencia, el Ministerio Público o la FELCV, y quien omita la denuncia puede ser acusado de complicidad por omisión de denuncia."
    },
    {
        "id": 1843,
        "q": "Se argumenta que debatir y lograr consensos sobre lo que debe ser común para todos en el currículum es una operación que afecta a distintos planos simultáneamente. Esos planos son:",
        "a": "El plano de las decisiones de política general, la programación que realizan los centros y lo que hace en cada momento el profesor en su aula."
    },
    {
        "id": 1844,
        "q": "¿Cuál es la instancia responsable de realizar el proceso de contención emocional de emergencia de una víctima de violencia sexual?",
        "a": "El personal capacitado de la Defensoría de la Niñez y Adolescencia (DNA) o de los Servicios Legales Integrales Municipales (SLIM)."
    },
    {
        "id": 1845,
        "q": "Ante la visión global que caracteriza a las instituciones y organizaciones contemporáneas, ¿qué conjunto de capacidades resulta indispensable desarrollar en los estudiantes para responder a las exigencias del contexto actual?",
        "a": "El aprendizaje de un nuevo idioma, el trabajo en equipo inter y multidisciplinario, el respeto por la diversidad, la gestión de proyectos, la toma de decisiones y la resolución práctica de problemas."
    },
    {
        "id": 1846,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿a qué conclusión llegó Kohler sobre cómo el estudiante aborda una situación de aprendizaje?",
        "a": "El participante percibe la situación en conjunto, evalúa toda la relación y factores, llegando a una solución perspicaz."
    },
    {
        "id": 1847,
        "q": "¿Qué institución tiene la facultad de declarar alerta contra la violencia hacia las mujeres en un área o sector determinado a nivel nacional?",
        "a": "El Órgano Ejecutivo, a través del Ente Rector."
    },
    {
        "id": 1848,
        "q": "¿Qué entidades emiten los informes de auditoría para juicio coactivo fiscal?",
        "a": "La Contraloría General de la República y las unidades de auditoría interna."
    },
    {
        "id": 1849,
        "q": "Según la Ley General para Personas con Discapacidad, ¿qué instancias del Estado están obligadas a contar con unidades especializadas para la ejecución de planes, programas y proyectos integrales a favor de las personas con discapacidad?",
        "a": "El Órgano Ejecutivo, los Gobiernos Autónomos Departamentales, Regionales y Municipales, en el marco de la Constitución Política del Estado y la Ley Marco de Autonomías y Descentralización."
    },
    {
        "id": 1850,
        "q": "¿Qué instancias del Estado tienen la obligación de priorizar el acceso de personas con discapacidad a planes y programas de reducción de la pobreza?",
        "a": "El Órgano Ejecutivo, los Gobiernos Autónomos Departamentales, los Gobiernos Autónomos Municipales y los Gobiernos Autónomos Indígena Originario Campesinos, en el marco de sus competencias."
    },
    {
        "id": 1851,
        "q": "Según la teoría del aprendizaje por ensayo y error de Thorndike, ¿cuál es el proceso mediante el cual un organismo aprende un comportamiento correcto?",
        "a": "El organismo comete múltiples errores en sus intentos hasta lograr el éxito de manera casual, consolidando progresivamente la respuesta correcta mediante la repetición."
    },
    {
        "id": 1852,
        "q": "El método de estudio de caso se basa en el examen, análisis y diagnóstico de un problema real o simulado para que los principios generales puedan surgir de una manera realista. ¿Cuál es el objetivo del estudio de caso?",
        "a": "El objetivo del estudio de caso permite la creación de una situación activa y participativa de enseñanza-aprendizaje en la que el tema refleja muy bien el mundo exterior, buscando mejorar la capacidad del estudiante para identificar principios subyacentes, pensar rápidamente bajo presión y aplicar su visión para desentrañar un complejo nudo de relaciones y eventos, aprendiendo en situaciones nuevas."
    },
    {
        "id": 1853,
        "q": "¿Qué información deben incluir obligatoriamente los Institutos en todo documento oficial, medios de promoción y publicidad que emitan?",
        "a": "El o los números de sus Resoluciones Ministeriales vigentes, fecha y año de emisión de autorización de apertura y funcionamiento, más sus carreras."
    },
    {
        "id": 1854,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, un programa de intervención debe tener en consideración cada uno de los elementos que conforman el clima escolar, sin olvidar que la calidad de éste depende directamente de:",
        "a": "Las prácticas educativas y de la propia organización formal e informal del centro"
    },
    {
        "id": 1855,
        "q": "Dos estudiantes experimentan la misma situación de fracaso en una prueba: uno reacciona con vergüenza y se retrae, el otro con determinación y busca mejorar. ¿Qué explica esta diferencia en las respuestas emocionales ante un mismo estímulo?",
        "a": "La regulación afectiva de cada sujeto y su trayectoria vital condicionan que una misma vivencia genere manifestaciones emocionales completamente opuestas."
    },
    {
        "id": 1856,
        "q": "Al analizar la pedagogía transmisiva, Feito recoge evidencia empírica sobre la atención del alumnado durante explicaciones magistrales que muestra que:",
        "a": "Tras una fase inicial de adaptación y otra breve de asimilación, la atención cae velozmente y se recupera de forma parcial solo al final."
    },
    {
        "id": 1857,
        "q": "En el marco de la integración de las TIC a la formación técnica, ¿cuál de los siguientes niveles representa el uso pedagógico más transformador de la tecnología, en tanto modifica sustancialmente las prácticas de enseñanza y habilita aprendizajes que antes eran imposibles sin ella?",
        "a": "El nivel de redefinición, donde la tecnología posibilita la creación de nuevas tareas y entornos de aprendizaje que no tenían equivalente en la enseñanza tradicional."
    },
    {
        "id": 1858,
        "q": "Una profesora de primaria, al enseñar las figuras geométricas, lleva al aula una caja de madera, una pelota, una moneda y un dado para que los niños los manipulen directamente, antes de mostrarles dibujos o imágenes en el pizarrón. ¿Qué fundamento pedagógico respalda esta decisión y cuál es su esencia según los principios de la enseñanza?",
        "a": "El niño aprende más rápidamente de los objetos reales, por lo que siempre que sea posible, el profesor debe mostrar los objetos reales antes de recurrir a su representación."
    },
    {
        "id": 1859,
        "q": "¿Cuáles son los dos módulos importantes del sistema límbico?",
        "a": "El hipocampo y la amígdala"
    },
    {
        "id": 1860,
        "q": "El término innovación llegó a la educación en los años 60, proveniente del campo de la administración, ¿qué caracterizó al movimiento innovador de los años 70 y 80?",
        "a": "El movimiento innovador de esa época se vinculó con el protagonismo de los docentes, dando una señal de nuevos tiempos mediante su participación activa en los cambios educativos."
    },
    {
        "id": 1861,
        "q": "¿Qué institución es el Ente Rector responsable de la coordinación, articulación y vigilancia de la aplicación efectiva y cumplimiento de la Ley N° 348?",
        "a": "El Ministerio de Justicia."
    },
    {
        "id": 1862,
        "q": "¿Quién conoce y resuelve en la fase del sumario las denuncias, informes de auditoría y dictámenes de responsabilidad que involucren al máximo ejecutivo, miembros de un directorio, abogados o auditores de una entidad?",
        "a": "El asesor legal principal de la entidad que ejerce tuición"
    },
    {
        "id": 1863,
        "q": "Según la Ley 223, en el ámbito de salud para personas con discapacidad, el Estado debe diseñar, ejecutar y evaluar planes para capacitar al personal de la red de servicios de salud pública, y también debe otorgar medicamentos e insumos de necesidad permanente de forma gratuita cuando la persona no cuente con otros mecanismos de provisión. Respecto a la distribución de equipos multidisciplinarios y la capacitación municipal, ¿qué obligación recae específicamente sobre el Ministerio de Salud y Deportes en relación a las unidades municipales de atención a la persona con discapacidad?",
        "a": "El Ministerio de Salud y Deportes deberá capacitar al personal de las Unidades Municipales de Atención a la persona con discapacidad de los municipios para que puedan coadyuvar las actividades de los equipos de calificación."
    },
    {
        "id": 1864,
        "q": "¿Quién define el Calendario Académico para el inicio y conclusión de la Formación Superior Técnica, Tecnológica y Artística, y en concordancia con qué criterio lo hace?",
        "a": "El Ministerio de Educación, mediante las Normas Generales para la Gestión Educativa del Subsistema de Educación Superior y Formación Profesional, en concordancia con las potencialidades y vocaciones productivas comunitarias de la región donde funcionan los institutos"
    },
    {
        "id": 1865,
        "q": "¿Cuál es el órgano rector del sistema de control de toda captación de recursos del público y de intermediación financiera del país?",
        "a": "La Superintendencia de Bancos, que normará el control interno y externo de la captación de recursos e intermediación financiera, incluyendo el Banco Central de Bolivia."
    },
    {
        "id": 1866,
        "q": "Según Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», una maestra de una unidad educativa de Beni necesita que sus estudiantes contrasten distintas posiciones sobre el avance de la deforestación en la Amazonía boliviana, intercambien información variada y desarrollen pensamiento crítico. ¿Qué técnica debe implementar y cuáles son sus características definitorias?",
        "a": "Los foros de discusión, que permiten conocer diferentes orientaciones respecto a un tema, intercambian información variada estimulando el pensamiento crítico, y favorecen los estilos Activo y Reflexivo."
    },
    {
        "id": 1867,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que la educación que inspira la Cultura de Paz está obligada a poner en práctica modelos de mejora de la convivencia en los que se desarrollen programas de prevención primaria desde:",
        "a": "El marco global del centro"
    },
    {
        "id": 1868,
        "q": "Considerando los factores de riesgo establecidos en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál es uno de los principales factores de riesgo que incide en la vulneración de los derechos de la niñez y la adolescencia?",
        "a": "La violencia intrafamiliar, a la que se suman los problemas de salud mental, el abandono y la negligencia."
    },
    {
        "id": 1869,
        "q": "¿Qué distingue a las clases activas de las tradicionales en relación con las tareas escolares cotidianas?",
        "a": "El lugar que ocupan en el tiempo escolar y el modo de llevarlas a cabo, justificarlas y vincularlas a un proyecto."
    },
    {
        "id": 1870,
        "q": "¿Qué tipo de liderazgo, basado en principios como el gobierno compartido, la construcción de responsabilidad, el desarrollo de estructuras democráticas de toma de decisiones y el fomento de la autonomía, contribuye a la eficacia política de los docentes?",
        "a": "El liderazgo facilitador, sustentado en el gobierno compartido, que promueve la innovación, la aceptación de riesgos y el fortalecimiento del rol activo del profesorado en la institución."
    },
    {
        "id": 1871,
        "q": "¿Cuál es el último eslabón en el proceso de transmisión de las experiencias de aprendizaje en la escuela?",
        "a": "El libro de texto, como reductor final de la experiencia humana en el proceso de especialización pedagógica."
    },
    {
        "id": 1872,
        "q": "¿Qué distinción se establece entre el libro de texto y otros tipos de libros?",
        "a": "El libro de texto está asociado a tareas académicas y a la evaluación, mientras otros libros se vinculan al entretenimiento y al placer."
    },
    {
        "id": 1873,
        "q": "Según Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», una maestra de una unidad educativa de Oruro implementa una actividad donde sus estudiantes representan perspectivas de comunarios, autoridades y científicos para debatir sobre la contaminación del lago Poopó con creatividad y empatía. ¿Qué técnica está aplicando y cuáles son sus características definitorias?",
        "a": "El juego de roles, que permite ampliar la experiencia de los participantes, abre perspectivas con creatividad, desinhibición y motivación, favoreciendo los estilos Activo, Reflexivo, Teórico y Pragmático."
    },
    {
        "id": 1874,
        "q": "Una maestra de una unidad educativa del municipio de Viacha necesita que sus estudiantes generen soluciones creativas ante un problema comunitario relacionado con el manejo de residuos sólidos. Decide implementar una técnica que promueva la participación grupal, fomente la creatividad y permita recoger múltiples ideas. Según Sáez López, ¿qué técnica debe aplicar y cuáles son sus características definitorias?",
        "a": "La lluvia de ideas, que recaba información para la búsqueda de respuestas a varios problemas, promueve la participación y la creatividad, y el estilo de aprendizaje que favorece es el Activo."
    },
    {
        "id": 1875,
        "q": "Una maestra necesita que sus estudiantes tomen decisiones grupales creativas. ¿Qué técnica y estilo favorecen este propósito?",
        "a": "La lluvia de ideas promoviendo participación y creatividad, favoreciendo el estilo Activo."
    },
    {
        "id": 1876,
        "q": "Conforme a la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo” La unidad educativa es el lugar donde coinciden distintos factores como las responsabilidades del Estado, el compromiso de maestras y maestros, así como:",
        "a": "Es un puente entre niñas, niños, adolescentes y sus familiares, que debe brindar el apoyo y buscar los servicios necesarios para garantizar su bienestar y protección integral."
    },
    {
        "id": 1877,
        "q": "¿Qué implica para un Instituto de carácter privado el principio de sostenibilidad económico institucional, respecto a su relación financiera con el Estado?",
        "a": "El instituto privado no será subvencionado por el Estado y debe financiar sus actividades con recursos propios para garantizar la formación profesional y su sostenibilidad académica"
    },
    {
        "id": 1878,
        "q": "¿Cuál es la condición que debe cumplirse obligatoriamente al momento de elaborar el informe del hecho ante un caso de violencia sexual en la unidad educativa?",
        "a": "El informe debe elaborarse con la información disponible en ese momento, sin realizar preguntas adicionales a la víctima, pudiendo la información ser reportada por la víctima o por una tercera persona."
    },
    {
        "id": 1879,
        "q": "¿Cuál es una consecuencia directa de que las economías nacionales se vuelvan más dependientes del ámbito internacional en el contexto de la economía mundial basada en la tecnología?",
        "a": "El incremento en el flujo transfronterizo de información, tecnología, bienes, capital y personas entre las naciones."
    },
    {
        "id": 1880,
        "q": "En caso de requerirse peritajes técnicos en una situación de delito flagrante, ¿quién es el responsable de pagar por éstos, así como por el tratamiento médico y psicológico que la mujer requiera?",
        "a": "El imputado, y si fuera probadamente insolvente, se recurrirá a los servicios del Sistema de Atención Integral de su jurisdicción."
    },
    {
        "id": 1881,
        "q": "¿Qué parte del cerebro es la encargada de las funciones ejecutivas que nos diferencian de los animales, por el solo hecho de pensar, proponernos y disponernos a establecer el objetivo que deseamos?",
        "a": "La neocorteza"
    },
    {
        "id": 1882,
        "q": "Según el neuroaprendizaje, ¿qué ocurre cuando el maestro mantiene clases estresantes que generan frustración y confusión sin sostener la atención de los estudiantes?",
        "a": "Predomina el circuito subcortical en modo supervivencia, reduciendo significativamente la capacidad de aprender."
    },
    {
        "id": 1883,
        "q": "Un maestro nota que sus estudiantes muestran mayor concentración al inicio de la clase, luego decaen y al final vuelven a activarse. ¿Cómo explica el neuroaprendizaje este comportamiento?",
        "a": "El cerebro opera en ciclos naturales de activación y recuperación que generan momentos diferenciados de receptividad a lo largo de la sesión, condicionando cuándo y cómo el estudiante puede procesar la información con mayor eficacia."
    },
    {
        "id": 1884,
        "q": "Un maestro diseña sus clases privilegiando solo la transmisión conceptual, sin considerar el estado emocional de sus estudiantes. ¿Qué mecanismo neurobiológico explica por qué este enfoque compromete la consolidación del aprendizaje?",
        "a": "La información ingresa primero a las estructuras límbicas, que evalúan su carga afectiva; si el estado emocional es adverso, esa vía se cierra."
    },
    {
        "id": 1885,
        "q": "La distancia entre lo que el currículum declara y lo que efectivamente produce no constituye una anomalía del sistema educativo. ¿Qué condición del propio currículum explica esa brecha como rasgo estructural?",
        "a": "El hecho de que opera simultáneamente como proyecto ideal y como práctica situada, y cada agente que lo interpreta transforma su significado al traducirlo."
    },
    {
        "id": 1886,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué establece la ley de efecto de Thorndike?",
        "a": "El efecto o consecuencia decide el destino del aprendizaje de cada individuo en el proceso."
    },
    {
        "id": 1887,
        "q": "Según el concepto de habitus de Bourdieu, ¿cuál afirmación expresa con mayor precisión su implicación en el diseño curricular?",
        "a": "El habitus porta disposiciones interiorizadas que el currículo puede reforzar o transformar mediante su diseño."
    },
    {
        "id": 1888,
        "q": "La «pedagogía de la escucha» se propone como enfoque necesario para el uso educativo de la radio. ¿Qué elementos alimenta fundamentalmente esta pedagogía en el proceso comunicativo radiofónico?",
        "a": "El grado de inteligibilidad de la palabra, la velocidad de emisión del discurso y la calidad vocal del locutor, obligando a cuidar de forma delicada el proceso de construcción y recepción."
    },
    {
        "id": 1889,
        "q": "¿Qué deben manifestar expresamente los informes de auditoría que fundamentan un dictamen de responsabilidad ejecutiva?",
        "a": "El grado de cumplimiento de las recomendaciones o conminatorias anteriores para mejorar o corregir las causales que puedan originar responsabilidad ejecutiva."
    },
    {
        "id": 1890,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, se menciona que el clima de pertenencia está relacionado especialmente con:",
        "a": "El grado y calidad de cohesión interna de un centro educativo y con la capacidad que éste tiene para implicar a todos sus miembros de manera responsable en un proyecto educativo previamente acordado."
    },
    {
        "id": 1891,
        "q": "Las organizaciones que aprenden son capaces de cambiar desde su responsabilidad, de dar respuestas adecuadas a las demandas, siempre cambiantes, de una sociedad en constante transformación. Refiriéndose a los centros educativos como organizaciones, ¿qué determina la mejora de una escuela?",
        "a": "El ritmo y la eficacia del cambio que protagonicen, dando lugar a la siguiente tipología de centros: estancados, paseantes, desencaminados y dinámicos."
    },
    {
        "id": 1892,
        "q": "Según el Reglamento para el Fortalecimiento de la Educación Inclusiva en el Sistema Educativo Plurinacional – Modalidad Indirecta, ¿qué les permite alcanzar a los estudiantes con necesidades específicas y/o generales que reciben apoyos educativos basados en el Diseño Plural para los Aprendizajes?",
        "a": "El máximo desarrollo posible de sus capacidades."
    },
    {
        "id": 1893,
        "q": "Entre otros elementos clave para introducir un programa de resolución de conflictos en los centros educativos, Puig Rovira (1997) señala dos momentos esenciales. ¿Cuáles son?",
        "a": "La creación de un clima escolar apropiado y el diseño de estrategias adecuadas de resolución de conflictos."
    },
    {
        "id": 1894,
        "q": "Desde el enfoque de derechos humanos aplicado a la educación, ¿cuál de las siguientes afirmaciones caracteriza con mayor precisión la concepción de calidad educativa que supera -la visión reducida a eficiencia y eficacia-?",
        "a": "La pertinencia, la equidad y la inclusión constituyen dimensiones sustantivas que garantizan el pleno desarrollo de la persona, la participación ciudadana y el respeto a la dignidad humana, trascendiendo los criterios instrumentales de rendimiento."
    },
    {
        "id": 1895,
        "q": "Según Imbernón, en el modelo de entrenamiento o institucional, ¿quién selecciona las estrategias que ayudan a lograr resultados?",
        "a": "El formador selecciona las estrategias que ayudan al docente a lograr resultados."
    },
    {
        "id": 1896,
        "q": "La atención no opera como un proceso unitario sino como un sistema compuesto por tres redes interrelacionadas. ¿Cuáles son estas redes y qué función cumple cada una?",
        "a": "El foco, que orienta la atención hacia estímulos relevantes; la conciencia, que mantiene el estado de alerta; y la atención ejecutiva, que regula la planificación y la toma de decisiones de mayor orden."
    },
    {
        "id": 1897,
        "q": "¿Quién es la única autoridad facultada para dictaminar la responsabilidad ejecutiva?",
        "a": "El Contralor General de la República."
    },
    {
        "id": 1898,
        "q": "El constructivismo ve el aprendizaje como un proceso en el que el aprendiz construye activamente nuevas ideas o conceptos. En este contexto, ¿cómo procede el estudiante en el proceso de construcción de conocimientos?",
        "a": "El estudiante actúa sobre el medio ambiente para adquirir y probar nuevos conocimientos."
    },
    {
        "id": 1899,
        "q": "Un programa, en el aprendizaje programado, es una lección individual diseñada y presentada como una secuencia de unidades relativamente pequeñas de información que llevan al estudiante paso a paso a un nivel de comportamiento predeterminado. El material está organizado en pasos muy pequeños, acumulativos y coherentes, de modo que el alumno no siente la dificultad de asimilación. En cuanto a la retroalimentación dentro de la instrucción programada, ¿cuál de las siguientes afirmaciones describe correctamente el proceso?",
        "a": "El estudiante recibe confirmación inmediata de si su respuesta es correcta o incorrecta, lo que refuerza el aprendizaje y permite corregir errores antes de avanzar al siguiente paso."
    },
    {
        "id": 1900,
        "q": "Según la neurociencia, ¿el valor de una conexión sináptica se incrementa cuando?",
        "a": "Las neuronas implicadas se activan repetidas veces de forma simultánea."
    },
    {
        "id": 1901,
        "q": "Según los métodos generales de enseñanza descritos en el libro «Estilos de aprendizaje y métodos de enseñanza», proceder de lo concreto a lo abstracto implica que:",
        "a": "Es muy importante que el niño sea capaz de abstraer ideas a partir del acercamiento a objetos concretos, actividades y ejemplos; la imaginación es muy favorecida por el material concreto, por lo que para la enseñanza de abstracciones se debe partir de cosas concretas y luego conducir a niveles más altos de pensamiento."
    },
    {
        "id": 1902,
        "q": "¿Por qué es fundamental que el maestro nivele los estados emocionales en el aula y qué efecto produce en el aprendizaje?",
        "a": "Cuanto más abiertas están sus amígdalas, más situaciones satisfactorias se generan."
    },
    {
        "id": 1903,
        "q": "Estudiantes de Potosí asumen roles de autoridades y comunarios para resolver un conflicto minero. ¿Qué estilo de aprendizaje favorece esta actividad?",
        "a": "El estilo Pragmático, trabajando en grupos para sintetizar contenidos y resolver problemas."
    },
    {
        "id": 1904,
        "q": "La Ley N° 223 — Ley General para Personas con Discapacidad, en su ámbito de educación, establece garantías y obligaciones específicas del Estado Plurinacional orientadas a la inclusión educativa de las personas con discapacidad. ¿Cuál de las siguientes afirmaciones describe correctamente una de las obligaciones establecidas en dicho ámbito?",
        "a": "El Estado Plurinacional asegura tanto la conformación de equipos especializados para la atención e inclusión de estudiantes con discapacidad, como el suministro de materiales didácticos y comunicacionales a todas las instituciones educativas fiscales, de convenio y centros de educación alternativa y especial."
    },
    {
        "id": 1905,
        "q": "Una organización de padres y tutores de personas con discapacidad desea constituir una cooperativa de trabajo para generar ingresos sostenibles para sus familias. ¿Cuál es el rol que el Estado Plurinacional asume frente a esta iniciativa, conforme al marco normativo vigente sobre discapacidad?",
        "a": "El Estado promueve y respalda la organización de cooperativas organizadas por personas con discapacidad o por quienes ejercen su cuidado y representación legal."
    },
    {
        "id": 1906,
        "q": "Una persona con discapacidad muy grave queda en estado de abandono sin ningún familiar o tutor que pueda hacerse cargo de ella. Según la normativa boliviana de protección a personas con discapacidad, ¿qué acción corresponde al Estado en este caso?",
        "a": "El Estado asume la responsabilidad de la persona con discapacidad distribuyendo dicha responsabilidad entre sus niveles de competencia ya sea nacional, departamental, regional, municipal e indígena originario campesino."
    },
    {
        "id": 1907,
        "q": "La multifactorialidad de la violencia contra niñas, niños y adolescentes es explicada desde el modelo ecológico que identifica cuatro categorías de factores de influencia. ¿Cuáles son esas cuatro categorías?",
        "a": "El niño, la familia, la comunidad y la sociedad."
    },
    {
        "id": 1908,
        "q": "¿Qué enfoque fue adoptado como resultado del debate generado por la propuesta formativa, y cuál es su función principal dentro de la educación superior?",
        "a": "El enfoque del practicum, desarrollado en el proceso de convergencia europea para la educación superior, cuya función es brindar un elemento articulador entre la formación teórica y la experiencia práctica."
    },
    {
        "id": 1909,
        "q": "De acuerdo con Gimeno Sacristán et al., ¿cuál es el rasgo que define la superioridad pedagógica del enfoque por competencias frente a la organización tradicional del currículum por asignaturas?",
        "a": "La posibilidad de que lo aprendido pueda ser efectivamente utilizado en situaciones distintas a las del contexto escolar."
    },
    {
        "id": 1910,
        "q": "¿Cuáles son los componentes que caracterizan al enfoque reproductor tradicional del currículo, según «El significado del currículum»?",
        "a": "La centralidad del libro de texto, la dependencia docente respecto de los materiales y el dominio del contenido como criterio del éxito escolar."
    },
    {
        "id": 1911,
        "q": "Para el caso de maestros, ¿cuál de las siguientes conductas comprobadas es causal de destitución del cargo?",
        "a": "La simulación de enfermedad para obtener licencias u otras ventajas, presentando certificados falsos"
    },
    {
        "id": 1912,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», un maestro argumenta que al enseñar ajedrez debe trabajar primero el dominio cognitivo y luego los demás. ¿Qué refuta el texto?",
        "a": "Estos dominios no son mutuamente excluyentes; al aprender ajedrez se desarrollan los tres simultáneamente."
    },
    {
        "id": 1913,
        "q": "Usted es maestro en una unidad educativa. Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», debe diseñar una actividad sobre tejido artesanal aimara que integre los tres dominios de Bloom simultáneamente. Un colega le sugiere separar cada dominio en actividades independientes. Usted discrepa. ¿Qué argumento técnico fundamenta su posición y qué ejemplo del texto lo respalda?",
        "a": "Estos dominios no son mutuamente excluyentes; aprender ajedrez ilustra cómo los tres dominios se desarrollan simultáneamente."
    },
    {
        "id": 1914,
        "q": "En la integración de las TIC a la formación técnica, ¿qué condición distingue a un docente innovador de uno que simplemente digitaliza su práctica tradicional?",
        "a": "El docente innovador reorienta su rol hacia la mediación y facilitación de experiencias de aprendizaje activo, donde la tecnología habilita la resolución colaborativa de problemas técnicos reales e inéditos."
    },
    {
        "id": 1915,
        "q": "Según Perrenoud, en el trabajo escolar cotidiano, la noción de «excelencia» está inevitablemente vinculada a la «conformidad». ¿Qué implicación pedagógica profunda revela esta tensión en el currículum real?",
        "a": "La distinción entre rendimiento académico y conducta social debe mantenerse separada para evitar sesgos en la valoración del aprendizaje del estudiante."
    },
    {
        "id": 1916,
        "q": "Perrenoud establece que el currículum formal es demasiado vago y abstracto para orientar la práctica pedagógica diaria y la evaluación. ¿Qué implicación pedagógica se desprende de esta afirmación respecto al rol del docente en la concreción curricular?",
        "a": "El docente asume un rol de mediador activo que construye el currículum real a partir de las orientaciones generales del currículum formal."
    },
    {
        "id": 1917,
        "q": "De acuerdo con el enfoque de la planeación en la docencia, ¿qué elemento articula la lógica de la instrucción con el uso ordenado de estrategias de enseñanza en un intervalo de tiempo determinado?",
        "a": "La planeación didáctica, que integra mediante la sistematización de contenidos una metodología para su instrucción, fundamentada en el uso de estrategias para la enseñanza en un intervalo de tiempo."
    },
    {
        "id": 1918,
        "q": "¿Quién emite los Certificados de Calificaciones de los Institutos cerrados con Resolución Ministerial, y bajo qué condición?",
        "a": "La Dirección Departamental de Educación, una vez concluido el inventario académico."
    },
    {
        "id": 1919,
        "q": "En el marco de la neurociencia aplicada al aprendizaje, ¿a qué situación se denomina «retraso genómico»?",
        "a": "El desfase entre la estructura biológica heredada hace milenios y el entorno artificial actual."
    },
    {
        "id": 1920,
        "q": "Desde la perspectiva de la neurociencia del aprendizaje, ¿qué elementos fundamentales facilitan la consolidación de nuevos conocimientos en el cerebro?",
        "a": "El impulso interno, la práctica reiterada, la diversidad de estímulos y un entorno emocionalmente significativo."
    },
    {
        "id": 1921,
        "q": "Según Gimeno Sacristán, cuando se afirma que promover lectores, espectadores culturales, viajeros, deportistas y ciudadanos con comprensión científica es valioso «pero no basta», ¿qué dimensión formativa fundamental está señalando como ausente o insuficiente en esa enumeración?",
        "a": "La formación de sujetos capaces de relacionarse consigo mismos y con los demás desde una perspectiva ética, emocional y de sentido vital."
    },
    {
        "id": 1922,
        "q": "La resolución del problema no es el objetivo prioritario del Aprendizaje Basado en Problemas (ABP), aunque pueda incluirse entre los que persigue esta estrategia de aprendizaje. ¿Cuáles son los dos aspectos más importantes a destacar del ABP?",
        "a": "La movilización, por parte de los estudiantes, de recursos procedentes de diversas fuentes y el hecho de que aprenden a aprender, bien a partir de los retos mismos planteados por el problema, bien con la guía o el apoyo del tutor que actúa como facilitador."
    },
    {
        "id": 1923,
        "q": "¿Qué se entiende por infracción en el ámbito de los institutos según normativa vigente?",
        "a": "La vulneración a la normativa vigente en el ámbito educativo, cometida por las autoridades designadas, personal docente y administrativo de los institutos técnicos y tecnológicos de carácter fiscal y de convenio, que cause un perjuicio académico-administrativo a las y los estudiantes y/o egresados de dicha institución, la cual será sancionada conforme a normativa específica."
    },
    {
        "id": 1924,
        "q": "En el marco de la didáctica en educación, el uso de la radio como herramienta pedagógica trasciende el aula al vincular el conocimiento con la realidad social. ¿Cuál es el fundamento principal que justifica la relevancia de la radio como medio educativo y social?",
        "a": "El derecho universal a la libre expresión e información, que obliga al Estado a garantizar estos derechos a través de sus instituciones."
    },
    {
        "id": 1925,
        "q": "El “Protocolo de Prevención y Actuación” menciona cuatro pilares fundamentales derivados de la Convención sobre los Derechos del Niño. Tres de ellos son: el interés superior del niño, el derecho a la supervivencia y al desarrollo, y el derecho a la no discriminación. ¿Cuál de las siguientes opciones corresponde al cuarto pilar?",
        "a": "El derecho a la participación y a que sea respetado su punto de vista."
    },
    {
        "id": 1926,
        "q": "¿Cuál es la idea central del texto de Feito Alonso?",
        "a": "El currículum obligatorio debe superar el academicismo adoptando competencias y aprendizaje investigativo para formar ciudadanos críticos."
    },
    {
        "id": 1927,
        "q": "¿Qué tensión revelan las posiciones de Gimeno Sacristán y Perrenoud sobre el poder regulador del currículum?",
        "a": "El currículum prescrito regula la práctica, pero es reinterpretado y negociado en el aula, generando una brecha entre lo planificado y lo ejecutado."
    },
    {
        "id": 1928,
        "q": "¿Cuál es la idea central del texto de Perrenoud?",
        "a": "El currículum real es reinventado por el maestro e incluye un currículum oculto que forma hábitos y el «oficio de alumno»."
    },
    {
        "id": 1929,
        "q": "¿Qué distingue al currículum real del currículum formal en términos de su naturaleza?",
        "a": "El primero es una imagen codificada de la cultura; el segundo, un conjunto de experiencias que originan aprendizajes."
    },
    {
        "id": 1930,
        "q": "El texto afirma que el currículum real nunca constituye la estricta realización de una intención del maestro. ¿Qué razón de fondo sustenta esa afirmación?",
        "a": "Las resistencias de los alumnos y los avatares de la práctica pedagógica hacen que las actividades nunca se desarrollen exactamente como estaba previsto, y no todo lo que el maestro selecciona es plenamente consciente."
    },
    {
        "id": 1931,
        "q": "El texto establece una distinción fundamental entre el currículum formal y el currículum real apelando a su diferente naturaleza. ¿Cuál es la caracterización precisa que se ofrece de cada uno?",
        "a": "El currículum formal es una imagen de la cultura digna de transmitirse con su división y codificación didáctica, mientras que el currículum real es un conjunto de experiencias, tareas y actividades que originan o se supone han de originar los aprendizajes."
    },
    {
        "id": 1932,
        "q": "¿Cuál es la idea central del texto de María Clemente Linuesa?",
        "a": "El diseño curricular es un proceso de previsión y representación de la acción educativa que se desarrolla en tres ámbitos: político, de centro y de aula."
    },
    {
        "id": 1933,
        "q": "De acuerdo con Gimeno Sacristán, ¿qué dimensiones del sistema escolar pueden convertirse en obstáculos para la plena realización de una escuela inclusiva si no se orientan adecuadamente?",
        "a": "La estructura organizativa, los procedimientos de clasificación del alumnado, las formas de enseñanza y la disposición docente."
    },
    {
        "id": 1934,
        "q": "Investigaciones en neurociencia educativa muestran que estudiantes con bajo bienestar emocional presentan dificultades para consolidar nuevos aprendizajes, incluso cuando la instrucción es de calidad. ¿Cuál es el mecanismo neurológico que explica esta relación entre estado emocional y capacidad de aprendizaje?",
        "a": "La serotonina regula el equilibrio emocional modulando la actividad de la amígdala y la corteza prefrontal; niveles bajos generan hiperactivación de la amígdala que bloquea la consolidación sináptica en el hipocampo, impidiendo el paso de la memoria de corto a largo plazo."
    },
    {
        "id": 1935,
        "q": "¿Qué factores resultan de fundamental importancia al implementar las competencias pedagógicas que permiten incorporar la tecnología en la práctica docente?",
        "a": "El contexto local y el enfoque pedagógico individual del docente vinculado al de su disciplina."
    },
    {
        "id": 1936,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que entre las formas de resolver los conflictos las más conocidas son:",
        "a": "El consenso, la mediación, la conciliación, el arbitraje, el arreglo normativo y el facilitador."
    },
    {
        "id": 1937,
        "q": "En el marco de la formación docente, existe un tipo de conocimiento que establece un puente entre el dominio de la materia que se enseña y la capacidad de hacerla comprensible para los estudiantes. ¿Cuál de las siguientes opciones describe con mayor precisión este tipo de conocimiento?",
        "a": "El conocimiento pedagógico del contenido, que articula el saber disciplinar con la capacidad de transformarlo en representaciones comprensibles y accesibles para los estudiantes."
    },
    {
        "id": 1938,
        "q": "¿Cómo define Cohen el conflicto?",
        "a": "El conflicto es una parte de la vida que puede usarse como una oportunidad de aprendizaje y crecimiento personal por parte de los estudiantes."
    },
    {
        "id": 1939,
        "q": "¿Cuál de las siguientes frases describe correctamente la relación entre el enfoque restaurativo, la cultura de paz y el tratamiento del conflicto en el marco de las medidas generales de prevención de la violencia en la comunidad educativa?",
        "a": "El conflicto es aceptado como parte natural de la vida, se incentiva su resolución pacífica mediante el diálogo, y el enfoque restaurativo se transversaliza en todos los procesos de la comunidad educativa, principalmente en la metodología de resolución de conflictos."
    },
    {
        "id": 1940,
        "q": "¿Qué combina el estilo convergente según Kolb?",
        "a": "El concepto abstracto con la experimentación activa encontrando utilización práctica."
    },
    {
        "id": 1941,
        "q": "¿Cuál es el dominio más relevante para la formación de maestros y directores?",
        "a": "El cognitivo, con conocimiento de contenido y desarrollo de habilidades intelectuales."
    },
    {
        "id": 1942,
        "q": "Se distingue entre aquello que regula al currículum y aquello que queda regulado por él. ¿Qué par de elementos ilustra correctamente esa distinción?",
        "a": "La organización disciplinar como dimensión estructurante y el ritmo de progresión del aprendizaje como aspecto estructurado."
    },
    {
        "id": 1943,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿cuáles son los cinco ejes o elementos que permiten valorar y modificar el clima general del centro escolar?",
        "a": "El clima relacional, el clima educativo, el clima de seguridad, el clima de justicia y el clima de pertenencia."
    },
    {
        "id": 1944,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, se menciona que cualquier programa de mejora de la convivencia no puede obviar, junto con otras variables contextuales:",
        "a": "El clima escolar."
    },
    {
        "id": 1945,
        "q": "Según el documento “Convivencia escolar y resolución pacífica de conflictos”, el énfasis puesto por el profesorado en las posibilidades del alumnado para obtener buenos resultados y tener un comportamiento adecuado, sin juicios predeterminados, influye no sólo en las estrategias o sistemas de reconocimiento empleados, sino también sobre:",
        "a": "El clima educativo y el clima relacional entre el alumnado y sus profesores"
    },
    {
        "id": 1946,
        "q": "Un maestro estructura cada sesión con un estímulo inesperado, construcción guiada y tarea de transferencia. ¿Qué circuito cerebral se activa secuencialmente en ese proceso?",
        "a": "El circuito Detección, Acción, Satisfacción"
    },
    {
        "id": 1947,
        "q": "¿Cuál es la distinción conceptual correcta entre ciberespacio y realidad virtual según sus características esenciales?",
        "a": "El ciberespacio es un espacio de información generado en la computadora que se expande conectándose en red; la realidad virtual refiere a hechos percibidos con los sentidos a través de interfaces visuales, auditivas y táctiles."
    },
    {
        "id": 1948,
        "q": "Un maestro busca fortalecer en sus estudiantes la capacidad de dirigir y sostener conscientemente su foco hacia una tarea, resistiendo distracciones del entorno. ¿Qué estructura cerebral constituye el epicentro de este proceso y qué implica su desarrollo para la práctica docente?",
        "a": "La corteza prefrontal."
    },
    {
        "id": 1949,
        "q": "Según el modelo del «Cerebro triuno», ¿qué elementos conforman el cerebro racional?",
        "a": "La neocorteza y los hemisferios."
    },
    {
        "id": 1950,
        "q": "El aprendizaje modifica la intensidad de las conexiones interneuronales para adquirir nuevos conocimientos que, a través de la memoria, se retienen a largo plazo. ¿En qué áreas del cerebro se produce este proceso?",
        "a": "El hipocampo almacena la memoria y la traslada a la corteza cerebral."
    },
    {
        "id": 1951,
        "q": "Según Clemente Linuesa, el centro educativo ha adquirido protagonismo en el diseño curricular como unidad con capacidad de generar proyectos propios. ¿Cuál de las siguientes opciones caracteriza con mayor precisión esta función y sus condiciones de desarrollo?",
        "a": "El centro articula estrategias y culturas comunes mediante proyectos institucionales, cumpliendo funciones de organización, innovación y desarrollo profesional, aunque su desarrollo fue limitado por la ausencia de cultura colaborativa docente."
    },
    {
        "id": 1952,
        "q": "¿Cuál fue el primer antecedente de uso masivo del libro de texto escrito?",
        "a": "El catecismo, empleado de forma masiva como soporte escrito para la transmisión de contenidos doctrinales."
    },
    {
        "id": 1953,
        "q": "De acuerdo a lo señalado en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, en casos de violencia sexual, es necesario señalar que:",
        "a": "Nunca existe la opción de mediación con la persona agresora, sin importar quién sea (papá, mamá, amistad, pariente, maestra, maestro, autoridad, etc.), tampoco existe la posibilidad de llegar a arreglos extrajudiciales."
    },
    {
        "id": 1954,
        "q": "«Diseñar el currículum» atribuye a la globalización un fundamento psicológico específico. ¿Cuál es?",
        "a": "El carácter sincrético y global del pensamiento infantil en los niños más pequeños."
    },
    {
        "id": 1955,
        "q": "¿Qué información debe reportar el equipo interdisciplinario sobre el cumplimiento de terapias dispuestas por la autoridad judicial?",
        "a": "El avance, abandono o cumplimiento de las mismas."
    },
    {
        "id": 1956,
        "q": "¿Cuál es el aspecto más crítico del Aprendizaje Basado en Problemas (ABP)?",
        "a": "Se debe ser cuidadoso, pues los estudiantes a menudo expresan dificultades con el aprendizaje autodirigido, debido a que están acostumbrados a la educación tradicional, por eso el aspecto más crítico es generar la pregunta apropiada."
    },
    {
        "id": 1957,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿cuál es el proceso de aprendizaje más característico de los seres humanos?",
        "a": "La imitación; es decir, la repetición personal de una conducta observada en otros individuos del entorno."
    },
    {
        "id": 1958,
        "q": "¿Cuál de las siguientes afirmaciones describe de manera más completa y precisa las implicaciones de la multiplicación y distribución instantánea del conocimiento en el mundo actual?",
        "a": "El conocimiento se multiplica y distribuye de forma instantánea, convirtiendo al mundo en un lugar más pequeño e interconectado, donde tanto los avances científicos, nuevos remedios y descubrimientos, como las crisis económicas, infecciones, nuevas armas y formas de control llegan antes que nunca."
    },
    {
        "id": 1959,
        "q": "El aprendizaje es un proceso que implica cambios que ocurren durante un período relativamente corto de tiempo, que permiten al estudiante responder más adecuadamente a la situación. Por eso se considera que:",
        "a": "El aprendizaje es un proceso de construcción individual y social que el estudiante debe regular."
    },
    {
        "id": 1960,
        "q": "El aprendizaje cooperativo es un enfoque interactivo de organización del trabajo en el aula según el cual los estudiantes aprenden unos de otros, así como de su maestro y del entorno. El aprendizaje cooperativo se refiere a una serie de estrategias instruccionales que incluyen la interacción cooperativa de estudiante a estudiante, sobre algún tema, como parte integral del proceso de aprendizaje. ¿En qué teoría se cimienta el aprendizaje cooperativo y a quiénes otorga un papel fundamental?",
        "a": "El aprendizaje cooperativo se cimienta en la teoría constructivista, desde la que se otorga un papel fundamental a los estudiantes como actores principales de su proceso de aprendizaje."
    },
    {
        "id": 1961,
        "q": "¿En qué método de enseñanza se trabaja colectivamente en los que se forman «grupos expertos» donde los estudiantes son responsables de su aprendizaje y del de sus compañeros en una estrategia de corresponsabilidad para alcanzar metas e incentivos grupales?",
        "a": "La técnica de aprendizaje jigsaw o puzle"
    },
    {
        "id": 1962,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué distingue la síntesis del análisis en el dominio cognitivo de Bloom?",
        "a": "La síntesis aplica creativamente conocimientos previos para producir un todo nuevo u original divergentemente."
    },
    {
        "id": 1963,
        "q": "De acuerdo con los “Ámbitos de la violencia” establecidos en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, la violencia contra las niñas, niños y adolescentes puede presentarse en el ámbito familiar o extrafamiliar; en este último caso, la violencia se encuentra en:",
        "a": "El ámbito educativo y en el ámbito comunitario."
    },
    {
        "id": 1964,
        "q": "¿Qué consecuencia pedagógica se deriva de relacionar los ámbitos de diseño de Clemente Linuesa con la crítica de Perrenoud al currículum formal?",
        "a": "El docente es el último intérprete del currículum; su mediación es indispensable para que la prescripción adquiera sentido pedagógico."
    },
    {
        "id": 1965,
        "q": "Considerando la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, en las unidades educativas se tiene la posibilidad de identificar factores de protección y factores de riesgo en el ámbito familiar, asimismo, es posible detectar, antes que otras instituciones, las situaciones de violencia que sufren las y los estudiantes en sus hogares, debido a:",
        "a": "Individuales, familiares, comunitarios, sociales y relacionales."
    },
    {
        "id": 1966,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué estilos de Kolb favorecen los foros de discusión?",
        "a": "El activo y el reflexivo; intercambian información variada estimulando el pensamiento crítico e investigativo."
    },
    {
        "id": 1967,
        "q": "Desde el punto de vista epistemológico, ¿qué ocurre con el conocimiento del sujeto cuando el «espejo metacognitivo» se transforma?",
        "a": "El bagaje cognitivo del sujeto puede modificarse según cómo se comparte y cómo el pensamiento se refleja, habilitando nuevas formas de razonar sobre su propia construcción y desarrollo."
    },
    {
        "id": 1968,
        "q": "¿Qué efectos negativos genera en los adolescentes el uso excesivo de la televisión y el ordenador?",
        "a": "Pasar muchas horas ante la televisión y el ordenador merma la dedicación de los adolescentes al ejercicio físico y al deporte, y los modelos de belleza que ofrecen estos medios constituyen un factor de riesgo para la anorexia y la bulimia."
    },
    {
        "id": 1969,
        "q": "El texto “Convivencia escolar y resolución pacífica de conflictos” refiere que la mediación constituye una forma, entre otras, de intervención en un conflicto, que se rige por dos criterios, uno de ellos es:",
        "a": "La búsqueda de una solución al conflicto se realiza con la presencia de una tercera persona, que no ejerce ningún poder (independiente e imparcial) y que actúa como facilitador de la comunicación, de modo que se restablezcan los vínculos entre las partes, a través de una metodología precisa."
    },
    {
        "id": 1970,
        "q": "¿Qué porcentaje del total de estudiantes nuevos inscritos deben destinar los Institutos de carácter privado para becas sociales a disposición del Ministerio de Educación?",
        "a": "El 10% del número total de estudiantes nuevos inscritos, considerando la estadística de la última gestión, conforme al Decreto Supremo N° 22802 y normativa complementaria para personas con discapacidad."
    },
    {
        "id": 1971,
        "q": "De acuerdo con la definición del Diccionario de la Lengua Española citada por Salazar, ¿cómo se define el término «práctica» en el contexto de la formación profesional?",
        "a": "Ejercicio que bajo la dirección de un maestro y por cierto tiempo deben realizar algunos para habilitarse y poder ejercer públicamente su profesión."
    },
    {
        "id": 1972,
        "q": "Según el texto “Innovación Educativa”, ¿qué caracteriza a las instituciones educativas que asumen desafíos y cuál es la finalidad última de ese proceso?",
        "a": "Persiguen permanentemente propuestas renovadoras para alcanzar mayor desarrollo de maestros, estudiantes e institución, avanzando hacia niveles crecientes de aprendizaje y crecimiento colectivo."
    },
    {
        "id": 1973,
        "q": "Según los aspectos fundamentales de la innovación educativa, ¿qué ocurre con las instituciones educativas que buscan innovación?",
        "a": "Se activan para responder a las transformaciones del entorno, superando el estancamiento y edificando entornos menos individualistas y más orientados a la participación colectiva."
    },
    {
        "id": 1974,
        "q": "Si el máximo ejecutivo de la entidad damnificada, de la entidad que ejerce tuición o la dirección colegiada no iniciare o no prosiguiere las acciones legales pertinentes hasta su conclusión, ¿qué acción puede ejercer el Contralor General?",
        "a": "Requerir a quien corresponda la destitución del ejecutivo y del asesor legal principal de la entidad damnificada, de la entidad que ejerce tuición o de la dirección colegiada que no inició o no prosiguió las acciones legales pertinentes."
    },
    {
        "id": 1975,
        "q": "Según el documento “Convivencia escolar y resolución pacífica de conflictos”, en la fase de preparación del apartado “Planificando la acción”, ¿qué se incluirá entre los contenidos formativos para comprender el alcance de un modelo integrado de mejora de la convivencia?",
        "a": "Educación para la Cultura de Paz, técnicas y métodos para la resolución de conflictos."
    },
    {
        "id": 1976,
        "q": "Como se indica en el “Manual de resolución de problemas”, “se entiende entonces a la resolución de problemas como una habilidad que implica un proceso activo, que alterna entre el análisis y la acción”. ¿A quién se atribuye esta definición?",
        "a": "Boisvert, 2004"
    },
    {
        "id": 1977,
        "q": "Sacristán afirma que la escolarización no admite que se haga cualquier cosa, de cualquier manera o de un modo cambiante. ¿Qué función estructural del currículum fundamenta esa restricción?",
        "a": "Imponer una norma que delimita tiempos y contenidos, haciendo la práctica educativa no arbitraria ni intercambiable."
    },
    {
        "id": 1978,
        "q": "Los estudiantes que hayan obtenido el Diploma de Bachiller en Humanidades y el Título de Técnico Medio (B.T.H.), ¿cuánto tiempo adicional de formación superior deben cumplir para transitar a una carrera de nivel Técnico Superior de la misma especialidad?",
        "a": "Dos (2) años más en régimen anual o cuatro (4) semestres en régimen semestral, según el plan de estudios aprobado y de acuerdo a disponibilidad de espacios académicos."
    },
    {
        "id": 1979,
        "q": "¿Cuál es el neurotransmisor inhibidor que regula las emociones, el humor y la ansiedad, siendo su equilibrio fundamental para que el estudiante esté en condiciones óptimas de aprender?",
        "a": "Serotonina"
    },
    {
        "id": 1980,
        "q": "¿Qué neurotransmisores componen el «Circuito de recompensa»?",
        "a": "Dopamina, noradrenalina y serotonina."
    },
    {
        "id": 1981,
        "q": "¿Qué es necesario para que la conexión sináptica, presente en todo aprendizaje, se consolide con mayor facilidad?",
        "a": "Variedad, repetición y motivación."
    },
    {
        "id": 1982,
        "q": "¿Cuál fue el neurocientífico que descubrió que una alta estimulación en el hipocampo producía cambios estables y duraderos de la respuesta post-sináptica?",
        "a": "Timothy Bliss."
    },
    {
        "id": 1983,
        "q": "La Taxonomía de Bloom, ampliamente utilizada en el diseño curricular y en la planificación de la enseñanza, divide qué y cómo aprenden los seres humanos en tres dominios separados de aprendizaje. ¿Cuáles son estos tres dominios?",
        "a": "Dominio cognitivo, dominio afectivo y dominio psicomotor."
    },
    {
        "id": 1984,
        "q": "¿Cuál de las siguientes capacidades corresponde al perfil del maestro de apoyo a estudiantes con discapacidad visual, según el “Reglamento para el fortalecimiento de la educación inclusiva en el SEP - modalidad indirecta”?",
        "a": "Capacidad para desarrollar procesos de sensibilización y concienciación."
    },
    {
        "id": 1985,
        "q": "Gimeno Sacristán sostiene que «hay que evitar la sinécdoque de hacer de la enseñanza de contenidos la única meta de las escuelas» y que los fines ampliados de la educación «constituyen derechos del alumnado y como tales deben convertirse en obligaciones para los profesores y no hay que dejarlos encerrados en sus asignaturas». ¿Qué exige al docente, según el autor, asumir este planteamiento en su práctica profesional?",
        "a": "Reconocerse como enseñante-educador responsable del desarrollo integral del alumnado, lo que implica trascender los límites de su asignatura para contribuir, desde su práctica, al logro de fines que el currículum establece como derechos exigibles y no como aspiraciones opcionales."
    },
    {
        "id": 1986,
        "q": "De acuerdo con la tabla de “Orientaciones cuando se conoce un caso de violencia”, que se encuentra en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, en el momento de la “Detección de la violencia”, lo que No se puede hacer es:",
        "a": "No: contar la historia personal, ignorar sentimientos o hechos, juzgar, regañar o tomar partido, reforzar comentarios pesimistas, minimizar la situación y pensar que la víctima imaginó la situación."
    },
    {
        "id": 1987,
        "q": "Desde una dimensión pedagógica de la innovación educativa, ¿qué modalidades han sido revaloradas como estrategias esenciales para alimentar y sostener las innovaciones, constituyéndose a la vez como herramientas de formación profesional en servicio?",
        "a": "Diversas modalidades de investigación-acción, autoevaluación, sistematización y reflexión sobre las prácticas pedagógicas."
    },
    {
        "id": 1988,
        "q": "Una maestra de apoyo reporta el informe escrito del proceso de apoyo técnico pedagógico al Centro de Educación Especial, con visto bueno de la institución educativa correspondiente. De acuerdo al “Reglamento para el Fortalecimiento de la Educación Inclusiva en el Sistema Educativo Plurinacional – Modalidad Indirecta”, la maestra cumple con una:",
        "a": "Responsabilidad"
    },
    {
        "id": 1989,
        "q": "¿Qué medida de protección puede dictar la autoridad competente respecto al domicilio conyugal o donde habite la mujer en situación de violencia?",
        "a": "Ordenar la salida, desocupación y restricción al agresor del domicilio conyugal o donde habite la mujer en situación de violencia, independientemente de la acreditación de propiedad o posesión del inmueble, y ordenar que el agresor se someta a una terapia psicológica en un servicio de rehabilitación."
    },
    {
        "id": 1990,
        "q": "El cerebro elimina conexiones poco utilizadas y fortalece las que se activan de manera repetida. ¿Qué función cumple este proceso en el desarrollo del aprendizaje?",
        "a": "Suprimir sinapsis débiles para optimizar la eficiencia de redes neuronales consolidadas."
    },
    {
        "id": 1991,
        "q": "Según la tabla de señales y consecuencias de la violencia a corto y mediano plazo en la niñez, descritas en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de los siguientes enunciados corresponde al área cognitiva?",
        "a": "Frecuentes olvidos de tareas y rutinas previamente establecidas."
    },
    {
        "id": 1992,
        "q": "Al comparar las tres categorías de consecuencias a corto plazo de una agresión, ¿Cuáles son las consecuencias emocionales?",
        "a": "Tristeza, cambios bruscos de ánimo, irritabilidad, temor, vergüenza, culpa ansiedad, hiperactividad."
    },
    {
        "id": 1993,
        "q": "Según la tabla de señales y consecuencias de la violencia a corto y mediano plazo descritas en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de las siguientes opciones corresponde al área conductual en la adolescencia?",
        "a": "Disminución de la capacidad para afrontar y resolver situaciones que le generen excesivo estrés."
    },
    {
        "id": 1994,
        "q": "¿Qué deben incorporar de forma progresiva en su proyecto educativo y planificación curricular las Instituciones Educativas Fiscales, de Convenio y Privadas del Sistema Educativo Plurinacional, así como el personal docente, en sus diferentes niveles y modalidades de atención, de acuerdo a las responsabilidades para el fortalecimiento de la Educación Inclusiva?",
        "a": "Diseño Plural de los Aprendizajes"
    },
    {
        "id": 1995,
        "q": "La siguiente definición: “Acciones operativas de apoyo educativo, organizados sistemáticamente, que realiza la o el maestro de apoyo en coordinación con maestras y maestros de aula para garantizar procesos educativos pertinentes y en igualdad de oportunidades con equiparación de condiciones en favor de estudiantes con discapacidad” corresponde al enunciado de:",
        "a": "Apoyo Técnico Pedagógico."
    },
    {
        "id": 1996,
        "q": "En el caso de estudiantes con discapacidad, dificultades en el aprendizaje o talento extraordinario que presentan necesidades y/o potencialidades específicas y/o generales, ¿en qué debe basarse el apoyo educativo que se les brinda?",
        "a": "Diseño Plural para los Aprendizajes."
    },
    {
        "id": 1997,
        "q": "Las CyberGuides, como modelo de aprendizaje basado en unidades de instrucción enviadas por internet, fueron diseñadas para estudiar el siguiente tipo de contenido:",
        "a": "El análisis y comprensión de obras literarias importantes, a través de unidades instruccionales alineadas a estándares y distribuidas por internet."
    },
    {
        "id": 1998,
        "q": "Según el texto de Innovación Educativa, ¿qué condición es indispensable para transformar las formas de pensar y actuar que subyacen en los sistemas educativos?",
        "a": "Reconocer y cuestionar los esquemas internos que orientan la percepción de la realidad y la práctica profesional."
    },
    {
        "id": 1999,
        "q": "Cuando los estudiantes articulan teorías, crean hipótesis y debaten críticamente las ideas de sus pares, ¿qué competencia digital docente resulta esencial para facilitar ese proceso?",
        "a": "Diseñar entornos digitales que estimulen el aprendizaje auto-dirigido, el trabajo en equipo y la comprensión profunda mediante la resolución de problemas."
    },
    {
        "id": 2000,
        "q": "Un maestro trabaja con estudiantes que históricamente han obtenido bajos resultados académicos. Según los principios psicológicos de la enseñanza, ¿qué característica distingue a un profesor en relación con las expectativas hacia sus estudiantes?",
        "a": "Confiar genuinamente en que sus estudiantes son capaces de lograr grandes cosas, independientemente de su historial académico previo."
    },
    {
        "id": 2001,
        "q": "Clemente Linuesa afirma que al plantear actividades curriculares el docente está diseñando la práctica en un doble sentido: el aprendizaje y la vida social del aula. ¿Qué implicación curricular se deriva directamente de esta afirmación para el diseño de actividades en el aula?",
        "a": "Diseñar actividades exige considerar simultáneamente su dimensión cognitiva y su dimensión social, porque toda actividad configura al mismo tiempo aprendizajes y las formas de relación y convivencia dentro del aula."
    },
    {
        "id": 2002,
        "q": "La información registrada en el SIPPASE será derivada al Instituto Nacional de Estadística para su procesamiento y difusión. ¿Cuáles son las características que deben tener los indicadores construidos para dicha difusión?",
        "a": "Elaborados de forma conjunta, con enfoque de derechos humanos y de las mujeres, desagregados al menos por sexo, edad y municipio."
    },
    {
        "id": 2003,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué fenómeno ocurre cuando las respuestas condicionadas reaparecen repentinamente por sí solas?",
        "a": "Recuperación espontánea; las respuestas condicionadas reaparecen repentinamente por sí solas tras la extinción."
    },
    {
        "id": 2004,
        "q": "Desde la perspectiva del neuroaprendizaje, ¿qué aspectos deben abordarse con las familias para fortalecer el proceso evaluativo de los estudiantes?",
        "a": "Tolerancia y frustración."
    },
    {
        "id": 2005,
        "q": "La carga horaria individualizada de 12 horas mensuales promedio de acuerdo al Reglamento para el funcionamiento de la Educación Inclusiva en el Sistema Educativo Plurinacional – Modalidad Indirecta corresponde al maestro de apoyo de estudiantes con:",
        "a": "Discapacidad Visual."
    },
    {
        "id": 2006,
        "q": "La función específica “orienta a la maestra o maestro de aula, sobre criterios de evaluación de logro de aprendizajes”, corresponde a maestros de apoyo de estudiantes con:",
        "a": "Discapacidad auditiva."
    },
    {
        "id": 2007,
        "q": "¿A través de quiénes se debe alcanzar la cobertura que comprende unidades educativas fiscales y de convenio que atienden a estudiantes con discapacidad intelectual en su radio de acción?",
        "a": "Maestros de apoyo"
    },
    {
        "id": 2008,
        "q": "Conforme al Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP Modalidad Indirecta, ¿de quiénes dependen directamente los maestros de apoyo que desarrollan sus actividades en Educación Regular y Alternativa?",
        "a": "Directores de los Centros de Educación Especial"
    },
    {
        "id": 2009,
        "q": "La función de “Diseñar, crear y ejecutar instrumentos que fomenten y fortalezcan el orden y la disciplina interna del plantel docente y estudiantil en el Instituto”, corresponde a:",
        "a": "Director(a) Académico(a) del Instituto."
    },
    {
        "id": 2010,
        "q": "¿Ante qué autoridad debe ser interpuesta la denuncia contra un maestro en la sustanciación de un proceso disciplinario?",
        "a": "Director de Unidad Educativa"
    },
    {
        "id": 2011,
        "q": "El texto “Convivencia escolar y resolución pacífica de conflictos” menciona que: las acciones de control y de prevención, por tanto, deben orientarse a estos dos tipos de factores y centrarse en los ámbitos o niveles en los que operan: individual, familiar y social. Por otro lado, también se deben considerar, desde la temporalidad otros factores asociados a la violencia, como:",
        "a": "Predisposiciones biológicas y antecedentes sociales, características situacionales y acontecimientos desencadenantes."
    },
    {
        "id": 2012,
        "q": "¿Qué obligación tiene la Secretaria(o) del Instituto respecto a la documentación institucional que maneja en el ejercicio de sus funciones?",
        "a": "Conservar la confidencialidad de la documentación e información a la que tiene acceso."
    },
    {
        "id": 2013,
        "q": "¿Qué reveló un estudio sobre innovaciones educativas en América Latina respecto a los cambios que estas implican?",
        "a": "Difícilmente las innovaciones implican cambios en un área o componente concreto, sino que la gran mayoría involucra cambios en diferentes aspectos de la práctica educativa."
    },
    {
        "id": 2014,
        "q": "Según Michel Janosz (1998), después de un examen atento de la literatura y de los instrumentos de evaluación, ¿cuántas categorías de prácticas educativas establece que la investigación reconoce como influyentes sobre la calidad de los comportamientos y del aprendizaje del alumnado?",
        "a": "Ocho categorías"
    },
    {
        "id": 2015,
        "q": "¿Por cuántos capítulos está constituido el Reglamento para el Fortalecimiento de la Educación Inclusiva en el Sistema Educativo Plurinacional — Modalidad Indirecta?",
        "a": "Diez (10) capítulos."
    },
    {
        "id": 2016,
        "q": "De acuerdo con la tabla de tipologías de violencia sexual descrita en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, en los delitos contra la libertad sexual referidos al “Abuso sexual”, si la víctima es niña, niño o adolescente, la pena privativa de libertad será de:",
        "a": "Diez (10) a quince (15) años de privación de libertad."
    },
    {
        "id": 2017,
        "q": "Desde la perspectiva del neuroaprendizaje, la evaluación trasciende la medición de resultados y se concibe como un proceso continuo. ¿Cómo debe entenderse la evaluación bajo este enfoque?",
        "a": "Diálogo, comprensión y mejora"
    },
    {
        "id": 2018,
        "q": "El documento, “Convivencia escolar y resolución pacífica de conflictos”, menciona que la aplicación de cualquier plan preventivo y de mejora de la convivencia escolar no debe ser lineal, sino que cada etapa debe estar caracterizada por un proceso de:",
        "a": "Reducir la dependencia de cada persona en relación con cualquier tipo de uso de la violencia como medio de resolver los problemas."
    },
    {
        "id": 2019,
        "q": "La reflexión y la retroalimentación son fundamentales en el «modelo observación evaluación» de desarrollo profesional docente según Imbernón, porque fruto de la discusión, se permite construir conocimiento profesional. ¿Cuáles son los pasos que se destacan?",
        "a": "Reunión; observación; análisis de lo observado; reunión de post observación; análisis de observación."
    },
    {
        "id": 2020,
        "q": "¿Cuáles son los requisitos que debe presentar la Dirección Departamental de Educación para el Cierre de Institutos de carácter fiscal o de convenio Sede Central, Subsede y/o carreras?",
        "a": "Informe técnico de seguimiento, certificación de libros Centralizadores de Calificaciones, registro fotográfico de la inspección ocular y fotocopia simple de disposiciones normativas de autorización."
    },
    {
        "id": 2021,
        "q": "¿Cuáles son las seis etapas que establece Matteau (2001) en el cuadro “Etapas en la resolución de conflictos” mencionados en el texto “Convivencia escolar y resolución pacífica de conflictos”?",
        "a": "Preparación, introducción y enmarque, definir el problema de manera neutral, examinar las motivaciones que sostienen las posturas, buscar opciones posibles y establecer criterios para valorarlas y elaborar y aceptar una solución satisfactoria para ambas partes."
    },
    {
        "id": 2022,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, según Lederach (1989), para intervenir y resolver un conflicto con éxito hace falta un proceso que cumpla los siguientes requisitos:",
        "a": "Clarificar el origen, la estructura y la magnitud del problema; facilitar y mejorar la comunicación; y trabajar sobre los problemas concretos que tienen las personas en oposición."
    },
    {
        "id": 2023,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿qué autor expresó: “Para adquirir el sentido de la disciplina, de la solidaridad y de la responsabilidad, la escuela activa se esfuerza en proporcionar al niño situaciones en las que tenga que experimentar directamente las realidades morales, y que vaya descubriendo, poco a poco, por sí mismo las leyes constitucionales(...) Elaborando ellos mismos las leyes que han de reglamentar la disciplina escolar, eligiendo ellos mismos el gobierno que ha de encargarse de ejecutar esas leyes, y constituyendo ellos mismos el poder judicial que ha de tener por función la represión de los delitos, los niños tienen la oportunidad de aprender por experiencia lo que es la obediencia a una norma, la adhesión al grupo y la responsabilidad individual”?",
        "a": "Piaget."
    },
    {
        "id": 2024,
        "q": "¿Cuál de los siguientes enunciados corresponde a una de las finalidades del Reglamento para el Fortalecimiento de la Educación Inclusiva en el Sistema Educativo Plurinacional – Modalidad Indirecta?",
        "a": "Garantizar a los estudiantes con discapacidad, dificultades en el aprendizaje y talento extraordinario, el acceso a una educación inclusiva de calidad."
    },
    {
        "id": 2025,
        "q": "Cuando el Contralor General de la República dictamina responsabilidad ejecutiva a ex ejecutivos o ex directores, ¿cuál es la finalidad de dicho dictamen?",
        "a": "Dejar constancia y registro de su responsabilidad."
    },
    {
        "id": 2026,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, el estudio de Brunet (1987) pone de manifiesto cómo los comportamientos individuales, la motivación y el liderazgo, junto a la estructura de la organización y los procesos organizacionales:",
        "a": "Determinan el clima, que a su vez incide sobre los resultados de la organización."
    },
    {
        "id": 2027,
        "q": "¿Qué característica distingue a los proyectos de mejora e innovación respecto de los proyectos estables del centro, según Linuesa?",
        "a": "Son particulares de cada centro y por tanto no prefigurados de antemano."
    },
    {
        "id": 2028,
        "q": "Considerando la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, menciona que el Ministerio de Educación se han desarrollado diferentes herramientas de prevención, actuación y denuncia de los diferentes tipos y formas de violencia traducidos en una serie de protocolos y rutas de actuación, lo que contribuye a fomentar una cultura de respeto, al derecho a convivir en escuelas y hogares libres de violencia, lo que contribuye significativamente a:",
        "a": "Cuando hay maltrato entre miembros de la familia, con comportamientos deliberados y recurrentes, en los que uno o más componentes de la familia con mayor poder, abusan de otros con menor poder."
    },
    {
        "id": 2029,
        "q": "De acuerdo con el “Manual de resolución de problemas”, ¿cuáles son los cinco pasos que podemos seguir para resolver un problema?",
        "a": "Identificar el problema, analizar el problema, generar posibles soluciones, evaluar posibles soluciones y elegir una solución e implementarla."
    },
    {
        "id": 2030,
        "q": "Desde el neuroaprendizaje, ¿por qué se recomienda al maestro aplicar el test de VAK?",
        "a": "Saber qué estilos de aprendizaje predominan."
    },
    {
        "id": 2031,
        "q": "Una maestra estructura cada sesión en tres momentos: presenta una situación sorpresiva que genera curiosidad, guía la construcción activa del conocimiento y propone una tarea que el estudiante percibe como logro personal. Desde la neurociencia, ¿qué circuito se activa secuencialmente con esta estrategia?",
        "a": "Detección, Acción, Satisfacción."
    },
    {
        "id": 2032,
        "q": "Un maestro aplica el método de caso sobre deforestación amazónica. Los grupos debaten, pero se niegan a escuchar observaciones de sus compañeros sobre sus propias conclusiones. ¿Qué limitación específica del método explica esta actitud?",
        "a": "Algunas personas rechazan este método pues son reacias a someter sus ideas a la crítica."
    },
    {
        "id": 2033,
        "q": "¿Qué sanción adicional recibe el servidor público que cometa acoso sexual en el ámbito de la relación jerárquica que ostenta?",
        "a": "Destitución de su cargo y agravación de la pena en un tercio."
    },
    {
        "id": 2034,
        "q": "¿Qué desplazamiento conceptual fundamental supone la visión procesual del currículum propuesta por Grundy?",
        "a": "Desplaza el centro de gravedad desde el texto prescrito hacia los efectos producidos en la subjetividad del aprendiz."
    },
    {
        "id": 2035,
        "q": "¿Cuál de las siguientes consecuencias a corto plazo por agresión pertenece a la categoría cognitiva?",
        "a": "Desmotivación hacia actividades y tareas escolares."
    },
    {
        "id": 2036,
        "q": "¿Cuál es una de las obligaciones que deben cumplir los Órganos del Estado, las Entidades Territoriales Autónomas e Instituciones Públicas para la aplicación de la Ley N° 348?",
        "a": "Adoptar, implementar y supervisar protocolos de atención especializada, en las diferentes instancias de atención, para el restablecimiento de los derechos de mujeres en situación de violencia."
    },
    {
        "id": 2037,
        "q": "¿Cuál es una de las responsabilidades de las direcciones departamentales y distritales de educación en relación al apoyo educativo a estudiantes con talento extraordinario?",
        "a": "Generar oportunidades académicas en instituciones educativas, culturales, científicas y universidades a nivel nacional y departamental."
    },
    {
        "id": 2038,
        "q": "¿Cuál es una de las responsabilidades de las direcciones departamentales y distritales de educación, en relación al apoyo educativo a estudiantes con talento extraordinario?",
        "a": "Generar oportunidades académicas en instituciones educativas, culturales, científicas y universidades a nivel nacional y departamental."
    },
    {
        "id": 2039,
        "q": "Dentro de las señales y consecuencias de la violencia a largo plazo en la niñez, descritas en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de las siguientes opciones corresponde al área conductual?",
        "a": "Fracaso o abandono escolar."
    },
    {
        "id": 2040,
        "q": "El Estado Plurinacional de Bolivia garantiza el derecho a la vida de las personas con discapacidad... ¿Cuál es la opción que completa correctamente este enunciado?",
        "a": "Desde su concepción, al igual que el resto de las personas"
    },
    {
        "id": 2041,
        "q": "Durante la segunda mitad del siglo XX, ¿desde qué ámbito externo a la educación fue transferida la innovación para convertirse en preocupación pedagógica?, según el documento Innovación Educativa de la UNESCO.",
        "a": "Desde el mundo de la gestión empresarial y administrativa, impulsada por la modernización de los sistemas escolares ante las demandas del cambio social."
    },
    {
        "id": 2042,
        "q": "La formación en educación superior exige estrategias y enfoques que desarrollen múltiples capacidades en los estudiantes. ¿Qué secuencia de capacidades describe correctamente el proceso formativo integral planteado en dicho enfoque?",
        "a": "Desde la búsqueda de información, pasando por la construcción y aplicación del conocimiento, hasta el contacto ético con la sociedad y el intercambio con otros actores."
    },
    {
        "id": 2043,
        "q": "¿Desde qué semestre hasta qué semestre concluido puede un estudiante realizar el traspaso?",
        "a": "Desde el segundo semestre hasta el cuarto semestre concluido."
    },
    {
        "id": 2044,
        "q": "Según José Manuel Sáez López, ¿desde qué planteamiento deben ser abordados gran parte de los problemas de la escuela relacionados con la didáctica y la organización escolar para encontrar una línea de resolución satisfactoria?",
        "a": "Desde el planteamiento de la investigación-acción, que constituye una búsqueda de conocimiento en la reflexión personal, tratando de resolver problemas prácticos en el entorno escolar, articulando así la dimensión investigativa con la dimensión práctica de la enseñanza y la organización escolar."
    },
    {
        "id": 2045,
        "q": "¿En qué horario se aplica la detención de fin de semana como sanción alternativa en delitos de violencia hacia las mujeres?",
        "a": "Desde el día viernes a horas 19:00 hasta el día lunes a horas 6:00."
    },
    {
        "id": 2046,
        "q": "A partir del documento “Convivencia escolar y resolución pacífica de conflictos”, ¿desde qué año el Equipo Interdisciplinario Capacitador en Mediación Educativa (EICAME) desarrolla diversas acciones formativas y un programa de mediación escolar en Argentina?",
        "a": "Desde 1998."
    },
    {
        "id": 2047,
        "q": "¿Qué sanción corresponde a un servidor público que es sorprendido realizando fraude en las evaluaciones de los cursos de capacitación convocados por la Contraloría General de la República?",
        "a": "Destitución por la máxima autoridad o ejecutivo de la entidad a que pertenece, en base al informe emitido por el Centro de Capacitación de la Contraloría General de la República."
    },
    {
        "id": 2048,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué capacidad distingue específicamente al estilo global de Felder?",
        "a": "Son capaces de resolver problemas complejos rápidamente o juntar cosas de forma novedosa captando el panorama general."
    },
    {
        "id": 2049,
        "q": "¿Cuál es el objetivo planteado en la parte introductoria del texto Innovación Educativa de la UNESCO?",
        "a": "Comprender las dinámicas que posibilitan orientar y construir la renovación pedagógica en los establecimientos, en el marco estratégico de las políticas para el mejoramiento formativo."
    },
    {
        "id": 2050,
        "q": "¿Cómo describe la teoría sociocultural de Vygotsky el aprendizaje humano y cuál es el tema central de su marco teórico?",
        "a": "Describe el aprendizaje como un proceso social y el origen de la inteligencia humana en la sociedad o cultura, y el tema central de su marco teórico es que la interacción social juega un rol fundamental en el desarrollo de la cognición."
    },
    {
        "id": 2051,
        "q": "Desde el neuroaprendizaje, ¿cuál es una técnica para ayudar a los estudiantes a manejar el estrés que generan las evaluaciones?",
        "a": "Describan su emoción"
    },
    {
        "id": 2052,
        "q": "Una maestra organiza sus clases de manera que cada estudiante trabaja de forma individual y separada, evitando la interacción entre compañeros, argumentando que así se mide el rendimiento real de cada uno. Según los principios de la buena enseñanza, ¿qué aspecto fundamental está dejando de lado esta docente?",
        "a": "Está ignorando que trabajar con otros a menudo aumenta la participación y el aprendizaje, ya que el buen aprendizaje es colaborativo y social, no competitivo y aislado."
    },
    {
        "id": 2053,
        "q": "Una profesora de matemáticas lleva años enseñando los mismos contenidos con idénticas estrategias, sin ajustar su práctica según las necesidades del grupo. Según los principios psicológicos de la enseñanza, ¿qué limitación fundamental presenta esta docente?",
        "a": "Actúa de forma rutinaria y mecánica, poniendo la enseñanza «en automático», lo que le impide realizar un trabajo sobresaliente."
    },
    {
        "id": 2054,
        "q": "¿Cuáles son los elementos de la implementación en el ciclo “proceso de desarrollo y consolidación de la innovación”?",
        "a": "El protagonismo de las instituciones educativas y docentes en el cambio ‘desde abajo’, generando dinámicas de intercambio y trabajo compartido como comunidades educativas o redes pedagógicas."
    },
    {
        "id": 2055,
        "q": "¿Cuál es el objetivo del proceso de apoyo educativo a estudiantes con dificultades en el aprendizaje?",
        "a": "Fortalecer las acciones educativas y metodológicas que respondan a las necesidades educativas de estudiantes con dificultades en el aprendizaje para superar paulatinamente esas dificultades mediante una atención pertinente en el aula regular."
    },
    {
        "id": 2056,
        "q": "Un maestro incorpora la gestión emocional en su práctica, reconociendo que el estado afectivo incide en la consolidación del aprendizaje. Desde la neurociencia educativa, ¿cuál es el punto de partida neurológicamente fundamentado para iniciar dicha gestión?",
        "a": "Cultivar la autoconciencia afectiva autorregulando el propio estado interno."
    },
    {
        "id": 2057,
        "q": "Un maestro incorpora la gestión emocional en su práctica pedagógica. ¿Cuál es el punto de partida neurológicamente fundamentado para iniciar dicha gestión en el aula?",
        "a": "Desarrollar la autoconciencia emocional propia, identificando y regulando el estado afectivo personal"
    },
    {
        "id": 2058,
        "q": "Desde el neuroaprendizaje, ¿cuál es la función primordial de las emociones en el proceso de aprendizaje?",
        "a": "Activar funciones adaptativas; el organismo se prepara para asimilar la situación y traducirla en respuesta."
    },
    {
        "id": 2059,
        "q": "¿Qué responsabilidad tienen las instituciones de capacitación docente respecto a la formación en el uso de las nuevas herramientas tecnológicas?",
        "a": "Desarrollar estrategias y planes con el fin de mejorar el proceso de enseñanza-aprendizaje dentro de los propios programas de formación docente, y asegurar que los futuros profesores estén bien capacitados en el uso de las nuevas herramientas tecnológicas para el aprendizaje."
    },
    {
        "id": 2060,
        "q": "¿Cuál de las siguientes opciones describe una responsabilidad que corresponde exclusivamente a maestras y maestros de aula que trabajan con estudiantes con discapacidad visual?",
        "a": "Desarrollar estrategias pedagógicas privilegiando elementos sonoros y en relieve o macrotipo y/o con contraste de color o iluminación pertinente, adecuación de materiales educativos y otros."
    },
    {
        "id": 2061,
        "q": "Tomando en cuenta la premisa del proyecto Enlaces, ¿qué se requiere además de proveer tecnología a las instituciones educativas para producir cambios perdurables en las prácticas pedagógicas y en los resultados del aprendizaje?",
        "a": "Realizar esfuerzos adicionales como la capacitación y el apoyo de docentes, dado que las TIC por sí solas no producen cambios significativos en la calidad de la educación."
    },
    {
        "id": 2062,
        "q": "En el marco del apoyo educativo a estudiantes con dificultades en el aprendizaje, ¿cuál de los siguientes enunciados corresponde a un procedimiento de atención educativa que debe realizar el maestro de apoyo?",
        "a": "Desarrollar procesos de sensibilización a comunidades educativas del Nivel de Educación Primaria Comunitaria Vocacional."
    },
    {
        "id": 2063,
        "q": "¿Cuál de las siguientes opciones corresponde a una finalidad del Reglamento General de Centros de Capacitación Artística e Institutos de Formación Artística?",
        "a": "Apoyar, propiciar y potenciar el desarrollo de una metodología académica innovadora y de calidad en las artes."
    },
    {
        "id": 2064,
        "q": "Según el “Manual de resolución de problemas”, la resolución de problemas es una habilidad esencial para superar obstáculos en la vida diaria. Entre los beneficios de desarrollar esta habilidad se incluyen: La mejora de las relaciones personales. ¿En qué consiste este beneficio?",
        "a": "Facilita la resolución de conflictos con amistades y familiares."
    },
    {
        "id": 2065,
        "q": "En el marco de los elementos de la enseñanza, ¿qué papel cumple una maestra que plantea situaciones problemáticas que van más allá de lo que sus estudiantes ya saben, considerando que la calidad de la enseñanza solo puede probarse en términos del aprendizaje al que conduce?",
        "a": "Está poniendo en práctica desafiar al estudiante a aprender, promoviendo situaciones que exigen esfuerzo cognitivo y superación personal, lo cual conduce a un aprendizaje deseable donde cada estudiante amplía sus capacidades más allá de lo que ya conocía."
    },
    {
        "id": 2066,
        "q": "Una persona con discapacidad auditiva debe comparecer como testigo en un proceso judicial en la ciudad de Sucre. Al llegar a las instalaciones del Tribunal, el personal no cuenta con intérprete de lengua de señas ni con ningún tipo de apoyo comunicacional. Según la Ley General para Personas con Discapacidad, ¿qué obligación tiene el Estado Plurinacional de Bolivia para garantizar la participación efectiva de esta persona en el procedimiento?",
        "a": "Asegurar el acceso a la justicia con apoyo psicológico, social y comunicacional en igualdad de condiciones, y promover la capacitación de operadores de justicia, personal policial y penitenciario para facilitar la participación de personas con discapacidad en todos los procedimientos judiciales."
    },
    {
        "id": 2067,
        "q": "Según la neurociencia, ¿cómo se denominan los cambios cerebrales que permiten crear y ampliar nuevas redes neuronales?",
        "a": "Neuroplasticidad positiva."
    },
    {
        "id": 2068,
        "q": "¿Qué combinación de instancias externas a la unidad educativa, medida de protección interna y acción pedagógica debe reflejarse ante un caso de violencia sexual contra una o un estudiante?",
        "a": "Derivación a la DNA o al CEPAT mediante formato de informe de derivación, impedimento de divulgación de nombres de víctimas y testigos, y realización de adaptaciones curriculares para compensar los días de inasistencia."
    },
    {
        "id": 2069,
        "q": "Una maestra de lenguaje, al desarrollar sus clases, evita que sus estudiantes sean receptores pasivos de información y en su lugar les propone tareas en las que deben manipular, analizar y transformar los contenidos trabajados durante la sesión. Desde los principios psicológicos de la enseñanza, ¿qué fundamento sustenta esta decisión pedagógica?",
        "a": "Responde al principio de que los estudiantes deben trabajar activamente con el material, ya que la enseñanza es una actividad compleja que obliga a combinar múltiples tareas y objetivos simultáneamente y con flexibilidad."
    },
    {
        "id": 2070,
        "q": "¿Cuál es la obligación de las Directoras y Directores Departamentales de Educación y el Ministerio de Educación ante directores, docentes o administrativos del Sistema Educativo Plurinacional sindicados de cometer delitos contra la vida, integridad física, psicológica y/o sexual de estudiantes?",
        "a": "Denunciar y coadyuvar en la acción penal correspondiente hasta su conclusión ante el Ministerio Público de su jurisdicción o autoridad competente."
    },
    {
        "id": 2071,
        "q": "¿Cuál de las siguientes acciones corresponde EXCLUSIVAMENTE a la responsabilidad de la directora o director de la unidad educativa en el marco de las medidas generales de prevención de la violencia, y NO puede ser delegada ni compartida con otros actores de la comunidad educativa?",
        "a": "Denunciar ante la autoridad competente cualquier hecho delictivo cometido contra alguna o algún estudiante."
    },
    {
        "id": 2072,
        "q": "¿En qué plazo y ante quién debe presentar la entidad auditada el cronograma de implantación de las recomendaciones de auditoría aceptadas?",
        "a": "Dentro de los diez días hábiles siguientes a la aceptación de las recomendaciones, ante la Contraloría General de la República, la unidad de auditoría de la entidad tutora o el profesional o firma contratada, enviando copia a la Contraloría."
    },
    {
        "id": 2073,
        "q": "Al ilustrar qué significa evaluar por competencias, Feito recurre a la pregunta de tipo PISA sobre tazas a distintas temperaturas porque:",
        "a": "Plantea una situación cotidiana que se resuelve razonando y descartando opciones improbables, sin necesidad de aplicar fórmulas."
    },
    {
        "id": 2074,
        "q": "¿Qué demuestra la teoría holográfica del cerebro de Pribram respecto a la presentación de la información y qué beneficio adicional genera en los alumnos?",
        "a": "Demuestra que la información que se presenta de un modo global es más fácil de asimilarse que la que se presenta como una secuencia de unidades de información, y además permite que los alumnos puedan ver la relación entre los distintos elementos y crear conexiones entre ellos."
    },
    {
        "id": 2075,
        "q": "En el marco de los elementos de la enseñanza, ¿qué caracteriza la práctica de un maestro que adapta sus estrategias y ejemplos a las condiciones culturales, familiares y comunitarias en las que viven sus estudiantes, considerando que la calidad de la enseñanza solo puede probarse en términos del aprendizaje al que conduce?",
        "a": "Evidencia que el maestro pone en práctica considerar el contexto social de los alumnos, vinculando intencionalmente los contenidos con la realidad cultural y comunitaria de sus estudiantes, lo cual genera un aprendizaje deseable más significativo y de mayor calidad."
    },
    {
        "id": 2076,
        "q": "¿Cuál es la obligación del Estado Plurinacional, en todos sus niveles, respecto a la temática de discapacidad en su régimen normativo, planes, programas y proyectos?",
        "a": "Incorporar de manera transversal la temática de discapacidad en su régimen normativo, planes, programas y proyectos, de acuerdo a su competencia."
    },
    {
        "id": 2077,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos” ¿De qué supuesto parten los Programas de Orientación Comunitaria o Proactivos?",
        "a": "De que los orígenes profundos de la violencia están fuera del centro, consideran que el colegio no es en sí mismo una estructura violenta, y que ésta es traída al centro por los profesores y los alumnos."
    },
    {
        "id": 2078,
        "q": "Según Perrenoud, la administración escolar tolera ciertas desviaciones de la práctica docente, pero prohíbe otras. ¿Qué tipo de desviación se menciona como especialmente vigilada?",
        "a": "Dejar en la sombra componentes del currículum formal considerados esenciales o introducir contenidos ajenos al currículum prescrito."
    },
    {
        "id": 2079,
        "q": "En el documento “Convivencia escolar y resolución pacífica de conflictos”, la fase del proceso mediador denominada “Elaboración de opciones posibles” consiste en:",
        "a": "Discutir los criterios que presiden la elaboración de una solución, a través de la exposición por ambas partes de las opciones conocidas o deseadas que satisfacen los intereses de cada persona, creándose nuevas opciones posibles de manera colaborativa y desarrollando alternativas nuevas desde escenarios hipotéticos."
    },
    {
        "id": 2080,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿cuál es el tercer paso del ABP para un trabajo sistemático?",
        "a": "Analizar el problema con torbellino de ideas, movilizando recursos y perspectivas diversas del grupo."
    },
    {
        "id": 2081,
        "q": "¿Cuáles son las instancias de coordinación interinstitucional que debe mantener la Directora o el Director Distrital Educativo, a fin de facilitar la derivación de casos de violencia y la atención terapéutica de la niñez y adolescencia víctima de violencia?",
        "a": "Defensorías de la Niñez y Adolescencia de los Gobiernos Autónomos Municipales correspondientes y las Instancias Técnicas Departamentales de Políticas Sociales SEDEGES/ SEDEPOS."
    },
    {
        "id": 2082,
        "q": "¿A qué obligación están sujetos los Institutos respecto a los recursos obtenidos por sostenibilidad económico institucional?",
        "a": "Deben tener un registro contable financiero de ingresos y egresos de los recursos obtenidos, sujetos a fiscalización por las instancias correspondientes y de acuerdo a normativa vigente"
    },
    {
        "id": 2083,
        "q": "La Ley General para Personas con Discapacidad establece una distinción entre infraestructuras preexistentes y nuevas construcciones en materia de accesibilidad. ¿Qué condición deben cumplir las nuevas construcciones, sistemas, medios de comunicación y medios de transporte?",
        "a": "Deben contar con las condiciones de accesibilidad establecidas en la Ley desde su promulgación, sin margen de adecuación gradual."
    },
    {
        "id": 2084,
        "q": "¿Qué transformación deben asumir las instituciones educativas para superar el modelo tradicional y adaptarse a los nuevos escenarios y exigencias de la educación actual?",
        "a": "Deben dejar de ser instituciones aisladas y conectarse no solo con el entorno cercano, sino también con el mundo global a través de la participación en redes, superando el modelo tradicional de organización encerrada en sí misma."
    },
    {
        "id": 2085,
        "q": "¿Qué contenido y formato deben tener los Certificados de Calificaciones emitidos por el instituto?",
        "a": "Deben ser emitidos con las asignaturas aprobadas del plan de estudios cursado por el estudiante, en el período académico correspondiente, de acuerdo al formato definido por el Ministerio de Educación."
    },
    {
        "id": 2086,
        "q": "¿Qué aspectos deben conocer y aplicar los docentes en relación con las TIC en su dimensión social y sanitaria?",
        "a": "Deben comprender y aplicar los códigos de práctica legal y moral incluyendo el respeto a los derechos de autor; reflexionar y discutir sobre el impacto de la tecnología en la sociedad local y mundial; y planificar y promover un uso adecuado y seguro de las TIC."
    },
    {
        "id": 2087,
        "q": "En una unidad educativa se detecta que un estudiante presenta señales de posible situación de riesgo. ¿Cuáles son los otros servicios, que deben articular los actores de la comunidad para restituir los derechos del estudiante?",
        "a": "Servicios de salud, protección, restitución de los derechos de las y los estudiantes, y la defensa de su integridad y dignidad, en casos de violencia."
    },
    {
        "id": 2088,
        "q": "¿Qué característica debe tener el acceso de los educadores a las nuevas tecnologías, software y redes de telecomunicaciones en el marco de la formación docente?",
        "a": "Debe ser consistente en todos los distintos entornos que constituyen la formación docente, aunque a primera vista parezca algo sencillo de lograr."
    },
    {
        "id": 2089,
        "q": "En un proceso disciplinario contra un maestro, cuando la denuncia es interpuesta verbalmente, ¿qué acción debe realizar obligatoriamente el funcionario que la recibe?",
        "a": "Debe sentar un acta de la denuncia recibida para su remisión a la autoridad correspondiente"
    },
    {
        "id": 2090,
        "q": "¿En qué medida debe integrarse la tecnología en el programa de formación docente y qué deben aprender los futuros docentes a lo largo de su experiencia educativa?",
        "a": "Debe integrarse a todo el programa de formación docente, y los futuros docentes deben aprender de forma práctica acerca del uso de la tecnología y de las formas en que ésta puede incorporarse a sus clases."
    },
    {
        "id": 2091,
        "q": "¿Qué condición debe cumplir una propuesta para ser catalogada como innovación y qué características debe reunir quien la impulsa?",
        "a": "Debe generar valor real, siendo impulsada por alguien capaz de combinar muchos saberes acumulados y habilidades diversas para lograrlo."
    },
    {
        "id": 2092,
        "q": "Respecto al uso de la planeación didáctica por parte del docente, ¿cuál es la orientación central que establece Salazar C. para su correcta implementación en el proceso de instrucción?",
        "a": "Debe fungir como el medio principal que permita el uso de métodos diversos de enseñanza y el dominio amplio de contenidos que componen una unidad de aprendizaje o estructura curricular, evitando entenderla como un proceso únicamente administrativo."
    },
    {
        "id": 2093,
        "q": "En el documento “Convivencia escolar y resolución pacífica de conflictos”, se menciona que en todo proceso mediador se siguen fases, ¿en qué consiste la fase “colaboración inicial”?",
        "a": "Debe existir un acuerdo previo de las partes en colaborar estrechamente para resolver el conflicto, de manera que se clarifique en qué consiste el proceso de mediación y los objetivos a alcanzar."
    },
    {
        "id": 2094,
        "q": "El texto “Convivencia escolar y resolución pacífica de conflictos” establece que un buen reglamento escolar no puede concebirse más que como una propuesta de convivencia. En ese sentido, ¿cómo debe elaborarse dicho reglamento y a quiénes debe afectar su cumplimiento?",
        "a": "Debe elaborarse conjuntamente por todos los miembros de la comunidad educativa, de modo que su cumplimiento afecte a todos y no exclusivamente al alumnado."
    },
    {
        "id": 2095,
        "q": "¿Qué elementos debe contemplar una definición completa del entorno que determina los progresos tecnológicos y en el cual la tecnología y la política pública interactúan?",
        "a": "Debe contemplar las variaciones de la demanda del mercado, de los precios y de la rentabilidad, así como el rol de las instituciones y de los factores de orden sistémico."
    },
    {
        "id": 2096,
        "q": "¿Cómo debe concebirse el desarrollo profesional docente que implica incorporar las TIC a la enseñanza y el aprendizaje, y qué características deben tener los enfoques sobre dicho desarrollo?",
        "a": "Debe concebirse como un proceso continuo que no debe verse como una única inyección de capacitación, y los enfoques deben guardar relación con el contexto y la cultura."
    },
    {
        "id": 2097,
        "q": "De acuerdo con el documento “Convivencia escolar y resolución pacífica de conflictos”, la resolución pacífica de los conflictos persigue la cooperación como forma de resolver los enfrentamientos. Sin embargo, no siempre los conflictos se resuelven gracias a la voluntad de las partes en litigio y necesitan la intervención de terceros. ¿Cuáles son estos terceros?",
        "a": "De un intermediario, de un mediador, o de árbitro."
    },
    {
        "id": 2098,
        "q": "¿Qué tipo de memoria permite, por ejemplo, estudiar para un examen y si no se repite se pierde?",
        "a": "Intermedia."
    },
    {
        "id": 2099,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿de qué depende el éxito del condicionamiento operante de Skinner?",
        "a": "De la elección correcta de un programa de refuerzo para que los comportamientos se repitan adecuadamente."
    },
    {
        "id": 2100,
        "q": "En el contexto de la Escuela Rural Los Soches presentado en el texto de Innovación Educativa, ¿cuáles son las tres problemáticas que definen el carácter de la mixtura entre lo urbano y lo rural en el que se desenvuelve la actividad pedagógica?",
        "a": "De orden económico, social y medio ambiental, vinculadas con la tenencia de la tierra en las comunidades donde se desenvuelve la enseñanza."
    },
    {
        "id": 2101,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿qué tipos de estrategias curriculares aplican las escuelas pacíficas?",
        "a": "De resolución no violenta de los conflictos, interviniendo eficazmente en la prevención de la violencia escolar."
    },
    {
        "id": 2102,
        "q": "Según el acápite “Referencia o derivación” de la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, cuando el riesgo de violencia es ALTO, ¿en qué plazo debe realizarse la comunicación a la DNA?",
        "a": "De manera inmediata, dentro de las 24 horas de conocido el hecho de violencia."
    },
    {
        "id": 2103,
        "q": "El Condicionamiento Operante considera que el aprendizaje depende de sus consecuencias. Es probable que los comportamientos que se refuerzan se repitan y los que no se refuerzan probablemente no se repitan. ¿A qué se debe el éxito del condicionamiento operante?",
        "a": "El éxito del condicionamiento operante depende de la elección correcta de un programa de refuerzo."
    },
    {
        "id": 2104,
        "q": "Dentro de una organización, ¿cuáles son las fuentes de las que puede provenir la innovación?",
        "a": "De la investigación y también de la asimilación organizacional de una tecnología ya desarrollada y dominada, cuya puesta en práctica en un contexto organizativo, cultural, técnico o comercial específico constituye en sí misma una novedad."
    },
    {
        "id": 2105,
        "q": "¿De qué depende el éxito del condicionamiento operante de Skinner?",
        "a": "De la elección correcta de un programa de refuerzo."
    },
    {
        "id": 2106,
        "q": "¿De qué depende, en última instancia, el poder transformador de las TIC en la enseñanza?",
        "a": "De la capacidad pedagógica del docente para emplear los recursos tecnológicos disponibles en la construcción de entornos de aprendizaje innovadores, enriquecidos y motivadores para los alumnos."
    },
    {
        "id": 2107,
        "q": "¿Qué característica sistémica define a la innovación y determina su éxito más allá de la calidad individual de sus actores?",
        "a": "De la calidad de sus diversos actores, su sinergia, la forma como interactúan, así como la cantidad y calidad de dichas interacciones, funcionando como un sistema cuyo éxito no recae en un solo elemento."
    },
    {
        "id": 2108,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos” se menciona que un centro caracterizado por el uso y abuso de la norma y la sanción para la regulación de la convivencia escolar favorecerá un clima:",
        "a": "De inseguridad y de injusticia."
    },
    {
        "id": 2109,
        "q": "El documento “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo” menciona que, desde la labor de las maestras y los maestros, se pueden presentar situaciones para identificar la violencia en la familia. ¿Cuál de las siguientes opciones corresponde a una de esas situaciones?",
        "a": "De acuerdo al grado de confianza generada por la maestra o el maestro, niñas, niños y adolescentes pueden acercarse y comentarles situaciones de maltrato o violencia que les estén afectando."
    },
    {
        "id": 2110,
        "q": "¿Bajo qué condiciones los Institutos de carácter privado pueden otorgar otras becas de estudio adicionales a las becas sociales?",
        "a": "Según las políticas institucionales y alcances de cada Instituto, sujeto a reglamentación específica interna aprobada con Resolución Administrativa emitida por la Dirección Departamental de Educación."
    },
    {
        "id": 2111,
        "q": "¿Cuál es la carga horaria docente a tiempo completo en área urbana y en área dispersa para los regímenes semestral y anual?",
        "a": "De 72 a 80 horas en área urbana, y de 72 a 88 horas en área dispersa."
    },
    {
        "id": 2112,
        "q": "¿Cuáles son los documentos cuya tenencia, custodia y validación recae en las Direcciones Departamentales de Educación a través de las Subdirecciones de Educación Superior de Formación Profesional?",
        "a": "Información académica, centralizadores de calificaciones, registro de certificados de egreso, certificado de capacitación, datos estadísticos y actas de defensa."
    },
    {
        "id": 2113,
        "q": "Según el “Manual de resolución de problemas”, una vez identificado el problema, es momento de analizarlo. En esta etapa, ¿qué información se recopila?",
        "a": "Información relacionada con el problema para comprenderlo mejor, analizar sus causas y descomponerlo en partes más manejables."
    },
    {
        "id": 2114,
        "q": "En el marco de la integración de TIC en la formación docente, ¿qué información obtienen las instituciones a partir de la evaluación continua de la efectividad de la tecnología en sus instancias de formación?",
        "a": "Dar forma a las estrategias de aprendizaje, asegurar la dirección de la visión institucional, identificar problemas potenciales y obtener información para modificar políticas y estrategias instruccionales."
    },
    {
        "id": 2115,
        "q": "¿A quién se atribuye la frase: «Si una espina me hiere, me aparto de la espina… pero no la aborrezco»?",
        "a": "Amado Nervo"
    },
    {
        "id": 2116,
        "q": "En el “Manual de resolución de problemas”, ¿qué escritor afirma “enseñamos lo que somos”?",
        "a": "Palmer Parker."
    },
    {
        "id": 2117,
        "q": "¿Qué autor definió la inteligencia emocional como «la capacidad de reconocer los sentimientos propios y ajenos, de motivarnos y saber manejar nuestras emociones»?",
        "a": "Daniel Goleman."
    },
    {
        "id": 2118,
        "q": "Desde el neuroaprendizaje, ¿en qué consiste la técnica de los «cinco segundos»?",
        "a": "Damos la oportunidad a que todos respondan al mismo tiempo."
    },
    {
        "id": 2119,
        "q": "¿Cuál es la obligación de la Secretaria de un Instituto respecto a la documentación e información a la que tiene acceso en el ejercicio de sus funciones?",
        "a": "Conservar la confidencialidad de la documentación e información a la que tiene acceso."
    },
    {
        "id": 2120,
        "q": "En el marco de la interacción interinstitucional, según el “Reglamento para el Fortalecimiento de la Educación Inclusiva en el Sistema Educativo Plurinacional – Modalidad Indirecta”, ¿qué tipo de acciones deben coordinar y definir los directores de los centros de educación especial e instituciones educativas?",
        "a": "Pedagógicas y administrativas que garanticen una atención educativa de calidad a los estudiantes con discapacidad, dificultades en el aprendizaje o talento extraordinario."
    },
    {
        "id": 2121,
        "q": "Una maestra de apoyo de una Institución Educativa pone dedicación en implementar instrumentos de adaptación y apoyo para estudiantes con discapacidad, dificultades en el aprendizaje y talento extraordinario. Indique qué responsabilidad es la que cumple:",
        "a": "Promover la creación de condiciones necesarias y pertinentes de accesibilidad pedagógica para garantizar el acceso, permanencia y conclusión de los estudiantes."
    },
    {
        "id": 2122,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, en los programas de mediación entre iguales, los alumnos implicados deben aceptar seis condiciones. La sexta condición es:",
        "a": "Respetar el carácter confidencial de las opiniones y sentimientos expresadas durante el proceso de mediación."
    },
    {
        "id": 2123,
        "q": "¿Qué afirmación es la correcta, respecto a las acciones de prevención de la violencia física psicológica y sexual que todos los miembros de la comunidad educativa deben fortalecer?",
        "a": "Cuestionar los antivalores como la discriminación, la intolerancia, la violencia, el etnocentrismo, la indiferencia y el conformismo entre otros."
    },
    {
        "id": 2124,
        "q": "¿Qué distingue al criterio psicológico de los demás criterios para seleccionar contenidos en el aula, según Clemente Linuesa?",
        "a": "Es esencial también para organizar y secuenciar los contenidos, no solo para seleccionarlos."
    },
    {
        "id": 2125,
        "q": "¿Cómo afecta a la integración social la falla en la comprensión y gestión de las emociones según el neuroaprendizaje?",
        "a": "Cuesta vincularse con otros y se tiende a la frustración."
    },
    {
        "id": 2126,
        "q": "En el documento “Convivencia escolar y resolución pacífica de conflictos”, ¿cuántos programas de mediación escolar se mencionan?",
        "a": "Cuatro programas: mediación con un adulto como mediador, mediación entre iguales, mediación educativa y mediación integral/global."
    },
    {
        "id": 2127,
        "q": "¿Cuántos niveles de actuación tendrá la Fuerza Especial de Lucha Contra la Violencia?",
        "a": "Cuatro niveles."
    },
    {
        "id": 2128,
        "q": "¿Cada cuántos minutos se debe realizar una pausa de neuro acción?",
        "a": "Veinte."
    },
    {
        "id": 2129,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, el programa dirigido por Chistina Salmivalli, del Departamento de Psicología de la Universidad de Turku, han participado en:",
        "a": "Por la calidad del sistema de reconocimiento y el desarrollo de la autoestima del alumnado."
    },
    {
        "id": 2130,
        "q": "La visión humanista de la motivación propone que las necesidades humanas se organizan en orden jerárquico. ¿Qué considera esta teoría respecto al avance en dicha jerarquía?",
        "a": "Cuanto más avance en la jerarquía, más individualidad, humanidad y salud psicológica mostrará una persona."
    },
    {
        "id": 2131,
        "q": "¿Cuándo la familia natural, la sustituta o los servicios sustitutivos del cuidado familiar pierden los beneficios establecidos a su favor?",
        "a": "Cuando, a pesar de contar con servicios de apoyo e información, limitan oportunidades de desarrollo y de autonomía a sus miembros con discapacidad."
    },
    {
        "id": 2132,
        "q": "Según Kolb, ¿cuándo se transforman las experiencias en conocimiento?",
        "a": "Cuando reflexionamos y cuando experimentamos convirtiéndose en conocimiento."
    },
    {
        "id": 2133,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿cuándo se transforman las experiencias en conocimiento según Kolb?",
        "a": "Cuando se reflexiona y cuando se experimenta, transformando así las experiencias concretas o abstractas en conocimiento."
    },
    {
        "id": 2134,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿cuándo es resuelto violentamente un conflicto?",
        "a": "Cuando se ponen en acción comportamientos (de personas o instituciones) que constituyen una violación o arrebato de algo esencial a la persona (integridad física, derechos, satisfacción de necesidades...)."
    },
    {
        "id": 2135,
        "q": "Según el texto de Innovación Educativa, ¿cuándo será posible optar por modificar los modelos mentales y empezar a actuar en una nueva dirección?",
        "a": "Cuando se los identifique, observe y reconozca cómo están actuando sobre uno y el efecto que tienen sobre nuestras acciones."
    },
    {
        "id": 2136,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿cuándo ocurre el aprendizaje activo?",
        "a": "Cuando una persona toma el control de su propia experiencia de aprendizaje reconociendo sus comprensiones."
    },
    {
        "id": 2137,
        "q": "La teoría de la motivación del logro subraya que las personas tienden a tener éxito al nivel más alto posible y al mismo tiempo tratan de evitar la posibilidad de fracaso. ¿Qué ocurre cuando los estudiantes tienen éxito, según esta teoría?",
        "a": "Cuando los estudiantes tienen éxito, tienden a establecer metas realistas para sí mismos y experiencias exitosas para fortalecer una necesidad de logro."
    },
    {
        "id": 2138,
        "q": "Según el texto «El significado del currículum», ¿en qué «abismo teleológico» la idea de la educación se empobrece inevitablemente?",
        "a": "Cuando los fines educativos amplios quedan reducidos a referentes vacíos frente a una práctica orientada al éxito escolar medible."
    },
    {
        "id": 2139,
        "q": "¿Bajo qué condiciones quedan exentas de sanción las relaciones consensuadas entre adolescentes en el delito de violación de infante, niña, niño o adolescente?",
        "a": "Cuando los adolescentes sean mayores de doce años, no exista diferencia de edad mayor de tres años entre ambos y no se haya cometido violencia o intimidación."
    },
    {
        "id": 2140,
        "q": "¿Cuándo se comprende verdaderamente la experiencia de cambio como parte de la innovación educativa?",
        "a": "Cuando se modifican de forma sustantiva las prácticas, las relaciones y las condiciones institucionales que sostienen el aprendizaje."
    },
    {
        "id": 2141,
        "q": "Debido a que las tareas de aprendizaje en el aula son cognitivas, obligatorias y evaluadas públicamente, Jere Brophy argumenta que la motivación del estudiante está en un nivel óptimo:",
        "a": "Cuando la dificultad de la tarea es moderada (con un 50 por ciento de posibilidades de éxito)"
    },
    {
        "id": 2142,
        "q": "¿Cuándo tiene lugar un aprendizaje efectivo prestando atención a las necesidades del estudiante?",
        "a": "Cuando la necesidad del estudiante es lo suficientemente fuerte y se establecen metas definidas para su logro."
    },
    {
        "id": 2143,
        "q": "¿Qué tipo de deudas públicas pueden ser contraídas directamente por cada entidad del Sector Público?",
        "a": "Las deudas con plazo inferior a un año, con sujeción a la programación financiera fijada por la máxima autoridad del Sistema de Tesorería del Estado."
    },
    {
        "id": 2144,
        "q": "¿Cómo puede calificarse la posición de Sacristán respecto al libro de texto, las tecnologías y el uso de la imagen?",
        "a": "Crítica y ambivalente, pues cuestiona el monopolio del libro de texto pero reconoce su papel insustituible en la práctica docente."
    },
    {
        "id": 2145,
        "q": "¿Para qué se reconoce actualmente a la inteligencia emocional como un factor importante?",
        "a": "Crecimiento y satisfacción personal."
    },
    {
        "id": 2146,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿cuál es el objetivo del estudio de caso según el texto?",
        "a": "Crear una situación activa y participativa donde el tema refleja muy bien el mundo exterior aprendiendo situaciones nuevas."
    },
    {
        "id": 2147,
        "q": "¿Qué define la Capacidad de Observación Reflexiva según Kolb?",
        "a": "Reflexionar acerca de experiencias y observarlas desde múltiples perspectivas."
    },
    {
        "id": 2148,
        "q": "Según Kolb, ¿qué caracteriza a la Capacidad de Experimentación Activa en el proceso de aprendizaje?",
        "a": "Emplear estas teorías para tomar decisiones y solucionar problemas en situaciones concretas."
    },
    {
        "id": 2149,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué permite la Capacidad de Conceptualización Abstracta en el modelo de Kolb?",
        "a": "Crear nuevos conceptos e integrar observaciones en teorías lógicamente sólidas a partir de la experiencia."
    },
    {
        "id": 2150,
        "q": "¿Cuál es la implicación pedagógica más relevante del modelo del «Cerebro triuno» para la práctica docente?",
        "a": "Crear ambientes seguros y estables que habiliten el pensamiento abstracto."
    },
    {
        "id": 2151,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” indica que desde hace casi veinte años el Consejo de Europa se comprometió con firmeza en este tipo de educación:",
        "a": "Organizando diversos foros de estudio o publicando los resultados de diversas investigaciones sobre la enseñanza de las aptitudes para resolver los problemas interpersonales en las escuelas europeas."
    },
    {
        "id": 2152,
        "q": "Según la neurociencia, ¿qué hormona secreta la amígdala en respuesta a situaciones de amenaza o peligro?",
        "a": "Cortisol."
    },
    {
        "id": 2153,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje Las emociones y el aprendizaje”  ¿Qué neurotransmisor, aumentar el ritmo cardiaco y la  presión arterial, al aumentar su secreción?",
        "a": "Marilina Rotger"
    },
    {
        "id": 2154,
        "q": "Desde el neuroaprendizaje, ¿en qué estructura cerebral se localizan las emociones?",
        "a": "Amígdala."
    },
    {
        "id": 2155,
        "q": "Un maestro, al planificar una clase de matemáticas y aplicando principios de neurociencia educativa, decide iniciar con una actividad de reconocimiento emocional para construir un clima de confianza, antes de abordar los contenidos curriculares. ¿Qué mecanismo neurobiológico justifica con mayor precisión esta secuencia pedagógica?",
        "a": "Corteza prefrontal eficiente sin alerta amigdalar."
    },
    {
        "id": 2156,
        "q": "Desde la perspectiva de la neurociencia, ¿qué estructura cerebral actúa como centro regulador de la atención ejecutiva, permitiendo sostenerla de forma voluntaria?",
        "a": "Corteza cingulada anterior"
    },
    {
        "id": 2157,
        "q": "Una maestra de matemáticas, al planificar sus clases, se asegura de presentar el material con una secuencia ordenada y reconocible para los estudiantes, pero al mismo tiempo les asigna momentos en los que son ellos quienes organizan y relacionan los contenidos entre sí, abordando definiciones, ejercicios de aplicación y situaciones problemáticas reales. Desde los principios psicológicos de la enseñanza, ¿qué caracteriza esta práctica docente?",
        "a": "Corresponde al desarrollo de una jerarquía estructurada de contenido, donde cierta organización en el material es clara pero existen oportunidades para que el estudiante realice alguna estructuración, incluyendo conceptos, aplicaciones y resolución de problemas."
    },
    {
        "id": 2158,
        "q": "Según la tabla del rol de maestras y maestros en la detección de violencia intrafamiliar, ¿a qué elemento para la intervención corresponde la siguiente recomendación: “A través del mapeo de actores es importante detectar las instancias que pueden ofrecer atención especializada al caso, establecer el vínculo con ellas y conversar sobre las opciones con la o el estudiante”?",
        "a": "Asegurar la atención integral."
    },
    {
        "id": 2159,
        "q": "¿Cuál de las siguientes opciones es una función del Director Administrativo(a) del Instituto?",
        "a": "Establecer los mecanismos y procedimientos de control y seguimiento a la asistencia y permanencia del plantel docente y administrativo en función al Reglamento Interno de Personal y normativa vigente."
    },
    {
        "id": 2160,
        "q": "El CONALPEDIS, en el marco de sus atribuciones institucionales, debe velar tanto por las relaciones con organismos del orden público interno como compromisos asumidos ante la comunidad internacional en materia de discapacidad. Tomando en cuenta este doble rol, ¿qué par de funciones refleja con precisión esa responsabilidad?",
        "a": "Coordinar con la Policía Boliviana medidas de seguridad pública y hacer seguimiento al cumplimiento de los compromisos asumidos con gobiernos extranjeros y organismos internacionales en materia de discapacidad."
    },
    {
        "id": 2161,
        "q": "Una de las funciones del profesional de apoyo a estudiantes con talento extraordinario es:",
        "a": "Coordinar con la Comisión Pedagógica de cada Unidad Educativa para aplicar las evaluaciones por área y derivar al Centro de Educación Especial acreditado."
    },
    {
        "id": 2162,
        "q": "¿Qué deben hacer las Casas de Acogida y Refugio Temporal para garantizar la recuperación física y psicológica de las mujeres en situación de violencia?",
        "a": "Proporcionar la atención interdisciplinaria necesaria para su recuperación física y psicológica, que les permita participar de manera gradual en la vida pública, social y privada."
    },
    {
        "id": 2163,
        "q": "¿Cuál de las siguientes funciones tienen en común los maestros de aula que atienden a estudiantes con discapacidad intelectual, Trastorno del Espectro Autista y los maestros de apoyo a estudiantes con dificultades del aprendizaje?",
        "a": "Aplicar procesos de sensibilización, asesoramiento y orientación a las comunidades educativas."
    },
    {
        "id": 2164,
        "q": "Según la neurociencia, ¿Por qué el funcionamiento de la amígdala influye de manera determinante en el proceso de aprendizaje?",
        "a": "Evalúa el valor afectivo percibido como seguro o amenazante, habilitando o bloqueando la consolidación cognitiva."
    },
    {
        "id": 2165,
        "q": "Cuando se evidencia la seducción, manipulación emocional de una niña, niño o adolescente para ganarse su confianza con fines sexuales. ¿Cuál es el primer paso que debe ejecutar el personal directivo o docente según la ruta de actuación?",
        "a": "Brindar escucha activa y contención emocional a la víctima en un espacio seguro de la unidad educativa."
    },
    {
        "id": 2166,
        "q": "La diferenciación de tipos de estudiantes entre centros públicos y privados es caracterizada como uno de los casos más universales de segregación. Lo que se señala como efecto de esta segmentación sobre el sistema educativo en su conjunto es que:",
        "a": "Genera un sistema que, siendo formalmente igualador, mantiene en su interior desigualdades importantes al concentrar en los centros privados a una población de clase social más alta que la que asiste a los públicos."
    },
    {
        "id": 2167,
        "q": "Según la perspectiva de innovación educativa, uno de sus aspectos fundamentales señala que el proceso innovador “convierte al sujeto de ellas en un creador y productor de saber, quien reorienta y orienta su quehacer”, ¿qué condición hace posible este resultado?",
        "a": "Convertir la reflexión sobre las experiencias formativas en una sistematización permanente, lo que genera en el individuo la capacidad de construir y orientar su acción pedagógica."
    },
    {
        "id": 2168,
        "q": "Según la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de los siguientes enunciados corresponde a una manifestación de la violencia sexual?",
        "a": "Seducir, manipular emocionalmente o enamorar a una niña, niño y/o adolescente."
    },
    {
        "id": 2169,
        "q": "¿Qué función cumple la evaluación informal del maestro respecto al trabajo escolar cotidiano, según Perrenoud?",
        "a": "Controlar tanto el compromiso del estudiante con la tarea como el grado de excelencia que manifiesta en su ejecución."
    },
    {
        "id": 2170,
        "q": "¿Cuál de las siguientes acciones corresponde a las responsabilidades asignadas a madres, padres y/o tutores en el protocolo de prevención y actuación ante situaciones de violencia?",
        "a": "Promover un diálogo constante con sus hijas e hijos para desarrollar una buena comunicación familiar."
    },
    {
        "id": 2171,
        "q": "La función que subyace al currículum moral, más allá de su formulación idealista, consiste en:",
        "a": "Contribuir a que los individuos interioricen el orden social, la legitimidad de las jerarquías y el respeto a las instituciones."
    },
    {
        "id": 2172,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, según Díaz Bazo y Thornton (2000), la fase de generalización consiste en:",
        "a": "Continuar la aplicación del proyecto en cursos escolares posteriores, de manera que la cultura de paz y la mejora de la convivencia escolar constituyan las señas de identidad del centro educativo, tratando de hacer partícipes a otros agentes sociales próximos."
    },
    {
        "id": 2173,
        "q": "Desde la perspectiva de Bourdieu, la escuela no solo integra moralmente a los individuos — como sostenía Durkheim—, sino que los dota de un código cultural común que determina los marcos desde los cuales piensan. ¿Qué es lo que la escuela impone estructuralmente a los individuos de una misma época?",
        "a": "Los problemas legítimos y las formas comunes de abordarlos, no las respuestas."
    },
    {
        "id": 2174,
        "q": "De acuerdo con la Convención sobre los Derechos del Niño, se dictamina el derecho que tienen las niñas, los niños y adolescentes (NNA) a:",
        "a": "Ser protegidos contra toda forma de violencia, perjuicio o abuso físico o mental, descuido o negligencia, malos tratos o explotación, incluido el abuso sexual."
    },
    {
        "id": 2175,
        "q": "Una estudiante presenta hematomas visibles en el rostro y señales de dolor al sentarse. ¿Cuál es la secuencia correcta de acciones que debe seguir el personal de la unidad educativa?",
        "a": "Comunicar de inmediato al director/a de la unidad educativa, brindar contención emocional al estudiante, registrar el caso documentando las evidencias observadas y notificar a la Defensoría de la Niñez y Adolescencia (DNA) dentro de las 24 horas."
    },
    {
        "id": 2176,
        "q": "De acuerdo a la tabla de señales y consecuencias de la violencia a largo plazo en la adolescencia, descrita en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de las siguientes alternativas corresponde al área conductual?",
        "a": "Consumo habitual o adicción a sustancias psicoactivas."
    },
    {
        "id": 2177,
        "q": "¿Qué enfatiza la Teoría Social de Aprendizaje de Bandura?",
        "a": "El poder del aprendizaje observacional imitando comportamientos de otros modelos."
    },
    {
        "id": 2178,
        "q": "Según Einstein, citado por Sáez López en el libro «Estilos de aprendizaje y métodos de enseñanza», ¿qué es el aprendizaje?",
        "a": "Experiencia; todo lo demás es información."
    },
    {
        "id": 2179,
        "q": "La investigación-acción, la autoevaluación, la sistematización y la reflexión sobre las prácticas pedagógicas cumplen un doble rol en la innovación educativa, ¿en qué consiste ese doble rol?",
        "a": "Han sido revaloradas como estrategias esenciales para alimentar y sostener las innovaciones educativas, constituyéndose a la vez como herramientas de formación profesional en servicio."
    },
    {
        "id": 2180,
        "q": "Según el libro  «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué función cumplen los rasgos cognitivos, afectivos y fisiológicos en los estilos de aprendizaje según Keefe?",
        "a": "Actúan como indicadores relativamente estables que permiten percibir interacciones y responder a ambientes de aprendizaje."
    },
    {
        "id": 2181,
        "q": "Según el marco de Innovación Educativa de la UNESCO, ¿cómo se comprende la naturaleza acumulativa de la innovación en relación con los cambios previos de una institución educativa?",
        "a": "Constituye un proceso gradual de sucesivos cambios donde cada transformación se articula con la trayectoria histórica de la institución, redefiniendo lo precedente."
    },
    {
        "id": 2182,
        "q": "¿Cuál es la proyección a largo plazo de la competencia técnica individual en el proceso de integración de las TIC al plan de estudios?",
        "a": "Perderá relevancia progresivamente, dado que el manejo de la tecnología pasará a ser una práctica habitual y accesible en el contexto educativo."
    },
    {
        "id": 2183,
        "q": "Desde los nuevos paradigmas de neuroaprendizaje ¿cuál debería ser el objetivo de la evaluación en aula?",
        "a": "Constituir la herramienta orientada al fomento de la comprensión y adquisición de competencias"
    },
    {
        "id": 2184,
        "q": "Un maestro desea que sus estudiantes no solo retengan los contenidos trabajados en clase, sino que puedan comprenderlos, aplicarlos y transferirlos a nuevas situaciones. ¿Qué condiciones garantizan que el cerebro procese la información a ese nivel profundo y duradero?",
        "a": "Elaborar el saber de modo activo, vincular esquemas previos con contextos reales e involucrar destrezas cognitivas superiores."
    },
    {
        "id": 2185,
        "q": "Desde la perspectiva de la didáctica, ¿qué función esencial cumple la estrategia didáctica en relación con el proceso cognoscitivo del estudiante?",
        "a": "Facilitar, guiar o mediar un proceso cognoscitivo a través del uso de métodos, técnicas, herramientas o recursos didácticos"
    },
    {
        "id": 2186,
        "q": "Dentro de las responsabilidades institucionales del Ministerio de Educación en casos de violencia contra niñas, niños y adolescentes, está:",
        "a": "Consolidar anualmente la información de casos de violencia remitida por las Direcciones Departamentales y Distritales para formular políticas, planes y programas de prevención."
    },
    {
        "id": 2187,
        "q": "Un maestro de primaria organiza actividades donde sus estudiantes más avanzados explican los contenidos a sus compañeros que presentan dificultades. Según los principios psicológicos de la enseñanza, ¿qué beneficio obtienen los estudiantes que asumen el rol de enseñar a otros?",
        "a": "También aprenden y desarrollan un sentido de logro y confianza en su capacidad."
    },
    {
        "id": 2188,
        "q": "Se considera imperante la formación matemática para toda persona, según el enfoque didáctico planteado, debido a que:",
        "a": "Propicia el desarrollo científico, tecnológico e incluso artístico, siendo indispensable en la formación integral de toda persona."
    },
    {
        "id": 2189,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, en el ámbito de actuación escolar es muy importante que las normas de convivencia sean conocidas por todos los miembros de la comunidad educativa y que las medidas adoptadas para sancionar un acto violento cumplan todas las garantías de derecho y se ejecuten de manera:",
        "a": "Consistente, firme y justa."
    },
    {
        "id": 2190,
        "q": "Según el “Manual de resolución de problemas”, ¿en qué consiste el análisis de pros y contras?",
        "a": "Consiste en anticipar las consecuencias de una posible solución y evaluar si serán beneficiosas o perjudiciales, tanto para nosotros como para los demás."
    },
    {
        "id": 2191,
        "q": "La noción de transposición pragmática alude a un proceso que se distingue de la simple interpretación del currículum formal porque:",
        "a": "Transforma una imagen cultural en un conjunto de experiencias y actividades orientadas a producir aprendizajes."
    },
    {
        "id": 2192,
        "q": "Un buen maestro debe estar familiarizado con algunas prácticas generales de la enseñanza. ¿En qué consiste «proceder de lo empírico a lo racional»?",
        "a": "El conocimiento racional implica un poco de abstracción y enfoque argumentativo, por lo que debemos comenzar con lo que vemos, sentimos y experimentamos, y posteriormente con lo que discutimos, generalizamos y explicamos."
    },
    {
        "id": 2193,
        "q": "¿En qué consiste la acumulación según el Reglamento del Escalafón Nacional DS 4688?",
        "a": "Consiste en el desempeño de un cargo principal y de otro cargo docente, sea este completo o comprenda cierto número de cursos paralelos y horas excedentes, aunque no equivalgan a un curso completo."
    },
    {
        "id": 2194,
        "q": "Una estudiante presenta cambios bruscos en su estado de ánimo, ausentismo escolar injustificado frecuente y conductas autodestructivas. ¿A qué categoría de consecuencias corresponden principalmente los indicadores señalados?",
        "a": "Consecuencias, emocionales, cognitivas y conductuales a corto plazo."
    },
    {
        "id": 2195,
        "q": "Un maestro de secundaria advierte que un estudiante de 14 años, que anteriormente era participativo y con buen rendimiento, lleva varios meses sin asistir regularmente a clases, ha sido reportado por consumo de alcohol en el entorno escolar y presenta un comportamiento desafiante hacia las normas del establecimiento. Al indagar con la trabajadora social, se confirma que el estudiante fue víctima de agresiones reiteradas meses atrás. ¿A qué categoría de consecuencias a mediano plazo corresponden principalmente los indicadores identificados?",
        "a": "Consecuencias conductuales, porque la deserción escolar, el consumo de alcohol y otras drogas, y el comportamiento que vulnera la autoridad o los límites establecidos están clasificados explícitamente en esta categoría a mediano plazo."
    },
    {
        "id": 2196,
        "q": "El dominio cognitivo de la Taxonomía de Bloom abarca el recuerdo o reconocimiento de hechos y el desarrollo de habilidades intelectuales. ¿Cuáles son las habilidades más relevantes de este dominio para el entrenamiento de maestros y administradores educativos?",
        "a": "Análisis, síntesis y evaluación, ya que permiten descomponer problemas educativos complejos, integrar conocimientos y emitir juicios fundamentados para la toma de decisiones curriculares."
    },
    {
        "id": 2197,
        "q": "¿Cómo se define la Comunicación Alternativa y Aumentativa, según el marco del Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP Modalidad – Indirecta?",
        "a": "Sistemas lingüísticos y comunicacionales que facilitan el aprendizaje de los estudiantes con discapacidad."
    },
    {
        "id": 2198,
        "q": "¿Cuál de las siguientes combinaciones de acciones refleja correctamente el enfoque restaurativo y el abordaje del conflicto como parte natural de la vida en las medidas generales de prevención ante situaciones de violencia en unidades educativas?",
        "a": "Promover acuerdos de reparación de daños, trabajar la gestión emocional con toda la comunidad educativa y desarrollar habilidades para la resolución pacífica de conflictos."
    },
    {
        "id": 2199,
        "q": "¿Qué son los conflictos intratables de acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”?",
        "a": "Conflictos de gran violencia, de duración prolongada y de carácter interno y extensivo, en los que no es fácil llegar a una solución."
    },
    {
        "id": 2200,
        "q": "El texto “Convivencia escolar y resolución pacífica de conflictos” señala que el reglamento establece criterios que impidan y, en su caso, resuelvan favorablemente los distintos conflictos que se dan en el seno de los centros. Según Torrego (2001), ¿cuáles son los conflictos que pueden presentarse?",
        "a": "Conflictos relacionales o comunicativos, de intereses y necesidades y conflictos de preferencias, valores y creencias."
    },
    {
        "id": 2201,
        "q": "Según «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué característica distingue el aprendizaje del estilo acomodador de Kolb?",
        "a": "Son intuitivos, aprenden por ensayo y error, les gustan nuevas experiencias y se adaptan a circunstancias inmediatas."
    },
    {
        "id": 2202,
        "q": "¿Cuál es la función central que cumple la tecnología en la generación de conocimiento por parte de los estudiantes, en el marco de las competencias digitales docentes?",
        "a": "Acceder a recursos reales para aplicarlos en áreas temáticas, proveer herramientas para analizar y sintetizar información, y transmitir contenidos en distintos medios."
    },
    {
        "id": 2203,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que existen vínculos causales entre los distintos tipos de violencia. La violencia se aprende, y el primer lugar de aprendizaje es el hogar, en un contexto donde las conductas violentas (incluyendo el castigo físico), en la mayoría de los casos no se consideran:",
        "a": "Fuera de la ley."
    },
    {
        "id": 2204,
        "q": "¿Cuál definición describe correctamente la emoción desde la neurología?",
        "a": "Estado innato con cambios endocrinos que prepara respuestas adaptativas."
    },
    {
        "id": 2205,
        "q": "¿A qué consecuencias negativas conduce el uso excesivo de las recompensas externas en el proceso de aprendizaje?",
        "a": "Conduce a la transferencia limitada de conocimientos, a la dependencia de los maestros y a socavar la motivación intrínseca."
    },
    {
        "id": 2206,
        "q": "En el texto de Innovación Educativa, una institución educativa que evidencia un despertar de autonomía, indicios de creatividad, compromiso docente con el cambio y participación incipiente de la comunidad, ¿qué está manifestando?",
        "a": "Señales de cambio que indican el inicio de un proceso de innovación educativa en la institución."
    },
    {
        "id": 2207,
        "q": "La motivación, la atención, la senso-percepción, la emoción y la memoria son:",
        "a": "Condiciones cerebrales fundamentales que deben estar presentes en todo proceso de enseñanza para que el aprendizaje ocurra de manera efectiva."
    },
    {
        "id": 2208,
        "q": "Según el texto de Innovación Educativa de la UNESCO, ¿cuál es el propósito central de situar a la educación como eje de la innovación?",
        "a": "Consolidar una forma de pensar y actuar colectiva, habitual y sostenida en las instituciones."
    },
    {
        "id": 2209,
        "q": "De acuerdo con el documento “Convivencia escolar y resolución pacífica de conflictos”, ¿cómo definen Valenzuela y Onetto el clima escolar?",
        "a": "Conjunto de interacciones y transacciones que se generan en la tarea educativa en una situación espacio-temporal dada."
    },
    {
        "id": 2210,
        "q": "En términos de innovación educativa, ¿qué implica verdaderamente superar la tensión entre la educación y las TIC?",
        "a": "Superar dicha tensión implica ir más allá del equipamiento y la dotación tecnológica, promoviendo usos innovadores de las tecnologías disponibles y generando una cultura innovadora que trascienda la novedad."
    },
    {
        "id": 2211,
        "q": "¿Cómo concibe la teoría e investigación cognitiva el proceso de aprendizaje y de qué manera los alumnos amplían sus estructuras de conocimiento?",
        "a": "Concibe el aprendizaje como una reorganización de las estructuras de conocimiento guardadas en la memoria semántica como esquemas o mapas cognitivos, y los alumnos aprenden al ampliar, combinar y reacomodar dichos mapas, que muchas veces se superponen o están interconectados por medio de una compleja red de asociaciones."
    },
    {
        "id": 2212,
        "q": "En el modelo bidimensional de la enseñanza efectiva (Lowman, 1985), el maestro ubicado en la posición 6 lo hará mejor:",
        "a": "Con una clase pequeña con una gran participación estudiantil."
    },
    {
        "id": 2213,
        "q": "¿Con qué modelos asociaron las Reformas Educativas de los años 90 a la innovación educativa en los sistemas escolares?",
        "a": "Con modelos de descentralización y autonomía de los centros educativos a nivel institucional y sistémico."
    },
    {
        "id": 2214,
        "q": "Las organizaciones educativas son seres vivos que nacen y crecen, se desarrollan a lo largo de su existencia; constituyen sistemas compuestos de diversos elementos que interactúan entre sí y con el medio o entorno que las rodea, en un sentido evolutivo que las hace susceptibles de transformarse mediante sucesivos cambios. ¿Con qué otra institución se puede asimilar metafóricamente la organización educativa?",
        "a": "Con el hospital, en tanto que la atención educativa individualizada a cada educando se corresponde con el tratamiento de aquel a cada uno de sus pacientes."
    },
    {
        "id": 2215,
        "q": "¿Con qué instancia debe coordinar la Jefatura de Carrera el seguimiento a los estudiantes graduados del Instituto respecto de su inserción laboral?",
        "a": "Con la Dirección Académica, obteniendo información para optimizar y fortalecer el proceso formativo."
    },
    {
        "id": 2216,
        "q": "¿Con qué instancia debe coordinar el Personal de Apoyo el control y custodia de las llaves y dependencias de los ambientes del Instituto?",
        "a": "Con la Dirección Administrativa o instancia pertinente."
    },
    {
        "id": 2217,
        "q": "¿Con qué financiarán sus costos las entidades con autonomía de gestión y de patrimonio cuyos ingresos provengan exclusivamente por venta de bienes o por prestación de servicios?",
        "a": "Sus costos de funcionamiento, el aporte propio del financiamiento para sus inversiones y el servicio de su deuda."
    },
    {
        "id": 2218,
        "q": "Una estrategia didáctica se vincula y orienta hacia los conceptos y principios fundamentales de las disciplinas, favoreciendo la autonomía del estudiante para obtener resultados generados por él mismo. ¿Con qué tipo de aprendizaje se corresponde esta orientación pedagógica?",
        "a": "Con el aprendizaje por descubrimiento, en el que el estudiante construye su propio conocimiento a partir de la exploración guiada de los fundamentos de la disciplina."
    },
    {
        "id": 2219,
        "q": "De acuerdo con la tabla de factores de riesgo para la violencia descritos en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de las siguientes opciones corresponde a factores individuales?",
        "a": "Con impedimentos físicos, psíquicos o malformaciones."
    },
    {
        "id": 2220,
        "q": "El “Trato Preferente”, definido en la Ley que regula los derechos de las personas con discapacidad, son las acciones integradoras que procuran eliminar las desventajas de las personas con discapacidad, garantizando su equiparación e igualdad con el resto de las personas. ¿Con qué carácter se garantiza dicha equiparación e igualdad?",
        "a": "Con carácter de primacía"
    },
    {
        "id": 2221,
        "q": "¿Con qué condición es incompatible el horario laboral del personal Directivo y Administrativo de los Institutos a tiempo completo y dedicación exclusiva?",
        "a": "Con cargos similares en entidades públicas y/o privadas."
    },
    {
        "id": 2222,
        "q": "Dentro de los niveles múltiples de identificación y prevención, mencionados en el texto “Convivencia escolar y resolución pacífica de conflictos”, este nivel centra su atención en las características del individuo que aumentan la probabilidad de ser víctima o responsable de actos violentos.",
        "a": "Individual."
    },
    {
        "id": 2223,
        "q": "¿Cuál es el factor más importante en la motivación y participación de los estudiantes?",
        "a": "El contacto frecuente dentro y fuera de clase con el centro."
    },
    {
        "id": 2224,
        "q": "Un maestro tiene comportamientos que se consideran fuera del plan de convivencia armónica y pacífica establecidos en la unidad educativa. ¿Cuál es la acción que corresponde realizar a las madres, padres y/o tutores según las responsabilidades asignadas?",
        "a": "Comunicar el hecho a la directora o al director de la unidad educativa."
    },
    {
        "id": 2225,
        "q": "Durante la jornada escolar, una maestra recibe el testimonio de una estudiante que revela haber sido víctima de violencia sexual. ¿Cuál es la acción inmediata que debe realizar la maestra?",
        "a": "Comunicar el caso a la Defensoría de la Niñez y Adolescencia y, con la presencia de la madre, padre o tutor, acompañar a la estudiante para realizar la denuncia."
    },
    {
        "id": 2226,
        "q": "En el cuadro “Actitudes: organización escolar v. conflicto / violencia / disciplina” ¿a qué paradigma pertenece la actitud: “Integrar la aplicación de las Normas (régimen disciplinario) convención, reuniones, revisión del reglamento escolar, grupos del trabajo) de todos los miembros de la comunidad educativa para prevenir y mejorar la convivencia escolar”?",
        "a": "Comprensivo humanista integrador ecológico."
    },
    {
        "id": 2227,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que el objetivo a largo plazo es:",
        "a": "Reducir la dependencia de cada persona en relación con cualquier tipo de uso de la violencia como medio de resolver los problemas."
    },
    {
        "id": 2228,
        "q": "En neurociencia educativa, el término «cerebro reptiliano» alude a las estructuras encefálicas filogenéticamente más antiguas. ¿Cuál de las siguientes opciones identifica correctamente dichas estructuras?",
        "a": "Abarca el tronco encefálico y el cerebelo."
    },
    {
        "id": 2229,
        "q": "Al comparar las tres categorías de consecuencias a mediano plazo de una agresión en estudiante. ¿Qué afirmación clasifica correctamente las manifestaciones según su categoría?",
        "a": "Comportamiento sexual no apropiado para su edad es una consecuencia conductual; síntomas recurrentes de trastorno de ansiedad generalizada es una consecuencia emocional; y los Síntomas relacionados a trastornos del aprendizaje escritura, lectura y cálculo es una consecuencia cognitiva."
    },
    {
        "id": 2230,
        "q": "En el diseño de una unidad de aprendizaje orientada al «aprender a aprender» ¿qué conjunto de capacidades y herramientas debe integrarse para favorecer el análisis crítico y la resolución de problemas en escenarios reales?",
        "a": "Habilidades cognitivas, metacognitivas y de análisis crítico, articuladas con la búsqueda, procesamiento e interpretación de información mediante el apoyo de las TIC."
    },
    {
        "id": 2231,
        "q": "¿Qué caracteriza a un «Aula con cerebro» según la neurociencia?",
        "a": "Entorno positivo."
    },
    {
        "id": 2232,
        "q": "Perrenoud describe un tipo de aprendizaje del currículum oculto relacionado con «matar el tiempo» y «acostumbrarse al aburrimiento». Según la lógica del argumento, este aprendizaje cumple una función específica en la vida escolar que consiste en:",
        "a": "Habituar al alumno a aceptar la espera y la pasividad como parte inevitable de la vida en clase."
    },
    {
        "id": 2233,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que son muchas las aportaciones que la cooperación ejerce en la construcción de los aprendizajes, gracias a la interdependencia positiva entre el alumnado, que supone:",
        "a": "Compartir recursos, objetivos comunes y roles específicos para cada cual."
    },
    {
        "id": 2234,
        "q": "Conforme al texto de Innovación Educativa, ¿de qué manera opera el cambio en las organizaciones tradicionales?",
        "a": "Como una imposición jerárquica de arriba abajo, mediante la cual las coaliciones dominantes imponen sus valores en la organización y articulan planes a partir de compromisos surgidos del debate político."
    },
    {
        "id": 2235,
        "q": "Según los factores de riesgo descritos en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿de qué manera se concibe a la familia?",
        "a": "Como un espacio productor de recursos y factores que contribuyen al desarrollo integral y bienestar de sus integrantes."
    },
    {
        "id": 2236,
        "q": "De acuerdo al Escalafón Nacional del Servicio de Educación, ¿cómo se computan los meses de vacaciones de los maestros que hacen rendir exámenes?",
        "a": "Como parte del trimestre correspondiente."
    },
    {
        "id": 2237,
        "q": "Según Perrenoud, ¿cómo califica el aprendizaje de los esquemas del hábito incorporados mediante las rutinas escolares?",
        "a": "Como oculto por partida doble, porque ni el papel de la escuela en su formación ni los esquemas mismos son conscientes."
    },
    {
        "id": 2238,
        "q": "Un estudiante que lleva años en la escuela sabe cuándo intervenir, cómo pedir la palabra y qué espera el maestro en cada tipo de actividad, sin que nadie se lo haya enseñado explícitamente. ¿Cómo denomina Perrenoud este proceso?",
        "a": "Como aprendizaje del oficio de estudiante, adquirido sobre la marcha para convertirse en miembro pleno de la organización escolar."
    },
    {
        "id": 2239,
        "q": "De acuerdo con el documento “Convivencia escolar y resolución pacífica de conflictos”, ¿cómo se introduce los conflictos en los procesos educativos como componente del llamado currículo social?",
        "a": "Como objetivo y contenido de los tipos de educación que componen la Educación para la Cultura de Paz, integrado transversalmente en las distintas áreas disciplinares."
    },
    {
        "id": 2240,
        "q": "El texto “Convivencia escolar y resolución pacífica de conflictos” señala que las tres formas de introducir los conflictos en los procesos educativos son:",
        "a": "Como estrategia para mejorar el clima relacional y organizativo del centro; como componente del currículo social; y como componente esencial del desarrollo social y moral del alumnado."
    },
    {
        "id": 2241,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, Cascón (2001) y Boqué (2003) proponen una forma de intervención basada en la provención, ¿cómo se define?",
        "a": "Como el proceso de intervención antes de que el conflicto comience."
    },
    {
        "id": 2242,
        "q": "Enseñar a los estudiantes con el fin de alcanzar una meta determinada requiere de métodos adecuados, pues ciertos estudiantes pueden progresar rápidamente si hablan o interactúan, mientras otros pueden aprender rápida y significativamente a través de instrucciones programadas. En este contexto, ¿cuál es el desafío pedagógico para los maestros?",
        "a": "Diseñar experiencias de aprendizaje en el contexto del estudiante, para que pueda construir nuevos aprendizajes significativos y aplicar soluciones a situaciones problemáticas."
    },
    {
        "id": 2243,
        "q": "Según «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué combinación de capacidades de Kolb caracteriza al estilo convergente?",
        "a": "Combinan el concepto abstracto con la experimentación activa; necesitan encontrar la utilización práctica a las ideas."
    },
    {
        "id": 2244,
        "q": "¿Cuál era la característica principal de los libros denominados Biblia de los pobres?",
        "a": "Transmitían mensajes o contenidos a través de textos ilustrados o solo imágenes, usadas como guiones para dar significado a la narración."
    },
    {
        "id": 2245,
        "q": "Según el modelo de aprendizaje experiencial de Kolb, ¿cuál es la característica principal del estilo de aprendizaje «acomodador»?",
        "a": "Combina la experiencia concreta con la experimentación activa; aprende haciendo, asumiendo riesgos y adaptándose a nuevas situaciones."
    },
    {
        "id": 2246,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué combinación de capacidades define al estilo divergente de Kolb?",
        "a": "Combina la experiencia concreta con la observación reflexiva; tiene habilidad de imaginar y genera buenas ideas."
    },
    {
        "id": 2247,
        "q": "La idea de ciclo en la educación primaria combate ciertos efectos perniciosos de la organización escolar dominante. Entre las funciones que se le atribuyen, una resulta especialmente relevante para la atención a la diversidad:",
        "a": "Da acogida a ritmos diferentes de aprendizaje y resta oportunidades para que proliferen los controles selectivos jerarquizadores."
    },
    {
        "id": 2248,
        "q": "La servidora o el servidor público o autoridad que, para hacer o dejar de hacer un acto relativo a sus funciones o contrario a los deberes de su cargo, recibiere directamente o por interpuesta persona, para sí o un tercero, dádivas o cualquier otra ventaja o aceptare ofrecimientos o promesas. ¿A qué delito corresponde esta descripción?",
        "a": "Cohecho pasivo propio."
    },
    {
        "id": 2249,
        "q": "En la mejora de una escuela influyen significativamente el ritmo y la eficacia del cambio que protagonicen (Hopkins, 1996). ¿Cuál es la tipología de centros escolares resultante según López y Sánchez (2004)?",
        "a": "Estancados, paseantes, desencaminados y dinámicos."
    },
    {
        "id": 2250,
        "q": "Las teorías de aprendizaje son marcos conceptuales que describen cómo la información es absorbida, procesada y retenida durante el aprendizaje. El aprendizaje reúne influencias y experiencias cognitivas, emocionales y ambientales para adquirir, mejorar o hacer cambios en sus conocimientos, habilidades, valores y visiones del mundo. ¿Cuáles son las tres categorías principales de las teorías del aprendizaje?",
        "a": "Conductismo, cognitivismo y constructivismo."
    },
    {
        "id": 2251,
        "q": "Según la neurociencia, ¿por qué vía procesa la información toda persona?",
        "a": "Preferente."
    },
    {
        "id": 2252,
        "q": "Según el neuroaprendizaje, ¿cómo se denomina a la representación fisiológica de la emoción, siendo ambas inevitables?",
        "a": "Sensación"
    },
    {
        "id": 2253,
        "q": "¿Qué habilidades caracterizan a una persona emocionalmente inteligente, según la neurociencia del aprendizaje?",
        "a": "Control de los impulsos, autoconciencia y perseverancia."
    },
    {
        "id": 2254,
        "q": "El padre de familia de un estudiante con dificultades en el aprendizaje tiene la responsabilidad de apoyar y orientar a su hijo, ¿cuál es la finalidad de dicha responsabilidad?",
        "a": "Generar condiciones educativas favorables"
    },
    {
        "id": 2255,
        "q": "En el diseño de una estrategia general de curso, orientada a la formación pedagógica docente, ¿qué secuencia metodológica permite que los estudiantes construyan principios didácticos vinculados a las demandas sociales actuales?",
        "a": "Cuestionar creencias sobre la condición humana, examinar la subjetividad de las realidades y articular la cultura de paz con la práctica docente."
    },
    {
        "id": 2256,
        "q": "Una directora de unidad educativa recibe el reporte de que un docente llama repetidamente a un estudiante con sobrenombres burlescos frente al grupo, difunde entre el personal que el niño “siempre miente” y lo señala públicamente como responsable de objetos perdidos en el aula. ¿Cuál es la secuencia correcta de pasos que debe seguir la directora desde que toma conocimiento del hecho hasta la derivación a la instancia departamental correspondiente?",
        "a": "Recibir y registrar la denuncia o el reporte, garantizar la protección y contención inmediata del estudiante afectado, comunicar el hecho a la Dirección Distrital de Educación en un plazo no mayor a 24 horas, derivar el caso a la Defensoría de la Niñez y Adolescencia para la atención especializada, y elaborar el informe de seguimiento del caso."
    },
    {
        "id": 2257,
        "q": "Cuando una clase incluye momentos de logro reconocido y retroalimentación positiva inmediata, los estudiantes se esfuerzan más y retienen mejor los contenidos. Desde el neuroaprendizaje, ¿qué principio explica este fenómeno?",
        "a": "Circuito de recompensa cerebral."
    },
    {
        "id": 2258,
        "q": "¿Quién descubrió la acetilcolina como neurotransmisor?",
        "a": "Otto Loewi."
    },
    {
        "id": 2259,
        "q": "¿En qué parte del cerebro se ubica principalmente la memoria primaria?",
        "a": "Cerebro superior."
    },
    {
        "id": 2260,
        "q": "De las distintas tipologías de organizaciones educativas, existe una que se caracteriza porque se esfuerza en una dirección de cambio, aunque en demasiados ámbitos simultáneamente. Por esta razón, su actividad no consigue los frutos deseados porque adolece de claridad en sus objetivos y metas, sobre todo en la prioridad de cada una de estas,lo que hace que requiera una adecuada orientación y un asesoramiento eficaz. ¿A qué tipología de centro educativo corresponde esta descripción?",
        "a": "Centros desencaminados."
    },
    {
        "id": 2261,
        "q": "Según las responsabilidades asignadas a la Directora o el Director Departamental de Educación en materia de prevención y atención de la violencia, ¿cuál de las siguientes acciones le corresponde específicamente en relación con la información de casos registrados?",
        "a": "Sistematizar la información de los casos de violencia física, psicológica y sexual, para hacer gestión con autoridades municipales y departamentales."
    },
    {
        "id": 2262,
        "q": "Según el texto de Innovación Educativa, ¿cuál es la función principal de la micropolítica en las instituciones educativas?",
        "a": "Regular las dinámicas de poder, negociación e intereses entre actores internos que condicionan el cambio."
    },
    {
        "id": 2263,
        "q": "El método de caso se refiere a un análisis completo de un hecho o problema real con la finalidad de conocerlo, interpretarlo, resolverlo, generar hipótesis, contrastar datos y reflexionar en el proceso. Como estrategia didáctica, se diferencian tres modelos en razón de sus propósitos:",
        "a": "Centrado en el análisis de caso, centrado en la aplicación de principios y centrado en el entrenamiento."
    },
    {
        "id": 2264,
        "q": "En el documento “Convivencia escolar y resolución pacífica de conflictos”, qué autores describen que el concepto de clima escolar ha sido objeto de diversas definiciones:",
        "a": "Conjunto de interacciones y transacciones que se generan en la tarea educativa en una situación espacio-temporal dada."
    },
    {
        "id": 2265,
        "q": "¿Con qué elementos cuenta el «botiquín de primeros auxilios emocionales» para intervenir ante estados de angustia o miedo en el aula?",
        "a": "Caramelos quita angustias, spray anti miedos, gasas que abrazan."
    },
    {
        "id": 2266,
        "q": "¿Cuál de los siguientes enunciados corresponde a un deber de las personas con discapacidad en relación a su desarrollo personal?",
        "a": "Capacitarse y prepararse según sus posibilidades para ser una persona independiente y productiva, debiendo apoyar en este deber la familia."
    },
    {
        "id": 2267,
        "q": "Considerando que el objetivo de la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo” es orientar la actuación de todas las personas que conforman la comunidad educativa frente a situaciones de violencia intrafamiliar y/o en el entorno más cercano contra la o el estudiante, mediante la aplicación de lineamientos y directrices de intervención en el ámbito educativo, ¿cuál es el fin de este documento?",
        "a": "Garantizar la prevención, identificación temprana y la referencia oportuna, que coadyuve a la restitución de los derechos vulnerados y evite la revictimización de niñas, niños y adolescentes."
    },
    {
        "id": 2268,
        "q": "Partiendo de los elementos estratégicos del proyecto Enlaces para la integración de TIC en la formación docente, ¿cuáles son las iniciativas que componen su estrategia de capacitación y apoyo docente?",
        "a": "Capacitación inicial durante un año, asistencia técnica permanente y Encuentros de Informática Educativa para intercambiar experiencias y mantenerse al tanto de las prácticas de los colegas."
    },
    {
        "id": 2269,
        "q": "¿Por qué motivo los niños tienen una notable facilidad de incorporar nuevos aprendizajes en los primeros años?",
        "a": "Capacidad sináptica elevada"
    },
    {
        "id": 2270,
        "q": "Las organizaciones que aprenden son aquellas que, asumiendo su naturaleza de organismos vivos y dinámicos, son capaces de cambiar desde su responsabilidad, de dar respuestas adecuadas a las demandas, siempre cambiantes, de una sociedad en constante transformación. ¿Cuáles son algunas características específicas de las organizaciones que aprenden?",
        "a": "Capacidad para diagnosticar situaciones susceptibles de mejora, abordar sistemáticamente sus problemas, buscar nuevo conocimiento organizativo, consolidar su aprendizaje y transferir el saber adquirido a nuevas situaciones."
    },
    {
        "id": 2271,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué habilidades desarrolla específicamente el ABP como técnica de aprendizaje?",
        "a": "Habilidades de análisis y síntesis, y habilidades cognitivas y de socialización trabajando en grupos colaborativamente."
    },
    {
        "id": 2272,
        "q": "¿Qué se entiende por proceso neurofisiológico en el contexto del aprendizaje y cuál es su implicación directa para la práctica del maestro?",
        "a": "Cambios eléctricos y químicos que ocurren en las neuronas al procesar y consolidar una experiencia; implica que el maestro debe diseñar situaciones pedagógicas que activen esos mecanismos biológicos para favorecer aprendizajes duraderos."
    },
    {
        "id": 2273,
        "q": "Según la neurociencia, ¿de qué depende que la información llegue a las redes cognitivas racionales?",
        "a": "Estados emocionales."
    },
    {
        "id": 2274,
        "q": "El método de aprendizaje que presenta de manera organizada la información a un grupo, generalmente por el maestro, permite exponer contenidos de forma ordenada independientemente del tamaño del grupo, y se usa para introducir contenidos o exponer resultados. ¿Qué tipo de capacidad de aprendizaje pone en juego principalmente este método?",
        "a": "Capacidad de experiencia concreta (EC)"
    },
    {
        "id": 2275,
        "q": "La lluvia de ideas recaba información para la búsqueda de respuestas a problemas, favorece la interacción grupal, promueve la participación y la creatividad, y propicia la motivación de los alumnos en un proceso de trabajo grupal. ¿Qué estilo de aprendizaje favorece principalmente este método?",
        "a": "Capacidad de experimentación activa (EA)"
    },
    {
        "id": 2276,
        "q": "En el marco del neuroaprendizaje, ¿a qué se refiere la «supervivencia» como función del cerebro humano?",
        "a": "Capacidad de adaptarse a cada nuevo entorno y situación, modificándose constantemente."
    },
    {
        "id": 2277,
        "q": "¿Qué estrategia adoptan frecuentemente las empresas en ramas industriales donde la tecnología evoluciona de manera súbita?",
        "a": "Invierten fondos elevados en la vigilancia tecnológica para monitorear las innovaciones de competidores y el avance del saber científico y técnico fundamental y aplicado."
    },
    {
        "id": 2278,
        "q": "¿De qué forma inciden, en un estudiante con inteligencia intrapersonal, las estrategias como los proyectos de autogestión, espacios de reflexión individual, establecimiento personal de metas y actividades que demanden autoevaluación y toma de decisiones autónoma?",
        "a": "Activan circuitos de aprendizaje"
    },
    {
        "id": 2279,
        "q": "Thomas Kuhn sostiene que las revoluciones científicas ocurren cuando las teorías y métodos vigentes dejan de resolver los nuevos problemas emergentes. ¿Cómo denomina a estos cambios profundos de teorías y métodos?",
        "a": "Cambios de paradigma, es decir, transiciones en los marcos teóricos y metodológicos que orientan la práctica científica ante la incapacidad de las teorías previas de resolver nuevos problemas."
    },
    {
        "id": 2280,
        "q": "Desde la neurociencia educativa, la neuroplasticidad se fortalece mediante actividades que promueven la reorganización sináptica y la formación de nuevas conexiones neuronales. ¿Cuáles son las actividades concretas que pueden implementarse en la vida diaria para favorecer este proceso?",
        "a": "Cambia de camino y nuevo alimento en tu dieta"
    },
    {
        "id": 2281,
        "q": "¿Sobre qué aspectos académicos están obligados los Institutos a informar a los estudiantes al momento de la inscripción?",
        "a": "Régimen académico, calendario académico de la gestión, horarios de los planes de estudios de las carreras autorizadas, grado académico y las modalidades de graduación vigentes."
    },
    {
        "id": 2282,
        "q": "¿Qué riesgo específico busca evitar la actitud crítica que debe fundamentar toda práctica de innovación educativa?",
        "a": "Caer en la trampa del cambio por el cambio y rechazar el pasado sin conocerlo previamente."
    },
    {
        "id": 2283,
        "q": "¿Quién define el Calendario Académico para el inicio y conclusión de los Institutos Técnicos, Tecnologicos e Instituciones Formación Artística y bajo qué criterios?",
        "a": "El Ministerio de Educación, mediante las Normas Generales para la Gestión Educativa Superior, en concordancia con las potencialidades y vocaciones productivas comunitarias de la región donde funcionan los Institutos y Centros."
    },
    {
        "id": 2284,
        "q": "Un maestro de primaria quiere aplicar el principio psicológico de enseñanza que promueve la reflexión profunda en sus estudiantes durante el desarrollo de una clase. ¿Cuál de las siguientes acciones corresponde fielmente a dicho principio?",
        "a": "Las preguntas que hacen pensar no tienen que tener respuestas."
    },
    {
        "id": 2285,
        "q": "¿Cada cuánto tiempo debe un Instituto Privado presentar una declaración jurada sobre el mobiliario y equipamiento existentes?",
        "a": "Cada tres (3) años desde su autorización de Apertura y Funcionamiento, ante la Subdirección de Educación Superior de Formación Profesional."
    },
    {
        "id": 2286,
        "q": "Desde el neuroaprendizaje, ¿qué debe hacer el docente cuando el proceso de adquisición de conocimientos no ocurre de manera espontánea?",
        "a": "Buscar el estilo propio de cada persona y llevarlo a su mayor potencial posible."
    },
    {
        "id": 2287,
        "q": "La siguiente definición de conflicto: “Tipo de situación en la que las personas o grupos sociales buscan o perciben metas opuestas, afirman valores antagónicos o tienen intereses divergentes”. Corresponde a:",
        "a": "Jares"
    },
    {
        "id": 2288,
        "q": "¿Cuál es la función que cumplen los abogados defensores en el marco de la protección de niñas, niños y adolescentes estudiantes dentro del sistema educativo?",
        "a": "Denunciar ante el Ministerio Público los delitos que atenten contra la vida, la integridad física, psicológica y/o sexual de las niñas, niños y adolescentes estudiantes."
    },
    {
        "id": 2289,
        "q": "En el proceso de establecer una visión compartida sobre el uso de la tecnología en la formación docente, ¿qué rol cumplen la comunidad y los socios de la institución?",
        "a": "Brindar pericia, apoyo y recursos para la implementación de la tecnología, comprendiendo su valor para los futuros docentes y apoyando dicha implementación desde la junta directiva hasta las cámaras del gobierno."
    },
    {
        "id": 2290,
        "q": "Según la Ley General para Personas con Discapacidad, ¿cuáles son las obligaciones que el Estado y las entidades públicas y privadas deben asumir en el ámbito del trabajo respecto a las personas con discapacidad?",
        "a": "Brindar accesibilidad a su personal con discapacidad."
    },
    {
        "id": 2291,
        "q": "Según el “Manual de resolución de problemas”, ¿a qué autor se atribuye la afirmación de que el fortalecimiento de la habilidad de resolución de problemas es crucial para desarrollar otras habilidades como la creatividad y la toma de decisiones, las cuales contribuirán a encontrar una mejor solución al problema en cuestión, generando alternativas que van más allá de lo evidente?",
        "a": "Bono."
    },
    {
        "id": 2292,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje. Las emociones y el aprendizaje”, ¿qué se conoce por plasticidad negativa?",
        "a": "Desecho de redes neuronales inactivas o poco utilizadas."
    },
    {
        "id": 2293,
        "q": "Un docente organiza sus clases priorizando exclusivamente la secuencia lógica de los contenidos, sin considerar el estado emocional de sus estudiantes. Desde los principios del neuroaprendizaje, ¿cuál es la consecuencia más directa de esta práctica sobre el proceso de comprensión?",
        "a": "Bloquea circuitos atencionales impidiendo la codificación significativa."
    },
    {
        "id": 2294,
        "q": "En el marco de la neurociencia aplicada al neuroaprendizaje, ¿cuál de los siguientes colores evoca específicamente calidez, creatividad y ánimo, favoreciendo un ambiente de aprendizaje dinámico y motivador?",
        "a": "Naranja"
    },
    {
        "id": 2295,
        "q": "¿Qué influye en las emociones secundarias, según el neuroaprendizaje?",
        "a": "Genética y cultura"
    },
    {
        "id": 2296,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, qué autor afirma “El sufrir o estar expuesto a abuso crónico en la niñez es un precursor importante de violencia adulta”.",
        "a": "Sufrir o estar expuesto a abuso crónico en la niñez."
    },
    {
        "id": 2297,
        "q": "¿De qué otra manera se conoce a la amígdala cerebral?",
        "a": "Banco de la memoria emocional."
    },
    {
        "id": 2298,
        "q": "Considerando la intervención descrita en la “Guía para la Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo”, ¿cómo deben actuar las maestras y maestros que detecten una situación que presente violencia intrafamiliar?",
        "a": "Con pertinencia y compromiso, valorar la intensidad, frecuencia y el daño causado en la víctima."
    },
    {
        "id": 2299,
        "q": "¿A disposición de quién deben ponerse las becas sociales que otorgan los Institutos de carácter privado y en base a qué estadística se calcula el porcentaje?",
        "a": "A disposición del Ministerio de Educación, calculadas en base a la estadística de la última gestión del total de estudiantes nuevos inscritos."
    },
    {
        "id": 2300,
        "q": "¿Qué características definen al «maestro con autoridad intelectual» de acuerdo con el modelo bidimensional de enseñanza efectiva de Joseph Lowman?",
        "a": "Alto en entusiasmo intelectual (muy claro y emocionante) y bajo en relación interpersonal (frío, distante y muy controlado)."
    },
    {
        "id": 2301,
        "q": "Un maestro observa que algunos estudiantes gestionan bien sus frustraciones, reconocen sus estados emocionales, mantienen relaciones positivas con sus compañeros y persisten ante los desafíos académicos. ¿Qué capacidad están desarrollando?",
        "a": "Inteligencia emocional."
    },
    {
        "id": 2302,
        "q": "Según las señales y consecuencias de la violencia a largo plazo en la adolescencia, establecidas en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de los siguientes enunciados corresponde al área cognitiva?",
        "a": "Autoconcepto y autovaloración disminuida."
    },
    {
        "id": 2303,
        "q": "Según Gimeno Sacristán et al., la contradicción entre lo que evalúa PISA y lo que priorizan los centros escolares evidencia fundamentalmente un problema de:",
        "a": "Desarticulación entre las finalidades declaradas del currículum y las prácticas pedagógicas efectivamente desarrolladas en el aula."
    },
    {
        "id": 2304,
        "q": "Una maestra aplica siempre el mismo método expositivo en todas sus clases, sin importar el tema ni el grupo. Sus colegas observan que los resultados de aprendizaje son bajos y que los grupos muestran desinterés creciente. Considerando los elementos de la enseñanza y el arte de enseñar descritos en el texto de Sáez López, ¿cuál es el diagnóstico más preciso que explica el fracaso de esta práctica docente?",
        "a": "El arte de enseñar requiere flexibilidad y adaptación que va más allá de la aplicación mecánica de procedimientos."
    },
    {
        "id": 2305,
        "q": "¿Cuál es la principal limitación identificada en los planes de estudio destinados a la formación de futuros docentes, respecto al uso de las TIC?",
        "a": "Aunque desarrollan ampliamente los fundamentos pedagógicos y las estrategias didácticas de presentación, descuidan la orientación sobre cómo articular recursos tecnológicos como apoyo al proceso de aprendizaje."
    },
    {
        "id": 2306,
        "q": "Según la neurociencia, ¿Qué cambios físicos produce el aumento en la secreción de noradrenalina en el organismo?",
        "a": "Eleva el ritmo cardíaco y la presión arterial, activando al organismo ante situaciones de alerta."
    },
    {
        "id": 2307,
        "q": "De acuerdo con el Reglamento para el Fortalecimiento de la Educación Inclusiva en el SEP – Modalidad Indirecta, la designación de estudiantes por ítem completo no aplica en el área de atención a discapacidad:",
        "a": "Intelectual."
    },
    {
        "id": 2308,
        "q": "La función de planificar junto al maestro de aula los contenidos curriculares, es exclusiva de los maestros de apoyo para estudiantes con discapacidad:",
        "a": "Auditiva"
    },
    {
        "id": 2309,
        "q": "Cuando la maestra de apoyo de un estudiante con Trastorno del Espectro Autista, coordina con el equipo multidisciplinario que hace la evaluación integral del estudiante, para determinar sus características, potencialidades, intereses y necesidades educativas, realiza una:",
        "a": "Función."
    },
    {
        "id": 2310,
        "q": "Abordar la resolución de los conflictos desde un proyecto de “escuela pacífica” implica, en primer lugar, tener claros los diferentes tipos de conflictos que pueden darse. ¿Cuál de las siguientes opciones describe el conflicto de tipo relacional?",
        "a": "Atiende los comportamientos que alteran la neutralidad de las interacciones, quebrando los dispositivos de control y desequilibrando las relaciones de fuerza y de poder del centro docente."
    },
    {
        "id": 2311,
        "q": "¿Cómo se define la capacidad de la unión entre cuerpo, cerebro y mente para fijarse en uno o varios aspectos de la realidad y prescindir de los restantes?",
        "a": "Atención."
    },
    {
        "id": 2312,
        "q": "¿Qué factores permiten al cerebro consolidar un aprendizaje con mayor facilidad, según la neurociencia?",
        "a": "Motivación, repetición, variedad."
    },
    {
        "id": 2313,
        "q": "Desde la neurociencia, ¿qué estrategias cognitivas caracterizan un aprendizaje profundo en el estudiante?",
        "a": "Anticipación, inferencia, flexibilidad cognitiva."
    },
    {
        "id": 2314,
        "q": "¿Para qué sirve la técnica «Las diferencias son importantes» en la neurociencia del aprendizaje?",
        "a": "Atención selectiva"
    },
    {
        "id": 2315,
        "q": "Un maestro diseña sus clases buscando primero despertar el interés espontáneo de los estudiantes mediante estímulos novedosos y sorprendentes. ¿Qué tipo de atención está aprovechando, desde el neuroaprendizaje?",
        "a": "Atención involuntaria"
    },
    {
        "id": 2316,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿cuál es la primera de las nueve claves que apunta Mitchell para la resolución de conflictos intratables?",
        "a": "Aceptar que la “resolución de conflictos” es un proceso a largo plazo que requiere paciencia, tenacidad y aplicación."
    },
    {
        "id": 2317,
        "q": "En el contexto de la innovación educativa, ¿cuál es el rol del docente para evitar que una práctica innovadora se convierta en rutina?",
        "a": "Asumir el rol de agente reflexivo y crítico de su propia práctica, sometiendo continuamente sus acciones pedagógicas a cuestionamiento para renovarlas y evitar su cristalización en rutina."
    },
    {
        "id": 2318,
        "q": "¿Cuál de las siguientes opciones es responsabilidad de los estudiantes que no presentan necesidades y/o potencialidades educativas?",
        "a": "Promover acciones que prevengan todo tipo de violencia, acoso y/o bullying, respetando la individualidad o características socioculturales de todos los miembros que componen la comunidad educativa."
    },
    {
        "id": 2319,
        "q": "Un maestro reconoce que el desarrollo socioemocional de sus estudiantes es tan importante como el académico y decide incorporarlo de manera explícita en el aula. Según la neurociencia, ¿Qué acciones concretas puede implementar para trabajar este ámbito?",
        "a": "Modelar gestión emocional, empatía colaborativa, establecer acuerdos y reconocer logros."
    },
    {
        "id": 2320,
        "q": "¿Qué componente del haber percibido por los maestros y funcionarios administrativos se toma en cuenta para los efectos de jubilación, aguinaldo y todos los beneficios sociales?",
        "a": "Asignaciones por categoría"
    },
    {
        "id": 2321,
        "q": "¿Qué tipo de evaluación acompaña el proceso de enseñanza aprendizaje de manera positiva, según el neuroaprendizaje?",
        "a": "Asertiva, sin estrés, generadora de juego y comprensión"
    },
    {
        "id": 2322,
        "q": "De acuerdo con el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿qué autor señala que la organización interviene como elemento mediador entre la enseñanza y el aprendizaje, determinando cualquier acción que se realice en ese ámbito?",
        "a": "Santos Guerra."
    },
    {
        "id": 2323,
        "q": "Según el texto de Innovación Educativa de la UNESCO, ¿cuál es el propósito de que la innovación construya una dinámica de acciones con aprendizajes?",
        "a": "Establecer reformas curriculares progresivas que permitan medir el impacto pedagógico mediante indicadores cuantitativos de rendimiento estudiantil."
    },
    {
        "id": 2324,
        "q": "Respecto al derecho a la comunicación de las personas con discapacidad, ¿cuál de las siguientes opciones describe correctamente la obligación del Estado Plurinacional de Bolivia?",
        "a": "Promueve la comunicación en sistemas y lenguas alternativas para la inclusión y el acceso a la información y al ejercicio pleno de las personas con discapacidad."
    },
    {
        "id": 2325,
        "q": "El modelo ecológico propuesto en la “Convivencia escolar y resolución pacífica de conflictos” indica que, sin duda que para alcanzar resultados duraderos desde la acción preventiva, debe fundarse en una perspectiva ecológica, que sea a la vez global y sistémica, para:",
        "a": "Comenzar en la familia, continuar en los centros docentes y estar apoyada por acciones en el ámbito socio-comunitario."
    },
    {
        "id": 2326,
        "q": "¿Quién afirmó «Educar la mente sin educar el corazón, no es educar nada en absoluto»?",
        "a": "Aristóteles."
    },
    {
        "id": 2327,
        "q": "¿Qué argumento utilizan habitualmente los docentes en todo el mundo para resistirse a la innovación tecnológica en su práctica pedagógica?",
        "a": "Argumentan que la innovación tecnológica les impone mayor carga de trabajo y más diversas responsabilidades, sin que ello se traduzca en beneficios, ya sea en su remuneración laboral o en otros tipos de recompensas y estímulos."
    },
    {
        "id": 2328,
        "q": "Según el texto “Convivencia escolar y resolución pacífica de conflictos”, “Afrontar la noviolencia” es una propuesta del Instituto de investigación y formación del Movimiento por una Alternativa Noviolencia (IFMAN), ¿a qué país pertenece el mencionado instituto?",
        "a": "Por la calidad del sistema de reconocimiento y el desarrollo de la autoestima del alumnado."
    },
    {
        "id": 2329,
        "q": "Los módulos hipocampo y amígdala, encargados de gestionar la memoria, el aprendizaje y las respuestas emocionales, ¿a qué estructura del Cerebro Triuno pertenecen?",
        "a": "Sistema límbico."
    },
    {
        "id": 2330,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, se menciona que diariamente realizamos diferentes tipos de negociación en las que tratamos de llegar a un acuerdo con:",
        "a": "Aquellas personas con las que mantenemos ciertas diferencias o con las que defendemos intereses divergentes, pero a las que estamos unidos y de las que dependemos de algún modo."
    },
    {
        "id": 2331,
        "q": "En el texto “Convivencia escolar y resolución pacífica de conflictos”, ¿cómo se define un clima escolar justo?",
        "a": "Aquel en el que se reconoce la legitimidad y equidad de las reglas, aplicadas sin discriminación y sin arbitrariedad, valorándose el mérito de cada cual y su dignidad personal."
    },
    {
        "id": 2332,
        "q": "Más allá de introducir cambios en las prácticas pedagógicas, la innovación educativa implica un proceso de construcción humana de mayor profundidad, ¿a qué apunta dicho proceso en términos de la formación de los actores educativos?",
        "a": "Apunta a la construcción de sujetos sociales e históricos capaces de realizar la innovación con un sentido crítico, reconociendo su capacidad transformadora en contextos concretos."
    },
    {
        "id": 2333,
        "q": "¿Cuáles son las señales de cambio que indican el inicio de un proceso de innovación en una institución educativa?",
        "a": "Compromiso con el cambio por parte de los docentes, germen de participación de otros actores como los niños, niñas, padres de familia y comunidad, indicios de creatividad y nuevas maneras de hacer las cosas, y un despertar de autonomía en la institución educativa."
    },
    {
        "id": 2334,
        "q": "«La enseñanza se lleva a cabo en un momento y se conserva para que el alumno participe siempre que sea el momento más conveniente para él, como ejemplo el correo electrónico como medio». ¿De qué tipo de aprendizaje es característica esta descripción?",
        "a": "Aprendizaje asincrónico"
    },
    {
        "id": 2335,
        "q": "¿Qué tipo de aprendizaje ocurre cuando una persona se automotiva para aprender sobre un tema a partir de un contexto que ya disfruta, como querer aprender a tocar un instrumento real después de haber disfrutado un videojuego musical?",
        "a": "Aprendizaje autodirigido motivado intrínsecamente, porque el aprendiz identifica y persigue por voluntad propia una meta de aprendizaje surgida de un interés genuino"
    },
    {
        "id": 2336,
        "q": "El aprendizaje transversal, el aprendizaje intercultural y el aprendizaje integrado con una incertidumbre orientados al descubrimiento nos aportan elementos esenciales del:",
        "a": "Aprendizaje por diálogo"
    },
    {
        "id": 2337,
        "q": "De los distintos tipos de aprendizaje, ¿cuál es el proceso por el cual una persona aprende los requerimientos de su cultura nativa por la que está rodeada y adquiere valores y comportamientos que son apropiados y necesarios en esa cultura?",
        "a": "Aprendizaje por enculturación."
    },
    {
        "id": 2338,
        "q": "¿Cuáles son los tipos de aprendizaje con una incertidumbre orientados al descubrimiento que aportan elementos esenciales para el aprendizaje por diálogo?",
        "a": "Aprendizaje transversal; aprendizaje integrado; aprendizaje intercultural."
    },
    {
        "id": 2339,
        "q": "¿Cuáles son los dos estilos claramente diferenciados de aprendizaje organizativo?",
        "a": "Aprendizaje organizativo técnico-práctico y aprendizaje organizativo tecnológico-científico."
    },
    {
        "id": 2340,
        "q": "Las organizaciones de todo tipo (y, por tanto, también las educativas o centros docentes) también adoptan sus propios itinerarios o estilos de aprendizaje organizativo. ¿Cuáles son los dos estilos claramente diferenciados de aprendizaje organizativo?",
        "a": "Aprendizaje organizativo técnico-práctico y aprendizaje organizativo tecnológico-científico."
    },
    {
        "id": 2341,
        "q": "Según Sáez López en «Estilos de aprendizaje y métodos de enseñanza», un docente observa tres perfiles distintos: el primero comprende contenidos solo cuando los relaciona con saberes previos; el segundo se autoeducó tocando guitarra tras jugar videojuegos musicales; el tercero participa en talleres comunitarios fuera del sistema escolar. ¿Qué tipos de aprendizaje corresponden respectivamente a cada perfil?",
        "a": "Aprendizaje significativo, porque el conocimiento se entiende completamente en la medida en que se relaciona con otros conocimientos; aprendizaje tangencial, porque se autoeducan interactuando en un contexto que ya disfrutan; y aprendizaje no formal, organizado fuera del sistema formal."
    },
    {
        "id": 2342,
        "q": "Las estrategias o métodos de enseñanza dependen de una serie de factores tales como el nivel de desarrollo de los estudiantes, las metas, la intención, los objetivos, el contenido y el entorno, incluyendo el tiempo, el entorno físico y los recursos. Algunos métodos como el aprendizaje por diálogo, el Aprendizaje Basado en Problemas, la enseñanza y aprendizaje mutuo, el método de proyectos y el aprendizaje colaborativo, destacan 3 rasgos esenciales de participación en los procesos educativos. ¿Cuáles son esos rasgos?",
        "a": "Aprendizaje activo; aprendizaje social; aprendizaje reflexivo."
    },
    {
        "id": 2343,
        "q": "«Supone que el conocimiento aprendido se entiende completamente en la medida en que se relaciona con otros conocimientos. Contrasta significativamente con el aprendizaje memorístico». ¿A qué tipo de aprendizaje corresponde esta característica?",
        "a": "Aprendizaje significativo"
    },
    {
        "id": 2344,
        "q": "Una de las técnicas vinculadas a los estilos de aprendizaje se caracteriza por permitir ampliar la experiencia de los participantes y su habilidad para resolver problemas desde diferentes puntos de vista, potenciando las cuatro capacidades fundamentales: activo (EA), reflexivo (OR), teórico (CA) y pragmático (EC). ¿A qué técnica corresponde esta descripción?",
        "a": "Estudio de casos"
    },
    {
        "id": 2345,
        "q": "¿Cuál de las siguientes representa un tipo de aprendizaje identificado por Eggleston como producto regular del funcionamiento escolar?",
        "a": "Aprender a controlar el ritmo de trabajo escolar mediante estrategias como plantear preguntas o fingir que no se comprende."
    },
    {
        "id": 2346,
        "q": "¿Cómo afirma la teoría de la flexibilidad cognitiva que los individuos aprenden en dominios del conocimiento mal estructurados?",
        "a": "Aprenden por medio de la construcción de representaciones desde múltiples perspectivas y de conexiones entre unidades de conocimiento."
    },
    {
        "id": 2347,
        "q": "¿En qué condiciones aprenden mejor los alumnos según Vygotsky y qué oportunidad brindan las TIC en este contexto?",
        "a": "Aprenden mejor en colaboración con sus pares, profesores, padres y otros, cuando se encuentran involucrados de forma activa en tareas significativas e interesantes, y las TIC brindan oportunidades a docentes y alumnos de colaborar con otros individuos en cualquier parte del país o del mundo."
    },
    {
        "id": 2348,
        "q": "Según los estilos de aprendizaje, ¿cuál de las siguientes características corresponde al estudiante con estilo de aprendizaje visual?",
        "a": "Aprende mejor utilizando imágenes, diagramas, mapas y representaciones gráficas."
    },
    {
        "id": 2349,
        "q": "En una situación didáctica basada en competencias, ¿cuál es la finalidad principal de emplear una guía de evaluación con indicadores que contempla criterios de calidad para los desempeños conceptual, procedimental y actitudinal?",
        "a": "Garantizar una valoración integral y continua del aprendizaje, articulando los tres criterios de desempeño de la competencia en evidencias observables y medibles a lo largo del proceso formativo."
    },
    {
        "id": 2350,
        "q": "Al diseñar una secuencia de enseñanza basada en problemas, ¿qué estrategia coinstruccional cumple con mayor precisión la función de guiar al estudiante en el análisis, la búsqueda de información y la construcción de soluciones durante el desarrollo mismo del proceso de resolución del problema planteado?",
        "a": "Proponer durante el desarrollo del proceso de resolución preguntas intercaladas, pistas discursivas y retroalimentación continua que orienten al estudiante en el análisis del problema, la identificación de variables y la construcción progresiva de alternativas de solución."
    },
    {
        "id": 2351,
        "q": "Cuando el docente diseña una secuencia de enseñanza orientada a que el estudiante comprenda el tránsito filogenético de la especie humana hacia una cultura de paz, ¿qué estrategia preinstruccional cumple con mayor precisión la función de activar los esquemas cognitivos previos del estudiante y anclar el nuevo contenido ético-valórico antes de que comience la instrucción formal?",
        "a": "Plantear al estudiante, antes de iniciar la instrucción, una situación problematizadora o pregunta detonadora que recupere sus saberes y experiencias previas sobre convivencia humana, con el fin de generar un puente cognitivo entre su bagaje experiencial y el contenido ético-valórico que se abordará."
    },
    {
        "id": 2352,
        "q": "¿Cuál de las siguientes describe con mayor precisión la competencia central que caracteriza al nivel más avanzado de desarrollo de competencias TIC docentes propuesto por la UNESCO?",
        "a": "Innovar en la práctica pedagógica, producir nuevo conocimiento disciplinar y liderar comunidades profesionales de aprendizaje continuo."
    },
    {
        "id": 2353,
        "q": "¿Qué se debe hacer para lograr pasar de la memoria de trabajo a la memoria a largo plazo según la neurociencia?",
        "a": "Repetir con novedad el tema que se está enseñando por lo menos siete veces."
    },
    {
        "id": 2354,
        "q": "En el marco del rol docente como agente mediador en la educación superior, ¿qué condición fundamental debe cumplir el educador para conducir a los estudiantes hacia la construcción del conocimiento y la adquisición de capacidades?",
        "a": "Dominar las capacidades requeridas y apropiarse de nuevas formas de enseñar que orienten y favorezcan genuinamente los procesos de aprendizaje."
    },
    {
        "id": 2355,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿cuál es el propósito de las estrategias de aprendizaje según Nisbet y Shucksmith?",
        "a": "Facilitar la adquisición, el almacenamiento y la utilización de información o conocimientos mediante secuencias integradas."
    },
    {
        "id": 2356,
        "q": "Considerando la tabla de “valoración del riesgo” de la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de las siguientes opciones corresponde al maltrato físico con riesgo ALTO?",
        "a": "Uso de la fuerza física que ocasiona lesiones que ponen en riesgo la vida, que pueden generar secuelas y/o requieren atención médica urgente."
    },
    {
        "id": 2357,
        "q": "Un maestro de una unidad educativa del área rural de Pando, al inicio de la gestión escolar, aprende el nombre de cada uno de sus estudiantes y durante los recreos les pregunta sobre sus actividades en la comunidad y sus aspiraciones; además, promueve que planteen sus propias ideas durante las clases y permanece disponible después del horario escolar para atender sus dudas. ¿Cuál de las siguientes opciones describe con mayor precisión la dimensión del modelo de Lowman que este maestro está aplicando?",
        "a": "Desarrolla la relación interpersonal con los estudiantes mostrando un interés en ellos como individuos, permitiendo el pensamiento independiente y estando disponible para preguntas tanto dentro como fuera de clase."
    },
    {
        "id": 2358,
        "q": "¿En qué tipo de Institutos aplica la política de Beca de Estudio y a quiénes beneficia?",
        "a": "Aplica en Institutos de carácter privado constituidos legalmente, en beneficio de las y los bachilleres para impulsar estudios superiores en carreras autorizadas por el Ministerio de Educación."
    },
    {
        "id": 2359,
        "q": "¿A quién se atribuye la afirmación: «Cambia tu atención y cambiarás tus emociones. Cambia la emoción y tu atención cambiará de lugar»?",
        "a": "Frederick Dodson"
    },
    {
        "id": 2360,
        "q": "¿A quién se atribuye la frase «No podemos impedir la aparición de nuestras reacciones de miedo, pero sí podemos regularlas»?",
        "a": "Christophe André."
    },
    {
        "id": 2361,
        "q": "En la planeación didáctica del entrenamiento deportivo, ¿cuál de los siguientes enunciados describe con mayor precisión el propósito central que debe orientar las intenciones pedagógicas del docente al diseñar su secuencia de enseñanza?",
        "a": "Anticipar y articular de manera intencional los objetivos de aprendizaje, las estrategias didácticas por momento de uso y los criterios de evaluación, para orientar coherentemente el proceso de construcción del conocimiento técnico-deportivo del estudiante."
    },
    {
        "id": 2362,
        "q": "¿Cuál es el propósito central de la fase de contextualización dentro de la planeación del trabajo por proyectos en el proceso de enseñanza-aprendizaje?",
        "a": "Determinar el perfil situacional del grupo —condiciones, motivaciones y requerimientos de aprendizaje— para delimitar los alcances posibles en relación con el objetivo."
    },
    {
        "id": 2363,
        "q": "Según Perrenoud, las libertades que algunos docentes se toman respecto al currículum sin exponerse a control directo consisten en:",
        "a": "Modular el peso relativo de cada contenido dentro del programa, sin omitir materias ni capítulos formalmente exigidos."
    },
    {
        "id": 2364,
        "q": "¿En qué plazo y bajo qué condiciones deben los Institutos entregar el libro de Centralizadores de Calificaciones a la Dirección Departamental de Educación?",
        "a": "En un plazo indefectible de diez (10) días hábiles posteriores a la finalización de cada gestión académica."
    },
    {
        "id": 2365,
        "q": "De acuerdo con el Informe Mundial sobre la Violencia (OMS, 2002), mencionado en el texto “Convivencia escolar y resolución pacífica de conflictos”, la violencia es el resultado de:",
        "a": "La acción recíproca y compleja de factores individuales, relacionales, sociales, culturales y ambientales."
    },
    {
        "id": 2366,
        "q": "El Protocolo de Prevención y Actuación del Ministerio de Educación del Estado Plurinacional de Bolivia establece obligaciones específicas para las maestras y maestros en materia de prevención de la violencia en la comunidad educativa. ¿Cuál de las siguientes afirmaciones describe correctamente una de esas obligaciones?",
        "a": "Los trabajos curriculares que requieran apoyo extra-aula se realizarán en lo posible en grupo y con el consentimiento de las madres, padres y/o tutores."
    },
    {
        "id": 2367,
        "q": "¿Ante qué instancia deben presentar los Institutos la nómina de estudiantes para la contrastación con los Libros Centralizadores de Calificaciones y obtener autorización de los Certificados de Egreso?",
        "a": "Ante la Dirección Departamental de Educación correspondiente."
    },
    {
        "id": 2368,
        "q": "Dentro de las responsabilidades de los estudiantes en materia de prevención de la violencia, ¿ante quién deben poner en conocimiento cualquier conducta o situación de violencia que ocurra al interior de la unidad educativa?",
        "a": "Ante la directora o el director de la unidad educativa y/o centro de educación especial."
    },
    {
        "id": 2369,
        "q": "Cuando la autoridad competente recibe el informe legal con indicios de un delito, ¿ante quién debe denunciar de inmediato los hechos?",
        "a": "Ante el Ministerio Público"
    },
    {
        "id": 2370,
        "q": "¿Ante qué instancia debe gestionar el Rectorado la inscripción del POA del Instituto?",
        "a": "Ante el Gobierno Autónomo Departamental correspondiente, de acuerdo a normativa vigente."
    },
    {
        "id": 2371,
        "q": "Durante una clase, un maestro nota que algunos estudiantes se paralizan, otros se muestran agresivos y otros evitan participar al percibir el ambiente como amenazante. Desde la neurociencia educativa, ¿cuáles son las reacciones amigdalinas que debe identificar en el aula?",
        "a": "Bloqueo, ataque o huida."
    },
    {
        "id": 2372,
        "q": "¿Cuál es la denominación alternativa que recibe la región cerebral más antigua en términos evolutivos, encargada de los reflejos básicos de conservación y respuesta automática ante el peligro?",
        "a": "Instintivo o de supervivencia"
    },
    {
        "id": 2373,
        "q": "En el documento “Convivencia escolar y resolución pacífica de conflictos”, Cortina (1997), siguiendo a Kant, examina la resolución de los conflictos desde tres aspectos o imperativos. El principio de habilidad implica:",
        "a": "Analizar y examinar las causas de los conflictos, de modo que se imaginen alternativas positivas a los mismos y se valoren sus consecuencias desde una perspectiva que va más allá del beneficio propio."
    },
    {
        "id": 2374,
        "q": "¿Qué capacidad se considera fundamental desarrollar en los individuos, más allá del uso personal, recreativo o económico de las TIC?",
        "a": "Analizar la información de los medios de comunicación con pensamiento crítico y hacer uso productivo de la tecnología."
    },
    {
        "id": 2375,
        "q": "Según el “Manual de resolución de problemas”, para promover el desarrollo de la participación en las y los estudiantes, ¿qué es esencial?",
        "a": "Modelar esta habilidad y procurarla especialmente en las interacciones con nuestro grupo."
    },
    {
        "id": 2376,
        "q": "¿Cuál de las siguientes situaciones ejemplifica la «vocacionalización» de los currícula?",
        "a": "Reducir las humanidades y ciencias sociales en favor de contenidos con aplicación directa al mercado laboral."
    },
    {
        "id": 2377,
        "q": "¿Qué condición deben cumplir los avances científicos y tecnológicos para generar un impacto real en la sociedad?",
        "a": "Precisan convertirse en soluciones concretas, pues es únicamente a través de la acción que las ideas adquieren el carácter de innovaciones con capacidad real de mejorar la vida de vastos segmentos de la población mundial."
    },
    {
        "id": 2378,
        "q": "¿Qué diferencia metodológica separa los abordajes de Gimeno Sacristán y Perrenoud ante la homogeneidad escolar?",
        "a": "Gimeno Sacristán formula propuestas normativas; Perrenoud describe analíticamente los mecanismos excluyentes."
    },
    {
        "id": 2379,
        "q": "La definición de competencia que aporta la Comisión Europea establece una distinción entre conocimiento y destreza que implica que:",
        "a": "Asimilar información en el proceso de aprendizaje es condición necesaria pero no suficiente para poder aplicar técnicas y resolver problemas concretos."
    },
    {
        "id": 2380,
        "q": "La tradición anglosajona desarrolló el currículum como campo autónomo desde principios del siglo XX, mientras la tradición hispanohablante lo asimiló tardíamente al concepto de «programa». ¿Qué consecuencia epistemológica tiene esta diferencia para el diseño curricular?",
        "a": "La tradición hispanohablante privilegió la didáctica, subordinando el diseño curricular a la lógica de las disciplinas."
    },
    {
        "id": 2381,
        "q": "¿Qué afirmación describe con mayor precisión la articulación entre la supervisión del funcionamiento de las unidades educativas y la actualización de información sobre denuncias de violencia respecto a las responsabilidades de la Directora o el Director Distrital Educativo?",
        "a": "Ambas responsabilidades se complementan como mecanismos de prevención y de gestión de la información respectivamente."
    },
    {
        "id": 2382,
        "q": "En el debate sobre la existencia de un currículum básico, común y obligatorio, Clemente Linuesa, en su texto «Diseñar el currículum: prever y representar la acción», expone que las posturas a favor y en contra no son simétricas en sus fundamentos. Considerando los argumentos presentados en el texto, ¿cuál es la diferencia estructural más precisa entre ambas posturas?",
        "a": "La postura a favor sostiene que el currículum común garantiza igualdad de oportunidades y mínimos de calidad educativa, mientras que la postura crítica lo cuestiona por reproducir valores culturales dominantes e ignorar las diferencias sociales y económicas del alumnado."
    },
    {
        "id": 2383,
        "q": "¿Cuál de las siguientes afirmaciones describe correctamente la distinción entre las medidas orientadas a la transformación del entorno cultural de la comunidad educativa y las medidas orientadas al desarrollo de capacidades críticas y reflexivas del estudiante, de acuerdo al Protocolo de Prevención y Actuación?",
        "a": "Son interdependientes porque ninguna de las dos dimensiones puede, por sí sola, garantizar la prevención integral de la violencia sin la implementación simultánea de la otra."
    },
    {
        "id": 2384,
        "q": "Dentro del texto «Diseño, desarrollo e innovación del currículum», dos perspectivas sobre la cultura escolar difieren en su énfasis conceptual central. ¿Cuál de las siguientes opciones describe con mayor precisión esa diferencia?",
        "a": "Una la analiza como saber filtrado por mediaciones; la otra como adaptación institucional del alumno al margen del aprendizaje real."
    },
    {
        "id": 2385,
        "q": "La noción de currículum oculto en sentido estricto se distingue de su uso más distendido porque:",
        "a": "Designa las rutinas escolares que producen regularmente aprendizajes desconocidos y ajenos a los declarados por la institución."
    },
    {
        "id": 2386,
        "q": "De acuerdo a las señales y consecuencias de la violencia a corto y mediano plazo, ¿cuál de las siguientes opciones corresponde al área emocional en la niñez?",
        "a": "Temores inexplicables frente a ciertas personas o situaciones."
    },
    {
        "id": 2387,
        "q": "La neocorteza es la estructura filogenéticamente más reciente del cerebro humano. ¿Cuál es su función neurológica específica?",
        "a": "Gestiona el razonamiento lógico"
    },
    {
        "id": 2388,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje Las emociones y el aprendizaje” ¿Qué ayuda al sistema límbico?",
        "a": "Marilina Rotger"
    },
    {
        "id": 2389,
        "q": "Para lograr una vida con aprendizajes y experiencias significativas, ¿qué necesita un niño durante los primeros 5 años de vida?",
        "a": "Estímulo, motivación, afecto, reconocimiento y curiosidad."
    },
    {
        "id": 2390,
        "q": "¿Cuál de las siguientes dimensiones de competencia docente aborda el marco de la UNESCO para el desarrollo de habilidades TIC, considerando que cada enfoque progresivo articula aspectos pedagógicos, técnicos y organizativos de la práctica profesional?",
        "a": "Política educativa, currículo y evaluación, pedagogía, TIC, organización y administración, y formación profesional docente."
    },
    {
        "id": 2391,
        "q": "Dentro del análisis de las competencias digitales docentes y la integración de tecnologías en la educación, ¿mediante qué conjunto de terminologías han definido los teóricos e historiadores el potencial de la innovación tecnológica, siendo la más utilizada en la actualidad?",
        "a": "Principios técnicos genéricos, indicadores tecnológicos, sistemas tecnológicos, modelos dominantes y actualmente con mayor frecuencia paradigmas tecnológicos."
    },
    {
        "id": 2392,
        "q": "Según la neurociencia del aprendizaje, ¿qué estados emocionales produce el color gris en los estudiantes dentro del aula?",
        "a": "Paz y tenacidad."
    },
    {
        "id": 2393,
        "q": "Tomando en cuenta la tabla de señales y consecuencias de la violencia en la adolescencia, descritas en la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de las siguientes opciones corresponde al área emocional a corto y mediano plazo?",
        "a": "Sentimiento de culpa sobre lo sucedido."
    },
    {
        "id": 2394,
        "q": "Según Paul Ekman, psicólogo que estudió la expresión facial de las emociones, ¿cuáles son las seis emociones básicas con las que nacemos todas las personas?",
        "a": "Miedo, aversión, sorpresa, alegría, ira y tristeza."
    },
    {
        "id": 2395,
        "q": "¿Qué autor define a la inteligencia como un potencial bio-psicológico de procesamiento de información que se puede activar en uno o más marcos culturales para resolver problemas o crear productos valiosos?",
        "a": "Howard Gardner."
    },
    {
        "id": 2396,
        "q": "¿Cuál de las siguientes afirmaciones describe con mayor precisión el carácter inconcluso de la innovación educativa y su relación con la actualización constante?",
        "a": "Su sostenibilidad depende del análisis permanente de fundamentos, resultados y condiciones de implementación en cada contexto, pues constituye un proceso cíclico e inacabado."
    },
    {
        "id": 2397,
        "q": "Si se tienen dos estudiantes con baja motivación: uno muestra inseguridad y baja autoconfianza ante las tareas; otro no sabe qué objetivos debe alcanzar ni cómo proceder durante las actividades. Se debe orientar pedagógicamente a cada uno de forma diferenciada. ¿Qué estrategias específicas del texto de «Estilos de Aprendizaje y Métodos de Enseñanza» aplicaría usted para cada caso?",
        "a": "Al primero, incentiva un sentido de autoeficacia; al segundo, se asegura de que sepa qué hacer, cómo proceder y que sabrá cuándo alcanzó los objetivos."
    },
    {
        "id": 2398,
        "q": "¿A quiénes tiene la obligación de informar anualmente el Consejo Nacional de Lucha Contra la Corrupción, Enriquecimiento Ilícito y Legitimación de Ganancias Ilícitas sobre el Plan Nacional de Lucha Contra la Corrupción y sus resultados?",
        "a": "Al Presidente del Estado Plurinacional, a la Asamblea Legislativa Plurinacional y a la Sociedad Civil Organizada."
    },
    {
        "id": 2399,
        "q": "Se trata de investigar en y sobre la acción, pues en la búsqueda de integrar teoría y práctica, subraya la dificultad de la función de la enseñanza, tratando de destacar un aprendizaje en la reflexión de su propia experiencia, o la necesidad de comprobar el pensamiento por medio de la acción. ¿A qué modelo de desarrollo profesional de Imbernón corresponde esta afirmación?",
        "a": "Al modelo de investigación o indagativo."
    },
    {
        "id": 2400,
        "q": "Cuando los servidores públicos u otros profesionales contratados identifican indicios de haberse cometido un delito, ¿a quién deben hacer conocer el informe elaborado con la diligencia y reserva debidas?",
        "a": "A la unidad legal pertinente"
    },
    {
        "id": 2401,
        "q": "¿A quiénes serán destinadas las multas impuestas como sanción en delitos de violencia hacia las mujeres?",
        "a": "A los Servicios de Atención Integral a cargo de los Gobiernos Autónomos Municipales."
    },
    {
        "id": 2402,
        "q": "En el método de enseñanza en el que la palabra hablada se complementa con la ayuda de actividades en las que se involucran los sentidos auditivos y visuales, y los estudiantes observan cómo se hace para transferir información a una aplicación práctica, ¿a qué método de enseñanza corresponde esta descripción?",
        "a": "Al método de demostración, porque la palabra hablada se complementa con actividades que involucran los sentidos auditivo y visual, permitiendo que los estudiantes observen cómo se ejecuta un proceso para luego transferirlo a una aplicación práctica."
    },
    {
        "id": 2403,
        "q": "¿Cuántos minutos al mes deben difundir gratuitamente los canales de televisión contenidos de prevención y educación para reducir la violencia contra las mujeres?",
        "a": "Al menos diez (10) minutos al mes en horarios preferenciales."
    },
    {
        "id": 2404,
        "q": "¿A qué se conoce como depresión a largo plazo?",
        "a": "Al mecanismo por el cual los circuitos sinápticos se debilitan de manera sostenida ante la ausencia prolongada de estimulación."
    },
    {
        "id": 2405,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje Las emociones y el aprendizaje”, Si nos encontramos en un estado emocional negativo, ¿Qué dirige la amígdala?",
        "a": "Marilina Rotger"
    },
    {
        "id": 2406,
        "q": "Según Sáez López en su libro «Estilos de aprendizaje y métodos de enseñanza», un estudiante de secundaria combina el pensamiento abstracto con la experimentación activa, busca aplicar las ideas a situaciones prácticas y prefiere las cosas a las personas. ¿A qué estilo de aprendizaje de Kolb corresponde este perfil y cuáles son sus características definitorias?",
        "a": "Al estilo convergente, porque poseen pensamiento abstracto y procesan la información de forma activa, siendo buenos en la aplicación de las ideas y en situaciones donde hay más de una respuesta."
    },
    {
        "id": 2407,
        "q": "El estilo de aprendizaje organizativo tecnológico-científico es aquel basado en la explicación de la realidad de las organizaciones y cuyo objetivo esencial es transformarla buscando alternativas de mejora fundamentadas. De manera que este estilo, frente al técnico, supera el ámbito del hacer, incluso del hacer bien por mera experiencia, y nos conduce:",
        "a": "Al saber por qué se hace, se aplica o realiza una determinada planificación de una forma y no de otra diferente."
    },
    {
        "id": 2408,
        "q": "¿A qué área temática se vinculan los aspectos técnicos de la competencia digital docente, entendidos como la actualización continua en hardware y software ante nuevos desarrollos tecnológicos?",
        "a": "Al área de Aprendizaje Permanente, en la que el profesorado debe mantenerse actualizado conforme emergen innovaciones en los entornos tecnológicos."
    },
    {
        "id": 2409,
        "q": "¿A quiénes se remite copia del dictamen de responsabilidad ejecutiva en calidad de notificación?",
        "a": "Al ejecutivo o directores responsabilizados, al superior jerárquico de la dirección colegiada si la hubiera y no estuviera involucrada, y a la máxima autoridad de la entidad que ejerce tuición."
    },
    {
        "id": 2410,
        "q": "¿En qué momento se activa el nivel de serotonina en el cerebro, según la neurociencia del aprendizaje?",
        "a": "Al alcanzar una meta satisfactoria, generando bienestar y consolidando conductas hacia el logro."
    },
    {
        "id": 2411,
        "q": "Una estudiante de secundaria presenta disminución en el rendimiento escolar, ausentismo injustificado y comportamiento hostil hacia un compañero específico. Al indagar, se descubre que es víctima de agresión sostenida. ¿Cuál de las siguientes consecuencias corresponde a la categoría conductual a corto plazo de la agresión?",
        "a": "Aislamiento o marginación social y rechazo a la autoridad y referentes adultos."
    },
    {
        "id": 2412,
        "q": "Al adaptar estrategias de enseñanza de matemáticas para estudiantes con discapacidad, ¿cuál es el principio rector que debe guiar la planificación didáctica?",
        "a": "Mantener la equivalencia conceptual del contenido matemático, diversificando los recursos y procedimientos metodológicos según las necesidades de cada discapacidad."
    },
    {
        "id": 2413,
        "q": "Cuando en una situación de satisfacción se ha obtenido el objetivo y logrado lo que se presentó como motivación, ¿qué neurotransmisor se activa?",
        "a": "Serotonina"
    },
    {
        "id": 2414,
        "q": "¿Cuál es el sistema establecido para controlar la gestión de las entidades del sector público boliviano?",
        "a": "Control Gubernamental, integrado por el Control Interno y el Control Externo Posterior."
    },
    {
        "id": 2415,
        "q": "Cuando se describe la fragmentación extrema del trabajo escolar en actividades de corta duración, ¿qué exigencia específica impone esa condición al estudiante?",
        "a": "Movilizar competencias diversas en pocos minutos ante cada cambio de actividad."
    },
    {
        "id": 2416,
        "q": "Atendiendo al desarrollo profesional docente en el uso de TIC, ¿cuál es el criterio más importante para que dicho desarrollo sea efectivo?",
        "a": "Adaptarlo a las necesidades de aprendizaje y a los niveles de habilidad de cada docente en particular, ofreciendo una variedad de opciones de acuerdo a la disponibilidad de recursos de la institución."
    },
    {
        "id": 2417,
        "q": "Según la Ley N° 223, ¿qué elementos debe contemplar la Educación Inclusiva para dar respuesta a la diversidad y reducir la exclusión de la educación?",
        "a": "Adaptaciones físicas, curriculares y personas de apoyo, buscando mayor participación en el aprendizaje, las culturas y las comunidades."
    },
    {
        "id": 2418,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje Lasemociones y el aprendizaje” ¿Qué implica el proceso cognitivo?",
        "a": "Marilina Rotger”"
    },
    {
        "id": 2419,
        "q": "Cuando se sostiene que aprender el oficio de alumno tiene una doble función, ¿en qué consiste exactamente esa dualidad?",
        "a": "Adapta al alumno a la organización escolar y transfiere esquemas útiles para otras organizaciones de la vida adulta."
    },
    {
        "id": 2420,
        "q": "Según el texto de Innovación Educativa de la UNESCO, ¿cuál de las siguientes afirmaciones describe con mayor precisión el papel del poder y las políticas en los procesos de cambio e innovación dentro de las organizaciones educativas?",
        "a": "Condicionan e incluso determinan todas las dimensiones clave del cambio y la transformación en los contextos educativos."
    },
    {
        "id": 2421,
        "q": "¿Bajo qué parámetros el Viceministerio de Educación Alternativa y Especial deberá revisar y actualizar el Reglamento para el Fortalecimiento de la Educación Inclusiva en el Sistema Educativo Plurinacional — Modalidad Indirecta?",
        "a": "Experiencia de su aplicación y normativa vigente."
    },
    {
        "id": 2422,
        "q": "De acuerdo a la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál es el rol de las maestras y los maestros en la detección de violencia?",
        "a": "Es un puente entre niñas, niños, adolescentes y sus familiares, que debe brindar el apoyo y buscar los servicios necesarios para garantizar su bienestar y protección integral."
    },
    {
        "id": 2423,
        "q": "¿En qué consiste el rol orientador de la didáctica cuando se plantea como fuente de información para mejorar la práctica docente, reduciendo la brecha entre la investigación y la enseñanza?",
        "a": "Orienta el diseño curricular para la formación del profesorado y proporciona herramientas para que quienes están en formación y en activo mejoren su práctica, sin esperar situaciones didácticas modélicas para imitar."
    },
    {
        "id": 2424,
        "q": "Desde la perspectiva del neuroaprendizaje, ¿cuál es la característica que define al cerebro reptiliano y que el maestro debe considerar al diseñar situaciones de aprendizaje?",
        "a": "Opera de forma mecánica, instintiva e inconsciente, con respuestas automáticas muy resistentes al cambio"
    },
    {
        "id": 2425,
        "q": "El método de casos propicia acercar una realidad concreta al ambiente educativo mediante un caso real o diseñado, incentiva y motiva a los estudiantes, desarrolla habilidades de análisis y síntesis, y permite verificar los aprendizajes logrados. ¿Qué estilos de aprendizaje favorece este método?",
        "a": "Activo (EA), teórico (CA) y reflexivo (OR)"
    },
    {
        "id": 2426,
        "q": "Un maestro identifica que sus estudiantes han llegado al tramo de menor activación cerebral dentro de la sesión. En lugar de continuar con contenido nuevo, decide aprovechar ese momento estratégicamente. ¿Qué tipo de actividades son más adecuadas para trabajar durante ese período de baja activación o «downtime»?",
        "a": "Actividades de reflexión, repaso e integración de lo aprendido."
    },
    {
        "id": 2427,
        "q": "Conforme a la “Guía para la Identificación y Denuncia de la Violencia Intrafamiliar en el Ámbito Educativo”, en los casos donde la valoración es de bajo riesgo, se debe apoyar a la madre, padre o tutor a:",
        "a": "Fortalecer sus habilidades parentales a través de la información."
    },
    {
        "id": 2428,
        "q": "Tomando en cuenta la teoría de Howard Gardner, ¿qué habilidades posee una persona con inteligencia espacial?",
        "a": "Visualizar y manipular mentalmente objetos y una gran memoria visual."
    },
    {
        "id": 2429,
        "q": "Cuando un maestro presenta un nuevo contenido en el aula, el cerebro del estudiante no lo almacena de forma inmediata y directa. ¿Cuáles son los procesos secuenciales que debe atravesar la información para quedar registrada en la memoria?",
        "a": "Codificación, almacenamiento y recuperación."
    },
    {
        "id": 2430,
        "q": "¿Qué proceso neurológico tiene una implicación pedagógica directa para el docente de educación inicial?",
        "a": "Sobreproducción y posterior selección de relaciones sinápticas regulada por la experiencia"
    },
    {
        "id": 2431,
        "q": "Un maestro emplea recursos visuales, sonoros y táctiles al inicio de su clase para captar la atención. ¿En qué consiste el primer registro que el cerebro realiza de esos estímulos antes de decidir cuáles procesa con mayor profundidad?",
        "a": "Retención fugaz de señales captadas por órganos sensoriales."
    },
    {
        "id": 2432,
        "q": "¿Cuál es la característica central del proceso neurofisiológico en el marco del neuroaprendizaje?",
        "a": "Transformaciones sinápticas y bioeléctricas que fijan vivencias en redes neuronales."
    },
    {
        "id": 2433,
        "q": "Según la neurociencia aplicada al aprendizaje, ¿qué promueven los impulsos electroquímicos al formar nuevas conexiones sinápticas entre neuronas?",
        "a": "Adquisición de saberes o destrezas recientemente incorporados."
    },
    {
        "id": 2434,
        "q": "Según el libro de Marilina Rotger, ¿Por qué está dada la plasticidad neuronal?",
        "a": "Aparición de nuevas sinapsis y muerte neuronal programada."
    },
    {
        "id": 2435,
        "q": "¿Qué mecanismo neurobiológico se activa ante la privación lumínica en el entorno escolar y qué efecto inmediato genera sobre la disposición cognitiva de los estudiantes?",
        "a": "Activa la producción de melatonina, induciéndose somnolencia y reduciéndose el estado de alerta."
    },
    {
        "id": 2436,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” menciona que algunos conceptos clave orientan los métodos más innovadores empleados en los proyectos de prevención, combinando las técnicas actuales de reducción de los prejuicios y de todo tipo de discriminación, con aquellas otras propias de la prevención contra la violencia, y parten de la evidencia de que la violencia y la intolerancia son:",
        "a": "Actitudes y conductas que se aprenden."
    },
    {
        "id": 2437,
        "q": "De acuerdo con la tabla de factores de riesgo para la violencia descritos en la “Guía para la Identificación y Denuncia de Violencia Intrafamiliar en el Ámbito Educativo”, ¿cuál de las siguientes opciones corresponde a factores sociales?",
        "a": "Situación laboral, desempleo, subempleo, inestabilidad laboral y excesiva carga horaria."
    },
    {
        "id": 2438,
        "q": "¿Qué función cumplen los ambientes virtuales como los micromundos, los share rooms y las experiencias inmersivas basadas en simulación dentro del proceso educativo?",
        "a": "Acercar el conocimiento de tipo complejo a niveles más noveles, sustentándose en los principios de la simulación."
    },
    {
        "id": 2439,
        "q": "Según el documento “Convivencia escolar y resolución pacífica de conflictos”, mejorar la convivencia escolar, entendida como la interrelación entre los diferentes miembros de la comunidad educativa, tiene incidencia significativa en el desarrollo:",
        "a": "Ético, socioafectivo e intelectual del alumnado."
    },
    {
        "id": 2440,
        "q": "Según el libro «Estilos de Aprendizaje y Métodos de Enseñanza», ¿qué actitud promueve el juego de roles en el grupo?",
        "a": "Abre perspectivas de acercamiento a la realidad con creatividad, desinhibición y motivación ampliando experiencias."
    },
    {
        "id": 2441,
        "q": "Según el Modelo Bidimensional de Enseñanza Efectiva de Lowman, ¿qué caracteriza específicamente la segunda dimensión identificada por dicho modelo?",
        "a": "Implica la obligación del maestro hacia los estudiantes, desarrollando un vínculo que incluye interés en ellos como individuos, fomento del pensamiento independiente y disponibilidad para atender consultas dentro y fuera del aula."
    },
    {
        "id": 2442,
        "q": "Según la Ley N° 223 “Ley General para Personas con Discapacidad”, ¿a través de qué mecanismo el Estado Plurinacional garantiza y promueve el acceso de las personas con discapacidad a toda forma de empleo y trabajo digno con una remuneración justa?",
        "a": "A través de políticas públicas de inclusión socio-laboral en igualdad de oportunidades."
    },
    {
        "id": 2443,
        "q": "¿A través de qué instancia deben realizar los Institutos el registro de firmas de los Directivos?",
        "a": "A través de la Dirección Departamental de Educación conforme a cronograma y formatos establecidos por el Ministerio de Educación"
    },
    {
        "id": 2444,
        "q": "El Director Administrativo(a) del Instituto debe elaborar y presentar partes mensuales de asistencia, altas y bajas de afiliación al Seguro Social de Salud y afiliación a AFPs, ¿a través de qué instancia y ante qué autoridad debe realizarse dicha presentación?",
        "a": "A través del Rectorado, ante la Dirección Departamental de Educación correspondiente."
    },
    {
        "id": 2445,
        "q": "Según la neurociencia, ¿cómo nos damos cuenta de que un estímulo puede hacernos daño?",
        "a": "Por aprendizaje y condicionamiento."
    },
    {
        "id": 2446,
        "q": "Desde el neuroaprendizaje, comprender el mecanismo de comunicación entre las células del sistema nervioso permite al maestro entender cómo se forman y consolidan los aprendizajes. ¿Cómo se comunican las neuronas entre sí?",
        "a": "Por la liberación de sustancias denominadas neurotransmisores que atraviesan el espacio sináptico transmitiendo señales de una unidad a otra."
    },
    {
        "id": 2447,
        "q": "¿Cuál es el mecanismo mediante el cual el Aprendizaje Basado en Problemas genera conocimiento en el estudiante?",
        "a": "Asumiendo un papel activo en la búsqueda de soluciones a problemas que simulan situaciones diversas enfrentables a corto o largo plazo."
    },
    {
        "id": 2448,
        "q": "¿Cómo se seguirá la investigación de los hechos de violencia contra las mujeres?",
        "a": "De oficio, independientemente del impulso de la denunciante."
    },
    {
        "id": 2449,
        "q": "¿A qué se debe el riesgo pedagógico de que las prácticas de refuerzo, al ser formas extrínsecas, puedan desvirtuar el proceso de aprendizaje?",
        "a": "A que los estudiantes pueden ver el aprendizaje simplemente como un medio para alcanzar un fin: ganar una recompensa."
    },
    {
        "id": 2450,
        "q": "¿A qué conclusión ha llegado la investigación psicológica social respecto al impacto de la motivación extrínseca en los procesos de aprendizaje?",
        "a": "A que las recompensas extrínsecas pueden llevar a una justificación excesiva y a una reducción posterior de la motivación intrínseca."
    },
    {
        "id": 2451,
        "q": "El texto de Innovación Educativa sostiene que la transformación pedagógica puede resultar difícil para los docentes, ¿a qué se debe específicamente ese carácter dificultoso dentro de dicho proceso?",
        "a": "A que implica abandonar convicciones y modos de actuar consolidados que se han sostenido y reproducido a lo largo de la trayectoria profesional."
    },
    {
        "id": 2452,
        "q": "Entre las condiciones que pueden asegurar un buen aprendizaje está la «pertenencia y configuración», debido a que la repetición, la práctica o el ejercicio no resultará en aprendizaje a menos que se forme algún tipo de relación aceptada. ¿A qué se debe esto?",
        "a": "A que el aprendizaje en su esencia misma, es una reestructuración de la experiencia, lo que significa que los procesos y las estructuras se perciben en una nueva relación, un nuevo patrón."
    },
    {
        "id": 2453,
        "q": "El Escalafón Nacional del Servicio de Educación establece expresamente causales de inadmisibilidad para el ejercicio de la docencia, ¿a partir de qué edad se configuraría la causal de inadmisibilidad?",
        "a": "A partir de los 60 años de edad"
    },
    {
        "id": 2454,
        "q": "¿A partir de qué gestión se calificaron los ascensos de categoría según el sistema establecido por el Reglamento del Escalafón Nacional del Servicio de Educación?",
        "a": "Las asignaciones por categoría."
    },
    {
        "id": 2455,
        "q": "¿A qué niveles debe promover la Dirección Académica la participación de docentes y estudiantes en Ferias o Encuentros de Innovación Técnica y Tecnológica que articule al sector productivo?",
        "a": "A nivel Institucional, Local, Regional, Departamental y Nacional."
    },
    {
        "id": 2456,
        "q": "¿En qué niveles puede manifestarse la innovación educativa como un cambio que incide en aspectos estructurales de la educación para mejorar su calidad?",
        "a": "A nivel de aula, de institución educativa y de sistema escolar."
    },
    {
        "id": 2457,
        "q": "Según Beltrán (1993), ¿qué relación existe entre el uso de estrategias de aprendizaje y el rendimiento académico del estudiantado?",
        "a": "A mayor número y calidad de estrategias utilizadas, más alto será el nivel de rendimiento logrado."
    },
    {
        "id": 2458,
        "q": "En el ámbito de las organizaciones educativas, ¿cómo se define la micropolítica?",
        "a": "Al uso del poder formal e informal por individuos y grupos para alcanzar sus metas en las organizaciones, a partir de diferencias percibidas y de la motivación por ejercer influencia o protegerse."
    },
    {
        "id": 2459,
        "q": "¿A qué alude la noción de experiencia codificada en el marco de la transmisión cultural escolar?",
        "a": "A los saberes y experiencias ajenas fijados en soportes que permiten acceder a lo ocurrido en otros tiempos y lugares."
    },
    {
        "id": 2460,
        "q": "Según los planteamientos sobre estilos y métodos de aprendizaje, ¿a quiénes no desalientan las situaciones en las aulas donde los estudiantes se ven obligados a competir entre sí?",
        "a": "A los mejores estudiantes, porque la competencia refuerza su motivación intrínseca y consolida su rendimiento académico superior"
    },
    {
        "id": 2461,
        "q": "Un adulto convive sin dificultad en una oficina abarrotada y en transportes públicos muy concurridos. ¿A qué atribuye «El currículum real y el trabajo escolar» esta capacidad?",
        "a": "A un hábito incorporado en parte durante la experiencia escolar de vivir cotidianamente en un ambiente superpoblado."
    },
    {
        "id": 2462,
        "q": "El documento “Convivencia escolar y resolución pacífica de conflictos” define la mediación como un proceso de resolución de conflictos a través de la intervención de una tercera persona imparcial y neutral, que anima a las partes a convenir una solución satisfactoria para ambas, sin ofrecer alternativas, ya que su actividad se reduce sólo a:",
        "a": "Al control del proceso."
    },
    {
        "id": 2463,
        "q": "¿A quién otorgarán los Institutos el Certificado de Egreso?",
        "a": "A la o el estudiante que haya concluido y aprobado el Plan de Estudios y vencido la Modalidad de Graduación."
    },
    {
        "id": 2464,
        "q": "¿A quién debe estar dirigido el Memorial de Solicitud para la autorización de apertura y funcionamiento de un Instituto de carácter privado?",
        "a": "A la Ministra o Ministro de Educación, especificando si es para Sede Central o Subsede."
    },
    {
        "id": 2465,
        "q": "¿A quién corresponde la responsabilidad de implantar los reglamentos específicos para el funcionamiento de los sistemas de Administración y Control Interno en cada entidad del Sector Público?",
        "a": "A la máxima autoridad de la entidad, en el marco de las normas básicas dictadas por los órganos rectores correspondientes."
    },
    {
        "id": 2466,
        "q": "En la metodología de aprendizaje basado en proyectos, una etapa inicial orienta al estudiante a reflexionar sobre la intención, la justificación y la finalidad de la propuesta a desarrollar. ¿A qué fase corresponde esta descripción?",
        "a": "A la fase de establecimiento del propósito, en la que se determina qué se quiere hacer, por qué se quiere hacer y para qué se quiere hacer el proyecto."
    },
    {
        "id": 2467,
        "q": "Las teorías cognitivas miran más allá del comportamiento para explicar el aprendizaje basado en el cerebro. ¿A qué escuelas pertenecen estas teorías cognitivas?",
        "a": "A la escuela de Psicología Gestalt y a la psicología cognitiva."
    },
    {
        "id": 2468,
        "q": "¿A qué condiciones deben sujetar sus gastos totales las entidades gubernamentales que cuentan con recursos provenientes de tributación, aportes a la seguridad social, regalías o transferencias de los tesoros del Estado?",
        "a": "A la disponibilidad de sus recursos, a las condiciones del financiamiento debidamente contraído y a los límites legales presupuestarios, sin poder transferir gastos de inversión a funcionamiento."
    },
    {
        "id": 2469,
        "q": "¿A quién debe identificar e informar la Dirección Académica sobre las necesidades de recursos humanos, materiales y financieros de su Dirección?",
        "a": "Al Rectorado."
    },
    {
        "id": 2470,
        "q": "¿A qué institución corresponde la capacitación de los servidores públicos en el manejo de los sistemas de administración y control gubernamentales, y cuál es su objeto?",
        "a": "A la Contraloría General de la República, con el objeto de complementar, actualizar y especializar la formación técnica y profesional para lograr mejores niveles de eficacia y eficiencia en los sistemas de cada entidad."
    },
    {
        "id": 2471,
        "q": "¿A qué sujetarán sus gastos totales las entidades gubernamentales que cuenten con recursos provenientes de tributación, aportes a la seguridad social y otros aportes, regalías o transferencias de los tesoros del Estado?",
        "a": "A la disponibilidad de sus recursos, a las condiciones del financiamiento debidamente contraído y a los límites legales presupuestarios, no pudiendo transferir gastos de inversión a funcionamiento."
    },
    {
        "id": 2472,
        "q": "Según «La educación obligatoria: Una escolaridad igual para sujetos diferentes», ¿a qué proceso histórico es inherente el bajo rendimiento escolar como fenómeno reconocible?",
        "a": "A la escolarización universal real."
    },
    {
        "id": 2473,
        "q": "Según el texto de Innovación Educativa, ¿a qué contribuyen las prácticas transformadoras generadas en los centros formativos cuando son respaldadas desde el ámbito de la gestión pública educativa?",
        "a": "A impulsar la transformación del sistema y avanzar hacia el logro de estándares de excelencia, contribuyendo al cumplimiento de metas nacionales e internacionales."
    },
    {
        "id": 2474,
        "q": "¿Con qué finalidad debe participar el Docente en procesos de formación continua interna y externa y de redes profesionales vinculadas a su labor?",
        "a": "A fin de promover la cultura de excelencia, la investigación e innovación científica y tecnológica."
    },
    {
        "id": 2475,
        "q": "Según el documento “Convivencia escolar y resolución pacífica de conflictos”, ¿a qué puede deberse el origen de un conflicto?",
        "a": "A diversas causas, como la escasez de recursos, el uso de poder, la posición social o el predominio cultural de los actores."
    },
    {
        "id": 2476,
        "q": "¿Cómo se denomina la memoria que es limitada a lo que puede recordarse mientras se mantiene la atención sobre lo percibido?",
        "a": "Sensorial."
    },
    {
        "id": 2477,
        "q": "Los maestros titulares que no siendo oriundos del lugar presten servicios en zonas declaradas fronterizas durante 4 años, ¿a cuántos años de antigüedad equivale dicho período para efectos de jubilación, calificación de méritos y promoción de categoría?",
        "a": "6 años de antigüedad"
    },
    {
        "id": 2478,
        "q": "Un maestro normalista, que no es oriundo del lugar, presta 2 años de servicio continuo en una zona declarada fronteriza, ¿a cuántos años de antigüedad equivalen esos años de servicio y para qué efectos se reconoce dicho beneficio?",
        "a": "A cuatro años de antigüedad, para efectos de jubilación, calificación de méritos y promoción de categoría."
    },
    {
        "id": 2479,
        "q": "¿Cuál es la distribución mínima de horas prácticas y teóricas establecida para los cursos de capacitación?",
        "a": "80% práctica y 20% teórica, debiendo los cursos estar autorizados legalmente y responder a la oferta académica aprobada y vigente del Instituto."
    },
    {
        "id": 2480,
        "q": "¿Dentro de qué término puede apelar el maestro ante la Comisión Nacional las calificaciones asignadas por la Comisión Distrital?",
        "a": "10 días"
    },
    {
        "id": 2481,
        "q": "¿A partir de cuántos años de servicios, el funcionario administrativo del ramo de educación que pase a prestar funciones docentes está obligado a someterse a los exámenes para interinos y titulares a fin de mantener su categoría?",
        "a": "10 años de servicio"
    },
    {
        "id": 2482,
        "q": "De acuerdo al Escalafón Nacional del Magisterio, ¿cuántos años de servicio deben cumplir los maestros titulares para estar obligados a rendir el examen de capacidad que habilita su incorporación definitiva en la carrera docente?",
        "a": "10 años de servicio"
    },
    {
        "id": 2483,
        "q": "¿Por cuantos artículos está conformado el reglamento para el fortalecimiento de la educación inclusiva en el Sistema Educativo Plural - modalidad indirecta",
        "a": "Maestros de apoyo."
    },
    {
        "id": 2484,
        "q": "Según la neurociencia, ¿en qué tiempo ocurren las reacciones psicofisiológicas ante un estímulo emocional?",
        "a": "25 milésimas de segundo."
    },
    {
        "id": 2485,
        "q": "En el marco del apoyo educativo a estudiantes con dificultades en el aprendizaje del nivel de Educación Primaria Comunitaria Vocacional, ¿cuáles son los grados en los que se debe dar énfasis en el sentido reeducativo?",
        "a": "4to, 5to y 6to."
    },
    {
        "id": 2486,
        "q": "Cuando un docente interpone un recurso de apelación, la Comisión Distrital debe verificar su procedencia y resolver bajo responsabilidad. ¿En qué plazo máximo debe emitir su resolución?",
        "a": "3 días"
    },
    {
        "id": 2487,
        "q": "De acuerdo al Escalafón Nacional del Magisterio, ¿en cuántas áreas se juzgan los deméritos del personal docente?",
        "a": "5 áreas"
    },
    {
        "id": 2488,
        "q": "¿En qué plazo están obligados los maestros normalistas a recabar su Título y Visación de título, requisitos sin los cuales no podrán ascender de categoría?",
        "a": "2 años después de su egreso"
    },
    {
        "id": 2489,
        "q": "En Educación Inicial y Primaria del Subsistema de Educación Regular, las y los estudiantes con discapacidad intelectual podrán inscribirse con una diferencia de edad de:",
        "a": "24 meses con relación a la edad establecida para sus pares."
    },
    {
        "id": 2490,
        "q": "Según el neuroaprendizaje, ¿cuál es la duración de los periodos atencionales con predominio de UPTIME en el nivel primario?",
        "a": "12 y 15 minutos"
    },
    {
        "id": 2491,
        "q": "Según el texto “Convivencia escolar y resolución pacífica de conflictos”, el programa “En clave de Paz” fue experimentado y evaluado en:",
        "a": "122 centros de ocio, con la participación de 12.500 jóvenes y 1.760 educadores."
    },
    {
        "id": 2492,
        "q": "¿Cuántas horas semanales podrán acumular los directores de colegios secundarios dentro del propio establecimiento?",
        "a": "10 horas semanales"
    },
    {
        "id": 2493,
        "q": "Una maestra o maestro es notificado formalmente sobre el inicio de un proceso disciplinario instaurado en su contra. ¿Cuántos días contempla el período probatorio según el Reglamento de Faltas y Sanciones?",
        "a": "20 días prorrogables por razón de distancia a petición de parte o de oficio"
    },
    {
        "id": 2494,
        "q": "Entre los factores que facilitan el aprendizaje organizativo, la existencia y mejor aplicación de dichos facilitadores requieren de la implementación de una estrategia adecuada, apoyada en un conjunto de principios y basada en una secuencia de intervención. ¿Cuál es el orden correcto de dicha secuencia?",
        "a": "1. La concienciación de los diferentes estamentos comunitarios; 2. La optimización del conocimiento; 3. La emergencia y consolidación de una cultura genuina; 4. La sensibilización de la comunidad educativa; 5. El impulso de la formación permanente."
    },
    {
        "id": 2495,
        "q": "¿Cuál de las siguientes interrogantes define correctamente la estructura de una ruta de actuación ante casos de violencia en la comunidad educativa?",
        "a": "¿Qué hacer, cómo hacerlo, quién es responsable de hacerlo y cuándo debe hacerse?"
    },
    {
        "id": 2496,
        "q": "En el «modelo bidimensional» de Lowman, la segunda dimensión referida a la relación interpersonal denominada «obligación del maestro hacia los estudiantes» implica que los maestros desarrollan una relación mostrando interés en ellos como individuos. ¿Qué interrogantes genera esta dimensión respecto al desempeño docente?",
        "a": "¿El profesor sabe algo sobre cada uno? ¿Los alienta y permite el pensamiento independiente? ¿Está el profesor disponible para preguntas tanto dentro como fuera de clase?"
    },
    {
        "id": 2497,
        "q": "El texto “Convivencia escolar y resolución pacífica de conflictos” señala que el reglamento escolar constituye el acuerdo general de los miembros de la comunidad educativa sobre los principios que rigen y regulan la convivencia, y que estos principios se concretan en reglas que no pueden ser confusas ni ambiguas. En ese marco, ¿qué señala Martínez Pérez (1998) sobre la función de las normas?",
        "a": "«Una de las funciones de las normas es dar estructura a la interacción social para reducir incertidumbre, confusión y ambigüedad. Presuponen un código justo y son alterables según varíen las circunstancias, las negociaciones y las necesidades. Están sujetas a las interpretaciones y de ahí la necesidad de elaborarlas y revisarlas a través de un proceso»."
    },
    {
        "id": 2498,
        "q": "Según el “Reglamento para el Fortalecimiento de la Educación Inclusiva SEP – Modalidad Indirecta”, los estudiantes con talento extraordinario presentan:",
        "a": "«mayor desarrollo de capacidades superiores y transformadoras»."
    },
    {
        "id": 2499,
        "q": "¿Cómo definen el clima escolar Fernández Díaz y Asensio Muñoz desde una perspectiva integradora?",
        "a": "«El ambiente total de un centro educativo, determinado por todos aquellos factores físicos, elementos estructurales, personales, funcionales y culturales de la institución que, integrados interactivamente en un proceso dinámico específico, confieren un peculiar estilo o tono a la institución, condicionante, a su vez, de distintos productos educativos»."
    },
    {
        "id": 2500,
        "q": "“Según el libro “Neurociencias Neuroaprendizaje. Las emociones y el aprendizaje” ¿Cuántas neuronas se estima que contiene el cerebro humano?",
        "a": "100.000.000.000 Av. Arce No. 2147 - Teléfonos: (591-2) 2442144 - 2442074 Casilla de Correo: 3116 La Paz - Bolivia"
    }
];
