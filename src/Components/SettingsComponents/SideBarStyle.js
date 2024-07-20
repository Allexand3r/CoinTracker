import styled from 'styled-components';


export const SettingsMenu = styled.div`
  width: 200px; /* Ширина меню */
`;

export const SettingsMenuList = styled.ul`
  list-style-type: none;
  margin-left: -25px
`;

export const SettingsMenuItem = styled.li`
  margin-bottom: 10px;
  font-size: 19px;
  cursor: pointer;
  display: flex;
  padding: 5px;
  align-items: center; /* Выравнивание по центру */

  &:hover {
    background-color: ${({ $isActive }) => $isActive ? '#095bb2' : '#d4d4d4'};
    transition: background-color 0.5s ease; /* Плавный переход за 0.3 секунды */
  }
`;

export const Icon = styled.span`
  margin-right: 10px; /* Отступ между значком и текстом */
`;
