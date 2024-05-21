import './App.css';
import { Routes, Route } from "react-router-dom"
import Social from './components/Social'
import Home from './components/Home'
// import Community from './components/Community'
import Login from './components/Login'
import Profile from './components/Profile'
import Nav from './components/Nav'
import CommunityDetails from './components/CommunityDetails';
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from './context/UserContext';
import Rout from './components/Rout';
import ProfileUpdate from './components/ProfileUpdate';
import ProfileDelete from './components/ProfileDelete';

function App() {
  axios.defaults.baseURL = 'https://backend-community-app-e900ac011257.herokuapp.com'
  axios.defaults.withCredentials = true

  return (
    <UserContextProvider className="bg-cyan-500 hover:bg-cyan-600">
      <Nav />
      <Toaster position='center' toastOptions={{ duration: 2000 }} />
      <main className='flex-center'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/social" element={<Social />} />
          {/* <Route path="/community" element={<Community />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/social/:id" element={<ProfileUpdate />} />
          <Route path="/social/:id" element={<ProfileDelete />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/social/community/:id" element={<CommunityDetails />} />
          <Route path="/users/register" element={<Rout />} />
        </Routes>
      </main>
    </UserContextProvider>
  );
}

export default App;