import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Header from './components/Header/Header';
import Services from './components/Services/Services';
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
    </div>
  );
};

export default App;
