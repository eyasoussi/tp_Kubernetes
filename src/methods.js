
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