import React from 'react';

import { Header, Countdown, Form, Footer } from './components/index';
import './components/styles.scss';

function App() {
  const currentDate = new Date();
  const year =
    currentDate.getMonth() === 11 && currentDate.getDate() > 23
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear();

  return (
    <div className='App'>
      <Header />
      <Countdown date={`${year}-12-01T00:00:00`} />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
