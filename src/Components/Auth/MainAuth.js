import React from 'react';
import Login from './ComponentsAuth/Login';
import Register from './ComponentsAuth/Register';
import { ModalBackground } from './ComponentsAuth/ModalStyled';

function MainAuth({ 
  isModalOpen, 
  isRegister, 
  closeModal, 
  handleLoginSuccess, 
  handleRegisterSuccess 
}) {
  if (!isModalOpen) return null;

  return (
    <ModalBackground>
      {isRegister ? (
        <Register closeModal={closeModal} onRegisterSuccess={handleRegisterSuccess} />
      ) : (
        <Login closeModal={closeModal} onLoginSuccess={handleLoginSuccess} />
      )}
    </ModalBackground>
  );
}

export default MainAuth;
