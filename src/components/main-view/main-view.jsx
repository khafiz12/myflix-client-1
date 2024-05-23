import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView} from "../sign-up-view/sign-up-view";
import { ProfileView } from "../profile-view/profile-view";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "../navigation-bar/navigation-bar";
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

    return (
    <BrowserRouter>
      <NavigationBar 
         user={user}
         onLoggedOut={() => {
           setUser(null);
           setToken(null);
           localStorage.clear();
         }}
      />
      <Row className="justify-content-md-center">    
        <Routes>
          <Route 
            path="/login"
            element={
            <>
             {user ? (
               <Navigate to="/" />
             ) : (
            <Col md={5} className= "openForm">
            <LoginView onLoggedIn={(user) => setUser(user)} />
            </Col>
             )}
            </>
           }
          />
          <Route 
            path="/signup"
            element={ 
              <> 
                {user ? (
                  <Navigate to="/" />
                ) : (
                <Col md ={5}> 
                <SignupView className="signUp" />
                </Col> 
              )}
              </>
            }
             /> 
           <Route 
             path="/movies/:movieid"
             element= {
              <>
                { !user ? (
                   <Navigate to="/login" replace />
                ) : movies.length ===0 ?(
                  <Col>The list is empty</Col>
                ) : (
                  <Col md={8} className="movieView"   >
          <MovieView  movies={movies} />
                  </Col>
              )}
            </>
           }
         />
           <Route
            path="/"
            element={
              <>
              {!user ? (
                <Navigate to = "/login" replace />
              ) : movies.length === 0 ? (
                <Col> The List is Empty!</Col>
              ) : (
                <>
                {movies.map((movie) => (
             <Col md={8} className= "justify-content-md-center" 
             key = {movie.id} >
             
              <MovieCard
                movie={movie} />
                </Col>
                ))}
              </>    
            )}
          </>
          }    
        />
       {user && (
       <Route 
        path="/profile"
        element= {<ProfileView user={user} />} 
        />
       )}
        </Routes>
      </Row>
    </BrowserRouter>
  );
};