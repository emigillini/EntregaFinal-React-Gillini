import { FaFacebookSquare, FaWhatsappSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import './Footer.scss'

export const Footer= ( )=>{
    return(
        <footer className="footer">

            <nav className="footer_redes">

                
                <a href="https://www.facebook.com/"  className="footer_redes_links" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>

                <a href="https://web.whatsapp.com/"  className="footer_redes_links" target="_blank" rel="noopener noreferrer"><FaWhatsappSquare /></a> 

                <a href="https://twitter.com/?lang=es"  className="footer_redes_links" target="_blank" rel="noopener noreferrer"><FaTwitterSquare/></a> 

                <a href="https://www.instagram.com/"  className="footer_redes_links" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>  


            </nav>

            <div className="footer_derechos">

            <p>© 2022 Carolinska. Todos los derechos reservados.</p>

            </div>

        </footer>

    )

    
}