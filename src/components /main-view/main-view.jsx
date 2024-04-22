import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => { 
    const [movies, setMovies] = useState([
        {id:1, 
         title: "Inception",
         image:"https://www.imdb.com/title/tt1375666/mediaviewer/rm3426651392/?ref_=tt_ov_i",
         director: "Christopher Nolan" },
        
         {id:2, 
         title: "The God Father",
         image: "https://www.imdb.com/title/tt0068646/mediaviewer/rm746868224/?ref_=tt_ov_i",
         director:"Fancis Ford Coppola" },

        {id:3, 
         title: "Finding Nemo",
         image: "https://www.imdb.com/title/tt0266543/mediaviewer/rm4042000896/?ref_=tt_ov_i",
         director: "Andrew Stanton" },
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);
 
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