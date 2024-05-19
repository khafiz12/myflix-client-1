//check movieData to see if its movie or moviedata//
import PropTypes from "prop-types";
import { Button, Card, CardBody} from "react-bootstrap";
import {useState, useEffects} from "react";
import { Link } from "react-router-dom";
import "./movie-card.scss";
export const MovieCard = ({movie}) => {
    return ( 
     <Card>
      <Card.Img variant= "top" src={movie.image} className="movie-card-image"/>
       <Card.Body> 
        <Card.Title className="movieTitle" >{movie.title}</Card.Title>
        <Card.Text className="movieGenre" >{movie.genre}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>

   <Button variant ="link" className="open-button">Open</Button> 
        </Link>
      </Card.Body>  
     </Card>
    );
};

MovieCard.proptypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.string,
        director: PropTypes.string,
        description: PropTypes.string,
        genre: PropTypes.string,
        id: PropTypes.string.isRequired,
        featured: PropTypes.bool
    }).isRequired
};   
