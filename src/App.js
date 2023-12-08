import React from "react";
import { Login } from "./pages/login";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/notfound";
import { Home } from "./pages/home";
import { SignUp } from "./pages/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/signup' element = {<SignUp />} />
        <Route path = '*' element = {<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
