import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/aboutus/Aboutus";
import Articlepage from "./pages/articlepage/Articlepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/article/:id" element={<Articlepage />} />
      </Routes>
    </>
  );
}

export default App;
