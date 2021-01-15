/*
    This module contains the global definitions for all possible equipment and their exact names
*/

export const equipmentAvailable = {
    dumbbells: { name: 'Dumbbells', image: "/myfit/icons/dumbell.png" },
    bench: { name: 'Bench', image: "/myfit/icons/bench_press.png" },
    barbells: { name: 'Barbells', image: "/myfit/icons/barbell.png" },
    pullup_bar: { name: 'Pull-up bar', image: "/myfit/icons/pullup_bar.png" },
    squat_rack: { name: 'Squat Rack', image: "/myfit/icons/squat_rack.png" },
    bike: { name: 'Bicycle', image: "/myfit/icons/bike.png" }
}

export const goalsAvailable = {
    lose_weight: { name: 'Lose Weight', image: '/myfit/icons/lose_weight.png' },
    overall: { name: 'Overall Fitness', image: '/myfit/icons/overall_fitness.png' },
    bulk_up: { name: 'Bulk Up', image: '/myfit/icons/bulk_up.png' }
}

export const fitLevelsAvailable = {
    level1: { name: 'Complete Novice', image: '/myfit/icons/numbers/number-1.svg' },
    level2: { name: 'Recently Started', image: '/myfit/icons/numbers/number-2.svg' },
    level3: { name: 'Perfectly Adequate', image: '/myfit/icons/numbers/number-3.svg' },
    level4: { name: 'Advanced', image: '/myfit/icons/numbers/number-4.svg' },
    level5: { name: 'Gym Rat', image: '/myfit/icons/numbers/number-5.svg' },
}

export const frequencyAvailable = {
    oneDay: { name: 'Once a week', image: '/myfit/icons/numbers/number-1.svg' },
    twoDays: { name: 'Twice a week', image: '/myfit/icons/numbers/number-2.svg' },
    threeDays: { name: 'Three days a week', image: '/myfit/icons/numbers/number-3.svg' },
}

export const gendersAvailable = {
    male: { name: 'Male', image: '/myfit/icons/male-symbol.png', category:'Gender' },
    female: { name: 'Female', image: '/myfit/icons/female-symbol.png', category:'Gender' },
}

/*
    exerciseData is an object where each key holds an array of more objects
    exercisesData={
        bodypart[{exercise1},exercise2{},...],
        ...
        ]
    }
*/

// full address of video is https://www.youtube.com/watch?v={video}
export const exerciseData = {
    back: [
        {
            name: 'Deadlift',
            video: 'ytGaGIn3SjE',
            levels: null,
            equipment: [equipmentAvailable.barbells],
            goals: [goalsAvailable.overall, goalsAvailable.bulk_up],
            instructions: ["Start off standing in front of a barbell with your feet shoulder-width apart",
                "Pick up the barbell while keeping your arms extended straight down.",
                "Stand up straight with the barbell in your hands, and refrain from moving your arms.",
                "Bend back down at the knees with barbell.",
                "Repeat for the desired amount of reps."
            ],
            //tips: []
        },
        {
            name: 'Pull-Ups',
            video: 'IpxAG2z91Ys',
            levels: [fitLevelsAvailable.level3, fitLevelsAvailable.level4, fitLevelsAvailable.level5],
            equipment: [equipmentAvailable.pullup_bar],
            goals: [goalsAvailable.lose_weight, goalsAvailable.overall],
            instructions: [
                "Grab the bar with your palms facing outward.",
                "Lift your self up till your chin is above the bar.",
                "Pause for a few seconds.",
                "Lower yourself down slowly.",
                "Repeat for the desired amount of reps."
            ],
            tips: ["For an increased workout, wear ankle weights."]
        },
        {
            name: 'Superman',
            video: 'cc6UVRS7PW4',
            levels: null,
            equipment: null,
            goals: null,
            instructions: [
                "Start off lying flat on your stomach with your arms stretched out in front of you.",
                "Slowly raise one arm and the opposite leg up off of the floor and hold onto this position for a few seconds until you feel a tight stretch in your core and back muscles.",
                "Return back to the starting position.",
                "Repeat with other arm and leg.",
                "Repeat, alternating side, for the desired amount of reps."
            ],
            //tips: []
        }
    ],
    biceps: [
        {
            name: 'Dumbbell Bicep Curls',
            video: 'ykJmrZ5v0Oo',
            levels: null,
            equipment: [equipmentAvailable.dumbbells],
            goals: null,
            instructions: [
                "Start off standing up straight with your feet shoulder-width apart, abs tight, knees slightly bent and a dumbbell in each hand holding in a palms up grip.",
                "While holding the dumbbells extend your arms at the side of your body, then slowly lift your arms up towards your chest until your forearms touch your biceps.",
                "Isolate the bicep and hold this position for a count.",
                "Return back to the starting position and repeat for as many reps and sets as desired."
            ],
            tips: ["Refrain from swinging your arms during this exercise."]
        },
        {
            name: 'Barbell Bicep Curls',
            video: 'QZEqB6wUPxQ',
            levels: null,
            equipment: [equipmentAvailable.barbells],
            goals: null,
            instructions: [
                "Start off standing up straight with your feet shoulder-width apart, keeping your knees slightly bent and abs drawn in tight.",
                "Grab a barbell with a shoulder width underhand (palms up) grip, lowering your arms down to your thighs fully and bending slightly at your elbows as this will be your starting position.",
                "Slowly raise the bar towards your upper chest, squeezing your muscles and isolating the biceps.",
                "Hold this position for a count and then return back to the starting position."
            ],
            tips: ["Refrain from swinging your hips or back during this exercise."]
        },
        {
            name: 'Towel Bicep Curls',
            video: 'p8z4fhUWhP4',
            levels: null,
            equipment: null,
            goals: null,
            instructions: [
                "Grasp the ends of a bath-sized towel in each hand.",
                "Put tension on the towel by pulling your your hands outwards",
                "Slowly raise the towel towards your upper chest, while maintaining tension on the towel",
                "Hold this position for a count and then return back to the starting position."
            ],
            tips: ["Hang weights from the towel for a tougher workout."]
        }
    ],
    chest: [
        {
            name: 'Barbell Bench Press',
            video: 'ysUTNll8JQ8',
            levels: [fitLevelsAvailable.level2, fitLevelsAvailable.level3, fitLevelsAvailable.level4, fitLevelsAvailable.level5],
            equipment: [equipmentAvailable.bench, equipmentAvailable.barbells],
            goals: null,
            instructions: [
                "Lie with your back flat on a bench with your feet firmly on the ground and the bar resting on the bench’s rack.",
                "Slowly lift the bar off the rack and hold it above your chest as this will be the starting position.",
                "Then lower the bar down until it is slightly above your chest, making sure that it doesn't touch or slam against your chest.",
                "Hold this position briefly and make sure you have complete control of the bar, then raise it back up to the starting postion.", "Repeat for as many reps and sets as desired."
            ],
            tips: [
                "By changing the width of the grip on the bar will change the focus and targeting of the exercise. Using a medium grip is the most common grip on the bar which is slightly wider than shoulder-width that is typically marked on the bar.",
                "Using a spotter while performing this exercise is essential to make sure that the bar doesn't drop onto your chest and a spotter can provide motivation to lift more weight.",
                "The most important thing about the bench press exercise is using a weight that you can manage while maintaining proper form. Many individuals try to lift more weight than they can manage which results in injuring and incorrectly performing the exercise."
            ]
        },
        {
            name: 'Dumbbell Bench Press',
            video: 'Y_7aHqXeCfQ',
            levels: null,
            equipment: [equipmentAvailable.bench, equipmentAvailable.dumbbells],
            goals: null,
            instructions: [
                "Start off by picking the dumbbells that you can manage, holding them at your sides and then sitting on the edge of a flat bench.",
                "Using your thighs and thrusting of your arms to lift the weights onto your legs in your starting position.",
                "Lean back onto the bench and on the motion down, push the dumbbells up about an inch high above your chest as this will be your starting position.",
                "The dumbbells should be aligned with the middle of your chest and then slowly push the dumbbells up above your body using mostly your chest and triceps for the motion upward.",
                "Stop the motion of the exercise as soon as your arms are straight and the dumbbells are directly above your chest.",
                "Squeeze your chest muscles as soon as you reach the top position and hold for a count, then return back to the starting position.",
                "On the return motion down, do not let gravity do the work or drop the dumbbells, you should be resisting gravity of the way down."
            ],
            tips: [
                "Make sure when performing this exercise to breathe comfortably and deeply",
                "Refrain from clanking the dumbbells together or spinning them around when you get to the top as this is improper form."
            ]
        },
        {
            name: 'Push-ups',
            video: 'IODxDxX7oi4',
            levels: null,
            equipment: null,
            goals: null,
            instructions: [
                "Start off by lying face down on the floor or on a mat with your feet together and arms shoulder width apart.",
                "Slowly draw your abs in, inhale and raise your body off of the floor until your arms are straight, keeping your head and neck level with your body as this will be your starting position.",
                "As you lower yourself down towards the ground, exhale until your chest almost touches the ground and you feel a stretch in your chest muscles.",
                "Hold for a count at the bottom position and then return back up to the starting position."
            ],
            tips: ["A close grip works more of the inner pectorals and a wide grip works more of the outer pectorals."]
        }
    ],
    triceps: [
        {
            name: 'Dumbbell Tricep Extensions',
            video: 'X-iV-cG8cYs',
            levels: null,
            equipment: [equipmentAvailable.dumbbells],
            goals: null,
            instructions: [
                "Start off standing with your feet shoulder width apart, keeping your back straight and your abs drawn in.",
                "Hold a dumbbell in both hands, with your palms facing up.",
                "Raise the dumbbell over your head and slowly lower the dumbbell in an arc behind your head and hold for a count.",
                "Slowly raise the dumbbell back up to the starting position."
            ]
        },
        {
            name: 'Tricep Dips',
            video: '6kALZikXxLc',
            levels: null,
            equipment: null,
            goals: null,
            instructions: [
                "Start off setting up a chair and positioning yourself in between the chair so that your hands are about shoulder width apart on the chair.",
                "Move your feet out in front of you so that your legs are straight.",
                "Then straighten your arms out on the chair so that you are elevated and tension is placed on your triceps.",
                "Slowly lower your upper body down towards the floor with your elbows so that they are at level with your shoulders.",
                "Hold for a count, squeezing your triceps and return back to the starting position.",
                "Repeat for as many reps and sets as desired."
            ]
        }
    ],
    legs: [
        {
            name: 'Barbell Squats',
            video: '1oed-UmAxFs',
            levels: null,
            equipment: [equipmentAvailable.squat_rack, equipmentAvailable.barbells],
            goals: null,
            instructions: [
                "Start off by setting up a weighted barbell with the amount of weight that you would like to perform for this exercise.",
                "Then position the bar on your shoulder blades with an overhand shoulder width grip just as in a regular squat position.",
                "Bend at your knees and slowly lower yourself towards the ground, squatting down as far as possible and squeezing your squads.",
                "Hold for a count then return back up to the starting position.",
                "Repeat for as many reps and sets as desired."
            ],
            tips: ["Keep your chest vertical throughout the exercise"]
        },
        {
            name: 'Dumbbell Lunges',
            video: 'D7KaRcUTQeE',
            levels: null,
            equipment: [equipmentAvailable.dumbbells],
            goals: null,
            instructions: [
                "Start off grabbing a dumbbell in each hand and standing with your feet about 8 inches apart and toes facing forward as this will be your starting position.",
                "Once in position take a step forward (about 2 to 3 feet), keeping your abs tightly drawn and and your upper body straight.",
                "Continue forward and slowly lower one knee down towards the ground and keeping the other knee bent at a 90 degree angle, not letting the back knee touch the ground.",
                "Slowly lower one knee down as if kneeling while keeping your other knee bent at a 90 degree angle, do not let your knee touch the ground.",
                "Hold the position for a count then return back up to the starting position."
            ],
            tips: [
                "Refrain from putting the pressure of your body on one knee as this can cause imbalance and incorrectly performing this exercise.",
                "The knee you are leaning forward on should not move beyond the toe of this foot."
            ]
        },
        {
            name: 'Squats',
            video: 'aclHkVaku9U',
            levels: null,
            equipment: null,
            goals: null,
            instructions: [
                "To begin this exercise; start off by standing feet shoulder width apart and flex at your knees and torso sitting back with your hips.",
                "Extend your arms out in front of you and squat down until your knees are parallel with your glutes.",
                "Return back to the starting position.",
                "Repeat this exercise for as many repetitions as needed"
            ],
            tips: ["Clasp your hands together for a greater workout"]
        }
    ],
    shoulders: [
        {
            name: 'Dumbbell Shoulder Press',
            video: 'B-aVuyhvLHU',
            levels: null,
            equipment: [equipmentAvailable.dumbbells],
            goals: null,
            instructions: [
                "Start off standing up straight with your feet shoulder width apart and your arms rested at your sides, holding dumbbells in each hand.",
                "Raise the dumbbells to head level so that your arms are creating a 90 degree angle.",
                "Slowly push the dumbbells up, by extending through the elbows, over your head, feeling a stretch in your shoulders.",
                "Hold for a count then return back to the starting position.",
                "Repeat for as many reps and sets as desired."
            ]
        },
        {
            name: 'Barbell Shoulder Press',
            video: 'QAQ64hK4Xxs',
            levels: null,
            equipment: [equipmentAvailable.barbells],
            goals: null,
            instructions: [
                "To begin this exercise; start off by taking a weighted barbell and have it pressed up against your chest with your palms facing outward.",
                "With the barbell in position, lift it above your head with locked arms and hold for a few seconds squeezing your back and shoulders tightly.",
                "Return back to the starting position.",
                "Repeat this exercise for as many repetitions as needed."
            ],
            tips: ["Make sure to lift the barbel in a straight line, not a curved line."]
        },
        {
            name: 'Incline Push-Ups',
            video: 'Me9bHFAxnCs',
            levels: null,
            equipment: null,
            goals: null,
            instructions: [
                "Start off by kneeling in front of a chair or bench with your arms fully extended and body straight.",
                "While keeping your abs drawn in and body straight, lower your chest down towards chair/bench until you feel a stretch in your chest muscles.",
                "Hold the position for a count and then slowly return back up to the starting position.",
                "Repeat this exercise for as many repetitions as needed."
            ],
            tips: ["Make sure to keep your body in a straight line. Don't bend your back."]
        }
    ],
    cardio: [
        {
            name: 'Cycling',
            video: 'sZE8tJnTHhw',
            levels: null,
            equipment: [equipmentAvailable.bike],
            goals: null,
            instructions: ["Biking burns calories, tones the body, strengthens the legs, increases stamina, endurance, and balance."]
        },
        {
            name: 'Jogging',
            video: '5umbf4ps0GQ',
            levels: null,
            equipment: null,
            goals: null,
            instructions: [
                "Jogging is often defined as running at a pace less than 6 miles per hour (mph).",
                "Jogging is a great way to increase the intensity of your workout gradually.",
                "Make sure to stretch before jogging."
            ]
        },
    ]
};

// it will be helpful to take the entries in exerciseData and put them all into one large array, rather than being broken into categories
function makeObject() {
    let ret = {};
    // for each bodypart
    Object.entries(exerciseData).forEach(bodypart => {
        // for each exercise for that bodypart
        bodypart[1].forEach(exercise => {
            // add it to the new object
            ret[exercise.name] = exercise
        })
    })
    return ret;

}
// export as a separate line so function only gets called once
export const exercises = makeObject()