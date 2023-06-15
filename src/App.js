import './App.css';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import Shop from './pages/Shop/Shop';
import ShopDetails from './pages/ShopDetails/ShopDetails';
import CheckOut from './pages/CheckOut';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route exact path={routes.HOME} element={<Home />} />
          <Route exact path={routes.ABOUTUS} element={<AboutUs />} />
          <Route exact path={routes.CART} element={<Cart />} />
          <Route exact path={routes.CHECKOUT} element={<CheckOut />} />
          <Route path={routes.SHOP} element={<Shop />} />
          <Route path={routes.SHOPDETAILS} element={<ShopDetails />} />
          <Route path={routes.NOT_FOUND_PAGE} element={<ShopDetails />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
