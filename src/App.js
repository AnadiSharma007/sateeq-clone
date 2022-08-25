import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Invest from './pages/Invest';
import StartupSignup from './pages/StartupSignup';
import Raise from './pages/Raise';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home show/>}/>
      <Route path="/invest" element={<Invest />}/>
      <Route path="/raise" element={<Raise />}/>
      <Route path="/startupsignup" element={<StartupSignup />}/>
      <Route path="/investorSignUp" element={<SignUp />}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
