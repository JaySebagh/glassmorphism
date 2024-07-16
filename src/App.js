import React from "react";
import './assets/styles/app.css'
import Landing from './components/Landing';
import Tabs from './components/Tabs'

const App = () => {
  return (
    <div className="app">
      <Tabs />
      <Landing />
    </div>
  );
}

export default App;
