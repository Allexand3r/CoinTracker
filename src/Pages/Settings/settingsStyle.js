import styled from 'styled-components';

// Стили для компонента страницы
export const SettingsPageContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const SettingsContent = styled.div`
  flex: 1;
`;

export const SaveButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  opacity: 75%;
  border-radius: 5px; /* Закругленные углы */
`;

export const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
`;

export const SettingsText = styled.p`
  margin-bottom: 5px;
  font-size: 14px; /* Уменьшенный размер текста */
  font-weight: bold;
  color: #666; /* Серый цвет */
`;

export const SettingsMenu = styled.div`
  width: 200px;
`;

export const HorizontalLine = styled.hr`
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  opacity: 0.5;
`;

export const InputField = styled.input`
  width: 25%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px; /* Закругленные углы */
  font-size: 14px;
  background-color: #f9f9f9;
  color: #333;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
  &[type="textarea"] {
    height: 100px; /* Увеличенная высота для Bio */
    resize: vertical; /* Изменение размера только по вертикали */
    margin-bottom: 30px; /* Добавлено расстояние снизу для Bio */
  }
`;


// * {
//   outline: 4px solid green !important;
// }