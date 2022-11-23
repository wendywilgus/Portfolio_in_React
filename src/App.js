import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Resume from './pages/Resume';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import '../src/stylesheets/home.css';
import '../src/stylesheets/header-footer.css';
import '../src/stylesheets/carousel.css';
import '../src/stylesheets/portfolio-resume.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({
  duration: 500
});
function App() {
  return (
    <div className="App">
        
         <BrowserRouter>
         
           <Route path='/' exact component={Home}/>
           <Route path='/about' exact component={About}/>
           <Route path='/portfolio' exact component={Portfolio}/>
           <Route path='/resume' exact component={Resume}/>
           <Route path='/contact' exact component={Contact}/>         
         </BrowserRouter>

         <Footer/>
    </div>
  )
};


export default App;
