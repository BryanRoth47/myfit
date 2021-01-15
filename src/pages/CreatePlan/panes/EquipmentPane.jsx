import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import { CustomCard, ensureCorrectNumberSelected } from '../../../components/CustomCard'
import { equipmentAvailable } from '../../../globalDefinitions'
import { sortArrayForCardColumns } from '../helpers_createPlan'


export default function EquipmentPane(props) {

    // this gathers React refs to any Card which has been selected at least once.
    let objectOfRefs = {};
    const addRef = (ref, name) => {
        objectOfRefs[name] = ref;
    }

    const handleSelected = (name) => {
        ensureCorrectNumberSelected(objectOfRefs, name, false);
        props.cardSelected(name);
    }

    // sorting here just in case the values in equipmentAvailable aren't in alphabetical order
    let tempArr = Object.values(equipmentAvailable).sort(function (a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
    tempArr = tempArr.map(piece =>
        <CustomCard pass={addRef} key={piece.name} selected={handleSelected} image={piece.image} name={piece.name} />
        /*
        <Card bg={'primary'}>
            <Card.Img variant='top' src={piece.image} />
            <Card.Body>
                <Card.Title>{piece.name}</Card.Title>
            </Card.Body>
        </Card>
        */
    )
    const toDisplay = sortArrayForCardColumns(tempArr);

    return (
        <div style={{ textAlign: 'center' }}>
            <h5>What equipment do you have access to?</h5>
            <CardColumns>
                {toDisplay}
            </CardColumns>
        </div>
    )
}
