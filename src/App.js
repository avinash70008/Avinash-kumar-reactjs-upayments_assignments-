import React from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import { AllRoutes } from './Components/Routes/Router';


function App() {
  return (
    <div className="App">
      <Navbar/>
  
   <AllRoutes/>
    </div>
  );
}

export default App;
