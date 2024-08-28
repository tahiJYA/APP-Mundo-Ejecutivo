
document.addEventListener('DOMContentLoaded', function() {
    const modoDia = document.getElementById('modoDia');
    const modoNoche = document.getElementById('modoNoche');

    // Verifica el modo guardado en el localStorage o por defecto en 'modo-dia'
    const modoActual = localStorage.getItem('modo') || 'modo-dia';
    console.log('Modo actual:', modoActual); // Imprime el modo actual
    document.body.classList.add(modoActual);

    // Cambia el modo a 'modo-dia'
    modoDia.addEventListener('click', function() {
        console.log('Modo Día seleccionado'); // Imprime cuando se selecciona modo Día
        document.body.classList.remove('modo-noche');
        document.body.classList.add('modo-dia');
        localStorage.setItem('modo', 'modo-dia');
    });

    // Cambia el modo a 'modo-noche'
    modoNoche.addEventListener('click', function() {
        console.log('Modo Noche seleccionado'); // Imprime cuando se selecciona modo Noche
        document.body.classList.remove('modo-dia');
        document.body.classList.add('modo-noche');
        localStorage.setItem('modo', 'modo-noche');
    });

    // Verifica si los elementos fueron encontrados
    console.log('modoDia:', modoDia); // Imprime el elemento con id 'modoDia'
    console.log('modoNoche:', modoNoche); // Imprime el elemento con id 'modoNoche'
});


document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
    }
});


function voltear(){
    document.getElementById('').className="clase_voltear"
}


function goBack() {
    window.history.back();
}