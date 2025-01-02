import React from 'react';
import styles from './LeftSection.module.css';
import Card from '../Card/Card';
import { Line } from 'react-chartjs-2';
import ChatItem from './ChatItem';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const performanceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Resolved Tickets',
      data: [65, 59, 80, 81, 56, 55, 70, 75, 82, 78, 85, 90],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      pointRadius: 4,
      pointBackgroundColor: 'rgb(75, 192, 192)'
    },
    {
      label: 'Pending Tickets',
      data: [15, 20, 25, 18, 30, 35, 28, 22, 20, 25, 18, 15],
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderWidth: 2,
      pointRadius: 4,
      pointBackgroundColor: 'rgb(255, 99, 132)'
    }
  ]
};

const dummyChats = [
  { id: 1, message: "Hello, how can I help you?", timestamp: "10:00 AM" },
  { id: 2, message: "I need help with my account", timestamp: "10:01 AM" },
  { id: 3, message: "Sure, let me check that for you", timestamp: "10:02 AM" }
];

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#333333'
      }
    },
    tooltip: {
      enabled: true
    }
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(0, 0, 0, 0.1)'
      },
      ticks: {
        color: '#333333'
      }
    },
    y: {
      grid: {
        color: 'rgba(0, 0, 0, 0.1)'
      },
      ticks: {
        color: '#333333'
      }
    }
  }
};

// Dark mode options
const darkModeOptions = {
  ...options,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#ffffff'
      }
    }
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        color: '#ffffff'
      }
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        color: '#ffffff'
      }
    }
  }
};

const helperAgents = [
  { name: 'Agent 1', status: 'Available' },
  { name: 'Agent 2', status: 'Busy' },
  { name: 'Agent 3', status: 'Available' }
];

const LeftSection = ({ darkMode }) => {
  console.log('Performance Data:', performanceData);
  console.log('Helper Agents:', helperAgents);
  console.log('Dummy Chats:', dummyChats);
  
  return (
    <div className={styles.section}>
      <Card title="Agent Performance">
        <div className={styles.chartContainer}>
          <Line 
            data={performanceData} 
            options={darkMode ? darkModeOptions : options} 
          />
        </div>
      </Card>
      <Card title="Helper Agents">
        <div className={styles.agentsList}>
          {helperAgents.map((agent, index) => (
            <div key={index} className={styles.agentItem}>
              <span>{agent.name}</span>
              <span className={`${styles.status} ${styles[agent.status.toLowerCase()]}`}>
                {agent.status}
              </span>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Agent Activity">
        <div className={styles.chatContainer}>
          {dummyChats.map(chat => (
            <ChatItem key={chat.id} message={chat.message} timestamp={chat.timestamp} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default LeftSection;
