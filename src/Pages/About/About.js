import React from 'react';
import styled, { keyframes } from 'styled-components';
import profilePic from './profile.jpg'; // Импортируем ваше изображение

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f7f7f7;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  position: fixed;
  height: 100%;
`;

const SidebarTitle = styled.h1`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const SidebarSubtitle = styled.h2`
  font-size: 1rem;
  color: #aaa;
  margin-bottom: 1.5rem;
`;

const Content = styled.div`
  margin-left: 250px;
  padding: 20px;
  width: calc(100% - 250px);
  animation: ${fadeIn} 1s ease-in;
`;

const ProfilePicContainer = styled.div`
  margin-bottom: 20px;
`;

const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #e0e0e0;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: #555;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  background: #e0e0e0;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  color: #333;
`;

function About() {
  return (
    <Container>
      <Sidebar>
        <ProfilePicContainer>
          <ProfilePic src={profilePic} alt="Profile" />
        </ProfilePicContainer>
        <SidebarTitle>Alexander ZACHEPA</SidebarTitle>
        <SidebarSubtitle>IT-Engineering</SidebarSubtitle>
        <Text>ssoooxander@gmail.com</Text>
        <Text>GitHub</Text>
        <Text>+1 431-990-7025</Text>
        <Text>30 Strauss Drive. Canada. Winnipeg</Text>
      </Sidebar>
      <Content>
        <Section>
          <SectionTitle>Образование</SectionTitle>
          <Text>Бакалавр IT-Инженерии, Национальный Авиационный Университет, Киев, Украина. 2021-настоящее время</Text>
        </Section>
        <Section>
          <SectionTitle>Навыки</SectionTitle>
          <SkillList>
            <SkillItem>Организованность</SkillItem>
            <SkillItem>Коммуникация</SkillItem>
            <SkillItem>Критическое мышление</SkillItem>
            <SkillItem>Работа в команде</SkillItem>
            <SkillItem>Соблюдение сроков</SkillItem>
          </SkillList>
        </Section>
        <Section>
          <SectionTitle>Опыт работы</SectionTitle>
          <Text>Фриланс Python разработчик, Удаленная работа. Январь 2021 - Апрель 2024</Text>
          <Text>
            - Создание ботов для Telegram-магазинов, скриптов для парсинга данных, автопостеров и автоответчиков.<br/>
            - Поддержание отношений с клиентами, анализ технических проблем и разработка решений.<br/>
            - Использование различных библиотек Python для реализации функциональности.<br/>
            - Интеграция модели CHATGPT для создания искусственного интеллекта, который отправляет запросы на сервер и отвечает на сообщения в Telegram.
          </Text>
          <Text>Разработка веб-приложений на C# и React. Март 2024 - настоящее время</Text>
          <Text>
            - Изучение C# и библиотек: Освоение языка C# и знакомство с широким спектром библиотек для создания надежных и масштабируемых веб-приложений.<br/>
            - Разработка проекта CoinTracker: Создание собственного веб-сайта CoinTracker, аналогичного CoinMarketCap, для отслеживания криптовалют. Использование PostgreSQL для хранения и управления данными о криптовалютах и данными пользователей. Разработка frontend на React, предоставляющего современный и интуитивно понятный интерфейс для пользователей.
          </Text>
        </Section>
        <Section>
          <SectionTitle>Курсы</SectionTitle>
          <Text>Курсы "IT-osvita" в Украине</Text>
          <Text>3D моделирование, текстурирование, программирование на Python, JavaScript, HTML, CSS, Разработка ПО для различных платформ, логические задачи и алгоритмы.</Text>
          <Text>Курсы "STEM-Inventor" в Украине</Text>
          <Text>Изучение основ программирования микроконтроллеров Arduino, Создание и тестирование простых электронных проектов, Сборка и программирование роботов с использованием Lego EV3.</Text>
        </Section>
        <Section>
          <SectionTitle>Языки</SectionTitle>
          <Text>Английский, Украинский, Русский</Text>
        </Section>
      </Content>
    </Container>
  );
}

export default About;
