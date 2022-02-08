import './App.css';
import './assets/css/bootstrap.min.css';
import Card from './pages/client/Card';
import Dashboard from './pages/client/Dashboard';
import Login from './pages/client/Login';
import Notification from './pages/client/Notification';
import Settings from './pages/client/Settings';
import Home from './pages/landing/Home';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({
    user: true,
    totalBalance: '',
    otp: '',
    cot: '',
    passcode: ''
  });

  // SET
  localStorage.setItem('username', 'Sergiow2');
  localStorage.setItem('user1', 'allow');
  // localStorage.setItem('totalBalance', 5800000);
  // localStorage.setItem('otp', '833627');
  // localStorage.setItem('cot', '456909513');
  // localStorage.setItem('passcode', '7307');

  // GET
  var user = localStorage.getItem('user');

  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('user1');
      localStorage.setItem('totalBalance', 580000);
    }, 1200000);
  }, []);

  // REMOVE
  //

  // CONSOLE
  // console.log('stateData', data);
  // console.log('localData', JSON.parse(localData));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {!user ? (
            <Route path="/login" element={<Login />} />
          ) : (
            <Route path="*" element={<Navigate to="/dashboard" />} />
          )}
          {user ? (
            <Route path="/dashboard" element={<Dashboard />} />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
          {user ? (
            <Route path="/notification" element={<Notification />} />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
          {user ? (
            <Route path="/card" element={<Card />} />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
          {user ? (
            <Route path="/settings" element={<Settings />} />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
