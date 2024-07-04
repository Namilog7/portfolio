import style from "./NavBar.module.css"

export const NavBar = ({ section1, section2, section3, scrollComponent }) => {
    return (
        <nav className={style.navBar}>
            <div>
                <p><span>{"</>"}</span>Dev</p>
            </div>
            <div>
                <p className={style.links} onClick={() => scrollComponent(section1)}>Inicio</p>
                <p className={style.links} onClick={() => scrollComponent(section2)}>Experiencia</p>
                <p className={style.links} onClick={() => scrollComponent(section3)}>Contacto</p>
            </div>
        </nav>
    )
}