import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import { CustomCard, ensureCorrectNumberSelected } from '../../../components/CustomCard'
import { frequencyAvailable } from '../../../globalDefinitions'

export default function FrequencyPane(props) {

    // this gathers React refs to any Card which has been selected at least once.
    let objectOfRefs = {};
    const addRef = (ref, name) => {
        objectOfRefs[name] = ref;
    }

    const handleSelected = (name) => {
        ensureCorrectNumberSelected(objectOfRefs, name, true);
        props.cardSelected(name);
    }

    const toDisplay = Object.values(frequencyAvailable).map(piece =>
        <CustomCard pass={addRef} key={piece.name} selected={handleSelected} image={piece.image} name={piece.name} />
    );


    return (
        <div style={{ textAlign: 'center' }}>
            <h5>How often do you want to work out?</h5>
            <CardColumns>
                {toDisplay}
            </CardColumns>
        </div>
    )
}
