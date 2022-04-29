import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import CatalogFrame from './components/CatalogFrame';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { PrivateRoute } from './auth/PrivateRoute';
import { WelcomeUser } from './pages/WelcomeUser';
import { PleaseVerifyEmailPage} from './pages/PleaseVerifyEmailPage';
import { EmailVerificationLandingPage} from './pages/EmailVerificationLandingPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { PasswordResetLandingPage } from './pages/PasswordResetLandingPage'; 
import CartList from "./components/CartList";
import CartFrame from './components/CartFrame';
import { Book } from './pages/Book';
import YourBooksFrame from './components/YourBooksFrame';


function App() {
  return (
    <Router>
      <NavBar />
      <br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/welcome' element={<WelcomeUser />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/catalog" element={<CatalogFrame />} />
        <Route path="/yourbooks" element={<YourBooksFrame />} />
        <Route path="/events" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/cart" element={<CartFrame />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/reset-password/:passwordResetCode' element={<PasswordResetLandingPage />} />
        <Route path='/verify-email/:verificationString' element={<EmailVerificationLandingPage />} />
        <Route path='/please-verify' element={<PleaseVerifyEmailPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
