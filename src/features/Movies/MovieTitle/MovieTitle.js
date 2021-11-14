import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../../routers'
import { css } from '@emotion/css'

const nameTitle = css`
  line-height: 1.6;
`

const title = css`
  color: #000000de;
`

const desc = css`
  color: #000000de;
  margin-bottom: 5px;
  font-size: 1.6rem;
`
const MovieTitle = ({ movies }) => {
  return (
    <>
      <h2 className={nameTitle}>
        <Link to={ROUTES[10].path} className={title}>
          {movies.name}
        </Link>
      </h2>
      <p className={desc}>{movies.description}</p>
    </>
  )
}

export default MovieTitle
