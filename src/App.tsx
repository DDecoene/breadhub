import React from 'react';
import Header from './components/header';
import Home from './pages/home';

function App() {
  return (
      <div>
      <header><Header/></header>
      <Home/>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
