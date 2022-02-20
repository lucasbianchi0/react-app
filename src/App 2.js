
import './App.css';

import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/CardList/CardList';
import Spinner from './components/Spinner/Spinner';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Landing from './components/Landing/Landing';




const App = () =>{
  
  return (
    <Router>
      <div className="App">
  
          <NavBar/>
           
            <Switch>
                <Route path="/"  exact component={Home}/>
                <Route path="/About" component={About}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/detail/:id" component={ProductDetail}/>
                <Route path="/productdetail/:id" component={Landing}/>

            </Switch>

      </div>
      </Router>
  );
}

export default App;
