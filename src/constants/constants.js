import project1 from "../../public/images/projects/mozilla-pic.png";
import project2 from "../../public/images/projects/acm-pic.png";
import project3 from "../../public/images/projects/discord-pic.png";
import project4 from "../../public/images/projects/chaos-pic.png";
import project5 from "../../public/images/projects/uber.png";
import project6 from "../../public/images/projects/chess.png";
import project7 from "../../public/images/projects/pacman-pic.png";
import project8 from "../../public/images/projects/minecraft.png";
import project9 from "../../public/images/projects/mystery.jpg";
import project10 from "../../public/images/projects/btd-pic.png";

export const SkillList = [
    { name:"CSS",  x: '-5vw', y: '-12vw', i:0},
    { name:"HTML", x:"-30vw", y:"2vw", i:1},
    { name:"Java", x:"-18vw", y:"3vw", i:2},
    { name:"Python", x:"18vw", y:"14vw", i:3},
    { name:"React", x:"8vw", y:"7vw", i:4},
    { name:"JavaScript", x:"-3vw", y:"-24vw", i:5},
    { name:"NextJS", x:"-25vw", y:"-8vw", i:6},
    { name:"C#", x:"5vw", y:"19vw", i:7},
    { name:"Figma", x:"5vw", y:"19vw", i:8},
    { name:"Unity", x:"26vw", y:"-8vw", i:9},
    { name:"Git", x:"10vw", y:"-6vw", i:10},
    { name:"Phabricator", x:"-5vw", y:"13vw", i:11},
    { name:"TailwindCSS", x:"-10vw", y:"22vw", i:12},
    { name:"Microsoft Office", x:"10vw", y:"-16vw", i:13},
    { name:"Visual Studio", x:"-20vw", y:"-17vw", i:14},
    { name:"C++", x:"-22vw", y:"12vw", i:15},
    { name:"C#", x:"24vw", y: "3vw", i:16},
]

export const Projects = [
    {
        type: "Featured Project",
        title: "Mozilla UI Migrator Modal",
        summary: "An updated migrator modal for Firefox, as part of a CS Capstone Project Program between the California State University,Los Angeles (CSULA) team and the Mozilla Foundation.",
        img: project1,
        link:"n/a",
        github: "n/a",
        id:1
    },
    {
        type: "Web and Internet Programming",
        title: "ACM@CSULA",
        img: project2,
        link:"https://acm-calstatela.com/",
        github:"https://github.com/acm-csula/ACM-Main-Website",
        id:2
    },
    {
        type: "Discord Development",
        title: "Syndicate Discord Bot",
        img: project3,
        link:"https://github.com/BPhi-ai/Syndicate",
        github:"https://github.com/BPhi-ai/Syndicate",
        id:3

    },
    {
        type:"Frontend App Development",
        title:"Uber + Uber Eats App",
        img: project5,
        link:"https://github.com/BPhi-ai/uber-master-app",
        github:"https://github.com/BPhi-ai/uber-master-app",
        id:4
    },
    {
        type:"Web and Internet Programming",
        title:"ChaosSocial",
        img: project4,
        link:"https://github.com/BPhi-ai/ChaosSocial-React",
        github:"https://github.com/BPhi-ai/ChaosSocial-React",
        id:5
    },
    {
        type:"Featured Project",
        title:"Unity 2D Kingdom Card Game",
        summary:"As part of a 'multi-year' Unity development, this will represent a 2D-style card game that uses complex storytelling and card mechanics.",
        img: project9,
        link:"/",
        github:"/",
        id:6
    },
    {
        type:"Game Development",
        title:"ACMium Minecraft Mod (Spring 2023)",
        img: project8,
        link:"https://github.com/BPhi-ai/ACMatic_Experience_Mod",
        github:"https://github.com/BPhi-ai/ACMatic_Experience_Mod",
        id:7
    },
    {
        type:"Unity Game Development",
        title:"Unity Bloons Tower Defense (Fall 2022)",
        img: project10,
        link:"https://github.com/BPhi-ai/ACM-BTDUnityRecreate",
        github:"https://github.com/BPhi-ai/ACM-BTDUnityRecreate",
        id:8
    },
    {
        type:"Unity Game Development",
        title:"Unity Pacman (Fall 2021)",
        img: project7,
        link:"https://github.com/BPhi-ai/ACM-PacmanUnityRemake",
        github:"https://github.com/BPhi-ai/ACM-PacmanUnityRemake",
        id:9
    },
    {
        type:"Game Development",
        title:"Java AI Chess (Fall 2022)",
        img: project6,
        link:"https://github.com/BPhi-ai/Java-Local-Chess",
        github:"https://github.com/BPhi-ai/Java-Local-Chess",
        id:10
    }
]