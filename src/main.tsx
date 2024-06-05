import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shelf from "./pages/Shelf.tsx";
import Books from "./pages/Books";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Books />} />
          <Route path="/shelf" element={<Shelf />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
