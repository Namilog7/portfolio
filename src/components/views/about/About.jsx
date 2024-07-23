import { AboutMe } from "../../componentsAbout/about/AboutMe.jsx"
import style from "../about/About.module.css"
import { Link, useNavigate, Route, Routes, useLocation } from "react-router-dom"
import { Stack } from "../../componentsAbout/stack/Stack.jsx"
import { Certifieds } from "../../componentsAbout/certifieds/Certifieds.jsx"
import { forwardRef, useEffect, useRef } from "react"
import { Learning } from "../../componentsAbout/learning/Learning.jsx"

export const About = forwardRef((_, ref) => {
    const match = useLocation();
    const refA = useRef(null);
    const navigate = useNavigate()

    const addAnimation = (e) => {
        if (e.target.id === match.pathname) return console.log("ya esta")
        refA.current.classList.add(style.animation)
        setTimeout(() => {
            refA.current.classList.remove(style.animation)
        }, 500)
    }
    useEffect(() => {
        navigate("/aboutme")
    }, [])

    return (
        <section className={style.section} ref={ref}>
            <h2>Sobre mi & Stack</h2>
            <div className={style.about} >
                <nav className={style.nav} >
                    <div className={style.links} >
                        <Link to="/aboutme" style={{ textDecoration: "none" }}> <p id="/aboutme" onClick={() => addAnimation(event)} className={match.pathname == "/aboutme" ? style.active : null} >Un poco de mi</p></Link>
                        <Link to="/stack" style={{ textDecoration: "none" }} ><p id="/stack" onClick={() => addAnimation(event)} className={match.pathname == "/stack" ? style.active : null} >Stack</p></Link>
                        <Link to="/learning" style={{ textDecoration: "none" }} > <p id="/learning" onClick={() => addAnimation(event)} className={match.pathname == "/learning" ? style.active : null} >Aprendiendo</p> </Link>
                        <Link to="/certifieds" style={{ textDecoration: "none" }} > <p id="/certifieds" onClick={() => addAnimation(event)} className={match.pathname == "/certifieds" ? style.active : null} >Certificados</p> </Link>
                    </div>
                </nav>
                <div className={style.routes} ref={refA}>
                    <Routes>
                        <Route path="/aboutme" element={<AboutMe />} />
                        <Route path="/stack" element={<Stack />} />
                        <Route path="/learning" element={<Learning />} />
                        <Route path="/certifieds" element={<Certifieds />} />
                    </Routes>
                </div>
            </div>
        </section >
    )
})