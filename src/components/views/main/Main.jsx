import { forwardRef } from "react";
import { Experience } from "../../experience/Experience";
import style from "../main/Main.module.css";

export const Main = forwardRef((_, ref) => {
    return (
        <main className={style.main} ref={ref}>
            <Experience />
        </main>
    )
})