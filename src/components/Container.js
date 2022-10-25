import AddMovie from "./AddMovie";
import Table from "./Table";
import { useState, useEffect } from "react";
const URL = "https://62ac58f09fa81d00a7afae76.mockapi.io";

function Container() {
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState({
    movieName: "",
    errorMovieName: "",
    director: "",
    errorDirector: "",
    movieGenre: "",
    errorMovieGenre: "",
    yearConstruction: "",
    errorYearConstruction: "",
    description: "",
    errorDescription: "",
  });

  const fetchGet = () => {
    fetch(`${URL}/movie`)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  };
  useEffect(() => {
    fetchGet();
  }, []);
  return (
    <div>
      <AddMovie
        // movie={movies}
        {...state}
        setState={setState}
        fetchGet={fetchGet}
      />
      <Table movies={movies} setMovies={setMovies} fetchGet={fetchGet} />
    </div>
  );
}
export default Container;
