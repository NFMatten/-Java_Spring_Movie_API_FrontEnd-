import { TextField } from "@mui/material";
import React, { useState } from "react";
import useCustomForm from "../../hooks/useCustomForm";

const CreateMovieForm = (props) => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");

  return (
    <div>
      <form className="form" onSubmit={handleSumbit}>
        <TextField
          label="Movie Title"
          placeholder="Enter Movie Title"
          type={text}
          name="name"
        />
      </form>
    </div>
  );
};

export default CreateMovieForm;
