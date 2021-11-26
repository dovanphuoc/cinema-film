import { css } from '@emotion/css'
import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../routers'
import logo from '../../assets/images/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'

const materialNavbar = css`
  background-color: transparent;
  position: absolute;
  box-shadow: none;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  height: 70px;
  z-index: 2;
`

const navbarContainer = css`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  color: red;
  font-size: 1.6rem;
`

const navbarSearch = css`
  height: 45px;
  max-width: 650px;
  transition: background-color, color 0.1s ease-in-out;
  border-radius: 4px;
  margin: 0 30px;
  background-color: #43515099;
  display: block;
  width: 100%;
`

const form = css`
  position: relative;
  height: 100%;
`

const inputForm = css`
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: transparent;
  padding: 15px;
  color: #333;
  &::placeholder {
    color: #fff;
    font-size: 1.6rem;
  }
  &:focus {
    outline: none;
    background-color: #fff;
    border: 1px solid transparent;
  }
  &: focus .;
`

const btnSubmit = css`
  position: absolute;
  top: 7px;
  right: 5px;
`

const searchIcon = css`
  padding: 0;
  min-width: 0;
  line-height: 40px;
  border-radius: 50%;
  color: #fff;
  font-size: 3rem;
`

const listMenu = css`
  display: flex;
`

const listItem = css`
  padding: 5px 15px;
  white-space: nowrap;
  outline: none;
  color: #fff;
`

const navbarRight = css`
  margin-left: auto;
  display: flex;
  align-items: center;
  padding-left: 30px;
`

const authRight = css`
  display: block;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
`

const registerForm = css`
  line-height: 36px;
  padding: 0 16px;
  min-width: 64px;
  color: #fff;
`

const loginForm = css`
  line-height: 36px;
  padding: 0 16px;
  min-width: 64px;
  background-color: #fff;
  color: #333;
  border-radius: 4px;
`

const NavBar = ({ onLogout = () => {} }) => {
  return (
    <div className={materialNavbar}>
      <div className={navbarContainer}>
        <Link to={routes[0].path}>
          <img src={logo} alt="logo" />
        </Link>
        <div className={navbarSearch}>
          <form className={form}>
            <input
              type="text"
              placeholder="Search for movies, tv shows and people..."
              className={inputForm}
            />
            <button type="submit" className={btnSubmit}>
              <AiOutlineSearch className={searchIcon} />
            </button>
          </form>
        </div>
        <ul className={listMenu}>
          <li>
            <Link to={routes[1].path} className={listItem}>
              Movies
            </Link>
          </li>
          <li>
            <Link to="/" className={listItem}>
              Series
            </Link>
          </li>
          <li>
            <Link to="/" className={listItem}>
              People
            </Link>
          </li>
          <li>
            <Link to="/" className={listItem}>
              News
            </Link>
          </li>
        </ul>
        <div className={navbarRight}>
          <div className={authRight}>
            <Link to={routes[1].path} className={registerForm}>
              Register
            </Link>
            <Link to={routes[2].path} className={loginForm}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
