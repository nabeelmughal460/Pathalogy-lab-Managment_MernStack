import React, { useState } from "react";
import "./Prescription.css";
import logo from "../../../assets/logo.jpg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Prescription = () => {
    const DownoadPDF_Function=()=>{
        const input=document.getElementById("pdfDownload")
        html2canvas(input).then((canvas)=>{
        const ImgData=canvas.toDataURL('image/png')
    const PDF = new jsPDF("p", "mm", "a4");
        const ImgWidth=210;
       /* const PageHeight=ImgData.height;
        const ImgHeight=canvas.height;
        const ImgWidthMargin=20;
        const PDFWidth=PDF.internal.pageSize.getWidth();
        const PDFHeight=PDF.internal.pageSize.getHeight();
        let top=0;
        let left=0;
        PDF.addImage(ImgData, 'PNG', left, top, ImgWidth, ImgHeight)
        PDF.save('Prescription.pdf')
        })*/
    //    const ImgHeight=((canvas.height *ImgWidth)/ImgWidth)
       const ImgHeight = (canvas.height * ImgWidth) / canvas.width;

       PDF.addImage(ImgData, 'PNG' ,0,0,ImgWidth,ImgHeight)
       PDF.save(`name.pdf`)
       // const PDFWidth=210;
       // const PDFHeight=290;
       // PDF.addImage(ImgData, 'PNG', 15, 40, ImgWidth,
       //     ImgHeight)
        })
        // navigate('/')
    }


//  chat gpt code
//     const DownoadPDF_Function = () => {
//   const input = document.getElementById("pdfDownload");
//   html2canvas(input, { scale: 2 }).then((canvas) => {
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF("p", "mm", "a4");

//     const imgWidth = 210; // A4 width in mm
//     const pageHeight = 297; // A4 height
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;

//     let position = 0;

//     // Agar image choti ho to normal
//     if (imgHeight <= pageHeight) {
//       pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//     } else {
//       // Agar content lamba ho to page break loop
//       while (position < imgHeight) {
//         pdf.addImage(imgData, "PNG", 0, -position, imgWidth, imgHeight);
//         position += pageHeight;
//         if (position < imgHeight) {
//           pdf.addPage();
//         }
//       }
//     }

//     pdf.save("prescription.pdf");
//   });
// };

  return (
    <div className="prescription">
      <div className="presdownload" id="pdfDownload">
        <div className="header-logos">
          <img src={logo} className="presc-logo" />
          <div className="pathologyDesc">
            <div className="namePathology">Zoho Pathology</div>
            <div className="addressDetails">Near Infosys, Hinjewadi Phase 2</div>
            <div className="mobNo">+91-7228796580</div>
          </div>
        </div>
        <div className="patien-info">
          <div className="patient-info-row">
            <div className="patient-info-detail">
              {/* info detail pa aye ga patient-info-detail */}
              {/* ae pa aye ga  patient-info-detail-age */}
              <div className="patient-name-attr">Name :</div>
              <div className="patient-name-value">{"Patient Name"}</div>
            </div>
            {/* patient-info-detail-age Age ki jaga pa */}
            <div className="patient-info-detail-age">
              <div className="patient-name-attr">Age :</div>
              <div className="patient-name-value">{"Patient Age"}</div>
            </div>

            <div className="patient-info-detail">
              <div className="patient-name-attr">Address :</div>
              <div className="patient-name-value">{"Patient Address"}</div>
            </div>
          </div>

          <div className="patient-info-row">
            <div className="patient-info-detail">
              <div className="patient-name-attr">Mobile Number :</div>
              <div className="patient-name-value">{"Patient Mobile No"}</div>
            </div>
            <div className="patient-info-detail-age">
              <div className="patient-name-attr">Address :</div>
              <div className="patient-name-value">{"Patient Address"}</div>
            </div>
            <div className="patient-info-detail">
              <div className="patient-name-attr">Examined Date :</div>
              <div className="patient-name-value">{"Patient Examined Date"}</div>
            </div>
          </div>
        </div>
        {/* /// */}
        <div className="result-section">
          <div className="particular-test">
            <table className="table">
              <thead className="thead">
                <tr>
                  <th></th>
                  <th>Normal Range</th>
                  <th>Unit</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr className="finalPresTableRow">
                  <td>{"test 1"}</td>
                  <td>{"89-100"}</td>
                  <td>{"ML"}</td>
                  <td>{"95"}</td>
                </tr>
              </tbody>
            </table>
            {/* </div> */}

            <div className="footer-prescription">
              <div className="examinedBy">
                <div className="signature">
                  <div>Examined By</div>
                  <div>Dr Bashir Ahmad</div>
                </div>
                <div className="signature">
                  <div>Report Date</div>
                  <div>{"Report Date"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
       <div className="pdf-down-btn" onClick={DownoadPDF_Function}>  <button>Download PDF</button>
</div>
    </div>
  );
};

export default Prescription;
