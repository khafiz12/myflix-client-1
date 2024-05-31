import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import "./movie-view.scss";
export const MovieView = ({movies}) => {
    const {movieid} = useParams ();
    const movie = movies.find((b) => b.id === movieid);
    return (
        <div className="movie-info">
         <div className="movie-info-container">
            <div className="movie-image">
                <img src={movie.image} width={500} className="image"/>
            </div>
            <div className="movie-title">
                <span className= "movie-Header">Title: </span>
                <span>{movie.title}</span>
            </div>
            <div>
                <span className="movie-Header">Director: </span>
                <span>{movie.director.name}</span>
            </div>
            <div>
                <span className="movie-Header">Bio: </span>
                <span>{movie.director.bio}</span>
            </div>
            <div>
                <span classname="movie-Header">Birthday: </span>
                <span>{movie.director.birthday}</span>
            </div>
            <div>
                <span className="movie-Header">Deathday: </span>
                <span>{movie.director.deathday}</span>
            </div>
            <div>
                <span className="movie-Header">Description: </span>
                <span>{movie.description}</span>
            </div>
            <div>
                <span className="movie-Header">Genre: </span>
                <span>{movie.genre}</span>
            </div>
        </div>
            <Link to={`/`}>
            <button className="back-button">Back button</button>
            </Link>
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
