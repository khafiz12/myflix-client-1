import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import Col from "react-bootstrap/Col"
import "./movie-view.scss";
export const MovieView = ({movie, onBackClick}) => {
    return (
        <div className="movie-info">
            <div className="movie-image">
                <img src={movie.image} width={500} className="image"/>
            </div>
            <div className="movie-title">
                <span className= "movieHeader">Title: </span>
                <span>{movie.title}</span>
            </div>
            <div>
                <span className="movieHeader">Director: </span>
                <span>{movie.director.name}</span>
            </div>
            <div>
                <span className="movieHeader">Bio: </span>
                <span>{movie.director.bio}</span>
            </div>
            <div>
                <span classname="movieHeader">Birthday: </span>
                <span>{movie.director.birthday}</span>
            </div>
            <div>
                <span className="movieHeader">Deathday: </span>
                <span>{movie.director.deathday}</span>
            </div>
            <div>
                <span className="movieHeader">Description: </span>
                <span>{movie.description}</span>
            </div>
            <div>
                <span className="movieHeader">Genre: </span>
                <span>{movie.genre}</span>
            </div>
            <button onClick={onBackClick} className="back-button"
            >Back button</button>
        </div>
    );
};

MovieView.proptypes = {
    movie: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        director: PropTypes.shape({
            name:PropTypes.string,
            bio: PropTypes.string,
            birthday: PropTypes.string,
            deathday: PropTypes.string
        }).isRequired,
        description: PropTypes.string,
        genre: PropTypes.string,
    }).isRequired
};   
