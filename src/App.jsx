import { useEffect, useState } from 'react'
import './App.css'
import Character from './components/Character/Character';

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character").then((res) => res.json()).then((res) => setCharacters(res.results))
  }, [])

  return (
    <>
      {characters.map((character) => <Character key={character.id} character={character} />)}
    </>
  )
}

export default App;