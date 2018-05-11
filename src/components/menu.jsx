import React from 'react'
import Typist from 'react-typist';
import '../styles/menu.css'

export default props => (
  <section className="topo">
    <div className="logo">
    <Typist className="subtitle-menu">Tecnologia Inteligente_</Typist>
    </div>
    <nav className="navegacao">
        <ul>
          <li><a href="#/todos">Tarefas</a></li>
          <li><a href="#/about">About</a></li>
          <li><a href="#/home">Logout</a></li>
        </ul>
      </nav>
  </section>

)
