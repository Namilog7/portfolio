import style from "../about/AboutMe.module.css"

export const AboutMe = () => {
    return (
        <section className={style.section} >
            <div className={style.content}>
                <p>👨‍💻 Soy desarrollador Full Stack,he realizado Front-End con React, Redux Toolkit, Tailwind y Back-End con Node, Express, PostgreSQL, Sequelize.
                    <br />
                    🚀 Estoy familiarizado con los flujos de trabajo de Git, el uso de Trello para la gestión de proyectos y el marco de trabajo SCRUM, estructuras de datos: Listas enlazadas, pilas, colas, árboles binarios.
                    <br />
                    🎯Soy autodidacta y busco ganar experiencia en el mundo Tech. Actualmente tomando cursos en Platzi
                    <br />
                    Por mi horario de trabajo mañana y tarde/noche me es difícil ajustarme a una carrera informática, pero de entrar en la industria mi plan es hacer una tecnicatura en analisis de sistemas a la par del trabajo.
                </p>
            </div>
        </section>
    )
}