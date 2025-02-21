import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/authPage/Login/Login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/authPage/Register/Register.jsx';
import Tellus from './pages/TellUs/Tellus.jsx';
import HomePage from './pages/Home/HomePage/HomePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element = {<Register/>} />
        <Route path='/tell-us-about-you' element = {<Tellus/>} />
        <Route path='/link-page' element = {<HomePage/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
