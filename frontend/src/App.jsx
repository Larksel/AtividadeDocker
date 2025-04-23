import { useState } from 'react';
import FormUser from './FormUser';

export default function App() {
  const [resp, setResp] = useState('');

  return (
    <div>
      <header className='bg-blue-600 text-white py-4 shadow-md'>
        <h1 className='text-center text-2xl font-bold'>Atividade Docker</h1>
      </header>
      <FormUser setResp={(resp) => setResp(resp)} />
      <p className='text-center'>Resposta da API: "{resp}"</p>
    </div>
  );
}
