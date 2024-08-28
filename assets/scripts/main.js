AOS.init();

var coverflow = $("#coverflow").flipster({
    itemContainer: 'ul',
    // [string|object]
    // Selector for the container of the flippin' items.

    itemSelector: 'li',
    // [string|object]
    // Selector for children of `itemContainer` to flip

    start: 'center',
    // ['center'|number]
    // Zero based index of the starting item, or use 'center' to start in the middle

    fadeIn: 400,
    // [milliseconds]
    // Speed of the fade in animation after items have been setup

    loop: true,
    // [true|false]
    // Loop around when the start or end is reached

    autoplay: 5000,
    // [false|milliseconds]
    // If a positive number, Flipster will automatically advance to next item after that number of milliseconds

    pauseOnHover: true,
    // [true|false]
    // If true, autoplay advancement will pause when Flipster is hovered

    style: 'coverflow',
    // [coverflow|carousel|flat|...]
    // Adds a class (e.g. flipster--coverflow) to the flipster element to switch between display styles
    // Create your own theme in CSS and use this setting to have Flipster add the custom class

    spacing: -0.6,
    // [number]
    // Space between items relative to each item's width. 0 for no spacing, negative values to overlap

    click: true,
    // [true|false]
    // Clicking an item switches to that item

    keyboard: true,
    // [true|false]
    // Enable left/right arrow navigation

    scrollwheel: true,
    // [true|false]
    // Enable mousewheel/trackpad navigation; up/left = previous, down/right = next

    touch: true,
    // [true|false]
    // Enable swipe navigation for touch devices

    nav: false,
    // [true|false|'before'|'after']
    // If not false, Flipster will build an unordered list of the items
    // Values true or 'before' will insert the navigation before the items, 'after' will append the navigation after the items

    buttons: false,
    // [true|false|'custom']
    // If true, Flipster will insert Previous / Next buttons with SVG arrows
    // If 'custom', Flipster will not insert the arrows and will instead use the values of `buttonPrev` and `buttonNext`

    buttonPrev: 'Previous',
    // [text|html]
    // Changes the text for the Previous button

    buttonNext: 'Next',
    // [text|html]
    // Changes the text for the Next button

    onItemSwitch: false
        // [function]
        // Callback function when items are switched
        // Arguments received: [currentItem, previousItem]
});

var myFlipster = $('.my-flipster').flipster(); // It's best to store the element as a variable for easy reference.

myFlipster.flipster('next'); // Next item
myFlipster.flipster('prev'); // Previous item
myFlipster.flipster('jump', 0); // Jump to a specific index
myFlipster.flipster('jump', $('.my-item')); // Jump to a specific item
myFlipster.flipster('play'); // Resume autoplay
myFlipster.flipster('play', 5000); // Set autoplay duration
myFlipster.flipster('pause'); // Pause the autoplay until next jump
myFlipster.flipster('stop'); // Stop the autoplay entirely
myFlipster.flipster('index'); // If items are added or removed, you can tell Flipster to reindex



document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});


function actualizarContador() {
    const ahora = new Date();
    const proximoDiciembre = new Date(ahora.getFullYear(), 11, 1);

    if (ahora.getMonth() === 11) {
        proximoDiciembre.setFullYear(ahora.getFullYear() + 1);
    }

    const diferencia = proximoDiciembre - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
}

actualizarContador();
setInterval(actualizarContador, 60000); // Actualiza el contador cada minuto



document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
    }
});





function goBack() {
    window.history.back();
}