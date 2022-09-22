import Contactus from './components/Contactus';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import Rummy from './components/Rummy';
import RummyHi from './components/RummyHi';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './components/Assets/Style.css'
function App() {
  return (
   <>
<BrowserRouter>
<Routes>
  <Route path='/contact-us.html' element={<Contactus/>} />
  <Route path='/privacy-policy.html' element={ <PrivacyPolicy/>} />
  <Route path='term-of-use.html' element={ <TermsOfUse/>} />
  <Route path='rummy.html' element={<Rummy/>} />
  <Route path='rummy-hi.html' element={<RummyHi/>} />
</Routes>
</BrowserRouter>
 
   </>
  );
}

export default App;
