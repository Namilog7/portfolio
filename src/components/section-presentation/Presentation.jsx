import style from "./Presentation.module.css";
import { FaFileDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Presentation = () => {
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
                    <a href="" className={style.links}><FaGithub className={style.icons} />   </a>
                    <a href="" className={style.links}><FaLinkedin className={style.icons} />   </a>
                    <button className={style.buttonCv}>
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