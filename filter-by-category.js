function filterByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  
  // Example usage:
  const products = [
    { id: 1, name: 'Product A', category: 'Electronics' },
    { id: 2, name: 'Product B', category: 'Clothing' },
    { id: 3, name: 'Product C', category: 'Electronics' },
    { id: 4, name: 'Product D', category: 'Books' },
  ];
  
  const filterProductsByCategory = filterByCategory(products);
  const electronicsProducts = filterProductsByCategory('Electronics');
  console.log(electronicsProducts);
  