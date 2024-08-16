import { useState } from 'react';
import Trigger from './Trigger';
import CloseIcon from '@mui/icons-material/Close';
import DataSource from "./DataSource";
import Behavior from "./Behavior";
import Clarification from "./Clarification";
import AddIcon from '@mui/icons-material/Add';


function UntitledBehavior() {
  const [isTriggerOpen, setIsTriggerOpen] = useState(false);
  const [isDataOpen, setIsDataOpen] = useState(false);
  const [isBehaviorOpen, setIsBehaviorOpen] = useState(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [isClarificationOpen, setIsClarificationOpen] = useState(false);

  const handleInstructionsOpen = () => {
    setIsInstructionsOpen(true);
  };

  const handleInstructionsClose = () => {
    setIsInstructionsOpen(false);
  };

  const handleClarificationOpen = () => {
    setIsClarificationOpen(true);
  };

  const handleClarificationClose = () => {
    setIsClarificationOpen(false);
  };

  const handleTriggerOpen = () => {
    setIsTriggerOpen(true);
  };

  const handleTriggerClose = () => {
    setIsTriggerOpen(false);
  };

  const handleDataOpen = () => {
    setIsDataOpen(true);
  };

  const handleDataClose = () => {
    setIsDataOpen(false);
  };

  const handleBehaviorOpen = () => {
    setIsBehaviorOpen(true);
  };

  const handleBehaviorClose = () => {
    setIsBehaviorOpen(false);
  };



const [instructions, setInstructions] = useState('');

const handleChange = (e) => {
  setInstructions(e.target.value);
};

const handleSave = () => {
 
  console.log('Saved Instructions:', instructions);
 
  localStorage.setItem('instructions', instructions);
};

  return (
    <div className="container mx-auto p-4 bg-customBlack">
      <h1 className="text-2xl font-bold mb-4  text-white">Untitled behavior</h1>

      <div className="bg-custom-dark p-4 rounded-md mb-4">
        <div>
          <button
            className="px-0.5 py-0.5 border-2 border-blue-900 hover:bg-gray-200 text-blue-900 font-semibold rounded-md focus:outline-none transition duration-300 float-end"
            onClick={handleTriggerOpen}
          >
            <AddIcon />
          </button>
          {isTriggerOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
              onClick={handleTriggerClose}
            >
              <div
                className="bg-custom-dark w-400 h-400 rounded shadow-md p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="text-gray-500 font-semibold rounded-md focus:outline-none transition duration-300  float-end"
                  onClick={handleTriggerClose}
                >
                  <CloseIcon />
                </button>
                <Trigger />
              </div>
            </div>
          )}
        </div>

        <h2 className="text-xl text-white font-semibold mb-2">Trigger</h2>
        <p className="mb-2 text-white">Event that initiates this behavior</p>
      </div>

      <div className="bg-custom-dark p-4 rounded-md mb-4">
      <h2 className="text-xl text-white font-semibold mb-2">Instructions to follow:</h2>
      <div className="w-full border-none min-h-60 bg-white">
        <textarea
          className="w-full min-h-52 p-4 rounded-md focus:outline-none focus:shadow-outline"
          rows={5}
          placeholder="Instructions tell your assistant what to do when it's triggered, how to process or summarize the data, and which of the available actions it should use. For best results, be as specific as possible, break down instructions into multiple steps, and provide examples. Example: When I get a new salesforce lead, summarize it, then send it to the #sales-channel in Slack."
          value={instructions}
          onChange={handleChange}
        />
      </div>
     
    </div>

      <div className="bg-custom-dark p-4 rounded-md  mb-4">
        <div >
          <button
            className="px-0.5 py-0.5 border-2 border-blue-900 hover:bg-gray-200 text-blue-900 font-semibold rounded-md focus:outline-none transition duration-300 sm:float-right md:float-right lg:float-right"
            onClick={handleBehaviorOpen}
          >
            <AddIcon />
          </button>
          {isBehaviorOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
              onClick={handleBehaviorClose}
            >
              <div
                className=" w-400 h-400 rounded shadow-md  bg-custom-dark p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="text-gray-500 font-semibold rounded-md focus:outline-none transition duration-300 sm:float-right md:float-left lg:float-right"
                  onClick={handleBehaviorClose}
                >
                  <CloseIcon />
                </button>
                <Behavior />
              </div>
            </div>
          )}
        </div>

        <h2 className="text-xl text-white  font-semibold mb-2">Add Integration</h2>
        <p className="mb-2 text-white">Actions this behavior has access to</p>
      </div>

      <div className="bg-custom-dark p-4 rounded-md mb-4">
        <div>
        <button
            className="px-0.5 py-0.5 border-2 border-blue-900 hover:bg-gray-200 text-blue-900 font-semibold rounded-md focus:outline-none transition duration-300 sm:float-right md:float-right lg:float-right"
            onClick={handleDataOpen}
          >
            <AddIcon />
          </button>
          {isDataOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
              onClick={handleDataClose}
            >
              <div
                className=" w-400 h-400 rounded bg-custom-dark shadow-md p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="text-gray-500 font-semibold rounded-md focus:outline-none transition duration-300 sm:float-right md:float-left lg:float-right"
                  onClick={handleDataClose}
                >
                  <CloseIcon />
                </button>
                <DataSource />
                <button
                  className="text-white bg-blue-700 px-2 py-2 font-semibold rounded-md focus:outline-none transition duration-300 sm:float-right md:float-left lg:float-right"
                  onClick={handleDataClose}
                >
                 Close
                </button>
              </div>
            </div>
          )}
        </div>

        <h2 className="text-xl text-white font-semibold mb-2">Data sources Integration</h2>
        <p className="mb-2 text-white">Real-time data that you can query</p>
      </div>

      <div className="bg-custom-dark p-4 rounded-md mb-4">
        <div>
          <button
            className="px-0.5 py-0.5 border-2 border-blue-900 hover:bg-gray-200 text-blue-900 font-semibold rounded-md focus:outline-none transition duration-300 float-end"
            onClick={handleClarificationOpen}
          >
            <AddIcon />
          </button>
          {isClarificationOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
              onClick={handleClarificationClose}
            >
              <div
                className="bg-custom-dark w-400 h-400 rounded shadow-md p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="text-gray-500 font-semibold rounded-md focus:outline-none transition duration-300 sm:float-right md:float-left lg:float-right"
                  onClick={handleClarificationClose}
                >
                  <CloseIcon />
                </button>
                <Clarification />
              </div>
            </div>
          )}
        </div>

        <h2 className="text-xl text-white font-semibold mb-2">Clarification Questions</h2>
        <p className="mb-2 text-white">Real-time data that you can query</p>
      </div>
    </div>
  );
}

export default UntitledBehavior;
