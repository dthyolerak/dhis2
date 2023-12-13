import React from 'react';
import '../reminder/reminder.css'; 
import { useDataQuery } from "@dhis2/app-runtime";
const myQuery = {
    results: {
      resource: 'programs',
      params: {
        fields: ['id', 'displayName'],
      }
    }
  }
const Enroll = () => {
    const { loading, error, data } = useDataQuery(myQuery)

    if (error) {
        return <span>ERROR: {error.message}</span>
    }

    if (loading) {
        return <span>Loading...</span>
    }
  return (
    <div className='reminder-cont'>
      <h1 className="title">Enroll Patient</h1>
      <div className="reminder-forms">
        <form action="" className='form'>
          <div className="fields">
            <label htmlFor="">Full Name</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
          </div>
          <div className="fields">
            <label htmlFor="">Select Date</label>
            <input type="date" />
          </div>
          <div className="fields">
            <label htmlFor=""> Select program</label>
            <select className="statusBtn" name="" id="">
            <option className="statusOptionM" value="">Select</option>
                {/* render a list of programs */}
                {data.results.programs.map((prog) => (
                    
                    <option className="statusOptionP" key={prog.id} value="">{prog.displayName}</option>
                ))}
        </select>
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

export default Enroll;
