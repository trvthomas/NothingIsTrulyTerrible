const scenes = [
    {
        id: "1",
        darkColor: "#5C2F24",
        lightColor: "#F1DFDA",
        immersiveColor: "#1D1E20",
        textLayout: "left",
        gradientWH: 50,
        title: "What if nothing is actually terrible?",
        description: "A visual journey through anxiety... test to see multiple lines and adjust line spacing",
        hasAudio: false,
        elements: [
            //{ asset: "leaf1.webp", top: 20, left: 65, width: 8, depth: 0.4 },
            //{ asset: "monkey.webp", top: 30, left: 60, width: 35, depth: 0.6 },
        ],
        buttons: [
            { text: "Start", icon: "chevron-right", toScene: "2" },
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
        gradientWH: 40,
        textLayout: "top",
        title: "Neurosis",
        description: "The heck is that, you'll ask? Well, they are technically mental constructions. Absurd, unnecessary, and often irrational, but also entirely dismantable!",
        hasAudio: false,
        elements: [
            //{ asset: "leaf1.webp", top: 20, left: 65, width: 8, depth: 0.4 },
            //{ asset: "monkey.webp", top: 30, left: 60, width: 35, depth: 0.6 },
        ],
        buttons: [
            { text: "Next", toScene: "3a" }
        ]
    },
    {
        id: "3a",
        darkColor: "#2D4323",
        lightColor: "#E3EDDE",
        immersiveColor: "#001F18",
        textLayout: "top",
        gradientWH: 45,
        title: "Monkey Trap",
        description: "Pygmy hunters build cages with narrow bars and a banana inside. The monkey tries to reach out, but it can't get the banana. The monkey gets trapped itself and gets caught.",
        hasAudio: false,
        elements: [
            //{ asset: "leaf1.webp", top: 20, left: 65, width: 8, depth: 0.4 },
            //{ asset: "monkey.webp", top: 30, left: 60, width: 35, depth: 0.6 },
        ],
        buttons: [
            { text: "Next", toScene: "3b" }
        ]
    },
    {
        id: "3b",
        darkColor: "#5D651A",
        lightColor: "#F2F5D6",
        immersiveColor: "#002E22",
        textLayout: "top",
        gradientWH: 45,
        title: "Let Go The Banana",
        description: "What are you holding onto right now? Every time we refuse to let go of something - a relationship or the need of approval - we trap to ourselves in a mental cage that produces nothing but anxiety.",
        hasAudio: false,
        elements: [
            //{ asset: "leaf1.webp", top: 20, left: 65, width: 8, depth: 0.4 },
            //{ asset: "monkey.webp", top: 30, left: 60, width: 35, depth: 0.6 },
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
        title: "Happiness Is Already Here",
        description: "Happiness isn't missing. You're just looking for it at the wrong place. Giving up isn't lost, it's a realization that you never needed those things to be happy.",
        hasAudio: false,
        elements: [
            //{ asset: "leaf1.webp", top: 20, left: 65, width: 8, depth: 0.4 },
            //{ asset: "monkey.webp", top: 30, left: 60, width: 35, depth: 0.6 },
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
        title: "Creation",
        description: "Renunciation clears the space. Creation fills it. In every situation, there's a new opportunity waiting to be seen.",
        hasAudio: false,
        elements: [
            //{ asset: "leaf1.webp", top: 20, left: 65, width: 8, depth: 0.4 },
            //{ asset: "monkey.webp", top: 30, left: 60, width: 35, depth: 0.6 },
        ],
        buttons: [
            { text: "Next", toScene: "5a" }
        ]
    },
    {
        id: "5a",
        darkColor: "#660066",
        lightColor: "#FFE6FF",
        immersiveColor: "#10467A",
        textLayout: "bottom",
        gradientWH: 45,
        title: "The Garden",
        description: "Life is like a garden: full of beautiful fruits. You don't need to own it all, just learn to see it.",
        hasAudio: false,
        elements: [
            //{ asset: "leaf1.webp", top: 20, left: 65, width: 8, depth: 0.4 },
            //{ asset: "monkey.webp", top: 30, left: 60, width: 35, depth: 0.6 },
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
        textLayout: "left",
        gradientWH: 50,
        title: "The Water Glass",
        description: "Hold the glass of water for a minute, no problem. For an hour, it starts aching. Hold it for a whole day, your arm is paralyzed. The water didn't get heavier, you just never put it down.",
        hasAudio: false,
        elements: [
            //{ asset: "leaf1.webp", top: 20, left: 65, width: 8, depth: 0.4 },
            //{ asset: "monkey.webp", top: 30, left: 60, width: 35, depth: 0.6 },
        ],
        buttons: [
            { text: "Next", toScene: "6b" }
        ]
    },
    {
        id: "6b",
        darkColor: "#0C0D12",
        lightColor: "#E0E2EB",
        immersiveColor: "#0C0D12",
        textLayout: "right",
        gradientWH: 50,
        title: "The Weight Grows",
        description: "Anxiety, desperation, rage, shame. These feelings exist, they are common. But they are not necessary, not good for you, and they drained your personal energy.",
        hasAudio: false,
        elements: [
            //{ asset: "leaf1.webp", top: 20, left: 65, width: 8, depth: 0.4 },
            //{ asset: "monkey.webp", top: 30, left: 60, width: 35, depth: 0.6 },
        ],
        buttons: [
            { text: "Next", toScene: "6c" }
        ]
    },
    {
        id: "6c",
        darkColor: "#333333",
        lightColor: "#E6E6E6",
        immersiveColor: "##D7DFE0",
        textLayout: "right",
        gradientWH: 55,
        title: "Let Go",
        description: "The more we practice, letting go, the less power adversity has over us. You don't have to solve everything, just put the glass down.",
        hasAudio: false,
        elements: [
            //{ asset: "leaf1.webp", top: 20, left: 65, width: 8, depth: 0.4 },
            //{ asset: "monkey.webp", top: 30, left: 60, width: 35, depth: 0.6 },
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
        title: "Just For Love",
        description: "Every activity you do, do it with love. Not from obligation, not from fear. Not from the need to be accepted. Do it for love, and you will be free.",
        hasAudio: false,
        elements: [
            //{ asset: "leaf1.webp", top: 20, left: 65, width: 8, depth: 0.4 },
            //{ asset: "monkey.webp", top: 30, left: 60, width: 35, depth: 0.6 },
        ],
        buttons: [
            { text: "Home", toScene: "1" }
        ]
    },
]

//Idea: add in the buttons a new: animation property, eg. shake/vibrate, flicker, 