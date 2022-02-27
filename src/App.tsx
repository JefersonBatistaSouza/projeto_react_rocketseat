import { useState } from 'react';
import {Button} from './components/Button'


function App() {
  return (
    <div>
      <Button classe='btn-clique'>Clique aqu</Button>
      <Button classe='btn-compra'>Comprar</Button>
      <Button classe='btn-login'>Login</Button>
      <Button classe='btn-register'> Cadastre-se</Button>
    </div>
  );
}

export default App;
