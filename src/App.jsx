import './App.css';
import { Routes, Route } from "react-router-dom";
import Social from './components/Social';
import Home from './components/Home';
import Profile from './components/Profile';
import Community from './components/Community';
import Nav from './components/Nav';
import Register from './components/Register';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="social" element={<Social />} />
            <Route path="profile" element={<Profile />} />
            <Route path="community" element={<Community />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;