import React from 'react';

import {
  Header,
  Countdown,
  Form,
  Body,
  About,
  Footer,
} from './components/index';
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
      <Countdown date={`${year}-12-01T13:00:00`} />
      <Form />
      <Body />
      <About />
      <Footer />
    </div>
  );
}

export default App;
