import React from 'react'
import { css } from '@emotion/css'

const mediaView = css`
  padding-top: 25px;
  margin-top: 5px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`

const grid = css`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));
`
const MovieItemWrap = ({ children = null }) => {
  return (
    <div className={mediaView}>
      <div className={grid}>{children}</div>
    </div>
  )
}

export default MovieItemWrap
