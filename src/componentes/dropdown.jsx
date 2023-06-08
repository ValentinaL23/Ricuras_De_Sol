import React, { useState } from "react";
import '../stylesheets/dropdown.css'

function Dropdown({ selected, setSelected }) {
  const [isActive, seIstActive] = useState(false)
  const opciones = ["Pequeñas", "Delgadas", "Gruesas"]

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => seIstActive}>
      {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-cont">
          {opciones.map((opcion) => (
            <div
              onClick={(e) => {
                setSelected(opcion);
                seIstActive(false);
              }}
              className="dropdown-item">
              {opcion}
              </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown