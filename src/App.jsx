import useMovies from "./hooks/useMovies"
import Loader from "./components/Loader"
import MovieGrid from "./components/MovieGrid"

function App() {
  const { movies, loading, error } = useMovies()

  if (loading) return <Loader />
  if (error) return <p>{error}</p>
  return <MovieGrid movies={movies} />
}

export default App