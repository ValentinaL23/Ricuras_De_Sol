import React, { useState } from "react";
import '../stylesheets/registro.scss'
import RSol from '../img/RSol copy.png'
import ModalR from './modalR'
import { Link } from "react-router-dom";

export default function Registro() {
  const [nombre, setNombre] = useState("")
  const [celular, setCelular] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [repContraseña, setRepContraseña] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (nombre === "" || repContraseña === "") {
      setError(true)
      return
    }
    setError(false)
  }

  const [modalStateR, setModalStateR] = useState(false)
  function abrirModal() {
    setModalStateR(!modalStateR)
  }

  return(
    <div className="registro">
      <div className="logo-registro">
        <img
          className="logo-RSol"
          src={RSol}
          alt="Logo de Ricuras de Sol" />
        <h1 className="registrarse">Registro</h1>
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
          <div className="container-R">
            <Link className="togglemodalR" onClick={abrirModal} to='/home'>
              Iniciar Sesión
            </Link>
            <ModalR toggle={modalStateR} action={abrirModal} />
          </div>
      </form>
      {error && <p>Todos los campos son obligatorios</p>}
    </div>


  )
}
