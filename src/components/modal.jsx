import React, { Component, useState } from "react";
import "../stylesheets/modal.css"
import Check from '../icono/Check.png'

export default function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal)
  }

  setTimeout(() => {
    setModal
  }, 10000)

  if (modal) {
    document.body.classList.add('active-modl')
  } else {
    document.body.classList.remove('active-modl')
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="btn-modal">
        Enviar pedido
      </button>
    
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <img src={Check} alt="Listo" />
            <h3>Pedido Aprobado</h3>
          </div>
        </div>
      )}
      
    </>  
  );
}
