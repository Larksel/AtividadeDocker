import { useState } from 'react';
import api from './api';

export default function FormUser({ setResp }) {
  const [id, setId] = useState(1);
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <>
      <div className='max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow-md'>
        <div className='mb-4'>
          <label htmlFor='id' className='block text-gray-700 font-bold mb-2'>
            Id
          </label>
          <input
            type='text'
            id='id'
            value={id}
            onChange={(e) => setId(e.target.value)}
            className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='nome' className='block text-gray-700 font-bold mb-2'>
            Nome
          </label>
          <input
            type='text'
            id='nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='senha' className='block text-gray-700 font-bold mb-2'>
            Senha
          </label>
          <input
            type='password'
            id='senha'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
      </div>
      <div className='flex gap-4 items-center justify-center my-8'>
        <button
          onClick={() => setResp(api.createUser({ nome, senha }))}
          className='bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition-colors cursor-pointer'
        >
          Cadastrar
        </button>
        <button
          onClick={() => setResp(api.getUsers())}
          className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors cursor-pointer'
        >
          Listar Usuários
        </button>
        <button
          onClick={() => setResp(api.getById(id))}
          className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors cursor-pointer'
        >
          Selecionar por ID
        </button>
        <button
          onClick={() => setResp(api.updateUser(id))}
          className='bg-violet-500 text-white font-bold py-2 px-4 rounded hover:bg-violet-600 transition-colors cursor-pointer'
        >
          Atualizar
        </button>
        <button
          onClick={() => setResp(api.deleteUser(id))}
          className='bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-colors cursor-pointer'
        >
          Excluir
        </button>
      </div>
    </>
  );
}
