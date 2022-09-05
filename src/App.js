import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar.js';
import News from './component/News.js';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {

  render() {

    return (

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News key="Home" pageSize={6} country="in" category="general" />} />
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={6} country="in" category="entertainment" />} />
          <Route exact path='/business' element={<News key="business" pageSize={6} country="in" category="business" />} />
          <Route exact path='/health' element={<News key="health" pageSize={6} country="in" category="health" />} />
          <Route exact path='/science' element={<News key="science" pageSize={6} country="in" category="science" />} />
          <Route exact path='/sports' element={<News key="sports" pageSize={6} country="in" category="sports" />} />
          <Route exact path='/technology' element={<News key="technology" pageSize={6} country="in" category="technology" />} />
        </Routes>
      </BrowserRouter>

    ) }

}