import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Offer from './Component/Offer';
import Footer from './Component/Footer';
import Footerrr from './Component/Footerrr';
import 'bootstrap-social/bootstrap-social.css';

function App() {
  return (
    <div className="">
      <Offer />
      <div>
        <Footerrr/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
