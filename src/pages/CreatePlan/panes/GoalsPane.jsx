import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import { CustomCard, ensureCorrectNumberSelected } from '../../../components/CustomCard'
import { goalsAvailable } from '../../../globalDefinitions'

export default function GoalsPane(props) {

    // this gathers React refs to any Card which has been selected at least once.
    let objectOfRefs = {};
    const addRef = (ref, name) => {
        objectOfRefs[name] = ref;
    }

    const handleSelected = (name) => {
        ensureCorrectNumberSelected(objectOfRefs, name, true);
        props.cardSelected(name);
    }

    const toDisplay = Object.values(goalsAvailable).map(piece =>
        <CustomCard pass={addRef} id={piece.name} key={piece.name} selected={handleSelected} image={piece.image} name={piece.name} />
    );

    return (
        <div style={{ textAlign: 'center' }}>
            <h5>What are you trying to achieve?</h5>
            <CardColumns onClick={props.handleClick}>
                {toDisplay}
            </CardColumns>
        </div>
    )
}