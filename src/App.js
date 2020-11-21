import React from "react";
import logo from './logo.svg';
import './App.css';
import ListTiketSpv from './pages/listtiketspv.js';
import LihatTiket from './pages/lihattiket.js'
import ListAkunCs from './pages/listakuncs.js'
import Login from './pages/login.js'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/listtiketspv" component={ListTiketSpv} />
        <Route path="/listakuncs" component={ListAkunCs} />
        <Route path="/lihattiket" component={LihatTiket} />
    <div className="App">
     
      <footer className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3">
            Copyright © FE-BE 07 2020 
          </div>
      </footer>
    </div>
        
    
      {/* <LihatTiket/> */}
      {/* <ListTiketSpv/> */}
      {/* <ListAkunCs/> */}
    </Switch>
    </Router>
  );
}

export default App;
