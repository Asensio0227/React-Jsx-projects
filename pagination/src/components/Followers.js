import React from 'react'

const Followers = ({avatar_url,login,html_url}) => {
  return (
    <div className="card">
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url} target="_blank" className="btn">
        profile
      </a>
    </div>
  )
}

export default Followers