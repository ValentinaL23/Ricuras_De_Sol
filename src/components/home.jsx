import React, { useState } from "react";
import Dropdown from "./dropdown";
import '../stylesheets/home.scss'
import RSol from '../img/RSol copy.png'
import menu from '../img/Menu.png'
import ModalH from './modalH';

export default function Home() {
  const [nombrehm, setNombrehm] = useState("")
  const [celular, setCelular] = useState("")
  const [ctpaq, setCtpaq] = useState("")
  const [modalState, setModalState] = useState(false)
  function openModal() {
    setModalState(!modalState)
  }
  /*var input = document.getElementById('numero');
  
  input?.addEventListener('input', () => {
    if (this.value.length > 12) 
       this.value = this.value.slice(10);
  })*/

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
          <input className="cntpaq" type="number" name="Cpaquetes"
            value={ctpaq}
            onChange={e => setCtpaq(e.target.value)} 
            />
        </div>
        <div className="tmp">
          <label htmlFor="Tpaquete">Tamaño de paquete:</label><br/>
          <Dropdown />
        </div>
        <div className="container">
          {/* {modalState.toString()} */}
          <span className="togglemodal" onClick={openModal}>
            Enviar pedido</span>
          <ModalH toggle={modalState} action={openModal} />
        </div>
        <img className="menu"
          src={menu}
          alt="Menú de paquetes" />
      </form>
      
    </div>
  )
}