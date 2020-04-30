import React from 'react';
// import  { Login } from './components/Login'
// import  {Home} from './components/Home'
import Menu from './components/Menu'
// import {Signup} from './components/Signup'
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Show from './components/Show';
import KeyPadComponent from './components/calculator/KeyPadComponent'
import ResultComponent from './components/calculator/ResultComponent'
import CalculatorApp from './components/calculator/CalculatorApp'



function App() {
  return (
   <BrowserRouter>
     <div>
     <Menu />
       <Switch>
       <Route path ="/" exact component={Show}></Route>
         <Route path ="/About" component={About}></Route>
         <Route path ="/Calculator" component={CalculatorApp}></Route>

         
         {/* <Route path ="/Signup" exact component={Signup}></Route>
         <Route path ="/Home" exact component={Home}></Route>          */}
       </Switch>
     </div>
   </BrowserRouter>
  );
}

export default App;