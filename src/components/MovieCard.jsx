import { FIELDS } from '../constants';

const MovieCard = ({ movie }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{movie[FIELDS.TITLE]}</h2>
                <p>{movie[FIELDS.YEAR]}</p>
                {/* TODO: genre, age badge, rating, description */}
                </div>
            </div>
    )
}

export default MovieCard;