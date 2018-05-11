import React from 'react'
import axios from 'axios'

import '../styles/todo.css'
import '../styles/menu.css'
import Menu from './menu'
import TodoForm from './todoform'
import TodoList from './todolist'
import Footer from './footer'

export default props => (

      <main className="todos">
        <Menu />
        <h1>Atividades</h1>
        < TodoForm />
        < TodoList />
        < Footer />
      </main>

    )
