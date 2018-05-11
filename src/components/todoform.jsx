import React, {Component} from 'react'
import { connect } from 'react-redux'
import '../styles/todoform.css'
import { bindActionCreators } from 'redux'
import { add, changeDescription, search, clear  } from '../actions/todoActions'

class TodoForm extends Component{
  constructor(props){
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    const { add, clear, search, description } = this.props
    if (e.key === 'Enter') {
        e.shiftKey ? search() : add(description)
    } else if (e.key === 'Escape') {
        clear()
    }
}

  render(){
    const { add, search, description } = this.props
    return(
      <div role='form' className='todoForm'>
        <input type="text" id='description' className='form-control'
              onChange={this.props.changeDescription}
              onKeyUp={this.keyHandler}
              value={this.props.description}
              placeholder='Adicione uma tarefa' />
        < div className="buttons">
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
