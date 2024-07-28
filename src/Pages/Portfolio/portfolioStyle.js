import styled from 'styled-components';

export const PortfolioContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%; /* Высота экрана */
  text-align: center; /* Центрирование текста */
  position: relative; /* Позволяет дочерним элементам использовать абсолютное позиционирование */
`;

export const PortfolioImage = styled.img`
  width: 250px; /* Ширина изображения */
  height: 250px; /* Высота изображения */
`;

export const PortfolioText = styled.p`
  font-size: 35px; /* Размер шрифта */
  max-width: 900px; /* Максимальная ширина текста */
  font-weight: bold; /* Делаем текст жирным */
  margin-top: 20px; /* Отступ сверху */
  margin-left: 55px;
  color: black;
`;

export const PortfolioTextBottom = styled.p`
  font-size: 15px;
  color: grey;
  margin-top: -25px; /* Отступ сверху */
`;

export const ManualTransactionContainer = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  width: 100%; /* Задаем ширину 100% */
  max-width: 600px; /* Максимальная ширина */
  height: 120px; /* Задаем высоту */
  cursor: pointer; /* Указываем, что элемент кликабельный */
  transition: background 0.3s ease; /* Анимация изменения фона при наведении */

  &:hover {
    background: #e0e0e0; /* Изменение фона при наведении */
  }
`;

export const IconContainer = styled.div`
  margin-right: 16px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #666;
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 20px;
  background: white;
  border-radius: 10px;
  max-width: 500px;
  margin: auto;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ModalButton = styled.button`
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

export const ModalTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ModalLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const ModalCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ModalCheckbox = styled.input`
  margin-right: 10px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    background: 'none'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};

export const CreatePortfolioButton = styled.button`
  background-color: #0a66c2;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: #095bb2;
  }
`;
