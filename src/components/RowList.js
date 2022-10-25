import { useState } from "react";
import Modal from "./Modal";
const URL = "https://62ac58f09fa81d00a7afae76.mockapi.io/movie";

export default function RowList({
  id,
  movieName,
  director,
  movieGenre,
  yearConstruction,
  description,
  fetchGet,
}) {
  const [showModal, setShowModal] = useState(false);

  // handleDelete function

  const handleDelete = (id) => {
    fetch(`${URL}/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((response) => {
        console.warn(response);
        fetchGet();
      });
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{movieName}</td>
      <td>{director}</td>
      <td>{movieGenre}</td>
      <td>{yearConstruction}</td>
      <td>
        <button id="btn-description" onClick={() => setShowModal(true)}>
          Description
        </button>

        <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
          {description}
        </Modal>
      </td>
      <td>
        <button id="btn-delete" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
