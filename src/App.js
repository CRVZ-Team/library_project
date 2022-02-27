import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import Catalog from './components/Catalog';
import { LoginPage } from './components/LoginPage';
import { SignUpPage } from './components/SignUpPage';

function App() {
  return (
    <Router>
      <NavBar />
      <br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/events" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
