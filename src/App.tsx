import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from './components/login'

import { About } from './pages/About'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
