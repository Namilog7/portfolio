import style from "../stack/Stack.module.css"
import { iconsLearning } from "./learning";

export const Learning = () => {
    return (
        <section className={style.section}>
            {Object.values(iconsLearning).map((item, index) => {
                return <div className={style.divIcons}>
                    <item.icon key={index} className={style.icons} />
                    <div className={style.name}>{item.name} </div>
                </div>
            })}
        </section>
    )
}