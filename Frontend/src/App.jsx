// import './App.css';
// import LandingPage from './pages/LandingPage/LandingPage';
// import Login from './pages/authPage/Login/Login.jsx';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Register from './pages/authPage/Register/Register.jsx';
// import Tellus from './pages/TellUs/Tellus.jsx';
// import HomePage from './pages/Home/HomePage/HomePage.jsx';
// import AuthContext from './Context/AuthContext.jsx';
// import { Navigate } from 'react-router-dom';
// import Settings from './pages/Home/Settings/Settings.jsx';
// import Sidebar from './pages/Home/Sidebar/Sidebar.jsx';
// import Navbar from './pages/Home/Navbar/Navbar.jsx';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<LandingPage />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/register' element={<Register />} />
//         <Route element={<AuthContext />}>
//           <Route path='/tell-us-about-you' element={<Tellus />} />
//           {/* <Route path='/link-page' element={<HomePage />} /> */}
//           {/* <Route path='/settings' element = {<Settings/>} /> */}
//         </Route>
//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/authPage/Login/Login.jsx';
import Register from './pages/authPage/Register/Register.jsx';
import Tellus from './pages/TellUs/Tellus.jsx';
import HomePage from './pages/Home/HomePage/HomePage.jsx';
import AuthContextProvider from './Context/AuthContext.jsx';
import Sidebar from './pages/Home/Sidebar/Sidebar.jsx';
import Navbar from './pages/Home/Navbar/Navbar.jsx';

function App() {
  return (
    // <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<AuthContextProvider />}>
            <Route path="/tell-us-about-you" element={<Tellus />} />
            <Route path="/home/*" element={<HomePage />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    // </AuthContextProvider>
  );
}

export default App;
