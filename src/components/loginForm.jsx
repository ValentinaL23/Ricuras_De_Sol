import React, { useState } from "react";
import '../stylesheets/loginForm.css'
import Logo from "../img/RSol copy.png";
import { Link } from "react-router-dom";

function Login({ setUser }) {
  const [nombre, setNombre] = useState("")
  const [contraseña, setContraseña] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    setUser([nombre])
  }

  return (
    <div className="login">
      <div className="logo-login">
        <img className="logo" 
          src={Logo}
        />
        <h1 className="Tl-login">Login</h1>
      </div>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text" placeholder="nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)} />
        <input
          type="password" placeholder="contraseña"
          value={contraseña}
          onChange={e => setContraseña(e.target.value)} />
        <Link className="login-btn" to='home'>Iniciar Sesión</Link>
        <Link className="registro-btn" to='/registro'>Registrarse</Link>
      </form>
      
    </div>
  )
}

export default Login