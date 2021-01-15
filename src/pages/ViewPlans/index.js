import React from 'react';
import { Modal } from 'react-bootstrap'
//import { render } from 'react-dom';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
//import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { getPlan, getUsername } from '../../api/user';
import { useEffect, useState } from 'react'
import ForceLogin from '../../components/ForceLogin'
//import {createTooltip} from '../../components/Tooltip'
//import { formRow } from 'aws-amplify';
//import 'normalize.css/normalize.css'

moment.locale('en-US');
const localizer = momentLocalizer(moment);
//const DragAndDropCalendar = withDragAndDrop(Calendar);
//BigCalendar.momentLocalizer(moment);

const MAX_LENGTH_OF_PLAN = 30;

var typicalWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var bodyParts = ["back", "biceps", "cardio", "legs", "chest", "shoulders", "triceps"];
var firstWeek = new Array(7);
function generateFirstWeek() {
  var today = new Date();
  var dayToday = today.getDay();
  for (var i = 0; i < 7; i++) {
    //console.log(i);
    firstWeek[i] = new Date();
    if (i >= dayToday) {
      firstWeek[i].setDate(today.getDate() + i - dayToday);
    }
    else {
      firstWeek[i].setDate(today.getDate() + i - dayToday + 7);
    }
    //console.log(firstWeek[i]);
  }
}
//generateFirstWeek();
//console.log(firstWeek);

/*
var testname='hello';
const newevent={
  'title': 'testname',
  'allDay': true,
  'start': new Date(2020,10,17),  
  'end': new Date(2020,10,17), 
}
myevent.push(newevent)
*/
const ViewPlans = (props) => {
  const [myevent, setmyevent] = useState([{
    'title': 'testevent',
    'allDay': true,
    'start': new Date(2020, 10, 17),
    'end': new Date(2020, 10, 17),
  }]);
  /*
  const myevent=[
    myevent
    {
      'title': 'testevent',
      'allDay': true,
      'start': new Date(2020,10,17), 
      'end': new Date(2020,10,17),
    }
  ]; 
  */
  useEffect(() => {
    // rearranged this line to solve react-hook/exhaustive-deps warning
    async function fetchData() {

      const savedPlan = await getPlan();
      await generateFirstWeek();
      //console.log(savedPlan.schedule);
      const eventArray = [];
      for (var i = 0; i < typicalWeek.length; i++) {
        if (typicalWeek[i] in savedPlan.schedule) {
          var firstDay = firstWeek[i];
          //console.log(savedPlan.schedule,typicalWeek[i])
          for (var j = 0; j < bodyParts.length; j++) {
            if (bodyParts[j] in savedPlan.schedule[typicalWeek[i]]) {
              var curname = savedPlan.schedule[typicalWeek[i]][bodyParts[j]].name;
              curname = String(curname);
              //console.log(curname);
              //console.log(firstDay)
              for (var k = 0; k < MAX_LENGTH_OF_PLAN; k = k + 7) {
                var curDay = new Date();
                curDay.setDate(firstDay.getDate() + k);
                const newevent = {
                  'title': curname,
                  'allDay': true,
                  'start': curDay,
                  'end': curDay,
                }
                eventArray.push(newevent);
              }

              //newevent.title=curname;
              //eventArray.push(newevent);

              //myevent.push(newevent);
            }
          }
        }
      }
      setmyevent(eventArray);
    }
    fetchData()
  }, []);
  //console.log("hello");
  //const savedPlan = getPlan();

  /*  const showPlan = async () => {
      const savedPlan = await getPlan();
      await generateFirstWeek();
      console.log(savedPlan.schedule);
      for(var i=0;i<typicalWeek.length;i++)
      {
        if(typicalWeek[i] in savedPlan.schedule)
        {
          var firstDay=firstWeek[i];
          //console.log(savedPlan.schedule,typicalWeek[i])
          for(var j=0;j<bodyParts.length;j++)
          {
            if(bodyParts[j] in savedPlan.schedule[typicalWeek[i]])
            {
              var curname=savedPlan.schedule[typicalWeek[i]][bodyParts[j]].name;
              curname=String(curname);
              console.log(curname);
              console.log(firstDay)
              const newevent={
                'title': curname,
                'allDay': true,
                'start': firstDay, 
                'end': firstDay,
              }
              //newevent.title=curname;
              myevent.push(newevent);
            }
          } 
        }
      }
    }
    */
  //console.log('viewplan page');

  const [username, setUsername] = useState(null);
  useEffect(() => {
    getUsername((name) => {
      if (name)
        setUsername(name);
    });
  }, []);

  return (
    <React.Fragment>
      {username ?
        <div style={{ height: '85vh', backgroundImage: "url('/static/media/bg-pattern.83c67c04.png')", backgroundColor: 'white' }}>
          <Calendar popup
            localizer={localizer}
            onSelectEvent={props.display}
            events={myevent}
            step={60}
            //onEventDrop     // removed to supress error message --> this wasn't being passed an argument
            views={['week', 'month']}
            defaultView={Views.MONTH}
          />
        </div> :
        <Modal.Dialog>
          <Modal.Body>
            <ForceLogin page={"viewing"} />
          </Modal.Body>
        </Modal.Dialog>
      }
    </React.Fragment>
  );
}

//export ViewPlans;
//export {BigCalendar} from 'react-big-calendar';

export default ViewPlans;
/*
import React from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'
moment.locale('en-US');
const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);
//const DragAndDropCalendar = withDragAndDrop(Calendar)

const events = [
  {
    id: 0,
    title: 'Board meeting',
    start: new Date(2018, 0, 29, 9, 0, 0),
    end: new Date(2018, 0, 29, 13, 0, 0),
    resourceId: 1,
  },
  {
    id: 1,
    title: 'MS training',
    start: new Date(2018, 0, 29, 14, 0, 0),
    end: new Date(2018, 0, 29, 16, 30, 0),
    resourceId: 2,
  },
  {
    id: 2,
    title: 'Team lead meeting',
    start: new Date(2018, 0, 29, 8, 30, 0),
    end: new Date(2018, 0, 29, 12, 30, 0),
    resourceId: 3,
  },
  {
    id: 10,
    title: 'Board meeting',
    start: new Date(2018, 0, 30, 23, 0, 0),
    end: new Date(2018, 0, 30, 23, 59, 0),
    resourceId: 1,
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2018, 0, 30, 7, 0, 0),
    end: new Date(2018, 0, 30, 10, 30, 0),
    resourceId: 4,
  },
  {
    id: 12,
    title: 'Board meeting',
    start: new Date(2018, 0, 29, 23, 59, 0),
    end: new Date(2018, 0, 30, 13, 0, 0),
    resourceId: 1,
  },
  {
    id: 13,
    title: 'Board meeting',
    start: new Date(2018, 0, 29, 23, 50, 0),
    end: new Date(2018, 0, 30, 13, 0, 0),
    resourceId: 2,
  },
  {
    id: 14,
    title: 'Board meeting',
    start: new Date(2018, 0, 29, 23, 40, 0),
    end: new Date(2018, 0, 30, 13, 0, 0),
    resourceId: 4,
  },
]

const resourceMap = [
  { resourceId: 1, resourceTitle: 'Board room' },
  { resourceId: 2, resourceTitle: 'Training room' },
  { resourceId: 3, resourceTitle: 'Meeting room 1' },
  { resourceId: 4, resourceTitle: 'Meeting room 2' },
]

class Dnd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: events,
    }

    this.moveEvent = this.moveEvent.bind(this)
  }

  moveEvent({ event, start, end, resourceId, isAllDay: droppedOnAllDaySlot }) {
    const { events } = this.state

    const idx = events.indexOf(event)
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = { ...event, start, end, resourceId, allDay }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })
  }

  resizeEvent = (resizeType, { event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })
  }

  render() {
    //const {localizer}=this.props;
    const localizer = momentLocalizer(moment);
    return (
      <DragAndDropCalendar
        selectable
        localizer={this.props.localizer}
        events={this.state.events}
        onEventDrop={this.moveEvent}
        resizable
        resources={resourceMap}
        resourceIdAccessor="resourceId"
        resourceTitleAccessor="resourceTitle"
        onEventResize={this.resizeEvent}
        defaultView="day"
        step={15}
        showMultiDayTimes={true}
        defaultDate={new Date(2018, 0, 29)}
      />
    )
  }
}

export default Dnd
*/
