import React, { useState } from "react";
import styled from "styled-components";
import "./MyPollModal.css";
// Create a styled component for the poll form
const PollFormWrapper = styled.div`
  margin-bottom: 20px;
`;
// Create a styled component for the poll question input
const QuestionInput = styled.input`
  width: 600px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  height:100px;
  color: black;

`;

// Create a styled component for the poll choice inputs
const ChoiceInput = styled.input`
  width: 400px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  color: black;

`;

// Create a styled component for the "Add Choice" button
const AddChoiceButton = styled.button`
  font-size: 16px;
  padding: 10px;
  background-color: #3C3C3C;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0058c8;
  }
`;

// Create a styled component for the poll
const PollWrapper = styled.div`
  margin-bottom: 20px;
`;

// Create a styled component for the poll question
const PollQuestion = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

// Create a styled component for the poll choices
const PollChoices = styled.ul`
  list-style: none;
  padding: 0;
`;

// Create a styled component for the poll choice
const PollChoice = styled.li`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

function Modal() {
  const [isOpen, setIsOpen] = useState(true);
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState(['', '']);
  const [polls, setPolls] = useState([]);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleChoiceChange = (event, index) => {
    const newChoices = [...choices];
    newChoices[index] = event.target.value;
    setChoices(newChoices);
  };

  const handleAddChoice = () => {
    const newChoices = [...choices, ''];
    setChoices(newChoices);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPoll = {
      question,
      choices,
    };
    setPolls([...polls, newPoll]);
    setQuestion('');
    setChoices(['', '']);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="modal-wrapper bg-[#3C3C3C]">
          
          <div className=" w-[775px] h-[60px] bg-[#3C3C3C] absolute">
            {/* <div className="flex flex-col bg-[#3C3C3C]"> */}
              
              <div className="flex flex-row gap-[24rem] bg-[#3C3C3C]">
                
                <PollFormWrapper>
                  <form onSubmit={handleSubmit}>
                    <QuestionInput
                      type="text"
                      placeholder="Enter your poll question"
                      value={question}
                      onChange={handleQuestionChange}
                    />
                    <button className="close-button" onClick={handleClose}>X</button>

                    {choices.map((choice, index) => (
                      <ChoiceInput
                        key={index}
                        type="text"
                        placeholder={`Enter choice ${index + 1}`}
                        value={choice}
                        onChange={(event) => handleChoiceChange(event, index)}
                      />
                    ))}
                    <AddChoiceButton type="button" onClick={handleAddChoice}>
                      + Add Choice
                    </AddChoiceButton>
                    <button type="submit">Create Poll</button>
                  </form>
                </PollFormWrapper>
                {polls.map((poll, index) => (
                  <PollWrapper key={index}>
                    <PollQuestion>{poll.question}</PollQuestion>
                    <PollChoices>
                      {poll.choices.map((choice, index) => (
                        <PollChoice key={index}>{choice}</PollChoice>
                      ))}
                    </PollChoices>
                  </PollWrapper>
                  
                ))}
                
              </div>
            </div>
          </div>
        // </div>
      )}
    </>
  );
}


export default Modal;    