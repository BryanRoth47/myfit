import React from 'react'
import { CardColumns } from 'react-bootstrap'
import CustomFormNumber from '../../../components/CustomFormNumber'
import { CustomCard, ensureCorrectNumberSelected } from '../../../components/CustomCard'
import { gendersAvailable } from '../../../globalDefinitions'
import './Pane.scss'

export default function AgeGenderPane(props) {

    // this gathers React refs to any Card which has been selected at least once.
    let objectOfRefs = {};
    const addRef = (ref, name) => {
        objectOfRefs[name] = ref;
    }

    const handleSelected = (category, name) => {
        if (category === "Gender")
            ensureCorrectNumberSelected(objectOfRefs, name, true);
        props.cardSelected(category, name);
    }

    let gendersToDisplay = Object.values(gendersAvailable).map(piece =>
        <CustomCard pass={addRef} id={piece.name} key={piece.name} selected={handleSelected} image={piece.image} name={piece.name} category={piece.category} />
    );

    return (
        <div style={{ textAlign: 'center' }}>
            <h5>Tell us about yourself</h5>
            <div style={{ position: 'relative', left: '75px', height: '100%', width: '100%' }}>
                <CardColumns onClick={props.handleClick} >
                    {gendersToDisplay}
                </CardColumns>
            </div>
            <h5>How old are you?</h5>
            <CustomFormNumber category="Age" selected={handleSelected} />
            <h5>What's your height in centimeters?</h5>
            <CustomFormNumber category="Height" selected={handleSelected} />
            <h5>And your current weight in pounds?</h5>
            <CustomFormNumber category="Weight" selected={handleSelected} />
        </div>
    )
}