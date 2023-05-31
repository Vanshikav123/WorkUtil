const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


const router =express.Router()
//Get all workouts
router.get('/',   getWorkouts)
//get a single workout
router.get('/:id', getWorkout)


//Post a new workout
router.post('/',createWorkout)

// DELETE a workout
router.delete('/:id',  deleteWorkout)
  
  // UPDATE a workout
  router.patch('/:id',  updateWorkout)

module.exports=router