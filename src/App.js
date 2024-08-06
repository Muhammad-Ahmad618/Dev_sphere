import './App.css';
import LandingPage from './Screens/LandingPage';
import About from './Screens/About';
import Services from './Screens/Services';
import Portfolio from './Screens/Portfolio';
import ContactUs from './Screens/ContactUs';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
   <>
   <Router>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Portfolio' element={<Portfolio/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
     </Routes>
   </Router>
      
   </>
  );
}

export default App;
