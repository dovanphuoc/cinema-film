import HomeContainer from '../container/HomeContainer/HomeContainer'
import LoginContainer from '../container/LoginContainer/LoginContainer'
import RegisterContainer from '../container/RegisterContainer/RegisterContainer'

const ROUTES = [
  {
    path: '/',
    component: HomeContainer,
    exact: true,
  },
  {
    path: '/register',
    component: RegisterContainer,
  },
  {
    path: '/login',
    component: LoginContainer,
  },
]
export default ROUTES
