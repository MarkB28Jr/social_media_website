import './App.css';
import { Routes, Route } from "react-router-dom"
import Social from './components/Social'
import Home from './components/Home'
import Community from './components/Community'
import Login from './components/Login'
import Profile from './components/Profile'
import Nav from './components/Nav'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from './context/UserContext';
import Rout from './components/Rout';

function App() {
  axios.defaults.baseURL = 'http://localhost:4000'
  axios.defaults.withCredentials = true

  return (
    <UserContextProvider className="bg-cyan-500 hover:bg-cyan-600">
      <Nav />
      <Toaster position='center' toastOptions={{ duration: 2000 }} />
      <main className='flex-center'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/social" element={<Social />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Rout />} />
        </Routes>
      </main>
    </UserContextProvider>
  );
}

export default App;