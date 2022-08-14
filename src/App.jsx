import React from "react";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import Sproduct from "./SHop/Sproduct";
import NoMatch from "./components/NoMatch";
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="Shop/*" element={<Sproduct />} />
      <Route path="Blog" element={<Blog />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
