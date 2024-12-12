import { BrowserRouter ,Route,Routes } from 'react-router';
import './App.css';
import Home from './views/Home.jsx'
import About from './views/About.jsx';
import Works from './views/Works.jsx';
import Services from './views/Services.jsx';
import Testimonials from './views/Testimonials.jsx';
import WhyUs from './views/WhyUs.jsx';
import Faq from './views/Faq.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/about' element={ <About/>}/>
          <Route path='/works' element={ <Works/>}/>
          <Route path='/services' element={ <Services/>}/>
          <Route path='/testimonials' element={ <Testimonials/>}/>
          <Route path='/whyUs' element={ <WhyUs/>}/>
          <Route path='/faq' element={ <Faq/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
