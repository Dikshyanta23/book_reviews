import React from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const Book = ({ id,name, author, year, review, isActive, toggleBook}) => {
  const checkId = id === isActive
  return (
    <article className='book'>
      <div className='book-header'>
        <h4>{name}</h4>
        <button className='btn1' onClick = {()=> toggleBook(id)}>{checkId?<AiOutlineMinusCircle/>:<AiOutlinePlusCircle/>}</button>
      </div>
       <div className='modal'>
        <div className='authoryear'>
            <h4>Author: {author}</h4>
            <h4>Year published: {year}</h4>
        </div>
        {checkId && <p>{review}</p>}
      </div>

    </article>
  )
}

export default Book
