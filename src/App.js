import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, CreatePlan, ViewPlans, Login } from "pages";
import Tooltip from './components/Tooltip';
import { exercises } from './globalDefinitions'

import CustomNavBar from 'components/navbar';



function App() {
  const [show, setShow] = useState(false);
  const [exercise, setExercise] = useState(null);

  const createTooltip = (event) => {
    const selectedExercise = event.title;
    //console.log(selectedExercise)
    //console.log(exercises[selectedExercise])
    setExercise(exercises[selectedExercise]);
  }

  const handleClose = () => {
    //console.log('app hide');
    setShow(false);
  }
  const handleShow = (event) => {
    //console.log('app show', event);
    createTooltip(event)
    setShow(true);
  }
  return (
    <div>
      <Login />
      <Switch>
        <Route path="/login">
        </Route>
        <Route path="/home">
          <CustomNavBar />
          <Home />
        </Route>
        <Route path="/create-plan">
          <CustomNavBar />
          <CreatePlan />
        </Route>
        <Route path="/view-plans">
          <CustomNavBar />
          <Tooltip show={show} hide={handleClose} exercise={exercise} />
          <ViewPlans display={handleShow} />
        </Route>
        <Route path="/">
          <Redirect
            to={{
              pathname: "/home",
            }}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;