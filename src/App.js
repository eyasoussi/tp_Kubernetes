import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import ShopDetails from './pages/ShopDetails';
import CheckOut from './pages/CheckOut';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    
      
      <Router>
        <Routes>
            <Route exact path= {routes.HOME} element={<Home />} />
            <Route exact path= {routes.ABOUTUS} element={<AboutUs />} />
            <Route exact path= {routes.CART} element={<Cart />} />
            <Route exact path= {routes.CHECKOUT} element={<CheckOut />} />
            <Route path= {routes.SHOP} element={<Shop />} />
            <Route path= {routes.SHOPDETAILS} element={<ShopDetails />} />
            <Route path={routes.NOT_FOUND_PAGE} element={<ShopDetails />} />
        </Routes>      
      </Router>
      
      
  
  );
}

export default App;
