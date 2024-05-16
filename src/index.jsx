import {createRoot} from "react-dom/client";
import {MainView} from "./components/main-view/main-view";
import Container from "react-bootstrap/Container";
// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";
//import { Container } from "react-bootstrap";

const App = () => { 
  return ( 
  <Container className="justify-content-md-center"> 
    <MainView /> 
  </Container> );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<App />);