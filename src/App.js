import Layout from './components/Header/Header'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Layout />
      </div>
    </HashRouter>
  );
}

export default App;
