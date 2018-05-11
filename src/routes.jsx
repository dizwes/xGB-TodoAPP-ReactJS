import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import { Link } from 'react-router-dom'

import Todo from './components/todo'
import About from './components/about'
import Home from './components/home'
import Signin from './components/signin'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/signin' component={Signin} />
    <Route path='/todos' component={Todo} />
    <Route path='/about' component={About} />
    <Redirect from='*' to="/" />
  </Router>
)
