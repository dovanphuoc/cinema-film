import React, { useEffect, useState } from 'react'
import MovieItem from '../../features/Movies/MovieItem/MovieItem'
import MovieItemContain from '../../features/Movies/MovieItemContain/MovieItemContain'
import MovieItemWrap from '../../features/Movies/MovieItemWrap/MovieItemWrap'
import Movies from '../../features/Movies/Movies'
import MovieTitle from '../../features/Movies/MovieTitle/MovieTitle'
import firebase from '../../firebase'

const MoviesContain = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const abortControl = new AbortController()
    const unsubscribeAuth = firebase.auth().onAuthStateChanged((_user) => {
      firebase
        .firestore()
        .collection('listMovies')
        .get()
        .then((querySnapshot) =>
          querySnapshot.forEach((doc) => {
            setMovies(doc.data().lists)
          }),
        )
        .catch((err) => console.log(err))
    })
    return () => {
      unsubscribeAuth()
      abortControl.abort()
    }
  }, [])
  return (
    <Movies>
      {movies.map((item) => (
        <MovieItemContain key={item.id}>
          <MovieTitle movies={item} />
          <MovieItemWrap>
            <MovieItem movies={item} />
          </MovieItemWrap>
        </MovieItemContain>
      ))}
    </Movies>
  )
}

export default MoviesContain
