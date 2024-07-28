import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Modal from 'react-modal';
import Portfolio from './Pages/Portfolio/Portfolio';
import Settings from './Pages/Settings/Settings';
import About from './Pages/About/About';
import AccountSecurity from './Pages/Settings/AccountSecurity/AccountSecurity';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Стилизация вертикального ползунка */
  ::-webkit-scrollbar {
    width: 8px; /* Уменьшенная ширина ползунка */
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* Цвет трека ползунка */
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3); /* Чуть более бесцветный ползунок */
    border-radius: 0; /* Квадратные края */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5); /* Цвет ползунка при наведении */
  }
`;

function App() {
  const redirectToPath = () => {
    const params = new URLSearchParams(window.location.search);
    const pathname = params.get('pathname');
    if (pathname) {
      window.history.replaceState(null, '', pathname);
    }
  };

  React.useEffect(() => {
    redirectToPath();
  }, []);

  return (
    <Router basename="/CoinTracker">
      <div>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio-tracker" element={<Portfolio />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/account-security" element={<AccountSecurity />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
