import React from 'react';
import './reminder.css'; 

const Reminder = () => {
  return (
    <div className='reminder-cont'>
      <h1 className="title">Reminder</h1>
      <div className="reminder-forms">
        <form action="" className='form'>
          <h2 className='sub-title'>SMS Reminder</h2>
          <div className="fields">
            <label htmlFor="">Phone</label>
            <input type="text" />
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
            <input type="text" />
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
