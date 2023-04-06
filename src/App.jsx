import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;