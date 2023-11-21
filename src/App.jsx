// import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import Content from "./component/Content";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <Skills />
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Skill />} />
      </Routes> */}
    </>
  );
}

export default App;
