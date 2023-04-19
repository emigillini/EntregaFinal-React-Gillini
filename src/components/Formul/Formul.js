import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { ColorRing } from 'react-loader-spinner';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './Formul.scss'

export const Formul= ()=> {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 2000);
  }, []);

  const [values, setValues]=useState({
    contacto:'',
    email:'',
    telefono:'',  
    consulta:''
  });

  const handleChange=(e)=>{
    setValues({
      ...values,
      [e.target.name] : e.target.value,
    });
  };

  const handleSubmit= async (e)=>{
    e.preventDefault();
    setTimeout(() => {
      Swal.fire({
        icon: 'success',
        title: 'Su consulta a sido enviada',
        footer: "En breve lo contactaremos"
      });
    }, 2000);

    const consultas ={
      cliente:values,
      fechaYhora:new Date()
    };

    const consRef = collection(db, "consultas");
    await addDoc(consRef, consultas);
    
  };

  return (
    <div>
      {loading ? (
        <div>
          <br />
          <br />
          <h2>Contacto</h2>
          <br />
          <br />
          <ColorRing height={250} width={250} />
        </div>
      ) : (
        <div className="form_container">
          <div className="formulario">
            <h2>Ingrese su Consulta</h2>
            <hr />

            <form onSubmit={handleSubmit} >
              <input
                name='contacto'
                onChange={handleChange}
                value={values.contacto}
                type={"text"}
                className="form-control my-2"
                placeholder="Ingrese su nombre y apellido"
              />
              <input
                name='email'
                onChange={handleChange}
                value={values.email}
                type={"text"}
                className="form-control my-2"
                placeholder="Ingrese su e-mail"
              />
              <input
                name='telefono'
                onChange={handleChange}
                value={values.telefono}
                type={"text"}
                className="form-control my-2"
                placeholder="Ingrese su numero de telefono"
              />
              <textarea
                name='consulta'
                rows="5" 
                onChange={handleChange}
                value={values.consulta}
                type={"text"}
                className="form-control my-2"
                placeholder="Ingrese su consulta"
              />

              <button className="btn btn-primary ver_mas m-2" type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
