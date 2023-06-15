import React from 'react'
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

export default function InfoBar() {
    const { language } = useContext(LanguageContext);
  return (
    <section className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__text">
                        <h4>{language==="fr" ? "Boutique" : "المتجر"}</h4>
                        <div className="breadcrumb__links">
                            <a href="./index.html">{language==="fr" ? "Acceuil" : "الصفحة الرئيسية"}</a>
                            <span>{language==="fr" ? "Boutique" : "المتجر"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
