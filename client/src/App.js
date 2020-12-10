import React from 'react'
import Home from './pages/Home'
import Editor from './pages/Editor'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = props => (
    <Router>
        <Route path='/' exact component={Home}/>
        <Route path='/editor' component={Editor}/>
        <Route path='/dashboard' component={Dashboard}/>
    </Router>
)

export default App