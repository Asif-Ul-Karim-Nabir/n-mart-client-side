import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import About from "./Pages/Home/About/About";
import Blogs from "./Pages/Home/Blogs/Blogs";
import Contact from "./Pages/Home/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Products from "./Pages/Home/Products/Products";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
       <Router>
          <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
