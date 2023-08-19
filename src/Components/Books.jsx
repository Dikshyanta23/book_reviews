import React from 'react'
import Book from './Book'

const Books = ({data, isActive, toggleBook}) => {
  console.log(data);
  return (
    <section className='books'>
      {data.map((dat)=> {
        return (<Book key = {dat.id}  {...dat} isActive = {isActive} toggleBook = {toggleBook}/>)
      })}
    </section>
  )
}

export default Books
