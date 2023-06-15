import React, { useState } from "react";
import '../stylesheets/loginForm.css'
// import Registro from "./registro";

function Login({ setUser }) {
  const [nombre, setNombre] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (nombre === "" || contraseña === "") {
      setError(true)
      return
    }
    setError(false)

    setUser([nombre])
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text" placeholder="nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)} />
        <input
          type="password" placeholder="contraseña"
          value={contraseña}
          onChange={e => setContraseña(e.target.value)} />
        <button className="login-btn">Iniciar Sesión</button>
      </form>
      {error && <p>Todos los campos son obligatorios</p>}
    </div>
  )
}

export default Login