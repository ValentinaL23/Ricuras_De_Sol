import React, { useState } from "react";
import Dropdown from "./dropdown";
import '../stylesheets/home.css'
import RSol from '../img/RSol copy.png'
import menu from '../img/Menu.png'

export default function Home() {
  const [selected, setSelected] = useState("Seleccione una opción")
  const [error, setError] = useState(false)
  var input = document.getElementById('numero');
  
  input?.addEventListener('input', () => {
    if (this.value.length > 12) 
       this.value = this.value.slice(10);
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (nombre === "" || contraseña === "") {
      setError(true)
      return
    }
    setError(false)
  }

  const [popupStyle, showPopup] = useState("hide")
  const popup = () => {
    showPopup("pedido-popup")
    setTimeout(() => showPopup("hide"), 4000)
  }

  return (
    <div className="home">
      <div className="logo-date">
        <img
        className="logo-RS"
        src={RSol}
        alt="Logo de Ricuras de Sol" />
        <input className="fecha" type="date" />
      </div>

      <form className="forml">
        <div className="datos">
          <input className="dato-nombre"
            type="text"
            placeholder="Nombre" />
          <input className="dato-celular"
            type="number"
            min="7" max="10"
            id="numero"
            placeholder="Celular" />
        </div>
        <div>
          <label htmlFor="Cpaquetes">Cantidad de paquetes:</label><br/>
          <input type="number" name="Cpaquetes"/>
        </div>
        <div className="tmp">
          <label htmlFor="Tpaquete">Tamaño de paquete:</label><br/>
          <Dropdown selected={selected} setSelected={setSelected}/>
        </div>
        <button className="pedido-btn" onClick={popup}>
          enviar pedido
        </button>
        <img className="menu"
          src={menu}
          alt="Menú de paquetes" />
      </form>
      <div className={popupStyle}>
        <p>pedido aprobado</p>
      </div>
      {error && <p>Todos los campos{"\n"} son obligatorios</p>}
    </div>
  )
}