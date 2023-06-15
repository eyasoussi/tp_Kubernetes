import React from 'react';
import "./Search.css" ;
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function Search({setEnteredWord, enteredWord}) {

  const setSearch = (event) => {
    const searchWord = event.target.value;
    setEnteredWord(searchWord.toLowerCase());
  };

  const clearInput = () => {
    setEnteredWord("");
  };
  return (
    <div className="shop__sidebar__search">
        <div className="searchInputs">
        <input
          type="text"
          placeholder="chercher"
          value={enteredWord}
          onChange={setSearch}
        />
        <div className="searchIcon">
          {enteredWord?.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
    </div>
  );
}



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "./Search.css" ;
// import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close';

// export default function Search() {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('dummy.json');
//         setData(response.data.articles);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);


//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     setWordEntered(searchWord);
//     const newFilter = data.filter((value) => {
//       return value.title.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };

//   const clearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };
//   return (
//     <div className="shop__sidebar__search">
//         <div className="searchInputs">
//         <input
//           type="text"
//           placeholder="chercher"
//           value={wordEntered}
//           onChange={handleFilter}
//         />
//         <div className="searchIcon">
//           {filteredData.length === 0 ? (
//             <SearchIcon />
//           ) : (
//             <CloseIcon id="clearBtn" onClick={clearInput} />
//           )}
//         </div>
//       </div>

//       {/* Render the filtered data */}
//       {filteredData.length != 0 && (
//         <div className="dataResult">
//           {filteredData.slice(0, 15).map((value, key) => {
//             return (
//               <a className="dataItem" href={value.thumbnail} target="_blank">
//                 <p>{value.race} </p>
//               </a>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }


