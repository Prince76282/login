import { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Trigger() {
  const [apps, setApps] = useState([
    { icon: 'M', title: 'When I message the assistant', fields: [{ label: 'Message', type: 'text', id: 'message1' }] },
    { icon: 'D', title: 'Schedule by Zapier', fields: [{ label: 'Date', type: 'date', id: 'date' }] },
    { icon: 'G', title: 'Gmail', fields: [{ label: 'Date', type: 'date', id: 'date' }] },
    { icon: 'Q', title: 'Google Calendar', fields: [{ label: 'Date', type: 'date', id: 'date' }] },
    { icon: 'W', title: 'Google Forms', fields: [{ label: 'Date', type: 'date', id: 'date' }] },
    { icon: 'A', title: 'Google Sheets', fields: [{ label: 'Date', type: 'date', id: 'date' }] },
    { icon: 'H', title: 'HubSpot', fields:[{ label: 'Date', type: 'date', id: 'date' }] },
    { icon: 'N', title: 'Notion', fields:[{ label: 'Date', type: 'date', id: 'date' }]},
    { icon: 'S', title: 'Slack', fields:[{ label: 'Date', type: 'date', id: 'date' }] },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const [triggers, setTriggers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenModal = (formFields) => {
    setSelectedForm(formFields);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedForm(null);
  };

  const fetchTriggers = async () => {
    const data = [

      { Schedule:[ { id: 1, title: 'Schedule by Zapier: Custom Frequency', description: 'Triggers at user-defined intervals (days, weeks, months)' },
        { id: 2, title: 'Schedule by Zapier: Every Day', description: 'Triggers every day at the time selected.' },
        { id: 3, title: 'Schedule by Zapier: Every Hour', description: 'Triggers every hour.' },
        { id: 4, title: 'Schedule by Zapier: Every Month', description: 'Triggers every month, on the day(s) selected.' },
        { id: 5, title: 'Schedule by Zapier: Every Week', description: 'Triggers every week, on the day(s) selected.' },
      ]}
        ]
     const flattenedTriggers = data.flatMap(schedule => schedule.Schedule);
     setTriggers(flattenedTriggers);
  };
 

  useEffect(() => {
    fetchTriggers();
  }, []);

  
  const filteredTriggers = triggers.filter((trigger) =>
    trigger.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const generateFormFields = (fields) => {
    return fields.map((field) => (
      <div className="flex " key={field.id}>
        <ArrowBackIcon
          onClick={handleCloseModal}
          className="w-8 h-6 flex cursor-pointer"
        />
        {field.label === 'Date' ? (
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
                  <div key={trigger.id} className=" rounded-md p-3">
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
        ) : (
          <div className=''>
      <h2 className="text-lg font-bold mb-4">Add Trigger</h2>
      <form >
        <div className="mb-4">
          <label htmlFor="phrase" className="block text-gray-700 font-bold mb-2">
            
          </label>
          <input
            type="text"
            id="phrase"
            
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Add Trigger
          </button>
        </div>
      </form>
    </div>
        )}
      </div>
    ));
  };

  return (
    <div className="p-4 bg-custom-dark">
      <h2 className="text-2xl text-white font-bold mb-4">Add trigger</h2>
      <p className="text-white mb-6">Give your assistant access to Zapier actions.</p>
      <div className="container mb-2.5">
        <label htmlFor="text" className="text-white  font-semibold text-lg">Trigger</label>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 bg-custom-light w-full rounded p-2 mb-4 mt-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-5 cursor-pointer overflow-y-auto max-h-80 scrollbar-hide">
        {apps.map((app) => (
          <div
            key={app.title}
            className="rounded-md bg-custom-light border border-gray-200 p-4 flex flex-col items-center justify-center hover:shadow-md"
            onClick={() => handleOpenModal(app.fields)}
          >
            <div className={`text-5xl font-bold ${app.icon === 'M' ? 'text-blue-500' : ''}`}>
              {app.icon}
            </div>
            <p className="text-gray-700 mt-2 text-white">{app.title}</p>
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
            <form className="mt-4">
              {generateFormFields(selectedForm)}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Trigger;
