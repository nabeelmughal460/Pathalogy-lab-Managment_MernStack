// Modals.jsx
import React from "react";
import "./Modals.css";

const Modals = ({ OpenCreate, setOpenCreate }) => {
//   if (!OpenCreate) return null;

  return (
    <div className="modal">
      <div className="ModalCard">
        <div className="Modal-TitleBox">
          <div className="Modal-Title">Create New</div>
          <div
            className="X-Button-Crox"
            onClick={() => setOpenCreate((prev) => !prev)}
          >
            X
          </div>
        </div>
        <div className="ModalBody">
          <div className="Input-Row-Modal">
            <div className="input-Box">
              <div className="Input-Label">Name</div>
              <input
                className="Input-field"
                type="text"
                name="Name"
                placeholder="Enter the Name of the Pateint"
              />
            </div>
            <div className="input-Box">
              <div className="Input-Label">Age</div>
              <input
                className="Input-field"
                type="text"
                name="Name"
                placeholder="Enter thd age"
              />
            </div>
          </div>

          <div className="Input-Row-Modal">
            <div className="input-Box">
              <div className="Input-Label">Address</div>
              <input
                className="Input-field"
                type="text"
                name="Address"
                placeholder="Enter the Address of the Pateint"
              />
            </div>
            <div className="input-Box">
              <div className="Input-Label">Mpbile Number</div>
              <input
                className="Input-field"
                type="text"
                name="phone"
                placeholder="Enter the Mobile Number"
              />
            </div>
          </div>

          <div className="Input-Row-Modal">
            <div className="input-Box">
              <div className="Input-Label">Examine by</div>
              <input
                className="Input-field"
                type="text"
                name="Name"
                placeholder="Enter the Name of the Docter"
              />
            </div>
            <div className="input-Box">
              <div className="Input-Label">Age</div>
              <input
                className="Input-field"
                type="date"
                name="examine date"
                placeholder="Select the Date of Examine"
              />
            </div>
          </div>

          <div className="Input-Row-Modal">
            <div className="input-Box">
              <div className="Input-Label">Selected test</div>
              <select className="Input-field">
                <option>Test1</option>
                <option>Test1</option>
                <option>Test1</option>
                <option>Test1</option>
              </select>
            </div>
            <div className="input-Box">
              <div className="Input-Label">Reported Date</div>
              <input
                className="Input-field"
                type="date"
                name="Name"
                placeholder="Reported Date"
              />
            </div>
          </div>

          <div className="modal-btn">
            <button className="modal-Btn-style">Submit</button>
            <button className="modal-Btn-style">Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
