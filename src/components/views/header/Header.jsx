import { NavBar } from "../../navbar/NavBar";
import style from "./Header.module.css"


export const Header = () => {
    return (
        <header className={style.header}>
            <NavBar />
        </header>
    );
};