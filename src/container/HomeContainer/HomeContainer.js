import React, { useEffect, useState } from 'react'
import SkeletonLoading from '../../components/SkeletonLoading/SkeletonLoading'
import Home from '../../features/Home/Home'
import NavBar from '../../components/NavBar/NavBar'
import Slider from '../../features/Slider/Slider'
import { db } from '../../firebase'
import MoviesContain from '../MoviesContain/MoviesContain'
import FooterContainer from '../FooterContainer/FooterContainer'

const HomeContainer = () => {
  const [listImages, setListsImages] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timeOut = setTimeout(async () => {
      await db
        .collection('slider')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const res = doc.data()
            setListsImages(res)
          })
        })
      setLoading(false)
    }, 2000)
    return () => {
      clearTimeout(timeOut)
    }
  }, [])

  const handleLogout = () => {
    window.location.href = '/login'
  }

  return (
    <>
      <Home>
        {loading ? (
          <SkeletonLoading />
        ) : (
          <>
            <NavBar onLogout={handleLogout} />
            <Slider data={listImages} />
            <MoviesContain />
            <FooterContainer />
          </>
        )}
      </Home>
    </>
  )
}

export default HomeContainer
