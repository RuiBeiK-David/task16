import React, { useState } from 'react';
import styles from './Calculation.module.css';

const Calculation = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const types = [
    'Window Cost Calculation',
    'Door Cost Calculation',
    'Installation Cost Calculation',
    'Full Project Estimation'
  ];

  return (
    <div className={styles.container}>
      <h1>Calculation</h1>
      
      <div className={styles.form}>
        <div className={styles.menuSection}>
          <h2>Select Calculation Type</h2>
          <select 
            value={selectedType} 
            onChange={(e) => setSelectedType(e.target.value)}
            className={styles.select}
          >
            <option value="">Choose calculation type...</option>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className={styles.calendarSection}>
          <h2>Preferred Date</h2>
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

export default Calculation; 