import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import Swal from 'sweetalert2'

export const LoginContext=createContext();

export const LoginProvider=({children})=>{
const [user, setUser]=useState({
    email:null,
    logged:false,
    
})

const register = (values) =>{
createUserWithEmailAndPassword(auth, values.email, values.password)
   .catch((err)=>
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err,
        footer: "Ingrese nuevamente la informacion"
    }))
}

const login =(values)=>{

    signInWithEmailAndPassword(auth, values.email, values.password)
  .catch((err)=>
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err,
        footer: "Ingrese nuevamente la informacion"
    }))
    
}

const logout = () => {
    signOut(auth)
        .then(()=>{
            setUser({
                email: null,
                logged: false
            })
        })

}

useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
        if(user){
            setUser({
                email:user.email,
                logged:true
            })
        }else{
            logout()
        }

    })
},[])

    return(
        <LoginContext.Provider value={{
            user,
            login,
            logout,
            register
        }}>
            {children}
        </LoginContext.Provider>
    )
}