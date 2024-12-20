import React, { useState } from 'react';
import styles from './Request.module.css';

const Request = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    'Window Installation',
    'Door Installation',
    'Measurement Service',
    'Consultation'
  ];

  return (
    <div className={styles.container}>
      <h1>Make Request</h1>
      
      <div className={styles.form}>
        <div className={styles.menuSection}>
          <h2>Select Service</h2>
          <select 
            value={selectedOption} 
            onChange={(e) => setSelectedOption(e.target.value)}
            className={styles.select}
          >
            <option value="">Choose a service...</option>
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className={styles.calendarSection}>
          <h2>Select Date</h2>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className={styles.calendar}
          />
        </div>
      </div>
    </div>
  );
};

export default Request; 