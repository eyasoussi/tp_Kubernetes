import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import JsScripts from '../../components/JsScripts';
import AwesomeSlider from 'react-awesome-slider';
import Preloader from '../../components/Preloader';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import './css/style.css'
import './css/bootstrap.min.css'
import './css/nice-select.css'
import './css/magnific-popup.css'
import './css/slicknav.min.css'
import './css/style.css.map'
import './css/elegant-icons.css'
import './css/font-awesome.min.css'
import MyContext from '../../context';
import { LanguageContext } from '../../LanguageContext';
import { CartContext } from '../../CartContext';

export default function ShopDetails() {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const { language } = useContext(LanguageContext);
    const { id } = useParams();
    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const shopDetailsTranslations = {
        "en": {
          "addToWishlist": 'ADD TO WISHLIST',
          "addToCompare": 'ADD TO COMPARE',
          "safeCheckout": 'Guaranteed Safe Checkout',
          "category": 'Catégorie:',
          "ovinEngraissement": 'Ovin Engraissement',
          "age": 'Age:',
          "poids": 'Poids:',
          "relatedProducts": 'Related Products'
        },
        "fr": {
          "addToWishlist": 'AJOUTER À LA PANIER',
          "addToCompare": 'AJOUTER À LA LISTE DE SOUHAITS',
          "safeCheckout": 'Paiement Sécurisé Garanti',
          "category": 'Catégorie :',
          "age": 'Âge :',
          "poids": 'Poids :',
          "mois": "mois",
          "ans":"ans",
          "relatedProducts": 'Produits Associés',
          "unitePoids":"Kg",
          "Ovin Engraissement": 'Ovin Engraissement',
          "Brebis":"Brebis",
          "Poulailler Engraissement":"Poulailler Engraissement",
          "Poules Pondeuses":"Poules Pondeuses"
        },
        "ar": {
          "addToWishlist": 'إضافة إلى سلة المقتنيات',
          "addToCompare": 'إضافة إلى قائمة الرغبات',
          "safeCheckout": 'تأكيد الدفع بأمان',
          "category": 'الفئة:',
          "age": 'العمر:',
          "poids": 'الوزن:',
          "mois":"شهور",
          "ans":"سنة",
          "unitePoids":"كغ",
          "relatedProducts": 'منتجات ذات صلة',
          "Ovin Engraissement": 'أغنام التسمين',
          "Brebis":"النعاج",
          "Poulailler Engraissement":"دواجن التسمين",
          "Poules Pondeuses":"دجاج البيض"
        },
      };
      
      // Your code here...
      

    const getItemById = (articles, id) => {
        return articles.find((article) => Number(article.id) === Number(id));
    };

    const fetchData = () => {
        axios
            .get('/dummy.json')
            .then((response) => {
                const data = response.data;
                setArticles(data.articles);
                console.log("hey");
                const obj = articles.find((article) => Number(article.id) === Number(id));
                console.log(obj);
                setArticle(obj);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        if (typeof article === 'null' || typeof article === 'undefined' || articles.length === 0) {
            fetchData();
        }
        console.log(id)
        console.log(articles);
        console.log(article);
    }, [articles, id]);

    const handleAddToCart = () => {
        addToCart(article);
    }

    return (
        <div>
            {isLoading && <Preloader />}
            {!isLoading && <div> <Header />
                <section className="shop-details">
                    <div className="product__details__pic">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="product__details__breadcrumb">
                                        <Link to={routes.HOME}>
                                            {language === "fr" ? "Acceuil" : "الصفحة الرئيسية"}
                                        </Link>
                                        <Link to={routes.SHOP}>
                                          {language === "fr" ? "Boutique" : "المتجر"}
                                        </Link>
                                        <span>{language === "fr" ? 'Détails du produit' : 'تفاصيل المنتج'}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <AwesomeSlider>
                                    <div><img src={article?.images[0]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                                    <div><img src={article?.images[1]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                                </AwesomeSlider>
                            </div>
                        </div>
                    </div>
                    <div className="product__details__content">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                    <div className="product__details__text">
                                        <h4>{article?.title}</h4>
                                        <h3>{article?.price}<span>{article?.price * 0.1 + article?.price}</span></h3>
                                        <p>{article?.description}</p>
                                        <div className="product__details__option">

                                        </div>
                                        <div className="product__details__cart__option">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <input type="text" value="1" />
                                                </div>
                                            </div>
                                            <Link to={routes.CART}>
                                            <a className="primary-btn" onClick={handleAddToCart}>{shopDetailsTranslations[language]["addToWishlist"]}</a>
                                            </Link>
                                        </div>
                                        <div className="product__details__btns__option">
                                            <a><img src="img/icon/heart.png" alt="" /> {shopDetailsTranslations[language]["addToCompare"]}</a>
                                        </div>
                                        <div className="product__details__last__option">
                                            <h5><span>{shopDetailsTranslations[language]["safeCheckout"]}</span></h5>
                                            <img src="img/shop-details/details-payment.png" alt="" />
                                            <ul>
                                                <li><span>{shopDetailsTranslations[language]["category"]} </span>{shopDetailsTranslations[language][article?.category]}</li>
                                                <li><span>{shopDetailsTranslations[language]["age"]} </span>{article?.age < 1 ? Math.round(article?.age * 12) : article?.age} {article?.age < 1 ? shopDetailsTranslations[language]["mois"] : shopDetailsTranslations[language]["ans"]} </li>
                                                <li><span>{shopDetailsTranslations[language]["poids"]} </span>{article?.weight} {shopDetailsTranslations[language]["unitePoids"]}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="related spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3 className="related-title">{shopDetailsTranslations[language]["relatedProducts"]}</h3>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/product/product-2.jpg">
                                        <ul className="product__hover">
                                            <li><a href="#"><img src="img/icon/heart.png" alt="" /></a></li>
                                            <li><a href="#"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                                            <li><a href="#"><img src="img/icon/search.png" alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6>Piqué Biker Jacket</h6>
                                        <a href="#" className="add-cart">+ Add To Cart</a>
                                        <div className="rating">
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <h5>$67.24</h5>
                                        <div className="product__color__select">
                                            <label htmlFor="pc-4">
                                                <input type="radio" id="pc-4" />
                                            </label>
                                            <label className="active black" htmlFor="pc-5">
                                                <input type="radio" id="pc-5" />
                                            </label>
                                            <label className="grey" htmlFor="pc-6">
                                                <input type="radio" id="pc-6" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/product/product-2.jpg">
                                        <ul className="product__hover">
                                            <li><a href="#"><img src="img/icon/heart.png" alt="" /></a></li>
                                            <li><a href="#"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                                            <li><a href="#"><img src="img/icon/search.png" alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6>Piqué Biker Jacket</h6>
                                        <a href="#" className="add-cart">+ Add To Cart</a>
                                        <div className="rating">
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <h5>$67.24</h5>
                                        <div className="product__color__select">
                                            <label htmlFor="pc-4">
                                                <input type="radio" id="pc-4" />
                                            </label>
                                            <label className="active black" htmlFor="pc-5">
                                                <input type="radio" id="pc-5" />
                                            </label>
                                            <label className="grey" htmlFor="pc-6">
                                                <input type="radio" id="pc-6" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                                <div className="product__item sale">
                                    <div className="product__item__pic set-bg" data-setbg="img/product/product-3.jpg">
                                        <ul className="product__hover">
                                            <li><a href="#"><img src="img/icon/heart.png" alt="" /></a></li>
                                            <li><a href="#"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                                            <li><a href="#"><img src="img/icon/search.png" alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6>Multi-pocket Chest Bag</h6>
                                        <a href="#" className="add-cart">+ Add To Cart</a>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <h5>$43.48</h5>
                                        <div className="product__color__select">
                                            <label htmlFor="pc-7">
                                                <input type="radio" id="pc-7" />
                                            </label>
                                            <label className="active black" htmlFor="pc-8">
                                                <input type="radio" id="pc-8" />
                                            </label>
                                            <label className="grey" htmlFor="pc-9">
                                                <input type="radio" id="pc-9" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/product/product-4.jpg">
                                        <ul className="product__hover">
                                            <li><a href="#"><img src="img/icon/heart.png" alt="" /></a></li>
                                            <li><a href="#"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                                            <li><a href="#"><img src="img/icon/search.png" alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6>Diagonal Textured Cap</h6>
                                        <a href="#" className="add-cart">+ Add To Cart</a>
                                        <div className="rating">
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <h5>$60.9</h5>
                                        <div className="product__color__select">
                                            <label htmlFor="pc-10">
                                                <input type="radio" id="pc-10" />
                                            </label>
                                            <label className="active black" htmlFor="pc-11">
                                                <input type="radio" id="pc-11" />
                                            </label>
                                            <label className="grey" htmlFor="pc-12" />
                                            <input type="radio" id="pc-12" />
                                            <label />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
                <Modal />
                <JsScripts />
            </div>}
        </div>
    )
}
