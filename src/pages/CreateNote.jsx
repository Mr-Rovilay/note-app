/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import UseCreateDate from "../components/UseCreateDate";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = UseCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      const note = {
        id: uuid(),
        title,
        details,
        date,
      };
      setNotes((prevNotes) => [note, ...prevNotes]);
      navigate("/");
    }
  };
  return (
    <section>
      <header className="create-note__header">
        <Link to={"/"} className="btn">
          <i className="ri-arrow-left-s-line"></i>
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form action="" className="create-note__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="28"
          placeholder="Note details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
