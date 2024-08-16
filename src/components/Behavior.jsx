import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from 'react';

function Behavior() {
  const [apps, setApps] = useState([
    { icon: 'M', title: 'When I message the assistant',
     Schedule:[ { id: 1, title: 'Schedule by Zapier: Custom Frequency', description: 'Triggers at user-defined intervals (days, weeks, months)' },
      { id: 2, title: 'Schedule by Zapier: Every Day', description: 'Triggers every day at the time selected.' },
      { id: 3, title: 'Schedule by Zapier: Every Hour', description: 'Triggers every hour.' },
      { id: 4, title: 'Schedule by Zapier: Every Month', description: 'Triggers every month, on the day(s) selected.' },
      { id: 5, title: 'Schedule by Zapier: Every Week', description: 'Triggers every week, on the day(s) selected.' },
    ] },

    { icon: 'D', title: 'Schedule by Zapier', 
       Schedule:[ { id: 1, title: 'Schedule by Zapier: Custom Frequency', description: 'Triggers at user-defined intervals (days, weeks, months)' },
      { id: 2, title: 'Schedule by Zapier: Every Day', description: 'Triggers every day at the time selected.' },
      { id: 3, title: 'Schedule by Zapier: Every Hour', description: 'Triggers every hour.' },
      { id: 4, title: 'Schedule by Zapier: Every Month', description: 'Triggers every month, on the day(s) selected.' },
      { id: 5, title: 'Schedule by Zapier: Every Week', description: 'Triggers every week, on the day(s) selected.' },
    ] },
    { icon: 'G', title: 'Gmail', 
       Schedule:[ { id: 1, title: 'Schedule by Zapier: Custom Frequency', description: 'Triggers at user-defined intervals (days, weeks, months)' },
      { id: 2, title: 'Schedule by Zapier: Every Day', description: 'Triggers every day at the time selected.' },
      { id: 3, title: 'Schedule by Zapier: Every Hour', description: 'Triggers every hour.' },
      { id: 4, title: 'Schedule by Zapier: Every Month', description: 'Triggers every month, on the day(s) selected.' },
      { id: 5, title: 'Schedule by Zapier: Every Week', description: 'Triggers every week, on the day(s) selected.' },
    ]},
    { icon: 'Q', title: 'Google Calendar',
        Schedule:[ { id: 1, title: 'Schedule by Zapier: Custom Frequency', description: 'Triggers at user-defined intervals (days, weeks, months)' },
      { id: 2, title: 'Schedule by Zapier: Every Day', description: 'Triggers every day at the time selected.' },
      { id: 3, title: 'Schedule by Zapier: Every Hour', description: 'Triggers every hour.' },
      { id: 4, title: 'Schedule by Zapier: Every Month', description: 'Triggers every month, on the day(s) selected.' },
      { id: 5, title: 'Schedule by Zapier: Every Week', description: 'Triggers every week, on the day(s) selected.' },
    ] },
    { icon: 'W', title: 'Google Forms', 
       Schedule:[ { id: 1, title: 'Schedule by Zapier: Custom Frequency', description: 'Triggers at user-defined intervals (days, weeks, months)' },
      { id: 2, title: 'Schedule by Zapier: Every Day', description: 'Triggers every day at the time selected.' },
      { id: 3, title: 'Schedule by Zapier: Every Hour', description: 'Triggers every hour.' },
      { id: 4, title: 'Schedule by Zapier: Every Month', description: 'Triggers every month, on the day(s) selected.' },
      { id: 5, title: 'Schedule by Zapier: Every Week', description: 'Triggers every week, on the day(s) selected.' },
    ]},
    { icon: 'A', title: 'Google Sheets',  Schedule:[ { id: 1, title: 'Schedule by Zapier: Custom Frequency', description: 'Triggers at user-defined intervals (days, weeks, months)' },
      { id: 2, title: 'Schedule by Zapier: Every Day', description: 'Triggers every day at the time selected.' },
      { id: 3, title: 'Schedule by Zapier: Every Hour', description: 'Triggers every hour.' },
      { id: 4, title: 'Schedule by Zapier: Every Month', description: 'Triggers every month, on the day(s) selected.' },
      { id: 5, title: 'Schedule by Zapier: Every Week', description: 'Triggers every week, on the day(s) selected.' },
    ] },
    { icon: 'H', title: 'HubSpot',  Schedule:[ { id: 1, title: 'Schedule by Zapier: Custom Frequency', description: 'Triggers at user-defined intervals (days, weeks, months)' },
      { id: 2, title: 'Schedule by Zapier: Every Day', description: 'Triggers every day at the time selected.' },
      { id: 3, title: 'Schedule by Zapier: Every Hour', description: 'Triggers every hour.' },
      { id: 4, title: 'Schedule by Zapier: Every Month', description: 'Triggers every month, on the day(s) selected.' },
      { id: 5, title: 'Schedule by Zapier: Every Week', description: 'Triggers every week, on the day(s) selected.' },
    ]},
    { icon: 'N', title: 'Notion',  Schedule:[ { id: 1, title: 'Schedule by Zapier: Custom Frequency', description: 'Triggers at user-defined intervals (days, weeks, months)' },
      { id: 2, title: 'Schedule by Zapier: Every Day', description: 'Triggers every day at the time selected.' },
      { id: 3, title: 'Schedule by Zapier: Every Hour', description: 'Triggers every hour.' },
      { id: 4, title: 'Schedule by Zapier: Every Month', description: 'Triggers every month, on the day(s) selected.' },
      { id: 5, title: 'Schedule by Zapier: Every Week', description: 'Triggers every week, on the day(s) selected.' },
    ] },
    { icon: 'S', title: 'Slack',  Schedule:[ { id: 1, title: 'Schedule by Zapier: Custom Frequency', description: 'Triggers at user-defined intervals (days, weeks, months)' },
      { id: 2, title: 'Schedule by Zapier: Every Day', description: 'Triggers every day at the time selected.' },
      { id: 3, title: 'Schedule by Zapier: Every Hour', description: 'Triggers every hour.' },
      { id: 4, title: 'Schedule by Zapier: Every Month', description: 'Triggers every month, on the day(s) selected.' },
      { id: 5, title: 'Schedule by Zapier: Every Week', description: 'Triggers every week, on the day(s) selected.' },
    ] },
  ]);
 const [isOpen, setIsOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTriggers, setFilteredTriggers] = useState([]);

  useEffect(() => {
    if (selectedSchedule) {
      const filtered = selectedSchedule.Schedule.filter((trigger) =>
        trigger.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTriggers(filtered);
    }
  }, [searchQuery, selectedSchedule]);

  const handleOpenModal = (schedule) => {
    setSelectedSchedule(schedule);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedSchedule(null);
  };

  const generateFormFields = () => {
    if (!selectedSchedule) return null;

    return (
      <div className='bg-custom-light'>
        <ArrowBackIcon
          onClick={handleCloseModal}
          className="w-8 h-6 flex cursor-pointer"
        />
        <div>
          <h2 className="ml-2 text-lg mb-4 font-bold">Schedule by Zapier</h2>
          <input
            type="text"
            placeholder="Type to search triggers"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="grid grid-cols-1 gap-4 mt-4">
            {filteredTriggers.length > 0 ? (
              filteredTriggers.map((trigger) => (
                <div key={trigger.id} className="bg-gray-100 rounded-md p-3">
                  <div className="flex items-center mb-2">
                    <h3 className="ml-2 font-medium">{trigger.title}</h3>
                  </div>
                  <p className="text-gray-600">{trigger.description}</p>
                </div>
              ))
            ) : (
              <p>No triggers found.</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 bg-custom-dark">
      <h2 className="text-2xl text-white font-bold mb-4">Add trigger</h2>
      <p className="text-white mb-6">Give your assistant access to Zapier actions.</p>
      <div className="container mb-2.5">
        <label htmlFor="text" className="text-white font-semibold text-lg">Trigger</label>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300  bg-custom-light mt-2 w-full rounded p-2 mb-4"
        />
      </div>

      <div className="grid grid-cols-2 gap-5 cursor-pointer overflow-y-auto max-h-80 scrollbar-hide">
        {apps.map((app) => (
          <div
            key={app.title}
            className="rounded-md border border-gray-200 bg-custom-light p-4 flex flex-col items-center justify-center hover:shadow-md"
            onClick={() => handleOpenModal(app)}
          >
            <div className={`text-5xl font-bold ${app.icon === 'M' ? 'text-blue-500' : ''}`}>
              {app.icon}
            </div>
            <p className="text-white mt-2">{app.title}</p>
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white w-600 h-600 rounded shadow-md p-4 overflow-y-auto max-h-full scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            {generateFormFields()}
          </div>
        </div>
      )}
    </div>
  );
}


export default Behavior;
