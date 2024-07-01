import { Experience } from "../../experience/Experience";
import style from "../main/Main.module.css";

export const Main = () => {
    return (
        <main className={style.main}>
            <Experience />
        </main>
    )
}