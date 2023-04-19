import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';


export const CartWidget = () =>{
    const {totalCantidad, cart} = useContext(CartContext)

    return(
        <Link to={"/cart"} className={cart.length>0? "cart-widget-icon cart-widget-empty.visible":"cart-widget-empty"}>

            <FaShoppingCart/>
        
            <span className="cart-widget-icon"> {totalCantidad()}</span>
        </Link>
    )
}