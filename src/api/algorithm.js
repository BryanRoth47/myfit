import { exerciseData, frequencyAvailable, goalsAvailable } from '../globalDefinitions.js';

/*
    Some fields can only have 1 input (i.e. Level, Goals). Changing array[0] to array[userInput.FitnessLevel.length-1] so the last selected
    value will be the one considered by the algorithm. This is a work around until we get around to properly removing the old selections from the array
*/

const generatePlan = (userInput) => {
    // find matching exercises
    const exercises = {};
    for (const [key, value] of Object.entries(exerciseData)) {
        const exercise = value.find(e => {
            const validLevel = !e.levels || e.levels.some(l => l.name === userInput.FitnessLevel[userInput.FitnessLevel.length - 1]);
            const validEquip = !e.equipment || e.equipment.every(equip => userInput.Equipment.some(userEquip => userEquip === equip.name));
            const validGoals = !e.goals || e.goals.some(g => g.name === userInput.Goals[userInput.Goals.length - 1]);
            //console.log(validLevel, validEquip, validGoals)
            return validLevel && validEquip && validGoals;
        });
        exercises[key] = { name: exercise.name, video: exercise.video };
    }

    // generate schedule based on frequency
    const schedule = {};
    const userFrequency = userInput.Frequency[userInput.Frequency.length - 1];
    const goal = userInput.Goals[userInput.Goals.length - 1];
    if (userFrequency === frequencyAvailable.oneDay.name) {
        if (goal !== goalsAvailable.lose_weight.name || goal !== goalsAvailable.overall.name) {
            delete exercises.cardio;
        }
        schedule.Monday = exercises;
    } else if (userFrequency === frequencyAvailable.twoDays.name) {
        schedule.Monday = {
            back: exercises.back,
            biceps: exercises.biceps,
            legs: exercises.legs
        };
        schedule.Wednesday = {
            chest: exercises.chest,
            shoulders: exercises.shoulders,
            triceps: exercises.triceps
        }
        if (goal === goalsAvailable.overall.name || goal === goalsAvailable.lose_weight.name) {
            schedule.Monday = { ...schedule.Monday, cardio: exercises.cardio }
        }
        if (goal === goalsAvailable.lose_weight.name) {
            schedule.Wednesday = { ...schedule.Wednesday, cardio: exercises.cardio }
        }
    } else if (userFrequency === frequencyAvailable.threeDays.name) {
        schedule.Monday = {
            back: exercises.back,
            biceps: exercises.biceps,
        };
        schedule.Wednesday = {
            chest: exercises.chest,
            triceps: exercises.triceps
        };
        schedule.Friday = {
            shoulders: exercises.shoulders,
            legs: exercises.legs
        }
        if (goal === goalsAvailable.overall.name || goal === goalsAvailable.lose_weight.name) {
            schedule.Friday = { ...schedule.Friday, cardio: exercises.cardio }
        }
        if (goal === goalsAvailable.lose_weight.name) {
            schedule.Monday = { ...schedule.Monday, cardio: exercises.cardio }
        }
    }

    const plan = {
        schedule
    }
    // Add repetition tip
    if (goal === goalsAvailable.lose_weight.name) {
        plan.tip = "Target repetitions: 10-12"
    }
    if (goal === goalsAvailable.overall.name) {
        plan.tip = "Target repetitions: 7-9"
    }
    if (goal === goalsAvailable.bulk_up.name) {
        plan.tip = "Target repetitions: 4-6"
    }

    // Add timestamp
    var d = new Date();
    plan.time = d.getTime();

    return plan;
}





export { generatePlan };