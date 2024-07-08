// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Reminders from "./pages/Reminders";
import NotesPage from "./pages/Notes/NotesPage";
import Trash from "./pages/Trash";
import EditLabels from "./pages/EditLabels";
import SideBar from "./components/Sidebar/Sidebar";
import Archieve from "./pages/Archieve";

function App() {
  return (
    <Router>
      <div className="app-container">
        <SideBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<NotesPage />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/edit-labels" element={<EditLabels />} />
            <Route path="/archieve" element={<Archieve />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
