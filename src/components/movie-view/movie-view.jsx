import {useState, useEffect} from "react";
import PropTypes from "prop-types";
export const MovieView = ({movie, onBackClick}) => {
    return (
        <div>
            <div>
                <img width={500} src={movie.image} />
            </div>
            <div>
                <span>title:</span>
                <span>{movie.title}</span>
            </div>
            <div>
           <span>Name:</span>
           <span>{movie.director.name}</span>
            </div>
        <div>
          <span>Bio:</span>
          <span>{movie.director.bio}</span>
        </div>
          <div>
            <span>Birthday:</span>
            <span>{movie.director.birthday}</span>
          </div>
          <div>
           <span>Deathday:</span>
           <span>{movie.director.deathday}</span>
         </div>
            <div>
                <span>genre</span>
                <span>{movie.genre}</span>
            </div>
            <div>
                <span>description</span>
                <span>{movie.description}</span>
            </div>
            <div>
                <span>director</span>
                <span>{movie.director}</span>
            </div>

            <button onClick={onBackClick}>Back button</button>
        </div>
    );
};

MovieView.propTypes = { 
    movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.shape({
        name: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        birthday: PropTypes.string.isRequired,
        deathday: PropTypes.string,
    }).isRequired,
    featured: PropTypes.string.bool
    }).isRequired, 
    onBackClick: PropTypes.func.isRequired
};