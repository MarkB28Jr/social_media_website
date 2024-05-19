import './App.css';
import { Routes, Route } from "react-router-dom"
import Social from './components/Social'
import Home from './components/Home'
import Profile from './components/Profile'
import Community from './components/Community'
import Nav from './components/Nav'
import Register from './components/Register'
import Login from './components/Login'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from './context/UserContext';

function App() {
  axios.defaults.baseURL = 'http://localhost:4000'
  axios.defaults.withCredentials = true
  return (
    <UserContextProvider>
      <Nav />
      <Toaster position='center' toastOptions={{ duration: 2000 }} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/social" element={<Social />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/community" element={<Community />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
        </Routes>
      </main>
    </UserContextProvider>
  );
}

export default App;