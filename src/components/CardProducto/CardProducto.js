import './CardProducto.scss'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/cartContext';



export const CardProducto = ({title, text, img, cat, id, stock, item}) => {
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
      <Card  style={{ width: '16rem' }} className= "card_container my-1">
        <Card.Img variant="top" src={img} className="image_card"/>
        <Card.Body className='card_body'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Precio = ${text}</Card.Text>
          <Link to={`/detail/${id}`} className="btn btn-primary btn-lg ver_mas" >VER MAS</Link>
          <Card.Text className='text'>Categoria = {cat}</Card.Text>
          {
            isInCart(item.id)
              ?<Link to={"/cart"} className="btn btn-primary ver_mas">Terminar</Link>  
              :<ItemCount max={stock} item={item} cantidad={cantidad} setCantidad={setCantidad} agregar={agregar}/>

          }
          
        </Card.Body>
      </Card>
    );
  }
  
  
