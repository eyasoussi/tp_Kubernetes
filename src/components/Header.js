import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import './styles.css';

const Header = () => {
    const offcanvasMenuWrapperRef = useRef(null);
    const offcanvasMenuOverlayRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleOpenClick = () => {
        setMenuOpen(true);
    };

    const handleOverlayClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="houssam">
                    <div className="col-lg-3 col-md-3" style={{display:"flex"}}>
                        <div className="header__logo">
                            <a href="./index.html">
                            <img src="./logo1.png" alt="Your Image"  />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" style={{display:"flex"}}>
                        <nav className="header__menu mobile-menu">
                            <ul>
                                <li>
                                    <Link to={routes.HOME}>
                                        Acceuil
                                    </Link>
                                </li>
                                <li>
                                    <Link to={routes.SHOP}>
                                        Boutique
                                    </Link>
                                </li>
                                <li>
                                    <Link to={routes.ABOUTUS}>
                                        A Propos
                                    </Link>
                                </li>
                                <li>
                                    <a href="./shopping-cart.html">Shopping Cart</a>
                                </li>
                                <li>
                                    <a href="./checkout.html">Check Out</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="header__nav__option">
                            <a href="#" className="search-switch">
                                <img src="img/icon/search.png" alt="" />
                            </a>
                            <a href="#">
                                <img src="img/icon/heart.png" alt="" />
                            </a>
                            <Link to={routes.CART}>
                                <img src="img/icon/cart.png" alt="" /> <span>0</span>
                            </Link>
                            <div className="price">$0.00</div>
                        </div>
                    </div>
                </div>
                <div
                    className={`canvas__open ${menuOpen ? 'active' : ''}`}
                    onClick={handleOpenClick}
                    style={{ color: menuOpen ? 'red' : 'black' }}
                >
                    <i className="fa fa-bars"></i>
                </div>
            </div>
            <div
                className={`offcanvas-menu-wrapper ${menuOpen ? 'active' : ''}`}
                ref={offcanvasMenuWrapperRef}
                style={{ backgroundColor: menuOpen ? '#F3F2EE' : 'transparent' }}
            >
                <ul style={{ listStyleType: 'none' }}>
                    <li className="li-item">
                        <Link
                            className="li-a-item"
                            to={routes.HOME}
                            style={menuOpen ? { color: 'red' } : {}}
                        >
                            Acceuil
                        </Link>
                    </li>
                    <li className="li-item">
                        <Link
                            className="li-a-item"
                            to={routes.SHOP}
                        >
                            Boutique
                        </Link>
                    </li>
                    <li className="li-item">
                        <Link
                            className="li-a-item"
                            to={routes.ABOUTUS}
                        >
                            A Propos
                        </Link>
                    </li>
                </ul>
            </div>
            <div
                className={`offcanvas-menu-overlay ${menuOpen ? 'active' : ''}`}
                ref={offcanvasMenuOverlayRef}
                onClick={handleOverlayClick}
            />
        </header>
    );
}

export default Header;
