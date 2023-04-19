import './NavBar.scss'
import logo from './logo-caro-modified.png'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import { useContext } from 'react'


export const NavBar = ( )=>{

    const{user, logout}= useContext(LoginContext)

    return(
        <header className="header">
            
            <div className="header_container ">

                <img className='header_logo' src={logo} alt= "logo" />

                <nav className="navbar">    

                    <Link className="navbar_link" to={"/"}>Productos</Link>
                    <Link className="navbar_link" to={"/Productos/Clasicas"}>Tazas Clasicas</Link>
                    <Link className="navbar_link" to={"/Productos/Modernas"}> Tazas Modernas</Link>
                    <Link className="navbar_link" to={"/Productos/Infantiles"}>Tazas Infantiles</Link>
                    <Link className="navbar_link" to={"./Nosotros"}>Nosotros</Link>
                    <Link className="navbar_link" to={"./Formul"}>Contacto</Link>
                    
                </nav>

            <CartWidget/>
            <div className='user'>
                <h6> Bienvenido {user.email} </h6>
                <button className='btn btn-danger' onClick={logout}>Salir</button>
            </div>

            </div>

        </header>

    )
}