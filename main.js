let parallaxSceneDiv, parallaxInstance;
const parallaxOptions = {
    selector: '.movable-layer'
}

const visualWarning = document.getElementById('sensory');
document.addEventListener('DOMContentLoaded', () => {
    const restoreProgress = localStorage.getItem("last-scene");
    const isValidScene = scenes.some(scene => scene.id === restoreProgress);

    goToScene(isValidScene ? restoreProgress : "1");

    const visualWarningAccepted = localStorage.getItem("visual-warning-accepted");
    if (visualWarningAccepted) {
        visualWarning.style.display = 'none';
    }
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

function enterExperience() {
    localStorage.setItem("visual-warning-accepted", true);
    visualWarning.classList.add('fade-out');

    visualWarning.addEventListener('animationend', () => {
        visualWarning.style.display = 'none';
    }, { once: true });
}