import React from 'react';
import MenuDropList from '../MenuComponents/MenuDropList';
import { useNavigate } from 'react-router-dom';
import {
  Header,
  Logo,
  NavContainer,
  NavLink,
  StyledButton,
  ButtonContainer,
} from '../../Pages/Home/homeStyle';

const HeaderComponentMenu = ({
  handleLogout,
  openModal,
  isAuthenticated,
  isRegister,
}) => {
  const navigate = useNavigate();

  return (
    <Header>
      <Logo onClick={() => navigate('/')}>CoinTracker</Logo>
      <NavContainer>
        <NavLink onClick={() => navigate('/')}>Home</NavLink>
        <NavLink onClick={() => navigate('/about')}>About Developer</NavLink>
      </NavContainer>
      <ButtonContainer>
        {isAuthenticated ? (
          <MenuDropList handleLogout={handleLogout} />
        ) : (
          <>
            <StyledButton onClick={() => openModal(true)} $isActive={isRegister}>
              Register
            </StyledButton>
            <StyledButton onClick={() => openModal(false)} $isActive={!isRegister}>
              Login
            </StyledButton>
          </>
        )}
      </ButtonContainer>
    </Header>
  );
};

export default HeaderComponentMenu;
