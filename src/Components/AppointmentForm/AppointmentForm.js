import React, { useState } from 'react';

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const [dateOfAppointment, setDateOfAppointment] = useState('');
  
    const timeSlots = Array.from({ length: 9 }, (_, index) => `${9 + index}:00`);

    const handleSlotSelection = (e) => {
        setSelectedSlot(e.target.value);
    };

    const handleDateChange = (e) => {
        setDateOfAppointment(e.target.value);
    };
  
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const appointmentDetails = { name, phoneNumber, dateOfAppointment, selectedSlot };
        onSubmit(appointmentDetails);
        localStorage.setItem('appointmentData', JSON.stringify(appointmentDetails));
        // Reset form fields
        setName('');
        setPhoneNumber('');
        setDateOfAppointment('');
        setSelectedSlot('');
    };
  
    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div> {/* This div closes the Phone Number form group */}
            <div className="form-group">
                <label htmlFor="dateOfAppointment">Date of Appointment:</label>
                <input
                    type="date"
                    id="dateOfAppointment"
                    value={dateOfAppointment}
                    onChange={handleDateChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="timeSlot">Book Time Slot:</label>
                <select
                    id="timeSlot"
                    value={selectedSlot}
                    onChange={handleSlotSelection}
                    required
                >
                    <option value="">Select a time slot</option>
                    {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                    ))}
                </select>
            </div>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default AppointmentForm;
