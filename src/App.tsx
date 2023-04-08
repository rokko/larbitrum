import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/dapp/screens/Home/HomePage'
import { Login } from './components/login'
import HistoryPage from './components/dapp/screens/Home/History'
import Operations from './components/dapp/screens/Home/Operations'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/homepage" component={HomePage} />
        <Route path="/history" component={HistoryPage} />
        <Route path="/operations" component={Operations} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
