import "../App.css";
import RowList from "./RowList";

export const Table = (props) => {
  const { fetchGet, movies, setMovies } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Row</th>
          <th scope="col">MovieName</th>
          <th scope="col">Director</th>
          <th scope="col">MovieGenre</th>
          <th scope="col">YearConstruction</th>
          <th scope="col">Description</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {props?.movies?.map((item, index) => {
          return (
            <RowList
              key={item.id}
              {...item}
              movies={movies}
              setMovies={setMovies}
              fetchGet={fetchGet}
            >
              {index}
            </RowList>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
