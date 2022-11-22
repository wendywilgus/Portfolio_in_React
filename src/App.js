import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import '../src/stylesheets/home.css';
import '../src/stylesheets/header-footer.css';
import '../src/stylesheets/carousel.css';
import '../src/stylesheets/portfolio-resume.css'


function App() {
  return (
    <div className="App">
        
         <BrowserRouter>
         
           <Route path='/' exact component={Home}/>
           <Route path='/portfolio' exact component={Portfolio}/>
           <Route path='/resume' exact component={Resume}/>
           <Route path='/contact' exact component={Contact}/>
         
         </BrowserRouter>

         <Footer/>
    </div>
  )
};


export default App;
