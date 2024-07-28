import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  background-color: #f0f2f5;
  min-height: 100vh;
  overflow-x: hidden; /* Добавляем это правило */
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2b2b2b;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 35px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 200px;
  justify-content: flex-end;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-right: 0;
  }
`;

export const StyledButton = styled.button`
  background-color: ${({ $isActive }) => ($isActive ? '#0a66c2' : '#444444')};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? '#095bb2' : '#3a3a3a')};
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const MainContent = styled.div`
  padding: 20px;
  max-width: 100vw; /* Устанавливаем максимальную ширину */
  overflow-x: hidden; /* Добавляем это правило */
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;


export const MarketInfoContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  max-width: 100%; /* Устанавливаем максимальную ширину */
  border-radius: 10px;
  overflow-x: hidden; /* Добавляем это правило */

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const MarketInfoHeader = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const MarketInfoDescription = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CryptoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const CryptoTableHeader = styled.thead`
  background-color: #f5f5f5;
`;

export const CryptoTableRow = styled.tr`
  cursor: pointer;

  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #e0e0e0; /* Добавляем сероватую подсветку при наведении */
  }

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 10px;
  }
`;

export const CryptoTableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;

  &:first-child {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    display: block;
    padding: 5px 10px;
  }
`;

export const CryptoTableHeaderCell = styled.th`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
    display: block;
    padding: 5px 10px;
  }
`;

export const CryptoSymbolContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`;

export const CryptoLogo = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
`;

export const CryptoName = styled.span`
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CryptoSymbol = styled.span`
  color: gray;
  margin-left: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  & > * {
    margin: 0 5px;
  }
`;

export const PaginationButton = styled.button`
  background-color: #0a66c2;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #095bb2;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const ItemsPerPageButton = styled.button`
  background-color: #444444;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3a3a3a;
  }
`;
