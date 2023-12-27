
import './App.css';
import Navbar from './Navbar';
import About from './about';
import Rules from './rules';
import Home from './home';
import React from 'react';


function App() {

  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
      case "/about":
        Component = About
        break
        case "/rules":
          Component = Rules
          break
          default:
            Component = Home



   }
  return (
   <>
  <Navbar />
  <div className="container">
  <Component />
  </div>
  </>
  );
}

export default App;
