import style from "../navbar/NavBar.module.css"

export const NavBar = () => {
    return (
        <nav className={style.navBar}>
            <p>Experiencia</p>
            <p>Stack</p>
            <p>Sobre mi</p>
        </nav>
    )
}