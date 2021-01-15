import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import colorScheme from '../CreatePlan.scss'

export default function FinalPaneSubmitData(props) {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            props.createPlan()
        }
    }, [isLoading, props]);

    const handleClick = () => setLoading(true);
    return (
        <Container>
            <Row className="justify-content-md-center">
                <h3>Great! </h3>
                <h5>Click the button to create your custom fitness plan.</h5>
            </Row>
            <Row>
                <Col xs={{ span: 4, offset: 4 }}>
                    <Button
                        onClick={!isLoading ? handleClick : null}
                        style={{ background: colorScheme.backgroundSelected }}>
                        {isLoading ? 'Working…' : 'Create Plan'}
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}