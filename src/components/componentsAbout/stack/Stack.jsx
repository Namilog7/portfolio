import { iconsForStack } from "../../experience/experiences";
import style from "../stack/Stack.module.css";


export const Stack = () => {

    return (
        <section className={style.section} >
            {Object.values(iconsForStack).map((item, index) => {
                return <div className={style.divIcons}>
                    <item.icon key={index} className={style.icons} />
                    <div className={style.name}>{item.name} </div>
                </div>
            })}
        </section>
    )
}