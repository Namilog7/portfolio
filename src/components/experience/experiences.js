import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiSequelize } from "react-icons/si";


export const iconsForStack = {
    javascript: {
        name: "Javascript",
        icon: SiJavascript
    },
    react: {
        name: "ReactJS",
        link: "https://react.dev",
        icon: FaReact
    },
    tailwind: {
        name: "TailwindCss",
        link: "https://tailwindcss.com",
        icon: RiTailwindCssFill
    },
    reduxToolkit: {
        name: "RTK",
        link: "https://redux-toolkit.js.org/",
        icon: SiRedux
    },
    nodejs: {
        name: "NodeJS",
        link: "https://nodejs.org/",
        icon: FaNodeJs
    },
    expressjs: {
        name: "ExpressJS",
        link: "https://expressjs.com",
        icon: SiExpress
    },
    css: {
        name: "Css",
        icon: FaCss3
    },
    html: {
        name: "Html",
        icon: FaHtml5
    },
    sequelize: {
        name: "Sequelize",
        icon: SiSequelize
    }
}

export const experiences = [
    {
        name: "Starwork",
        linkExperience: "https://www.youtube.com/watch?v=fVJ6mqh1T1s",
        url: `https://img.youtube.com/vi/fVJ6mqh1T1s/hqdefault.jpg`,
        detail: "App de gestión para una startup educativa, su modelo de negocio se basa en invitar a supervisores a la app y que estos puedan invitar tantos empleados según el arreglo con la startup, una vez invitados , el supervisor les asigna los cursos disponibles en la app mas día y horario a enviar, a los empleados les llega vía email su invitación a cada clase del curso hasta completarlo.",
        stack: [iconsForStack.react, iconsForStack.tailwind, iconsForStack.reduxToolkit, iconsForStack.nodejs, iconsForStack.expressjs, iconsForStack.sequelize]
    }
]