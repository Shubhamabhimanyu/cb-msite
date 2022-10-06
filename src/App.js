import Contactus from './components/Contactus';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import Rummy from './components/Rummy';
import RummyHi from './components/RummyHi';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './components/Assets/Style.css'
import Dbs from './components/Dbs';
import Home from './components/Home';
import Path from './components/Path';


function App() {
  return (
   <>
<BrowserRouter>

<Routes>
<Route path='/' element={<Home/>} />
  <Route path='path' element={<Path/>} />
  <Route path='dbs' element={<Dbs/>} />
  <Route path='contact-us' element={<Contactus/>} />
  <Route path='privacy-policy' element={ <PrivacyPolicy/>} />
  <Route path='term-of-use' element={ <TermsOfUse/>} />
  <Route path='rummy' element={<Rummy/>} />
  <Route path='rummy-hi' element={<RummyHi/>} />
</Routes>
</BrowserRouter>
 
   </>
  );
}

export default App;
