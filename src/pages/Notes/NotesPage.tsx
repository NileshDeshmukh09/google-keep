import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import NotesInput from "../../components/NotesInput/NotesInput";
import Notes from "../../components/Notes/Notes";
import "./Notes.css";

const NotesPage = () => {
  const notes = useSelector((state: RootState) => state.notes);
  return (
    <div className="left--side">
      <NotesInput />
      <div className="Notes--main--container">
      { notes.notes
            .filter(({ isPinned }) => isPinned).length > 0  && <h3 className="unpinned--header">PINNED</h3>}
        <div className="pinned--container">
          {notes.notes
            .filter(({ isPinned }) => isPinned)
            .map((note, index) => (
              <div key={index}>
                <Notes data={note} />
              </div>
            ))}
        </div>
        { notes.notes.length > 0  && <h3 className="unpinned--header">OTHERS</h3>}
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
  );
};

export default NotesPage;
