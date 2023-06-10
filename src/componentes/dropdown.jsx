import React, { useState } from "react";
import '../stylesheets/dropdown.css'

function Dropdown() {
  const opciones = ['Pequeñas', 'Delgadas', 'Gruesas']

  return (
    <div className="dropdown">
      <select>
        {
          opciones.map(opcion => {
            return <option>{opcion}</option>
          })
        }
      </select>
    </div>
  );
}

export default Dropdown