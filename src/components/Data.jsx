import { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';

function AirtableConnections() {
  const [connections, setConnections] = useState([]);

  const handleConnect = () => {
    console.log("Connect to Airtable");
  };



  const data = [
    {
      title: 'Airtable ',
      description: '* Airtable connection',
    },
    {
      title: 'Excel',
      description: '* Excel connection',
    },
    {
      title: 'Google Docs',
      description: '* Google connection',
    },
    {
      title: 'Google Sheets',
      description: '* Google Sheets connection',
    },
    {
      title: 'Hubspot',
      description: '* Hubspot connection',
    },
    {
      title: 'Notion',
      description: '* Notion connection',
    },
    {
      title: 'Zapier Tables',
      description: '* Table',
    }
  ];

  const handlerClick={
    
  }

 
  return (
    <div className="w-96  " >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-lg font-bold"> Airtable </h2>
          
        </div>
     
      </div>
      <div className="mb-4">
      <SettingsIcon className="float-end  text-gray-500" onClick={handlerClick}/>
        <h3 className="text-gray-700 font-medium mb-2">
          * Airtable connection
        </h3>
        
        <div className="relative">
          <input
            type="text"
            className="w-full cursor-not-allowed px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder={connections.length === 0 ? "No connections found" : ""}
            readOnly
          />
        </div>
      </div>
      <button
        className=" w-full text-black  font-bold py-2 px-4 rounded-md  focus:ring-2 shadow-sm shadow-gray-500 focus:ring-gray-500 focus:ring-opacity-50"
        onClick={handleConnect}
      >
        Connect new connection
      </button>
    </div>
  );
}

export default AirtableConnections;