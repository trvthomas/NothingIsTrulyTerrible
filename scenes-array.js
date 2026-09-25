const scenes = [
    {
        id: "1",
        darkColor: "#410B0B",
        lightColor: "#F1DFDA",
        immersiveColor: "#1D1E20",
        textLayout: "left",
        gradientWH: 50,
        title: "What if nothing is truly terrible?",
        description: "A visual journey through Rafael Santandreu's ideas of renunciation and creation, showing how letting go clears the space to find joy anywhere. Step in to explore how light life feels on the other side.",
        hasAudio: false,
        elements: [
            { asset: "scene-1-b3.webp", top: 35, left: 25, width: 78, depth: 0.2, animation: "move-x", animationDuration: 3 },
            { asset: "scene-1-b2.webp", top: 40, left: 25, width: 78, depth: 0.3, animation: "move-x", animationDuration: 3 },
            { asset: "scene-1-b1.webp", top: 45, left: 25, width: 78, depth: 0.4, animation: "move-x", animationDuration: 1.5 },
            { asset: "scene-1-lightning.webp", top: 0, left: 42, width: 32, depth: 0.1, animation: "flicker", animationDuration: 3 },
            { asset: "scene-1-lightning.webp", top: 2, left: 68, width: 28, depth: 0.1, animation: "flicker", animationDuration: 5 },
        ],
        buttons: [
            { text: "Step Inside", icon: "chevron-right", toScene: "2" },
            { text: "AI Usage", icon: "robot", toScene: "AI1" },
            { text: "Credits", icon: "align-left", toScene: "CR1" }
        ]
    },
    {
        id: "AI1",
        darkColor: "#005580",
        lightColor: "#CCEEFF",
        immersiveColor: "#085D91",
        textLayout: "top",
        gradientWH: 0,
        title: "AI usage in this project",
        description: "In the following pages, I'll explain how I used Generative Artificial Intelligence (AI) to help bring this project to life. I've been coding since I was 12, so my background in web development is pretty solid. The vast majority of the code was written by me, using AI only for a few lines to boost efficiency and organization. One thing I refuse to do is \"vibe coding;\" copying and pasting raw code from automated tools is a nightmare. By writing my own code and vetting every AI-generated line, I spend less time debugging errors and keep the site clean and structures for both, behind the scenes for me, and on the screen for you, the user.",
        hasAudio: false,
        elements: [],
        buttons: [
            { text: "Home", icon: "house", toScene: "1" },
            { text: "Next", icon: "chevron-right", toScene: "AI2" }
        ]
    },
    {
        id: "AI2",
        darkColor: "#005580",
        lightColor: "#CCEEFF",
        immersiveColor: "#085D91",
        textLayout: "top",
        gradientWH: 0,
        title: "Brainstorming and copywriting",
        description: "Although the original concept and layout were mine, I relied on AI to refine the project, find more efficient ways to build it, and organize the theme of each screen. The core concepts are based on Rafael Santandreu's Spanish book \"Nada es tan terrible,\" drawing specifically from Part 1 of the book (see Credits for more details).",
        hasAudio: false,
        elements: [],
        buttons: [
            { text: "Home", icon: "house", toScene: "1" },
            { text: "Next", icon: "chevron-right", toScene: "AI3" }
        ]
    },
    {
        id: "AI3",
        darkColor: "#005580",
        lightColor: "#CCEEFF",
        immersiveColor: "#085D91",
        textLayout: "top",
        gradientWH: 0,
        title: "Images: backgrounds and floating elements",
        description: "All images used in each scene's background and frame are shot by real photographers, sourced from Pexels.com or Unsplash.com (see Credits for more details). Out of the 100+ floating elements designed for these scenes, only 9 icons are AI-generated (done purely to keep the visual style consistent). All other designs, including the frame's outline, are 100% human-made: either created by myself or sourced from Magnific.com and modified to fit each scene's theme.",
        hasAudio: false,
        elements: [],
        buttons: [
            { text: "Home", icon: "house", toScene: "1" }
        ]
    },
    {
        id: "CR1",
        darkColor: "#005580",
        lightColor: "#CCEEFF",
        immersiveColor: "#085D91",
        textLayout: "top",
        gradientWH: 0,
        title: "Credits",
        description: "•| Concepts and philosophy: Based on Part 1 of \"Nada es tan terrible\" by Rafael Santandreu. \n•| Background and texture images: Photography sourced via Unsplash.com and Pexels.com. \n•| Custom artwork and adaptations: Designed, vectorized, and modified by Thomas Rodriguez (@trvthomas) \n•| Vectors and assets: Sourced from Magnific.com, designed by: rawpixel.com, vectorpouch, macrovector, brgfx, Freepik, starline, juicy_fish, pch.vector, vector4stock, djvstock, kjpargeter, muhammad.abdullah, vectorjuice, callmetak.",
        hasAudio: false,
        elements: [],
        buttons: [
            { text: "Home", icon: "house", toScene: "1" }
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
            { asset: "scene-2-item1.webp", top: 24, left: 12, width: 12, depth: 0.36 },
            { asset: "scene-2-item4.webp", top: 18, left: 49, width: 10, depth: 0.36, animation: "shake-m", animationDuration: 1.4 },
            { asset: "scene-2-item3.webp", top: 23, left: 80, width: 8, depth: 0.36, animation: "shake-m", animationDuration: 0.8 },
            { asset: "scene-2-item2.webp", top: 69, left: 13, width: 11, depth: 0.36, animation: "shake-m", animationDuration: 1.8 },
            { asset: "scene-2-item5.webp", top: 77, left: 49, width: 9, depth: 0.36, animation: "shake-m", animationDuration: 1.4 },
            { asset: "scene-2-item6.webp", top: 71, left: 82, width: 11, depth: 0.36, animation: "shake-m", animationDuration: 0.8 },

            // Tangles
            { asset: "scene-2-tangle1.webp", top: 3, left: 10, width: 16, depth: 0.18,  animation: "heart-beat", animationDuration: 5 },
            { asset: "scene-2-tangle2.webp", top: -2, left: 46, width: 16, depth: 0.18,  animation: "heart-beat", animationDuration: 3 },
            { asset: "scene-2-tangle3.webp", top: 18, left: 76, width: 23, depth: 0.18,  animation: "heart-beat", animationDuration: 3 },
            { asset: "scene-2-tangle4.webp", top: 57, left: 7, width: 23, depth: 0.18,  animation: "heart-beat", animationDuration: 4 },
            { asset: "scene-2-tangle5.webp", top: 66, left: 42, width: 21, depth: 0.18,  animation: "heart-beat", animationDuration: 5 },
            { asset: "scene-2-tangle6.webp", top: 58, left: 76, width: 23, depth: 0.18,  animation: "heart-beat", animationDuration: 4 },
        ],
        buttons: [
            { text: "See who holds the bars", toScene: "3a" }
        ]
    },
    {
        id: "3a",
        darkColor: "#2D4323",
        lightColor: "#E3EDDE",
        immersiveColor: "#001F18",
        textLayout: "left",
        gradientWH: 0,
        title: "Is the cage holding the monkey?",
        description: "Or is the monkey holding the cage? Hunters build cages for the banana. This way, the monkeys get trapped by themselves trying to reach out the fruit. Since the animal won't let go off the banana, the hunters can easily catch them.",
        hasAudio: false,
        elements: [
            { asset: "scene-3ab-banana.webp", top: 37, left: 51, width: 11, depth: 0.1, animation: "shake-m", animationDuration: 1.4 },
            { asset: "scene-3ab-banana.webp", top: 40, left: 56, width: 10, depth: 0.1, animation: "shake-m", animationDuration: 1.6 },
            { asset: "scene-3ab-cage.webp", top: 25, left: 47, width: 30, depth: 0.2 },
            { asset: "scene-3ab-net.webp", top: 0, left: 76, width: 30, depth: 0.25, animation: "wobble", animationDuration: 3 },
            { asset: "scene-3a-monkey.webp", top: 46, left: 62, width: 30, depth: 0.25, animation: "move-y", animationDuration: 3 }
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
        description: "Every time we refuse to let go of something, like a broken relationship, constant perfection, or the need of approval, we trap ourselves in a mental cage that produces nothing but fears and anxiety.",
        hasAudio: false,
        elements: [
            { asset: "scene-3ab-banana.webp", top: 37, left: 51, width: 11, depth: 0.1, animation: "shake-m", animationDuration: 1.4 },
            { asset: "scene-3ab-banana.webp", top: 40, left: 56, width: 10, depth: 0.1, animation: "shake-m", animationDuration: 1.6 },
            { asset: "scene-3ab-cage.webp", top: 25, left: 47, width: 30, depth: 0.2 },
            { asset: "scene-3ab-net.webp", top: 30, left: 76, width: 30, depth: 0.25, animation: "wobble", animationDuration: 3 },
            { asset: "scene-3b-monkey.webp", top: 30, left: 38, width: 35, depth: 0.25, animation: "move-x", animationDuration: 3 }
        ],
        buttons: [
            { text: "Break free", toScene: "4a" }
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
            { asset: "scene-4a-mountains.webp", top: 10, left: -20, width: 140, depth: 0.18 },
            { asset: "scene-4a-silhouette.webp", top: 60, left: 44, width: 8, depth: 0.3 },
        ],
        buttons: [
            { text: "Clear the way", toScene: "4c" }
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
            { asset: "scene-4c-frame-erasing.webp", top: 40, left: 12, width: 25, depth: 0.1, animation: "shake-m", animationDuration: 15 },
            { asset: "scene-4c-eraser.webp", top: 23, left: 26, width: 19, depth: 0.3, animation: "shake-tr", animationDuration: 2 },
            { asset: "scene-4c-frame-drawing.webp", top: 48, left: 50, width: 25, depth: 0.1, animation: "heart-beat", animationDuration: 10 },
            { asset: "scene-4c-quill.webp", top: 16, left: 66, width: 20, depth: 0.3, animation: "move-bltp", animationDuration: 1 },
            { asset: "scene-4c-quillink.webp", top: 69, left: 72, width: 8, depth: 0.15, animation: "bounce-t", animationDuration: 2 }
        ],
        buttons: [
            { text: "Look around", toScene: "5a" }
        ]
    },
    {
        id: "5a",
        darkColor: "#660066",
        lightColor: "#FFE6FF",
        immersiveColor: "#10467A",
        textLayout: "center",
        gradientWH: 54,
        title: "Life is a garden!",
        description: "It's packed with a beautiful fruits. Nobody needs to own the garden to enjoy it. Just learn to notice what's already growing!",
        hasAudio: false,
        elements: [
            // Big
            { asset: "scene-5a-fruit1.webp", top: 18, left: 12, width: 12, depth: 0.18 },
            { asset: "scene-5a-fruit4.webp", top: 16, left: 78, width: 12, depth: 0.18 },
            { asset: "scene-5a-fruit2.webp", top: 40, left: 9, width: 12, depth: 0.18 },
            { asset: "scene-5a-fruit3.webp", top: 51, left: 80, width: 12, depth: 0.18 },
            { asset: "scene-5a-fruit5.webp", top: 66, left: 16, width: 12, depth: 0.18 },
            { asset: "scene-5a-fruit6.webp", top: 64, left: 65, width: 12, depth: 0.18 },
            // Small
            { asset: "scene-5a-fruit6.webp", top: 14, left: 40, width: 6, depth: 0.3 },
            { asset: "scene-5a-fruit2.webp", top: 21, left: 60, width: 5, depth: 0.4 },
            { asset: "scene-5a-fruit1.webp", top: 19, left: 50, width: 5, depth: 0.4 },
            { asset: "scene-5a-fruit4.webp", top: 65, left: 32, width: 5, depth: 0.4 },
            { asset: "scene-5a-fruit5.webp", top: 26, left: 70, width: 6, depth: 0.3 },
            { asset: "scene-5a-fruit3.webp", top: 18, left: 27, width: 5, depth: 0.4 },
            { asset: "scene-5a-fruit3.webp", top: 71, left: 40, width: 6, depth: 0.3 },
            { asset: "scene-5a-fruit2.webp", top: 70, left: 48, width: 5, depth: 0.4 },
            { asset: "scene-5a-fruit1.webp", top: 74, left: 57, width: 5, depth: 0.4 },
        ],
        buttons: [
            { text: "Look around", toScene: "5b" }
        ]
    },
    {
        id: "5b",
        darkColor: "#806000",
        lightColor: "#FFF9E6",
        immersiveColor: "#BC892A",
        textLayout: "top",
        gradientWH: 48,
        title: "Ownership is overrated",
        description: "Having more stuff doesn't make life better. Wealth is the ability to enjoy what we already possess.",
        hasAudio: false,
        elements: [
            { asset: "scene-5b-spiral.webp", top: 38, left: 10, width: 34, depth: 0.1 },
            { asset: "scene-5b-rays.webp", top: 40, left: 60, width: 30, depth: 0.1 },
            { asset: "scene-5b-silhouette-sad.webp", top: 59, left: 18, width: 14, depth: 0.2 },
            { asset: "scene-5b-silhouette-happy.webp", top: 54, left: 66, width: 14, depth: 0.2 },
            { asset: "scene-5b-item1.webp", top: 64, left: 12, width: 7, depth: 0.3 },
            { asset: "scene-5b-item2.webp", top: 44, left: 21, width: 7, depth: 0.46 },
            { asset: "scene-5b-item3.webp", top: 58, left: 33, width: 7, depth: 0.38 },
            { asset: "scene-5a-fruit1.webp", top: 62, left: 59, width: 7, depth: 0.3 },
            { asset: "scene-5a-fruit2.webp", top: 45, left: 70, width: 6, depth: 0.46 },
            { asset: "scene-5a-fruit3.webp", top: 64, left: 81, width: 7, depth: 0.38 },
        ],
        buttons: [
            { text: "Continue", toScene: "6a" }
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
        description: "Hold it for a minute, no problem. Hold it for an hour, your arm starts to ache. Hold it all day, and you are paralyzed! The weight never changes, only how long you grip it.",
        hasAudio: false,
        elements: [
            { asset: "scene-6a-droplet1.webp", top: 18, left: 12, width: 10, depth: 0.6 },
            { asset: "scene-6a-droplet2.webp", top: 20, left: 44, width: 12, depth: 0.5 },
            { asset: "scene-6a-droplet3.webp", top: 42, left: 15, width: 12, depth: 0.5 },
            { asset: "scene-6a-droplet4.webp", top: 68, left: 13, width: 10, depth: 0.6 },
            { asset: "scene-6a-glass.webp", top: 32, left: 28, width: 14, depth: 0.2 },
            { asset: "scene-6a-hand.webp", top: 43, left: 32, width: 38, depth: 0.4 }
        ],
        buttons: [
            { text: "Keep holding", toScene: "6b" }
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
        description: "Constantly obsessing about that exam, the meeting, or the \"what ifs\" turns into paralyzing anxiety when we refuse to set those thoughts down. We are the ones keeping our arms raised, and we are the only ones who can set the glass down.",
        hasAudio: false,
        elements: [
            { asset: "scene-6b-droplet4.webp", top: 53, left: 2, width: 35, depth: 0.2 },
            { asset: "scene-6b-droplet3.webp", top: 28, left: 4, width: 30, depth: 0.2 },
            { asset: "scene-6b-droplet1.webp", top: 55, left: 32, width: 38, depth: 0.2 },
            { asset: "scene-6b-droplet2.webp", top: 22, left: 31, width: 36, depth: 0.2 },
            { asset: "scene-6b-glass.webp", top: 32, left: 28, width: 14, depth: 0.6 },
            { asset: "scene-6b-hand.webp", top: 43, left: 32, width: 38, depth: 0.8 }
        ],
        buttons: [
            { text: "Open the hand", toScene: "6c" }
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
        description: "The moment your hand opens and you detach from the outcome of those worries, you can feel the relief. Stepping back isn't failure; it's what frees you to keep moving forward.",
        hasAudio: false,
        elements: [
            { asset: "scene-6c-droplet1.webp", top: 68, left: 10, width: 18, depth: 0.05 },
            { asset: "scene-6c-droplet4.webp", top: 62, left: 28, width: 10, depth: 0.05 },
            { asset: "scene-6c-droplet2.webp", top: 59, left: 48, width: 12, depth: 0.05 },
            { asset: "scene-6c-droplet3.webp", top: 72, left: 40, width: 8, depth: 0.05 },
            { asset: "scene-6c-glass.webp", top: 20, left: 15, width: 17, depth: 0.4 },
            { asset: "scene-6c-hand.webp", top: 43, left: 30, width: 38, depth: 0.6 }
        ],
        buttons: [
            { text: "See the path", toScene: "7a" }
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
            { asset: "scene-7a-leafdecor1.webp", top: 13, left: 36, width: 5, depth: 0.6 },
            { asset: "scene-7a-leafdecor6.webp", top: 26, left: 40, width: 5, depth: 0.7 },
            { asset: "scene-7a-leafdecor4.webp", top: 30, left: 55, width: 5, depth: 0.5 },
            { asset: "scene-7a-leafdecor3.webp", top: 20, left: 64, width: 5, depth: 0.7 },
            { asset: "scene-7a-leafdecor5.webp", top: 16, left: 74, width: 5, depth: 0.6 },
            { asset: "scene-7a-leafdecor4.webp", top: 42, left: 80, width: 5, depth: 0.5 },
            { asset: "scene-7a-leafdecor1.webp", top: 56, left: 73, width: 5, depth: 0.5 },
            { asset: "scene-7a-leafdecor6.webp", top: 63, left: 63, width: 5, depth: 0.6 },
            { asset: "scene-7a-leafdecor2.webp", top: 62, left: 81, width: 5, depth: 0.7 },
            { asset: "scene-7a-leafdecor3.webp", top: 80, left: 60, width: 5, depth: 0.7 },
            { asset: "scene-7a-leafdecor2.webp", top: 64, left: 36, width: 5, depth: 0.6 },
            // Large
            { asset: "scene-7a-leaf3.webp", top: 8, left: 45, width: 16, depth: 0.38 },
            { asset: "scene-7a-leaf2.webp", top: 20, left: 74, width: 15, depth: 0.38 },
            { asset: "scene-7a-leaf1.webp", top: 67, left: 68, width: 18, depth: 0.38 },
            { asset: "scene-7a-leaf4.webp", top: 63, left: 38, width: 22, depth: 0.38 },
            
            { asset: "scene-7a-silhouette.webp", top: 58, left: 20, width: 11, depth: 0.3 },
            { asset: "scene-7a-spotlight.webp", top: 0, left: 10, width: 30, depth: 0.4 },
        ],
        buttons: [
            { text: "Step outside", toScene: "7b" }
        ]
    },
    {
        id: "7b",
        darkColor: "#49306B",
        lightColor: "#E4DCEF",
        immersiveColor: "#8F6A42",
        textLayout: "left",
        gradientWH: 0,
        title: "Is bad traffic really a warzone?",
        description: "Bad traffic, long lines, or a spilled coffee aren't real disasters. Believing that life should always go smoothly is what makes small disruptions feel impossible. Even a delay is just extra time you didn't know you had!",
        hasAudio: false,
        elements: [
            { asset: "scene-7b-bottom-bubble.webp", top: 0, left: 58, width: 40, depth: 0.3 },
            { asset: "scene-7b-explosion.webp", top: 3, left: 59, width: 37, depth: 0.1 },
            { asset: "scene-7b-jet1.webp", top: 20, left: 60, width: 11, depth: 0.2 },
            { asset: "scene-7b-jet2.webp", top: 32, left: 73, width: 9, depth: 0.28 },
            { asset: "scene-7b-jet3.webp", top: 13, left: 80, width: 7, depth: 0.2 },
            { asset: "scene-7b-bomb1.webp", top: 34, left: 84, width: 7, depth: 0.15 },
            { asset: "scene-7b-bomb1-details.webp", top: 29, left: 89, width: 4, depth: 0.2 },
            { asset: "scene-7b-bomb2.webp", top: 44, left: 66, width: 5, depth: 0.18 },
            { asset: "scene-7b-bomb2-details.webp", top: 40, left: 64.2, width: 3, depth: 0.2 },
            { asset: "scene-7b-top-bubble.webp", top: -5, left: 55, width: 46, depth: 0.36 },
        ],
        buttons: [
            { text: "Shift your perspective", toScene: "7c" }
        ]
    },
    {
        id: "7c",
        darkColor: "#A23311",
        lightColor: "#FADAD1",
        immersiveColor: "#FFE699",
        textLayout: "bottom",
        gradientWH: 51,
        title: "Life's treasure chest",
        description: "Life fills this chest with every kind of moment, good or messy. None of them are catastrophes, and your only job is to reach in and find what can be enjoyed.",
        hasAudio: false,
        elements: [
            { asset: "scene-7c-chest-bg.webp", top: 37.9, left: 37.8, width: 33.2, depth: 0.3 },
            { asset: "scene-7c-chest2.webp", top: 9.68, left: 38, width: 39.4, depth: 0.3 },
            { asset: "scene-7c-letter1.webp", top: 34, left: 39, width: 14, depth: 0.43 },
            { asset: "scene-7c-letter2.webp", top: 10, left: 46, width: 13, depth: 0.52 },
            { asset: "scene-7c-letter3.webp", top: 8, left: 10, width: 14, depth: 0.52 },
            { asset: "scene-7c-letter4.webp", top: 22, left: 26, width: 14, depth: 0.43 },
            { asset: "scene-7c-letter5.webp", top: 29, left: 56, width: 10.5, depth: 0.52 },
            { asset: "scene-7c-letter6.webp", top: 30, left: 78, width: 14, depth: 0.43 },
            { asset: "scene-7c-letter7.webp", top: 2, left: 67, width: 14, depth: 0.43 },
            { asset: "scene-7c-letter8.webp", top: 46, left: 12, width: 14, depth: 0.52 },
            { asset: "scene-7c-letter-blank6.webp", top: 44, left: 51.5, width: 6, depth: 0.3 },
            { asset: "scene-7c-letter-blank1.webp", top: 38, left: 65, width: 6, depth: 0.3 },
            { asset: "scene-7c-letter-blank5.webp", top: 27, left: 50, width: 6, depth: 0.3 },
            { asset: "scene-7c-letter-blank4.webp", top: 20, left: 62, width: 6, depth: 0.4 },
            { asset: "scene-7c-letter-blank3.webp", top: 30, left: 12, width: 4, depth: 0.3 },
            { asset: "scene-7c-letter-blank6.webp", top: 40, left: 20, width: 4, depth: 0.5 },
            { asset: "scene-7c-letter-blank2.webp", top: 26, left: 71, width: 4, depth: 0.5 },
            { asset: "scene-7c-letter-blank7.webp", top: 50, left: 29, width: 6, depth: 0.3 },
            { asset: "scene-7c-letter-blank8.webp", top: 54, left: 78, width: 4, depth: 0.5 },
            { asset: "scene-7c-letter-blank1.webp", top: 48, left: 88, width: 6, depth: 0.6 },
            { asset: "scene-7c-letter-blank3.webp", top: 18, left: 83, width: 4, depth: 0.7 },
            { asset: "scene-7c-letter-blank7.webp", top: 5, left: 40, width: 4, depth: 0.2 },
            { asset: "scene-7c-letter-blank5.webp", top: 8, left: 28, width: 6, depth: 0.7 },
            { asset: "scene-7c-letter-blank2.webp", top: 18, left: 40, width: 4, depth: 0.3 },
            { asset: "scene-7c-chest1.webp", top: 42, left: 38, width: 34, depth: 0.3 },
        ],
        buttons: [
            { text: "Feel the lightness", toScene: "8" }
        ]
    },
    {
        id: "8",
        darkColor: "#314706",
        lightColor: "#EDFBD0",
        immersiveColor: "#1D1E20",
        textLayout: "left",
        gradientWH: 54,
        title: "What if nothing is truly terrible?",
        description: "Actually... nothing is. When you drop the heavy grip of expectations, you see that ordinary moments were never your enemy. Renunciation empties your hands so you can finally enjoy what's in front of you; now you decide what you actually care to hold.",
        hasAudio: false,
        elements: [
            { asset: "scene-8-b3.webp", top: 35, left: 25, width: 78, depth: 0.2 },
            { asset: "scene-8-b2.webp", top: 40, left: 25, width: 78, depth: 0.3 },
            { asset: "scene-8-b1.webp", top: 45, left: 25, width: 78, depth: 0.4 },
            { asset: "scene-8-balloon1.webp", top: 8, left: 53, width: 14.5, depth: 0.55 },
            { asset: "scene-8-balloon3.webp", top: 28, left: 40, width: 10, depth: 0.36 },
            { asset: "scene-8-balloon2.webp", top: 12, left: 82, width: 8, depth: 0.26 },
            { asset: "scene-8-balloon4.webp", top: 28, left: 70, width: 10, depth: 0.48 },
        ],
        buttons: [
            { text: "Back to beginning", icon: "house", toScene: "1" },
            { text: "Share experience", icon: "share-nodes", toLink: "/share.html" },
            { text: "About the books", icon: "arrow-up-right-from-square", toLink: "https://www.amazon.com/stores/Rafael-Santandreu/author/B00J2GNY9M" },
            { text: "Leave feedback", icon: "comment-dots", toLink: "https://www.trvsolutions.com" }
        ]
    },
]

//Idea: add in the buttons a new: animation property, eg. shake/vibrate, flicker, 