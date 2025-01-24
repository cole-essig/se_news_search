import React, {useState, useRef, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import "./RegisterModal.css";

function RegisterModal({ handleModalClose, isOpen, onRegister, switchActiveModal }) {
    const [password, setPassword] = useState('');  
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [validInputs, setIsValid] = useState(false);
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const submitActive = () => {
      const isValid =
          nameInputRef.current.checkValidity() &&
          emailInputRef.current.checkValidity() &&
          passwordInputRef.current.checkValidity();

      setIsValid(isValid);
  };

  const handleUserChange = (e) => {
      setUser(e.target.value);
      submitActive(); 
  };

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
      submitActive(); 
  };

  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      submitActive(); 
  };
    const handleSubmit = (e) => {
      e.preventDefault(); 
      onRegister({ password, user, email });
    }

    const title = 'Sign Up';
    const button = 'Sign Up';
    const switchButton = 'Sign In'
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
            <label htmlFor='name' className='modal__label'>
                Username{" "}
                <input 
                    type='text'
                    className='modal__input'
                    id='user'
                    placeholder='Username'
                    value={user}
                    onChange={handleUserChange}
                    ref={nameInputRef}
                    required
                    minLength={3}
                    maxLength={15}
                />
            </label>
            <label htmlFor='email' className='modal__label'>
                Email{" "}
                <input 
                    type='email'
                    className='modal__input'
                    id='email'
                    placeholder='ex.email'
                    value={email}
                    onChange={handleEmailChange}
                    ref={emailInputRef}
                    required
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

  export default RegisterModal