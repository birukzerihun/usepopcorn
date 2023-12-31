import { useState, useEffect } from "react"
const KEY = "1af6338b"
export function useMovies(query) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  useEffect(
    function () {
      // callBack?.()
      const controller = new AbortController()
      async function fetchMovies() {
        try {
          setIsLoading(true)
          setError("")
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          )
          if (!res.ok)
            throw new Error("some thing went wrong during fetching the data")
          const data = await res.json()
          if (data.Response === "False") throw new Error("Movie not found")
          setMovies(data.Search)
          setError("")
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err.message)
            setError(err.message)
          }
        } finally {
          setIsLoading(false)
        }
      }

      if (query.length < 3) {
        setMovies([])
        setError("")
        return
      }
      // handleCloseMovie()
      fetchMovies()

      return function () {
        controller.abort()
      }
    },
    [query]
  )

  return { movies, error, isLoading }
}
