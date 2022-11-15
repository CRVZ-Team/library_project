import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import CatalogFrame from './components/CatalogFrame';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { WelcomeUser } from './pages/WelcomeUser';
import { PleaseVerifyEmailPage} from './pages/PleaseVerifyEmailPage';
import { EmailVerificationLandingPage} from './pages/EmailVerificationLandingPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { PasswordResetLandingPage } from './pages/PasswordResetLandingPage'; 
import CartFrame from './components/CartFrame';
import { Book } from './pages/Book';
import YourBooksFrame from './components/YourBooksFrame';
import { About } from './pages/About';
import { Footer } from './components/Footer';
import { PrivateRoute } from './auth/PrivateRoute';
import { NotFound } from './pages/NotFound';


function App() {
  return (
    <Router>
      <NavBar />
      <br/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/welcome' element={<WelcomeUser />} />
        <Route exact path="/book/:id" element={<Book />} />
        <Route exact path="/catalog" element={<CatalogFrame />} />
        <Route exact path="/yourbooks" element={<PrivateRoute children={<YourBooksFrame />} />}/>
        <Route exact path="/events" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Home />} />
        <Route exact path="/cart" element={<CartFrame />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path='/reset-password/:passwordResetCode' element={<PasswordResetLandingPage />} />
        <Route exact path='/verify-email/:verificationString' element={<EmailVerificationLandingPage />} />
        <Route exact path='/please-verify' element={<PleaseVerifyEmailPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
