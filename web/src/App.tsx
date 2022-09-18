import { useEffect, useState } from 'react' //?  função nativa do react que muda o estado de algo com uma função
import { CreateAdBanner } from './components/CreateAdBanner'
import { MagnifyingGlassPlus } from 'phosphor-react'
import { GameBanner } from "./components/GameBanner";

import './styles/main.css'

import logoImg from './assets/logo-nlw-esports.svg'

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then(response => response.json())
      .then(data => {
        setGames(data);
      });
  }, []);
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      {games ? (
        <div className="grid grid-cols-6 gap-6 mt-16 ">
          lasdjlasjdsl
          {games.map((game) => {
            return (
              <GameBanner
                key={game.id}
                bannerUrl={game.bannerUrl}
                title={game.title}
                adsCount={game._count.ads}
              />
            );
          })}
        </div>
      ) : (
        <h1>carregando...</h1>
      )}

      <CreateAdBanner />
    </div>
  )
}
export default App
