import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import JsScripts from '../../components/JsScripts';
import Preloader from '../../components/Preloader';
import AwesomeSlider from 'react-awesome-slider';

export default function ShopDetails() {
  return (
    <div>
        <Header />
        <section className="shop-details">
        <div className="product__details__pic">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="product__details__breadcrumb">
                            <a href="./index.html">Home</a>
                            <a href="./shop.html">Shop</a>
                            <span>Product Details</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                        <AwesomeSlider>
                            <div data-src="img/hero/hero-1.jpg" />
                            <div data-src="img/hero/hero-1.jpg" />
                        </AwesomeSlider>    
                </div>
            </div>
        </div>
        <div className="product__details__content">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div className="product__details__text">
                            <h4>Aalouche101</h4>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                                <span> - 5 Reviews</span>
                            </div>
                            <h3>970.00 <span>1200.00</span></h3>
                            <p>Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable
                                cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening
                            with placket.</p>
                            <div className="product__details__option">
                                
                            </div>
                            <div className="product__details__cart__option">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        <input type="text" value="1"/>
                                    </div>
                                </div>
                                <a href="#" className="primary-btn">Passez une commande</a>
                            </div>
                            <div className="product__details__btns__option">
                                <a href="#"><i className="fa fa-heart"></i> add to wishlist</a>
                                <a href="#"><i className="fa fa-exchange"></i> Add To Compare</a>
                            </div>
                            <div className="product__details__last__option">
                                <h5><span>Guaranteed Safe Checkout</span></h5>
                                <img src="img/shop-details/details-payment.png" alt=""/>
                                <ul>
                                    <li><span>Categories:</span> Clothes</li>
                                    <li><span>Sexe:</span> M </li>
                                    <li><span>Age:</span> 1an</li>
                                    <li><span>Poids:</span> 28Kg</li>
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
                    <h3 className="related-title">Related Product</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                            <span className="label">New</span>
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
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
                                <label for="pc-1">
                                    <input type="radio" id="pc-1"/>
                                </label>
                                <label className="active black" for="pc-2">
                                    <input type="radio" id="pc-2"/>
                                </label>
                                <label className="grey" for="pc-3">
                                    <input type="radio" id="pc-3"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/product/product-2.jpg">
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
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
                                <label for="pc-4">
                                    <input type="radio" id="pc-4"/>
                                </label>
                                <label className="active black" for="pc-5">
                                    <input type="radio" id="pc-5"/>
                                </label>
                                <label className="grey" for="pc-6">
                                    <input type="radio" id="pc-6"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                    <div className="product__item sale">
                        <div className="product__item__pic set-bg" data-setbg="img/product/product-3.jpg">
                            <span className="label">Sale</span>
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
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
                                <label for="pc-7">
                                    <input type="radio" id="pc-7"/>
                                </label>
                                <label className="active black" for="pc-8">
                                    <input type="radio" id="pc-8"/>
                                </label>
                                <label className="grey" for="pc-9">
                                    <input type="radio" id="pc-9"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/product/product-4.jpg">
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
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
                                <label for="pc-10">
                                    <input type="radio" id="pc-10"/>
                                </label>
                                <label className="active black" for="pc-11">
                                    <input type="radio" id="pc-11"/>
                                </label>
                                <label className="grey" for="pc-12"/>
                                    <input type="radio" id="pc-12"/>
                                <label/>
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
    </div>
  )
}
