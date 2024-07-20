import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ProfileMenu,
  ProfileButtonStyled,
  ProfileMenuContent,
  ProfileMenuItem
} from './menuDropListStyle';

const MenuDropList = ({ handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoutClick = (e) => {
    e.stopPropagation();
    handleLogout();
    setIsMenuOpen(false); // Закрываем меню при логауте
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Закрываем меню при переходе
  };

  return (
    <ProfileMenu>
      <ProfileButtonStyled onClick={handleToggleMenu}>Profile</ProfileButtonStyled>
      <ProfileMenuContent $isOpen={isMenuOpen}>
        <ProfileMenuItem onClick={() => handleMenuItemClick('/portfolio-tracker')}>
          Portfolio Tracker
        </ProfileMenuItem>
        <ProfileMenuItem onClick={() => handleMenuItemClick('/settings')}>
          Settings
        </ProfileMenuItem>
        <ProfileMenuItem onClick={handleLogoutClick}>Log out</ProfileMenuItem>
      </ProfileMenuContent>
    </ProfileMenu>
  );
};

export default MenuDropList;
