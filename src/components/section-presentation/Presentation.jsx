import style from "./Presentation.module.css";
import { FaFileDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Presentation = () => {
    const downloadCv = () => {
        const link = document.createElement("a")
        link.href = "GonzaloBaez-CV.pdf"
        link.download = "Gonzalo-Baez-CV.pdf"
        link.click()
    }

    return (
        <section className={style.section}>
            <div className={style.presentation}>
                <div>
                    <p>Hola! soy</p>
                </div>
                <div>
                    <h1><span className={style.name}>Gonzalo Baez.</span></h1>
                </div>
                <div>
                    <p>Desarrollador <span className={style.namespan}>Full Stack </span>
                        buscando ganar experiencia orientada al <span className={style.namespan}>Frontend</span>,
                        proactivo y aunque me gusta ser autodidacta, con mentoría podría aprender mucho mas rápido.</p>
                </div>
                <div className={style.divButton}>
                    <a href="https://github.com/Namilog7" target="_blank" className={style.links}><FaGithub className={style.icons} />   </a>
                    <a href="https://www.linkedin.com/in/gonzalo-david-baez-noriega/" target="_blank" className={style.links}><FaLinkedin className={style.icons} />   </a>
                    <button className={style.buttonCv} onClick={downloadCv}>
                        <FaFileDownload className={style.filecv} />
                        Descargar CV</button>
                </div>
            </div>
            <div className={style.imageProfile}>
                <img src="/fotoportfolio.jpg" alt="fotoperfil" />
            </div>
        </section>
    )
}