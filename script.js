document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATOS DE PREGUNTAS Y SOLUCIONES ---

    // Array con las 30 preguntas
    const questions = [
        // 0 (Casilla 2)
        '<h4>Instrucciones: Decide si la frase es "Correcta" o "Incorrecta". Si es incorrecta, escribe la corrección.</h4><p>"Para fortalecer los brazos, va muy bien practicar natación."</p>',
        // 1 (Casilla 3)
        '<h4>Instrucciones: Completa la frase con la forma correcta del imperativo afirmativo del verbo entre paréntesis.</h4><p>(usted, a un paciente) Para la piel irritada, ______ (usar) este tónico de tomillo.</p>',
        // 2 (Casilla 4)
        '<h4>Instrucciones: Responde a la situación dando un consejo, como se indica.</h4><p>(Situación) Un amigo te dice: "Últimamente siempre estoy cansado y creo que tengo anemia".<br>(Tarea) Dale un consejo usando "deberías".</p>',
        // 3 (Casilla 5)
        '<h4>Instrucciones: Completa la frase con la forma correcta del imperativo afirmativo del verbo entre paréntesis.</h4><p>(tú, a un amigo) Si te duelen los pies, ______ (poner, los pies) en alto.</p>',
        // 4 (Casilla 6)
        '<h4>Instrucciones: Decide si la frase es "Correcta" o "Incorrecta". Si es incorrecta, escribe la corrección.</h4><p>"Me duele mucho los oídos."</p>',
        // 5 (Casilla 7)
        '<h4>Instrucciones: Responde a la situación dando un consejo, como se indica.</h4><p>(Situación) Tu hermana se muerde mucho las uñas.<br>(Tarea) Dale un consejo usando el imperativo (tú).</p>',
        // 6 (Casilla 8)
        '<h4>Instrucciones: Completa la frase con la forma correcta del imperativo afirmativo del verbo entre paréntesis.</h4><p>(vosotros, a un grupo) Chicos, ______ (beber) mucha agua para hidrataros.</p>',
        // 7 (Casilla 9)
        '<h4>Instrucciones: Decide si la frase es "Correcta" o "Incorrecta". Si es incorrecta, escribe la corrección.</h4><p>"Estoy de Bilbao, pero ahora soy en Madrid."</p>',
        // 8 (Casilla 10)
        '<h4>Instrucciones: Responde a la situación dando un consejo, como se indica.</h4><p>(Situación) Un compañero de trabajo pasa 12 horas al día delante del ordenador.<br>(Tarea) Dale un consejo usando "tienes que".</p>',
        // 9 (Casilla 11)
        '<h4>Instrucciones: Completa la frase con la forma correcta del imperativo afirmativo del verbo entre paréntesis.</h4><p>(tú, a un compañero) ______ (hacer) deporte para fortalecer la espalda.</p>',
        // 10 (Casilla 12)
        '<h4>Instrucciones: Decide si la frase es "Correcta" o "Incorrecta". Si es incorrecta, escribe la corrección.</h4><p>"Mi hermano está muy nervioso porque es haciendo un máster."</p>',
        // 11 (Casilla 13)
        '<h4>Instrucciones: Responde a la situación dando un consejo, como se indica.</h4><p>(Situación) Una amiga tiene la piel muy seca e irritada.<br>(Tarea) Dale un consejo usando "puedes".</p>',
        // 12 (Casilla 14)
        '<h4>Instrucciones: Completa la frase con la forma correcta del imperativo afirmativo del verbo entre paréntesis.</h4><p>(tú, a tu pareja) ______ (desmaquillarse) antes de ir a dormir.</p>',
        // 13 (Casilla 15)
        '<h4>Instrucciones: Decide si la frase es "Correcta" o "Incorrecta". Si es incorrecta, escribe la corrección.</h4><p>"No es bueno usar ropa muy ajustada porque es mala para la circulación."</p>',
        // 14 (Casilla 16)
        '<h4>Instrucciones: Responde a la situación dando un consejo, como se indica.</h4><p>(Situación) Tu padre te dice: "Me cuesta mucho conciliar el sueño por la noche".<br>(Tarea) Dale un consejo usando la estructura "Lo mejor es...".</p>',
        // 15 (Casilla 17)
        '<h4>Instrucciones: Completa la frase con la forma correcta del imperativo afirmativo del verbo entre paréntesis.</h4><p>(usted, a una persona mayor) ______ (caminar) 30 minutos al día, es bueno para la circulación.</p>',
        // 16 (Casilla 18)
        '<h4>Instrucciones: Decide si la frase es "Correcta" o "Incorrecta". Si es incorrecta, escribe la corrección.</h4><p>"Para el dolor de garganta, bebe té con limón. Es un remedio eficaz."</p>',
        // 17 (Casilla 19)
        '<h4>Instrucciones: Responde a la situación dando un consejo, como se indica.</h4><p>(Situación) Un amigo quiere dejar de fumar.<br>(Tarea) Dale un consejo usando "deberías".</p>',
        // 18 (Casilla 20)
        '<h4>Instrucciones: Completa la frase con la forma correcta del imperativo afirmativo del verbo entre paréntesis.</h4><p>¿Les duele la cabeza? Entonces ______ (tomar) paracetamol y en 30 minutos van a estar bien.</p>',
        // 19 (Casilla 21)
        '<h4>Instrucciones: Decide si la frase es "Correcta" o "Incorrecta". Si es incorrecta, escribe la corrección.</h4><p>"Usted, ¡se lava bien los pies con este tónico!"</p>',
        // 20 (Casilla 22)
        '<h4>Instrucciones: Responde a la situación dando un consejo, como se indica.</h4><p>(Situación) Alguien sufre de estrés.<br>(Tarea) Dale un consejo usando "Va (muy) bien...".</p>',
        // 21 (Casilla 23)
        '<h4>Instrucciones: Completa la frase con la forma correcta del imperativo afirmativo del verbo entre paréntesis.</h4><p>(tú, receta de cocina) ______ (hervir) el agua con las hojas de ortiga durante 10 minutos.</p>',
        // 22 (Casilla 24)
        '<h4>Instrucciones: Decide si la frase es "Correcta" o "Incorrecta". Si es incorrecta, escribe la corrección.</h4><p>"El yoga es muy bueno para combatir el estrés."</p>',
        // 23 (Casilla 25)
        '<h4>Instrucciones: Responde a la situación dando un consejo, como se indica.</h4><p>(Situación) Tu amigo está afónico.<br>(Tarea) Dale un consejo usando el imperativo (usted).</p>',
        // 24 (Casilla 26)
        '<h4>Instrucciones: Completa la frase con la forma correcta del imperativo afirmativo del verbo entre paréntesis.</h4><p>(ustedes, el médico a los pacientes) Si tienen tos, ______ (tomar) esta infusión de anís.</p>',
        // 25 (Casilla 27)
        '<h4>Instrucciones: Decide si la frase es "Correcta" o "Incorrecta". Si es incorrecta, escribe la corrección.</h4><p>"Tú, ¡comes más frutas y verduras para tener un pelo sano!"</p>',
        // 26 (Casilla 28)
        '<h4>Instrucciones: Responde a la situación dando un consejo, como se indica.</h4><p>(Situación) Una amiga tiene dolor de espalda.<br>(Tarea) Dale un consejo usando "Lo mejor es...".</p>',
        // 27 (Casilla 29)
        '<h4>Instrucciones: Completa la frase con la forma correcta del imperativo afirmativo del verbo entre paréntesis.</h4><p>(vosotros, receta de mascarilla) ______ (mezclar) el aguacate con el yogur y luego ______ (ponerse) la pasta en los pies.</p>',
        // 28 (Casilla 30)
        '<h4>Instrucciones: Decide si la frase es "Correcta" o "Incorrecta". Si es incorrecta, escribe la corrección.</h4><p>"Cristóbal está muy ocupado y un poco estresado."</p>',
        // 29 (Casilla 31)
        '<h4>Instrucciones: Responde a la situación dando un consejo, como se indica.</h4><p>(Situación) Un amigo tiene dolor de estómago después de una comida pesada.<br>(Tarea) Dale un consejo usando "Puedes...".</p>'
    ];

    // NUEVO: Array con las 30 soluciones en orden
    const solutions = [
        "<b>Correcta.</b>", // Casilla 2
        "<b>use</b>", // Casilla 3
        "<b>(Ejemplo) Deberías</b> comer alimentos ricos en hierro.", // Casilla 4
        "<b>ponlos</b>", // Casilla 5
        "<b>Incorrecta.</b> Corrección: Me <b>duelen</b> mucho los oídos.", // Casilla 6
        "<b>(Ejemplo) ¡Intenta</b> usar un esmalte especial!", // Casilla 7
        "<b>bebed</b>", // Casilla 8
        "<b>Incorrecta.</b> Corrección: <b>Soy</b> de Bilbao, pero ahora <b>estoy</b> en Madrid.", // Casilla 9
        "<b>(Ejemplo) Tienes que</b> levantarte cada hora y caminar un poco.", // Casilla 10
        "<b>haz</b>", // Casilla 11
        "<b>Incorrecta.</b> Corrección: Mi hermano está muy nervioso porque <b>está</b> haciendo un máster.", // Casilla 12
        "<b>(Ejemplo) Puedes</b> ponerte crema hidratante todos los días.", // Casilla 13
        "<b>Desmaquíllate</b>", // Casilla 14
        "<b>Correcta.</b>", // Casilla 15
        "<b>(Ejemplo) Lo mejor es</b> tomar una infusión de tomillo antes de dormir.", // Casilla 16
        "<b>Camine</b>", // Casilla 17
        "<b>Correcta.</b>", // Casilla 18
        "<b>(Ejemplo) Deberías</b> dejar de fumar, es malo para la salud.", // Casilla 19
        "<b>tomen</b>", // Casilla 20
        "<b>Incorrecta.</b> Corrección: ¡<b>Lávese</b> bien los pies con este tónico!", // Casilla 21
        "<b>(Ejemplo) Va muy bien</b> hacer deporte o dormir 8 horas.", // Casilla 22
        "<b>Hierve</b>", // Casilla 23
        "<b>Correcta.</b>", // Casilla 24
        "<b>(Ejemplo) ¡Tome</b> una infusión de tomillo con miel!", // Casilla 25
        "<b>tomen</b>", // Casilla 26
        "<b>Incorrecta.</b> Corrección: ¡<b>Come</b> (tú) más frutas y verduras...!", // Casilla 27
        "<b>(Ejemplo) Lo mejor es</b> practicar natación o cuidar la postura.", // Casilla 28
        "<b>Mezclad</b>, <b>poneos</b>", // Casilla 29
        "<b>Correcta.</b>", // Casilla 30
        "<b>(Ejemplo) Puedes</b> tomar una infusión de tomillo." // Casilla 31
    ];

    // --- 2. SELECCIÓN DE ELEMENTOS DEL DOM ---
    const questionButtons = document.querySelectorAll('.question-btn');
    const modal = document.getElementById('popup-modal');
    const closeModalBtn = document.getElementById('close-btn');
    const questionContent = document.getElementById('question-content');
    
    const dice = document.getElementById('dice');
    const diceFace = document.getElementById('dice-face');
    const pawns = document.querySelectorAll('.pawn');
    const dropZones = document.querySelectorAll('.square, .pawn-box');
    
    // NUEVO: Selectores para el modal de respuestas
    const answersBtn = document.getElementById('answers-btn');
    const answersModal = document.getElementById('answers-modal');
    const closeAnswersBtn = document.getElementById('close-answers-btn');
    const answersList = document.getElementById('answers-list');
    
    // --- 3. LÓGICA DEL MODAL DE PREGUNTAS ---
    const openModal = (questionIndex) => {
        if (questions[questionIndex]) {
            questionContent.innerHTML = questions[questionIndex];
            modal.classList.add('active');
        }
    };
    const closeModal = () => {
        modal.classList.remove('active');
    };

    questionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.dataset.questionIndex;
            openModal(index);
        });
    });

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // --- 4. LÓGICA DEL DADO (Actualizada) ---
    const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']; // Caras 1-6

    const rollDice = () => {
        const resultIndex = Math.floor(Math.random() * 6); // 0-5
        diceFace.textContent = diceFaces[resultIndex];
    };

    dice.addEventListener('click', rollDice);

    // --- 5. LÓGICA DE ARRASTRAR Y SOLTAR (Sin cambios) ---
    let draggedPawn = null;

    pawns.forEach(pawn => {
        pawn.addEventListener('dragstart', (e) => {
            draggedPawn = e.target;
            setTimeout(() => e.target.classList.add('dragging'), 0);
        });
        pawn.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
            draggedPawn = null;
        });
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            if (draggedPawn) {
                const dropTarget = e.target.closest('.square, .pawn-box');
                if (dropTarget) {
                    dropTarget.appendChild(draggedPawn);
                }
            }
        });
    });

    // --- 6. NUEVO: LÓGICA DEL MODAL DE RESPUESTAS ---
    let answersGenerated = false;

    const showAnswers = () => {
        // Genera la lista de respuestas solo una vez
        if (!answersGenerated) {
            solutions.forEach((solution) => {
                const li = document.createElement('li');
                li.innerHTML = solution; // 'solution' ya incluye el HTML
                answersList.appendChild(li);
            });
            answersGenerated = true;
        }
        // Muestra el modal
        answersModal.classList.add('active');
    };

    const closeAnswersModal = () => {
        answersModal.classList.remove('active');
    };

    // Eventos para el modal de respuestas
    answersBtn.addEventListener('click', showAnswers);
    closeAnswersBtn.addEventListener('click', closeAnswersModal);
    answersModal.addEventListener('click', (e) => {
        if (e.target === answersModal) {
            closeAnswersModal();
        }
    });

});
