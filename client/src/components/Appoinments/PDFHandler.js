import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import './PDFHandler.css';

const PDFHandler = () => {
  const [allPrescriptions, setAllPrescriptions] = useState([]);
  const userData = JSON.parse(sessionStorage.getItem("userdata"));
  const patientId = userData ? userData._id : null;

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        if (patientId) {
          const response = await fetch(
            `http://localhost:8000/api/pdfdetails/getPDFsByPatientId/${patientId}`
          );
          const data = await response.json();
          if (data && data.data) {
            setAllPrescriptions(data.data);
          }
        }
      } catch (error) {
        console.error("Error fetching prescriptions:", error);
      }
    };

    fetchPrescriptions();
  }, [patientId]);

  const handleOpenPDFModal = async (prescriptionId) => {
    if (prescriptionId) {
      axios
        .get(`http://localhost:8000/api/pdfdetails/getById/${prescriptionId}`, {
          responseType: "arraybuffer",
        })
        .then((response) => {
          const blob = new Blob([response.data], { type: "application/pdf" });
          const link = window.URL.createObjectURL(blob);
          window.open(link, "", "height=650,width=840");
        })
        .catch((error) => console.error("Error fetching PDF:", error));
    }
  };

  return (
    <div className="table-container">
      
      {allPrescriptions.length > 0 ? (
        
        <table className="table">
          <thead>
            <tr>
              <th>Hospital Name</th>
              <th>Doctor Name</th>
              <th>Date</th>
              <th>PDF</th>
            </tr>
          </thead>
          <tbody>
            {allPrescriptions.map((prescription) => (
              <tr key={prescription._id}>
                <td>{prescription.hospitalName}</td>
                <td>{prescription.doctorName}</td>
                <td>{new Date(prescription.date).toLocaleDateString()}</td>
                <td>
                  <Button onClick={() => handleOpenPDFModal(prescription._id)}>
                    View Prescription
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data">No prescriptions found.</p>
      )}
    </div>
  );
};

export default PDFHandler;
