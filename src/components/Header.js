import React, {useEffect} from 'react'
import $ from 'jquery';


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
    <header class="header">
          
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3">
                    <div class="header__logo">
                        <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <nav class="header__menu mobile-menu">
                        <ul>
                            <li class="active"><a href="./index.html">Home</a></li>
                            <li><a href="./shop.html">Shop</a></li>
                            <li><a href="#">Pages</a>
                                <ul class="dropdown">
                                    <li><a href="./about.html">About Us</a></li>
                                    <li><a href="./shop-details.html">Shop Details</a></li>
                                    <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="./blog.html">Blog</a></li>
                            <li><a href="./contact.html">Contacts</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3 col-md-3">
                    <div class="header__nav__option">
                        <a href="#" class="search-switch"><img src="img/icon/search.png" alt=""/></a>
                        <a href="#"><img src="img/icon/heart.png" alt=""/></a>
                        <a href="#"><img src="img/icon/cart.png" alt=""/> <span>0</span></a>
                        <div class="price">$0.00</div>
                    </div>
                </div>
            </div>
            <div class="canvas__open"><i class="fa fa-bars"></i></div>
        </div>
    </header>
  )
}
