import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./BookAppointment.css";
import Header from "../Header/Header";
import { Modal, Button } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MiniNavbar from "./MiniNavbar";

const BookAppointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [city, setCity] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const images = [
    "/images/BookAppointment/img1.png",
    "/images/BookAppointment/img2.png",
    "/images/BookAppointment/img3.png",
    "/images/BookAppointment/img4.png",
    "/images/BookAppointment/img5.png",
    "/images/BookAppointment/img6.png",
    "/images/BookAppointment/img7.png",
    "/images/BookAppointment/img8.png",
    "/images/BookAppointment/img9.png",
    "/images/BookAppointment/img10.png",
  ];

  const getDoctorImage = (doctorIndex) => {
    const imageIndex = doctorIndex % images.length;
    return images[imageIndex];
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/doctor/getAllDoctors"
        );
        const data = await response.json();
        setDoctors(data);
        setFilteredDoctors(data);

        const userData = JSON.parse(sessionStorage.getItem("userdata"));
        setPatientName(`${userData.fname} ${userData.lname}`);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    filterDoctors();
  }, [searchTerm, specialization, city]);

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSpecializationChange = (e) => {
    setSpecialization(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const filterDoctors = () => {
    let filtered = doctors;

    if (searchTerm) {
      filtered = filtered.filter((doctor) =>
        `${doctor.fname} ${doctor.lname}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    if (specialization) {
      filtered = filtered.filter(
        (doctor) =>
          doctor.specialization.toLowerCase() === specialization.toLowerCase()
      );
    }

    if (city) {
      filtered = filtered.filter(
        (doctor) => doctor.Location.toLowerCase() === city.toLowerCase()
      );
    }

    setFilteredDoctors(filtered);
  };

  const handleConfirmBooking = async () => {
    if (!selectedDoctor || !selectedDate || !selectedTime) {
      toast.error("Please select a doctor, date, and time.");
      return;
    }
  
    try {
      const appointmentData = {
        patientId: JSON.parse(sessionStorage.getItem("userdata"))._id,
        doctorId: selectedDoctor._id,
        date: selectedDate,
        time: selectedTime,
        status: "confirmed",
      };
  
      const response = await fetch(
        "http://localhost:8000/api/appointment/scheduleApointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointmentData),
        }
      );
  
      if (response.ok) {
        const result = await response.json();
        toast.success(result.msg || "Appointment scheduled successfully!");
        setShowModal(false);
      } else {
        const error = await response.json();
        toast.error(error.msg || "Failed to schedule the appointment.");
      }
    } catch (error) {
      console.error("Error scheduling appointment:", error);
      toast.error("An error occurred while scheduling the appointment.");
    }
  };
  

  return (
    <>
      <Header />
      <br />
      <MiniNavbar />
      <br />
      <br />
      <br />
      <div className="appointment-container"
      style={{
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(245, 245, 245, 1) 100%), url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' fill=\'none\'><circle cx=\'20\' cy=\'20\' r=\'2\' fill=\'%23d1e3f8\'/></svg>")',
        backgroundSize: '40px 40px, cover',
      }}
      >
        <h1>Book an Appointment</h1>

        <div className="filters-container">
          <div className="filter-item">
            <label className="filter-label">Select Specialization</label>
            <select
              className="filter-select"
              onChange={handleSpecializationChange}
              value={specialization}
            >
              <option value="">All Specializations</option>
              {Array.from(
                new Set(doctors.map((doctor) => doctor.specialization))
              ).map((spec, index) => (
                <option key={index} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-item">
            <label className="filter-label">Select City</label>
            <select
              className="filter-select"
              onChange={handleCityChange}
              value={city}
            >
              <option value="">All Cities</option>
              {Array.from(
                new Set(doctors.map((doctor) => doctor.Location))
              ).map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-item">
            <label className="filter-label">Search by Name</label>
            <input
              className="filter-input"
              type="text"
              placeholder="Search for a doctor"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="doctor-list">
          <h2>Choose a Doctor</h2>
          <ul className="doctor-grid" type="none">
            {filteredDoctors.map((doctor, index) => (
              <li key={doctor._id} className="doctor-card">
                <h3>
                  {doctor.fname} {doctor.lname}
                </h3>
                <p>
                  <i className="fas fa-1stethoscope"></i>{" "}
                  {doctor.specialization}
                </p>
                <p>
                  <i className="fas fa-map-marker-alt"></i> {doctor.Location}
                </p>
                <p>
                  <i className="fas fa-graduation-cap"></i> {doctor.Degree}
                </p>

                <img src={getDoctorImage(index)} alt="Doctor" />
                <div className="degree-availability-line"></div>
                <div className="doctor-schedule">
                  <h4>Availability:</h4>
                  <ul className="doctor-availability">
                    <li>
                      <i className="fas fa-calendar-day"></i>{" "}
                      {doctor.schedule.map((schedule, idx) => (
                        <span key={idx}>{schedule.days.join(",")}</span>
                      ))}
                    </li>
                    <li>
                      <i className="fas fa-clock"></i>{" "}
                      {doctor.schedule.map((schedule, idx) => (
                        <span key={idx}>
                          {schedule.time.startTime}-{schedule.time.endTime}
                        </span>
                      ))}
                    </li>
                  </ul>
                </div>
                <div className="book-appointment-button">
                  <button
                    onClick={() => handleSelectDoctor(doctor)}
                    className="Patient-book-appointment-btn"
                  >
                    Book Appointment
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedDoctor && (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title className="text-primary">
              🩺 Confirm Appointment
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <p>
                <strong>Doctor:</strong>{" "}
                {`${selectedDoctor.fname} ${selectedDoctor.lname}`}
              </p>
              <p>
                <strong>Patient:</strong> {patientName}
              </p>
            </div>

            <div className="mb-4">
              <label className="form-label">
                <strong>Select Day:</strong>
              </label>
              <div className="calendar-container border rounded p-2">
                <Calendar
                  onChange={setSelectedDate}
                  value={selectedDate}
                  minDate={new Date()}
                  className="w-100"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">
                <strong>Select Time:</strong>
              </label>
              <select
                className="form-select"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Select Time</option>
                {selectedDoctor.schedule.map((schedule, idx) => (
                  <option
                    key={idx}
                    value={`${schedule.time.startTime} - ${schedule.time.endTime}`}
                  >
                    {`${schedule.time.startTime} - ${schedule.time.endTime}`}
                  </option>
                ))}
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="rounded-pill"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              className="rounded-pill"
              onClick={handleConfirmBooking}
            >
              Confirm Booking
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};

export default BookAppointment;