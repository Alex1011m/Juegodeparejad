// Shared challenges data for the game (niveles reordenados para sanación)
// Objetivo: niveles 1 y 2 = preguntas lindas y de sanación (adecuadas para fácil/medio)
// Nivel 3 = preguntas avanzadas/sexuales (solo para difícil)
// 'couple' = ejercicios en pareja centrados en conexión y reparación emocional
(function () {
    window.CHALLENGES = {
        1: [
            // Preguntas lindas y de apertura emocional suave (sanación leve)
            "¿Cuál es el recuerdo más gracioso que tienen juntos?",
            "Si pudieran viajar a cualquier lugar del mundo ahora mismo, ¿a dónde irían?",
            "Si tuvieras que describir su risa con una palabra, ¿cuál sería?",
            "¿Cuál es una canción que les recuerda el uno al otro?",
            "¿Qué superpoder elegirían tener juntos?",
            "Si pudieran pasar un día sin responsabilidades, ¿qué harían?",
            "¿Cuál es el mejor regalo que le has dado?",
            "¿Qué les hizo darse cuenta de que querían estar juntos?",
            "¿Qué es algo que has aprendido de tu pareja?",
            "Nombra tres cosas pequeñas que tu pareja hace y que te alegran el día.",
            "Dile a tu pareja una cualidad suya que te inspira.",
            "Escribe una pequeña lista de tres sueños juntos (pueden ser simples).",
            "Dense un abrazo largo y cálido.",
            "Mírate a los ojos durante 30 segundos sin decir nada.",
            "Escribe algo bonito en la mano de tu pareja con tu dedo.",
            "Describe un gesto cotidiano de tu pareja que te parece adorable.",
            "¿Qué olor te recuerda a tu pareja y por qué?",
            "Nombra una película o serie que te guste ver con tu pareja y por qué la disfrutan juntos.",
            "¿Cuál fue la primera cosa que te hizo confiar en tu pareja?",
            "¿Cuál es la forma más simple de hacerte feliz?",
            "¿Qué es algo que admiras profundamente de tu pareja?",
            "¿Qué palabra o apodo te encanta que te diga tu pareja?"
        ],
        2: [
            // Preguntas de conexión profunda y sanación (apropiadas para nivel medio)
            "Describan el momento más significativo donde se sintieron apoyados el uno por el otro.",
            { type: 'pregunta', text: "¿Qué te hace sentir seguro/a cuando estás con tu pareja?", tag: 'sanacion' },
            { type: 'pregunta', text: "Cuéntale a tu pareja algo que aún no le has dicho pero que te hace sentir vulnerable al recordarlo.", tag: 'sanacion' },
            { type: 'pregunta', text: "¿Hay algo del pasado que sientas que todavía te afecta y quisieras compartir?", tag: 'sanacion' },
            { type: 'pregunta', text: "¿Qué necesitas de mí cuando te sientes vulnerable?", tag: 'sanacion' },
            { type: 'pregunta', text: "¿Cuál fue la última vez que te sentiste herido/a por algo mío y cómo te gustaría que lo manejáramos?", tag: 'sanacion' },
            { type: 'pregunta', text: "Nombra una expectativa no dicha que crees que tenemos el uno del otro.", tag: 'sanacion' },
            "Describan una tradición pequeña que quieran empezar como pareja.",
            "¿Qué detalle romántico te gustaría recibir esta semana?",
            "Si escribieras una tarjeta de amor ahora mismo, ¿qué frase pondrías?",
            { type: 'pregunta', text: "¿Qué te ayuda a perdonar cuando te sientes dolido/a?", tag: 'sanacion' },
            { type: 'pregunta', text: "Compartan una inseguridad que tengan y cómo la pareja puede apoyarles.", tag: 'sanacion' },
            "Nombra algo que tu pareja hace y que te inspira a ser mejor.",
            "Cuéntale a tu pareja por qué un día contigo le resultaría especial.",
            "Describan con tres palabras cómo se sienten cuando se sienten amados.",
            { type: 'pregunta', text: "Digan en voz alta una cosa por la que están agradecidos hoy relacionados con la relación.", tag: 'sanacion' },
            { type: 'pregunta', text: "Háblense de una decisión importante que tomaron y por qué la tomaron juntos.", tag: 'sanacion' },
            { type: 'pregunta', text: "¿Qué hábito pequeño te gustaría que incorporáramos para mejorar nuestra convivencia?", tag: 'sanacion' },
            // Nuevas preguntas que abordan inseguridades y temas más profundos (tag: sanacion)
            { type: 'pregunta', text: "¿Qué situación o comentario reciente te hizo sentir inseguro/a en la relación?", tag: 'sanacion' },
            { type: 'pregunta', text: "¿Hay algo que yo diga o haga que te haga dudar de mi amor?", tag: 'sanacion' },
            { type: 'pregunta', text: "¿Qué miedo recurrente aparece en tu cabeza cuando piensas en nuestro futuro juntos?", tag: 'sanacion' },
            { type: 'pregunta', text: "Cuando te sientes rechazado/a, ¿qué sueles pensar y qué necesitas que haga por ti en ese momento?", tag: 'sanacion' },
            { type: 'pregunta', text: "¿Qué señales o acciones te ayudan a sentirte seguro/a conmigo?", tag: 'sanacion' },
            { type: 'pregunta', text: "¿Hay límites personales tuyos que te gustaría que defendiera más por ti?", tag: 'sanacion' },
            { type: 'pregunta', text: "¿Qué tema evitas hablar por vergüenza o miedo y crees que podríamos abordar con cariño?", tag: 'sanacion' },
            { type: 'pregunta', text: "¿Cuál es la crítica que más te cala y cómo te gustaría que la trabajáramos juntos?", tag: 'sanacion' },
            { type: 'pregunta', text: "Cuando te sientes inseguro/a, ¿qué puedo decir o hacer para apoyarte sin presionarte?", tag: 'sanacion' },
            { type: 'pregunta', text: "¿Qué necesitas que cambie de mi parte para que te sientas más aceptado/a y valorado/a?", tag: 'sanacion' }
        ],
        3: [
            // Preguntas avanzadas / sexuales — solo para nivel difícil
            "Describe un lugar inesperado donde les gustaría tener una cita atrevida.",
            "¿Cuál ha sido la fantasía más intensa que has tenido y te gustaría explorar con confianza?",
            "Si ambos están de acuerdo, ¿qué te gustaría experimentar en la intimidad que aún no han probado?",
            "¿Qué límites personales quieres que respetemos si exploramos algo nuevo juntos?",
            "Describe una escena que sirva como preludio perfecto para una noche íntima.",
            "Si tuvieras que nombrar una fantasía compartida, ¿cuál sería y por qué?",
            "¿Qué te hace sentir más deseado/a y conectado/a durante el sexo?",
            "¿Hay algo relacionado con la intimidad que te gustaría que habláramos más abiertamente?",
            "¿Qué pequeñas acciones durante el día hacen que te sientas más atraído/a por mí?"
        ],
        couple: [
            // Ejercicios en pareja centrados en conexión, escucha y reparación
            { type: 'pregunta', text: 'Compartan un error que hayan cometido en la relación y pidan perdón de forma sincera.', level: 'Pareja' },
            { type: 'pregunta', text: 'Cada uno nombre una cosa que le gustaría que la otra persona cambiara para mejorar la relación (hablen con calma).', level: 'Pareja' },
            { type: 'reto', text: 'Dense un abrazo de 60 segundos y luego díganse algo que admiren del otro.', level: 'Pareja' },
            { type: 'pregunta', text: 'Nombren tres cosas que cada uno hace y que hacen al otro sentirse amado.', level: 'Pareja' },
            { type: 'reto', text: 'Escriban una pequeña nota de gratitud y léanla en voz alta.', level: 'Pareja' },
            { type: 'pregunta', text: '¿Qué necesitas de mí para sentirte más seguro/a en esta relación?', level: 'Pareja' }
        ]
    };
})();
