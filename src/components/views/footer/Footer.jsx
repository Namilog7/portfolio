import style from "../footer/Footer.module.css"
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { forwardRef } from "react";
import { IoLocationSharp } from "react-icons/io5";

export const Footer = forwardRef((_, ref) => {
    return (
        <footer className={style.footer} ref={ref}>
            <div className={style.container}>
                <div className={style.data}>
                    <h4>Contáctame</h4>
                    <div>
                        <IoLocationSharp className={`${style.icons} ${style.location}`} />
                        <p style={{ fontWeight: "bold", color: "white" }}>Argentina, Buenos Aires</p>
                    </div>
                    <div>
                        <a style={{ textDecoration: "none", color: "aliceblue" }} href="mailto:gonzalobaeznoriega@gmail.com" ><CgMail className={style.icons} /></a>
                        <p style={{ fontWeight: "bold", color: "white" }}> gonzalobaeznoriega@gmail.com</p>
                    </div>
                    <div>
                        <a style={{ textDecoration: "none", color: "aliceblue" }} href="https://wa.me/+541161159151" target="_blank"> <FaWhatsapp className={style.icons} /></a>
                        <p style={{ fontWeight: "bold", color: "white" }}> +54 1161159151</p>
                    </div>
                </div>
                <div className={style.contact}>
                    <div className={style.divIcons}>
                        <h4>Redes</h4>
                        <div>
                            <a href="https://www.instagram.com/gonzalo.baeznoriega/?igsh=MXVjOGl5a2d6ZDI3MA%3D%3D" className={style.link}><FaInstagram className={style.icons} /> </a>
                            <p style={{ fontWeight: "bold", color: "white" }}>Instagram</p>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/gonzaelgunner.baez?mibextid=ZbWKwL" className={style.link}><FaSquareFacebook className={style.icons} /> </a>
                            <p style={{ fontWeight: "bold", color: "white" }}>Facebook</p>
                        </div>
                        <div>
                            <a href="https://github.com/Namilog7" className={style.link}><FaGithub className={style.icons} /> </a>
                            <p style={{ fontWeight: "bold", color: "white" }}>Github</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
})