// Modals.jsx
import React,{useState,useEffect} from "react";
import "./Modals.css";
import axios from "axios";

const Modals = ({ OpenCreate, setOpenCreate ,item }) => { /*setOpenCreate  from navbarv item from status  as a props*/
const [ListofTest, setListofTest] = useState([])
  //   if (!OpenCreate) return null;
 const [Input, setInput] = useState({"name":"","age":"","address":"","mobileNumber":"","examineby":"","examinedate":"","test":"","reporteddate":""})
 useEffect(()=>{
  HandleSelectOption()
 },[])
 const HandleInput=(event)=>{
  // console.log(Input);
  setInput({...Input,[event.target.name]:event.target.value})

 }
console.log(Input);
 const HandleCreateNew =async ()=>{
  // console.log(Input);
  await axios.post("http://localhost:8000/patient/post",Input).then(response=>{
    console.log(response);
    window.location.reload()
  }).catch(err=>{
    console.log(err);
    
  })
}
const HandleSelectOption=async()=>{
  await axios.get('http://localhost:8000/test/get').then(response=>{
      const data =response.data.data;
      setListofTest(data)
      // console.log(response);
      console.log(data);
      
  }).catch(err=>{
    console.log(err);
    
  })}


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
                type="number"
                name="mobileNumber"//change today 12/8/25
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
              <select className="Input-field" name="test" onChange={(e)=>{HandleInput(e)}}>
                {
                  ListofTest?.map((item,index)=>{
                    return(
                    <option value={`${item._id}`}>{item.name}</option>
                    )
                  })
                }
                {/* <option>Test2</option>
                <option>Test3</option>
                <option>Test4</option> */}
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
            <button className="modal-Btn-style"onClick={HandleCreateNew}>Submit</button>
            <button className="modal-Btn-style">Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
