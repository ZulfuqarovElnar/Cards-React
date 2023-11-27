import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar';
import './assets/css/tailwind.css';
import Form from './components/form';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Form />
      </div>
    </Router>
  );
}

export default App;
