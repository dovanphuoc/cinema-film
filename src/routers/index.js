import HomeContainer from '../container/HomeContainer/HomeContainer'
import LoginContainer from '../container/LoginContainer/LoginContainer'
import MoviesContainer from '../container/MoviesContainer/MoviesContainer'
import News from '../container/NewsContainer/NewsContainer'
import NewsDetailContainer from '../container/NewsDetailContainer/NewsDetailContainer'
import People from '../container/PeopleContainer/PeopleContainer'
import PeopleDetailContainer from '../container/PeopleDetailContainer/PeopleDetailContainer'
import RegisterContainer from '../container/RegisterContainer/RegisterContainer'
import Series from '../container/SeriesContainer/SeriesContainer'

const ROUTES = [
  {
    path: '/',
    component: HomeContainer,
    exact: true,
  },
  {
    path: '/movies',
    component: MoviesContainer,
  },
  {
    path: '/series',
    component: Series,
  },
  {
    path: '/people',
    component: People,
    routes: [
      {
        path: '/people/:id/:author',
        component: PeopleDetailContainer,
      },
    ],
  },
  {
    path: '/news',
    component: News,
    routes: [
      {
        path: '/news/:id',
        component: NewsDetailContainer,
      },
    ],
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
