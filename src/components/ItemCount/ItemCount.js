import './ItemCount.scss'

export const ItemCount=({max, cantidad, setCantidad, agregar})=>{
    

    const sumarClick = () =>{
        if(cantidad<max){ setCantidad(cantidad+1)};
    }
    const restarClick = () =>{
        
        if(cantidad<=0){
            setCantidad(cantidad=0);}
            else{
            setCantidad(cantidad-1);
        }
    }
    
return(
    <div>

    <button onClick={restarClick} className={ cantidad>=1?"btn  btn-primary m-1 ver_mas": "btn btn-outline-danger"} >-</button>
    <span className="mx-3">{cantidad}</span>
    <button onClick={sumarClick} className="btn  btn-primary m-1 ver_mas" >+</button>
    <button  onClick={agregar} className={ cantidad>=1?"btn  btn-primary m-1 ver_mas": "btn btn-outline-danger disabled"}  >AGREGAR</button>
    
    </div>
)

}