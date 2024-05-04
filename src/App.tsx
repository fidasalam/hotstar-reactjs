import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Main from './components/Main';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Main />} />
          <Route path="/details" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
