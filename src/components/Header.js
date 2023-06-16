import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import routes from '../routes';
import './styles.css';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { CartContext } from '../CartContext';

const Header = () => {
    const { cartItems } = useContext(CartContext);
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
                    <div className="col-lg-3 col-md-3" style={{ display: "flex" }}>
                        <div className="header__logo">

                            <Link to={routes.HOME}>

                                <img src="https://scontent.ftun4-2.fna.fbcdn.net/v/t1.15752-9/354489994_258818066739367_6080175949998551953_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=UEjHlc23qeoAX8FectC&_nc_ht=scontent.ftun4-2.fna&oh=03_AdTIL1OR_JFRMcq2hfu7_zVlSTVHGI6b7qbNlb2ZYuf0TQ&oe=64B37E9D" alt="Your Image" />
                            </Link>

                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5" style={{ display: "flex" }}>
                        <nav className="header__menu mobile-menu">
                            <ul style={{padding:"16px 0"}}>
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
                    <div className="col-lg-4 col-md-4" style={{ display: "flex" }}>
                        <div className="header__nav__option" style={{ display: "flex" }}>
                            <LanguageSelector />
                            <Link to={routes.CART}>
                                <img src="https://scontent.ftun4-2.fna.fbcdn.net/v/t1.15752-9/334893072_159526017014858_6086972990484068810_n.png?stp=cp0_dst-png&_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=xnxic3Gk-3AAX-w5QBx&_nc_ht=scontent.ftun4-2.fna&oh=03_AdQyVl7vOqCZOxbbZajXbeQQ2xncvT2Ld4PQ5iWCFZ7z5A&oe=64B3695F" alt="" /> <span></span>
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
                    <li>
                        <LanguageSelector />
                    </li>
                    <li>
                        <Link to={routes.CART}>
                            <img src="img/icon/cart.png" alt="" /> <span></span></Link>
                            <Link to={routes.CART}><a>{cartItems.reduce((total, item) => total + item.price, 0)} {language === "fr" ? "Dinars" : "دينار"}</a>
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
