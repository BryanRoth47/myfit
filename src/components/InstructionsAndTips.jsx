import React from 'react'

export const Instructions = (props) => {

    const exercise = props.exercise ? props.exercise : null;
    if (exercise === null)
        return null

    let instructions = null;
    if (exercise.instructions) {
        instructions = exercise.instructions.map((step) => (
            <li key={step.substring(0, step.length * .1)}>
                {step}
            </li>
        ));
    }

    return (
        <React.Fragment>Instructions:
            <ul style={{ fontSize: '12' }}>
                {instructions}
            </ul>
        </React.Fragment>
    )
}

export const Tips = (props) => {

    const exercise = props.exercise ? props.exercise : null;
    if (exercise === null)
        return null

    let tips = null;
    if (exercise.tips) {
        tips = exercise.tips.map((tip) => (
            <li key={tip.substring(0, tip.length * .1)}>
                {tip}
            </li>
        ));

        return (
            <React.Fragment>
                Tips:
                <ul style={{ fontSize: '12' }}>
                    {tips}
                </ul>
            </React.Fragment>
        )
    }
    else
        return null;

}
