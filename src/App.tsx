import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Login2 from "./components/Login2";
import Map from "./components/Map";
import "./CSS_styles/Footer.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mapa" element={<Map />} />
        {/*<Route path="/login" element={<Login />} />*/}
        <Route path="/login" element={<Login2 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
