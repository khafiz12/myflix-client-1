//check movieData to see if its movie or moviedata//
import PropTypes from "prop-types";
import { Button, Card, CardBody } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThumbsDownIcon } from "../thumbs-down-view/thumbs-down-view";
import "./movie-card.scss";

export const MovieCard = ({ movie, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState();
  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(movie.id, !isFavorite);
  };
  return (
    <Card
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
        <Card.Img
          variant="top"
          src={movie.image}
          className="movie-card-image"
        />
      </Link>
      <Card.Body>
        <Card.Title className="movieTitle">{movie.title}</Card.Title>
        <Card.Text className="movieGenre">{movie.genre}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Button variant="link" className="open-button">
            Open
          </Button>
        </Link>
        <Button variant="primary" onClick={handleToggleFavorite}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
        <Button variant="link" className="thumbs-button">
          <ThumbsDownIcon />
        </Button>
        {isHovered && (
          <div className="description-box">{movie.description}</div>
        )}
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
    featured: PropTypes.bool,
  }).isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};
