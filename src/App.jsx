import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import MainLayout from "./components/layout";
import CategoryDetail from "./detailpage/CategoryDetail";
import CardDetail from "./detailpage/CardDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="category/:categoryName" element={<CategoryDetail />} />
          <Route path="category/:categoryName/:cardId" element={<CardDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
