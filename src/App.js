import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';

import ScrollToTop from './components/ScrollToTop';
import System from './pages/SystemMulti_5-17-68';
import About from './pages/About';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MDBContainer>

        <div className="App">

          <header>
            <h1 className="text-center">Lotto</h1>
          </header>

          <main>
            <System />
            <About />
          </main>
  
        </div>

      </MDBContainer>
    </Router>
    
  );
}

export default App;

// github pages deployment guide: https://blog.usejournal.com/how-to-deploy-your-react-app-into-github-pages-b2c96292b18e
