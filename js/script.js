function visibleBurger() {
    const dropdownMenu = document.querySelector('header>div')
    // Mendapatkan nilai atribut "visibility"
    const visibilityValue = getComputedStyle(dropdownMenu).getPropertyValue("visibility")
    if (visibilityValue == 'hidden') {
        dropdownMenu.style.visibility = 'visible'
        dropdownMenu.style.maxHeight = '200px'
    } else if (visibilityValue == 'visible') {
        // dropdownMenu.style.visibility = 'hidden'
        dropdownMenu.style.maxHeight = '0'
        setTimeout(function () {
            dropdownMenu.style.visibility = 'hidden';
        }, 500);

    }
}

let burger = document.querySelector('header>svg')
burger.addEventListener('click', function (event) {
    event.preventDefault()
    visibleBurger()
}) 