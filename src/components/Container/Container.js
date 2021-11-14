import React from 'react'
import { css } from '@emotion/css'

const container = css`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
`
const Container = ({ children = null }) => {
  return <div className={container}>{children}</div>
}

export default Container
