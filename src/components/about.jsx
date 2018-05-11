import React from 'react'
import '../styles/about.css'
import '../styles/menu.css'
import Menu from './menu'

export default props => (
  <div className="about">
    <Menu />
    <h1>Um pouco sobre este projeto...</h1>
    <div className="text">
      <p>Criado utilizando ReactJS, API em Node, banco de dados MongoDB e autenticação assim como cadastro de usuários
        com o Firebase. Projeto teste para a xGB!
        Obrigado pela oportunidade qualquer dúvida por favor, fale comigo!
      </p>
    </div>
    <footer>
      <p>Developed by <a>Oliveira Wesley</a></p>
    </footer>
  </div>
)
