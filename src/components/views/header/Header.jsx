import { forwardRef } from "react";
import { Presentation } from "../../section-presentation/Presentation";
import style from "./Header.module.css"


export const Header = forwardRef((_, ref) => {
    return (
        <header className={style.header} ref={ref}>
            <Presentation />
        </header>
    );
});