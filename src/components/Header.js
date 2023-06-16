import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import routes from '../routes';
import './styles.css';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { CartContext } from '../CartContext';

const Header = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const { language } = useContext(LanguageContext);
    const offcanvasMenuWrapperRef = useRef(null);
    const offcanvasMenuOverlayRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const HeaderTranslations = {
        "fr": {
            "Acceuil": "Acceuil",
            "Boutique": "Boutique",
            "A Propos": "Contactez Nous"
        },
        "ar": {
            "Acceuil": "الصفحة الرئيسية",
            "Boutique": "المتجر",
            "A Propos": "اتصل بنا"
        }
    }
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

                            <Link to={routes.HOME}>

                                <img src="./logo1.png" alt="Your Image"  />
                            </Link>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" style={{display:"flex"}}>
                        <nav className="header__menu mobile-menu">
                            <ul>
                                <li>
                                    <Link to={routes.HOME}>
                                        {HeaderTranslations[language]["Acceuil"]}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={routes.SHOP}>
                                        {HeaderTranslations[language]["Boutique"]}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={routes.ABOUTUS}>
                                        {HeaderTranslations[language]["A Propos"]}
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="header__nav__option">
                            <LanguageSelector />
                            <a href="#">
                                <img src="img/icon/heart.png" alt="" />
                            </a>
                            <Link to={routes.CART}>
                                <img src="img/icon/cart.png" alt="" /> <span></span>
                            </Link>
                            <div className="price">{cartItems.reduce((total, item) => total + item.price, 0)} {language === "fr" ? "Dinars" : "دينار"}</div>
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
                            {HeaderTranslations[language]["Acceuil"]}
                        </Link>
                    </li>
                    <li className="li-item">
                        <Link
                            className="li-a-item"
                            to={routes.SHOP}
                        >
                            {HeaderTranslations[language]["Boutique"]}
                        </Link>
                    </li>
                    <li className="li-item">
                        <Link
                            className="li-a-item"
                            to={routes.ABOUTUS}
                        >
                            {HeaderTranslations[language]["A Propos"]}
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
