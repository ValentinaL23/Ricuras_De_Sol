import '../stylesheets/modalH.scss'
import ListoH from '../icono/okH.svg'

function Modal(props) {
  const modalState = props.toggle
  const action = props.action

  return (
    <div className={`${'contenido'} ${modalState ? 'active' : ''}`}>
      <div className='modal'>
        <img 
          className='listo'
          src={ListoH} />
        <p className='pedido'>Pedido Aprobado</p>
        <div className='close' onClick={action}></div>
      </div>
    </div>
  )
}

export default Modal;