import './App.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Home from './routes/Home';
import Post from './routes/Post';


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/post/:id' element={<Post />}></Route>
      <Route path='/'  element={<Home />}></Route>
    </Routes>
  </Router>
  );
}

export default App;
