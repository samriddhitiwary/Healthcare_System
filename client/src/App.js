import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import ClinicCarousel from './components/Carousel/Carousel';
import Appointments from './components/Appoinments/Appoinments';
import Speciality from './components/Speciality/Speciality';
import MiniNavbar from './components/MiniNavbar/MiniNavbar';
import Procedures from './components/Procedures/Procedures';
import ProHealth from './components/ProHealth/ProHealth';
import ConsultOnline from './components/Appoinments/ConsultOnline';
import PatientCare from './components/PatientCare/PatientCare';
import FooterAppointments from './components/FooterAppointments/FooterAppointments';
import Footer from './components/Footer/Footer';
import Login from './components/Header/Login';
import Profile from './components/Header/Profile';
import FindHospital from './components/Appoinments/FindHospital';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookAppointment from './components/Appoinments/BookAppointment';
import ViewAppointments from './components/Appoinments/ViewAppointments';
import ViewHealthRecord from './components/Appoinments/ViewHealthRecord';
import Diagnostic from './components/Appoinments/Diagnostic/Diagnostic';
import AbdominalTest from './components/Appoinments/Diagnostic/AbdominalTest';
import EchoTest from './components/Appoinments/Diagnostic/EchoTest';
import Allergy_tests from './components/Appoinments/Diagnostic/Allergy_tests';
import Angiogram from './components/Appoinments/Diagnostic/Angiogram';
import Ankle_brachial_index from './components/Appoinments/Diagnostic/Ankle_brachial_index';
import Antinuclear_antibody_test from './components/Appoinments/Diagnostic/Antinuclear_antibody_test';
import Basic_metabolic_panel from './components/Appoinments/Diagnostic/Basic_metabolic_panel';
import Biophysical_profile from './components/Appoinments/Diagnostic/Biophysical_profile';
import Biopsy from './components/Appoinments/Diagnostic/Biopsy';
import Blood_pressure_test from './components/Appoinments/Diagnostic/Blood_pressure_test';
import Blood_urea_nitrogen from './components/Appoinments/Diagnostic/Blood_urea_nitrogen';
import Breast_biopsy from './components/Appoinments/Diagnostic/Breast_biopsy';
import Cancer_screening from './components/Appoinments/Diagnostic/Cancer_screening';
import Cerebral_angiogram from './components/Appoinments/Diagnostic/Cerebral_angiogram';
import Discogram from './components/Appoinments/Diagnostic/Discogram';
import Holter_monitor from './components/Appoinments/Diagnostic/Holter_monitor';
import Afp_test from './components/Appoinments/Diagnostic/Afp_test';
import Chatbot from './components/Chatbot/Chatbot';
import AppointmentsWidget from './components/AppointmentsWidget/AppointmentsWidget';
import Nutrients_Value from './components/Appoinments/Nutrients_Value';
import View_Calories from './components/Appoinments/View_Calories';

function App() {
  useEffect(() => {
    document.title = 'Digital Healthcare';
  }, []);

  return (
    <Router>
      <Routes>
        {/* Main layout for general pages */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Speciality />} />
          <Route path="/speciality" element={<Speciality />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/prohealth" element={<ProHealth />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Separate layout for Profile page */}
        <Route path="/profile" element={<ProfileOnlyLayout />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Separate page layout for Consult Online */}
        <Route path="/consult-online" element={<ConsultOnline />} />
        <Route path="/find-hospital" element={<FindHospital />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/view-appointment" element={<ViewAppointments />} />
        <Route path="/view-health-record" element={<ViewHealthRecord />} />
        <Route path="/diagnostic-investigations" element={<Diagnostic />} />
        <Route path="/cal-calories" element={<Nutrients_Value />} />
        <Route path="/view-calories" element={<View_Calories />} />
        

       
        <Route path="/abdominal-ultrasound" element={<DiagnosticLayout />}>
          <Route path="/abdominal-ultrasound" element={<AbdominalTest />} />
        </Route>
        <Route path="/2d-echo-test" element={<DiagnosticLayout />}>
          <Route path="/2d-echo-test" element={<EchoTest />} />
        </Route>
        <Route path="/afp-test" element={<DiagnosticLayout />}>
          <Route path="/afp-test" element={<Afp_test />} />
        </Route>
        <Route path="/angiogram" element={<DiagnosticLayout />}>
          <Route path="/angiogram" element={<Angiogram />} />
        </Route>
        <Route path="/ankle-brachial-index" element={<DiagnosticLayout />}>
          <Route path="/ankle-brachial-index" element={<Ankle_brachial_index />} />
        </Route>
        <Route path="/antinuclear-antibody-test" element={<DiagnosticLayout />}>
          <Route path="/antinuclear-antibody-test" element={<Antinuclear_antibody_test />} />
        </Route>
        <Route path="/basic-metabolic-panel" element={<DiagnosticLayout />}>
          <Route path="/basic-metabolic-panel" element={<Basic_metabolic_panel />} />
        </Route>
        <Route path="/biophysical-profile" element={<DiagnosticLayout />}>
          <Route path="/biophysical-profile" element={<Biophysical_profile />} />
        </Route>
        <Route path="/biopsy" element={<DiagnosticLayout />}>
          <Route path="/biopsy" element={<Biopsy />} />
        </Route>
        <Route path="/blood-pressure-test" element={<DiagnosticLayout />}>
          <Route path="/blood-pressure-test" element={<Blood_pressure_test />} />
        </Route>
        <Route path="/blood-urea-nitrogen" element={<DiagnosticLayout />}>
          <Route path="/blood-urea-nitrogen" element={<Blood_urea_nitrogen />} />
        </Route>
        <Route path="/breast-biopsy" element={<DiagnosticLayout />}>
          <Route path="/breast-biopsy" element={<Breast_biopsy />} />
        </Route>
        <Route path="/cancer-screening" element={<DiagnosticLayout />}>
          <Route path="/cancer-screening" element={<Cancer_screening />} />
        </Route>
        <Route path="/cerebral-angiogram" element={<DiagnosticLayout />}>
          <Route path="/cerebral-angiogram" element={<Cerebral_angiogram />} />
        </Route>
        <Route path="/discogram" element={<DiagnosticLayout />}>
          <Route path="/discogram" element={<Discogram />} />
        </Route>
        <Route path="/holter-monitor" element={<DiagnosticLayout />}>
          <Route path="/holter-monitor" element={<Holter_monitor />} />
        </Route>
        
        <Route path="/allergy-tests" element={<DiagnosticLayout />}>
          <Route path="/allergy-tests" element={<Allergy_tests />} />
        </Route>


        {/* Only Header is rendered for /login route */}
        <Route path="/login" element={<HeaderOnlyLayout />}>
         
        </Route>
      </Routes>
      <Chatbot/>
      <AppointmentsWidget />
    </Router>
  );
}

const MainLayout = () => (
  <>
    <Header />
    <ClinicCarousel />
    <Appointments />
    <MiniNavbar />
    <br />
    <Outlet />
    <br />
    <PatientCare />
    {/* <FooterAppointments /> */}
    <Footer />
  </>
);

const ProfileOnlyLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const DiagnosticLayout = () => (
  <>
    <Header />
    <ClinicCarousel />
    <Outlet />
  </>
);

const HeaderOnlyLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default App;
