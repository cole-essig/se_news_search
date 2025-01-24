import './ModalWithForm.css'

function ModalWithForm({ children, handleModalClose, isOpen, handleSubmit, title, button, switchButton, handleModalSwitch, validInputs }) {
  return (
  <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
    <div className='modal__content'>
      <h2 className="modal__title">{title}</h2>
      <button type='button' className='modal__close' onClick={handleModalClose}></button>
      <form className='modal__form' onSubmit={handleSubmit}>
          {children}
          <div className='modal__form-buttons'>
            <button 
              className={`${!validInputs ? 'modal__submit-button_disabled' : 'modal__submit-button'}`} 
              type='submit' 
              disabled={!validInputs}
            >
              {button}</button>
            <button 
              className={`modal__switch-button ${isOpen ? 'modal_switch-on' : ''}`} 
              onClick={handleModalSwitch} type='button'
            >
              {switchButton}</button>
          </div>
      </form>
    </div>
  </div>
);
}

export default ModalWithForm;