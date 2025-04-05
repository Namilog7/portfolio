import style from "../about/AboutMe.module.css"

export const AboutMe = () => {
    return (
        <section className={style.section} >
            <div className={style.content}>
                <p>👨‍💻 Soy desarrollador Full Stack, y he realizado tanto Front-End con React, Redux Toolkit, Tailwind, como Back-End con Node, Express, PostgreSQL, Sequelize.
                    <br />
                    🚀 Estoy familiarizado con los flujos de trabajo de Git, el uso de Trello para la gestión de proyectos y el marco de trabajo SCRUM, estructuras de datos: Listas enlazadas, pilas, colas, árboles binarios.
                    <br />
                    🎯Estudio Análisis de Sistemas, entusiasta de la tecnología, realizo trabajos de desarrollo web por mi cuenta, y me encanta aprender todo lo que sume a mi carrera profesional.
                </p>
            </div>
        </section>
    )
}