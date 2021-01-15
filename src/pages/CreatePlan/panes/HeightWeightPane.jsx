import React from 'react'
import CustomFormNumber from '../../../components/CustomFormNumber'
//import { gendersAvailable } from '../../../globalDefinitions'
import './Pane.scss'

export default function HeightWeightPane(props) {

    const handleSelected = (category, name) => {
        props.cardSelected(category, name);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h5>What's your height in centimeters?</h5>
            <CustomFormNumber category="Height" selected={handleSelected} />
            <h5>And your current weight in pounds?</h5>
            <CustomFormNumber category="Weight" selected={handleSelected} />

        </div>
    )
}