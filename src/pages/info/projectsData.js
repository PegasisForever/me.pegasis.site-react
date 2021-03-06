const projectsData = `[
    {
        "projectName": "Puno",
        "icon": "",
        "color":"",
        "tags": [
            "React",
            "Typescript",
            "Firebase"
        ],
        "shortDesc": "A better version of uno. Play with your friends in your browser!",
        "buttons": [
            [
                "Website",
                "https://puno.pegas.is/"
            ]
        ],
        "longDesc": "# Features\\n\\n1. Runs in your browser & optimized for mobile and desktop\\n2. No login, no ads, no bs\\n3. Unlimited players\\n4. Players can join at the middle of a game\\n5. Great animation\\n\\n# Puno Specific Rules\\n\\nI understand everyone has their own set of rules for uno. Puno uses a set of rules my friends and I found most fun. However if there're enough interest, I may add some customization options for rules.\\n\\n1. You can put down a +2 after a +2 to let the next person draw 4. (the same goes for +4 and +4, +4 and +2 as long as they have the same color)\\n2. Your turn is not skipped after you draw cards\\n3. You can only use a number card as your last card\\n4. You don't need to say uno for the last card (I mean I can put a button there but that would be too obvious... You can still say uno in discord voice chat if you want)\\n\\n# Technical Details\\n\\nI coded this thing in less than a week, it's basically just a huge mess of spaghetti, so I'm not planning to open source it anytime soon :)\\n\\nEverything is calculated / generated on client, there is no server side validation, which means you can easily hack your game if you want. However considering Puno is only meant to be played within friends and without a global rank, I see this as a time saving measure rather than a security flaw. (Ah, classic this is a feature not a bug)\\n\\n# Hope you enjoy playing it!",
        "longDescLink": "",
        "screenshots": [
            "162470085268885",
            "162470085480030",
            "162470085641784"
        ],
        "recordings": []
    },
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
        "longDescLink": "",
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
        "longDescLink": "",
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
        "longDescLink": "",
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
        "longDescLink": "",
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
        "shortDesc": "Proof-of-concept for the unofficial YRDSB Teach Assist.",
        "buttons": [
            ["GitHub", "https://github.com/PegasisForever/YRDSB-student-tool"],
            ["Download Android", "https://cloud.pegasis.site/s/zGR77NTNi2TYjMK"]
        ],
        "longDesc": "The official client for teach assist is so ugly and hard to use. So I made a better one.\\n\\n- Material Design\\n- Trend chart\\n- Better small screen support\\n- View mark offline\\n",
        "longDescLink": "",
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
        "longDescLink": "",
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
        "longDescLink": "",
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
        "longDescLink": "",
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
        "tags": ["Kotlin","Java"],
        "shortDesc": "Solutions for Leetcode, ECOO and CCC's past contests.",
        "buttons": [["Github","https://github.com/PegasisForever/CompetionPractice"],
        ["Github (Leetcode)","https://github.com/PegasisForever/leetcode"]],
        "longDesc": "Solutions for ECOO & CCC past contests.",
        "longDescLink": "https://raw.githubusercontent.com/PegasisForever/CompetionPractice/master/README.md",
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
        "longDescLink": "",
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
        "longDescLink": "",
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
        "longDescLink": "",
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
        "longDescLink": "",
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
        "tags": ["Codea","Lua"],
        "shortDesc": "Provide additional functionalities on top of Codea's default api.",
        "buttons": [],
        "longDesc": "",
        "longDescLink": "",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "Game Kit",
        "icon": "",
        "color": "",
        "tags": ["Codea","Lua"],
        "shortDesc": "An UI library for games.",
        "buttons": [],
        "longDesc": "",
        "longDescLink": "",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "Installer Maker",
        "icon": "",
        "color": "",
        "tags": ["Codea","Lua"],
        "shortDesc": "Create an installer from a Codea project",
        "buttons": [],
        "longDesc": "",
        "longDescLink": "",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "MOBA",
        "icon": "",
        "color": "",
        "tags": ["Codea","Lua"],
        "shortDesc": "A MOBA game I made a long time ago.",
        "buttons": [],
        "longDesc": "",
        "longDescLink": "",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "The Light",
        "icon": "",
        "color": "",
        "tags": ["Codea","Lua"],
        "shortDesc": "A casual game, you win by launch a light at the right direction to hit the target.",
        "buttons": [],
        "longDesc": "",
        "longDescLink": "",
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
        "longDescLink": "",
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
        "longDescLink": "",
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
        "longDescLink": "",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "YRDSB Teach Assist Mobile",
        "icon": "logos/ta_icon.png",
        "color": "2196f3",
        "tags": ["Android","iOS","Flutter"],
        "shortDesc": "The next-gen Teach Assist app for YRDSB.",
        "buttons": [["Donate","https://www.patreon.com/yrdsbta"],
    ["GitHub","https://github.com/PegasisForever/YRDSB-Teach-Assist-Mobile"]],
        "longDesc": "",
        "longDescLink": "https://raw.githubusercontent.com/PegasisForever/YRDSB-Teach-Assist-Mobile/master/README.md",
        "screenshots": [
            "ta-1.png",
            "ta-2.png",
            "ta-3.png",
            "ta-4.png",
            "ta-5.png",
            "ta-6.png",
            "ta-7.png",
            "ta-8.png",
            "ta-9.png"
        ],
        "recordings": []
    },
    {
        "projectName": "YRDSB Teach Assist Website",
        "icon": "logos/ta_icon.png",
        "color": "2196f3",
        "tags": ["React","Website","Javascript"],
        "shortDesc": "The next-gen Teach Assist website for YRDSB.",
        "buttons": [["Donate","https://www.patreon.com/yrdsbta"],
        ["Website","https://ta-yrdsb.web.app/"],
            ["GitHub","https://github.com/PegasisForever/YRDSB-Teach-Assist-Web"]],
        "longDesc": "",
        "longDescLink": "https://raw.githubusercontent.com/PegasisForever/YRDSB-Teach-Assist-Web/master/README.md",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "YRDSB Teach Assist Server",
        "icon": "",
        "color": "2196f3",
        "tags": ["Kotlin","Server"],
        "shortDesc": "Server for YRDSB Teach Assist's app and website.",
        "buttons": [["Donate","https://www.patreon.com/yrdsbta"],
            ["GitHub","https://github.com/PegasisForever/Fetch-TA-Data"]],
        "longDesc": "",
        "longDescLink": "https://raw.githubusercontent.com/PegasisForever/Fetch-TA-Data/master/README.md",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "CCC Marker",
        "icon": "",
        "color": "",
        "tags": ["Kotlin"],
        "shortDesc": "A command line tool to check CCC solutions against .in and .out files.",
        "buttons": [["GitHub","https://github.com/PegasisForever/ccc_marker"],
        ["Download","https://github.com/PegasisForever/ccc_marker/releases"]],
        "longDesc": "",
        "longDescLink": "https://raw.githubusercontent.com/PegasisForever/ccc_marker/master/README.md",
        "screenshots": [],
        "recordings": []
    },
    {
        "projectName": "Distribution Calculator",
        "icon": "",
        "color": "009688",
        "tags": ["Flutter","Website"],
        "shortDesc": "Calculate all kinds of distribution and draw graphs.",
        "buttons": [["GitHub","https://github.com/PegasisForever/distribution_calculator"],
        ["Website","https://dev.pegasis.site/distribution_calculator/"]],
        "longDesc": "",
        "longDescLink": "https://raw.githubusercontent.com/PegasisForever/distribution_calculator/master/README.md",
        "screenshots": [],
        "recordings": []
    },
   {
        "projectName": "Discord Chat Exporter",
        "icon": "",
        "color": "7289da",
        "tags": ["AUR","Package","Linux"],
        "shortDesc": "AUR package maintainer for Discord Chat Exporter.",
        "buttons": [["GitHub","https://github.com/Tyrrrz/DiscordChatExporter"],
        ["AUR","https://aur.archlinux.org/packages/discord-chat-exporter-cli/"]],
        "longDesc": "",
        "longDescLink": "",
        "screenshots": [],
        "recordings": []
    },
   {
        "projectName": "Rust Chat",
        "icon": "",
        "color": "",
        "tags": ["Rust","Website"],
        "shortDesc": "Simple chat & chess website.",
        "buttons": [["GitHub","https://github.com/PegasisForever/rust_chat"]],
        "longDesc": "",
        "longDescLink": "https://raw.githubusercontent.com/PegasisForever/rust_chat/master/README.md",
        "screenshots": [],
        "recordings": []
    },
   {
        "projectName": "Rust Todo",
        "icon": "",
        "color": "",
        "tags": ["Rust","Website"],
        "shortDesc": "Simple todo website with account.",
        "buttons": [["GitHub","https://github.com/PegasisForever/rust_todo"],
        ["Website","https://dev.pegasis.site/rust_todo/"]],
        "longDesc": "",
        "longDescLink": "https://raw.githubusercontent.com/PegasisForever/rust_chat/master/README.md",
        "screenshots": [],
        "recordings": []
    },
   {
        "projectName": "Flutter Keyboard Aware Dialog",
        "icon": "",
        "color": "",
        "tags": ["Flutter","Package","Dart"],
        "shortDesc": "A workaround for a Flutter bug.",
        "buttons": [["GitHub","https://github.com/PegasisForever/flutter_keyboard_aware_dialog"],
        ["pub.dev","https://pub.dev/packages/flutter_keyboard_aware_dialog"]],
        "longDesc": "",
        "longDescLink": "https://raw.githubusercontent.com/PegasisForever/flutter_keyboard_aware_dialog/master/README.md",
        "screenshots": [],
        "recordings": []
    },
   {
        "projectName": "Raspberry Pi Monitor App",
        "icon": "",
        "color": "",
        "tags": ["Flutter","Raspberry Pi"],
        "shortDesc": "System resource monitor for any arm/x86 linux machine.",
        "buttons": [["GitHub","https://github.com/PegasisForever/raspi_monitor_app"],
        ["Google Play","https://play.google.com/store/apps/details?id=site.pegasis.raspi_monitor_app"]],
        "longDesc": "",
        "longDescLink": "https://raw.githubusercontent.com/PegasisForever/raspi_monitor_app/master/README.md",
        "screenshots": [],
        "recordings": []
    },
   {
        "projectName": "MC Deceit",
        "icon": "",
        "color": "",
        "tags": ["Minecraft","Bukkit","Kotlin"],
        "shortDesc": "A Bukkit plugin to recreate the Deceit game in Minecraft. (Unfinished)",
        "buttons": [["GitHub","https://github.com/PegasisForever/mc-deciet"]],
        "longDesc": "",
        "longDescLink": "",
        "screenshots": [],
        "recordings": []
    },
   {
        "projectName": "English Syntax Highlighter",
        "icon": "",
        "color": "",
        "tags": ["React","Chrome","Plugin","Javascript"],
        "shortDesc": "A Chrome plugin to highlight english words based on its part of speech.",
        "buttons": [["GitHub","https://github.com/PegasisForever/english_syntax_highlighter"]],
        "longDesc": "",
        "longDescLink": "",
        "screenshots": [],
        "recordings": []
    },
   {
        "projectName": "Pegahoot Display",
        "icon": "",
        "color": "",
        "tags": ["React","Website","Javascript"],
        "shortDesc": "A website similar to Kahoot, this is the part where you put on a big screen.",
        "buttons": [["GitHub","https://github.com/PegasisForever/pegahoot-display"]],
        "longDesc": "",
        "longDescLink": "",
        "screenshots": [],
        "recordings": []
    },
   {
        "projectName": "Pegahoot Client",
        "icon": "",
        "color": "",
        "tags": ["React","Website","Javascript"],
        "shortDesc": "A website similar to Kahoot, this is the part where players used to answer.",
        "buttons": [["GitHub","https://github.com/PegasisForever/pegahoot-client"]],
        "longDesc": "",
        "longDescLink": "",
        "screenshots": [],
        "recordings": []
    },
   {
        "projectName": "Pegahoot Server",
        "icon": "",
        "color": "",
        "tags": ["Kotlin"],
        "shortDesc": "A website similar to Kahoot, this is the server.",
        "buttons": [["GitHub","https://github.com/PegasisForever/pegahoot-server"]],
        "longDesc": "",
        "longDescLink": "",
        "screenshots": [],
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

const projectJson = JSON.parse(projectsData)
const projectMap = new Map()
for (let project of projectJson) {
    projectMap.set(project.projectName, project)
}

export function getProjectsList(searchText) {
    let projects = JSON.parse(projectsData)
    if (searchText === undefined || searchText === '') {
        projects.sort(compareProjectName)
        return projects
    } else {
        const titleW = 10
        const tagW = 5
        const shortDescW = 3
        const longDescW = 1.5
        let result = []

        let keyWords = searchText.split(' ').filter((keyWord) => keyWord !== '')
        projects.forEach((project) => {
            let weight = 0
            keyWords.forEach((keyWord) => {
                try {
                    weight += project.projectName.match(new RegExp(keyWord, 'gi')).length * titleW
                } catch (ignore) {
                }
                try {
                    weight += project.shortDesc.match(new RegExp(keyWord, 'gi')).length * shortDescW
                } catch (ignore) {
                }
                try {
                    weight += project.longDesc.match(new RegExp(keyWord, 'gi')).length * longDescW
                } catch (ignore) {
                }
                project.tags.forEach((tag) => {
                    if (tag.match(new RegExp(keyWord, 'gi'))) {
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
    const project = projectMap.get(name)
    if (project && (project.longDesc !== '' || project.longDescLink !== '' || project.buttons.length > 0)) {
        return project
    } else {
        return undefined
    }
}

export {projectMap}
