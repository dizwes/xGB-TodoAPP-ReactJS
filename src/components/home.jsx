import React, {Component} from 'react'
import Typist from 'react-typist';
import '../styles/home.css'

export default class Home extends Component  {
  render(){
  return(
      <main className="home">
        <div className="logotipo">
        <Typist className="subtitle-home">Tecnologia Inteligente_</Typist>
        </div>
        <div className="form">
          <input id="user" type="text" placeholder="Usuário"/>
          <input id="pass" type="password" placeholder="password"/>
        </div>
        <div className="login">
        <a href="#/Todos"><input id="send"type="submit" value="Login"/></a>
        </div>
        <div className="options">
          <p>Ainda não tem cadastro? <a href="#/signin">Cadastre-se aqui</a></p>
          <p>Esqueceu sua senha? Não tem problema, <a href="#/signup">recupere-a aqui</a></p>
        </div>
      </main>
    )
  }
}
