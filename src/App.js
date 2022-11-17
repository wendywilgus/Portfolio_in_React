import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import * as ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
        
         <BrowserRouter>
         
           <Route path='/' exact component={Home}/>
           <Route path='/portfolio' exact component={Portfolio}/>
           <Route path='/resume' exact component={Resume}/>
           <Route path='/contact' exact component={Contact}/>
         
         </BrowserRouter>
    </div>
  )
};


export default App;
