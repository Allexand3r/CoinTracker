import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { 
  Title, 
  Form, 
  Input, 
  Button, 
  Message, 
  GoogleButton, 
} from './styleAuth';
import { ModalContainer, CloseButton } from './ModalStyled';

function Register({ closeModal, onRegisterSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleRegister = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${apiUrl}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'

        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        if (data.status === "warning") {
          setMessage(`Warning: ${data.message}`);
        } else {
          Cookies.set('Authorization', data.token);
          setMessage(`Success: ${data.message}`);
          if (typeof onRegisterSuccess === 'function') {
            onRegisterSuccess(data.token);
          }
          if (typeof closeModal === 'function') {
            closeModal();
          }
        }
      } else {
        setMessage(`Error: ${data.message || 'Registration failed'}`);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getMessageColor = (message) => {
    if (message.startsWith('Error')) return 'red';
    if (message.startsWith('Warning')) return 'orange';
    return 'green';
  };
  const googleLogin = () => {
    window.location.href = `${apiUrl}/signin-google`;
  };

  return (
    <ModalContainer>
      <CloseButton onClick={closeModal}>&times;</CloseButton>
      <Title>Register</Title>
      <Form onSubmit={handleRegister}>
        <Input
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </Button>
      </Form>
      {message && <Message style={{ color: getMessageColor(message) }}>{message}</Message>}
      <GoogleButton onClick={googleLogin}>Login with Google</GoogleButton>
    </ModalContainer>
  );
}

export default Register;
