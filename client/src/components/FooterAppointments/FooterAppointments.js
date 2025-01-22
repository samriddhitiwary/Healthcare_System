import React from 'react'
import Button from 'react-bootstrap/Button';
import './FooterAppointments.css';

const FooterAppointments = () => {
  return (
    <div className='FooterAppointments_body'>
        <br></br>
     <div className='FooterAppointments_Header'><h2>What Would You Like To Do Today?</h2> </div>
      <div className='FooterAppointmentsapp'>
        
        
        <Button className='FooterAppointmentsbut' variant="light">
            <img className='FooterAppointments_img' src='images/Appointments/img1.svg'></img>
            <p>Book Appointment</p>
        </Button> 

        

        <Button className='FooterAppointmentsbut' variant="light">
            <img className='FooterAppointments_img' src='images/Appointments/img3.svg'></img>
            <p>Consult Online</p>
        </Button> 

        

        <Button className='FooterAppointmentsbut' variant="light">
            <img className='FooterAppointments_img' src='images/Appointments/img2.svg'></img>
            <p>Book Health Checkup</p>
        </Button> 

        <Button className='FooterAppointmentsbut' variant="light">
            <img className='FooterAppointments_img' src='images/Appointments/img4.svg'></img>
            <p>Buy Medicine</p>
        </Button> 

        <Button className='FooterAppointmentsbut' variant="light">
            <img className='FooterAppointments_img' src='images/Appointments/img5.svg'></img>
            <p>Find Hospital</p>
        </Button> 

        <Button className='FooterAppointmentsbut' variant="light">
            <img className='FooterAppointments_img' src='images/Appointments/img6.svg'></img>
            <p>View Health Record</p>
        </Button> 
        
        

        
     </div>
    </div>
  )
}

export default FooterAppointments