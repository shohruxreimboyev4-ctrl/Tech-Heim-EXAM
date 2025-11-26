// App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import MainLayout from "./components/layout";

// Detail pages
import CategoryHub from "./detailpage/CategoryHub";
import ItemPreview from "./detailpage/ItemPreview";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home & static pages */}
        <Route index element={<HomePage />} />
        <Route path="products" element={<Products />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<ContactUs />} />

        {/* Universal category route */}
        <Route path="category/:category" element={<CategoryHub />} />

        {/* Universal product detail route */}
        <Route path="category/:category/:id" element={<ItemPreview />} />
      </Route>
    </Routes>
  );
};

export default App;
