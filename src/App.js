import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { createBrowserHistory } from "history";
import Restaurant from './Restaurant';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 20px;
`;

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => { 
  return (
  <BrowserRouter history={history}>
    <MainColumn>
      <Routes>
        <Route path="/restaurant/:id" element={<Restaurant />} />
      </Routes>
    </MainColumn>
  </BrowserRouter>
  )
}

export default App;
