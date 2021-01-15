// React
import React, { useRef, useState, useCallback, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
// API calls
import { generatePlan } from '../../api/algorithm';
import { savePlan, getUsername } from '../../api/user';
// Panes to display
import { IntroPane, GoalsPane, AgeGenderPane, FitnessLevelPane, EquipmentPane, FrequencyPane, FinalPane } from './panes'
import ForceLogin from '../../components/ForceLogin.jsx'
// Multistep to handle displaying panes
import MultiStep from './multistep-modified'
// CSS file
//import colorScheme from './CreatePlan.scss'



//const prevStyle = { background: colorScheme.complementary, borderWidth: '2px', marginLeft: '100px' }
//const nextStyle = { background: colorScheme.backgroundSelected, borderWidth: '2px' }


const CreatePlan = () => {
    const [success, planCreatedSuccessfully] = useState(false);
    const onChange = useCallback(e => {
        planCreatedSuccessfully(e)
    }, []
    );


    const result = useRef({
        'Goals': [],
        'Age': [],
        'Gender': [],
        'Height': [],
        'Weight': [],
        'FitnessLevel': [],
        'Equipment': [],
        'Frequency': []
    });

    const [username, setUsername] = useState(null);
    useEffect(() => {
        getUsername((name) => {
            if (name)
                setUsername(name);
        });
    }, []);

    // name is the pane/category (i.e. 'Goals'), item is the text for that option (i.e. 'Lose Weight')
    const handleSelected = (name, item) => {
        //console.log("index. name:",name,'item:',item)
        const index = result.current[name].indexOf(item);
        // if it doesn't appear in the selected preferences, add it
        if (index === -1) {
            result.current[name].push(item);
        } else {
            // if it did appear, the user just deselected that option, so remove it from the saved preferences
            result.current[name].splice(index, 1);
        }
        //console.log(result.current)
    }

    const createPlanSuccessful = useRef(false);
    const createPlan = async () => {
        //console.log(result.current)
        const plan = generatePlan(result.current);
        //console.log('plan:',plan)
        await savePlan(plan);
        //const savedPlan = await getPlan();
        //console.log(savedPlan);
        createPlanSuccessful.current = true
        //console.log(createPlanSuccessful.current)
        onChange(true);
    }

    // contains the steps in order
    const steps = [
        { name: 'Intro', component: <IntroPane username={username} /> },
        { name: 'Goals', component: <GoalsPane cardSelected={(item) => { handleSelected('Goals', item) }} /> },
        { name: 'AgeGender', component: <AgeGenderPane cardSelected={(category, item) => { handleSelected(category, item) }} /> },
        //{ name: 'HeightWeight', component: <HeightWeightPane cardSelected={(category, item) => { handleSelected(category, item) }} /> },
        { name: 'FitnessLevel', component: <FitnessLevelPane cardSelected={(item) => { handleSelected('FitnessLevel', item) }} /> },
        { name: 'Equipment', component: <EquipmentPane cardSelected={(item) => { handleSelected('Equipment', item) }} /> },
        { name: 'Frequency', component: <FrequencyPane cardSelected={(item) => { handleSelected('Frequency', item) }} /> },
        { name: 'Finalize', component: <FinalPane createPlan={createPlan} createPlanSuccessful={createPlanSuccessful.current} temp={success} /> }
    ];

    return (
        <Modal.Dialog>
            <Modal.Body>
                {username ?
                    <MultiStep showNavigation={true} steps={steps} /> :
                    <ForceLogin page={"creating"} />
                }

            </Modal.Body>
        </Modal.Dialog>
    );
}


export default CreatePlan;