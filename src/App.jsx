
import { useState } from 'react';
import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="homeContainer">
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="mainContainer">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className={`currentMenu ${isMenuOpen ? "collapsedMenu" : ""}`}>DashBoard</div>
        <Dashboard isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  )
}

export default App
