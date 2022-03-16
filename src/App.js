import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Restaurant from './Restaurant';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 20px;
`;

const App = ({ navigate }) => { 
  return (
  <BrowserRouter navigate={navigate}>
    <MainColumn>
      <Routes>
        <Route path="/restaurant/:id" element={<Restaurant />} />
      </Routes>
    </MainColumn>
  </BrowserRouter>
  )
}

export default App;
