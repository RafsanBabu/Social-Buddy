import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Components/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetail from './Components/PostDetail/PostDetail';
import Home from './Components/Home/Home';

function App() {
  

  return (
  
    
    
    <Router>
    <Switch>
    <Route path="/home">
    <Home></Home>
    </Route>
      <Route path="/post/:id">
       <PostDetail></PostDetail>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
    </Switch>
   </Router>
  );
}


export default App;
