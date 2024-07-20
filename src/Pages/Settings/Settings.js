import React, { useState, useEffect } from 'react';
import HeaderComponentMenu from '../../Components/HeaderComponents/HeaderComponents';
import SideBarSettings from '../../Components/SettingsComponents/SideBarSettings';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { 
  SettingsContent, 
  SettingsMenu, 
  SettingsPageContainer, 
  HorizontalLine, 
  SectionTitle, 
  SettingsText, 
  SaveButton, 
  InputField 
} from './settingsStyle';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import './AccountSecurity/nprogress-custom.css';

function Settings() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setDisplayName] = useState('');
  const [username, setUsername] = useState('');
  const [description, setBio] = useState('');
  const [email, setEmail] = useState('')
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const token = Cookies.get('Authorization');
    if (token) {
      setIsAuthenticated(true);
      fetchUserData(token);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch(`${apiUrl}/api/account/get-user`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch user data: ${response.statusText}`);
      }

      const data = await response.json();
      setDisplayName(data.name || '');
      setUsername(data.username || '');
      setBio(data.description || '');
      setEmail(data.email || '');

    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };

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
    navigate('/'); // Redirect to the main page
  };

  const handleSave = async () => {
    const formData = {
      Name: name,
      Username: username,
      Description: description,
    };

    try {
      const response = await fetch(`${apiUrl}/api/account/save-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('Authorization')}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to save data: ${errorData.message || response.statusText}`);
      }

      const data = await response.json();
      console.log('Success:', data); // Лог успешного ответа

      alert('Data saved successfully');
    } catch (error) {
      console.error('Error saving data:', error.message);
      alert('Error saving data: ' + error.message);
    }
  };

  const handleNavLinkClick = (page) => {
    navigate('/');
  };

  const handleInputChange = (setter, maxLength) => (e) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setter(value);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div>
      <HeaderComponentMenu
        isAuthenticated={isAuthenticated}
        handleNavLinkClick={handleNavLinkClick}
        handleLogout={handleLogout}
      />
      <SettingsPageContainer>
        <SettingsMenu>
          <SideBarSettings />
        </SettingsMenu>
        <SettingsContent>
          <SectionTitle>Profile</SectionTitle>
          <HorizontalLine />
          <SectionTitle>About me</SectionTitle>
          <SettingsText>Display name</SettingsText>
          <InputField
            placeholder={name || 'Choose your own nickname'}
            value={name}
            onChange={handleInputChange(setDisplayName, 20)}
          />
          <SettingsText>Username</SettingsText>
          <InputField
            placeholder={username || 'Choose your own Username'}
            value={username}
            onChange={handleInputChange(setUsername, 20)}
          />
          <SettingsText>Bio</SettingsText>
          <InputField
            placeholder={description || 'A brief introduction about yourself'}
            value={description}
            onChange={handleInputChange(setBio, 250)}
            as="textarea"
          />
          {/* <SettingsText>Email</SettingsText>
          <InputField
            placeholder={email || 'Choose your own email'}
            value={email}
            onChange={handleInputChange(setEmail, 20)}
          /> */}
                    <SaveButton onClick={handleSave}>Save</SaveButton>

        </SettingsContent>
      </SettingsPageContainer>
    </div>
  );
}

export default Settings;
