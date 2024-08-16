import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AirtableConnections from './Data'

function Data() {
  const [apps, setApps] = useState([
    { icon: 'M', title: 'When I message the assistant', fields: [{ label: 'Message', type: 'text', id: 'message1' }] },
    { icon: 'D', title: 'Schedule by Zapier', fields: [{ label: 'Date', type: 'date', id: 'date' }] },
    { icon: 'G', title: 'Gmail', fields: [{ label: 'Email Address', type: 'email', id: 'email' }] },
    { icon: 'Q', title: 'Google Calendar', fields: [{ label: 'Event Title', type: 'text', id: 'eventTitle' }] },
    { icon: 'W', title: 'Google Forms', fields: [{ label: 'Form Link', type: 'url', id: 'formLink' }] },
    { icon: 'A', title: 'Google Sheets', fields: [{ label: 'Sheet Name', type: 'text', id: 'sheetName' }] },
    { icon: 'H', title: 'HubSpot', fields: [{ label: 'Contact Name', type: 'text', id: 'contactName' }] },
    { icon: 'N', title: 'Notion', fields: [{ label: 'Page URL', type: 'url', id: 'pageUrl' }] },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  const handleOpenModal = (formFields) => {
    setSelectedForm(formFields);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedForm(null);
  };

  const generateFormFields = (fields) => {
    return fields.map(field => {
      if (field.type === 'textarea') {
        return (
        
          <div className=' flex'>
          <ArrowBackIcon
          onClick={handleCloseModal}
          className="w-8 h-6 flex  cursor-pointer "/>
         <AirtableConnections/>
         </div>
        );
      } else {
        return (
          <div className=' flex '>
          <ArrowBackIcon
          onClick={handleCloseModal}
          className="w-8 h-6 flex  cursor-pointer"/>
         <AirtableConnections/>
         </div>
        );
      }
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl text-white font-bold mb-4">Add data source</h2>
      <p className="text-white mb-6">Select the app you’d like to add the data source from.</p>
      
      <div className="grid grid-cols-2 gap-5 cursor-pointer overflow-y-auto max-h-80 scrollbar-hide">
        {apps.map((app) => (
          <div
            key={app.title}
            className="rounded-md border border-gray-200 bg-custom-light p-4 flex flex-col items-center justify-center hover:shadow-md"
            onClick={() => handleOpenModal(app.fields)}
          >
            <div
              className={`text-5xl font-bold ${app.icon === 'M' ? 'text-blue-500' : ''}`}
            >
              {app.icon}
            </div>
            <p className="text-white mt-2">{app.title}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-white">
        Can’t find the app you need? Let us know which apps you’d like to add as data sources.
      </p>

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
              {selectedForm && generateFormFields(selectedForm)}
             
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Data;
