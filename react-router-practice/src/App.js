import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Links from './components/Links';
import NavLinks from './components/NavLinks';
import Login from './pages/Login';

const isLogin = true;

function App() {
  return (
    <>
      <BrowserRouter>
        <Links />
        <NavLinks />
        <Routes>
          <Route path="/login" element={isLogin ? <Navigate to="/" />: <Login />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/About" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// const isLogin = true;
// v5
// <Route path="/login" render={() => (isLogin ? <Redirect to="/" /> : <Login />)};

// v6
// <Route path="/login" element(<Navigate to="/" />}
// <Route path="/login" element={isLogin ? <Navigate to="/" />: <Login />}></Route>