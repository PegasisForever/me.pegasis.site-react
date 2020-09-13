const projectsData = `[
    {
        "projectName": "GROK",
        "icon": "logos/grok_logo.svg",
        "color":"90c200",
        "tags": [
            "Suspended",
            "Android",
            "Kotlin"
        ],
        "shortDesc": "A light instant messaging app with  \\"multi-thread chatting\\".",
        "buttons": [
            [
                "Download Android",
                "https://cloud.pegasis.site/s/jMqS4rZTQrwRBdd"
            ]
        ],
        "longDesc": "# Supports Multi-thread Chatting\\n\\nThis concept may looks confusing, but let me explain. Implementing it is one of the main reason why I created GROK. Imaging you are discussing a math problem with your friend use text. During the discussion, one of your friend's message gives you a new idea on how to solve this problem, what can you do?\\n\\n1. Interrupt the discussion and talk about your idea\\n2. Keep the idea in mind until current discussion finishes\\n\\nSee, neither of them is satisfying. This is where \\"Multi-thread Chatting\\" comes in. Threads separate a conversation into different topics. For example, you can continue discussing in thread one and talk about your new idea in thread two. Messages you send in both thread will all be delivered to your friends --- but separated so two ideas won't be mixed up and what does \\"it\\" referring to is clear.\\n\\n# Follows Material Design\\n\\nEveryone loves Material Design (I hope so). So do I. Material Design is a great guideline to organize my UI and make GROK feels native.\\n\\nI love the ripple effect so much.\\n\\n# Shockingly Fast\\n\\nI spent a lot of time on optimizing GROK to achieve the minimum size and resource consumption.\\n\\nBy using native components, only add code that is necessary, fully utilize multiple cores and lazy loading, I'm confident to say that GROK is faster than 95% of all the messaging apps on the world.\\n",
        "screenshots": [
            "grok-1",
            "grok-2",
            "grok-3",
            "grok-4",
            "grok-5"
        ],
        "recordings": [
            "iTZgWys9lxE"
        ]
    },
    {
        "projectName": "Remote Wheel",
        "icon": "",
        "color":"",
        "tags": [
            "Done",
            "Android",
            "Windows",
            "Java",
            "Python"
        ],
        "shortDesc": "Coding needs a lot of scrolling, why not do it on a touchscreen?",
        "buttons": [
            ["Download Client", "https://cloud.pegasis.site/s/B2HbXGjPWC9t6pk"],
            ["Download Server", "https://cloud.pegasis.site/s/etoMGQQqjNBrqXC"]
        ],
        "longDesc": "Coding requires so much scrolling that the wheel on my mouse became \\"smooth\\" - no \\"levelly\\" feelings any more. Why don't scroll on a touchscreen?",
        "screenshots": [
            "rwheel-1"
        ],
        "recordings": [
            "bPygJOMhN5s"
        ]
    },
    {
        "projectName": "Mirrors Killer",
        "icon": "",
        "color":"",
        "tags": [
            "Done",
            "Android",
            "Windows",
            "Linux",
            "Processing",
            "Java"
        ],
        "shortDesc": "An interactive tool to demostrate how concave and convex mirror reflects light.",
        "buttons": [
            ["GitHub", "https://github.com/PegasisForever/mirrors-killer"],
            ["Download Windows", "https://cloud.pegasis.site/s/rP7idcPALzqDYPA"],
            ["Download Linux", "https://cloud.pegasis.site/s/GCtrRS8t8ysAx9S"],
            ["Download Android", "https://cloud.pegasis.site/s/Y6RmdLbKAY3o7Pn"]
        ],
        "longDesc": "In Mirrors Killer, you can change the focus length of the mirror, object height and distance using silders to understand how concave and convex mirror reflects light.",
        "screenshots": [
            "mirrors-killer-1"
        ],
        "recordings": [
            "wks3dNbQhgI"
        ]
    },
    {
        "projectName": "Random Number Generator",
        "icon": "logos/random_number_generator_logo.png",
        "color":"84b6fc",
        "tags": [
            "Done",
            "Android",
            "Kotlin"
        ],
        "shortDesc": "A simple tool to help me making decisions.",
        "buttons": [
            ["Download Android", "https://cloud.pegasis.site/s/LZjmGGxzgd2oFJd"]
        ],
        "longDesc": " ",
        "screenshots": [
            "rng-1",
            "rng-2",
            "rng-3"
        ],
        "recordings": []
    },
    {
        "projectName": "YRDSB Student Tool",
        "icon": "logos/yrdsb_tool_logo.png",
        "color":"fd9240",
        "tags": [
            "Done",
            "Android",
            "Kotlin"
        ],
        "shortDesc": "A non-official tool to fetch grade information from YRDSB teach assist.",
        "buttons": [
            ["GitHub", "https://github.com/PegasisForever/YRDSB-student-tool"],
            ["Download Android", "https://cloud.pegasis.site/s/zGR77NTNi2TYjMK"]
        ],
        "longDesc": "The official client for teach assist is so ugly and hard to use. So I made a better one.\\n\\n- Material Design\\n- Trend chart\\n- Better small screen support\\n- View mark offline\\n",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "Google Translate (Desktop)",
        "icon": "logos/gtranslate_logo.svg",
        "color": "4f8bf5",
        "tags": ["Done","Windows","Electron"],
        "shortDesc": "A desktop version of Google Translate.",
        "buttons": [["Download","https://cloud.pegasis.site/s/frjFDPgjsij7AaJ"]],
        "longDesc": "Google rarely make applications for desktops. Google Translate webpage take times to load and can't switch language automaticly. So I made a desktop application using electron and Google translate API. When you type English in the text field, it translates the text into Chinese; when you type in Chinese, it translates the text to the English. You don't need to switch modes.",
        "screenshots": [
            "gtranslate-1",
            "gtranslate-2"
        ],
        "recordings": []
    },
    {
        "projectName": "GROK File Transfer",
        "icon": "",
        "color": "",
        "tags": ["Suspended","Nodejs","Electron"],
        "shortDesc": "A tool allows you to transfer files between devices conveniently.",
        "buttons": [
            ["Server (Github)","https://github.com/PegasisForever/gft_server"],
            ["Client (Github)","https://github.com/PegasisForever/grok_file_transfer"]
        ],
        "longDesc": "Transferring files between different devices is sometimes very inconvenient. Using cloud drive is one of the options but you need to login on both devices ,upload and download files manually.\\n\\nGROK File Transfer simplify this process. GFT gives a unique five-digit unique ID to each device installed it and generates a QR code. When you need to send files to another machine, you just need to enter the ID or scan the code using your device and accept the request on the another device.",
        "screenshots": [
            "gft-1",
            "gft-2",
            "gft-3"
        ],
        "recordings": []
    },
    {
        "projectName": "BlockNums Solver",
        "icon": "",
        "color": "",
        "tags": ["Done","Kotlin"],
        "shortDesc": "A tool to solve BlockNums.",
        "buttons": [["Github","https://github.com/PegasisForever/BlockNums_Solver"]],
        "longDesc": "A tool to solve BlockNums.",
        "screenshots": [
            "bn-solver-1",
            "bn-solver-2"
        ],
        "recordings": []
    },
    {
        "projectName": "Competition Practice",
        "icon": "",
        "color": "",
        "tags": ["Done","Kotlin","Java"],
        "shortDesc": "Solutions for ECOO & CCC past contests.",
        "buttons": [["Github","https://github.com/PegasisForever/CompetionPractice"]],
        "longDesc": "Solutions for ECOO & CCC past contests.",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "Huffman Code",
        "icon": "",
        "color": "",
        "tags": ["Done","Kotlin"],
        "shortDesc": "A simple tool to create Huffman code from an array of chars.",
        "buttons": [["Github","https://github.com/PegasisForever/HuffmanCode"]],
        "longDesc": "A simple tool to create Huffman code from an array of chars.",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "Kevel Craft",
        "icon": "",
        "color": "",
        "tags": [
            "Done",
            "Java",
            "Processing"
        ],
        "shortDesc": "Something similar to \\"Minecraft\\" made in 8 days.",
        "buttons": [["Github","https://github.com/PegasisForever/KevelCraft"]],
        "longDesc": "Something similar to \\"Minecraft\\" made in 8 days.",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "PowerSchool Account Check",
        "icon": "",
        "color": "",
        "tags": ["Done","Kotlin"],
        "shortDesc": "A command line tool to check PowerSchool accounts.",
        "buttons": [["Github","https://github.com/PegasisForever/powerschool_account_check"]],
        "longDesc": "A command line tool to check PowerSchool accounts.",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "Function Killer",
        "icon": "",
        "color": "00c42b",
        "tags": ["Lua"],
        "shortDesc": "Function graphing calculator",
        "buttons": [
            [
                "Source Code",
                "https://cloud.pegasis.site/s/NZLWrXzg36TatXX"
            ]
        ],
        "longDesc": "This is made back then when I was in grade 8 and was learning about functions. I was curious about what different functions look like so I made this shitty program (in today's view) and showed it to my class.\\n\\nThe program is written in Lua using [Gnad](https://www.gnad.net/) which is based on [Love2D](https://love2d.org/). It supports zooming using the mouse wheel but does not support panning. The font is blurry because I didn't figure out how to use a larger font, instead I just scale up the small font after rendering. Also backspace deletes all the characters because I didn't know how to use \`subString\` in lua.\\n\\nIt works by \`eval\`ing the function, meaning you can input any valid lua expression.",
        "screenshots": [
            "159996751245692",
            "159996751768679",
            "159996752754209"
        ],
        "recordings": []
    },
    {
        "projectName": "Codea Mod",
        "icon": "",
        "color": "",
        "tags": [],
        "shortDesc": "",
        "buttons": [],
        "longDesc": "",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "Game Kit",
        "icon": "",
        "color": "",
        "tags": [],
        "shortDesc": "",
        "buttons": [],
        "longDesc": "",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "Installation Maker",
        "icon": "",
        "color": "",
        "tags": [],
        "shortDesc": "",
        "buttons": [],
        "longDesc": "",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "LED",
        "icon": "",
        "color": "",
        "tags": [],
        "shortDesc": "",
        "buttons": [],
        "longDesc": "",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "MOBA",
        "icon": "",
        "color": "",
        "tags": [],
        "shortDesc": "",
        "buttons": [],
        "longDesc": "",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "The Light",
        "icon": "",
        "color": "",
        "tags": [],
        "shortDesc": "",
        "buttons": [],
        "longDesc": "",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "The Light (New)",
        "icon": "",
        "color": "",
        "tags": ["Java"],
        "shortDesc": "A rewrite of \\"The Light\\" in Java.",
        "buttons": [
            [
                "Source Code",
                "https://cloud.pegasis.site/s/g3NqMyGmYZ2HATJ"
            ],
            [
                "jar Download",
                "https://cloud.pegasis.site/s/onoBWGBeyoRGeoZ"
            ]
        ],
        "longDesc": "See the original [The Light](The%20Light).\\n\\nThis is a rewrite in Java using the drawing library of [Processing](https://processing.org/).\\n\\nNot implemented:\\n- Level achievements\\n- Level completed screen\\n\\nAdded:\\n- Hot reload debug mode (using [LuaJ](https://github.com/darmie/LuaJ))\\n- Level is defined by code",
        "screenshots": [
            "159997405921819",
            "159997407297362",
            "159997408257689"
        ],
        "recordings": [
            "OeHKsE6gwTo"
        ]
    },
    {
        "projectName": "Tween Test",
        "icon": "",
        "color": "",
        "tags": [],
        "shortDesc": "",
        "buttons": [],
        "longDesc": "",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "Chart Maker",
        "icon": "logos/chart_maker_icon.png",
        "color": "ff740e",
        "tags": ["Python"],
        "shortDesc": "Convert a list of test results to a chart of trend.",
        "buttons": [
            [
                "Github",
                "https://github.com/PegasisForever/Chart_Maker"
            ],
            [
                "Download Windows",
                "https://cloud.pegasis.site/s/xDDmfYmJn7dCcz4"
            ]
        ],
        "longDesc": " ",
        "screenshots": [
            "159996328781813",
            "159996329202349",
            "159996329029582"
        ],
        "recordings": []
    },
    {
        "projectName": "Kaggle PUBG",
        "icon": "",
        "color": "",
        "tags": ["Machine Learning", "Python"],
        "shortDesc": "Playing around with kaggle and sklearn.",
        "buttons": [
            [
                "Submission",
                "https://www.kaggle.com/pegasis0/pubg-perdict-randomforest"
            ]
        ],
        "longDesc": " ",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "YRDSB Teach Assist",
        "icon": "logos/ta_icon.png",
        "color": "2196f3",
        "tags": ["Android","iOS","Flutter","Kotlin"],
        "shortDesc": "The next-gen Teach Assist client for YRDSB.",
        "buttons": [["Donate","https://www.patreon.com/yrdsbta"],
    ["GitHub (Mobile)","https://github.com/PegasisForever/YRDSB-Teach-Assist-Mobile"],
            ["GitHub (Website)","https://github.com/PegasisForever/YRDSB-Teach-Assist-Web"],
            ["GitHub (Server)","https://github.com/PegasisForever/Fetch-TA-Data"]],
        "longDesc": "- Notification\\n- Beautiful charts and diagrams\\n- Multi-user support\\n- Dark mode support\\n- View marks offline\\n- View marks even if it's not on the TA website\\n- View archived marks (In development)\\n- View time line (In development)\\n- Share your marks with link (In development)\\n- Hot-upgradable server-side parser",
        "screenshots": [
            "ta-1",
            "ta-2",
            "ta-3",
            "ta-4",
            "ta-5",
            "ta-6",
            "ta-7"
        ],
        "recordings": []
    }
]`

function compareProjectName(a, b) {
    const aName = a.projectName.toUpperCase()
    const bName = b.projectName.toUpperCase()

    let comparison = 0
    if (aName > bName) {
        comparison = 1
    } else if (aName < bName) {
        comparison = -1
    }
    return comparison
}

function compareProjectWeight(a, b) {
    let comparison = 0
    if (a.weight > b.weight) {
        comparison = -1
    } else if (a.weight < b.weight) {
        comparison = 1
    }
    return comparison
}

export function getProjectsList(searchText) {
    let projects = JSON.parse(projectsData)
    if (searchText === undefined || searchText === "") {
        projects.sort(compareProjectName)
        return projects
    } else {
        const titleW = 10
        const tagW = 5
        const shortDescW = 3
        const longDescW = 1.5
        let result = []

        let keyWords = searchText.split(" ").filter((keyWord) => keyWord !== "")
        projects.forEach((project) => {
            let weight = 0
            keyWords.forEach((keyWord) => {
                try {
                    weight += project.projectName.match(new RegExp(keyWord, "gi")).length * titleW
                } catch (ignore) {
                }
                try {
                    weight += project.shortDesc.match(new RegExp(keyWord, "gi")).length * shortDescW
                } catch (ignore) {
                }
                try {
                    weight += project.longDesc.match(new RegExp(keyWord, "gi")).length * longDescW
                } catch (ignore) {
                }
                project.tags.forEach((tag) => {
                    if (tag.match(new RegExp(keyWord, "gi"))) {
                        weight += tagW
                    }
                })
            })

            project.weight = weight
            if (weight > 0) {
                result.push(project)
            }
        })

        result.sort(compareProjectWeight)

        return result
    }
}

export function getProject(name) {
    const projects = JSON.parse(projectsData)
    const project = projects.find((project) => project.projectName === name)
    if (project && project.longDesc !== "") {
        return project
    } else {
        return undefined
    }
}
