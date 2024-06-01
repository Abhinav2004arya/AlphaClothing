import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Main_Pages/Home';
import Men from './Main_Pages/Men';
import Women from './Main_Pages/Women';
import Kids from './Main_Pages/Kids';
import Living from './Main_Pages/Living';
import Buy from './Pages/Buy/Buy';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Initial from './Main_Pages/Initial';
import Profile from './components/Profile';





function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login'  ;
  const displayNavbar = location.pathname !== '/signup';
  const dNavbar = location.pathname !== '/buy';
  const nnavbar = location.pathname !== '/'
  return (
    <>
      {showNavbar && displayNavbar  && dNavbar && nnavbar && <Navbar></Navbar>}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/men' element={<Men />} /> 
        <Route path='/women' element={<Women />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/living' element={<Living />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Initial />} />
        <Route path="/profile" element={<Profile/>} />

        
      </Routes>
    </>
  );
}

export default App;
