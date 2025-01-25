
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import ProductDetails from '../components/ProductDetails';
import Cart from '../components/Cart';
import { Routes,Route } from 'react-router-dom';
import { CartProvider } from '../contexts/CartContext';
import { Products } from '../components/Products';
import { ProductProvider } from '../contexts/ProductContext';
import '../styles.css'
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import TermsAndConditions from '../components/TermsAndConditions';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Footer from '../components/Footer';

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
   
          <div className="app">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
              </Routes>
            </main>
            <Footer />
          </div>
      </CartProvider>
    </ProductProvider>
  )
}
