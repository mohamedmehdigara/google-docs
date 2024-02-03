import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const SettingsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const SectionHeader = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const OptionLabel = styled.label`
  font-size: 1em;
  margin-right: 10px;
`;

const ThemeSelect = styled.select`
  padding: 8px;
  font-size: 1em;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1em;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
`;

const Settings = () => {
  // Example state variables
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [accountSettings, setAccountSettings] = useState({
    username: 'exampleUser',
    email: 'example@example.com',
  });

  // Handler for theme change
  const handleThemeChange = (e) => {
    setSelectedTheme(e.target.value);
    // Apply theme change logic as needed
  };

  // Handler for modifying account settings
  const handleAccountSettingChange = (field, value) => {
    setAccountSettings((prevSettings) => ({
      ...prevSettings,
      [field]: value,
    }));
    // Apply account setting change logic as needed
  };

  // Example function to save settings
  const saveSettings = () => {
    // Implement logic to save settings
    console.log('Settings saved:', { theme: selectedTheme, accountSettings });
  };

  return (
    <SettingsContainer>
      <SectionHeader>Theme Settings</SectionHeader>
      <OptionContainer>
        <OptionLabel>Theme:</OptionLabel>
        <ThemeSelect value={selectedTheme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          {/* Add more theme options as needed */}
        </ThemeSelect>
      </OptionContainer>

      <SectionHeader>Account Settings</SectionHeader>
      <OptionContainer>
        <OptionLabel>Username:</OptionLabel>
        <input
          type="text"
          value={accountSettings.username}
          onChange={(e) => handleAccountSettingChange('username', e.target.value)}
        />
      </OptionContainer>
      <OptionContainer>
        <OptionLabel>Email:</OptionLabel>
        <input
          type="email"
          value={accountSettings.email}
          onChange={(e) => handleAccountSettingChange('email', e.target.value)}
        />
      </OptionContainer>

      <Button onClick={saveSettings}>Save Settings</Button>
    </SettingsContainer>
  );
};

export default Settings;
