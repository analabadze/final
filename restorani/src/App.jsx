import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <CartProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<h1 className="container">404 - გვერდი ვერ მოიძებნა</h1>} />
          </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;