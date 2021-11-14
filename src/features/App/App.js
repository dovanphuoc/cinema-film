import React from 'react'
import '../../assets/css/reset.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import ROUTES from '../../routers'
import MakeRouteWithSubRoutes from '../../components/MakeRouteWithSubRoutes/MakeRouteWithSubRoutes'

function App() {
  return (
    <Router>
      <Switch>
        {ROUTES.map((route, index) => (
          <MakeRouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
  )
}

export default App
