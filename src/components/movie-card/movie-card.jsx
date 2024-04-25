//check movieData to see if its movie or moviedata//
import PropTypes from "prop-types";
import {useState, useEffects} from "react";
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

MovieCard.proptypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        imageurl: PropTypes.string,
        director: PropTypes.string,
        description: PropTypes.string,
        genre: PropTypes.string,
        id: PropTypes.string.isRequired,
        featured: PropTypes.bool
    }).isRequired
};   
