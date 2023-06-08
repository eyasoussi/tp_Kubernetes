import React, {useEffect} from 'react'
import $ from 'jquery';
import routes from '../routes';
import { Link } from 'react-router-dom';

export default function Header() {
    useEffect(() => {
        $('.search-switch').on('click', function () {
          $('.search-model').fadeIn(400);
        });
    
        $('.search-close-switch').on('click', function () {
          $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
          });
        });
    
        // Cleanup function to remove event listeners
        return () => {
          $('.search-switch').off('click');
          $('.search-close-switch').off('click');
        };
      }, []);

  return (
    <header className="header">
          
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3">
                    <div className="header__logo">
                        <a href="./index.html"><h3 style={{color:'green'}}>Aalouchi.tn</h3></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <nav className="header__menu mobile-menu">
                        <ul>
                            <li><Link to={routes.HOME}>Acceuil</Link></li>
                            <li><Link to={routes.SHOP}>Boutique</Link></li>
                            <li><Link to={routes.ABOUTUS}>A Propos</Link></li>
                            <li><a href="#">Pages</a>
                                <ul className="dropdown">
                                    <li><a href="./shop-details.html">Shop Details</a></li>
                                    <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="header__nav__option">
                        <a href="#" className="search-switch"><img src="img/icon/search.png" alt=""/></a>
                        <a href="#"><img src="img/icon/heart.png" alt=""/></a>
                        <Link to={routes.CART}><img src="img/icon/cart.png" alt=""/> <span>0</span></Link>
                        <div className="price">$0.00</div>
                    </div>
                </div>
            </div>
            <div className="canvas__open"><i className="fa fa-bars"></i></div>
        </div>
    </header>
  )
}
