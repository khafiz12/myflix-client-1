import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => { 
    const [movies, setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);
    useEffect(() => {
      fetch("https://top-movies-flix-0061641eb1b3.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        const movieFromApi = data.map((movie) => {
          return { 
            id: movie._id, 
            title: movie.title,
            image: movie.imageurl,
            description: movie.description,
            director: movie.director,
            genre: movie.genre,
            featured: movie.featured, 
          };
        });
        setMovies(movieFromApi); 
      });
    }, []);


    if (selectedMovie) {
        return (
           <MovieView movie= {selectedMovie} 
         onBackClick ={() => setSelectedMovie(null)} />
         );
    };  
    
    if (movies.length ===0) {
        return <div>The list is empty</div>;
    }

    return ( 
        <div>
         {movies.map((movie) => (
           <MovieCard key={movie.id} movie={movie} 
           onMovieClick= {(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
           }}
            />
          ))} 
        </div>
   );
};