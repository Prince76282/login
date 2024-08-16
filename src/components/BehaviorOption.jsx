import { useState } from 'react';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function BehaviorOption() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const schedules = [
    {
      title: 'Custom Frequency',
      description: 'Triggers at user-defined intervals (days, weeks, months)',
    },
    {
      title: 'Every Day',
      description: 'Triggers every day at the time selected.',
    },
    {
      title: 'Every Hour',
      description: 'Triggers every hour.',
    },
    {
      title: 'Every Day',
      description: 'Triggers every day at the time selected.',
    },
    {
      title: 'Every Hour',
      description: 'Triggers every hour.',
    },
 
  ];

  const filteredSchedules = schedules.filter((schedule) => {
    return schedule.title.toLowerCase().includes(searchTerm.toLowerCase());
  });


  

  return (
    <div className=" w-full  rounded " >
      <div className="  p-4 flex  items-center gap-2">
    
          <CalendarMonthIcon className='bg-white border border-gray-500 rounded-md text-orange-700'/>
        <h2 className="text-2xl font-bold">Schedule by Zapier</h2>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Type to search triggers"
          className="w-full px-2 py-2 border-2  focus:ring-gray-500 rounded-md  focus:outline-none mt-4 "
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
   
        {filteredSchedules.map((schedule) => (
          <li key={schedule.title} className="py-4 list-none">
            <div className="bg-gray-100 w-400 h-400 rounded shadow-md p-4">
              <div className='flex items-center'> 
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <h3 className="ml-4 font-medium text-gray-900  ">Schedule by Zapier: {schedule.title}</h3>
              </div>
             
               <p className="ml-10 text-gray-600">{schedule.description}</p>
            </div>
           
          </li>
        ))}
    
    </div>
  );
}

export default BehaviorOption;