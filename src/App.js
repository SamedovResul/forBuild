import React,{useState} from "react";
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Metatesk from './component/Home/Metatesk';
import LearnerForm from './component/learnerForm/learnerForm'
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Main from "./component/studentHome/studentMain";
import './component/metatesk.css';



function App() {
  const [boolean, setboolean] = useState(false)
  return (
    
      <Router>
        <div className="App" onClick={() => boolean? setboolean(false) : null } >
        <Route   >
          <Navbar Boolean={{boolean, setboolean}} />
        </Route >
        <Switch>
          <Route path="/learner"  >
            <LearnerForm />
          </Route >
          <Route path="/studenthome"  >
            <Main />
          </Route >
          <Route path="/"  >
            <Metatesk Boolean={{boolean, setboolean}} />
          </Route >
        </Switch>
        <Route   >
          <Footer  />
        </Route >
      </div>
      </Router>
    
  );
}

export default App;
