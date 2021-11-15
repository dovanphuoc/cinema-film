import React from 'react'
import '../../assets/css/reset.css'
import './App.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import ROUTES from '../../routers'
import MakeRouteWithSubRoutes from '../../components/MakeRouteWithSubRoutes/MakeRouteWithSubRoutes'
import { useSelector } from 'react-redux'

function App() {
  const theme = useSelector((state) => state.theme)
  return (
    <div className={theme === 'light' ? 'dark' : 'light'}>
      <Router>
        <Switch>
          {ROUTES.map((route, index) => (
            <MakeRouteWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  )
}

export default App
