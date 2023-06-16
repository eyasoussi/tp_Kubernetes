import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import JsScripts from '../../components/JsScripts';
import Preloader from '../../components/Preloader';
import { CartContext } from '../../CartContext';
import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';
import { Link } from 'react-router-dom';
import routes from '../../routes';


export default function Checkout() {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const { language } = useContext(LanguageContext);

    const translation = {
        "fr": {
            "contact1": "Riadh Madani",
            "contact2": "Mohamed Ali Trabelsi",
            "country": "Tunisie",
            "address": "Ferme Dmen, Ariana 2021",
            "city": "Ariana",
            "state": "Ariana",
            "postcode": "2080",
            "phone": "50 128 000",
            "email": "falleh.tn@gmail.com"
        },
        "ar": {
            "contact1": "رياض المدني",
            "contact2": "محمد علي الطرابلسي",
            "country": "تونس",
            "address": "2021 ضيعة دمان بأريانة",
            "city": "أريانة",
            "state": "أريانة",
            "postcode": "2080",
            "phone": "50 128 000",
            "email": "falleh.tn@gmail.com"
        }
    }
    const translations = translation[language];

    const handlePhoneCall = () => {
        window.location.href = `tel:${50128000}`;
    };

    return (
        <div>
            <Preloader />
            <Header />
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>{language === "fr" ? 'Passer Une Commande' : 'أتمم الطلب'}</h4>
                                <div className="breadcrumb__links">
                                    <Link to={routes.HOME}>
                                        {language === "fr" ? "Acceuil" : "الصفحة الرئيسية"}
                                    </Link>
                                    <Link to={routes.SHOP}>
                                        {language === "fr" ? "Boutique" : "المتجر"}
                                    </Link>
                                    <span>{language === "fr" ? 'Passer Une Commande' : 'أتمم الطلب'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="checkout spad">
                <div className="container">
                    <div className="checkout__form">
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <h6 className="coupon__code"><span className="icon_tag_alt"></span> {language === "fr" ? "Voulez vous continuer vos achats?" : "هل تريدون مواصلة التسوق؟"} <Link to={routes.SHOP}><a>{language === "fr" ? "Cliquez Ici" : "اضغط هنا"}</a></Link> {language === "fr" ? "pour retourner à la boutique" : "من أجل الرجوع الى المتجر"}</h6>
                                    <h6 className="checkout__title">{language === 'fr' ? 'Détails de contact' : 'تفاصيل التواصل'}</h6>
                                    <div className="row">
                                    <div className="col-lg-8">
                                    <p>{language === 'fr' ? 'Géolocalisation:' : ':احداثياتنا الجغرافية'}</p>   
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1594.1705465128282!2d10.144812522615059!3d36.953909750897665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cf73bb00371f%3A0x104cfc1d7d4c3a3f!2sFerme%20dmen%20Ariana%202021!5e0!3m2!1sen!2sus!4v1686910443808!5m2!1sen!2sus" width={600}
                                            height={450}
                                            style={{ border: "0" }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                                            </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>{language === 'fr' ? 'Contact 1:' : ' :المتواصل 1'}</p>
                                                <input type="text" readOnly value={translations.contact1} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>{language === 'fr' ? 'Contact 2:' : ' :المتواصل 2'}</p>
                                                <input type="text" readOnly value={translations.contact2} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input">
                                        <p>{language === 'fr' ? 'Ville:' : ':المدينة'}</p>
                                        <input type="text" readOnly value={translations.city} />
                                    </div>
                                    <div className="checkout__input">
                                        <p>{language === 'fr' ? 'Adresse:' : ':العنوان'}</p>
                                        <input type="text" readOnly value={translations.address} placeholder={language === 'fr' ? 'Adresse de rue' : 'عنوان الشارع'} className="checkout__input__add" />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>{language === 'fr' ? 'Téléphone:' : ':الهاتف'}</p>
                                                <input type="text" readOnly value={translations.phone} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>{language === 'fr' ? 'Email:' : ':البريد الإلكتروني'}</p>
                                                <input type="text" readOnly value={translations.email} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h4 className="order__title">{language === "fr" ? "Votre Ordre" : "محتوى طلبكم"}</h4>
                                        <div className="checkout__order__products">
                                            {language === "fr" ? "Produit" : "المنتج"} <span>{language === "fr" ? "Total" : "الثمن"}</span>
                                        </div>
                                        <ul className="checkout__total__products">
                                            {cartItems.map((item, index) => (
                                                <li key={index}>
                                                    {`${index + 1}. ${item.title}`} <span>{item.price} {language === "fr" ? "Dinars" : "دينار"}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <ul className="checkout__total__all">
                                            <li>
                                                {language === "fr" ? "Prix Total" : "الثمن الجملي"} <span>{}{cartItems.reduce((total, item) => total + item.price, 0)} {language === "fr" ? "Dinars" : "دينار"}</span>
                                            </li>
                                        </ul>
                                        <button type="submit" className="site-btn" onClick={handlePhoneCall} disabled={cartItems.length === 0}>{language === "fr" ? "Appelez Maintenant : 50 128 000" : "اتصل بنا الان : 50 128 000 "}</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
            <Modal />
            <JsScripts />
        </div>
    )
}
