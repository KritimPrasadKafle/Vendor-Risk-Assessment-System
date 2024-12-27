import React, { useState } from 'react';
import axios from 'axios';

const AddVendor = () => {
  const [name, setName] = useState('');
  const [questionnaire, setQuestionnaire] = useState([{ question: '', answer: '' }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/vendors', { name, questionnaire })
      .then(response => {
        alert('Vendor added!');
      })
      .catch(error => console.error('Error adding vendor:', error));
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questionnaire];
    newQuestions[index][field] = value;
    setQuestionnaire(newQuestions);
  };

  const addQuestion = () => {
    setQuestionnaire([...questionnaire, { question: '', answer: '' }]);
  };

  return (
    <div>
      <h2>Add New Vendor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Vendor Name"
        />
        {questionnaire.map((q, idx) => (
          <div key={idx}>
            <input
              type="text"
              value={q.question}
              onChange={(e) => handleQuestionChange(idx, 'question', e.target.value)}
              placeholder="Question"
            />
            <input
              type="text"
              value={q.answer}
              onChange={(e) => handleQuestionChange(idx, 'answer', e.target.value)}
              placeholder="Answer"
            />
          </div>
        ))}
        <button type="button" onClick={addQuestion}>Add Question</button>
        <button type="submit">Add Vendor</button>
      </form>
    </div>
  );
};

export default AddVendor;
