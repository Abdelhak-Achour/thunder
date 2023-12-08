import React from "react";
import { Login } from "./pages/login";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/notfound";
import { Home } from "./pages/home";
import { SignUp } from "./pages/signup";
import { Solutions } from "./pages/solutions";
import { Myths } from "./pages/myths";
import { Chat } from "./pages/chat";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/solutions' element = {<Solutions />} />
        <Route path = '/myths' element = {<Myths />} />
        <Route path = '/chat' element = {<Chat />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/signup' element = {<SignUp />} />
        <Route path = '*' element = {<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
