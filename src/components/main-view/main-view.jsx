import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView} from "../sign-up-view/sign-up-view";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./main-view.scss"
export const MainView = () => { 
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState (storedUser? storedUser: null);
    const [token, setToken] = useState(storedToken? storedToken: null);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => { 
      if (!token) return;
      

      fetch("https://top-movies-flix-0061641eb1b3.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` }
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

    const handleLogout = () => {
      setUser(null);
      setToken(null);
    };

    return (
      <Row className="justify-content-md-center">         
        {!user ? (
          <>
            <LoginView onLoggedIn={(user,) => setUser(user)} />
            or
            <SignupView />
          </>
        ) : selectedMovie ? (

          <Col md={10}>
          <MovieView style={{border:"1px solid green"}} 
            movie={selectedMovie} 
            onBackClick={() => setSelectedMovie(null)} 
          />
           <button onClick={handleLogout} className="logoutButton">Logout</button>
          </Col>

        ) : movies.length === 0 ? (
          <div>The list is empty!</div>
        ) : (
          <>
            {movies.map((movie) => (
             <Col md={8} className= "justify-content-md-center">
              <MovieCard
                key={movie.id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                  <button onClick={handleLogout}>Logout</button>
                }}
              />    
             </Col>        
            ))}
            <button onClick={handleLogout} className="logoutButton">Logout</button>
          </>
        )}      
      </Row>
  );
};