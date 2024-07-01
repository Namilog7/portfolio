import style from "./Presentation.module.css"

export const Presentation = () => {
    return (
        <section className={style.section}>
            <div className={style.presentation}>
                <div>
                    <p>Hola! soy</p>
                </div>
                <div>
                    <h1><span className={style.name}>Gonzalo Baez</span>.</h1>
                </div>
                <div>
                    <p>Desarrollador <span className={style.namespan}>Full Stack </span>
                        buscando ganar experiencia orientada al <span className={style.namespan}>Frontend</span>,
                        proactivo y aunque me gusta ser autodidacta, con mentoría podria aprender mucho mas rápido.</p>
                </div>
                <div className={style.divButton}><button className={style.buttonCv}>Descargar CV</button></div>
            </div>
            <div className={style.imageProfile}>
                <img src="/fotoportfolio.jpg" alt="fotoperfil" />
            </div>
        </section>
    )
}