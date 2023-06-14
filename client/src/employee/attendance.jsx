import React, { useState } from 'react';

function AttendancePage() {
  const [attendance, setAttendance] = useState([]);

  const handleCheckIn = () => {
    const currentTime = new Date().toLocaleTimeString();
    const newAttendance = [...attendance, { type: 'Check-in', time: currentTime }];
    setAttendance(newAttendance);
  };

  const handleCheckOut = () => {
    const currentTime = new Date().toLocaleTimeString();
    const newAttendance = [...attendance, { type: 'Check-out', time: currentTime }];
    setAttendance(newAttendance);
  };

  return (
    <div className=' p-1 justify-content-center border shadow'>
      <h3 className='p-1 d-flex justify-content-center border shadow'>Attendance Page</h3>
      <h6>Please ensure that you accurately record your check-in and check-out times.</h6>
      <button class="check" onClick={handleCheckIn}>Check-in</button><span>To accurately record your check-in time when starting work, please use the following button.</span>
      <button class="check" onClick={handleCheckOut}>Check-out</button><span>To accurately record your check-out time after completing work, please use the following button.</span>
      
      <h4>Time:</h4>
      <ul>
        {attendance.map((entry, index) => (
          <li key={index}>
            {entry.type} at {entry.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AttendancePage;
