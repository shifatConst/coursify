import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Header />
      <Services />
      <Footer />
    </Router>
  );
};

export default App;
