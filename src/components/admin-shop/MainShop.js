import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';

export default function MainShop({ filteredData }) {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [data, setData] = useState(filteredData);
  const [pageSize, setPageSize] = useState(10); // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredDataSource, setFilteredDataSource] = useState(filteredData);

  useEffect(() => {
    setData(filteredData);
    setFilteredDataSource(filteredData);
    setCurrentPage(1);
  }, [filteredData]);

  const handleShopItemClick = (index) => {
    navigate(`/boutique/${index}`);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const columns = [
    { name: 'title', header: 'Title', minWidth: 50, defaultFlex: 2, editable: true },
    { name: 'price', header: 'prix', maxWidth: 1000, defaultFlex: 1, editable: true },
  ];

  const gridStyle = { minHeight: 550 };

  return (
    <div>
      <div className="shop__product__option__left">
        {language === 'fr' ? (
          <p>Affichage de {filteredDataSource.length} résultats</p>
        ) : (
          <p>عرض {filteredDataSource.length} نتيجة</p>
        )}
      </div>

      <ReactDataGrid
        idProperty="id"
        columns={columns}
        dataSource={filteredDataSource}
        style={gridStyle}
        pagination={{
          enabled: true,
          pageSize: pageSize,
          pageSizeOptions: [5, 10, 20],
          currentPage: currentPage,
          onChange: handlePageChange,
        }}
        filter={{
          enabled: true,
          filterValue: (filter) => {
            const filteredData = filteredData.filter((item) => {
              return (
                item.title.toLowerCase().includes(filter.toLowerCase()) ||
                item.price.toLowerCase().includes(filter.toLowerCase())
              );
            });
            setFilteredDataSource(filteredData);
          },
        }}
      />

      {/* Optional: Render additional components below the data grid if needed */}
    </div>
  );
}
