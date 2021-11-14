import React from 'react'
import Container from '../../components/Container/Container'
import { css } from '@emotion/css'

const lists = css`
  margin: 30px 0;
  min-height: calc(100vh - 600px);
`

const Movies = ({ children = null }) => {
  return (
    <Container>
      <div className={lists}>{children}</div>
    </Container>
  )
}

export default Movies
