import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from "./Card";
import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';

export default function MainShop({ filteredData }) {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [data, setData] = useState(filteredData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    setData(filteredData);
    setCurrentPage(1);
  }, [filteredData]);

  const handleShopItemClick = (index) => {
    navigate(`/boutique/${index}`);
  };

  // Calculate the total number of pages based on the data length and items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the current page's items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle pagination click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="shop__product__option__left">
            {language === "fr" ? (
              <p>Affichage de {indexOfFirstItem + 1} à {indexOfLastItem} sur {data.length} résultats</p>
            ) : (
              <p>عرض {indexOfFirstItem + 1} إلى {indexOfLastItem} من {data.length} نتيجة</p>
            )}

          </div>
        </div>
      </div>

      <div className="row">
        {/* Render the current page's items */}
        {currentItems.map((item, index) => (
          <Card key={item.id} item={item} handleShopItemClick={handleShopItemClick} />
        ))}
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="product__pagination">
            {/* Generate pagination links */}
            {Array.from({ length: totalPages }, (_, index) => (
              <a
                key={index}
                className={currentPage === index + 1 ? 'active clickable-element' : 'clickable-element'}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
