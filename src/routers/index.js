import ActionFilmContainer from '../container/ActionFilmContainer/ActionFilmContainer'
import ComedyFilmContainer from '../container/ComedyFilmContainer/ComedyFilmContainer'
import HomeContainer from '../container/HomeContainer/HomeContainer'
import ListMoviesDetailContainer from '../container/ListMoviesDetailContainer/ListMoviesDetailContainer'
import LoginContainer from '../container/LoginContainer/LoginContainer'
import MovieDetailContainer from '../container/MovieDetailContainer/MovieDetailContainer'
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
  {
    path: '/titles/:id/:name',
    component: MovieDetailContainer,
  },
  {
    path: '/genre=action',
    component: ActionFilmContainer,
  },
  {
    path: '/genre=comedy',
    component: ComedyFilmContainer,
  },
  {
    path: '/lists/:id',
    component: ListMoviesDetailContainer,
  },
]
export default ROUTES
