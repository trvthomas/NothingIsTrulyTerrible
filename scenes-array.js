const scenes = [
    {
        id: "1",
        darkColor: "#410B0B",
        lightColor: "#F1DFDA",
        immersiveColor: "#1D1E20",
        textLayout: "left",
        gradientWH: 50,
        title: "What if nothing is truly terrible?",
        description: "PENDING",
        hasAudio: false,
        elements: [
            { asset: "scene-1-b3.png", top: 35, left: 25, width: 78, depth: 0.2 },
            { asset: "scene-1-b2.png", top: 40, left: 25, width: 78, depth: 0.3 },
            { asset: "scene-1-b1.png", top: 45, left: 25, width: 78, depth: 0.4 },
            { asset: "scene-1-lightning.png", top: 0, left: 42, width: 32, depth: 0.1 },
            { asset: "scene-1-lightning.png", top: 2, left: 68, width: 32, depth: 0.1 },
        ],
        buttons: [
            { text: "Begin Journey", icon: "chevron-right", toScene: "2" },
            { text: "AI Usage", icon: "robot", toScene: "AI" }
        ]
    },
    {
        id: "AI",
        darkColor: "#005580",
        lightColor: "#CCEEFF",
        immersiveColor: "#F1DFDA",
        textLayout: "top",
        gradientWH: 40,
        title: "AI usage in this project",
        description: "I like to be fair and honest about the tools I used to create this project. Regarding Generative Artificial Intelligence (AI), I used it as follows, approximately of course: ...",
        hasAudio: false,
        elements: [],
        buttons: [
            { text: "Go Back", icon: "house", toScene: "1" }
        ]
    },
    {
        id: "2",
        darkColor: "#123454",
        lightColor: "#D5E6F6",
        immersiveColor: "#283B44",
        gradientWH: 55,
        textLayout: "center",
        title: "Inventions",
        description: "Coming straight of our own heads. Most suffering is just made up: a tangle of mental knots that look terrifying until we realize we tied them ourselves.",
        hasAudio: false,
        elements: [
            // Items
            { asset: "scene-2-item1.png", top: 24, left: 12, width: 12, depth: 0.36 },
            { asset: "scene-2-item4.png", top: 18, left: 49, width: 10, depth: 0.36 },
            { asset: "scene-2-item3.png", top: 23, left: 80, width: 8, depth: 0.36 },
            { asset: "scene-2-item2.png", top: 69, left: 13, width: 11, depth: 0.36 },
            { asset: "scene-2-item5.png", top: 77, left: 49, width: 9, depth: 0.36 },
            { asset: "scene-2-item6.png", top: 71, left: 82, width: 11, depth: 0.36 },

            // Tangles
            { asset: "scene-2-tangle1.png", top: 3, left: 10, width: 16, depth: 0.18 },
            { asset: "scene-2-tangle2.png", top: -2, left: 46, width: 16, depth: 0.18 },
            { asset: "scene-2-tangle3.png", top: 18, left: 76, width: 23, depth: 0.18 },
            { asset: "scene-2-tangle4.png", top: 57, left: 7, width: 23, depth: 0.18 },
            { asset: "scene-2-tangle5.png", top: 66, left: 42, width: 21, depth: 0.18 },
            { asset: "scene-2-tangle6.png", top: 58, left: 76, width: 23, depth: 0.18 },
        ],
        buttons: [
            { text: "How we trap ourselves?", toScene: "3a" }
        ]
    },
    {
        id: "3a",
        darkColor: "#2D4323",
        lightColor: "#E3EDDE",
        immersiveColor: "#001F18",
        textLayout: "left",
        gradientWH: 45,
        title: "Is the cage holding the monkey?",
        description: "Or is the monkey holding the cage? Hunters build cages for the banana, so the monkey gets trapped by itself, making it easier to hunt them.",
        hasAudio: false,
        elements: [
            { asset: "scene-3ab-banana.png", top: 37, left: 51, width: 11, depth: 0.1 },
            { asset: "scene-3ab-banana.png", top: 40, left: 56, width: 10, depth: 0.1 },
            { asset: "scene-3ab-cage.png", top: 25, left: 47, width: 30, depth: 0.2 },
            { asset: "scene-3ab-net.png", top: 0, left: 76, width: 30, depth: 0.25 },
            { asset: "scene-3a-monkey.png", top: 46, left: 62, width: 30, depth: 0.25 }
        ],
        buttons: [
            { text: "Open the fist", toScene: "3b" }
        ]
    },
    {
        id: "3b",
        darkColor: "#5D651A",
        lightColor: "#F2F5D6",
        immersiveColor: "#002E22",
        textLayout: "left",
        gradientWH: 48,
        title: "The bait isn't worth the bars",
        description: "Every time we refuse to let go something, like a relationship or the need of approval, we trap ourselves in a mental cage that produces nothing but fears and anxiety.",
        hasAudio: false,
        elements: [
            { asset: "scene-3ab-banana.png", top: 37, left: 51, width: 11, depth: 0.1 },
            { asset: "scene-3ab-banana.png", top: 40, left: 56, width: 10, depth: 0.1 },
            { asset: "scene-3ab-cage.png", top: 25, left: 47, width: 30, depth: 0.2 },
            { asset: "scene-3ab-net.png", top: 30, left: 76, width: 30, depth: 0.25 },
            { asset: "scene-3b-monkey.png", top: 30, left: 38, width: 35, depth: 0.25 }
        ],
        buttons: [
            { text: "Next", toScene: "4a" }
        ]
    },
    {
        id: "4a",
        darkColor: "#7B561E",
        lightColor: "#F5E9D6",
        immersiveColor: "#CACBD0",
        textLayout: "top",
        gradientWH: 45,
        title: "Searching in the wrong place",
        description: "Happiness isn't missing. You're just looking for it at the wrong place. Giving up isn't a loss, it's the realization that you never needed those things to be happy.",
        hasAudio: false,
        elements: [
            { asset: "scene-4a-mountains.png", top: 10, left: -20, width: 140, depth: 0.18 },
            { asset: "scene-4a-silhouette.png", top: 60, left: 44, width: 8, depth: 0.3 },
        ],
        buttons: [
            { text: "Next", toScene: "4c" }
        ]
    },
    {
        id: "4c",
        darkColor: "#760B0A",
        lightColor: "#FBD1D0",
        immersiveColor: "#D3BC9D",
        textLayout: "top",
        gradientWH: 45,
        title: "Make room for something new",
        description: "In every situation, there's a new opportunity waiting to be seen. Renunciation clears the canvas, and creation fills it back with new challenges and meanings.",
        hasAudio: false,
        elements: [
            { asset: "scene-4c-frame-erasing.png", top: 40, left: 12, width: 25, depth: 0.1 },
            { asset: "scene-4c-eraser.png", top: 23, left: 26, width: 19, depth: 0.3 },
            { asset: "scene-4c-frame-drawing.png", top: 48, left: 50, width: 25, depth: 0.1 },
            { asset: "scene-4c-quill.png", top: 16, left: 66, width: 20, depth: 0.3 },
            { asset: "scene-4c-quillink.png", top: 69, left: 72, width: 8, depth: 0.15 }
        ],
        buttons: [
            { text: "Ready for a fresh start?", toScene: "5a" }
        ]
    },
    {
        id: "5a",
        darkColor: "#660066",
        lightColor: "#FFE6FF",
        immersiveColor: "#10467A",
        textLayout: "center",
        gradientWH: 54,
        title: "Life is a garden",
        description: "It's packed with a beautiful fruits. Nobody needs to own the garden to enjoy it. Just learn to notice what's already growing!",
        hasAudio: false,
        elements: [
            // Big
            { asset: "scene-5a-fruit1.png", top: 18, left: 12, width: 12, depth: 0.18 },
            { asset: "scene-5a-fruit4.png", top: 16, left: 78, width: 12, depth: 0.18 },
            { asset: "scene-5a-fruit2.png", top: 40, left: 9, width: 12, depth: 0.18 },
            { asset: "scene-5a-fruit3.png", top: 51, left: 80, width: 12, depth: 0.18 },
            { asset: "scene-5a-fruit5.png", top: 66, left: 16, width: 12, depth: 0.18 },
            { asset: "scene-5a-fruit6.png", top: 64, left: 65, width: 12, depth: 0.18 },
            // Small
            { asset: "scene-5a-fruit6.png", top: 14, left: 40, width: 6, depth: 0.3 },
            { asset: "scene-5a-fruit2.png", top: 21, left: 60, width: 5, depth: 0.4 },
            { asset: "scene-5a-fruit1.png", top: 19, left: 50, width: 5, depth: 0.4 },
            { asset: "scene-5a-fruit4.png", top: 65, left: 32, width: 5, depth: 0.4 },
            { asset: "scene-5a-fruit5.png", top: 26, left: 70, width: 6, depth: 0.3 },
            { asset: "scene-5a-fruit3.png", top: 18, left: 27, width: 5, depth: 0.4 },
            { asset: "scene-5a-fruit3.png", top: 71, left: 40, width: 6, depth: 0.3 },
            { asset: "scene-5a-fruit2.png", top: 70, left: 48, width: 5, depth: 0.4 },
            { asset: "scene-5a-fruit1.png", top: 74, left: 57, width: 5, depth: 0.4 },
        ],
        buttons: [
            { text: "Next", toScene: "6a" }
        ]
    },
    {
        id: "6a",
        darkColor: "#394360",
        lightColor: "#DFE2EC",
        immersiveColor: "#237DA2",
        textLayout: "right",
        gradientWH: 52,
        title: "How heavy is a glass of water?",
        description: "Hold it for a minute, no problem. Hold it for an hour, your arm starts to ache. Hold it all day, and you are paralyzed!",
        hasAudio: false,
        elements: [
            { asset: "scene-6a-droplet1.png", top: 18, left: 12, width: 10, depth: 0.6 },
            { asset: "scene-6a-droplet2.png", top: 20, left: 44, width: 12, depth: 0.5 },
            { asset: "scene-6a-droplet3.png", top: 42, left: 15, width: 12, depth: 0.5 },
            { asset: "scene-6a-droplet4.png", top: 68, left: 13, width: 10, depth: 0.6 },
            { asset: "scene-6a-glass.png", top: 32, left: 28, width: 14, depth: 0.2 },
            { asset: "scene-6a-hand.png", top: 43, left: 32, width: 38, depth: 0.4 }
        ],
        buttons: [
            { text: "Hold it longer", toScene: "6b" }
        ]
    },
    {
        id: "6b",
        darkColor: "#0C0D12",
        lightColor: "#E0E2EB",
        immersiveColor: "#0C0D12",
        textLayout: "right",
        gradientWH: 50,
        title: "The weight is self-inflicted",
        description: "Anxiety, rage, shame, and desperation. These feelings are common, but they aren't necessary, and carrying them around just drains your personal energy.",
        hasAudio: false,
        elements: [
            { asset: "scene-6b-droplet4.png", top: 53, left: 2, width: 35, depth: 0.2 },
            { asset: "scene-6b-droplet3.png", top: 28, left: 4, width: 30, depth: 0.2 },
            { asset: "scene-6b-droplet1.png", top: 55, left: 32, width: 38, depth: 0.2 },
            { asset: "scene-6b-droplet2.png", top: 22, left: 31, width: 36, depth: 0.2 },
            { asset: "scene-6b-glass.png", top: 32, left: 28, width: 14, depth: 0.6 },
            { asset: "scene-6b-hand.png", top: 43, left: 32, width: 38, depth: 0.8 }
        ],
        buttons: [
            { text: "Put the glass down", toScene: "6c" }
        ]
    },
    {
        id: "6c",
        darkColor: "#333333",
        lightColor: "#E6E6E6",
        immersiveColor: "##D7DFE0",
        textLayout: "right",
        gradientWH: 55,
        title: "Suddenly, the ache stops",
        description: "The moment your hand opens, you can feel the relief. Letting go doesn't break the glass, it just free you to move again.",
        hasAudio: false,
        elements: [
            { asset: "scene-6c-droplet1.png", top: 68, left: 10, width: 18, depth: 0.05 },
            { asset: "scene-6c-droplet4.png", top: 62, left: 28, width: 10, depth: 0.05 },
            { asset: "scene-6c-droplet2.png", top: 59, left: 48, width: 12, depth: 0.05 },
            { asset: "scene-6c-droplet3.png", top: 72, left: 40, width: 8, depth: 0.05 },
            { asset: "scene-6c-glass.png", top: 20, left: 15, width: 17, depth: 0.4 },
            { asset: "scene-6c-hand.png", top: 43, left: 30, width: 38, depth: 0.6 }
        ],
        buttons: [
            { text: "Next", toScene: "7a" }
        ]
    },
    {
        id: "7a",
        darkColor: "#541218",
        lightColor: "#F6D5D8",
        immersiveColor: "#970001",
        textLayout: "center",
        gradientWH: 45,
        title: "Why are we doing all this?",
        description: "Not to complete a set list, but to enjoy each step along the way. Every activity you do, do it with affection and joy, never out of obligation or fear.",
        hasAudio: false,
        elements: [
            // Tiny
            { asset: "scene-7a-leafdecor1.png", top: 13, left: 36, width: 5, depth: 0.6 },
            { asset: "scene-7a-leafdecor6.png", top: 26, left: 40, width: 5, depth: 0.7 },
            { asset: "scene-7a-leafdecor4.png", top: 30, left: 55, width: 5, depth: 0.5 },
            { asset: "scene-7a-leafdecor3.png", top: 20, left: 64, width: 5, depth: 0.7 },
            { asset: "scene-7a-leafdecor5.png", top: 16, left: 74, width: 5, depth: 0.6 },
            { asset: "scene-7a-leafdecor4.png", top: 42, left: 80, width: 5, depth: 0.5 },
            { asset: "scene-7a-leafdecor1.png", top: 56, left: 73, width: 5, depth: 0.5 },
            { asset: "scene-7a-leafdecor6.png", top: 63, left: 63, width: 5, depth: 0.6 },
            { asset: "scene-7a-leafdecor2.png", top: 62, left: 81, width: 5, depth: 0.7 },
            { asset: "scene-7a-leafdecor3.png", top: 80, left: 60, width: 5, depth: 0.7 },
            { asset: "scene-7a-leafdecor2.png", top: 64, left: 36, width: 5, depth: 0.6 },
            // Large
            { asset: "scene-7a-leaf3.png", top: 8, left: 45, width: 16, depth: 0.38 },
            { asset: "scene-7a-leaf2.png", top: 20, left: 74, width: 15, depth: 0.38 },
            { asset: "scene-7a-leaf1.png", top: 67, left: 68, width: 18, depth: 0.38 },
            { asset: "scene-7a-leaf4.png", top: 63, left: 38, width: 22, depth: 0.38 },
            
            { asset: "scene-7a-silhouette.png", top: 58, left: 20, width: 11, depth: 0.3 },
            { asset: "scene-7a-spotlight.png", top: 0, left: 10, width: 30, depth: 0.4 },
        ],
        buttons: [
            { text: "Home", toScene: "1" }
        ]
    },
]

//Idea: add in the buttons a new: animation property, eg. shake/vibrate, flicker, 