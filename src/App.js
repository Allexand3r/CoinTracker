import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Settings from './Settings';
import AccountSecurity from './AccountSecurity';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio-tracker" element={<Portfolio />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/account-security" element={<AccountSecurity />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
