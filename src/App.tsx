import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/dapp/screens/Home/HomePage'
import { Login } from './components/login'
import HistoryPage from './components/dapp/screens/Home/History'
import Operations from './components/dapp/screens/Home/Operations'
import Settings from './components/dapp/screens/Home/Settings'
import { Landing } from './components/dapp/screens/Landing'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/history" component={HistoryPage} />
        <Route path="/operations" component={Operations} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
