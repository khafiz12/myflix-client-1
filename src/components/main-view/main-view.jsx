import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => { 
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState (storedUser? storedUser: null);
    const [token, setToken] = useState(storedToken? storedToken: null);

    useEffect(() => { 
      if (!token) 
        return;
      

      fetch("https://top-movies-flix-0061641eb1b3.herokuapp.com/movies", {
        headers: { Authorization: 'Bearer ${token}' }
      })
      .then((response) => response.json())
      .then((data) =>  {
        console.log(data)
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
    }, [token]);

   if (!user) { 
    return <LoginView onLoggedIn ={(user, token) => {
     setUser(user);
     setToken(token);}} />
   }

   <button onClick = {() => { 
    setUser(null); setToken(null);
   }}>Logout</button>

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