import React, { useEffect, useState } from 'react'
import SkeletonLoading from '../../components/SkeletonLoading/SkeletonLoading'
import Home from '../../components/Home/Home'
import NavBar from '../../components/NavBar/NavBar'
import Slider from '../../components/Slider/Slider'
import { db } from '../../firebase'

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
  return (
    <>
      {loading ? (
        <SkeletonLoading />
      ) : (
        <Home>
          <NavBar />
          <Slider data={listImages} />
        </Home>
      )}
    </>
  )
}

export default HomeContainer
