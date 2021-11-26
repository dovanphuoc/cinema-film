import { css, cx } from '@emotion/css'
import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../../assets/images/image.svg'
import logo1 from '../../../assets/images/logo1.png'
import ROUTES from '../../../routers'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter, AiOutlineGoogle } from 'react-icons/ai'

const authPage = css`
  display: flex;
  flex-direction: column;
  background: #fff;
  min-height: 100vh;
  padding-top: 72px;
  background-image: url('${image}')
`

const pageContent = css`
  text-align: center;
`

const logo = css`
  margin: 0 auto 40px;
`

const authPanel = css`
  position: relative;
  width: 90%;
  max-width: 448px;
  padding: 44px 44px 32px;
  background: #fff;
  box-shadow: #3c42571f 0 7px 14px, #0000001f 0 3px 6px;
  border-radius: 4px;
  margin: 0 auto;
`

const header = css`
  font-size: 2.2rem;
  margin-bottom: 20px;
  opacity: 0.85;
`

const formInput = css`
  margin-bottom: 32px;
  position: relative;
  display: block;
  width: 100%;
  text-align: left;
`

const formLabel = css`
  padding-bottom: 8px;
  line-height: 20px;
  font-size: 1.6rem;
`

const input = css`
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  height: 44px;
  padding: 6px 12px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  width: 100%;
  border-radius: 4px;
`

const buttonPrimary = css`
  box-shadow: 0 3px 1px -2px #0003, 0 2px 2px 0 #00000024, 0 1px 5px 0 #0000001f;
  background: #f44336;
  color: #fff;
  width: 100%;
  line-height: 48px;
  margin-top: 32px;
  font-weight: 700;
  font-size: 1.8rem;
  user-select: none;
  border-radius: 4px;
  padding: 0 16px;
`

const socialList = css`
  text-align: center;
  margin-top: 32px;
`

const buttonIcon = css`
  width: 31px;
  height: 31px;
  border-radius: 4px;
  margin-right: 8px;
`

const bgPrimary = css`
  background: #3b5998;
`

const bgDanger = css`
  background: #d34836;
`

const bgBlue = css`
  background: #1da1f2;
`

const iconSocial = css`
  font-size: 1.8rem;
  color: #fff;
`

const infoRow = css`
  text-align: center;
  margin-top: 36px;
  font-size: 1.4rem;
`

const signIn = css`
  color: #3f51b5;
  margin-left: 4px;
`

const errorMessage = css`
  color: red;
  margin-top: 6px;
  font-size: 1.4rem;
  display: block;
`
const defaultFn = () => {}
const Register = ({
  onRegisterGoogle = defaultFn,
  onRegisterFacebook = defaultFn,
  onChangEmail = defaultFn,
  onChangePassword = defaultFn,
  onSignUp = defaultFn,
  onChangePasswordConfirm = defaultFn,
  errorEmail = '',
  errorPassword = '',
  passwordConfirm = '',
  email = '',
  password = '',
}) => {
  return (
    <div className={authPage}>
      <div className={pageContent}>
        <Link to={ROUTES[0].path} className={logo}>
          <img src={logo1} alt="logo" />
        </Link>
        <div className={authPanel}>
          <form onSubmit={onSignUp}>
            <div className={header}>Sign in to your account</div>
            <div className="form-group">
              <div className={formInput}>
                <label htmlFor="email" className={formLabel}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={input}
                  onChange={onChangEmail}
                  value={email}
                />
                <span className={errorMessage}>{errorEmail}</span>
              </div>
              <div className={formInput}>
                <label htmlFor="password" className={formLabel}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={input}
                  onChange={onChangePassword}
                  value={password}
                />
                <span className={errorMessage}>{errorPassword}</span>
              </div>
              <div className={formInput}>
                <label htmlFor="passwordConfirm" className={formLabel}>
                  Password Confirm
                </label>
                <input
                  type="password"
                  id="passwordConfirm"
                  className={input}
                  onChange={onChangePasswordConfirm}
                  value={passwordConfirm}
                />
                <span className={errorMessage}>{errorPassword}</span>
              </div>
            </div>
            <button type="submit" className={buttonPrimary}>
              Create Account
            </button>
            <div className={socialList}>
              <button
                className={cx(buttonIcon, bgPrimary)}
                onClick={onRegisterFacebook}
              >
                <FaFacebookF className={iconSocial} />
              </button>
              <button
                className={cx(buttonIcon, bgDanger)}
                onClick={onRegisterGoogle}
              >
                <AiOutlineGoogle className={iconSocial} />
              </button>
              <button className={cx(buttonIcon, bgBlue)}>
                <AiOutlineTwitter className={iconSocial} />
              </button>
            </div>
          </form>
          <div className={infoRow}>
            <span>Don't have an account?</span>
            <Link to={ROUTES[6].path} className={signIn}>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
