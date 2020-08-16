import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Header />
      <Card/>
      <Card/>
    </div>
  );
}

export default App;
