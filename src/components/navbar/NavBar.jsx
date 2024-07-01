import style from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <nav className={style.navBar}>
            <div>
                <p><span>{"</>"}</span>Dev</p>
            </div>
            <div>
                <p className={style.links}>Experiencia</p>
                <p className={style.links}>Stack</p>
                <p className={style.links}>Sobre mi</p>
            </div>
        </nav>
    )
}