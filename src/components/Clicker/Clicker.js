import { useState , useEffect} from "react";

export const Clicker = ({name}) =>{
let [counter, sumar] = useState(0);
const[fecha, setFecha] = useState (new Date())

const sumarClick = () =>{
    sumar(counter+1);
    setFecha(new Date ())
}
const restarClick = () =>{
    
    if(counter<=0){
        sumar(counter=0);}
        else{
        sumar(counter-1);
    }
}
useEffect(()=>{
console.log("gato")
return()=>{
    console.log("essssss")
}
}, [counter]);

    return(
        <div className="container">
            <div className="col-xl-12">
            <h2> {name}</h2>
            <hr/>
            <p>Click {counter}</p>
            <p>Fecha {fecha.toLocaleString()}</p>
            
            <button className="btn  btn-dark m-1" onClick={sumarClick}>suma</button>
            <button className="btn  btn-dark m-1" onClick={restarClick}>resta</button>
    
        </div>
        </div>

    )
}