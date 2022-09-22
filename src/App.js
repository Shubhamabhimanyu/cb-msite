import Contactus from './components/Contactus';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import Rummy from './components/Rummy';
import RummyHi from './components/RummyHi';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
   <>
<BrowserRouter>
<Routes>
  <Route path='/contact-us' element={<Contactus/>} />
  <Route path='/privacy-policy' element={ <PrivacyPolicy/>} />
  <Route path='term-of-use' element={ <TermsOfUse/>} />
  <Route path='rummy' element={<Rummy/>} />
  <Route path='rummy-hi' element={<RummyHi/>} />
</Routes>
</BrowserRouter>

   </>
  );
}

export default App;
