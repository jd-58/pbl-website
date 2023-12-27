
import './App.css';
import Navbar from './Navbar';
import About from './pages/about';
import Rules from './pages/rules';
import Home from './pages/home';
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
