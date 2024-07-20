import React, { useEffect, useState } from 'react';
import HeaderComponentMenu from '../../../Components/HeaderComponents/HeaderComponents';
import SideBarSettings from '../../../Components/SettingsComponents/SideBarSettings';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import './nprogress-custom.css'; 

function AccountSecurity() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('Authorization');
    if (token) {
      setIsAuthenticated(true);
    } else {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      nprogress.done();
    } else {
      nprogress.start();
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    Cookies.remove('Authorization');
    setIsAuthenticated(false);
    navigate('/'); // Перенаправляем на главную страницу
  };

  if (!isAuthenticated) {
    return null;
  }

  const handleNavLinkClick = () => {
    navigate('/');
  };

  return (
    <div>
      <HeaderComponentMenu
        isAuthenticated={isAuthenticated}
        handleNavLinkClick={handleNavLinkClick}
        handleLogout={handleLogout}
      />
      <SideBarSettings />
    </div>
  );
}

export default AccountSecurity;
