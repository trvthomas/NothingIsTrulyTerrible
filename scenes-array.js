const scenes = [
    {
        id: "1",
        darkColor: "#5C2F24",
        lightColor: "#F1DFDA",
        textLayout: "left",
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
        textLayout: "top",
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
        textLayout: "top",
        title: "Neurosis",
        description: "The heck is that, you'll ask? Well, they are technically mental constructions. Absurd, unnecessary, and often irrational, but also entirely dismantable!",
        hasAudio: false,
        elements: [
            //{ asset: "leaf1.webp", top: 20, left: 65, width: 8, depth: 0.4 },
            //{ asset: "monkey.webp", top: 30, left: 60, width: 35, depth: 0.6 },
        ],
        buttons: [
            { text: "Next", toScene: "3" },
            //{ text: "AI Usage", icon: "robot", toScene: "AI" }
        ]
    },
    {
        id: "3",
        darkColor: "#2D4323",
        lightColor: "#E3EDDE",
        textLayout: "top",
        title: "Monkey Trap",
        description: "Pygmy hunters build cages with narrow bars and a banana inside. The monkey tries to reach out, but it can't get the banana. The monkey gets trapped itself and gets caught.",
        hasAudio: false,
        elements: [
            //{ asset: "leaf1.webp", top: 20, left: 65, width: 8, depth: 0.4 },
            //{ asset: "monkey.webp", top: 30, left: 60, width: 35, depth: 0.6 },
        ],
        buttons: [
            { text: "Home", toScene: "1" },
            //{ text: "AI Usage", icon: "robot", toScene: "AI" }
        ]
    },
]