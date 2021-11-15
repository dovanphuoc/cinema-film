import React from 'react'
import { css } from '@emotion/css'

const footer = css`
  display: block;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`
const Footer = ({ children = null }) => {
  return <div className={footer}>{children}</div>
}

export default Footer
