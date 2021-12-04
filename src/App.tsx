import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import OnOff from './components/OnOff.tsx/OnOff';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';

function App() {
  return (
    <div >
      This is App component
      <UncontrolledAccordion titleValue={'Menu'} />
      <UncontrolledAccordion titleValue={'Users'}/>
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <OnOff />
    </div>
  );
}



export default App;
