import React, { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

// Lucide React Icons (imported via CDN for immersive environment)
const Icon = ({ name, size = 24, color = 'currentColor', className = '' }) => {
  const icons = {
    LayoutDashboard: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
    Dumbbell: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      >
        <path d="M14.4 14.4L9.6 9.6"></path>
        <path d="M18.6 6.6L6.6 18.6"></path>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
        <path d="M12 12L12 12"></path>
      </svg>
    ),
    Activity: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    Target: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
    Utensils: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      >
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"></path>
        <path d="M7 21v-7a2 2 0 012-2h4a2 2 0 012 2v7"></path>
        <line x1="17" y1="2" x2="17" y2="22"></line>
      </svg>
    ),
    Settings: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      >
        <path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.08.15a2 2 0 010 2l-.08.15a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.38a2 2 0 00-.73-2.73l-.08-.15a2 2 0 010-2l.08-.15a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
    ChevronDown: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      >
        <path d="M6 9l6 6 6-6"></path>
      </svg>
    ),
    Award: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      >
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="12 15 12 22"></polyline>
        <polyline points="17 18 12 22 7 18"></polyline>
      </svg>
    ),
    MoreHorizontal: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      >
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="19" cy="12" r="1"></circle>
        <circle cx="5" cy="12" r="1"></circle>
      </svg>
    ),
    Stretch: (props) => ( // New Stretch icon for Mobility
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      >
        <circle cx="6" cy="20" r="2"></circle>
        <path d="M18 18l-3.5-3.5L12 17l-3.5-3.5L5 18"></path>
        <path d="M4 14V4a2 2 0 012-2h8l4 4v10"></path>
      </svg>
    ),
  };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon size={size} color={color} className={className} /> : null;
};


// Helper functions for Local Storage
const loadFromLocalStorage = (key, defaultValue) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return defaultValue;
    }
    const parsedState = JSON.parse(serializedState);

    // Special handling for dailySummaryHistory to ensure water is a number
    if (key === 'dailySummaryHistory' && Array.isArray(parsedState)) {
      return parsedState.map(entry => ({
        ...entry,
        // Ensure water is parsed as an integer, default to 0 if invalid
        water: typeof entry.water === 'string' ? parseInt(entry.water) || 0 : entry.water
      }));
    }
    return parsedState;
  } catch (error) {
    console.error("Error loading from local storage:", error);
    return defaultValue;
  }
};

const saveToLocalStorage = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Error saving to local storage:", error);
  }
};

// Main App component
const App = () => {
  // State to manage the current active tab/page
  const [activeTab, setActiveTab] = useState('dashboard');
  // State to manage the workout view filter: 'upcoming' or 'completed'
  const [workoutFilter, setWorkoutFilter] = useState('upcoming');

  // Dark Mode state and persistence
  const [darkMode, setDarkMode] = useState(() => loadFromLocalStorage('darkMode', false));

  // State for tracking data, initialized from local storage
  const [steps, setSteps] = useState(() => loadFromLocalStorage('steps', 0));
  const [water, setWater] = useState(() => loadFromLocalStorage('water', 0)); // in ml
  const [bodyMeasurements, setBodyMeasurements] = useState(() => loadFromLocalStorage('bodyMeasurements', []));
  const [workouts, setWorkouts] = useState(() => loadFromLocalStorage('workouts', [
    {
      id: 'workout-1', // Changed to string ID for consistency with UUID
      name: 'Full Body A',
      date: '2025-07-23',
      completed: false,
      exercises: [
        { name: 'Squats', sets: '', reps: '', weight: '', completed: false },
        { name: 'Bench Press', sets: '', reps: '', weight: '', completed: false },
        { name: 'Rows', sets: '', reps: '', weight: '', completed: false },
      ]
    },
    {
      id: 'workout-2',
      name: 'Full Body B',
      date: '2025-07-26',
      completed: false,
      exercises: [
        { name: 'Deadlifts', sets: '', reps: '', weight: '', completed: false },
        { name: 'Overhead Press', sets: '', reps: '', weight: '', completed: false },
        { name: 'Pull-ups', sets: '', reps: '', weight: '', completed: false },
      ]
    },
    {
      id: 'workout-3',
      name: 'Full Body C', // Renamed for clarity as a template
      date: '2025-07-28',
      completed: false,
      exercises: [
        { name: 'Lunges', sets: '', reps: '', weight: '', completed: false },
        { name: 'Push-ups', sets: '', reps: '', weight: '', completed: false },
        { name: 'Plank', sets: '', reps: '', weight: '', completed: false },
      ]
    },
    // Example of a completed workout
    {
      id: 'workout-4',
      name: 'Full Body C (Completed)',
      date: '2025-07-20',
      completed: true,
      notes: 'Felt strong today, good session!',
      rpe: 8,
      exercises: [
        { name: 'Lunges', sets: '3', reps: '10', weight: '60', completed: true, volume: 1800 },
        { name: 'Push-ups', sets: '3', reps: '15', weight: 'BW', completed: true, volume: 0 }, // BW volume is 0
        { name: 'Plank', sets: '3', reps: '60s', weight: 'BW', completed: true, volume: 0 }, // BW volume is 0
      ]
    },
  ]));

  // New state for individual exercise history
  const [exerciseHistory, setExerciseHistory] = useState(() => loadFromLocalStorage('exerciseHistory', []));

  const [goals, setGoals] = useState(() => loadFromLocalStorage('goals', {
    steps: 10000,
    water: 3000, // ml
    calories: 2000, // new calorie goal
  }));

  // New state for daily combined tracking (steps, water, nutrition)
  const todayDate = new Date().toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(todayDate); // For daily tracking form
  const [dailySummaryHistory, setDailySummaryHistory] = useState(() => loadFromLocalStorage('dailySummaryHistory', []));

  // Temporary states for input fields on the Tracking tab, reflecting the selected date's data
  const [tempSteps, setTempSteps] = useState(0);
  const [tempWater, setTempWater] = useState(0);
  const [tempCalories, setTempCalories] = useState(0);
  const [tempFat, setTempFat] = useState(0);
  const [tempCarbs, setTempCarbs] = useState(0);
  const [tempProtein, setTempProtein] = useState(0);

  // States for BMI/BMR calculator
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male'); // 'male' or 'female'
  const [bmiResult, setBmiResult] = useState(null);
  const [bmrResult, setBmrResult] = useState(null);


  // State for recipes
  const [recipes, setRecipes] = useState(() => loadFromLocalStorage('recipes', [
    {
      id: 1,
      name: 'High Protein Chicken & Veggies',
      ingredients: ['200g Chicken Breast', '1 cup Broccoli', '1 cup Bell Peppers', '1 tbsp Olive Oil', 'Spices'],
      instructions: 'Cut chicken into cubes. Sauté chicken in olive oil with spices until cooked. Add chopped broccoli and bell peppers, cook until tender-crisp. Serve hot.',
      macros: { calories: 450, fat: 15, carbs: 20, protein: 50 }
    },
    {
      id: 2,
      name: 'Quick Berry Oatmeal',
      ingredients: ['1/2 cup Rolled Oats', '1 cup Water/Milk', '1/2 cup Mixed Berries', '1 scoop Protein Powder (optional)'],
      instructions: 'Combine oats and liquid in a pot, bring to boil, then simmer until cooked. Stir in berries and protein powder. Enjoy warm.',
      macros: { calories: 300, fat: 5, carbs: 45, protein: 25 }
    },
    {
      id: 3,
      name: 'Lean Beef Stir-fry',
      ingredients: ['150g Lean Beef Strips', '1 cup Mixed Stir-fry Veggies', '2 tbsp Soy Sauce (low sodium)', '1 tbsp Ginger', '1 tbsp Garlic'],
      instructions: 'Brown beef strips in a hot pan. Add veggies, ginger, and garlic, stir-fry until tender. Add soy sauce and cook for another minute. Serve with rice or quinoa.',
      macros: { calories: 400, fat: 12, carbs: 30, protein: 40 }
    }
  ]));

  // New state for other activities
  const [activityType, setActivityType] = useState('Running');
  const [activityDuration, setActivityDuration] = useState('');
  const [activityDistance, setActivityDistance] = useState('');
  const [activityNotes, setActivityNotes] = useState('');
  const [otherActivities, setOtherActivities] = useState(() => loadFromLocalStorage('otherActivities', []));

  // State for Workout Plan Generation Form
  const [newPlanStartDate, setNewPlanStartDate] = useState(todayDate);
  const [newPlanWeeks, setNewPlanWeeks] = useState(8);
  // New state to hold the dynamic day-workout pairs
  const [planDays, setPlanDays] = useState([
    { id: 0, day: '', workoutName: '' } // Initial empty row
  ]);

  // State for controlling the expansion of the workout plan generator
  const [isPlanGeneratorExpanded, setIsPlanGeneratorExpanded] = useState(false);

  // State for app version
  const [appVersion, setAppVersion] = useState(() => loadFromLocalStorage('appVersion', '1.0.0'));

  // State for Workout Completion Modal
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [selectedWorkoutForModal, setSelectedWorkoutForModal] = useState(null);
  const [workoutNotes, setWorkoutNotes] = useState('');
  const [workoutRPE, setWorkoutRPE] = useState('');

  // New state for Challenges
  const [challenges, setChallenges] = useState(() => loadFromLocalStorage('challenges', []));
  const [newChallengeType, setNewChallengeType] = useState('Pushups');
  const [newChallengeTarget, setNewChallengeTarget] = useState('');
  const [newChallengeDuration, setNewChallengeDuration] = useState('');
  const [newChallengeStartDate, setNewChallengeStartDate] = useState(todayDate);
  const [currentPushups, setCurrentPushups] = useState('');

  // New state for Achievements
  const [achievements, setAchievements] = useState(() => loadFromLocalStorage('achievements', []));

  // State for "More" dropdown menu
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef(null); // Ref for the "More" dropdown

  // New state for Mobility Exercises
  const [mobilityExercises, setMobilityExercises] = useState(() => loadFromLocalStorage('mobilityExercises', [
    {
      id: 'mob-1',
      name: 'Cat-Cow Stretch',
      description: 'Improves spinal flexibility and core strength.',
      instructions: [
        'Start on all fours, hands under shoulders, knees under hips.',
        'Inhale, drop your belly towards the mat, lift your chest and tailbone (Cow Pose).',
        'Exhale, round your spine towards the ceiling, tuck your chin to your chest (Cat Pose).',
        'Repeat 10-15 times.'
      ],
      duration: '5 minutes',
      targetAreas: ['Spine', 'Core'],
      completed: false // Added completed status
    },
    {
      id: 'mob-2',
      name: 'Pigeon Pose',
      description: 'Deep hip opener, stretches hip flexors and glutes.',
      instructions: [
        'Start in downward dog, bring right knee forward towards right wrist.',
        'Angle right shin for comfort, extend left leg straight back.',
        'Keep hips square. Fold forward over your front leg.',
        'Hold for 1-2 minutes per side.'
      ],
      duration: '4 minutes',
      targetAreas: ['Hips', 'Glutes', 'Hip Flexors'],
      completed: false
    },
    {
      id: 'mob-3',
      name: 'Thoracic Spine Rotation',
      description: 'Increases upper back mobility, great for desk workers.',
      instructions: [
        'Lie on your side, knees bent at 90 degrees, arms extended forward at shoulder height.',
        'Keep knees stacked. Rotate your top arm and torso open, trying to touch your shoulder blade to the floor.',
        'Follow your hand with your gaze.',
        'Repeat 8-10 times per side.'
      ],
      duration: '6 minutes',
      targetAreas: ['Thoracic Spine', 'Shoulders'],
      completed: false
    }
  ]));

  // New states for adding new mobility exercise
  const [newMobilityExerciseName, setNewMobilityExerciseName] = useState('');
  const [newMobilityExerciseDescription, setNewMobilityExerciseDescription] = useState('');
  const [newMobilityExerciseInstructions, setNewMobilityExerciseInstructions] = useState(''); // Comma-separated
  const [newMobilityExerciseDuration, setNewMobilityExerciseDuration] = useState('');
  const [newMobilityExerciseTargetAreas, setNewMobilityExerciseTargetAreas] = useState(''); // Comma-separated

  // New states for Mobility Routines
  const [mobilityRoutines, setMobilityRoutines] = useState(() => loadFromLocalStorage('mobilityRoutines', []));
  const [mobilityRoutineFilter, setMobilityRoutineFilter] = useState('upcoming');
  const [isRoutineGeneratorExpanded, setIsRoutineGeneratorExpanded] = useState(false);
  const [newRoutineName, setNewRoutineName] = useState('');
  const [newRoutineStartDate, setNewRoutineStartDate] = useState(todayDate);
  const [newRoutineWeeks, setNewRoutineWeeks] = useState(4);
  const [routineDays, setRoutineDays] = useState([
    { id: 0, day: '', exerciseIds: [] } // Initial empty row for routine day
  ]);


  // Effect to save data to local storage whenever state changes
  useEffect(() => {
    saveToLocalStorage('steps', steps); // Keep for dashboard quick display
  }, [steps]);

  useEffect(() => {
    saveToLocalStorage('water', water); // Keep for dashboard quick display
  }, [water]);

  useEffect(() => {
    saveToLocalStorage('bodyMeasurements', bodyMeasurements);
  }, [bodyMeasurements]);

  useEffect(() => {
    saveToLocalStorage('workouts', workouts);
  }, [workouts]);

  useEffect(() => {
    saveToLocalStorage('exerciseHistory', exerciseHistory);
  }, [exerciseHistory]);

  useEffect(() => {
    saveToLocalStorage('goals', goals);
  }, [goals]);

  // This useEffect updates the 'steps' and 'water' states for the dashboard display
  // based on the dailySummaryHistory.
  useEffect(() => {
    saveToLocalStorage('dailySummaryHistory', dailySummaryHistory);
    const todayEntry = dailySummaryHistory.find(entry => entry.date === todayDate);
    if (todayEntry) {
      setSteps(todayEntry.steps);
      setWater(todayEntry.water);
    } else {
      setSteps(0);
      setWater(0);
    }
  }, [dailySummaryHistory, todayDate]);

  useEffect(() => {
    saveToLocalStorage('recipes', recipes);
  }, [recipes]);

  useEffect(() => {
    saveToLocalStorage('otherActivities', otherActivities);
  }, [otherActivities]);

  useEffect(() => {
    saveToLocalStorage('challenges', challenges);
  }, [challenges]);

  useEffect(() => {
    saveToLocalStorage('achievements', achievements);
  }, [achievements]); // Save achievements to local storage

  useEffect(() => {
    saveToLocalStorage('mobilityExercises', mobilityExercises);
  }, [mobilityExercises]);

  useEffect(() => {
    saveToLocalStorage('mobilityRoutines', mobilityRoutines);
  }, [mobilityRoutines]);

  // Effect to load data for selectedDate into temporary states for the Tracking form
  useEffect(() => {
    const entryForSelectedDate = dailySummaryHistory.find(entry => entry.date === selectedDate);
    if (entryForSelectedDate) {
      setTempSteps(entryForSelectedDate.steps);
      setTempWater(entryForSelectedDate.water);
      setTempCalories(entryForSelectedDate.calories);
      setTempFat(entryForSelectedDate.fat);
      setTempCarbs(entryForSelectedDate.carbs);
      setTempProtein(entryForSelectedDate.protein);
    } else {
      // If no entry for selected date, reset temps to 0
      setTempSteps(0);
      setTempWater(0);
      setTempCalories(0);
      setTempFat(0);
      setTempCarbs(0);
      setTempProtein(0);
    }
  }, [selectedDate, dailySummaryHistory]);

  // Effect to save dark mode preference
  useEffect(() => {
    saveToLocalStorage('darkMode', darkMode);
  }, [darkMode]);

  // Effect to save app version
  useEffect(() => {
    saveToLocalStorage('appVersion', appVersion);
  }, [appVersion]);

  // Effect to close "More" menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setIsMoreMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  // Function to handle marking a workout as complete (all exercises completed)
  const handleWorkoutComplete = (workoutId) => {
    const workoutToComplete = workouts.find(w => w.id === workoutId);
    if (workoutToComplete && !workoutToComplete.completed) {
      setSelectedWorkoutForModal(workoutId);
      setWorkoutNotes(workoutToComplete.notes || ''); // Pre-fill if exists
      setWorkoutRPE(workoutToComplete.rpe || ''); // Pre-fill if exists
      setShowCompletionModal(true);
    } else {
      // If already completed, toggle back to incomplete
      setWorkouts(prevWorkouts => prevWorkouts.map(workout =>
        workout.id === workoutId
          ? { ...workout, completed: !workout.completed, notes: '', rpe: '' } // Clear notes/RPE on un-complete
          : workout
      ));
    }
  };

  // Function to handle changes in sets/reps/weight for an exercise
  const handleExerciseChange = (workoutId, exerciseName, field, value) => {
    setWorkouts(prevWorkouts =>
      prevWorkouts.map(workout =>
        workout.id === workoutId
          ? {
              ...workout,
              exercises: workout.exercises.map(exercise =>
                exercise.name === exerciseName
                  ? { ...exercise, [field]: value }
                  : exercise
              )
            }
          : workout
      )
    );
  };

  // Function to handle marking an individual exercise as complete
  const handleExerciseComplete = (workoutId, exerciseName) => {
    setWorkouts(prevWorkouts =>
      prevWorkouts.map(workout => {
        if (workout.id === workoutId) {
          const updatedExercises = workout.exercises.map(exercise => {
            if (exercise.name === exerciseName) {
              const newCompletedState = !exercise.completed;
              // Calculate volume only if weight is a number
              const exerciseWeight = parseFloat(exercise.weight);
              const volume = newCompletedState && !isNaN(exerciseWeight) && exercise.weight !== 'BW'
                ? (parseInt(exercise.sets) || 0) * (parseInt(exercise.reps) || 0) * exerciseWeight
                : 0;

              // If marking as complete, add to exercise history
              if (newCompletedState) {
                setExerciseHistory(prevHistory => [
                  ...prevHistory,
                  {
                    date: workout.date,
                    workoutName: workout.name,
                    exerciseName: exercise.name,
                    sets: exercise.sets,
                    reps: exercise.reps,
                    weight: exercise.weight,
                    volume: volume // Store calculated volume
                  }
                ]);
              }
              return { ...exercise, completed: newCompletedState, volume: volume };
            }
            return exercise;
          });
          return { ...workout, exercises: updatedExercises };
        }
        return workout;
      })
    );
  };

  // Function to add a new body measurement
  const handleAddMeasurement = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const weight = parseFloat(e.target.weight.value);
    const bfp = parseFloat(e.target.bfp.value);
    const chest = parseFloat(e.target.chest.value);
    const waist = parseFloat(e.target.waist.value);
    const hips = parseFloat(e.target.hips.value);
    const thigh = parseFloat(e.target.thigh.value);
    const arm = parseFloat(e.target.arm.value);


    if (date && !isNaN(weight) && !isNaN(bfp) && !isNaN(chest) && !isNaN(waist) && !isNaN(hips) && !isNaN(thigh) && !isNaN(arm)) {
      setBodyMeasurements(prevMeasurements => [...prevMeasurements, { date, weight, bfp, chest, waist, hips, thigh, arm }]);
      e.target.reset(); // Clear form
    } else {
      console.error("Invalid measurement input. Please fill all fields with valid numbers.");
    }
  };

  // Function to log daily summary (steps, water, nutrition)
  const handleLogDailySummary = () => {
    const existingEntryIndex = dailySummaryHistory.findIndex(entry => entry.date === selectedDate);

    const newEntry = {
      date: selectedDate,
      steps: tempSteps,
      water: tempWater, // tempWater is already parsed as int in onChange
      calories: tempCalories,
      fat: tempFat,
      carbs: tempCarbs,
      protein: tempProtein,
    };

    if (existingEntryIndex > -1) {
      // Update existing entry
      setDailySummaryHistory(prevHistory => prevHistory.map((entry, index) =>
        index === existingEntryIndex ? newEntry : entry
      ));
    } else {
      // Add new entry
      setDailySummaryHistory(prevHistory => [...prevHistory, newEntry]);
    }

    // Update the 'steps' and 'water' states if the selected date is today for dashboard display
    if (selectedDate === todayDate) {
      setSteps(tempSteps);
      setWater(tempWater);
    }
  };

  // Function to log other activities
  const handleAddActivity = (e) => {
    e.preventDefault();
    const newActivity = {
      id: crypto.randomUUID(), // Unique ID for activity
      date: e.target.date.value, // Use the date from the form
      type: activityType,
      duration: parseInt(activityDuration) || 0,
      distance: parseFloat(activityDistance) || 0,
      notes: activityNotes,
    };

    setOtherActivities(prevActivities => [...prevActivities, newActivity]);
    // Clear form fields
    setActivityType('Running');
    setActivityDuration('');
    setActivityDistance('');
    setActivityNotes('');
  };


  // Function to export all data to a JSON file
  const exportData = () => {
    const data = {
      bodyMeasurements,
      workouts,
      goals,
      dailySummaryHistory, // Export the combined history
      recipes,
      otherActivities,
      exerciseHistory, // Export exercise history
      challenges, // Export challenges
      achievements, // Export achievements
      appVersion, // Export app version
      mobilityExercises, // Export mobility exercises
      mobilityRoutines, // Export mobility routines
    };
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fit-track-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Get today's summary for dashboard display
  const todaySummary = dailySummaryHistory.find(entry => entry.date === todayDate) || { steps: 0, water: 0, calories: 0, fat: 0, carbs: 0, protein: 0 };
  const todayActivities = otherActivities.filter(activity => activity.date === todayDate);
  const totalTodayActivityDuration = todayActivities.reduce((sum, activity) => sum + activity.duration, 0);
  const totalTodayActivityDistance = todayActivities.reduce((sum, activity) => sum + activity.distance, 0);

  // Prepare data for charts (last 7 days)
  const getChartData = (history, valueKey, goalKey) => {
    const data = [];
    for (let i = 6; i >= 0; i--) { // Last 7 days including today
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateString = d.toISOString().slice(0, 10);
      const entry = history.find(item => item.date === dateString);
      data.push({
        date: i === 0 ? 'Today' : dateString.substring(5), // Show MM-DD for past days
        value: entry ? entry[valueKey] : 0, // Correctly access property using valueKey
        goal: goals[goalKey],
      });
    }
    return data;
  };

  const stepsChartData = getChartData(dailySummaryHistory, 'steps', 'steps'); // Pass 'steps' as valueKey
  const waterChartData = getChartData(dailySummaryHistory, 'water', 'water'); // Pass 'water' as valueKey

  // Prepare data for Body Measurement charts
  const bodyMeasurementChartData = bodyMeasurements
    .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date ascending for chart display
    .map(m => ({
      date: m.date,
      weight: m.weight,
      bfp: m.bfp
    }));

  // Calculate progress percentages for dashboard
  const stepsProgress = (steps / goals.steps) * 100;
  const waterProgress = (water / goals.water) * 100;


  // Get unique workout names for the plan generation dropdowns
  const uniqueWorkoutNames = [...new Set(workouts.map(w => w.name))];

  // Day of week mapping for dropdown
  const daysOfWeek = [
    { value: 0, label: 'Sunday' },
    { value: 1, label: 'Monday' },
    { value: 2, label: 'Tuesday' },
    { value: 3, label: 'Wednesday' },
    { value: 4, label: 'Thursday' },
    { value: 5, label: 'Friday' },
    { value: 6, label: 'Saturday' },
  ];

  // Handlers for dynamic plan days
  const handleAddPlanDay = () => {
    setPlanDays(prev => [...prev, { id: prev.length, day: '', workoutName: '' }]);
  };

  const handleRemovePlanDay = (idToRemove) => {
    setPlanDays(prev => prev.filter(day => day.id !== idToRemove));
  };

  const handlePlanDayChange = (id, field, value) => {
    setPlanDays(prev => prev.map(day =>
      day.id === id ? { ...day, [field]: value } : day
    ));
  };


  // Function to generate workout plan
  const handleGenerateWorkoutPlan = (e) => {
    e.preventDefault();

    const generatedWorkouts = [];
    const startDateObj = new Date(newPlanStartDate + 'T00:00:00'); // Ensure date is parsed correctly in local time

    planDays.forEach(planDay => {
      if (!planDay.day || !planDay.workoutName) return; // Skip incomplete entries

      const dayOfWeekIndex = parseInt(planDay.day); // 0 for Sunday, 1 for Monday, etc.
      const templateWorkout = workouts.find(w => w.name === planDay.workoutName);

      if (!templateWorkout) return; // Skip if workout template not found

      for (let i = 0; i < newPlanWeeks; i++) {
        const currentDate = new Date(startDateObj);
        // Calculate the date for the specific day of the week in the current week of the plan
        // (dayOfWeekIndex - currentDate.getDay() + 7) % 7 calculates days to add to reach target day of week
        currentDate.setDate(startDateObj.getDate() + (i * 7) + (dayOfWeekIndex - startDateObj.getDay() + 7) % 7);

        const formattedDate = currentDate.toISOString().slice(0, 10);

        const newWorkout = {
          id: crypto.randomUUID(), // Generate a unique ID
          name: templateWorkout.name,
          date: formattedDate,
          completed: false,
          notes: '', // Initialize notes
          rpe: '', // Initialize RPE
          exercises: JSON.parse(JSON.stringify(templateWorkout.exercises)) // Deep copy exercises
        };

        // Prevent adding duplicates for the exact same workout name on the same date
        const isDuplicate = workouts.some(
          existingWorkout => existingWorkout.name === newWorkout.name && existingWorkout.date === newWorkout.date
        );

        if (!isDuplicate) {
          generatedWorkouts.push(newWorkout);
        }
      }
    });

    if (generatedWorkouts.length > 0) {
      setWorkouts(prevWorkouts => [...prevWorkouts, ...generatedWorkouts]);
      // Using a simple message box instead of alert()
      const messageBox = document.createElement('div');
      messageBox.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
      messageBox.innerHTML = `
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center max-w-sm mx-auto">
          <p class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Generated ${generatedWorkouts.length} new workout(s)!</p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
      `;
      document.body.appendChild(messageBox);
    } else {
      const messageBox = document.createElement('div');
      messageBox.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
      messageBox.innerHTML = `
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center max-w-sm mx-auto">
          <p class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">No new workouts generated. Please ensure you've selected days and workouts, and that they aren't duplicates for existing entries.</p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
      `;
      document.body.appendChild(messageBox);
    }
  };

  // BMI Calculation
  const calculateBMI = () => {
    const heightM = parseFloat(heightCm) / 100;
    const weight = parseFloat(weightKg);
    if (heightM > 0 && weight > 0) {
      const bmi = weight / (heightM * heightM);
      setBmiResult(bmi.toFixed(2));
    } else {
      setBmiResult(null);
    }
  };

  // BMR Calculation (Mifflin-St Jeor Equation)
  const calculateBMR = () => {
    const weight = parseFloat(weightKg);
    const height = parseFloat(heightCm);
    const ageVal = parseInt(age);

    if (weight > 0 && height > 0 && ageVal > 0) {
      let bmr;
      if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * ageVal) + 5;
      } else { // female
        bmr = (10 * weight) + (6.25 * height) - (5 * ageVal) - 161;
      }
      setBmrResult(bmr.toFixed(0));
    } else {
      setBmrResult(null);
    }
  };

  // Function to format date for display
  const formatDateForDisplay = (dateString) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today to start of day

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const workoutDate = new Date(dateString + 'T00:00:00'); // Ensure workoutDate is also normalized

    if (workoutDate.getTime() === today.getTime()) {
      return 'due today';
    } else if (workoutDate.getTime() === tomorrow.getTime()) {
      return 'scheduled for tomorrow, ' + new Intl.DateTimeFormat('en-US', { weekday: 'long', day: 'numeric', month: 'long' }).format(workoutDate).toLowerCase();
    } else {
      return 'scheduled for ' + new Intl.DateTimeFormat('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(workoutDate);
    }
  };

  // Function to get BMI category and badge style
  const getBMICategory = (bmi) => {
    if (bmi === null) {
      return { text: '', className: '' };
    }
    if (bmi < 18.5) {
      return { text: 'Underweight', className: 'bg-yellow-500 text-white' };
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return { text: 'Healthy Weight', className: 'bg-green-500 text-white' };
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      return { text: 'Overweight', className: 'bg-orange-500 text-white' };
    } else {
      return { text: 'Obese', className: 'bg-red-500 text-white' };
    }
  };

  // Function to handle modal submission for workout completion
  const handleModalSubmit = () => {
    setWorkouts(prevWorkouts => prevWorkouts.map(workout =>
      workout.id === selectedWorkoutForModal
        ? { ...workout, completed: true, notes: workoutNotes, rpe: parseInt(workoutRPE) || null }
        : workout
    ));
    setShowCompletionModal(false);
    setSelectedWorkoutForModal(null);
    setWorkoutNotes('');
    setWorkoutRPE('');
  };

  // Function to handle modal cancellation
  const handleModalCancel = () => {
    setShowCompletionModal(false);
    setSelectedWorkoutForModal(null);
    setWorkoutNotes('');
    setWorkoutRPE('');
  };

  // Function to calculate total volume for a workout
  const calculateWorkoutTotalVolume = (workout) => {
    return workout.exercises.reduce((totalVolume, exercise) => {
      // Only sum volume for exercises that have a numeric weight and are completed
      if (exercise.completed && exercise.weight && exercise.weight !== 'BW' && !isNaN(parseFloat(exercise.weight))) {
        return totalVolume + ((parseInt(exercise.sets) || 0) * (parseInt(exercise.reps) || 0) * (parseFloat(exercise.weight) || 0));
      }
      return totalVolume;
    }, 0);
  };

  // --- Challenge Functions ---
  const handleCreateChallenge = (e) => {
    e.preventDefault();
    if (!newChallengeType || !newChallengeTarget || !newChallengeDuration || !newChallengeStartDate) {
      // Using a simple message box instead of alert()
      const messageBox = document.createElement('div');
      messageBox.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
      messageBox.innerHTML = `
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center max-w-sm mx-auto">
          <p class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Please fill all challenge fields.</p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
      `;
      document.body.appendChild(messageBox);
      return;
    }

    const newChallenge = {
      id: crypto.randomUUID(),
      type: newChallengeType,
      target: parseFloat(newChallengeTarget),
      durationDays: parseInt(newChallengeDuration),
      startDate: newChallengeStartDate,
      status: 'active',
      dailyProgress: {}, // For pushups: { 'YYYY-MM-DD': count }
      // For running/cycling, progress is calculated from otherActivities
    };

    setChallenges(prev => [...prev, newChallenge]);
    // Reset form
    setNewChallengeType('Pushups');
    setNewChallengeTarget('');
    setNewChallengeDuration('');
    setNewChallengeStartDate(todayDate);
  };

  const handleLogPushups = (challengeId) => {
    if (currentPushups === '' || isNaN(parseInt(currentPushups))) {
      // Using a simple message box instead of alert()
      const messageBox = document.createElement('div');
      messageBox.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
      messageBox.innerHTML = `
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center max-w-sm mx-auto">
          <p class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Please enter a valid number of pushups.</p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
      `;
      document.body.appendChild(messageBox);
      return;
    }

    setChallenges(prevChallenges => prevChallenges.map(challenge => {
      if (challenge.id === challengeId && challenge.type === 'Pushups') {
        const updatedDailyProgress = {
          ...challenge.dailyProgress,
          [todayDate]: (challenge.dailyProgress[todayDate] || 0) + parseInt(currentPushups)
        };
        return { ...challenge, dailyProgress: updatedDailyProgress };
      }
      return challenge;
    }));
    setCurrentPushups(''); // Clear input after logging
  };

  const getChallengeProgress = (challenge) => {
    const start = new Date(challenge.startDate + 'T00:00:00');
    const today = new Date(todayDate + 'T00:00:00');
    const elapsedDays = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1; // +1 to include start day

    const currentDay = Math.min(elapsedDays, challenge.durationDays);
    const totalDays = challenge.durationDays;

    let currentTotal = 0;
    let dailyTargetMetCount = 0;

    if (challenge.type === 'Pushups') {
      for (let i = 0; i < elapsedDays; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        const dateString = d.toISOString().slice(0, 10);
        const dailyCount = challenge.dailyProgress[dateString] || 0;
        currentTotal += dailyCount;
        if (dailyCount >= challenge.target) {
          dailyTargetMetCount++;
        }
      }
      // Calculate overall progress based on target * totalDays
      const overallTarget = challenge.target * challenge.durationDays;
      const progressPercentage = (currentTotal / overallTarget) * 100;

      return {
        currentDay,
        totalDays,
        currentTotal: currentTotal,
        dailyTargetMetCount,
        progressPercentage: Math.min(100, progressPercentage).toFixed(1),
        statusText: `${currentTotal} / ${overallTarget} total`,
        dailyStatus: challenge.dailyProgress[todayDate] >= challenge.target ? 'Daily Target Met!' : `Today: ${challenge.dailyProgress[todayDate] || 0}/${challenge.target}`,
        isComplete: currentTotal >= overallTarget && elapsedDays >= totalDays,
        isFailed: elapsedDays > totalDays && currentTotal < overallTarget,
      };

    } else if (challenge.type === 'Running' || challenge.type === 'Cycling') {
      const relevantActivities = otherActivities.filter(activity => {
        const activityDate = new Date(activity.date + 'T00:00:00');
        return (
          activityDate >= start &&
          activityDate <= today &&
          activity.type === challenge.type
        );
      });
      currentTotal = relevantActivities.reduce((sum, activity) => sum + activity.distance, 0);

      // Calculate daily average target met count
      let dailyDistanceMetCount = 0;
      for (let i = 0; i < elapsedDays; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        const dateString = d.toISOString().slice(0, 10);
        const dailyDistance = relevantActivities
          .filter(act => act.date === dateString)
          .reduce((sum, act) => sum + act.distance, 0);
        if (dailyDistance >= challenge.target) {
          dailyDistanceMetCount++;
        }
      }

      const overallTarget = challenge.target * challenge.durationDays;
      const progressPercentage = (currentTotal / overallTarget) * 100;

      return {
        currentDay,
        totalDays,
        currentTotal: currentTotal.toFixed(1),
        dailyTargetMetCount: dailyDistanceMetCount,
        progressPercentage: Math.min(100, progressPercentage).toFixed(1),
        statusText: `${currentTotal.toFixed(1)} km / ${overallTarget.toFixed(1)} km total`,
        dailyStatus: relevantActivities.filter(act => act.date === todayDate).reduce((sum, act) => sum + act.distance, 0) >= challenge.target ? 'Daily Target Met!' : `Today: ${relevantActivities.filter(act => act.date === todayDate).reduce((sum, act) => sum + act.distance, 0).toFixed(1)}/${challenge.target} km`,
        isComplete: currentTotal >= overallTarget && elapsedDays >= totalDays,
        isFailed: elapsedDays > totalDays && currentTotal < overallTarget,
      };
    }
    return {};
  };

  const handleUpdateChallengeStatus = (challengeId, newStatus) => {
    setChallenges(prevChallenges => prevChallenges.map(challenge =>
      challenge.id === challengeId ? { ...challenge, status: newStatus } : challenge
    ));
  };

  // --- Mobility Functions ---

  const handleAddMobilityExercise = (e) => {
    e.preventDefault();
    if (!newMobilityExerciseName || !newMobilityExerciseInstructions || !newMobilityExerciseDuration || !newMobilityExerciseTargetAreas) {
      const messageBox = document.createElement('div');
      messageBox.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
      messageBox.innerHTML = `
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center max-w-sm mx-auto">
          <p class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Please fill all fields for the new mobility exercise.</p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
      `;
      document.body.appendChild(messageBox);
      return;
    }

    const newExercise = {
      id: crypto.randomUUID(),
      name: newMobilityExerciseName,
      description: newMobilityExerciseDescription,
      instructions: newMobilityExerciseInstructions.split(',').map(s => s.trim()).filter(s => s),
      duration: newMobilityExerciseDuration,
      targetAreas: newMobilityExerciseTargetAreas.split(',').map(s => s.trim()).filter(s => s),
      completed: false,
    };

    setMobilityExercises(prev => [...prev, newExercise]);
    setNewMobilityExerciseName('');
    setNewMobilityExerciseDescription('');
    setNewMobilityExerciseInstructions('');
    setNewMobilityExerciseDuration('');
    setNewMobilityExerciseTargetAreas('');
  };

  const handleMobilityExerciseComplete = (exerciseId) => {
    setMobilityExercises(prevExercises => prevExercises.map(exercise =>
      exercise.id === exerciseId ? { ...exercise, completed: !exercise.completed } : exercise
    ));
  };

  // Handlers for dynamic routine days
  const handleAddRoutineDay = () => {
    setRoutineDays(prev => [...prev, { id: prev.length, day: '', exerciseIds: [] }]);
  };

  const handleRemoveRoutineDay = (idToRemove) => {
    setRoutineDays(prev => prev.filter(day => day.id !== idToRemove));
  };

  const handleRoutineDayChange = (id, field, value) => {
    setRoutineDays(prev => prev.map(day => {
      if (day.id === id) {
        if (field === 'exerciseIds') {
          // Value is an array of selected exercise IDs
          return { ...day, [field]: value };
        }
        return { ...day, [field]: value };
      }
      return day;
    }));
  };

  const handleCreateMobilityRoutine = (e) => {
    e.preventDefault();

    const generatedRoutines = [];
    const startDateObj = new Date(newRoutineStartDate + 'T00:00:00');

    routineDays.forEach(routineDay => {
      if (!routineDay.day || routineDay.exerciseIds.length === 0) return;

      const dayOfWeekIndex = parseInt(routineDay.day);

      for (let i = 0; i < newRoutineWeeks; i++) {
        const currentDate = new Date(startDateObj);
        currentDate.setDate(startDateObj.getDate() + (i * 7) + (dayOfWeekIndex - startDateObj.getDay() + 7) % 7);
        const formattedDate = currentDate.toISOString().slice(0, 10);

        const newRoutine = {
          id: crypto.randomUUID(),
          name: newRoutineName || `Mobility Routine - Week ${i + 1}`,
          date: formattedDate,
          completed: false,
          exercises: routineDay.exerciseIds.map(exId => {
            const exercise = mobilityExercises.find(me => me.id === exId);
            return exercise ? {
              exerciseId: exercise.id,
              name: exercise.name, // Store name for easier display
              duration: exercise.duration, // Copy duration from original
              // Add any routine-specific overrides here if needed
            } : null;
          }).filter(Boolean), // Filter out nulls if exercise not found
        };

        const isDuplicate = mobilityRoutines.some(
          existingRoutine => existingRoutine.name === newRoutine.name && existingRoutine.date === newRoutine.date
        );

        if (!isDuplicate) {
          generatedRoutines.push(newRoutine);
        }
      }
    });

    if (generatedRoutines.length > 0) {
      setMobilityRoutines(prev => [...prev, ...generatedRoutines]);
      const messageBox = document.createElement('div');
      messageBox.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
      messageBox.innerHTML = `
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center max-w-sm mx-auto">
          <p class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Generated ${generatedRoutines.length} new mobility routine(s)!</p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
      `;
      document.body.appendChild(messageBox);
      setNewRoutineName('');
      setRoutineDays([{ id: 0, day: '', exerciseIds: [] }]); // Reset routine days
    } else {
      const messageBox = document.createElement('div');
      messageBox.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
      messageBox.innerHTML = `
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center max-w-sm mx-auto">
          <p class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">No new mobility routines generated. Please ensure you've selected days and exercises, and that they aren't duplicates for existing entries.</p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
      `;
      document.body.appendChild(messageBox);
    }
  };

  const handleMobilityRoutineComplete = (routineId) => {
    setMobilityRoutines(prevRoutines => prevRoutines.map(routine =>
      routine.id === routineId ? { ...routine, completed: !routine.completed } : routine
    ));
  };


  // --- Achievement Logic ---
  const achievementDefinitions = [
    // Workout Milestones
    { id: 'workout-1', name: 'First Step', description: 'Complete your first workout', type: 'workouts', threshold: 1 },
    { id: 'workout-5', name: 'Workout Achiever', description: 'Complete 5 workouts', type: 'workouts', threshold: 5 },
    { id: 'workout-10', name: 'Workout Warrior I', description: 'Complete 10 workouts', type: 'workouts', threshold: 10 },
    { id: 'workout-50', name: 'Workout Warrior II', description: 'Complete 50 workouts', type: 'workouts', threshold: 50 },
    { id: 'workout-100', name: 'Workout Master', description: 'Complete 100 workouts', type: 'workouts', threshold: 100 },
    // Activity Milestones
    { id: 'activity-1', name: 'Active Beginner', description: 'Log your first other activity', type: 'activities', threshold: 1 },
    { id: 'activity-10', name: 'Activity Enthusiast I', description: 'Log 10 other activities', type: 'activities', threshold: 10 },
    { id: 'activity-50', name: 'Activity Enthusiast II', description: 'Log 50 other activities', type: 'activities', threshold: 50 },
    { id: 'activity-100', name: 'Activity Addict', description: 'Log 100 other activities', type: 'activities', threshold: 100 },
    // Pushup Milestones
    { id: 'pushup-100', name: 'Pushup Beginner', description: 'Log a total of 100 pushups in challenges', type: 'pushups', threshold: 100 },
    { id: 'pushup-500', name: 'Pushup Pro', description: 'Log a total of 500 pushups in challenges', type: 'pushups', threshold: 500 },
    { id: 'pushup-1000', name: 'Pushup King/Queen', description: 'Log a total of 1000 pushups in challenges', type: 'pushups', threshold: 1000 },
    // Running Milestones
    { id: 'running-1km', name: 'First Run', description: 'Run a total of 1 km', type: 'running', threshold: 1 },
    { id: 'running-50km', name: 'Runner Novice', description: 'Run a total of 50 km', type: 'running', threshold: 50 },
    { id: 'running-250km', name: 'Road Runner', description: 'Run a total of 250 km', type: 'running', threshold: 250 },
    { id: 'running-500km', name: 'Marathoner', description: 'Run a total of 500 km', type: 'running', threshold: 500 },
    // Cycling Milestones
    { id: 'cycling-1km', name: 'First Ride', description: 'Cycle a total of 1 km', type: 'cycling', threshold: 1 },
    { id: 'cycling-50km', name: 'Cyclist Beginner', description: 'Cycle a total of 50 km', type: 'cycling', threshold: 50 },
    { id: 'cycling-250km', name: 'Bike Commuter', description: 'Cycle a total of 250 km', type: 'cycling', threshold: 250 },
    { id: 'cycling-500km', name: 'Tour de Force', description: 'Cycle a total of 500 km', type: 'cycling', threshold: 500 },
    // Mobility Milestones
    { id: 'mobility-1', name: 'First Stretch', description: 'Complete your first mobility exercise', type: 'mobility_exercises', threshold: 1 },
    { id: 'mobility-10', name: 'Flexible Beginner', description: 'Complete 10 mobility exercises', type: 'mobility_exercises', threshold: 10 },
    { id: 'mobility-routine-1', name: 'Routine Starter', description: 'Complete your first mobility routine', type: 'mobility_routines', threshold: 1 },
    { id: 'mobility-routine-5', name: 'Routine Master', description: 'Complete 5 mobility routines', type: 'mobility_routines', threshold: 5 },
  ];

  useEffect(() => {
    const currentUnlockedAchievementIds = new Set(achievements.map(a => a.id));
    let newAchievementsToUnlock = [];

    // Calculate totals for various metrics
    const totalCompletedWorkouts = workouts.filter(w => w.completed).length;
    const totalActivitiesLogged = otherActivities.length;
    const totalPushupsLogged = challenges.reduce((sum, challenge) => {
      if (challenge.type === 'Pushups') {
        return sum + Object.values(challenge.dailyProgress).reduce((dailySum, count) => dailySum + count, 0);
      }
      return sum;
    }, 0);
    const totalRunningDistance = otherActivities.filter(act => act.type === 'Running').reduce((sum, act) => sum + act.distance, 0);
    const totalCyclingDistance = otherActivities.filter(act => act.type === 'Cycling').reduce((sum, act) => sum + act.distance, 0);
    const totalCompletedMobilityExercises = mobilityExercises.filter(ex => ex.completed).length;
    const totalCompletedMobilityRoutines = mobilityRoutines.filter(rt => rt.completed).length;


    achievementDefinitions.forEach(achievement => {
      // Only check if not already unlocked
      if (!currentUnlockedAchievementIds.has(achievement.id)) {
        let currentProgress = 0;
        switch (achievement.type) {
          case 'workouts':
            currentProgress = totalCompletedWorkouts;
            break;
          case 'activities':
            currentProgress = totalActivitiesLogged;
            break;
          case 'pushups':
            currentProgress = totalPushupsLogged;
            break;
          case 'running':
            currentProgress = totalRunningDistance;
            break;
          case 'cycling':
            currentProgress = totalCyclingDistance;
            break;
          case 'mobility_exercises':
            currentProgress = totalCompletedMobilityExercises;
            break;
          case 'mobility_routines':
            currentProgress = totalCompletedMobilityRoutines;
            break;
          default:
            break;
        }

        if (currentProgress >= achievement.threshold) {
          newAchievementsToUnlock.push({
            id: achievement.id,
            name: achievement.name,
            description: achievement.description,
            unlockedDate: todayDate,
          });
        }
      }
    });

    if (newAchievementsToUnlock.length > 0) {
      setAchievements(prevAchievements => [...prevAchievements, ...newAchievementsToUnlock]);

      // Show notification for each new achievement
      newAchievementsToUnlock.forEach(unlocked => {
        const messageBox = document.createElement('div');
        messageBox.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
        messageBox.innerHTML = `
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center max-w-sm mx-auto">
            <p class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Achievement Unlocked!</p>
            <p class="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">${unlocked.name}</p>
            <p class="text-gray-600 dark:text-gray-300 mb-4">${unlocked.description}</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onclick="this.parentElement.parentElement.remove()">Awesome!</button>
          </div>
        `;
        document.body.appendChild(messageBox);
      });
    }
  }, [workouts, otherActivities, challenges, mobilityExercises, mobilityRoutines, todayDate]); // Removed achievements from dependencies to prevent infinite loop.


  // Function to render the active content based on the tab
  const renderContent = () => {
    // Get BMI category and class for styling
    const bmiCategory = getBMICategory(bmiResult);

    switch (activeTab) {
      case 'dashboard':
        // Filter for upcoming workouts
        const upcomingWorkouts = workouts
          .filter(w => !w.completed && new Date(w.date) >= new Date(new Date().setHours(0,0,0,0)))
          .sort((a, b) => new Date(a.date) - new Date(b.date));

        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Dashboard</h2>

            {/* Welcome and Quick Log Card (Now at the top) */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8 transition-all duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Welcome Back!</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                Here's a quick overview of your progress today.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg flex items-center justify-between">
                  <span className="text-blue-700 dark:text-blue-200 font-medium">Steps:</span>
                  <span className="text-blue-800 dark:text-blue-100 font-bold">{todaySummary.steps} / {goals.steps}</span>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900 p-4 rounded-lg flex items-center justify-between">
                  <span className="text-teal-700 dark:text-teal-200 font-medium">Water:</span>
                  <span className="text-teal-800 dark:text-teal-100 font-bold">{(todaySummary.water / 1000).toFixed(1)} L / {(goals.water / 1000).toFixed(1)} L</span>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg flex items-center justify-between">
                  <span className="text-purple-700 dark:text-purple-200 font-medium">Calories:</span>
                  <span className="text-purple-800 dark:text-purple-100 font-bold">{todaySummary.calories} / {goals.calories} kcal</span>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('tracking')}
                className="px-6 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md w-full"
              >
                Log Your Daily Progress
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Daily Summary Card - Content moved to the top card */}
              {/* Upcoming Workout Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Upcoming Workout</h3>
                {upcomingWorkouts.length > 0 ? (
                  upcomingWorkouts.slice(0, 1).map(workout => (
                    <div key={workout.id} className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                      <p className="font-medium text-blue-700 dark:text-blue-200">{workout.name} {formatDateForDisplay(workout.date)}</p>
                      <button
                        onClick={() => setActiveTab('workouts')}
                        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md"
                      >
                        View Workout
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">No upcoming workouts.</p>
                )}
              </div>

              {/* Body Measurements Status */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Body Measurements Status</h3>
                {bodyMeasurements.length > 0 ? (
                  <div className="text-gray-600 dark:text-gray-300">
                    <p>Last recorded on: <span className="font-bold">{bodyMeasurements[bodyMeasurements.length - 1].date}</span></p>
                    <p>Weight: <span className="font-bold">{bodyMeasurements[bodyMeasurements.length - 1].weight} kg</span></p>
                    <p>Body Fat %: <span className="font-bold">{bodyMeasurements[bodyMeasurements.length - 1].bfp}%</span></p>
                    <p>Waist: <span className="font-bold">{bodyMeasurements[bodyMeasurements.length - 1].waist} cm</span></p>
                    <button
                      onClick={() => setActiveTab('tracking')}
                      className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md"
                    >
                      View All / Add New
                    </button>
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">No measurements recorded yet. Go to 'Tracking' to add your initial measurements.</p>
                )}
              </div>

              {/* Goals at a Glance Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Goals at a Glance</h3>
                <div className="text-gray-600 dark:text-gray-300 space-y-2">
                  <p>Daily Steps: <span className="font-bold text-indigo-600 dark:text-indigo-400">{goals.steps}</span></p>
                  <p>Daily Water: <span className="font-bold text-indigo-600 dark:text-indigo-400">{(goals.water / 1000).toFixed(1)} L</span></p>
                  <p>Daily Calories: <span className="font-bold text-indigo-600 dark:text-indigo-400">{goals.calories} kcal</span></p>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md"
                  >
                    Adjust Goals
                  </button>
                </div>
              </div>

              {/* Today's Activities Summary Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Today's Activities</h3>
                {totalTodayActivityDuration > 0 || totalTodayActivityDistance > 0 ? (
                  <div className="text-gray-600 dark:text-gray-300">
                    <p>Total Duration: <span className="font-bold text-blue-600 dark:text-blue-400">{totalTodayActivityDuration} min</span></p>
                    {totalTodayActivityDistance > 0 && <p>Total Distance: <span className="font-bold text-blue-600 dark:text-blue-400">{totalTodayActivityDistance.toFixed(1)} km</span></p>}
                    <button
                      onClick={() => setActiveTab('activities')}
                      className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md"
                    >
                      View All Activities
                    </button>
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">No activities logged today. Go to 'Activities' to add one!</p>
                )}
              </div>

            </div>
          </div>
        );

      case 'workouts':
        // Filter workouts based on the current workoutFilter state
        const filteredWorkouts = workouts.filter(workout => {
          if (workoutFilter === 'upcoming') {
            return !workout.completed && new Date(workout.date) >= new Date(new Date().setHours(0,0,0,0));
          } else if (workoutFilter === 'completed') {
            return workout.completed;
          }
          return true; // Should not happen with current filters
        }).sort((a, b) => new Date(a.date) - new Date(b.date)); // Always sort by date

        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Scheduled Workouts</h2>

            {/* Workout Plan Generation Form - Now expandable */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8 transition-all duration-300 ease-in-out">
              <div
                className="flex justify-between items-center cursor-pointer pb-4 mb-4 border-b border-gray-200 dark:border-gray-700"
                onClick={() => setIsPlanGeneratorExpanded(!isPlanGeneratorExpanded)}
              >
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Generate Workout Plan</h3>
                <Icon
                  name="ChevronDown"
                  size={24}
                  color={darkMode ? '#cbd5e0' : '#4a5568'}
                  className={`transform transition-transform duration-300 ${isPlanGeneratorExpanded ? 'rotate-180' : ''}`}
                />
              </div>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isPlanGeneratorExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <form onSubmit={handleGenerateWorkoutPlan} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="plan-start-date" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Start Date:</label>
                      <input
                        type="date"
                        id="plan-start-date"
                        value={newPlanStartDate}
                        onChange={(e) => setNewPlanStartDate(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                    <div>
                      <label htmlFor="plan-weeks" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Number of Weeks:</label>
                      <input
                        type="number"
                        id="plan-weeks"
                        value={newPlanWeeks}
                        onChange={(e) => setNewPlanWeeks(parseInt(e.target.value) || 1)}
                        min="1"
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Assign Workouts to Days:</h4>
                    {planDays.map((planDay, index) => (
                      <div key={planDay.id} className="flex flex-col sm:flex-row items-center gap-3">
                        <select
                          value={planDay.day}
                          onChange={(e) => handlePlanDayChange(planDay.id, 'day', e.target.value)}
                          className="w-full sm:w-1/3 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        >
                          <option value="">-- Select Day --</option>
                          {daysOfWeek.map(day => (
                            <option key={day.value} value={day.value}>{day.label}</option>
                          ))}
                        </select>
                        <select
                          value={planDay.workoutName}
                          onChange={(e) => handlePlanDayChange(planDay.id, 'workoutName', e.target.value)}
                          className="w-full sm:w-2/3 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        >
                          <option value="">-- Select Workout --</option>
                          {uniqueWorkoutNames.map(name => (
                            <option key={name} value={name}>{name}</option>
                          ))}
                        </select>
                        {planDays.length > 1 && ( // Only show remove button if more than one row
                          <button
                            type="button"
                            onClick={() => handleRemovePlanDay(planDay.id)}
                            className="flex-shrink-0 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                            title="Remove this day"
                          >
                            X
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={handleAddPlanDay}
                      className="mt-3 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md"
                    >
                      + Add Day
                    </button>
                  </div>

                  <div className="flex justify-end">
                    <button type="submit"
                            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md">
                      Generate Plan
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Workout Filter Buttons */}
            <div className="flex justify-center mb-6 space-x-4">
              <button
                onClick={() => setWorkoutFilter('upcoming')}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-md ${
                  workoutFilter === 'upcoming'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Upcoming Workouts
              </button>
              <button
                onClick={() => setWorkoutFilter('completed')}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-md ${
                  workoutFilter === 'completed'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Completed Workouts
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">
              {filteredWorkouts.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300 text-center py-4">
                  {workoutFilter === 'upcoming' ? 'No upcoming workouts.' : 'No completed workouts yet.'}
                </p>
              ) : (
                <ul className="space-y-6">
                  {filteredWorkouts.map(workout => {
                    // Determine if the workout is due today
                    const isDueToday = workout.date === todayDate;
                    const cardClasses = `p-6 rounded-lg shadow-sm transition-all duration-300 ease-in-out ${
                      isDueToday
                        ? 'bg-indigo-100 dark:bg-indigo-900 border-2 border-indigo-500 dark:border-indigo-400'
                        : 'bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600'
                    }`;

                    const totalWorkoutVolume = calculateWorkoutTotalVolume(workout);

                    return (
                      <li key={workout.id} className={cardClasses}>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 sm:mb-0">
                            {workout.name} {formatDateForDisplay(workout.date)}
                            {isDueToday && (
                              <span className="ml-3 px-3 py-1 text-sm font-bold rounded-full bg-indigo-500 text-white">
                                DUE TODAY!
                              </span>
                            )}
                          </h3>
                          <button
                            onClick={() => handleWorkoutComplete(workout.id)}
                            className={`px-4 py-2 rounded-md font-medium transition duration-200 ease-in-out shadow-sm ${
                              workout.completed
                                ? 'bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 border border-green-300 dark:border-green-600 hover:bg-green-200 dark:hover:bg-green-700'
                                : 'bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                            }`}
                          >
                            {workout.completed ? 'Workout Completed!' : 'Mark Workout Complete'}
                          </button>
                        </div>

                        <div className="space-y-4">
                          {workout.exercises.map((exercise, exIndex) => (
                            <div key={exIndex} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-md border border-gray-100 dark:border-gray-700 shadow-sm">
                              <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2 sm:mb-0 sm:w-1/3">{exercise.name}</p>
                              <div className="flex items-center space-x-4 w-full sm:w-2/3">
                                <div className="flex items-center">
                                  <label htmlFor={`sets-${workout.id}-${exIndex}`} className="text-gray-600 dark:text-gray-300 text-sm mr-2">Sets:</label>
                                  <input
                                    type="number"
                                    id={`sets-${workout.id}-${exIndex}`}
                                    value={exercise.sets}
                                    onChange={(e) => handleExerciseChange(workout.id, exercise.name, 'sets', e.target.value)}
                                    className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-center focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                    min="0"
                                  />
                                </div>
                                <div className="flex items-center">
                                  <label htmlFor={`reps-${workout.id}-${exIndex}`} className="text-gray-600 dark:text-gray-300 text-sm mr-2">Reps:</label>
                                  <input
                                    type="number"
                                    id={`reps-${workout.id}-${exIndex}`}
                                    value={exercise.reps}
                                    onChange={(e) => handleExerciseChange(workout.id, exercise.name, 'reps', e.target.value)}
                                    className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-center focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                    min="0"
                                  />
                                </div>
                                <div className="flex items-center">
                                  <label htmlFor={`weight-${workout.id}-${exIndex}`} className="text-gray-600 dark:text-gray-300 text-sm mr-2">Weight (kg/BW):</label>
                                  <input
                                    type="text" // Use text to allow "BW"
                                    id={`weight-${workout.id}-${exIndex}`}
                                    value={exercise.weight}
                                    onChange={(e) => handleExerciseChange(workout.id, exercise.name, 'weight', e.target.value)}
                                    className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-center focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                    placeholder="e.g., 50 or BW"
                                  />
                                </div>
                                <button
                                  onClick={() => handleExerciseComplete(workout.id, exercise.name)}
                                  className={`flex-shrink-0 px-3 py-1 rounded-md text-sm font-medium transition duration-200 ease-in-out ${
                                    exercise.completed
                                      ? 'bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 border border-green-300 dark:border-green-600 hover:bg-green-200 dark:hover:bg-green-700'
                                      : 'bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'
                                  }`}
                                >
                                  {exercise.completed ? '✓ Done' : 'Mark Done'}
                                </button>
                              </div>
                            </div>
                          ))}
                          {/* Display Workout Notes and RPE if completed */}
                          {workout.completed && (
                            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-md border border-blue-200 dark:border-blue-700">
                              <p className="font-medium text-blue-700 dark:text-blue-200">Workout Notes: <span className="font-normal">{workout.notes || 'N/A'}</span></p>
                              <p className="font-medium text-blue-700 dark:text-blue-200">RPE: <span className="font-normal">{workout.rpe || 'N/A'}</span></p>
                              <p className="font-medium text-blue-700 dark:text-blue-200">Total Volume: <span className="font-normal">{totalWorkoutVolume.toFixed(0)} kg</span></p>
                            </div>
                          )}
                          {/* Display Exercise History for this workout */}
                          <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600">
                            <h4 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">Exercise History for "{workout.name}"</h4>
                            {workout.exercises.map(exercise => {
                              const relevantHistory = exerciseHistory.filter(
                                h => h.exerciseName === exercise.name && h.workoutName === workout.name
                              ).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date descending

                              return (
                                <div key={exercise.name} className="mb-2">
                                  <p className="font-medium text-gray-800 dark:text-gray-100">{exercise.name}:</p>
                                  {relevantHistory.length > 0 ? (
                                    <ul className="list-disc list-inside ml-4 text-sm text-gray-600 dark:text-gray-300">
                                      {relevantHistory.slice(0, 3).map((h, i) => ( // Show last 3 entries
                                        <li key={i}>
                                          {h.date}: {h.sets} sets of {h.reps} reps @ {h.weight} kg (Volume: {h.volume.toFixed(0)})
                                        </li>
                                      ))}
                                      {relevantHistory.length > 3 && (
                                        <li className="text-xs text-gray-500 dark:text-gray-400">... {relevantHistory.length - 3} more entries</li>
                                      )}
                                    </ul>
                                  ) : (
                                    <p className="text-sm text-gray-500 dark:text-gray-400 ml-4">No history yet.</p>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            {/* Workout Completion Modal */}
            {showCompletionModal && (
              <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Complete Workout</h3>
                  <div className="mb-4">
                    <label htmlFor="workout-notes" className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-1">Notes:</label>
                    <textarea
                      id="workout-notes"
                      value={workoutNotes}
                      onChange={(e) => setWorkoutNotes(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      rows="3"
                      placeholder="Add any notes about your workout..."
                    ></textarea>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="workout-rpe" className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-1">RPE (Rate of Perceived Exertion 1-10):</label>
                    <input
                      type="number"
                      id="workout-rpe"
                      value={workoutRPE}
                      onChange={(e) => setWorkoutRPE(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      min="1"
                      max="10"
                      placeholder="e.g., 7"
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={handleModalCancel}
                      className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleModalSubmit}
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                    >
                      Save & Complete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'tracking':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Tracking</h2>

            {/* Daily Tracking (Steps, Water, Nutrition) */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Log Daily Progress</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="md:col-span-full">
                  <label htmlFor="selected-date" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Select Date:</label>
                  <input
                    type="date"
                    id="selected-date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="steps-daily" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Steps:</label>
                  <input
                    type="number"
                    id="steps-daily"
                    value={tempSteps === 0 ? '' : tempSteps}
                    onChange={(e) => setTempSteps(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="water-daily" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Water (ml):</label>
                  <input
                    type="number"
                    id="water-daily"
                    value={tempWater === 0 ? '' : tempWater}
                    onChange={(e) => setTempWater(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="lg:col-span-full">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mt-4 mb-2">Nutrition Input</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <label htmlFor="daily-calories" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Calories (kcal):</label>
                      <input type="number" id="daily-calories" value={tempCalories === 0 ? '' : tempCalories} onChange={(e) => setTempCalories(parseInt(e.target.value) || 0)}
                             className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                    </div>
                    <div>
                      <label htmlFor="daily-fat" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Fat (g):</label>
                      <input type="number" id="daily-fat" value={tempFat === 0 ? '' : tempFat} onChange={(e) => setTempFat(parseInt(e.target.value) || 0)}
                             className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                    </div>
                    <div>
                      <label htmlFor="daily-carbs" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Carbs (g):</label>
                      <input type="number" id="daily-carbs" value={tempCarbs === 0 ? '' : tempCarbs} onChange={(e) => setTempCarbs(parseInt(e.target.value) || 0)}
                             className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                    </div>
                    <div>
                      <label htmlFor="daily-protein" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Protein (g):</label>
                      <input type="number" id="daily-protein" value={tempProtein === 0 ? '' : tempProtein} onChange={(e) => setTempProtein(parseInt(e.target.value) || 0)}
                             className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                    </div>
                  </div>
                  <button
                    onClick={handleLogDailySummary}
                    className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md w-full"
                  >
                    Log Daily Summary
                  </button>
                </div>
              </div>

              {/* BMI & BMR Calculators */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8 transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">BMI & BMR Calculators</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* BMI Calculator */}
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Body Mass Index (BMI)</h4>
                    <div className="space-y-3">
                      <div>
                        <label htmlFor="height-cm" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Height (cm):</label>
                        <input
                          type="number"
                          id="height-cm"
                          value={heightCm}
                          onChange={(e) => setHeightCm(e.target.value)}
                          onBlur={calculateBMI}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder="e.g., 175"
                          min="1"
                        />
                      </div>
                      <div>
                        <label htmlFor="weight-kg-bmi" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Weight (kg):</label>
                        <input
                          type="number"
                          id="weight-kg-bmi"
                          value={weightKg}
                          onChange={(e) => setWeightKg(e.target.value)}
                          onBlur={calculateBMI}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder="e.g., 70"
                          min="1"
                        />
                      </div>
                      {bmiResult && (
                        <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-2 flex items-center">
                          BMI: {bmiResult}
                          <span className={`ml-2 px-3 py-1 text-sm rounded-full ${bmiCategory.className}`}>
                            {bmiCategory.text}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* BMR Calculator */}
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Basal Metabolic Rate (BMR)</h4>
                    <div className="space-y-3">
                      <div>
                        <label htmlFor="age-bmr" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Age:</label>
                        <input
                          type="number"
                          id="age-bmr"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          onBlur={calculateBMR}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder="e.g., 30"
                          min="1"
                        />
                      </div>
                      <div>
                        <label htmlFor="gender-bmr" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Gender:</label>
                        <select
                          id="gender-bmr"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          onBlur={calculateBMR}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      {/* Height and Weight inputs are shared with BMI for convenience */}
                      <div>
                        <label htmlFor="height-cm-bmr" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Height (cm):</label>
                        <input
                          type="number"
                          id="height-cm-bmr"
                          value={heightCm}
                          onChange={(e) => setHeightCm(e.target.value)}
                          onBlur={calculateBMR}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder="e.g., 175"
                          min="1"
                        />
                      </div>
                      <div>
                        <label htmlFor="weight-kg-bmr" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Weight (kg):</label>
                        <input
                          type="number"
                          id="weight-kg-bmr"
                          value={weightKg}
                          onChange={(e) => setWeightKg(e.target.value)}
                          onBlur={calculateBMR}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder="e.g., 70"
                          min="1"
                        />
                      </div>
                      {bmrResult && (
                        <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-2">BMR: {bmrResult} kcal/day</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>


              {/* Progress Charts */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8 lg:col-span-full transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Progress Charts (Last 7 Days)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Daily Steps</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={stepsChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#4a5568" : "#e2e8f0"} /> {/* Dark mode grid color */}
                        <XAxis dataKey="date" stroke={darkMode ? "#cbd5e0" : "#4a5568"} /> {/* Dark mode axis label color */}
                        {/* Ensure Y-axis always includes the goal */}
                        <YAxis domain={[0, (dataMax) => Math.max(dataMax, goals.steps * 1.1)]} stroke={darkMode ? "#cbd5e0" : "#4a5568"} /> {/* Dark mode axis label color */}
                        <Tooltip contentStyle={{ backgroundColor: darkMode ? '#2d3748' : '#fff', borderColor: darkMode ? '#4a5568' : '#e2e8f0', color: darkMode ? '#cbd5e0' : '#2d3748' }} /> {/* Dark mode tooltip */}
                        <Legend />
                        <ReferenceLine y={goals.steps} stroke="#8884d8" label={{ value: `Goal: ${goals.steps}`, position: 'top', fill: '#8884d8' }} />
                        <Bar dataKey="value" name="Steps" fill="#4299e1" radius={[10, 10, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Daily Water (ml)</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={waterChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#4a5568" : "#e2e8f0"} /> {/* Dark mode grid color */}
                        <XAxis dataKey="date" stroke={darkMode ? "#cbd5e0" : "#4a5568"} /> {/* Dark mode axis label color */}
                        {/* Ensure Y-axis always includes the goal */}
                        <YAxis
                          domain={[0, (dataMax) => Math.max(dataMax, goals.water * 1.1)]}
                          stroke={darkMode ? "#cbd5e0" : "#4a5568"}
                          tickFormatter={(value) => `${value} ml`} // Format Y-axis ticks
                        />
                        <Tooltip
                          contentStyle={{ backgroundColor: darkMode ? '#2d3748' : '#fff', borderColor: darkMode ? '#4a5568' : '#e2e8f0', color: darkMode ? '#cbd5e0' : '#2d3748' }}
                          formatter={(value) => [`${value} ml`, 'Water']} // Format tooltip value
                        />
                        <Legend />
                        <ReferenceLine y={goals.water} stroke="#38b2ac" label={{ value: `Goal: ${goals.water / 1000}L`, position: 'top', fill: '#38b2ac' }} />
                        <Bar dataKey="value" name="Water" fill="#38b2ac" radius={[10, 10, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Weight Over Time (kg)</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={bodyMeasurementChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#4a5568" : "#e2e8f0"} />
                        <XAxis dataKey="date" stroke={darkMode ? "#cbd5e0" : "#4a5568"} />
                        <YAxis stroke={darkMode ? "#cbd5e0" : "#4a5568"} />
                        <Tooltip contentStyle={{ backgroundColor: darkMode ? '#2d3748' : '#fff', borderColor: darkMode ? '#4a5568' : '#e2e8f0', color: darkMode ? '#cbd5e0' : '#2d3748' }} />
                        <Legend />
                        <Line type="monotone" dataKey="weight" stroke="#82ca9d" activeDot={{ r: 8 }} name="Weight (kg)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Body Fat % Over Time</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={bodyMeasurementChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#4a5568" : "#e2e8f0"} />
                        <XAxis dataKey="date" stroke={darkMode ? "#cbd5e0" : "#4a5568"} />
                        <YAxis stroke={darkMode ? "#cbd5e0" : "#4a5568"} />
                        <Tooltip contentStyle={{ backgroundColor: darkMode ? '#2d3748' : '#fff', borderColor: darkMode ? '#4a5568' : '#e2e8f0', color: darkMode ? '#cbd5e0' : '#2d3748' }} />
                        <Legend />
                        <Line type="monotone" dataKey="bfp" stroke="#ffc658" activeDot={{ r: 8 }} name="Body Fat %" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Daily Summary History Table */}
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-8 mb-4">Daily Summary History</h3>
              {dailySummaryHistory.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300">No daily summary logged yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                        <th className="py-3 px-4 border-b rounded-tl-lg border-gray-200 dark:border-gray-600">Date</th>
                        <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">Steps</th>
                        <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">Water (ml)</th>
                        <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">Calories</th>
                        <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">Fat (g)</th>
                        <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">Carbs (g)</th>
                        <th className="py-3 px-4 border-b rounded-tr-lg border-gray-200 dark:border-gray-600">Protein (g)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dailySummaryHistory.sort((a, b) => new Date(b.date) - new Date(a.date)).map((entry, index) => ( // Sort descending by date
                        <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{entry.date}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{entry.steps}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{entry.water}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{entry.calories}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{entry.fat}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{entry.carbs}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{entry.protein}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Body Measurements Tracking */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Body Measurements (cm)</h3>
              <form onSubmit={handleAddMeasurement} className="mb-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="md:col-span-full">
                  <label htmlFor="measurement-date" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Date:</label>
                  <input type="date" id="measurement-date" name="date" required
                         className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                </div>
                <div>
                  <label htmlFor="measurement-weight" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Weight (kg):</label>
                  <input type="number" id="measurement-weight" name="weight" step="0.1" required
                         className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                </div>
                <div>
                  <label htmlFor="measurement-bfp" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Body Fat %:</label>
                  <input type="number" id="measurement-bfp" name="bfp" step="0.1" required
                         className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                </div>
                <div>
                  <label htmlFor="measurement-chest" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Chest (cm):</label>
                  <input type="number" id="measurement-chest" name="chest" step="0.1" required
                         className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                </div>
                <div>
                  <label htmlFor="measurement-waist" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Waist (cm):</label>
                  <input type="number" id="measurement-waist" name="waist" step="0.1" required
                         className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                </div>
                <div>
                  <label htmlFor="measurement-hips" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Hips (cm):</label>
                  <input type="number" id="measurement-hips" name="hips" step="0.1" required
                         className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                </div>
                <div>
                  <label htmlFor="measurement-thigh" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Thigh (cm):</label>
                  <input type="number" id="measurement-thigh" name="thigh" step="0.1" required
                         className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                </div>
                <div>
                  <label htmlFor="measurement-arm" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Arm (cm):</label>
                  <input type="number" id="measurement-arm" name="arm" step="0.1" required
                         className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                </div>
                <div className="md:col-span-full flex justify-end">
                  <button type="submit"
                          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md">
                    Add Measurement
                  </button>
                </div>
              </form>

              {bodyMeasurements.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300">No body measurements recorded yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                        <th className="py-3 px-4 border-b rounded-tl-lg border-gray-200 dark:border-gray-600">Date</th>
                        <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">Weight (kg)</th>
                        <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">BF%</th>
                        <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">Chest (cm)</th>
                        <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">Waist (cm)</th>
                        <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">Hips (cm)</th>
                        <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">Thigh (cm)</th>
                        <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">Arm (cm)</th>
                        <th className="py-3 px-4 border-b rounded-tr-lg border-gray-200 dark:border-gray-600">Arm (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bodyMeasurements.sort((a, b) => new Date(b.date) - new Date(a.date)).map((measurement, index) => ( // Sort descending by date
                        <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{measurement.date}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{measurement.weight}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{measurement.bfp}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{measurement.chest}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{measurement.waist}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{measurement.hips}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{measurement.thigh}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{measurement.arm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        );

      case 'activities':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Other Activities</h2>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Log New Activity</h3>
              <form onSubmit={handleAddActivity} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="md:col-span-full">
                  <label htmlFor="activity-date" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Date:</label>
                  <input type="date" id="activity-date" name="date" required defaultValue={todayDate}
                         className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                </div>
                <div>
                  <label htmlFor="activity-type" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Activity Type:</label>
                  <select id="activity-type" value={activityType} onChange={(e) => setActivityType(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                    <option value="Running">Running</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Football">Football</option>
                    <option value="Swimming">Swimming</option>
                    <option value="Walking">Walking</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="activity-duration" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Duration (minutes):</label>
                  <input type="number" id="activity-duration" value={activityDuration} onChange={(e) => setActivityDuration(e.target.value)}
                         className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                         min="0" placeholder="e.g., 30" />
                </div>
                <div>
                  <label htmlFor="activity-distance" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Distance (km, optional):</label>
                  <input type="number" id="activity-distance" value={activityDistance} onChange={(e) => setActivityDistance(e.target.value)}
                         className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                         step="0.1" min="0" placeholder="e.g., 5.5" />
                </div>
                <div className="md:col-span-full">
                  <label htmlFor="activity-notes" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Notes (optional):</label>
                  <textarea id="activity-notes" value={activityNotes} onChange={(e) => setActivityNotes(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            rows="2" placeholder="e.g., Felt great today!"></textarea>
                </div>
                <div className="md:col-span-full flex justify-end">
                  <button type="submit"
                          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md">
                    Add Activity
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Activity History</h3>
              {otherActivities.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300">No activities logged yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                        <th className="py-3 px-4 border-b rounded-tl-lg border-gray-200 dark:border-gray-600">Date</th>
                        <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">Type</th>
                        <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">Duration (min)</th>
                        <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">Distance (km)</th>
                        <th className="py-3 px-4 border-b rounded-tr-lg border-gray-200 dark:border-gray-600">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {otherActivities.sort((a, b) => new Date(b.date) - new Date(a.date)).map((activity, index) => ( // Sort descending by date
                        <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{activity.date}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{activity.type}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{activity.duration}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{activity.distance > 0 ? activity.distance.toFixed(1) : '-'}</td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200">{activity.notes || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        );

      case 'challenges':
        const activeChallenges = challenges.filter(c => c.status === 'active');
        const completedChallenges = challenges.filter(c => c.status === 'completed');
        const failedChallenges = challenges.filter(c => c.status === 'failed');

        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Challenges</h2>

            {/* Create New Challenge Form */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Create New Challenge</h3>
              <form onSubmit={handleCreateChallenge} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="challenge-type" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Challenge Type:</label>
                  <select
                    id="challenge-type"
                    value={newChallengeType}
                    onChange={(e) => setNewChallengeType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  >
                    <option value="Pushups">Pushups</option>
                    <option value="Running">Running</option>
                    <option value="Cycling">Cycling</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="challenge-target" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">
                    Target ({newChallengeType === 'Pushups' ? 'count' : 'km'} per day):
                  </label>
                  <input
                    type="number"
                    id="challenge-target"
                    value={newChallengeTarget}
                    onChange={(e) => setNewChallengeTarget(e.target.value)}
                    min="1"
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    placeholder={newChallengeType === 'Pushups' ? 'e.g., 30' : 'e.g., 5'}
                  />
                </div>
                <div>
                  <label htmlFor="challenge-duration" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Duration (days):</label>
                  <input
                    type="number"
                    id="challenge-duration"
                    value={newChallengeDuration}
                    onChange={(e) => setNewChallengeDuration(e.target.value)}
                    min="1"
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    placeholder="e.g., 30"
                  />
                </div>
                <div className="md:col-span-full">
                  <label htmlFor="challenge-start-date" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Start Date:</label>
                  <input
                    type="date"
                    id="challenge-start-date"
                    value={newChallengeStartDate}
                    onChange={(e) => setNewChallengeStartDate(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="md:col-span-full flex justify-end">
                  <button type="submit"
                          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md">
                    Create Challenge
                  </button>
                </div>
              </form>
            </div>

            {/* Active Challenges List */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Active Challenges</h3>
              {activeChallenges.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300">No active challenges. Create one above!</p>
              ) : (
                <ul className="space-y-6">
                  {activeChallenges.map(challenge => {
                    const progress = getChallengeProgress(challenge);
                    const isPushups = challenge.type === 'Pushups';
                    const isRunningCycling = challenge.type === 'Running' || challenge.type === 'Cycling';

                    return (
                      <li key={challenge.id} className="p-6 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-200 dark:border-blue-700 shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-100 mb-2">
                          {challenge.type} Challenge: {challenge.target} {isPushups ? 'pushups' : 'km'} / day for {challenge.durationDays} days
                        </h4>
                        <p className="text-blue-700 dark:text-blue-200 mb-1">
                          Started: {challenge.startDate} | Current Day: {progress.currentDay} / {progress.totalDays}
                        </p>
                        <p className="text-blue-700 dark:text-blue-200 font-semibold mb-2">
                          Overall Progress: {progress.statusText} ({progress.progressPercentage}%)
                        </p>

                        {isPushups && (
                          <div className="flex items-center space-x-3 mb-3">
                            <input
                              type="number"
                              value={currentPushups}
                              onChange={(e) => setCurrentPushups(e.target.value)}
                              min="0"
                              placeholder="Log pushups today"
                              className="w-36 px-3 py-2 border border-blue-300 dark:border-blue-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            />
                            <button
                              onClick={() => handleLogPushups(challenge.id)}
                              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                            >
                              Log Pushups
                            </button>
                          </div>
                        )}
                        <p className="text-sm text-blue-600 dark:text-blue-300 mb-3">{progress.dailyStatus}</p>

                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleUpdateChallengeStatus(challenge.id, 'completed')}
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
                          >
                            Mark as Completed
                          </button>
                          <button
                            onClick={() => handleUpdateChallengeStatus(challenge.id, 'failed')}
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                          >
                            Mark as Failed
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Completed Challenges List */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Completed Challenges</h3>
              {completedChallenges.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300">No completed challenges yet.</p>
              ) : (
                <ul className="space-y-4">
                  {completedChallenges.map(challenge => (
                    <li key={challenge.id} className="p-4 bg-green-50 dark:bg-green-900 rounded-lg border border-green-200 dark:border-green-700 shadow-sm">
                      <h4 className="text-lg font-bold text-green-800 dark:text-green-100">
                        {challenge.type} Challenge: {challenge.target} {challenge.type === 'Pushups' ? 'pushups' : 'km'} / day for {challenge.durationDays} days
                      </h4>
                      <p className="text-green-700 dark:text-green-200">Status: Completed!</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Failed Challenges List */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Failed Challenges</h3>
              {failedChallenges.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300">No failed challenges yet.</p>
              ) : (
                <ul className="space-y-4">
                  {failedChallenges.map(challenge => (
                    <li key={challenge.id} className="p-4 bg-red-50 dark:bg-red-900 rounded-lg border border-red-200 dark:border-red-700 shadow-sm">
                      <h4 className="text-lg font-bold text-red-800 dark:text-red-100">
                        {challenge.type} Challenge: {challenge.target} {challenge.type === 'Pushups' ? 'pushups' : 'km'} / day for {challenge.durationDays} days
                      </h4>
                      <p className="text-red-700 dark:text-red-200">Status: Failed.</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );

      case 'mobility':
        const filteredMobilityRoutines = mobilityRoutines.filter(routine => {
          if (mobilityRoutineFilter === 'upcoming') {
            return !routine.completed && new Date(routine.date) >= new Date(new Date().setHours(0,0,0,0));
          } else if (mobilityRoutineFilter === 'completed') {
            return routine.completed;
          }
          return true;
        }).sort((a, b) => new Date(a.date) - new Date(b.date));

        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Mobility & Flexibility</h2>

            {/* Add New Mobility Exercise */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Add New Mobility Exercise</h3>
              <form onSubmit={handleAddMobilityExercise} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="new-mob-name" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Exercise Name:</label>
                  <input type="text" id="new-mob-name" value={newMobilityExerciseName} onChange={(e) => setNewMobilityExerciseName(e.target.value)}
                         className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                         required placeholder="e.g., Hamstring Stretch" />
                </div>
                <div>
                  <label htmlFor="new-mob-duration" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Duration/Reps:</label>
                  <input type="text" id="new-mob-duration" value={newMobilityExerciseDuration} onChange={(e) => setNewMobilityExerciseDuration(e.target.value)}
                         className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                         required placeholder="e.g., 30 seconds per side or 10 reps" />
                </div>
                <div className="md:col-span-full">
                  <label htmlFor="new-mob-description" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Description (optional):</label>
                  <textarea id="new-mob-description" value={newMobilityExerciseDescription} onChange={(e) => setNewMobilityExerciseDescription(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            rows="2" placeholder="Briefly describe the exercise..."></textarea>
                </div>
                <div className="md:col-span-full">
                  <label htmlFor="new-mob-instructions" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Instructions (comma-separated steps):</label>
                  <textarea id="new-mob-instructions" value={newMobilityExerciseInstructions} onChange={(e) => setNewMobilityExerciseInstructions(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            rows="3" required placeholder="Step 1, Step 2, Step 3..."></textarea>
                </div>
                <div className="md:col-span-full">
                  <label htmlFor="new-mob-target-areas" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Target Areas (comma-separated):</label>
                  <input type="text" id="new-mob-target-areas" value={newMobilityExerciseTargetAreas} onChange={(e) => setNewMobilityExerciseTargetAreas(e.target.value)}
                         className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                         required placeholder="e.g., Hips, Hamstrings, Shoulders" />
                </div>
                <div className="md:col-span-full flex justify-end">
                  <button type="submit"
                          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md">
                    Add Exercise
                  </button>
                </div>
              </form>
            </div>

            {/* Existing Mobility Exercises */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">All Mobility Exercises</h3>
              {mobilityExercises.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300">No mobility exercises added yet. Use the form above to add some!</p>
              ) : (
                <ul className="space-y-6">
                  {mobilityExercises.map(exercise => (
                    <li key={exercise.id} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm transition-all duration-300 ease-in-out">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{exercise.name}</h3>
                        <button
                          onClick={() => handleMobilityExerciseComplete(exercise.id)}
                          className={`px-4 py-2 rounded-md font-medium transition duration-200 ease-in-out shadow-sm ${
                            exercise.completed
                              ? 'bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 border border-green-300 dark:border-green-600 hover:bg-green-200 dark:hover:bg-green-700'
                              : 'bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'
                          }`}
                        >
                          {exercise.completed ? '✓ Done' : 'Mark Done'}
                        </button>
                      </div>
                      <p className="text-gray-700 dark:text-gray-200 mb-3">{exercise.description}</p>
                      <div className="mb-4 text-gray-700 dark:text-gray-200">
                        <p className="font-medium">Instructions:</p>
                        <ol className="list-decimal list-inside ml-4">
                          {exercise.instructions.map((instruction, i) => (
                            <li key={i}>{instruction}</li>
                          ))}
                        </ol>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        <p className="font-medium">Duration/Reps: {exercise.duration}</p>
                        <p className="font-medium">Target Areas: {exercise.targetAreas.join(', ')}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Mobility Routine Generation Form - Expandable */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8 transition-all duration-300 ease-in-out">
              <div
                className="flex justify-between items-center cursor-pointer pb-4 mb-4 border-b border-gray-200 dark:border-gray-700"
                onClick={() => setIsRoutineGeneratorExpanded(!isRoutineGeneratorExpanded)}
              >
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Generate Mobility Routine</h3>
                <Icon
                  name="ChevronDown"
                  size={24}
                  color={darkMode ? '#cbd5e0' : '#4a5568'}
                  className={`transform transition-transform duration-300 ${isRoutineGeneratorExpanded ? 'rotate-180' : ''}`}
                />
              </div>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isRoutineGeneratorExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <form onSubmit={handleCreateMobilityRoutine} className="space-y-4">
                  <div>
                    <label htmlFor="routine-name" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Routine Name (optional):</label>
                    <input
                      type="text"
                      id="routine-name"
                      value={newRoutineName}
                      onChange={(e) => setNewRoutineName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder="e.g., Morning Flow"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="routine-start-date" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Start Date:</label>
                      <input
                        type="date"
                        id="routine-start-date"
                        value={newRoutineStartDate}
                        onChange={(e) => setNewRoutineStartDate(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                    <div>
                      <label htmlFor="routine-weeks" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">Number of Weeks:</label>
                      <input
                        type="number"
                        id="routine-weeks"
                        value={newRoutineWeeks}
                        onChange={(e) => setNewRoutineWeeks(parseInt(e.target.value) || 1)}
                        min="1"
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Assign Exercises to Days:</h4>
                    {routineDays.map((routineDay, index) => (
                      <div key={routineDay.id} className="flex flex-col sm:flex-row items-center gap-3">
                        <select
                          value={routineDay.day}
                          onChange={(e) => handleRoutineDayChange(routineDay.id, 'day', e.target.value)}
                          className="w-full sm:w-1/4 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        >
                          <option value="">-- Select Day --</option>
                          {daysOfWeek.map(day => (
                            <option key={day.value} value={day.value}>{day.label}</option>
                          ))}
                        </select>
                        <select
                          multiple
                          value={routineDay.exerciseIds}
                          onChange={(e) => handleRoutineDayChange(routineDay.id, 'exerciseIds', Array.from(e.target.selectedOptions, option => option.value))}
                          className="w-full sm:w-2/3 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 h-24"
                        >
                          {mobilityExercises.map(ex => (
                            <option key={ex.id} value={ex.id}>{ex.name}</option>
                          ))}
                        </select>
                        {routineDays.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveRoutineDay(routineDay.id)}
                            className="flex-shrink-0 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                            title="Remove this day"
                          >
                            X
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={handleAddRoutineDay}
                      className="mt-3 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md"
                    >
                      + Add Day to Routine
                    </button>
                  </div>

                  <div className="flex justify-end">
                    <button type="submit"
                            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md">
                      Generate Routine
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Mobility Routine Filter Buttons */}
            <div className="flex justify-center mb-6 space-x-4">
              <button
                onClick={() => setMobilityRoutineFilter('upcoming')}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-md ${
                  mobilityRoutineFilter === 'upcoming'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Upcoming Routines
              </button>
              <button
                onClick={() => setMobilityRoutineFilter('completed')}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-md ${
                  mobilityRoutineFilter === 'completed'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Completed Routines
              </button>
            </div>

            {/* Mobility Routines List */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">
              {filteredMobilityRoutines.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300 text-center py-4">
                  {mobilityRoutineFilter === 'upcoming' ? 'No upcoming mobility routines.' : 'No completed mobility routines yet.'}
                </p>
              ) : (
                <ul className="space-y-6">
                  {filteredMobilityRoutines.map(routine => {
                    const isDueToday = routine.date === todayDate;
                    const cardClasses = `p-6 rounded-lg shadow-sm transition-all duration-300 ease-in-out ${
                      isDueToday
                        ? 'bg-indigo-100 dark:bg-indigo-900 border-2 border-indigo-500 dark:border-indigo-400'
                        : 'bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600'
                    }`;

                    return (
                      <li key={routine.id} className={cardClasses}>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 sm:mb-0">
                            {routine.name} {formatDateForDisplay(routine.date)}
                            {isDueToday && (
                              <span className="ml-3 px-3 py-1 text-sm font-bold rounded-full bg-indigo-500 text-white">
                                DUE TODAY!
                              </span>
                            )}
                          </h3>
                          <button
                            onClick={() => handleMobilityRoutineComplete(routine.id)}
                            className={`px-4 py-2 rounded-md font-medium transition duration-200 ease-in-out shadow-sm ${
                              routine.completed
                                ? 'bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 border border-green-300 dark:border-green-600 hover:bg-green-200 dark:hover:bg-green-700'
                                : 'bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                            }`}
                          >
                            {routine.completed ? 'Routine Completed!' : 'Mark Routine Complete'}
                          </button>
                        </div>

                        <div className="space-y-4">
                          <p className="text-lg font-medium text-gray-700 dark:text-gray-200">Exercises in this Routine:</p>
                          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-600 dark:text-gray-300">
                            {routine.exercises.map((ex, exIndex) => (
                              <li key={exIndex}>
                                <span className="font-semibold">{ex.name}</span> - {ex.duration}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        );

      case 'achievements':
        const unlockedAchievementIds = new Set(achievements.map(a => a.id));
        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Achievements</h2>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">All Achievements</h3>
              {achievementDefinitions.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300">No achievements defined yet.</p>
              ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievementDefinitions.map(achievement => {
                    const isUnlocked = unlockedAchievementIds.has(achievement.id);
                    const cardClasses = `p-4 rounded-lg shadow-sm transition-all duration-300 ease-in-out relative
                                         ${isUnlocked
                                            ? 'bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700'
                                            : 'bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 opacity-50 blur-[0.5px]' // Faded and slightly blurred
                                          }`;
                    const textClasses = `font-bold mb-1 ${isUnlocked ? 'text-yellow-800 dark:text-yellow-100' : 'text-gray-600 dark:text-gray-300'}`;
                    const descClasses = `text-sm mb-2 ${isUnlocked ? 'text-yellow-700 dark:text-yellow-200' : 'text-gray-500 dark:text-gray-400'}`;
                    const dateClasses = `text-xs ${isUnlocked ? 'text-yellow-600 dark:text-yellow-300' : 'text-gray-500 dark:text-gray-400'}`;
                    const badgeClasses = `absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-full ${isUnlocked ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`;

                    const unlockedAchievement = achievements.find(a => a.id === achievement.id);

                    return (
                      <li key={achievement.id} className={cardClasses}>
                        <h4 className={textClasses}>{achievement.name}</h4>
                        <p className={descClasses}>{achievement.description}</p>
                        <p className={dateClasses}>
                          {isUnlocked ? `Unlocked on: ${unlockedAchievement.unlockedDate}` : 'Status: Locked'}
                        </p>
                        <span className={badgeClasses}>
                          {isUnlocked ? 'Unlocked' : 'Locked'}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        );

      case 'recipes':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Recipes</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">
              {recipes.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300">No recipes added yet.</p>
              ) : (
                <ul className="space-y-6">
                  {recipes.map(recipe => (
                    <li key={recipe.id} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm transition-all duration-300 ease-in-out">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{recipe.name}</h3>
                      <div className="mb-4 text-gray-700 dark:text-gray-200">
                        <p className="font-medium">Ingredients:</p>
                        <ul className="list-disc list-inside ml-4">
                          {recipe.ingredients.map((ingredient, i) => (
                            <li key={i}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-4 text-gray-700 dark:text-gray-200">
                        <p className="font-medium">Instructions:</p>
                        <p>{recipe.instructions}</p>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        <p className="font-medium">Macros (Approx.):</p>
                        <p>Calories: {recipe.macros.calories} kcal | Fat: {recipe.macros.fat}g | Carbs: {recipe.macros.carbs}g | Protein: {recipe.macros.protein}g</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );

      case 'settings': // Renamed from 'goals'
        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Settings</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">
              {/* Dark Mode Toggle */}
              <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600 flex items-center justify-between">
                <span className="text-lg font-medium text-gray-800 dark:text-gray-100">Dark Mode</span>
                <label htmlFor="darkModeToggle" className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="darkModeToggle"
                    className="sr-only peer"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{darkMode ? 'On' : 'Off'}</span>
                </label>
              </div>

              {/* App Version */}
              <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600 flex items-center justify-between">
                <span className="text-lg font-medium text-gray-800 dark:text-gray-100">App Version:</span>
                <input
                  type="text"
                  value={appVersion}
                  onChange={(e) => setAppVersion(e.target.value)}
                  className="w-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="e.g., 1.0.0"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Current Goals</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600">
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Daily Steps Goal:</p>
                  <input
                    type="number"
                    value={goals.steps}
                    onChange={(e) => setGoals({ ...goals, steps: parseInt(e.target.value) || 0 })}
                    className="w-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600">
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Daily Water Goal (ml):</p>
                  <input
                    type="number"
                    value={goals.water}
                    onChange={(e) => setGoals({ ...goals, water: parseInt(e.target.value) || 0 })}
                    className="w-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600">
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Daily Calorie Goal (kcal):</p>
                  <input
                    type="number"
                    value={goals.calories}
                    onChange={(e) => setGoals({ ...goals, calories: parseInt(e.target.value) || 0 })}
                    className="w-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Data Management</h3>
              <button
                onClick={exportData}
                className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md"
              >
                Export All Data (JSON)
              </button>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                (Import functionality can be added later if needed.)
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    // Tailwind CSS setup and PWA meta tags
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-gray-100 dark:bg-gray-900 font-sans antialiased text-gray-900 dark:text-gray-100
      bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99f231b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-fixed
      relative after:content-[''] after:absolute after:inset-0 after:bg-gray-100/90 dark:after:bg-gray-900/90 after:z-0`} // Added background image and overlay
    >
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          /* Custom scrollbar for better aesthetics */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          /* Specific dark mode adjustments for elements not covered by direct dark: classes */
          .dark .recharts-surface {
            background-color: #1a202c !important; /* Darker background for charts */
          }
          /* Custom styles for dark mode input date/time pickers */
          .dark input[type="date"],
          .dark input[type="time"],
          .dark input[type="datetime-local"] {
            filter: invert(1) hue-rotate(180deg);
          }
          .dark input[type="date"]::-webkit-calendar-picker-indicator,
          .dark input[type="time"]::-webkit-calendar-picker-indicator,
          .dark input[type="datetime-local"]::-webkit-calendar-picker-indicator {
            filter: invert(1) hue-rotate(180deg);
          }
        `}
      </style>
      {/* PWA Manifest and Theme Color */}
      {/* In a real PWA, manifest.json would be a separate file in the root. */}
      {/* For this single-file immersive, we'll indicate its presence. */}
      {/* You would create a public/manifest.json file with content like:
        {
          "name": "FitTrackr",
          "short_name": "FitTrackr",
          "start_url": ".",
          "display": "standalone",
          "background_color": "#ffffff",
          "theme_color": "#2563eb",
          "icons": [
            {
              "src": "logo192.png",
              "sizes": "192x192",
              "type": "image/png"
            },
            {
              "src": "logo512.png",
              "sizes": "512x512",
              "type": "image/png"
            }
          ]
        }
      */}
      {/* And a public/service-worker.js file with content like:
        const CACHE_NAME = 'fit-track-cache-v1';
        const urlsToCache = [
          '/',
          '/index.html',
          // Add other assets you want to cache for offline use
        ];

        self.addEventListener('install', event => {
          event.waitUntil(
            caches.open(CACHE_NAME)
              .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
              })
          );
        });

        self.addEventListener('fetch', event => {
          event.respondWith(
            caches.match(event.request)
              .then(response => {
                if (response) {
                  return response;
                }
                return fetch(event.request);
              })
          );
        });
      */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2563eb" /> {/* Matches blue-600 */}
      {/* The actual manifest link would point to a file: */}
      {/* <link rel="manifest" href="/manifest.json" /> */}


      {/* Header/Navigation */}
      <nav className="relative z-[100] bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg p-4"> {/* Increased z-index for nav */}
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-3xl font-extrabold text-white mb-4 sm:mb-0">FitTrackr</h1> {/* Renamed app title */}
          <div className="flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-4">
            <button
              onClick={() => { setActiveTab('dashboard'); setIsMoreMenuOpen(false); }}
              className={`px-4 py-2 rounded-lg text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2 ${
                activeTab === 'dashboard' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-blue-700'
              }`}
            >
              <Icon name="LayoutDashboard" size={20} />
              <span className="hidden sm:inline">Dashboard</span>
            </button>
            <button
              onClick={() => { setActiveTab('workouts'); setIsMoreMenuOpen(false); }}
              className={`px-4 py-2 rounded-lg text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2 ${
                activeTab === 'workouts' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-blue-700'
              }`}
            >
              <Icon name="Dumbbell" size={20} />
              <span className="hidden sm:inline">Workouts</span>
            </button>
            <button
              onClick={() => { setActiveTab('tracking'); setIsMoreMenuOpen(false); }}
              className={`px-4 py-2 rounded-lg text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2 ${
                activeTab === 'tracking' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-blue-700'
              }`}
            >
              <Icon name="Target" size={20} />
              <span className="hidden sm:inline">Tracking</span>
            </button>
            <button
              onClick={() => { setActiveTab('mobility'); setIsMoreMenuOpen(false); }}
              className={`px-4 py-2 rounded-lg text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2 ${
                activeTab === 'mobility' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-blue-700'
              }`}
            >
              <Icon name="Stretch" size={20} /> {/* New Mobility icon */}
              <span className="hidden sm:inline">Mobility</span>
            </button>

            {/* More Menu Dropdown */}
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                className={`px-4 py-2 rounded-lg text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2 ${
                  ['activities', 'challenges', 'achievements', 'recipes', 'settings'].includes(activeTab) ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-blue-700'
                }`}
              >
                <Icon name="MoreHorizontal" size={20} />
                <span className="hidden sm:inline">More</span>
                <Icon name="ChevronDown" size={20} className={`transform transition-transform duration-200 ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMoreMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-[101]"> {/* Increased z-index for safety */}
                  <button
                    onClick={() => { setActiveTab('activities'); setIsMoreMenuOpen(false); }}
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left flex items-center space-x-2"
                  >
                    <Icon name="Activity" size={20} />
                    <span>Activities</span>
                  </button>
                  <button
                    onClick={() => { setActiveTab('challenges'); setIsMoreMenuOpen(false); }}
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left flex items-center space-x-2"
                  >
                    <Icon name="Award" size={20} />
                    <span>Challenges</span>
                  </button>
                  <button
                    onClick={() => { setActiveTab('achievements'); setIsMoreMenuOpen(false); }}
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left flex items-center space-x-2"
                  >
                    <Icon name="Award" size={20} />
                    <span>Achievements</span>
                  </button>
                  <button
                    onClick={() => { setActiveTab('recipes'); setIsMoreMenuOpen(false); }}
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left flex items-center space-x-2"
                  >
                    <Icon name="Utensils" size={20} />
                    <span>Recipes</span>
                  </button>
                  <button
                    onClick={() => { setActiveTab('settings'); setIsMoreMenuOpen(false); }}
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left flex items-center space-x-2"
                  >
                    <Icon name="Settings" size={20} />
                    <span>Settings</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto mt-8 pb-8 relative z-10"> {/* Ensure content is above the overlay */}
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
