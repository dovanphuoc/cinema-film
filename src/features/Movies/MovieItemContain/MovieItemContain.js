import React from 'react'
import { css } from '@emotion/css'

const list = css`
  margin-bottom: 30px;
  padding: 30px 0;
`
const MovieItemContain = ({ children = null }) => {
  return <div className={list}>{children}</div>
}

export default MovieItemContain
