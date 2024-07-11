import { iconsForStack } from "../../experience/experiences";
import style from "../stack/Stack.module.css";


export const Stack = () => {

    return (
        <section className={style.section} >
            <div className={style.stack}>
                {Object.values(iconsForStack).map((item, index) => {
                    return <item.icon key={index} className={style.icons} />
                })}
            </div>
        </section>
    )
}