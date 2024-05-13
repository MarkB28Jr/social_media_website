import './App.css'
import { useState } from 'react'
import Social from './components/Social'

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/social">Social</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="social" element={<Social />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
