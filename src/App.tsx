import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/* Errors */
import PageNotFound from './pages/errors/404';

/* Page */
import HomePage from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 30 }}>
        <Routes>
          {/* 404 rounte */}
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
