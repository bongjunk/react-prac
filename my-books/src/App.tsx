import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import Signin from "./pages/Signin";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/add" element={<Add />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;

// <Routes>
//   <Route path="/login" element={isLogin ? <Navigate to="/" />: <Login />}></Route>
//   <Route path="/" element={<Home />} />
//   <Route path="/Profile" element={<Profile />} />
//   <Route path="/Profile/:id" element={<Profile />} />
//   <Route path="/About" element={<About />} />
//   <Route path="/*" element={<NotFound />} />
// </Routes>
