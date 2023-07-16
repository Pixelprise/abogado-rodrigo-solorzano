import './App.css';
import Header from './Header';
import Footer from "./Footer";
import Services from "./Services";
import Contacts from "./Contacts"
import Experience from './Experience';
import Menu from "./Menu";
import Home from "./Home";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 

function App() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div>
              <Header 
                theme='light'
                menuActive={menuActive}
                setMenuActive={setMenuActive}
              />
              {menuActive && <Menu
                menuActive={menuActive}
              />}
              <Home />
              <Footer />
            </div> 
          }></Route>
          <Route path="/servicios" element={
            <div>
              <Header
                theme='dark' 
                menuActive={menuActive}
                setMenuActive={setMenuActive}
              />
              {menuActive && <Menu
                menuActive={menuActive}
              />}
              <Services />
              <Footer />
            </div>
          }></Route>
          <Route path="/experiencia" element={
            <div>
              <Header 
                theme='light'
                menuActive={menuActive}
                setMenuActive={setMenuActive}
              />
              {menuActive && <Menu
                menuActive={menuActive}
              />}
              <Experience />
              <Footer />
            </div>
          }></Route>
          <Route path="/contactos" element={
            <div>
              <Header
                theme='dark' 
                menuActive={menuActive}
                setMenuActive={setMenuActive}
              />
              {menuActive && <Menu
                menuActive={menuActive}
              />}
              <Contacts />
              <Footer />
            </div>
          }></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
