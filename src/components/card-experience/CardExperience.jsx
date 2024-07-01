import style from "../card-experience/CardExperience.module.css";
import { RiArrowRightUpLine } from "react-icons/ri";

export const CardExperience = ({ name, url, detail, stack }) => {
    return (
        <div className={style.card}>
            <div className={style.img}>
                <div className={style.arrow}><RiArrowRightUpLine className={style.icons} /> </div>
                <img src={url} alt={"youtube"} />
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