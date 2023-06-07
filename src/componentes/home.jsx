import React, { useState } from "react";
import { Dropdown } from "./dropdown";

export function Home() {
  const [selected, setSelected] = useState("Seleccione una opción")
  
  return (
    <div className="home">
      <form>
        <input type="date" />
        <input className="dato-nombre"
          type="text"
          placeholder="Nombre" />
        <input className="dato-celular"
          type="number"
          placeholder="Celular" />
        <div>
          <label for="Cantidad de paquetes"></label><br/>
          <input type="number"/>
          <label for="Tamaño de paquete"></label><br/>
          <Dropdown selected={selected} setSelected={setSelected}/>
        </div>
        <button className="pedido-btn">
          enviar pedido
        </button>
      </form>
    </div>
  )
}