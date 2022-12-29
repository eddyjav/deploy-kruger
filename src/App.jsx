import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import './App.css';
import { Animals } from "./components/Animals";

import img from "./components/lola.png";
import { Cat } from "./components/Cat";
import Dogs from "./components/Dogs";
import Contador from "./components/Contador";
import { Imc } from "./components/Imc";
import { CalculadoraEdad } from "./components/CalculadoraEdad";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";





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
  <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />}  />
        <Route path="/contact" element={<Contact />}  />
      </Routes>
    <Footer {...footerInfo}/>
  </Router>  
  );
};
