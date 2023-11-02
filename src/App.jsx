/* eslint-disable no-unused-vars */
// Formerly code for Vite page.
// Use 'state' when refining porfolio later? 
// import { useState } from 'react'
// Import specific styling later?
// import './App.css'

import React from 'react'; // Does 'React' need to be imported if it is never used?
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      {/* Where each child element from 'main.jsx' will show up: */}
      <Outlet />
    </>
  )
}

export default App;
