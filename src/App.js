import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Products } from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product'
import './App.css'
import Contact from './Components/Contato/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className="content">
        <Routes>
          <Route exact path='/'>
            <Products />
          </Route>
          <Route exact path='contato'>
            <Contact />
          </Route>
          <Route exact path='produto/:id'>
            <Product />
          </Route>
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
