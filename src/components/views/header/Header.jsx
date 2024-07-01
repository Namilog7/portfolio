import { Presentation } from "../../section-presentation/Presentation";
import style from "./Header.module.css"


export const Header = () => {
    return (
        <header className={style.header}>
            <Presentation />
        </header>
    );
};