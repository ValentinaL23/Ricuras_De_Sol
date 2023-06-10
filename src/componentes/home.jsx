import React, { useState } from "react";
import Dropdown from "./dropdown";
import '../stylesheets/home.css'
import RSol from '../img/RSol copy.png'
import menu from '../img/Menu.png'
import Check from '../icono/Check.png'

export default function Home() {
  const [nombrehm, setNombrehm] = useState("")
  const [celular, setCelular] = useState("")
  const [ctpaq, setCtpaq] = useState("")

  /*var input = document.getElementById('numero');
  
  input?.addEventListener('input', () => {
    if (this.value.length > 12) 
       this.value = this.value.slice(10);
  })*/

  const [popupStyle, showPopup] = useState("hide")
  const popup = () => {
    showPopup("pedido-popup")
    setTimeout(() => showPopup("hide"), 5000)
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
            placeholder="Nombre"
            value={nombrehm}
            onChange={e => setNombrehm(e.target.value)} />
          <input className="dato-celular"
            type="number"
            placeholder="Celular"
            value={celular}
          onChange={e => setCelular(e.target.value)} />
        </div>
        <div>
          <label htmlFor="Cpaquetes">Cantidad de paquetes:</label><br/>
          <input type="number" name="Cpaquetes"
            value={ctpaq}
            onChange={e => setCtpaq(e.target.value)} />
        </div>
        <div className="tmp">
          <label htmlFor="Tpaquete">Tamaño de paquete:</label><br/>
          <Dropdown />
        </div>
        <button className="pedido-btn" onClick={popup}>
          enviar pedido
        </button>
        <img className="menu"
          src={menu}
          alt="Menú de paquetes" />
      </form>
      <div className={popupStyle}>
        {/* <img className="logo-check"
          src={Check}
          alt="Pedido aprobado" /> */}
        <p>pedido aprobado</p>
      </div>
    </div>
  )
}