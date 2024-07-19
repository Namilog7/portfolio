import { CardExperience } from "../card-experience/CardExperience.jsx";
import style from "../experience/Experience.module.css";
import { experiences } from "./experiences.js";

export const Experience = () => {

    return (
        <div className={style.contenedor}>
            <h2>Experiencia</h2>
            <section className={style.sectionExp}>
                {experiences.map(exp => {
                    return <CardExperience name={exp.name} url={exp.url} detail={exp.detail} stack={exp.stack} linkExperience={exp.linkExperience} />
                })}
            </section>
        </div>
    )
}