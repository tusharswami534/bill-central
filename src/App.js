import './App.css';
import Hero from './components/home/Hero';
import SimpleSteps from './components/home/SimpleSteps';
import SwitchingEnergy from './components/home/SwitchingEnergy';
import CompaniesLogo from './components/home/CompaniesLogo';

function App() {
  return (
   
    <div>
      <Hero/>
      <CompaniesLogo/>
      <SwitchingEnergy/>
      <SimpleSteps/>
    </div>
  );
}

export default App;
