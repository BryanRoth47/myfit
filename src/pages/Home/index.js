import React, { useState, useEffect } from 'react';
//import Button from 'react-bootstrap/Button'
import './home.scss';
import { getUsername } from '../../api/user';


const Home = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    getUsername((name) => {
      if (name)
        setUsername(name);
    });
  }, []);
  /*
  [data_, setdata_] = useState("");
  
  function fetchTest() {
    var request = fetch('https://b0z7sgc167.execute-api.us-east-2.amazonaws.com/default/testDynamo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        //'x-api-key': 'API-KEY',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setdata_(data);
        return data;
      })
      .catch((error) => console.log('Error while fetching:', error));
    return {
      //type: ActionTypes.FETCH_TODOLIST,
      payload: request,
    };
  }
  

  // supress no-unused-vars warning
  if(data_){}
  

  useEffect(() => { 
    fetchTest();
    getUserId((id) => {
      console.log(id);
    });
  }, []);
  */

  //var timeTest=this.data;
  //console.log("hello");
  return (
    <React.Fragment>
      <div className="intro-wrapper">
        <h1>Welcome to MyFitPlanner{username ? ', ' + username : "!"}</h1>
        <h3>Please login to begin, or click View Plan to view your custom fitness plan.</h3>
      </div>
    </React.Fragment>
  );
}

export default Home;

// <h2>{JSON.stringify(data_)}</h2>