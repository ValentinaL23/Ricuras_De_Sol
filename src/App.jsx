import LoginForm from './componentes/loginForm';
import Home from './componentes/home';
import { useState } from 'react';
import Dropdown from './componentes/dropdown';

function App() {

  const [user, setUser] = useState([])

  return (
    <div className='page'>
      {
        !user.length > 0
        ? <LoginForm setUser={setUser} />
        : <Home />
      }
      {/* <Dropdown /> */}
    </div>
  );
}

export default App
