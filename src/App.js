import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewFrom from './Components/ReviewForm/ReviewForm';
import ProfileForm from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Notification>
                    <Navbar />
                    <Routes>
                        <Route path="/LandingPage" element={<LandingPage />} />
                        <Route path="/Sign_Up" element={<Sign_Up />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/instant-consultation" element={<InstantConsultation />} />
                        <Route path='/finddoctor' element={<FindDoctorSearch />} />
                        <Route path='/search/doctors' element={<BookingConsultation />} />
                        <Route path='/reviews' element={<ReviewFrom />} />
                        <Route path='/profile' element={<ProfileForm />} />
                        <Route path='/reports' element={<ReportsLayout />} />                    </Routes>
                </Notification>
            </BrowserRouter>
        </div>
    );
}
export default App;