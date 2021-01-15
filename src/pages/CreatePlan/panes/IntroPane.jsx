import React from 'react'
import { Jumbotron } from 'react-bootstrap'

export default function IntroPane(props) {

    return (
        <Jumbotron className="text-center" style={{ backgroundColor: 'inherit' }}>
            <h2>Hi{props.username ? ' ' + props.username : ""}!</h2>
            <br />
            <br />
            <h5>Time to create your custom fitness workout!</h5>
        </Jumbotron>
    )

}
