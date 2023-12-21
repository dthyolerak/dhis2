import React, { useEffect, useState } from 'react';
import './reminder.css'; 

const Reminder = () => {
  const [loading, setLoading] = useState(false);

  const handleScheduleReminder = async () => {
    try {
      setLoading(true);

      // Replace with your DHIS2 API endpoint for scheduling a job
      const apiUrl = 'https://43ba-105-234-160-36.ngrok-free.app/api/scheduler';

      // Replace with the details of your reminder job
      const reminderJobDetails = {
        type: 'REMINDER_JOB_TYPE',
        name: 'Reminder Job',
        description: 'Scheduled job for sending reminders to patients',
        cronExpression: '0 0 12 * * ?', 
        
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include any necessary authentication headers
          'Authorization': '03a92f3c9-2e76-2d75-1a15-eee44790c70',
        },
        body: JSON.stringify(reminderJobDetails),
      });

      if (!response.ok) {
        
        throw new Error(`Failed to schedule reminder. Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Reminder scheduled successfully:', responseData);
    } catch (error) {
      console.error('Error scheduling reminder:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className='reminder-cont'>
      {/* GETTING RUNNNG JOBS  */}
      <div>
      <h1>Reminder Scheduler</h1>
      <button onClick={handleScheduleReminder} disabled={loading}>
        {loading ? 'Scheduling...' : 'Schedule Reminder'}
      </button>
    </div>
      {/* END OF GETTING RUNNING JOBS  */}
      <h1 className="title">Reminder</h1>
      <div className="reminder-forms">
        <form action="" className='form'>
          <h2 className='sub-title'>SMS Reminder</h2>
          <div className="fields">
            <label htmlFor="">Phone</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
          </div>
          <div className="fields">
            <label htmlFor="">Select Date</label>
            <input type="date" />
          </div>
          <div className="fields">
            <label htmlFor=""> Select Time</label>
            <input type="time" />
          </div>
          <div className="fields">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="10" rows="5"></textarea>
          </div>
          <div className="fields">
          <input className='submit' type="submit"  value={"Submit"}/>
          </div>
          
        </form>
        <form action="" className='form'>
          <h2 className='sub-title'>Email Reminder</h2>
          <div className="fields">
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className="fields">
            <label htmlFor="">Select Date</label>
            <input type="date" />
          </div>
          <div className="fields">
            <label htmlFor=""> Select Time</label>
            <input type="time" />
          </div>
          <div className="fields">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="10" rows="5"></textarea>
          </div>
          <div className="fields">
          <input className='submit' type="submit"  value={"Submit"}/>
          </div>
          
        </form>
      </div>
        
    </div>
  );
};

export default Reminder;
