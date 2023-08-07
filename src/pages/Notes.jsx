/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";
import { useEffect, useState } from "react";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(handleSearch, [text]);
  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            autoFocus
            placeholder="Write Your Note Here"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
          />
        )}
        <button
          className="btn"
          onClick={() => setShowSearch((prevState) => !prevState)}
        >
          {showSearch ? (
            <i className="ri-close-line"></i>
          ) : (
            <i className="ri-search-line"></i>
          )}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.length === 0 && (
          <p className="empty__notes">Note not found</p>
        )}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link to={"/create-note"} className=" btn add__btn">
        <i className="ri-add-line"></i>
      </Link>
    </section>
  );
};

export default Notes;
