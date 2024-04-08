import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation'; 
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';

function App() {
  return (
    <BrowserRouter>
      <Notification>
      <Navbar />
        <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/instant-consultation" element={<InstantConsultation/>} />
        <Route path='/finddoctor' element={<FindDoctorSearch />} />
        <Route path='/search/doctors' element={<BookingConsultation />} />
      </Routes>
      </Notification>
    </BrowserRouter>
  );
}

export default App;


