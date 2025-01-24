import './SuccessModal.css'

function SuccessModal({ handleModalClose, isOpen, openLogin }) {
    const signIn = 'Sign In'
    const title = 'Registration succesfully completed'
    return (
        <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
    <div className='modal__content'>
      <h2 className="modal__title">{title}</h2>
      <button type='button' className='modal__close' onClick={handleModalClose}></button>
      <button 
        className={`modal__switch-button ${isOpen ? 'modal_switch-on' : ''}`} 
        onClick={openLogin} type='button'
      >
        {signIn}</button>
    </div>
  </div>
    )
}

export default SuccessModal;