import Home from './components/home';
import { useState } from 'react';
import Registro from './components/registro';
import Login from './components/loginForm';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function App() {

  const [user, setUser] = useState([])

  return (
    
    <div className='page'>
      {/* 
        !user.length > 0 
        ? <Login setUser={setUser} />
        : <Home />
  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes> 
      </BrowserRouter>
    </div>
      
      
  );
}

export default App
