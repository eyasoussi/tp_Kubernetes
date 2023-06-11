
//This utility function exports articles based on their category
export const getObjectsByCategory = (data, category) => {
  var objects = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].category === category) {
      objects.push(data[i]);
    }
  }
  return objects;
}

export const getItemById = (articles, id) => {
  const item = articles.find((item) => item.id === id);
  return item;
}

// Apply filters to data and update filteredData
export const applyFilters = (data, allFilters) => {
  let filteredResults = data;
  if (allFilters.price) {
    const [minPrice, maxPrice] = allFilters.price;
    filteredResults = filteredResults.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
  }

  console.log("price filter: ",filteredResults);

  if (allFilters.weight && allFilters.weight[1] !== 80 && allFilters.weight[0] !== 0) {
    const [minWeight, maxWeight] = allFilters.weight;
    filteredResults = filteredResults.filter(
      (item) => item.weight >= minWeight && item.weight <= maxWeight
    );
  }
  console.log("weight filter: ",filteredResults);
  
  if (allFilters.race && allFilters.race.length > 0) {
    // Apply race filter logic
    filteredResults = filteredResults.filter(
      (item) => allFilters.race.includes(item.race)
    );
  }
  console.log("race filter: ",filteredResults);
  if (allFilters.age && allFilters.age.length > 0) {
    filteredResults = filteredResults.filter((item) =>
      allFilters.age.some((ageRange) =>
        item.age >= ageRange[0] && item.age < ageRange[1]
      )
    );
  }
  console.log("age filter", filteredResults);
  if (allFilters.type && allFilters.type.length > 0) {
    // Apply type filter logic
    filteredResults = filteredResults.filter(
      (item) => allFilters.type.includes(item.type)
    );
  }
  console.log("type filter: ",filteredResults);
  if (allFilters.stat && allFilters.stat.length > 0) {
    // Apply stat filter logic
    filteredResults = filteredResults.filter(
      (item) => allFilters.stat.includes(item.state)
    );
  }
  console.log("state filter: ",filteredResults);
  return filteredResults;
};
