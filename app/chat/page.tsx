'use client';
import { useState } from 'react';
import './pag.css'

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    userMessages.push(e.target.message.value);
    setLoading(true);
    e.preventDefault();
    const formattedUrl = new URL(window.location.origin + '/api/chat');
    formattedUrl.searchParams.append('message', e.target.message.value);
    fetch(formattedUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: e.target.message.value }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages([...messages, data.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleArtButton = (e: any) => {
    setLoading(true);
    fetch('/api/artist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const urlList = data.data.map((item) => item.url);
        setArts(urlList);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h3 className="text-2xl font-bold">Converse com a <span className='saborlocal'>Sabor Local</span> (utiliza Chat GPT3)</h3>
      <div className="flex flex-col items-center justify-center">
        <form
          className="flex flex-row items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            title="message"
            className="border-2 border-blue-500 rounded-lg p-2 mt-4"
            type="text"
            name="message"
          />
          <button
            className="saborlocalbotao text-white rounded-lg p-2 mt-4 block ml-2"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </form>
      </div>
      <button
        className="bg-red-500 text-white rounded-lg p-2 mt-4 block mt-4"
        onClick={() => setMessages([])}
      >
        Limpar
      </button>
      {loading ? (
        <div className="flex flex-col items-center justify-center mt-6">
          <div className="animate-bounce">🤖</div>
          <div className="text-2xl font-bold">Pensando...</div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          {messages.map((message, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center my-6"
            >
              <div className="flex flex-col items-center w-3/5 ">
                <p className="text-2xl font-bold my-2 saborlocal">Nossa resposta:</p>
                <p className='text-center	'>{message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <h3 className='text-2xl font-bold mt-4'>Sugestões de perguntas:</h3>
      <ul className='list-disc'>
        <li className='mt-4 saborlocal'>Batata contem glúten?</li>
        <li className='mt-4 saborlocal'>Quais são os benefícios da batata?</li>
        <li className='mt-4 saborlocal'>Como posso conservar batatas?</li>
        <li className='mt-4 saborlocal'>Me sugira uma receita com batatas.</li>
      </ul>
    </main>
  );
}
