import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import colorScheme from '../CreatePlan.scss'
//import {getPlan} from '../../../api/user'

export default function FinalPaneSuccess() {
    //console.log()
    return (
        <Container>
            <Row className="justify-content-md-center">
                <h4>Plan created!</h4>
            </Row>
            <Row>
                <Col xs={{ span: 4, offset: 4 }}>
                    <Link to="/view-plans">
                        <Button style={{ background: colorScheme.backgroundSelected }}>View Your Plan</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

//href="/view-plans" 
//<Button style={{ background: colorScheme.backgroundSelected }}>View Plan</Button>