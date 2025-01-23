import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header/Header";
import "./ViewAppointments.css";
import MiniNavbar from "./MiniNavbar";
import { Modal, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ViewAppointments.css";
import {
  FaUserMd,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [activeAppointments, setActiveAppointments] = useState([]);
  const [canceledAppointments, setCanceledAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const location = useLocation();
  const { availableTimes } = location.state || {};

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const userData = JSON.parse(sessionStorage.getItem("userdata"));
        const response = await fetch(
          `http://localhost:8000/api/appointment/getAllAppointmentsOfOnePatient/${userData._id}`
        );
        const data = await response.json();
        setAppointments(data);

        const active = data.filter(
          (appointment) => appointment.status !== "canceled"
        );
        const canceled = data.filter(
          (appointment) => appointment.status === "canceled"
        );
        setActiveAppointments(active);
        setCanceledAppointments(canceled);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const updateAppointment = async (id) => {
    setSelectedAppointment(id);
    setShowModal(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalSave = async () => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select both date and time.");
      return;
    }

    try {
      const newDateTime = new Date(selectedDate);
      newDateTime.setHours(selectedTime.split(":")[0]);
      newDateTime.setMinutes(selectedTime.split(":")[1]);

      const response = await fetch(
        `http://localhost:8000/api/appointment/updateAppointment/${selectedAppointment}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date: newDateTime }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        toast.success(result.msg);
        setAppointments((prev) =>
          prev.map((appointment) =>
            appointment._id === selectedAppointment
              ? { ...appointment, date: newDateTime }
              : appointment
          )
        );
        setShowModal(false);
      } else {
        toast.error(result.msg || "Failed to update appointment");
      }
    } catch (error) {
      console.error("Error updating appointment:", error);
    }
  };

  const cancelAppointment = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this appointment?"))
      return;

    try {
      const response = await fetch(
        `http://localhost:8000/api/appointment/cancelAppointment/${id}`,
        { method: "PUT" }
      );

      const result = await response.json();
      if (response.ok) {
        toast.success("Appointment canceled successfully");
        setAppointments((prev) =>
          prev.map((appointment) =>
            appointment._id === id
              ? { ...appointment, status: "canceled" }
              : appointment
          )
        );
        setActiveAppointments((prev) =>
          prev.filter((appointment) => appointment._id !== id)
        );
        setCanceledAppointments((prev) => [...prev, result.updatedData]);
      } else {
        toast.error(result.msg || "Failed to cancel appointment");
      }
    } catch (error) {
      console.error("Error canceling appointment:", error);
    }
  };

  return (
    <div>
      <Header />
      <br />
      <MiniNavbar />
      <ToastContainer />
      <div className="ViewAppointments-appointment-list">
  <h2 className="section-title">Scheduled Appointments</h2>

  {availableTimes && (
    <div className="available-times">
      <h3 className="sub-title">Available Times</h3>
      <ul className="times-list">
        {availableTimes.map((time, index) => (
          <li key={index} className="time-item">
            {time}
          </li>
        ))}
      </ul>
    </div>
  )}
        <h3 className="sub-title">Active Appointments</h3>
        {activeAppointments.length > 0 ? (
          <ul className="active-appointments">
            {activeAppointments.map((appointment) => (
              <li
                key={appointment._id}
                className="ViewAppointments-appointment-item"
              >
                <div className="ViewAppointments-doctor-info">
                  <img src="/images/BookAppointment/doctor.jpg" alt="Doctor" />
                  <div className="ViewAppointments-appointment-details">
                    <p>
                      <FaUserMd /> <strong>Doctor:</strong>{" "}
                      {appointment.doctorId.fname} {appointment.doctorId.lname}
                    </p>
                    <p>
                      <FaCalendarAlt /> <strong>Date:</strong>{" "}
                      {new Date(appointment.date).toLocaleDateString()}
                    </p>
                    <p>
                      <FaClock /> <strong>Time:</strong>{" "}
                      {new Date(appointment.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <p>
                      <FaCheckCircle /> <strong>Status:</strong> Active
                    </p>
                  </div>
                </div>
                <div className="ViewAppointments-appointment-actions">
                  <button
                    className="appointment-button"
                    onClick={() => updateAppointment(appointment._id)}
                  >
                    <FaEdit /> Update
                  </button>
                  <button
                    className="appointment-button"
                    onClick={() => cancelAppointment(appointment._id)}
                  >
                    <FaTrash /> Cancel
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No active appointments.</p>
        )}

        {/* <h3>Canceled Appointments</h3>
        {canceledAppointments.length > 0 ? (
          <ul>
            {canceledAppointments.map((appointment) => (
              <li
                key={appointment._id}
                className="ViewAppointments-appointment-item"
              >
                <div className="ViewAppointments-doctor-info">
                  <img src="/images/BookAppointment/doctor.jpg" alt="Doctor" />

                  <div className="appointment-details">
                    <p>
                      <FaUserMd /> <strong>Doctor Name:</strong>{" "}
                      {appointment.doctorId.fname} {appointment.doctorId.lname}
                    </p>
                    <p>
                      <FaCalendarAlt /> <strong>Date:</strong>{" "}
                      {new Date(appointment.date).toLocaleDateString()}
                    </p>
                    <p>
                      <FaClock /> <strong>Time:</strong>{" "}
                      {new Date(appointment.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <p>
                      <FaTimesCircle /> <strong>Status:</strong> Canceled
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No canceled appointments.</p>
        )} */}
      </div>

      <Modal
        show={showModal}
        onHide={handleModalClose}
        className="update-appointment-modal"
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>Update Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="form-group">
            <h5>Select New Date and Time</h5>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              showTimeSelect
              dateFormat="Pp"
              timeIntervals={15}
              className="form-control date-picker"
              placeholderText="Select date and time"
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Select Time: </label>
            <input
              type="time"
              id="time"
              value={selectedTime}
              onChange={handleTimeChange}
              className="form-control time-input"
              required
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button
            variant="secondary"
            onClick={handleModalClose}
            className="cancel-btn"
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleModalSave}
            className="save-btn"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewAppointments;
