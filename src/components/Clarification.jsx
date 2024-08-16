import { useState } from 'react';

function QuestionForm() {
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: 'What is your name?',
    },
    {
      id: 2,
      question: 'What is your favorite color?',
    },
    {
      id: 3,
      question: 'What is your hobby?',
    },
    {
      id: 4,
      question: 'What is your favorite color?',
    },
    {
      id: 5,
      question: 'What is your hobby?',
    },
    {
        id: 2,
        question: 'What is your favorite color?',
      },
      {
        id: 3,
        question: 'What is your hobby?',
      },
      {
        id: 4,
        question: 'What is your favorite color?',
      },
      {
        id: 5,
        question: 'What is your hobby?',
      },
  ];

  const handleChange = (id, event) => {
    setAnswers({
      ...answers,
      [id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with answers:', answers);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 ">
      <h2 className="text-2xl text-white font-bold mb-4">Answer the following questions</h2>


      <div className="max-h-96 overflow-auto p-2 border border-gray-300 bg-custom-dark rounded-md">
        <form onSubmit={handleSubmit}>
          {questions.map((question) => (
            <div key={question.id} className="mb-4">
              <label className="block text-white  font-medium mb-2">
                {question.question}
              </label>
              <input
                type="text"
                className="w-full bg-custom-light px-2 py-2 border-2 focus:ring-gray-500 rounded-md focus:outline-none"
                value={answers[question.id] || ''}
                onChange={(event) => handleChange(question.id, event)}
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuestionForm;
