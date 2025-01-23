import React, {useState, useRef} from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './LoginModal.css';

function LoginModal({ handleModalClose, isOpen, onLogIn, switchActiveModal}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validInputs, setIsValid] = useState(false);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const submitActive = () => {
      const isValid = emailInputRef.current.checkValidity() && passwordInputRef.current.checkValidity();
      setIsValid(isValid);
    };

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      submitActive()
    }

  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      submitActive()
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      onLogIn({ email, password });
    }


    const title = 'Sign in';
    const button = 'Sign in';
    const switchButton = 'Sign Up'
    return (
    <ModalWithForm
        handleModalClose={handleModalClose}
        isOpen={isOpen}
        handleSubmit={handleSubmit}
        title={title}
        button={button}
        switchButton={switchButton}
        handleModalSwitch={switchActiveModal}
        validInputs={validInputs}
    >
        <label htmlFor='email' className='modal__label'>
                Email{" "}
                <input 
                    type='email'
                    className='modal__input'
                    id='email'
                    placeholder='ex.email'
                    value={email}
                    onChange={handleEmailChange}
                    required
                    ref={emailInputRef}
                />
            </label>
            <label htmlFor='password' className='modal__label'>
                Password{" "}
                <input 
                    type='password'
                    className='modal__input'
                    id='password'
                    placeholder='Password'
                    onChange={handlePasswordChange}
                    ref={passwordInputRef}
                    value={password}
                    required
                    minLength={3}
                    maxLength={15}
                />
            </label>
    </ModalWithForm>
  );
  }

  export default LoginModal