import styled from 'styled-components';

export const ProfileMenu = styled.div`
  position: relative;
  display: inline-block;
`;

export const ProfileButtonStyled = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  width: 150px;
`;

export const ProfileMenuContent = styled.ul`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  list-style-type: none;
  padding: 0;
  top: 19px; /* Располагаем меню под кнопкой */
  width: 150px; /* Устанавливаем ширину меню */
`;

export const ProfileMenuItem = styled.li`
  padding: 12px 16px;
  cursor: pointer;
  color: #333;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }
`;
