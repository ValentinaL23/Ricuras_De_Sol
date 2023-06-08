import React, { useState } from "react";
import Dropdown from "./dropdown";
import '../stylesheets/home.css'

export default function Home() {
  const [selected, setSelected] = useState("Seleccione una opción")
  var input = document.getElementById('numero');
  
  input?.addEventListener('input', () => {
    if (this.value.length > 12) 
       this.value = this.value.slice(10);
  })
  
  return (
    <div className="home">
        <input className="fecha" type="date" />

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
          <label htmlFor="Cpaquetes">Cantidad de paquetes</label><br/>
          <input type="number" name="Cpaquetes"/>
          <label htmlFor="Tpaquete">Tamaño de paquete</label><br/>
          <Dropdown selected={selected} setSelected={setSelected}/>
        </div>
        <button className="pedido-btn">
          enviar pedido
        </button>
      </form>
    </div>
  )
}