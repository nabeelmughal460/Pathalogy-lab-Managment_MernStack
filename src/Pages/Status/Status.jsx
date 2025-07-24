import React, { useState, useEffect } from "react";
import "./status.css";
import UpdateIcon from "@mui/icons-material/Update";
import ArticleIcon from "@mui/icons-material/Article";
import DeleteIcon from "@mui/icons-material/Delete";
import Modals from '../../Common Components/Modals/Modals'
const Status = () => {
  const PendingData = [
    {
      id: "1",
      name: "Danish",
      drName: "Sanjeev Kr Singh",
      presDate: "08-04-2024",
    },
    {
      id: "2",
      name: "Shubham Kumar",
      drName: "Rajeev Singh",
      presDate: "03-04-2024",
    },
  ];

  const completedData = [
    {
      id: "1",
      name: "Rahul",
      drName: "Sanjeev Kr Singh",
      presDate: "08-04-2024",
    },
    {
      id: "2",
      name: "Harsh Kumar",
      drName: "Rajeev Singh",
      presDate: "03-04-2024",
    },
  ];
  const [activebar, setactivebar] = useState("Pending");
  const [data, setdata] = useState([]);
  const [ClickUpdate, setClickUpdate] = useState(false)
  const [clicked_patient, setclicked_patient] = useState(null)
  useEffect(() => {
    if (activebar === "Pending") {
      setdata(PendingData);
    } else {
      setdata(completedData);
    }
  }, [activebar]);
  const UpdateIconClick=(item)=>{

    setClickUpdate(true)
    setclicked_patient(item)
  }

  return (
    <div className="Status-Page">
      <div className="statusPageWorksDiv">
        <div className="status-bar">
          <div
            className={`status-Title ${
              activebar === "Pending" ? "activeBarStatus" : null
            }`}
            onClick={() => {
              setactivebar("Pending");
            }}
          >
            Pending
          </div>
          <div
            className={`status-Title ${
              activebar === "Completed" ? "activeBarStatus" : null
            }`}
            onClick={() => {
              setactivebar("Completed");
            }}
          >
            Completed
          </div>
        </div>
        <div className="status-List">
          {data &&
            data.map((item, index) => {
              return (
                <div className="status-row-List">
                  <div className="status-Name">{item.name}</div>
                  <div className="status-Docter-detail">
                    <div className="status-docter-name">{item.drName}</div>
                    <div className="status-docter-name">{item.presDate}</div>
                  </div>
                  <div className="status-btns">
                    <div className="Icons" onClick={()=>{UpdateIconClick(item)}}>
                      <UpdateIcon />
                    </div>
                    <div className="Icons" style={{ backgroundColor: "red" }}>
                      <DeleteIcon />
                    </div>
                    <div
                      className="Icons"
                      style={{ backgroundColor: "yellow" }}
                    >
                      <ArticleIcon />
                    </div>
                  </div>
                </div>
              );
            })}
                   
        </div>
      </div>
       {/* // conditional Rendaring  here for show model on Update */}
                    {
                        ClickUpdate &&  <Modals item={clicked_patient}  setOpenCreate={setClickUpdate}/>

                    }
    </div>
  );
};

export default Status;
