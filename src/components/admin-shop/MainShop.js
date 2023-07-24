import React, { useState, useEffect, useRef } from 'react';
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
  const [newlyAddedItemId, setNewlyAddedItemId] = useState(null);
  const [gridRef, setGridRef] = useState(null)

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

  const handleAddItem = () => {
    // Create a new empty object for the new item
    const newEmptyItem = {
      id: Math.random().toString(), // You can use a more appropriate ID generation method
      title: '',
      price: '',
      category: '',
      description: '',
      race: '',
      age: '',
    };

    // Add the new empty object to the data source
    setFilteredDataSource((prevData) => [...prevData, newEmptyItem]);

    // Set the ID of the newly added item to scroll to it later
    setNewlyAddedItemId(newEmptyItem.id);
  };

  useEffect(() => {
    // Scroll to the newly added item in the data grid
    if (newlyAddedItemId) {
      // Scroll to the corresponding row in the data grid
      // Assuming 'gridRef' is a ref to the ReactDataGrid component
      gridRef.current.scrollToId(newlyAddedItemId, { force: true });

      // Reset the newly added item ID state to prevent unnecessary scrolling on subsequent renders
      setNewlyAddedItemId(null);
    }
  }, [newlyAddedItemId]);


  const columns = [
    { name: 'title', header: 'Titre', minWidth: 50, defaultFlex: 2, editable: true },
    { name: 'price', header: 'Prix', maxWidth: 1000, defaultFlex: 1, editable: true },
    { name: 'category', header: 'Catégorie', minWidth: 50, defaultFlex: 2, editable: true },
    { name: 'description', header: 'Description', maxWidth: 1000, defaultFlex: 1, editable: true },
    { name: 'race', header: 'Race', minWidth: 50, defaultFlex: 2, editable: true },
    { name: 'age', header: 'Age', maxWidth: 1000, defaultFlex: 1, editable: true },
    {
      name: 'actions',
      header: 'Actions',
      maxWidth: 100,
      render: ({ value, data }) => (
        <button onClick={() => handleDeleteItem(data.id)}>Delete</button>
      ),
    },
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
        onReady={setGridRef}
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

      <button onClick={handleAddItem}>Add Item</button>

      {/* Optional: Render additional components below the data grid if needed */}
    </div>
  );
}
