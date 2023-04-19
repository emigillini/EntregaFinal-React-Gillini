import { useContext, useState } from 'react'
import './LoginScreen.scss'
import { LoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom'


export const LoginScreen=()=>{

    const {login} = useContext(LoginContext)


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
        login(values)
        
        
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

                    <button className="btn btn-primary ver_mas m-2"  type="submit">Ingresar con mi informacion</button>
                    <Link to={"/register"} className="btn btn-primary ver_mas m-2">Registrarme</Link>

                </form>
            
                    
        </div>
    </div>
        
)
}