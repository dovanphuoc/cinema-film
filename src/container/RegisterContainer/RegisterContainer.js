import React from 'react'
import Register from '../../components/Register/Register'
import firebase, { facebookProvider, googleProvider } from '../../firebase'
const RegisterContainer = () => {
  const handleRegisterGoogle = async (e) => {
    e.preventDefault()
    await firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res)
        const credential = res.credential
        const token = credential.accessToken
        window.localStorage.setItem('token', token)
        // window.location.href = '/'
      })
      .catch((err) => console.log(err))
  }

  const handleRegisterFacebook = async (e) => {
    e.preventDefault()
    await firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((res) => {
        console.log(res)
        const credential = res.credential
        const token = credential.accessToken
        window.localStorage.setItem('token', token)
        window.location.href = '/'
      })
      .catch((err) => console.log(err))
  }

  return (
    <Register
      onRegisterGoogle={handleRegisterGoogle}
      onRegisterFacebook={handleRegisterFacebook}
    />
  )
}

export default RegisterContainer
