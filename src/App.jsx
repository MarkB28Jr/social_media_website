import './App.css';
import { Routes, Route } from "react-router-dom"
import Social from './components/Social'
import Home from './components/Home'
import Login from './components/Login'
import Nav from './components/Nav'
import CommunityDetails from './components/CommunityDetails'
import Register from './components/Register'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import ProfileUpdate from './components/ProfileUpdate'

function App() {
  // axios.defaults.baseURL = 'https://backend-community-app-e900ac011257.herokuapp.com'
  axios.defaults.baseURL = 'http://localhost:4000'
  axios.defaults.withCredentials = true

  return (
    <div>
      <Nav />
      <Toaster position='center' toastOptions={{ duration: 2000 }} />
      <main className='flex-center'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/social" element={<Social />} />
          <Route path="/users/:id" element={<ProfileUpdate />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/communitys/:id" element={<CommunityDetails />} />
          <Route path="/users/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;