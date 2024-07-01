import style from "../card-experience/CardExperience.module.css";
import { RiArrowRightUpLine } from "react-icons/ri";

export const CardExperience = ({ name, url, detail, stack, linkExperience }) => {
    return (
        <div className={style.card}>
            <div className={style.img}>
                <div className={style.arrow}><a href={linkExperience} target="_blank" className={style.linkExp}><RiArrowRightUpLine className={style.icons} /></a> </div>
                <a href={linkExperience} target="_blank" className={style.linkExp}><img src={url} alt={"youtube"} /></a>
            </div>
            <div className={style.data}>
                <h3>{name} </h3>
                <p>{detail} </p>
                <h3>Stack:</h3>
                <div className={style.stack}>
                    {stack?.map(st => {
                        return <a href={st.link} target="_blank" className={style.a}><st.icon className={style.icons} /></a>
                    })}
                </div>
            </div>
        </div>
    )
}