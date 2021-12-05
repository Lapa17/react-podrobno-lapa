import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating, { RatingValueType } from './components/Rating/Rating';
import UncontrolledOnOff from './components/OnOff.tsx/UncontrolledOnOff';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import UncontrolledRating from './components/Rating/UncontrolledRating';
import OnOff from './components/OnOff.tsx/OnOff';

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [onOffChange, setOnOffChange] = useState<boolean>(false)
  let [accordionCollapsed,setAccordionCollapsed] = useState<boolean>(false)

  return (
    <div >
      This is App component
      <UncontrolledAccordion titleValue={'Menu'} />
      <Accordion titleValue={'Users'} collapsed={accordionCollapsed} setCollapsed={setAccordionCollapsed}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <OnOff onOff={onOffChange} setOnOff={setOnOffChange}/>
      {/* <UncontrolledOnOff /> */}
    </div>
  );
}



export default App;
