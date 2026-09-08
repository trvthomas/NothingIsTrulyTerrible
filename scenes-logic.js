function goToScene(sceneId) {
    const scene = scenes.find(scene => scene.id === sceneId);

    openLoader();
    buildScene(scene);
    preloadAssets(scene).then(() => {
        //startAudioEffects(scene);
        closeLoader();
    });
}

function buildScene(scene) {
    document.documentElement.style.setProperty('--scene-dark-color', scene.darkColor);
    document.documentElement.style.setProperty('--scene-light-color', scene.lightColor);

    const parallaxScene = document.getElementById('main-scene');
    parallaxScene.innerHTML = '';

    // Background
    const backgroundLayer = document.createElement('div');
    backgroundLayer.className = 'movable-layer';
    backgroundLayer.dataset.depth = 0;

    const backgroundImg = document.createElement('img');
    backgroundImg.src = `./assets/backgrounds/scene-${scene.id}.png`; //PENDING: Change to WEBP
    backgroundImg.alt = "";
    backgroundImg.draggable = false;
    backgroundImg.className = 'scene-background';
    backgroundLayer.appendChild(backgroundImg);

    parallaxScene.appendChild(backgroundLayer);

    // Elements
    scene.elements.forEach(element => {
        const elementLayer = document.createElement('div');
        elementLayer.className = 'movable-layer';
        elementLayer.dataset.depth = element.depth;

        const elementImg = document.createElement('img');
        elementImg.src = `./assets/elements/${element.asset}`;
        elementImg.alt = "";
        elementImg.draggable = false;
        elementImg.style.position = 'absolute';
        elementImg.style.top = `${element.top}%`;
        elementImg.style.left = `${element.left}%`;
        elementImg.style.width = `${element.width}%`;
        elementLayer.appendChild(elementImg);

        parallaxScene.appendChild(elementLayer);
    });

    // Text and buttons
    const textLayer = document.createElement('div');
    textLayer.className = `movable-layer text-layer ${scene.textLayout}`;
    textLayer.dataset.depth = 0;

    const textLayerContent = document.createElement('div');
    textLayerContent.className = 'layer-content';

    const textLayerTitle = document.createElement('h1');
    textLayerTitle.textContent = scene.title;

    const textLayerDescription = document.createElement('p');
    textLayerDescription.textContent = scene.description;

    textLayerContent.appendChild(textLayerTitle);
    textLayerContent.appendChild(textLayerDescription);

    if (scene.buttons && scene.buttons.length > 0) {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';

        scene.buttons.forEach(btn => {
            const button = document.createElement('button');
            const buttonTextSpan = document.createElement('span');
            buttonTextSpan.textContent = btn.text;
            button.appendChild(buttonTextSpan);

            if (btn.icon) {
                const buttonIconSpan = document.createElement('span');
                buttonIconSpan.className = 'button-icon';
                const icon = document.createElement('i');
                icon.className = `fa-solid fa-${btn.icon}`;
                buttonIconSpan.appendChild(icon);
                button.appendChild(buttonIconSpan);
            }

            button.addEventListener('click', () => goToScene(btn.toScene));
            buttonsContainer.appendChild(button);
        });

        textLayerContent.appendChild(buttonsContainer);
    }

    textLayer.appendChild(textLayerContent);
    parallaxScene.appendChild(textLayer);

    // Frame
    const frameLayer = document.createElement('div');
    frameLayer.className = 'movable-layer';
    frameLayer.dataset.depth = 0;

    const frameImg = document.createElement('img');
    frameImg.src = `./assets/frames/scene-${scene.id}.png`; //PENDING: Change to WEBP
    frameImg.alt = "";
    frameImg.draggable = false;
    frameImg.className = 'scene-frame';
    frameLayer.appendChild(frameImg);

    parallaxScene.appendChild(frameLayer);

    // Reinitialize Parallax
    if (parallaxInstance) {
        parallaxInstance.destroy();
    }

    scene = document.getElementById('main-scene');
    parallaxInstance = new Parallax(scene, parallaxOptions);
}

function preloadAssets(scene) {
    const assets = [
        `./assets/backgrounds/scene-${scene.id}.png`,
        `./assets/frames/scene-${scene.id}.png`,
        ...scene.elements.map(element => `./assets/elements/${element.asset}`)
    ];

    return Promise.all(assets.map(src => {
        return new Promise(resolve => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = src;
        });
    }));
}