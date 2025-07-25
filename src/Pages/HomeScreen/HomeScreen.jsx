import React, { useState, useEffect } from "react";
import "./Homescreen.css";
import labscientist from "../../assets/labscientist.JPEG";
import hemolobinimage from "../../assets/hemoglobin.jpg";
import data from "./Data.json";
import Footer from "../../Common Components/Footer/Footer";
const HomeScreen = () => {
  // console.log(data);
  const [listoflist, setlistoflist] = useState([]);
  const [activeIndexNAmeList, setactiveIndexNAmeList] = useState(0);
  const [selecteDetail_Test, setselecteDetail_Test] = useState(null);
  console.log(listoflist);

  useEffect(() => {
    // console.log(data.data);
    setselecteDetail_Test(data.data[0]);
    setlistoflist(data.data);
  }, []);
  console.log(selecteDetail_Test);

  const handleclick_activeindex = (index) => {
    setactiveIndexNAmeList(index);
    setselecteDetail_Test(data.data[index]);
  };

  //   console.log(activeIndexNAmeList);

  return (
    <div className="homescreen">
      <div className="introduction-HomeScreen">
        <div className="imgHomeScreen">
          <div className="imageDIv">
            <img src={labscientist} alt="labscientist" className="lablogo" />
          </div>
          <div className="intropart">
            <div className="title">MediTrack Technologies</div>
            <div className="titlemajor">MediTrack Lab managment System</div>

            <div className="Description1">
              <p>
                This is a web application that enables the management of
                laboratory results and patient information. The foundation for
                successful modern laboratories is a comprehensive lab operations
                management plan. This enables building and effectively executing
                an operating philosophy, leading to consistently meeting your
                scientific and business goals. Finding the partner who best
                helps your organization develop and execute this plan-from
                current operations to future strategies-will enable you to
                achieve this success. .
              </p>
            </div>
            <div className="Description2">
              <p>
                Our lab management system is designed to help you streamline
                your lab operations, improve efficiency, and enhance
                productivity Our asset management programs bring over 40 years
                of experience in day-to-day lab operations. We can guide you on
                the journey to advance lab performance and elevate scientific
                productivity. Using a proven set of methodologies, products, and
                services with a focus on continuous innovation, together we can
                simplify, optimize, and transform your lab.
              </p>
            </div>
            <div className="buttonsDIV">
              <button className="buttonbtn">Create New</button>
              <button className="buttonbtn">Contact</button>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="testscreens">
        <div className="left-Part-Test">
          <div className="totalTest">4 Test Available</div>
          <div className="Test-Name-List">
            {listoflist?.map((item, index) => {
              return (
                <div
                  className={`AllTestname ${
                    activeIndexNAmeList === index ? "activeIndexNAmeList" : null
                  }`}
                  onClick={() => handleclick_activeindex(index)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>

        <div className="right-Part-Test">
          <div className="TestHeader">{selecteDetail_Test?.name}</div>
          <div className="bottompart-TestHeader">
            <div className="test-header-Details">
              {selecteDetail_Test?.description}
            </div>

            <div className="test-bottom-section">
              <div className="test-requirments">
                {selecteDetail_Test?.requirements.map((item, index) => {
                  return (
                    <div className="detailblock">
                      {item.key} :{" "}
                      <span className="spancolorchange">{item.value}</span>
                    </div>
                  );
                })}
              </div>
              <div className="test-images">
                <img
                  src={selecteDetail_Test?.imgLink}
                  alt="image"
                  className="Test_IMG"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact us Div */}
      <div className="Contact-us-screen">
        <div className="Contactus-Title" id="contactus">
          Contact us
        </div>
        <div className="Contact-Form">
          <div className="input-feilds">
            <input type="text" placeholder="Enter Your Name"  className="InputfeildBox"/>
            <input type="email" placeholder="Enter Your Email" className="InputfeildBox"/>
            <input type="text" placeholder="Enter Your PhoneNumber"className="InputfeildBox" />
            <textarea type='textbox' placeholder="Type your message here...." rows={10} className="InputTextAreaBox"></textarea>
          </div>
        </div>
        <div className="contact-us-btn">
            <button className="ContactUsBtn">Send</button>
        </div>
      </div>
     <Footer/>
    </div>

  );
};

export default HomeScreen;
