// Modals.jsx
import React,{useState} from "react";
import "./Modals.css";

const Modals = ({ OpenCreate, setOpenCreate ,item }) => { /*setOpenCreate  from navbarv item from status  as a props*/
//   if (!OpenCreate) return null;
 const [Input, setInput] = useState({"name":"","age":"","address":"","mobileNumber":"","examineby":"","examinedate":"","selectedtest":"","reporteddate":""})
 const HandleInput=(event)=>{
  // console.log(Input);
  setInput({...Input,[event.target.name]:event.target.value})

 }
console.log(Input);

  return (
    <div className="modal">
      <div className="ModalCard">
        <div className="Modal-TitleBox">
          <div className="Modal-Title">{item ? "Update Patient" : "Create New"}</div>
          <div
            className="X-Button-Crox"
            onClick={() => 
              // setOpenCreate((prev) => !prev)
              setOpenCreate(false)
            }

          >
            X
          </div>
            {/* <div
  className="X-Button-Crox"
  onClick={() => {
    console.log("Close modal clicked");
    setOpenCreate((prev) => !prev);
  }}
>
  X
            </div> */}

        </div>
        <div className="ModalBody">
          <div className="Input-Row-Modal">
            <div className="input-Box">
              <div className="Input-Label" >Name</div>
              <input
                className="Input-field"
                type="text"
                name="name"
                value={Input.name} onChange={(e)=>{HandleInput(e)}}
                placeholder="Enter the Name of the Pateint"
              />
            </div>
            <div className="input-Box">
              <div className="Input-Label" >Age</div>
              <input
                className="Input-field"
                type="text"
                name="age"
                value={Input.age} onChange={(e)=>{HandleInput(e)}}
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
                name="address"
                value={Input.address} onChange={(e)=>{HandleInput(e)}}
                placeholder="Enter the Address of the Pateint"
              />
            </div>
            <div className="input-Box">
              <div className="Input-Label" >Mobile Number</div>
              <input
                className="Input-field"
                type="text"
                name="phone"
                value={Input.mobileNumber} onChange={(e)=>{HandleInput(e)}}
                placeholder="Enter the Mobile Number"
              />
            </div>
          </div>

          <div className="Input-Row-Modal">
            <div className="input-Box">
              <div className="Input-Label" >Examine by</div>
              <input
                className="Input-field"
                type="text"
                name="examineby"  value={Input.examineby} onChange={(e)=>{HandleInput(e)}}
                placeholder="Enter the Name of the Docter"
                
              />
            </div>
            <div className="input-Box">
              <div className="Input-Label" >Examine Date</div>
              <input
                className="Input-field"
                type="date"
                name="examinedate"value={Input.examinedate} onChange={(e)=>{HandleInput(e)}}                
                placeholder="Select the Date of Examine"
              />
            </div>
          </div>

          <div className="Input-Row-Modal">
            <div className="input-Box">
              <div className="Input-Label">Selected test</div>
              <select className="Input-field" name="selectedtest" onChange={(e)=>{HandleInput(e)}}>
                <option>Test1</option>
                <option>Test2</option>
                <option>Test3</option>
                <option>Test4</option>
              </select>
            </div>
            <div className="input-Box">
              <div className="Input-Label">Reported Date</div>
              <input
                className="Input-field"
                type="date"
                 name="reporteddate" value={Input.reporteddate} onChange={(e)=>{HandleInput(e)}}
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
