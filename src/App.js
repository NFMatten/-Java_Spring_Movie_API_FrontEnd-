import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./Components/NavBar/NavBar";
import DisplayMovies from "./Components/DisplayMovies/DisplayMovies";
import { Box } from "@mui/material";
import CreateMovieForm from "./Components/CreateMovieForm/CreateMovieForm";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get("http://localhost:8080/movies");
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createNewMovie = async (newMovie) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/addMovie",
        newMovie
      );
      if (response.status === 201) await fetchMovies();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar />
      <Box sx={{ my: 5 }}>
        <Box sx={{ my: 2 }}>
          <CreateMovieForm createNewMovie={createNewMovie} />
        </Box>
        <DisplayMovies movies={movies} />
      </Box>
    </div>
  );
}

export default App;
