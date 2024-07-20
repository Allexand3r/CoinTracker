import { SettingsMenu, SettingsMenuList, SettingsMenuItem, Icon } from './SideBarStyle';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function SideBarSettings() {
  const navigate = useNavigate();

  const handleAccountSecurityClick = () => {
    navigate('/account-security');
  };

  const handleAccountSettingsClick = () => {
    navigate('/settings');
  };

  return (
    <div>
      <SettingsMenu>
        <SettingsMenuList>
          <SettingsMenuItem onClick={() => handleAccountSettingsClick()}>
            <Icon>👤</Icon>
            Profile
          </SettingsMenuItem>
          <SettingsMenuItem onClick={() => handleAccountSecurityClick()}>
            <Icon>🔒</Icon>
            <span>Account Security</span>
          </SettingsMenuItem>
        </SettingsMenuList>
      </SettingsMenu>
    </div>
  );
}

export default SideBarSettings;
