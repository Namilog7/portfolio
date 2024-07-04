import style from "../footer/Footer.module.css"
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { forwardRef } from "react";

export const Footer = forwardRef((_, ref) => {
    return (
        <footer className={style.footer} ref={ref}>
            <div className={style.container}>
                <div className={style.contact}>
                    <div className={style.contactdata}>
                        <h4>Contáctame</h4>
                        <div className={style.email}>
                            <CgMail className={style.icons} />
                            <p>gonzalodavidbaeznoriega@gmail.com</p>
                        </div>
                        <div className={style.wpp}>
                            <FaWhatsapp className={style.icons} />
                            <p>+54 1161159151</p>
                        </div>
                    </div>
                </div>
                <div className={style.redsocial}>
                    <h4>Redes Sociales</h4>
                    <a href="" className={style.link}><FaInstagram className={style.icons} /> </a>
                    <a href="" className={style.link}><FaSquareFacebook className={style.icons} /> </a>
                    <a href="" className={style.link}><FaGithub className={style.icons} /> </a>
                </div>
                <div className={style.suggestions}>
                    <h4 style={{ margin: 0, fontSize: "x-large" }}>Consejos</h4>
                    <p style={{ margin: 0 }}> Si tienes consejos que me ayuden a mejorar te lo agradeceria</p>
                    <form action="" id="form" className={style.formSug}>
                        <input type="text" className={style.inputSug} />
                        <button className={style.button}>Enviar Consejo</button>
                    </form>
                </div>
            </div>
        </footer>
    )
})