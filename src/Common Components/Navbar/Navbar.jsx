// import React ,{useState} 'react'
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { useState,useEffect,useRef } from "react";
import Modals from "../Modals/Modals";
import { Link } from "react-router-dom";
const Navbar = () => {
  const ref =useRef();
  const [OpenCreate, setOpenCreate] = useState(false);
  const [ClickAddTest, setClickAddTest] = useState(false);
//   useEffect(() => {
//       const Check_If_Clicked_Outside=(e)=>{
//         if(ClickAddTest && ref.current && !ref.current.contains(e.target))
//         {
// setClickAddTest(false)
//         }
//       }
//       document.addEventListener("mousedown",Check_If_Clicked_Outside);
//       return()=>{
//         document.removeEventListener("mousedown",Check_If_Clicked_Outside);
//       }
//     }, [ClickAddTest])
useEffect(() => {
  const Check_If_Clicked_Outside = (e) => {
    if (ClickAddTest && ref.current && !ref.current.contains(e.target)) {
      setClickAddTest(false);
    }
  };

  document.addEventListener("mousedown", Check_If_Clicked_Outside);

  return () => {
    document.removeEventListener("mousedown", Check_If_Clicked_Outside);
  };
}, [ClickAddTest]);

  
  return (
    <div className="navbar">
      <div className="leftside">
        <img src={logo} alt="logo" className="Img-logo" />
      </div>
      <div className="rightside">
        <div
          className="Links-rightside"
          onClick={() => {
            setOpenCreate((prev) => !prev);
          }}
        >
          Create New
        </div>
        <Link className="Links-rightside" to={"/status"}>Report</Link>
        <div className="Links-rightside">

          <div className="NavlinkAddTest" onClick={()=>{setClickAddTest(true)}}>
            Add Test
          </div>
        {
          ClickAddTest &&    <div className="Addtest-Modal" ref={ref}>
              
              <div className="InputAddtestModals">
                <div className="InputAddtestLabel">
                Name
                </div>
                <input type="text" className="InputAddtest-Inputfeild"/>
                </div>
                <div className="InputAddtestModals">
                <div className="InputAddtestLabel">
                Name
                </div>
                <input type="text" className="InputAddtest-Inputfeild"/>
                </div>
                <div className="InputAddtestModals">
                <div className="InputAddtestLabel">
                Description
                </div>
                <input type="text" className="InputAddtest-Inputfeild"/>
                </div>
                <div className="InputAddtestModals">
                <div className="InputAddtestLabel">
                Price
                </div>
                <input type="text" className="InputAddtest-Inputfeild"/>
                </div>
                <div className="InputAddtestModals">
                <div className="InputAddtestLabel">
                Image Link
                </div>
                <input type="text" className="InputAddtest-Inputfeild"/>
                </div>
                <div className="InputAddtestModals">
                <div className="InputAddtestLabel">
               Fasting
                </div>
                <input type="text" className="InputAddtest-Inputfeild"/>
                </div>
                <div className="InputAddtestModals">
                <div className="InputAddtestLabel">
                Normal Range
                </div>
                <input type="text" className="InputAddtest-Inputfeild"/>
                </div>
                <div className="InputAddtestModals">
                <div className="InputAddtestLabel">
                Abnormal Range
                </div>
                <input type="text" className="InputAddtest-Inputfeild"/>
                </div>
              <div className="Add-modal-create-btn">
                Create
              </div>
            </div>
        }
        </div>
      </div>

      {OpenCreate && 
        // <div className="modal">
        //   <div className="ModalCard">
        //     <div className="Modal-TitleBox">
        //       <div className="Modal-Title">Create New</div>
        //       <div
        //         className="X-Button-Crox"
        //         onClick={() => {
        //           setOpenCreate((prev) => !prev);
        //         }}
        //       >
        //         X
        //       </div>
        //     </div>
        //     <div className="ModalBody">
        //       <div className="Input-Row-Modal">
        //         <div className="input-Box">
        //           <div className="Input-Label">Name</div>
        //           <input
        //             className="Input-field"
        //             type="text"
        //             name="Name"
        //             placeholder="Enter the Name of the Pateint"
        //           />
        //         </div>
        //         <div className="input-Box">
        //           <div className="Input-Label">Age</div>
        //           <input
        //             className="Input-field"
        //             type="text"
        //             name="Name"
        //             placeholder="Enter thd age"
        //           />
        //         </div>
        //       </div>

        //       <div className="Input-Row-Modal">
        //         <div className="input-Box">
        //           <div className="Input-Label">Address</div>
        //           <input
        //             className="Input-field"
        //             type="text"
        //             name="Address"
        //             placeholder="Enter the Address of the Pateint"
        //           />
        //         </div>
        //         <div className="input-Box">
        //           <div className="Input-Label">Mpbile Number</div>
        //           <input
        //             className="Input-field"
        //             type="text"
        //             name="phone"
        //             placeholder="Enter the Mobile Number"
        //           />
        //         </div>
        //       </div>

        //       <div className="Input-Row-Modal">
        //         <div className="input-Box">
        //           <div className="Input-Label">Examine by</div>
        //           <input
        //             className="Input-field"
        //             type="text"
        //             name="Name"
        //             placeholder="Enter the Name of the Docter"
        //           />
        //         </div>
        //         <div className="input-Box">
        //           <div className="Input-Label">Age</div>
        //           <input
        //             className="Input-field"
        //             type="date"
        //             name="examine date"
        //             placeholder="Select the Date of Examine"
        //           />
        //         </div>
        //       </div>

        //       <div className="Input-Row-Modal">
        //         <div className="input-Box">
        //           <div className="Input-Label">Selected test</div>
        //           <select className="Input-field">
        //             <option className="">Test1</option>
        //             <option className="">Test1</option>
        //             <option className="">Test1</option>
        //             <option className="">Test1</option>
        //           </select>
        //         </div>
        //         <div className="input-Box">
        //           <div className="Input-Label">Reported Date</div>
        //           <input
        //             className="Input-field"
        //             type="date"
        //             name="Name"
        //             placeholder="Reported Date"
        //           />
        //         </div>

                
        //       </div>
              
        //           <div className="modal-btn">
        //           <button className="modal-Btn-style">Submit</button>
        //           <button className="modal-Btn-style">Clear</button>
        //         </div>
        //     </div>
        //   </div>
        // </div>
              <Modals OpenCreate={OpenCreate} setOpenCreate={setOpenCreate} />

      }
    </div>
  );
};

export default Navbar;
