import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/dapp/screens/Home/HomePage'
import { Login } from './components/login'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/homepage" component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
