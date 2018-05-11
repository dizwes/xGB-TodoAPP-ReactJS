import React from 'react'
import '../styles/signin.css'

export default props => {
  return(
  <main className="signin">
    <h1>Cadastre-se</h1>
    <div className="form">
      <input id="name" type="text" placeholder="nome"/>
      <input id="email" type="email" placeholder="email"/>
      <input id="password" type="password" placeholder="password"/>
    </div>
    <div className="register">
    <input id="send" type="submit"/>
    </div>
  </main>
  )
}
