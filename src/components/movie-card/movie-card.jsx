//check movieData to see if its movie or moviedata//
import PropTypes from "prop-types";
import { Button, Card, CardBody} from "react-bootstrap";
import {useState, useEffects} from "react";
import "./movie-card.scss";
export const MovieCard = ({movie, onMovieClick}) => {
    return ( 
     <Card>
      <Card.Img variant= "top" src={movie.image}/>
       <Card.Body> 
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.genre}</Card.Text>

   <Button onClick ={() => 
        onMovieClick(movie)
        } variant ="link" className="open-button">Open</Button> 
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
