import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import React, { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const LoadingFallback = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>იტვირთება...</div>
);

function App() {
  return (
    <Router>
      <CartProvider>

        <div style={appContainerStyle}>
          <main style={mainContentStyle}>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<h1 className="container">404 - გვერდი ვერ მოიძებნა</h1>} />
              </Routes>
            </Suspense>
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