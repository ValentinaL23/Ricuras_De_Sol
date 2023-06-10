import LoginForm from './componentes/loginForm';
import Home from './componentes/home';
import { useState } from 'react';
import Registro from './componentes/registro';

function App() {

  const [user, setUser] = useState([])

  return (
    <div className='page'>
      {
        !user.length > 0
        ? <LoginForm setUser={setUser} />
        : <Home />
      }
      {/* <Registro /> */}
    </div>
  );
}

export default App
