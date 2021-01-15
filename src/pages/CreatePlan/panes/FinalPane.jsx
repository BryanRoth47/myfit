import React from 'react'
//import { Container, Row, Col, Button } from 'react-bootstrap'
//import colorScheme from '../CreatePlan.scss'
import FinalPaneSubmitData from './FinalPaneSubmitData'
import FinalPaneSuccess from './FinalPaneSuccess'

export default function FinalPane(props) {
    //console.log('final pane rendering, value:', props.createPlanSuccessful)
    if (props.createPlanSuccessful) {
        //console.log('success')
        return <FinalPaneSuccess />
    }
    else {
        return <FinalPaneSubmitData createPlan={props.createPlan} />
    }
}
