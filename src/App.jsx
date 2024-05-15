import './App.css'
import { Routes, Route } from "react-router-dom"
import Social from './components/Social'
import Home from './components/Home'
import Profile from './components/Profile'
import Community from './components/Community'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <Nav />
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
