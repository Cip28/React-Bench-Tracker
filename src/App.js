import React from 'react'
import './App.css';
import Button from './components/Button';
import MemeGenerator from './components/MemeGenerator';
import Calculator from './components/Calculator';
import Home from './components/Home';
import NonReact from './components/NonReact';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";



function App () {
  // const memes = datas.map(item => {
  //   return < MemeGenerator key={item.id} item={item}/>
  // })
  return (

   
      <Router>
      <div className="App">
        <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/button">Button</Link></li>
              <li><Link to="/memeGenerator">Meme Generator</Link></li>
              <li><Link to="/calculator">Calculator</Link></li>
              <li><Link to="/nonReact">Other projects</Link></li>
            </ul>
        </nav>

        <Routes>          
          <Route path="/"  element={ <Home />}/>
          <Route path="/button"  element={ <Button />}/>
          <Route path="/memeGenerator" element={ <MemeGenerator />}/>
          <Route path="/calculator" element={<Calculator />}/>
          <Route path="/nonReact" element={<NonReact />}/>
        </Routes>
      

        </div>
      </Router>
    
  );
}

export default App;
