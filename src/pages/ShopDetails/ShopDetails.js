import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import JsScripts from '../../components/JsScripts';
import AwesomeSlider from 'react-awesome-slider';
import { useParams } from 'react-router-dom';

export default function ShopDetails() {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
    if(typeof article === 'null' || typeof article === 'undefined' || articles.length === 0){
    fetchData();
    }
    console.log(id)
    console.log(articles);
    console.log(article);
  }, [articles, id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
        <Header /> 
        <section className="shop-details">
        <div className="product__details__pic">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="product__details__breadcrumb">
                            <a>Home</a>
                            <a>Shop</a>
                            <span>Product Details</span>
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
                            <h3>{article?.price}<span>{article?.price*0.1+article?.price}</span></h3>
                            <p>{article?.description}</p>
                            <div className="product__details__option">
                                
                            </div>
                            <div className="product__details__cart__option">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        <input type="text" value="1"/>
                                    </div>
                                </div>
                                <a className="primary-btn">Passez une commande</a>
                            </div>
                            <div className="product__details__btns__option">
                                <a><i className="fa fa-heart"></i> add to wishlist</a>
                                <a><i className="fa fa-exchange"></i> Add To Compare</a>
                            </div>
                            <div className="product__details__last__option">
                                <h5><span>Guaranteed Safe Checkout</span></h5>
                                <img src="img/shop-details/details-payment.png" alt=""/>
                                <ul>
                                    <li><span>Catégorie: </span>{article?.category}</li>
                                    <li><span>Age: </span>{article?.age} an</li>
                                    <li><span>Poids: </span>{article?.weight} kg</li>
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
