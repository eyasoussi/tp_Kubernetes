import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from "./Card";

export default function MainShop({ filteredData }) {
  const navigate = useNavigate();
  const [data, setData] = useState(filteredData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    setData(filteredData);
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
            <p>Showing {indexOfFirstItem + 1}–{indexOfLastItem} of {data.length} results</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="shop__product__option__right">
            <p>Sort by Price:</p>
            <select>
              <option value="">Low To High</option>
            </select>
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
