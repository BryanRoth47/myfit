import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

const CustomFormNumber = (props) => {
    const [currentValue, setValue] = useState(0);

    useEffect(() => {
        props.selected(props.category, currentValue)
    }, [props, currentValue]);

    return (
        <Form.Group>
            <Form.Control size="lg" type="number" placeholder={props.category} value={props.currentValue} onChange={(e) => setValue(e.target.value)} />
        </Form.Group>
    )
}

export default CustomFormNumber;