import React from 'react';
import logo from './logo.svg';
import './App.css';
import FeelingCard from './components/feeling-card/FeelingCard';
import Sidebar from './components/sidebar/Sidebar';
import BackInTime from './components/back-in-time/BackInTime';

function App() {
  return (
    <div className="App">
      <div className='app__container'>
        <div className='app__container-left'>
        <Sidebar/>
        </div>
     
        <div className='app__container-right'>
          <BackInTime/>
          <FeelingCard/>
        </div>
      
      </div>
    </div>
  );
}

export default App;
