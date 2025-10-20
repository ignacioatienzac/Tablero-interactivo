document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATOS DE PREGUNTAS ---
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

    // --- 2. SELECCIÓN DE ELEMENTOS DEL DOM ---
    const questionButtons = document.querySelectorAll('.question-btn');
    const modal = document.getElementById('popup-modal');
    const closeModalBtn = document.getElementById('close-btn');
    const questionContent = document.getElementById('question-content');
    const dice = document.getElementById('dice');
    const diceFace = document.getElementById('dice-face');
    const pawns = document.querySelectorAll('.pawn');
    const dropZones = document.querySelectorAll('.square, .pawn-box'); // Zonas para soltar fichas
    
    // --- 3. LÓGICA DE LA VENTANA MODAL (POP-UP) ---

    // Función para abrir el modal con la pregunta correcta
    const openModal = (questionIndex) => {
        if (questions[questionIndex]) {
            questionContent.innerHTML = questions[questionIndex];
            modal.classList.add('active');
        }
    };

    // Función para cerrar el modal
    const closeModal = () => {
        modal.classList.remove('active');
    };

    // Asignar evento a cada botón de pregunta
    questionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.dataset.questionIndex;
            openModal(index);
        });
    });

    // Eventos para cerrar el modal
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        // Cierra si se hace clic en el fondo oscuro
        if (e.target === modal) {
            closeModal();
        }
    });

    // --- 4. LÓGICA DEL DADO ---
    const rollDice = () => {
        const result = Math.floor(Math.random() * 6) + 1;
        diceFace.textContent = result;
    };

    dice.addEventListener('click', rollDice);

    // --- 5. LÓGICA DE ARRASTRAR Y SOLTAR (DRAG & DROP) ---
    
    let draggedPawn = null;

    // Eventos para las fichas (elementos arrastrables)
    pawns.forEach(pawn => {
        pawn.addEventListener('dragstart', (e) => {
            draggedPawn = e.target; // Guarda la ficha que se está arrastrando
            setTimeout(() => e.target.classList.add('dragging'), 0);
        });

        pawn.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
            draggedPawn = null;
        });
    });

    // Eventos para las zonas de destino (casillas y caja de inicio)
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault(); // Permite que se pueda soltar
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            if (draggedPawn) {
                // 'e.target' puede ser la casilla o una ficha ya dentro.
                // Usamos 'closest' para asegurar que siempre apuntamos a la casilla.
                const dropTarget = e.target.closest('.square, .pawn-box');
                if (dropTarget) {
                    dropTarget.appendChild(draggedPawn);
                }
            }
        });
    });

});
