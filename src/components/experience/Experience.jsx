import { CardExperience } from "../card-experience/CardExperience.jsx";
import style from "../experience/Experience.module.css";
import { experiences } from "./experiences.js";

export const Experience = () => {

    return (
        <section className={style.sectionExp}>
            <h2>Experiencia</h2>
            {experiences.map(exp => {
                return <CardExperience name={exp.name} url={exp.url} detail={exp.detail} stack={exp.stack} />
            })}
        </section>
    )
}