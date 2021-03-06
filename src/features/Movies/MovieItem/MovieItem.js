import React from 'react'
import { css } from '@emotion/css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const gridItem = css`
  padding-top: 150%;
  position: relative;
  cursor: pointer;
`
const gridContent = css`
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
`
const gridLabel = css`
  margin: 12px auto 0;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 5px;
`

const title = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  font-size: 1.8rem;
  width: 95%;
`

const image = css`
  width: 212px;
  height: 318px;
  object-fit: cover;
`
const MovieItem = ({ movies }) => {
  const theme = useSelector((state) => state.theme)
  return (
    <>
      {movies &&
        movies.items.map((movie) => (
          <React.Fragment key={movie.id}>
            <div className={gridItem}>
              <div className={gridContent}>
                <Link to={`titles/${movie.id}/${movie.name}`}>
                  <img src={movie.poster} alt={movie.name} className={image} />
                </Link>
              </div>
              <div className={gridLabel}>
                <Link
                  to={`titles/${movie.id}/${movie.name}`}
                  className={`${title} ${
                    theme === 'light' ? 'themeDark' : 'themeLight'
                  }`}
                >
                  {movie.name}
                </Link>
              </div>
            </div>
          </React.Fragment>
        ))}
    </>
  )
}

export default MovieItem
