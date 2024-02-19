import React from 'react';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';

function App() {
  return(
    <Router>
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  );
}

export default App;