//check movieData to see if its movie or moviedata//
export const MovieCard = ({movie, onMovieClick}) => {
    return ( 
    <div onClick ={() => {
        onMovieClick(movie);
    }}
    >
        {movie.title}
    </div>
    );
};
