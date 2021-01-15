import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Button } from 'react-bootstrap'
import colorScheme from '../pages/CreatePlan/CreatePlan.scss'

const ForceLogin = (props) => {
    const verbToDisplay = props.page ? props.page : "customizing";
    return (
        <Jumbotron className="text-center" style={{ backgroundColor: 'inherit' }}>
            <h2>Please log in before {verbToDisplay} a plan.</h2>
            <br />
            <br />
            <Link to="/login">
                <Button style={{ background: colorScheme.backgroundSelected }}>Login</Button>
            </Link>
        </Jumbotron>
    )
}

export default ForceLogin
