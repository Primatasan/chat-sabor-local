'use client';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [arts, setArts] = useState([]);

  const handleArtButton = (e: any) => {
    setLoading(true);
    fetch('/api/art', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const urlList = data.data.map((item: { url: any; }) => item.url);
        setArts(urlList);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <h3 className="text-2xl font-bold">Artist with DALL-E</h3>
      <div className="flex flex-col items-center justify-center">
        <button
          className="bg-blue-500 text-white rounded-lg p-2 mt-2 block"
          onClick={handleArtButton}
        >
          Create some amazing art
        </button>
      </div>
      {loading ? (
        <div className="flex flex-col items-center justify-center mt-4">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            <div className="text-gray-900 text-xl font-bold mt-4">Loading...</div>
        </div>
        ) :  <div className="flex flex-col items-center justify-center mt-4 bg-gray-100 rounded-lg p-4">
        {arts.map((art) => (
          <img className="w-1/2" key={art} src={art} alt="art" />
        ))}
      </div>}
    </main>
    );
}
