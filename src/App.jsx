import { useState } from 'react'
import value from './data'
import './index.css'
import Books from './Components/Books'

function App() {
  const [isActive, setIsActive] = useState(null)
  const [data, setData] = useState(value)
  const toggleBook = (id) => {
    const newActiveId = id === isActive ? null : id;
    setIsActive(newActiveId);
  }
  return (
    <main>
      <h1>Book Reviews</h1>
      < Books data = {data} isActive = {isActive} toggleBook = {toggleBook}/>
    </main>
  )
}

export default App
