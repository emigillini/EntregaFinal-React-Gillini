import { useEffect, useState } from "react"
import { CardProducto } from "../CardProducto/CardProducto";



export const Pokeappi=()=>{

    const  [ pokemon, setPokemon]=useState(null);
    const [id, setId]= useState(1);
    console.log(pokemon)
    


    useEffect(()=>{
        fetch ( `https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res)=>
            res.json())
            .then((data)=>{
                setPokemon(data)
            })
            .catch((error)=>{
                alert(error)
            })


    },[id])

    const siguiente=()=>{
        setId(id+1)

    }

    const anterior=()=>{
        id >1 && setId(id-1)

    }

    return (

        <div className="container-fluid col-2 mb-6 my-3" >
            
        {
        pokemon &&
        <div className="mb-6 my-2">


        <CardProducto title={pokemon.name} text={pokemon.name} img={pokemon.sprites.front_default}/>

        <button className="btn btn-danger" onClick={anterior} >anteruir</button>
        <button className="btn btn-danger" onClick={siguiente}>siguiente</button>
        
        </div>
        
        }

        </div>
    

    )
}