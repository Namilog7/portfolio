import style from "../certifieds/Certifieds.module.css";
import { certifieds, certifiedsData } from "./certifieds";

export const Certifieds = () => {
    return (
        <section className={style.section}>
            <div className={style.content}>
                {certifieds.map((item, index) => {
                    return <a href={certifiedsData[index].url} target="_blank" style={{ width: "max-content" }} >
                        <div className={style.images} >
                            <img src={item} alt={item} className={style.img} />
                            <div className={style.divData}>
                                <p className={style.data}>{certifiedsData[index]?.entity} </p>
                                <p className={style.data} >{certifiedsData[index]?.course} </p>
                            </div>
                        </div>
                    </a>
                })}
            </div>
        </section>
    )
}