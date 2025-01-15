import React, {useState} from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import "./RegisterModal.css";

function RegisterModal({ handleModalClose, isOpen, onRegister, switchActiveModal }) {
    const [email, setEmail] = useState('');
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }

    const [password, setPassword] = useState('');
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    }

    const [user, setUser] = useState('');
    const handleUserChange = (e) => {
      setUser(e.target.value);
    }
    
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
                    value={password}
                />
            </label>
    </ModalWithForm>
  );
  }

  export default RegisterModal