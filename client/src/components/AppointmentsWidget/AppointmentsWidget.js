import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FaPlus } from "react-icons/fa"; // Import an icon library (e.g., react-icons)
import "./AppointmentsWidget.css";

const AppointmentsWidget = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="appointments-widget-container">
      {/* The Hover Icon */}
      <div
        className="hover-icon"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {isVisible ? null : <FaPlus size={30} color="#4CAF50" />}
      </div>

      {/* The Widget */}
      <div
        className={`appointments-widget ${isVisible ? "visible" : ""}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <Button
          className="widget-button"
          variant="light"
          onClick={() => navigate("/book-appointment")}
        >
          <img src="images/Appointments/img1.svg" alt="Book Appointment" />
        </Button>

        <Button
          className="widget-button"
          variant="light"
          onClick={() => navigate("/diagnostic-investigations")}
        >
          <img src="images/Appointments/img2.svg" alt="Diagnostic" />
        </Button>

        <Button
          className="widget-button"
          variant="light"
          onClick={() => navigate("/consult-online")}
        >
          <img src="images/Appointments/img3.svg" alt="Consult Online" />
        </Button>

        <Button className="widget-button" variant="light">
          <img src="images/Appointments/img4.svg" alt="Buy Medicine" />
        </Button>

        <Button
          className="widget-button"
          variant="light"
          onClick={() => navigate("/find-hospital")}
        >
          <img src="images/Appointments/img5.svg" alt="Find Hospital" />
        </Button>

        <Button
          className="widget-button"
          variant="light"
          onClick={() => navigate("/view-health-record")}
        >
          <img src="images/Appointments/img6.svg" alt="View Health Record" />
        </Button>
      </div>
    </div>
  );
};

export default AppointmentsWidget;
