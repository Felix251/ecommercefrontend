import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import styled from 'styled-components';
import HeaderInfo from './components/HeaderInfo';
import Navbar from './components/Navbar';

function App() {
  return (
    <Container className="App">
      <HeaderInfo/>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accueil/>}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`;