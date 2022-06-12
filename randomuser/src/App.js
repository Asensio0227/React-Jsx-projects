import React, { useEffect, useState } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
  FaGenderless,
} from 'react-icons/fa'
import Navbar from './Navbar'
import Loading from './Loading'

const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <>
      <Navbar />
      
    </>
  )
};

export default App