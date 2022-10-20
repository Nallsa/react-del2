import React from 'react';
import Header from './Header';
import Products from './Products';
import Footer from './Footer';
import './table-styles.css';

function App() {
  return (
    <div className='conteiner'>
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
