import React from 'react'

const List = ({removePeople,id,age,name,image}) => {
  return (
    <article className='person'>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
      <button onClick={() => removePeople(id)}className="page-btn">
        remove
      </button>
    </article>
  )
}

export default List;
