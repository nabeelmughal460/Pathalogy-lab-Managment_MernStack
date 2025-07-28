import React,{useState} from "react";
import "./ReportPage.css";
import { Link,useParams} from "react-router-dom";


const Report = () => {
  const {id}  =useParams() // const yh name woi rehna chaiya jo hum na dala hay App.js ka route ma like "id" ager yaha name hota id ki jaga to hum waha pa name likhty
 console.log(id,"ello thus id");
 
  const [Inputfeild, setInputfeild] = useState([
    { "id":0,"name": "", "range": "", "unit": "", "result": "" },
  ]);

  const OnChangeInput=(event,index)=>{
    const UpdatedRow= Inputfeild.map(row=>{
        if(row.id==index)
        {
            return{...row,[event.target.name]:event.target.value}
             // if index equal to row then it will call function Inputfeild.map and it check row.id== to index or not if it equal to index row initial state ma add krdy name ma or plus event.target.value ma
        }
                // return row  if not it simple return the row

        return row;
    })
                setInputfeild(UpdatedRow);
  }
  console.log(Inputfeild);
  
  
  const AddinputRows=()=>{
    const new_Row ={
        "id":Inputfeild.length+1,"name": "", "range": "", "unit": "", "result": "" 
    }
    setInputfeild([...Inputfeild,new_Row])
  }

  const RemoveInputRows=()=>{
    if(Inputfeild.length>1)
    {
        setInputfeild(Inputfeild.slice(0,-1))
    }
    // const UpdatedRow=Inputfeild.filter(row=>row.id!=Inputfeild.length-1)
  }


  const handleReportFunction=()=>{

  }
  return (
    <div className="report-page">
      <div className="reportDiv">
        <div className="report-infos">
          <div className="report-info">Name : Talha</div>
          <div className="report-info">Examined By : Mansoor Ahmed</div>
        </div>

        <div className="report-inputBlock">
          <div className="report-tests">
            <div className="nameOfTest">Urine Glucose Test</div>
          </div>

          <div className="inputRows">
            {Inputfeild.map((item, index) => {
              return (
                <div className="inputRow">
                  <div className="input-row-group">
                    <div className="input-test-name">Test name</div>
                    <input type="text" className="input-feild-tests" value={item.name} name="name" onChange={(e)=>{OnChangeInput(e,item.id)}}/> {/*value jo index arha uska object lena ha*/}
                  </div>

                  <div className="input-row-group">
                    <div className="input-test-name">Normal Range</div>
                    <input type="text" className="input-feild-tests" value={item.range} name="range" onChange={(e)=>{OnChangeInput(e,item.id)}}/>
                  </div>

                  <div className="input-row-group">
                    <div className="input-test-name">Unit</div>
                    <input type="text" className="input-feild-tests" value={item.unit} name="unit" onChange={(e)=>{OnChangeInput(e,item.id)}}/>
                  </div>

                  <div className="input-row-group">
                    <div className="input-test-name">Result</div>
                    <input type="text" className="input-feild-tests" value={item.result} name="result" onChange={(e)=>{ OnChangeInput(e,item.id)}}/>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="btn-grp-add-rem">
            <div className="add-btn-row"onClick={AddinputRows}>Add</div>
                {
                    Inputfeild.length>1 ? <div className="add-btn-row" onClick={RemoveInputRows}>Remove</div>  :null

                }
            <Link className="add-btn-row" to={`/prescription/:${id}`} onClick={handleReportFunction}>Report</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
