"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import Picture from '../components/Picture';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './page.module.css';
import './globals.css';

const HomePage = () => {
  const [apodData, setApodData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=jKwP0sfuFeotwX4h08p9esqb2VfZqsHGNNXSPXIa&date=${formattedDate}`
        );
        setApodData(response.data);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      }
    };

    fetchApodData();
  }, [selectedDate]);

  return (
    <div className={styles.container}>
      <h1 className={styles.main__title}>Astronomy Picture of the Day</h1>
      <p>Select a date</p>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className={styles.custom__datepicker}
        dateFormat="yyyy-MM-dd"
      />
      {apodData && (
        <Picture
          title={apodData.title}
          date={apodData.date}
          description={apodData.explanation}
          url={apodData.url}
        />
      )}
    </div>
  );
};

export default HomePage;
