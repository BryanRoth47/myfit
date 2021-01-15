import React from 'react'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import { Instructions, Tips } from './InstructionsAndTips'
// CSS file
import colorScheme from './Tooltip.scss'


export default function Tooltip(props) {

    const exercise = props.exercise;

    const handleClose = () => {
        props.hide();
    }

    if (exercise) {
        //console.log(instructions)
        return (
            <Modal centered dialogClassName='modal-dialog-tooltip' show={props.show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title className='w-100 text-center'>{exercise.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Instructions exercise={exercise} />
                                <Tips exercise={exercise} />
                            </Col>
                            <Col>
                                <div className='videoWrapper' >
                                    <embed src={`https://www.youtube.com/embed/${exercise.video}`} type="video/mp4" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="justify-content-md-center">
                    <Button variant="secondary" onClick={handleClose} style={{ background: colorScheme.backgroundSelected }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal >
        );
    }
    else
        return null;
}

//<iframe width="949" height="534" src={`https://www.youtube.com/embed/${addr}`} frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
/*
<embed src={`https://www.${addr}`} type="video/mp4"/>
*/