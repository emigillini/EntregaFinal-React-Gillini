import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { ColorRing } from "react-loader-spinner"
import './ItemDetailContainer.scss'
import { doc , getDoc} from "firebase/firestore"
import { db } from "../../firebase/config"


export const ItemDetailContainer=()=>{
    const [item, SetItem]= useState(null)
    const [loading, setLoading]= useState(true)
    const {itemId} =useParams()

    useEffect(()=>{
    setLoading(true)

    const docRef = doc(db, "productos", itemId)
   
    getDoc(docRef)
        .then((doc) => {
            SetItem({
                id: doc.id,
                ...doc.data()
            })
        })
        .finally(() => { setTimeout(() => {
            setLoading(false);
        }, 2000);
        });
    },[itemId])

return(
    <div className="container my-5 ">
        {
            loading
            ?<div>
            <br/>
            <br/>
            <br/>
            <ColorRing height={250} width={250} />
            </div>
            :<ItemDetail item={item}/>
        }

    </div>
    )
}

