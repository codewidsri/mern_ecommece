import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import RegisterScreen from './pages/RegisterScreen';
import LoginScreen from './pages/LoginScreen ';
import User from './pages/User';
import ProtectedRoute from './components/ProtectedRoute';
import UserAccountDetails from './pages/UserAccountDetails';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark' position='top-center' />
          <Header cartItems={cartItems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path='/home' element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            } />
            <Route path='/user' element={
              <ProtectedRoute>
                <UserAccountDetails />
              </ProtectedRoute>
            }/>
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;