import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage'; 

function App() {
  return (
    <Router>
      <CartProvider>
        
        <div style={appContainerStyle}>
          
         
        
          <main style={mainContentStyle}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutPage />} /> 
              <Route path="*" element={<h1 className="container">404 - გვერდი ვერ მოიძებნა</h1>} />
            </Routes>
          </main>
          
        
        </div>
      </CartProvider>
    </Router>
  );
}

const appContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
};

const mainContentStyle = {
    flexGrow: 1,
};

export default App;