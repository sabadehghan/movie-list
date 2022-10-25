import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ showModal, closeModal, children }) {
  return ReactDOM.createPortal(
    <>
      {showModal ? (
        <div className="modalContainer">
          <div className="header">
            <h3 className="h3">Description</h3>
            <div className="div">
              <button className="button" onClick={() => closeModal()}>
                <i class="bi bi-x-square"></i>
              </button>
            </div>
          </div>
          <main className="description">{children}</main>
        </div>
      ) : null}
    </>,

    document.getElementById("portal")
  );
}

export default Modal;
