import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { 
  Title, 
  Form, 
  Input, 
  Button, 
  Message,  
} from './styleAuth';
import { ModalContainer, CloseButton } from './ModalStyled';

function Login({ onLoginSuccess, closeModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);


    try {
      const response = await fetch(`${apiUrl}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        Cookies.set('Authorization', data.token);
        setMessage(`Success: ${data.message}`);

        if (typeof onLoginSuccess === 'function') {
          onLoginSuccess(data.token);
        }
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message || 'Login failed'}`);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalContainer>
      <CloseButton onClick={closeModal}>&times;</CloseButton>
      <Title>Login</Title>
      <Form onSubmit={handleLogin}>
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
          autoComplete="current-password"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </Form>
      {message && <Message data-iserror={message.startsWith('Error')}>{message}</Message>}
    </ModalContainer>
  );
}

export default Login;
