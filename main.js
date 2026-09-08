let scene, parallaxInstance;
const parallaxOptions = {
    selector: '.movable-layer',
    //onReady: closeLoader
}

document.addEventListener('DOMContentLoaded', () => {
    goToScene("1");
});

const loader = document.getElementById('loader');
function openLoader() {
    loader.classList.remove('fade-out');
    loader.style.display = 'block';
}

function closeLoader() {
    loader.classList.add('fade-out');

    loader.addEventListener('animationend', () => {
        loader.style.display = 'none';
    }, { once: true });
}