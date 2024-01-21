// Pages.jsx
import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import FilterSearched from "./FilterSearched";


import { Route, Routes } from 'react-router-dom';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:name" element={<Recipe />} />
      <Route path="/filterSearched/*" element={<FilterSearched />} />
    </Routes>
  );
};

export default Pages;
