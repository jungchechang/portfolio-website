document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('menu').addEventListener('click', toggleMenu);
    document.getElementById('nav-items').addEventListener('click', closeMenu);
    window.addEventListener('resize', resetStatus);
});

function toggleMenu() {
    let navbar = document.getElementById('navbar');
    if (navbar.classList.contains('visible')) {
        navbar.classList.remove('visible');
        navbar.classList.add('invisible');
        document.getElementById('main-container').classList.remove('blur');
    }
    else if (navbar.classList.contains('invisible')) {
        navbar.classList.remove('invisible');
        navbar.classList.add('visible');
        document.getElementById('main-container').classList.add('blur');
    }
    else {
        navbar.classList.add("visible");
        document.getElementById('main-container').classList.add('blur');
    }
    console.log("Done");
    //if (window.getComputedStyle(navbar).getPropertyValue('opacity') == 0) {
    //    navbar.style.opacity = 1;
    //}
    //else {
    //    navbar.style.opacity = 0;
    //}
    //console.log('Hello');
}

function closeMenu() {
    let menu = document.getElementById('menu');
    if (navbar.classList.contains('visible')) {
        navbar.classList.remove('visible');
        navbar.classList.add('invisible');
        document.getElementById('main-container').classList.remove('blur');
    }
}

function resetStatus() {
    let navbar = document.getElementById('navbar');
    if (navbar.classList.contains('invisible')) {
        navbar.classList.remove('invisible');
    }
}
