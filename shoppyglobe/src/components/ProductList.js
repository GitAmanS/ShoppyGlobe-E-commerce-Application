import React from 'react';
import ProductItem from './ProductItem';
import useFetch from '../hooks/useFetch';

const ProductList = () => {
  const { data: products, error } = useFetch('https://dummyjson.com/products');

  if (error) return <div className="text-red-500">Error fetching products: {error.message}</div>;
  if (!products) return <div>Loading...</div>;

  return (
    <div className="container mx-auto pt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:px-32 py-8 p-4">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
