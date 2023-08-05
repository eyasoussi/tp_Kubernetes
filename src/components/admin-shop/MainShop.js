import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import BoolEditor from '@inovua/reactdatagrid-community/BoolEditor'
import SelectEditor from '@inovua/reactdatagrid-community/SelectEditor'
import NumericEditor from '@inovua/reactdatagrid-community/NumericEditor'

export default function MainShop({ filteredData, columns, handleAddItem, newlyAddedItemId }) {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [data, setData] = useState(filteredData);
  const [pageSize, setPageSize] = useState(10); // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredDataSource, setFilteredDataSource] = useState(filteredData);
  const [gridRef, setGridRef] = useState(null);

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

  const handleDeleteItem = (id) => {
    // Implement your logic to delete the item with the given ID
    // You may need to update the 'filteredData' and 'filteredDataSource' state
  };

  useEffect(() => {
    // Scroll to the newly added item in the data grid
    if (newlyAddedItemId) {
    gridRef.current.scrollToIndex(0)
    }
  }, [newlyAddedItemId]);

  const raceData = [
    { id: 'Gharbi', label: 'Gharbi' },
    { id: 'Arbi', label: 'Arbi' },
    { id: 'Tibar', label: 'Tibar' },
    { id: 'Houti', label: 'Houti' },
    { id: 'Dmen', label: 'Dmen' },
    { id: 'Lacaune', label: 'Lacaune' }
  ]

  const onEditComplete = useCallback(({ value, columnId, rowId }) => {
    setFilteredDataSource((prevData) => {
      // Create a copy of the previous data
      const newData = [...prevData];
      // Find the index of the row with the given rowId
      const rowIndex = newData.findIndex((item) => item.id === rowId);
      if (rowIndex !== -1) {
        // Update the value of the specified column in the found row
        newData[rowIndex][columnId] = value;
      }
      return newData;
    });
  }, []);

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
        onReady={setGridRef}
        idProperty="id"
        columns={columns}
        dataSource={filteredDataSource}
        style={gridStyle}
        onEditComplete={onEditComplete}
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

      <button onClick={handleAddItem}>Add Item</button>

      {/* Optional: Render additional components below the data grid if needed */}
    </div>
  );
}
