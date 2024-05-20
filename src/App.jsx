import './App.css';
import { Routes, Route } from "react-router-dom"
import Social from './components/Social'
import Home from './components/Home'
// import Profile from './components/Profile'
import Community from './components/Community'
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
    {/* <div > */}
      <Nav />
      <Toaster position='center' toastOptions={{ duration: 2000 }} />
      <main className='flex-center'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/social" element={<Social />} />
          <Route path="/community" element={<Community />} />
          <Route path="/users/register" element={<Rout />} />
        </Routes>
      </main>
    {/* </div> */}
    </UserContextProvider>
  );
}

export default App;