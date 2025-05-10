import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/login';
import { useState, useEffect, use } from 'react';

function App() {
  let [isAuthentication, setIsAuthentication] = useState(
    localStorage.getItem('isAuthentication') == true,
  );
  let [userName, setUsername] = useState(
    localStorage.getItem('userName' || ''),
  );

  // console.log('usuario logueado', isAuthentication);

  useEffect(() => {
    localStorage.setItem('isAuthentication', isAuthentication);
    localStorage.setItem('userName', userName);
  }, [isAuthentication, userName]);

  let handleLogin = (userName) => {
    setIsAuthentication(true);
    setUsername(userName);
  };

  let handleLogOut = () => {
    setIsAuthentication(false);
    setUsername('');
    localStorage.removeItem('isAuthentication');
    localStorage.removeItem('userNAme');
  };

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthentication ? (
              <Navigate to={'/dasboard'} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/register"
          element={
            isAuthentication ? (
              <Navigate to={'/dasboard'} />
            ) : (
              <Register />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthentication ? (
              <Dashboard user={userName} onLogout={handleLogOut} />
            ) : (
              <Navigate to={'/dasboard'} />
            )
          }
        />
        1
        <Route path="*" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </>
  );
}

export default App;
