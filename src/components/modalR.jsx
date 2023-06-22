import '../stylesheets/modalR.scss'
import ListoR from '../icono/okR.svg'

function Modal(props) {
  const modalStateR = props.toggle
  const actionR = props.action

  return (
    <div className={`${'contenidoR'} ${modalStateR ? 'active' : ''}`}>
      <div className='modalR'>
        <img 
          className='listoR'
          src={ListoR} />
        <p className='registroE'>Registro Exitoso</p>
        <div className='closeR' onClick={actionR}></div>
      </div>
    </div>
  )
}

export default Modal;