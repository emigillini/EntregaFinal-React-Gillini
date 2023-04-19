import './ItemDetail.scss'
import { ItemCount } from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ item }) => {
    
    let[cantidad, setCantidad]=useState(1)

    let {sumarCarrito, isInCart}=useContext(CartContext) 
    console.log(isInCart(item.id)) 

    const agregar =()=>{
        const itemCarrito ={
            ...item,
            cantidad,
            
        }
    sumarCarrito(itemCarrito)

    }
    return (
        
        <div className=' container container_detail' >
            <div className='row'>
            <div className='col-4'>  <img className='imagen_detail' src={item.img} alt="Imagen de producto"></img></div>
            <div className='col-8'>  
                <h3 className="texto ">{item.name}</h3>  
                <p className="texto">{item.description}</p>
                
                <small className='detail_precio'>Precio : ${item.precio} </small>
                
                {
                    isInCart(item.id)
                    ?<Link to={"/cart"} className="btn btn-primary ver_mas">Terminar</Link>
                    :<ItemCount max={item.stock} item={item} cantidad={cantidad} setCantidad={setCantidad} agregar={agregar}/>
                    
                }
                <hr/>
                {item.stock<=15 && <small> Apurate quedan pocas unidades!!!!</small>}
                
            </div>
            </div>
        </div>
    )
    }