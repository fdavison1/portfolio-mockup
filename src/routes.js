import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

export default (

        <Switch>
            <Route exact path='/' component={About} />
            <Route path='/skills' component={Skills} />
            <Route path='/contact' component={Contact} />
            <Route path='/portfolio' component={Portfolio} />
        </Switch>
)
