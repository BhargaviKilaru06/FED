import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Profile from "./components/Profile";
import Cover from "./components/Cover";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import Footer from "./Components/Footer"
import Chatbot from "./Components/Chatbot";
import CreateAccount from "./Components/CreateAccount";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>

          <Route path="/" element={<Cover />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
