import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { add, changeDescription, search, clear  } from '../actions/todoActions'
import { markAsDone, markAsPending, remove } from '../actions/todoActions'
import '../styles/todolist.css'

const TodoList = props =>{

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <div className="todoitem" key={todo._id}>
        <p className={todo.done ? 'markAsDone': ''}>{todo.description}</p>
        <div className="buttons-todo">
        <button className='sucess' title="Concluído, uffa menos uma!"
          onClick={() => props.markAsDone(todo)}></button>
        <button className='pending' title="Volta que deu ruim, Refazer!"
          onClick={() => props.markAsPending(todo)}></button>
        <button className='delete' title="Vamos limpar um pouco isso aqui, Excluír!!!"
          onClick={() => props.remove(todo)}></button>
        </div>
      </div>
    ))
  }
 return(
   <div className="todolist">
    {renderRows()}
   </div>
 )
}


const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch =>
    bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
