import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import { CustomCard, ensureCorrectNumberSelected } from '../../../components/CustomCard'
import { fitLevelsAvailable } from '../../../globalDefinitions'
import { sortArrayForCardColumns } from '../helpers_createPlan'

export default function FitnessLevelPane(props) {

    // this gathers React refs to any Card which has been selected at least once.
    let objectOfRefs = {};
    const addRef = (ref, name) => {
        objectOfRefs[name] = ref;
    }

    const handleSelected = (name) => {
        ensureCorrectNumberSelected(objectOfRefs, name, true);
        props.cardSelected(name);
    }

    let tempArr = Object.values(fitLevelsAvailable).map(piece =>
        <CustomCard pass={addRef} key={piece.name} selected={handleSelected} image={piece.image} name={piece.name} />
    );
    // .sort((a,b)=>a.displayOrder-b.displayOrder)

    const toDisplay = sortArrayForCardColumns(tempArr);

    return (
        <div style={{ textAlign: 'center' }}>
            <h5>What's your current fitness level?</h5>
            <CardColumns>
                {toDisplay}
            </CardColumns>
        </div>
    )
}
