import React, { useEffect, useState } from 'react'
import MovieDetail from '../../features/Details/MovieDetail/MovieDetail'
import { db } from '../../firebase'

const MovieDetailContainer = () => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    ;(async () => {
      await db
        .collection('venom')
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => setMovie(doc.data().film.title))
        })
    })()
  }, [])
  return <MovieDetail movie={movie} />
}

export default MovieDetailContainer
