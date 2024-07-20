import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Modal from 'react-modal';
import Portfolio from './Pages/Portfolio/Portfolio';
import Settings  from './Pages/Settings/Settings';
import AccountSecurity from './Pages/Settings/AccountSecurity/AccountSecurity'


Modal.setAppElement('#root'); // Убедитесь, что этот селектор соответствует корневому элементу вашего приложения

function App() {
  return (
    <Router basename="/CoinTracker">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio-tracker" element={<Portfolio />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="account-security" element={<AccountSecurity />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
