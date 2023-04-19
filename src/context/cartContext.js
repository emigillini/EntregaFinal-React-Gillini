import { useState, createContext } from "react"

    export const CartContext  = createContext()

    export const CartProvider = ({children})=>{
    
    const [cart , setCart]=useState([])

    const sumarCarrito =(itemCarrito)=>{
        setCart([...cart , itemCarrito ])
    }

    const isInCart =(id)=>{
        return cart.some((prod)=>prod.id === id)
    }

    const totalCantidad =()=>{
        return cart.reduce((acc, prod)=>
        acc+ prod.cantidad, 0)
    }
    const vaciarCarrito=()=>{
        setCart([])
    }
    const totalCarrito = ()=>{
        return cart.reduce((acc, prod)=>
        acc+ prod.cantidad*prod.precio, 0)
    }
    const removerItem=(id)=>{
        setCart(cart.filter((prod)=>prod.id !== id))

    }

    return(
    <CartContext.Provider value={{ cart, sumarCarrito, isInCart, totalCantidad, vaciarCarrito, removerItem,totalCarrito  }}>

    {children}
    </CartContext.Provider>
)
}