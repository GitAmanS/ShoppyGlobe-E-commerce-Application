import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const NotFound = lazy(() => import('./components/NotFound'));

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={
    <div className="fixed items-center h-screen w-screen justify-center text-2xl font-semibold">
    Loading...
  </div>
      }>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
