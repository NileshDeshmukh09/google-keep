import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Notes from "./pages/Notes";
import Reminders from "./pages/Reminders";
import EditLabels from "./pages/EditLabels";
import Trash from "./pages/Trash";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/edit-labels" element={<EditLabels />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
