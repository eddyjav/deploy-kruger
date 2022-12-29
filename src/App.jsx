import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import './App.css';
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {  HashRouter, Link, Route, Routes } from "react-router-dom";


export const App = () => {

  // const info = {
  //   nombre: 'Andres',
  //   apellido: 'Perez',
  //   edad: 49
  // };

  const footerInfo = {
    name : 'Jose',
    contact: '1234567890',
    email: 'e@gmail.com',
    user: ''
  }



return (
  // <BrowserRouter>
  <>
  <HashRouter>
  <Navbar />   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />}  />
        <Route path="/contact" element={<Contact />}  />
      </Routes>
    <Footer {...footerInfo}/>
  </HashRouter>
    
  </>
  
  // </BrowserRouter>  
  );
};
