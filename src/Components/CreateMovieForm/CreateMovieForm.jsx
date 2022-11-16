import { Container, Stack, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const CreateMovieForm = (props) => {
  const { showForm } = props;
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newMovie = {
      name: name,
      genre: genre,
      director: director,
      imgUrl: imgUrl,
    };
    props.createNewMovie(newMovie);
    props.setShowForm(!showForm);
    window.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Container
          maxWidth="xs"
          sx={{ backgroundColor: "white", py: 3, borderRadius: 2 }}
        >
          <Stack spacing={2}>
            <h2>Add New Movie</h2>
            <TextField
              label="Enter Movie Title"
              placeholder="Movie Title"
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              label="Enter Movie Genre"
              placeholder="Movie Genre"
              type="text"
              name="genre"
              value={genre}
              onChange={(event) => setGenre(event.target.value)}
            />
            <TextField
              label="Enter Movie Director"
              placeholder="Movie Director"
              type="text"
              name="director"
              value={director}
              onChange={(event) => setDirector(event.target.value)}
            />
            <TextField
              label="Enter Movie Image URL"
              placeholder="Movie Image URL"
              type="text"
              name="imgUrl"
              value={imgUrl}
              onChange={(event) => setImgUrl(event.target.value)}
            />
            <Button variant="contained" type="submit">
              Add New Movie
            </Button>
          </Stack>
        </Container>
      </form>
    </div>
  );
};

export default CreateMovieForm;
