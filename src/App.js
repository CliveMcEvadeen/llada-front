import React, { useState } from 'react';
import styles from './App.module.css';
import TopBar from './components/TopBar/TopBar';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';

function App() {
  const [messages, setMessages] = useState([
    { sender: 'User', text: 'Hello, how are you?' },
    { sender: 'LLM', text: "I'm doing great, thank you! How can I assist you today?" }
  ]);
  const handleSendMessage = (message) => {
    setMessages([...messages, { sender: 'User', text: message }]);
    // Add logic for LLM response
  };

  return (
    <div className={`${styles.app} ${styles.dark}`}>
      <TopBar />
      <Sidebar />
      <MainContent messages={messages} onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
