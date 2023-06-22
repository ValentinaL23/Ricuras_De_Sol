import LoginForm from './components/loginForm';
import Home from './components/home';
import { useState } from 'react';
import Registro from './components/registro';
import Login from './components/loginForm';

function App() {

  const [user, setUser] = useState([])

  return (
    <div className='page'>
      {/*
        !user.length > 0
        ? <LoginForm setUser={setUser} />
        : <Home />
  */}
      <Login />
    </div>
  );
}

export default App
