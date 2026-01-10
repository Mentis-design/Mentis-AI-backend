// static/data/grade8MathLessons.js

// Import individual lesson topic files
import { mentalMaths1 } from "./mentalMaths1.js";
import { mentalMaths2 } from "./mentalMaths2.js";
// Add more lesson files as you create them:
// import { topic3 } from "./topic3.js";
// import { topic4 } from "./topic4.js";

// Export the array of lessons for Mentis to use
export const grade8MathLessons = [
  {
    title: "Mental Maths 1",
    summary: "Quick mental calculations to sharpen arithmetic skills.",
    questions: mentalMaths1
  },
  {
    title: "Mental Maths 2",
    summary: "More challenging mental maths exercises.",
    questions: mentalMaths2
  },
  // Add more topics here as you create them
];
