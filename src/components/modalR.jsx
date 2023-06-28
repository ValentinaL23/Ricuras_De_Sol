import '../stylesheets/modalR.scss'
import ListoR from '../icono/okR.svg'
import { Link } from 'react-router-dom'

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
        <Link className='dirigir' to='/home'>ir a pág principal</Link>
        <div className='closeR' onClick={actionR}></div>
      </div>
    </div>
  )
}

export default Modal;