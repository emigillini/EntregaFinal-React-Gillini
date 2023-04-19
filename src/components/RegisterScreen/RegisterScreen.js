import { useContext, useState } from 'react'
import './RegisterScreen.scss'
import { Link } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext'

export const RegisterScreen=()=>{

   const {register} = useContext(LoginContext)


    const [values, setValues] = useState({
        email:"",
        password:"",
    }
    )

    const handleChange=(e)=>{
        setValues({
            ...values,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        register(values)
        
    }

return(

    <div className="login_container ">
        <div className="login">
            <h2>Bienvenido ingrese su informacion</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        name='email'
                        onChange={handleChange}
                        value={values.email}
                        type={"email"}
                        className= "form-control my-2"
                        placeholder="Ingrese su e-mail"
                        />
                    <input
                        name='password'
                        onChange={handleChange}
                        value={values.password}
                        type={"password"}
                        className= "form-control my-2"
                        placeholder="Ingrese su password"
                        />

                    <button className="btn btn-primary ver_mas m-2"  type="submit">Registrarme</button>
                    <Link to={"/login"} className="btn btn-primary ver_mas m-2">Ya estoy registrado</Link>
                    

                </form>
            
                    
        </div>
    </div>
        
)
}