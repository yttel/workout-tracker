const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const currentTypes = ["cardio", "resistance"]; //dynamic later

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        validate: {
          validator: (exType) => {
            return currentTypes.includes(exType);
          }, 
          message: () => {
            let exTypeOptions = "";
            currentTypes.forEach(element => {
              exTypeOptions += `${element}\n`;
            return `Type of exercise must be one of the following: \n`;
            });
          } 
        },
        required: true
      },

      name: {
        type: String,
        required: true
      },

      duration: {
        type: Number
      },

      weight: {
        type: Number 
      },

      reps: {
        type: Number
      },

      sets: {
        type: Number
      },

      distance: {
        type: Number
      },
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;