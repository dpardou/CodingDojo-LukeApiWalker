import React, { useState } from 'react';
import './App.css';
import {Router, navigate} from '@reach/router'
import Form from './components/Form'
import People from './components/People'
import Planet from './components/Planet'


function App() {

  const [myType, setMyType] = useState("people");
  const [myId, setMyId] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const findInfo = form => {
      setMyType(form.Type);
      setMyId(form.Id)
  }

  if(submitted === true){
    if(myId && myType){
      if(myType === "people"){
        navigate("/people");
      } else {
        navigate("/planet");
      }
    }
  }

  return (
    <div className="container">
      <Form setMyId={setMyId} setType={setMyType} setSubmitted={setSubmitted}/>
      <Router>
        <People path="/people" Type={myType} Id={myId}/>
        <People path="/:id" Type={myType} Id={myId}/>
        <Planet path="/planet" Type={myType} Id={myId}/>
      </Router>
    </div>
  );
}

export default App;
