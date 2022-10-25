const URL = "https://62ac58f09fa81d00a7afae76.mockapi.io";

export default function AddMovie(props) {
  const {
    movieName,
    errorMovieName,
    director,
    errorDirector,
    movieGenre,
    errorMovieGenre,
    yearConstruction,
    errorYearConstruction,
    description,
    errorDescription,
    setState,
    fetchGet,
  } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
    validate();
  };
  // clear inputs when click cancel button
  const clearForm = () => {
    document.getElementById("form-movie").reset();
    setState({
      movieName: "",
      director: "",
      movieGenre: "",
      yearConstruction: "",
      description: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    clearForm();
    const body = {
      movieName,
      director,
      movieGenre,
      yearConstruction,
      description,
    };

    await fetch(`${URL}/movie`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => fetchGet());
  };

  //  final validate
  const validate = () => {
    validateMovieName();
    validateDirector();
    validateMovieGenre();
    validateYearConstruction();
    validateDescription();
  };

  //   validation MovieName
  const validateMovieName = () => {
    if (movieName === "") {
      setState((prev) => ({
        ...prev,
        errorMovieName: "MovieName is Required",
      }));
    } else if (new RegExp("[0-9]").test(movieName)) {
      setState((prev) => ({
        ...prev,
        errorMovieName: "Invalid MovieName",
      }));
    } else if (movieName.length < 5) {
      setState((prev) => ({
        ...prev,
        errorMovieName: "The MovieName must contain at least five characters",
      }));
    } else {
      setState((prev) => ({
        ...prev,
        errorMovieName: "",
      }));
    }
  };

  //   validation director

  const validateDirector = () => {
    if (director === "") {
      setState((prev) => ({
        ...prev,
        errorDirector: "Director is Required",
      }));
    } else if (new RegExp("[0-9]").test(director)) {
      setState((prev) => ({
        ...prev,
        errorDirector: "Invalid Director",
      }));
    } else if (director.length < 5) {
      setState((prev) => ({
        ...prev,
        errorDirector: "The Director must contain at least five characters",
      }));
    } else {
      setState((prev) => ({
        ...prev,
        errorDirector: "",
      }));
    }
  };

  //   validation MovieGenre

  const validateMovieGenre = () => {
    if (movieGenre === "") {
      setState((prev) => ({
        ...prev,
        errorMovieGenre: "MovieGenre is Required",
      }));
    } else {
      setState((prev) => ({
        ...prev,
        errorMovieGenre: "",
      }));
    }
  };

  //   validate YearOfConstruction

  const validateYearConstruction = () => {
    if (yearConstruction === "") {
      setState((prev) => ({
        ...prev,
        errorYearConstruction: "YearConstruction is Required",
      }));
    } else if (yearConstruction.length < 2) {
      setState((prev) => ({
        ...prev,
        errorYearConstruction: "The YearConstruction is too short!",
      }));
    } else if (yearConstruction.length > 4) {
      setState((prev) => ({
        ...prev,
        errorYearConstruction: "The YearConstruction is too big!",
      }));
    } else {
      setState((prev) => ({
        ...prev,
        errorYearConstruction: "",
      }));
    }
  };

  const validateDescription = () => {
    if (description === "") {
      setState((prev) => ({
        ...prev,
        errorDescription: "Description is Required",
      }));
    } else {
      setState((prev) => ({
        ...prev,
        errorDescription: "",
      }));
    }
  };
  return (
    <div>
      <form id="form-movie" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Movie Name</label>
          <br />
          <input
            type="text"
            placeholder="Please Enter Movie Name"
            onChange={handleChange}
            name="movieName"
            value={movieName}
            id="movieName"
          />
          <br />
          <div className="error-movie">{errorMovieName}</div>

          <label>Director</label>
          <br />
          <input
            type="text"
            placeholder="Please Enter Director Name"
            onChange={handleChange}
            name="director"
            value={director}
          />
          <br />
          <div className="error-movie">{errorDirector}</div>
        </div>
        <br />
        <div>
          <label>Movie Genre</label>
          <br />

          <select onChange={handleChange} name="movieGenre" id="movieGenre">
            <option value={movieGenre}>Movie Genre</option>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Action</option>
            <option>Horror</option>
            <option>Adventure</option>
          </select>
          <br />
          <div className="error-movie">{errorMovieGenre}</div>

          <label>Year Of Construction</label>
          <br />

          <input
            type="number"
            placeholder="Please Enter Year Of Construction"
            onChange={handleChange}
            name="yearConstruction"
            value={yearConstruction}
          />
          <br />
          <div className="error-movie">{errorYearConstruction}</div>
        </div>
        <br />

        <div>
          <label for="description">Description</label>
          <br />

          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            value={description}
            rows="6"
            cols="50"
            placeholder="Description About Movie"
          ></textarea>
          <div className="error-movie">{errorDescription}</div>

          <br />

          <div>
            <input type="submit" value="Save" id="save" />
            <input
              type="button"
              value="Cancel"
              id="cancel"
              onClick={clearForm}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
