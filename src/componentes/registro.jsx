import React, { useState } from "react";
import '../stylesheets/registro.css'
import RSol from '../img/RSol copy.png'

export default function Registro() {
  const [nombre, setNombre] = useState("")
  const [celular, setCelular] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [repContraseña, setRepContraseña] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (nombre === "" || contraseña === "") {
      setError(true)
      return
    }
    setError(false)
  }

  return(
    <div className="registro">
      <div className="logo-login">
        <img
          className="logo-RSol"
          src={RSol}
          alt="Logo de Ricuras de Sol" />
        <h1>Login</h1>
      </div>
      <form className="formu" onSubmit={handleSubmit}>
        <div className="datos-reg">
          <input className="nombre"
            type="text" placeholder="nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)} />
          <input className="celular" type="tel" placeholder="celular"
            value={celular}
            onChange={e =>  setCelular(e.target.value)} />
          <input className="contraseña" type="password" placeholder="contraseña"
            value={contraseña}
            onChange={e => setContraseña(e.target.value)} />
          <input className="repcontraseña" type="password" placeholder="repetir contraseña"
            value={repContraseña}
            onChange={e => setRepContraseña(e.target.value)} />
        </div>
          <button className="login-boton">Iniciar Sesión</button>
      </form>
      {error && <p>Todos los campos{"\n"} son obligatorios</p>}
    </div>


  )
}
