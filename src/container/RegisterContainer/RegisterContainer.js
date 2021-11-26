import React, { useEffect, useState } from 'react'
import Register from '../../features/Auth/Register/Register'
import firebase from '../../firebase'
import ROUTES from '../../routers'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import md5 from 'md5'

const RegisterContainer = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)

  const clearInput = () => {
    setEmail('')
  }

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((_user) => {
        if (_user) {
          return
        } else {
          // window.location.href = '/login'
        }
      })
    return () => unregisterAuthObserver()
  }, [])

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
    toast.success('You had register account successful!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 4000,
    })
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((createdUser) => {
        createdUser.user
          .updateProfile({
            displayName: 'dovanphuoc',
            photoURL: `http://gravatar.com/avatar/${md5(
              createdUser.user.email,
            )}?d=identicon`,
          })
          .catch((err) => {
            console.log(err)
          })
        clearErrors()
        clearInput()
        window.location.href = ROUTES[0].path
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email': {
            setEmailError(error.message)
            break
          }
          case 'auth/weak-password': {
            setPasswordError(error.message)
            break
          }
          default: {
            return
          }
        }
      })
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value)
  }

  return (
    <Register
      // onRegisterGoogle={handleRegisterGoogle}
      // onRegisterFacebook={handleRegisterFacebook}
      onChangEmail={handleChangeEmail}
      onChangePassword={handleChangePassword}
      onChangePasswordConfirm={handleChangePasswordConfirm}
      onSignUp={handleSignUp}
      errorEmail={emailError}
      errorPassword={passwordError}
      passwordConfirm={passwordConfirm}
      email={email}
      password={password}
    />
  )
}

export default RegisterContainer
