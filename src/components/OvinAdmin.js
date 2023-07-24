import React, { useEffect, useState } from 'react';
import Sidebar from './sidebarAdmin/Sidebar';
import Search from './sidebar/Search';
import MainShop from './admin-shop/MainShop';
import { applyFilters } from '../methods';
import BoolEditor from '@inovua/reactdatagrid-community/BoolEditor'
import SelectEditor from '@inovua/reactdatagrid-community/SelectEditor'
import NumericEditor from '@inovua/reactdatagrid-community/NumericEditor'

export default function Ovin({ data }) {
  const [allFilters, setAllFilters] = useState({});
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filteredRes = applyFilters(data, allFilters);
    setFilteredData(filteredRes);
  }, [allFilters, data]);


  const handleDeleteItem = ()=>{};
  const handleAddItem = ()=>{};
  const raceData = [
    { id: 'Gharbi', label: 'Gharbi' },
    { id: 'Arbi', label: 'Arbi' },
    { id: 'Tibar', label: 'Tibar' },
    { id: 'Houti', label: 'Houti' },
    { id: 'Dmen', label: 'Dmen' },
    { id: 'Lacaune', label: 'Lacaune' }
  ];

  const columns = [
    { name: 'title', header: 'Titre', minWidth: 100, defaultFlex: 2, editable: true },
    { name: 'price', header: 'Prix', maxWidth: 1000, defaultFlex: 1, editable: true, type: 'number', editor: NumericEditor },
    { name: 'category', header: 'Catégorie', minWidth: 50, defaultFlex: 2, editable: false },
    { 
      name: 'race',
      header: 'Race',
      defaultFlex: 1,
      width: 100,
      render: ({ value })=> raceData[value]? raceData[value] : value,
      editor: SelectEditor,
      editorProps: {
        idProperty: 'id',
        dataSource: raceData,
        collapseOnSelect: true,
        clearIcon: null
      },
      editable:true
    },
    { name: 'age', header: 'Age', maxWidth: 100, defaultFlex: 1, editable: true, type: 'number', editor: NumericEditor },
    { name: 'weight', header: 'Poids', maxWidth: 100, defaultFlex: 1, editable: true, type: 'number', editor: NumericEditor },
    {
      name: 'thumbnail', // Name of the data field containing the image URL
      header: 'Image URL', // Header text for the column
      maxWidth: 60,
      defaultFlex: 2,
      type: 'image', // Custom type for rendering image URLs
      editable: true, // Set to true if you want to allow editing the URLs in the grid
      render: ({ value }) => {
        // Custom renderer for the image URLs
        return (
          <a href={value} target="_blank" rel="noopener noreferrer">
            <img src={value} alt="Product" style={{ width: '50px', height: '50px' }} />
          </a>
        );
      },
    },
    { name: 'vendu', header: 'Vendu', width: 100, render: ({ value }) => value? 'Vendu':'Non Vendu', editor: BoolEditor, editable: true },
    {
      name: 'Supression',
      header: 'Supression',
      maxWidth: 100,
      render: ({ value, data }) => (
        <button onClick={() => handleDeleteItem(data.id)}>Supprimer</button>
      ),
    },
    {
      name: 'Sauvegarde',
      header: 'Sauvegarde',
      minWidth: 115,
      render: ({ value, data }) => (
        <button onClick={() => handleDeleteItem(data.id)}>Sauvegarder</button>
      ),
      defaultFlex: 1,
    },
  ];


  return (
    <div>
        <div className="shop__sidebar">
          {window.innerWidth < 991 ? (
            <div className="filter-bar">
              <Sidebar
                setAllFilters={setAllFilters}
                articles={"Ovin Engraissement"}
              />
            </div>
          ) : (
            <React.Fragment>
              <Sidebar
                setAllFilters={setAllFilters}
                articles={"Ovin Engraissement"}
              />
            </React.Fragment>
          )}
        </div>
        <div className="shop__product__option">
          <MainShop filteredData={filteredData} columns={columns} />
        </div>
        </div>
  );
}
