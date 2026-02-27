import MovieCard from './MovieCard'
import { FIELDS } from '../constants'

const MovieGrid = ({ movies }) => {
    if (movies.length === 0) {
        return <p className="text-center mt-8"> No movies found matching your filters.</p>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {movies.map(movie=> (
                <MovieCard
                    key={movie[FIELDS.TITLE]}
                    movie={movie}
                />
            ))}

            </div>
    
    )
    }

    export default MovieGrid