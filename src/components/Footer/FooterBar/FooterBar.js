import React, { useState } from 'react'
import { css } from '@emotion/css'
import Container from '../../Container/Container'
import { MdOutlineDarkMode, MdLanguage } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../../redux/slices/slices'

const footerBar = css`
  background: #f44336;
  color: #fff;
  padding: 25px 50px;
`

const footerWrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const text = css`
  font-size: 1.6rem;
`
const btn = css`
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: #fff;
  font-size: 1.6rem;
  align-items: center;
  margin-left: 10px;
`
const btnWrap = css`
  display: flex;
  margin-left: 20px;
`

const icon = css`
  color: #fff;
  font-size: 2rem;
`
const FooterBar = () => {
  const theme = useSelector((state) => state.theme)
  const [themeLight, setThemeLight] = useState(theme)

  const dispatch = useDispatch()
  const handleToggleTheme = () => {
    themeLight === 'light' ? setThemeLight('dark') : setThemeLight('light')
    dispatch(changeTheme(themeLight))
  }
  return (
    <div className={footerBar}>
      <Container>
        <div className={footerWrap}>
          <span className={text}>Copyright © 2021 MTDb</span>
          <div className={btnWrap}>
            <button className={btn} onClick={handleToggleTheme}>
              <MdOutlineDarkMode className={icon} />
              {themeLight === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
            <button className={btn}>
              <MdLanguage className={icon} />
              English
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FooterBar
