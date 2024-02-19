import React from 'react';
import HomePage from './components/HomePage';
import GetPost from './components/GetPost';
import OnePost from './components/OnePost';
import { Route, Routes } from 'react-router-dom';
 
function AppRouter() {
  return(
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/posts' element={<GetPost />} />
        <Route exact path='/posts/:id' element={<OnePost />} />
      </Routes>
  );
}

export default AppRouter;