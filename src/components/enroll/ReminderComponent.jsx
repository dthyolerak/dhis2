// src/NewProgram.js
import { useDataMutation } from '@dhis2/app-runtime';
import { Button } from '@dhis2/ui';

const myMutation = {
  resource: 'programs',
  type: 'create',
  data: {
    name: 'Reminder Program',
    shortName: 'Reminder Program',
    programType: 'WITHOUT_REGISTRATION', // Assuming reminders don't need registration
  },
};

const ReminderComponent = ({ refetch }) => {
  const [mutate, { loading }] = useDataMutation(myMutation);
// listing programs

// end of 
  const onClick = async () => {
    try {
      const response = await mutate();
      const newProgramId = response.data?.programs?.response?.uid;

      // Assuming you have an API endpoint to schedule reminders
      if (newProgramId) {
        await scheduleReminder(newProgramId);
      }

      refetch();
    } catch (error) {
      console.error('Error creating program:', error);
    }
  };

  const scheduleReminder = async (programId) => {
    // Assuming you have an API endpoint for scheduling reminders
    const reminderMutation = {
      resource: 'reminders', // Adjust the resource name as needed
      type: 'create',
      data: {
        program: programId,
        reminderMessage: 'Your reminder message here',
        reminderDate: '2023-12-31T12:00:00', // Adjust the date and time
      },
    };

    try {
      await useDataMutation(reminderMutation);
      // Assuming you have a function to send SMS here
      await sendSMS();
    } catch (error) {
      console.error('Error scheduling reminder:', error);
    }
  };

  const sendSMS = async () => {
    // Assuming you have an API or service to send SMS
    // Implement your logic to send SMS here
    console.log('Sending SMS...');
  };

  return (
    <Button primary small disabled={loading} onClick={onClick}>
      + New Reminder Program
    </Button>
  );
};


export default ReminderComponent;
