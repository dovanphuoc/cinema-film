import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../../routers'
import { css } from '@emotion/css'
import './MovieTitle.css'
import { useSelector } from 'react-redux'

const nameTitle = css`
  line-height: 1.6;
`

const title = css``

const desc = css`
  margin-bottom: 5px;
  font-size: 1.6rem;
`
const MovieTitle = ({ movies }) => {
  const theme = useSelector((state) => state.theme)
  return (
    <>
      <h2 className={`${nameTitle} ${theme === 'light' ? 'dark' : 'light'}`}>
        <Link
          to={ROUTES[10].path}
          className={`${title} ${theme === 'light' ? 'dark' : 'light'}`}
        >
          {movies.name}
        </Link>
      </h2>
      <p className={`${desc} ${theme === 'light' ? 'dark' : 'light'}`}>
        {movies.description}
      </p>
    </>
  )
}

export default MovieTitle
