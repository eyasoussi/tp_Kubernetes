import React from 'react'
import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';

export default function Card({item,key,handleShopItemClick}) {
    const { language } = useContext(LanguageContext);
  return (
    <div className="col-lg-4 col-md-6 col-sm-6"  onClick={() => handleShopItemClick(item.id)}>
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg={item.thumbnail}>
                                    <img src={item.thumbnail} alt=""></img>
                                    <ul className="product__hover">
                                        <li><a><img src="img/icon/heart.png" alt=""/></a></li>
                                        <li><a><img src="img/icon/compare.png" alt=""/> <span>{ language==="fr"? "Comparer": "مقارنة"}</span></a>
                                        </li>
                                        <li><a><img src="img/icon/search.png" alt=""/></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>{item.title}</h6>
                                    <a className="add-cart">{ language==="fr"? "Voir les details de l'article": "أنقر لترى تفاصيل المنتج"}</a>
                                    <h5>{item.price} { language==="fr"? "TND": "دينار"}</h5>
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
  )
}
