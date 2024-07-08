import { useState, useEffect } from "react";
import "../App.css";
import NotesInput from "../components/NotesInput/NotesInput";
import SideBar from "../components/Sidebar/Sidebar";
import Notes from "../components/Notes/Notes";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
// import Hamburger from "./components/SideBar/Hamburger"

const Note: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes);
  return (
    <div style={{ backgroundColor: "lightblue", marginLeft: "10px" }}>
      <div className="left--side">
        <NotesInput />
        <div className="Notes--main--container">
          <div className="pinned--container">
            {notes.notes
              .filter(({ isPinned }) => isPinned)
              .map((note, index) => (
                <div key={index}>
                  <Notes data={note} />
                </div>
              ))}
          </div>
          <div className="unpinned--container">
            {notes.notes
              .filter(({ isPinned }) => !isPinned)
              .map((note, index) => (
                <div key={index}>
                  <Notes data={note} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
