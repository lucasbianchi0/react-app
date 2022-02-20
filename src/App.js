import Home from "./pages/Home"
import './App.css';
import "./components/Navbar"
import Catalogo from "./pages/Catalogo"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import { Item } from "semantic-ui-react";
import ItemDetail from "./components/ItemDetail";


const App = () =>{
  
  return (
    <Router>
      <div className="App">
  
          <Navbar/>
           
            <Routes>
                <Route exact path="/"   element={<Home/>}/>
                <Route  path="/Catalogo"   element={<Catalogo/>}/>
                <Route path="/detail/:id" element={<ItemDetail/>}/>
            </Routes>

      </div>
    </Router>
  );
}

export default App;
