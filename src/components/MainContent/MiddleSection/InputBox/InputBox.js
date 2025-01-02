import React from 'react';
import ChatInput from '../ChatInput';

const InputBox = ({ onSendMessage }) => {
  const handleSend = (message) => {
    if (message.trim()) {
      onSendMessage(message);
      

    }
  };

  return (
    <div>
      <ChatInput onSendMessage={handleSend} />
    </div>
  );
};

export default InputBox;
