import './ItemListContainer.scss'
import { CardProducto } from '../CardProducto/CardProducto';
import { useEffect, useState } from 'react';
import {ColorRing} from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'




export const ItemListContainer=()=>{  

    const [productos, setProductos]= useState([]);
    const [loading, setLoading]= useState(true);
    

    const {categoryId} = useParams()
    console.log({categoryId})

    useEffect(() => {
        setLoading(true)

        const prodRef = collection(db, "productos")
        const q = categoryId 
                    ? query(prodRef, where("categoria", "==", categoryId))
                    : prodRef

                    getDocs(q)
                    .then((res) => {
                      setProductos(res.docs.map((doc) => {
                        return {
                        id: doc.id,
                        ...doc.data()
                        }
                    }))
                    })
                    .finally(() => {
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                    });
                }, [categoryId]);
                
    
    return(
       
        <div className='itemlistcontainer container-fluid ' >
        
        <h2 className='titulo'>Tienda de Tazas Carolinska ¡Bienvenido!</h2>
        
        {
            loading
                ?<div>
                    <br/>
                    <ColorRing height={250} width={250} />
                </div>
                
                :<div className=' row '> 
                
        
                {productos.map((prods)=>(
        
                <div key={prods.id} className='itemlistcontainer_product  col pb-2 '>  
        
                <CardProducto title ={prods.name}  text={prods.precio} img={prods.img} cat={prods.categoria} id={prods.id} stock={prods.stock} item={prods} />
            
        
                </div>
        
                ))}
            </div>
        }
        </div>
    )

}