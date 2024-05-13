import './App.css'
import { useState } from 'react'
import { Routes, Route, NavLink } from "react-router-dom"
import Social from './components/Social'
import Home from './components/Home'
import Profile from './components/Profile'
import Community from './components/Community'

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/social">Social</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/community">Community</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="social" element={<Social />} />
          <Route path="profile" element={<Profile />} />
          <Route path="community" element={<Community />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
