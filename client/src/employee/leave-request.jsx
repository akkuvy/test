import React, { useState } from 'react';

function LeaveRequestPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send the leave request to the server
  };

  return (
    <div className=' p-1 justify-content-center border shadow'>
      <h1>Leave Request</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <label htmlFor="reason">Reason:</label>
        <textarea
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        <button class="submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LeaveRequestPage;
