import React, { useState } from 'react'
import { css } from '@emotion/css'
import Container from '../../Container/Container'
import { MdOutlineDarkMode, MdLanguage } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../../redux/slices/slices'

const footerBar = css`
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
  font-size: 1.6rem;
  align-items: center;
  margin-left: 10px;
`
const btnWrap = css`
  display: flex;
  margin-left: 20px;
`

const icon = css`
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
    <div
      className={`${footerBar} ${
        themeLight === 'light' ? 'themeDark' : 'themeLight'
      }`}
    >
      <Container>
        <div className={footerWrap}>
          <span
            className={`${text} ${
              themeLight === 'light' ? 'themeDark' : 'themeLight'
            }`}
          >
            Copyright © 2021 MTDb
          </span>
          <div className={btnWrap}>
            <button
              className={`${btn} ${
                themeLight === 'light' ? 'themeDark' : 'themeLight'
              }`}
              onClick={handleToggleTheme}
            >
              <MdOutlineDarkMode
                className={`${icon} ${
                  themeLight === 'light' ? 'themeDark' : 'themeLight'
                }`}
              />
              <span
                className={themeLight === 'light' ? 'themeDark' : 'themeLight'}
              >
                {themeLight === 'light' ? 'Dark Mode' : 'Light Mode'}
              </span>
            </button>
            <button
              className={`${btn} ${
                themeLight === 'light' ? 'themeDark' : 'themeLight'
              }`}
            >
              <MdLanguage
                className={`${icon} ${
                  themeLight === 'light' ? 'themeDark' : 'themeLight'
                }`}
              />
              <span
                className={themeLight === 'light' ? 'themeDark' : 'themeLight'}
              >
                English
              </span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FooterBar
