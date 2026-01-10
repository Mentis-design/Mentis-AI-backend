export const mentalMaths1 = {
  title: "Mental Maths 1",
  summary: "Sharpen your arithmetic with quick mental calculations.",
  questions: [
    {
      question: "What is 47 + 38?",
      options: ["75", "85", "95", "90"],
      correctIndex: 1,
      correctFeedback: "Great job! Clean mental addition 👏",
      explanation: "47 + 38 = (40 + 30) + (7 + 8) = 70 + 15 = 85.",
      subQuestions: [
        {
          question: "What is 26 + 19?",
          options: ["44", "45", "46", "43"],
          correctIndex: 1,
          correctFeedback: "Nice work! That was a quick one ⚡",
          explanation: "26 + 19 = 26 + 20 − 1 = 45."
        },
        {
          question: "What is 58 + 27?",
          options: ["85", "75", "95", "80"],
          correctIndex: 0,
          correctFeedback: "Fantastic! Mental maths on point 🎯",
          explanation: "58 + 27 = (50 + 20) + (8 + 7) = 70 + 15 = 85."
        }
      ]
    },

    {
      question: "What is 84 − 39?",
      options: ["45", "44", "43", "46"],
      correctIndex: 0,
      correctFeedback: "Amazing! Subtraction mastered 💪",
      explanation: "84 − 39 = 84 − 40 + 1 = 45.",
      subQuestions: [
        {
          question: "What is 72 − 28?",
          options: ["44", "46", "42", "40"],
          correctIndex: 0,
          correctFeedback: "Great job! That was a tricky one 😎",
          explanation: "72 − 28 = 72 − 30 + 2 = 44."
        },
        {
          question: "What is 90 − 47?",
          options: ["43", "44", "42", "41"],
          correctIndex: 0,
          correctFeedback: "Excellent thinking 🧠",
          explanation: "90 − 47 = 90 − 50 + 3 = 43."
        }
      ]
    },

    {
      question: "What is 12 × 8?",
      options: ["96", "88", "104", "92"],
      correctIndex: 0,
      correctFeedback: "Great work! Multiplication nailed 🔥",
      explanation: "12 × 8 = (10 × 8) + (2 × 8) = 80 + 16 = 96.",
      subQuestions: [
        {
          question: "What is 15 × 6?",
          options: ["80", "90", "100", "85"],
          correctIndex: 1,
          correctFeedback: "Nice! That was smooth 💯",
          explanation: "15 × 6 = (10 × 6) + (5 × 6) = 60 + 30 = 90."
        },
        {
          question: "What is 7 × 9?",
          options: ["56", "63", "72", "69"],
          correctIndex: 1,
          correctFeedback: "Fantastic! Classic times table 👌",
          explanation: "7 × 9 = 63."
        }
      ]
    },

    {
      question: "What is 144 ÷ 12?",
      options: ["11", "12", "13", "14"],
      correctIndex: 1,
      correctFeedback: "Brilliant! Division done right 🏆",
      explanation: "144 ÷ 12 = 12 because 12 × 12 = 144.",
      subQuestions: [
        {
          question: "What is 81 ÷ 9?",
          options: ["8", "9", "7", "6"],
          correctIndex: 1,
          correctFeedback: "Great job! Easy but important 👍",
          explanation: "81 ÷ 9 = 9."
        },
        {
          question: "What is 56 ÷ 8?",
          options: ["6", "7", "8", "9"],
          correctIndex: 1,
          correctFeedback: "Nice work! Keep going 🚀",
          explanation: "56 ÷ 8 = 7."
        }
      ]
    },

    {
      question: "What is double 48?",
      options: ["86", "94", "96", "98"],
      correctIndex: 2,
      correctFeedback: "Awesome! Doubling mastered ✨",
      explanation: "Double 48 = 48 × 2 = 96.",
      subQuestions: [
        {
          question: "What is double 37?",
          options: ["72", "74", "76", "78"],
          correctIndex: 1,
          correctFeedback: "Great job! Mental speed improving ⚡",
          explanation: "37 × 2 = 74."
        },
        {
          question: "What is double 65?",
          options: ["120", "125", "130", "135"],
          correctIndex: 2,
          correctFeedback: "Fantastic! That was a hard one 💥",
          explanation: "65 × 2 = 130."
        }
      ]
    },

    {
      question: "What is half of 96?",
      options: ["46", "48", "50", "44"],
      correctIndex: 1,
      correctFeedback: "Well done! Halving made easy 😄",
      explanation: "Half of 96 = 96 ÷ 2 = 48.",
      subQuestions: [
        {
          question: "What is half of 74?",
          options: ["36", "37", "38", "39"],
          correctIndex: 1,
          correctFeedback: "Nice work! Stay focused 🎯",
          explanation: "74 ÷ 2 = 37."
        },
        {
          question: "What is half of 120?",
          options: ["50", "55", "60", "65"],
          correctIndex: 2,
          correctFeedback: "Excellent! Clean thinking 🧠",
          explanation: "120 ÷ 2 = 60."
        }
      ]
    },

    {
      question: "What is 25% of 200?",
      options: ["25", "40", "50", "75"],
      correctIndex: 2,
      correctFeedback: "Amazing! Percentages unlocked 🔓",
      explanation: "25% is one quarter. One quarter of 200 = 50.",
      subQuestions: [
        {
          question: "What is 10% of 150?",
          options: ["10", "15", "20", "25"],
          correctIndex: 1,
          correctFeedback: "Great job! Simple and smart 👍",
          explanation: "10% of 150 = 15."
        },
        {
          question: "What is 50% of 60?",
          options: ["25", "30", "35", "40"],
          correctIndex: 1,
          correctFeedback: "Nice! Half is easy 😄",
          explanation: "50% means half, and half of 60 is 30."
        }
      ]
    },

    {
      question: "Round 68 to the nearest ten.",
      options: ["60", "65", "70", "68"],
      correctIndex: 2,
      correctFeedback: "Good job! Rounding mastered 👏",
      explanation: "68 rounds up to 70 because it is closer to 70 than 60.",
      subQuestions: [
        {
          question: "Round 42 to the nearest ten.",
          options: ["40", "45", "50", "42"],
          correctIndex: 0,
          correctFeedback: "Nice work! Keep it up 🔥",
          explanation: "42 rounds down to 40."
        },
        {
          question: "Round 85 to the nearest ten.",
          options: ["80", "85", "90", "75"],
          correctIndex: 2,
          correctFeedback: "Fantastic! Sharp thinking 🧠",
          explanation: "85 rounds up to 90."
        }
      ]
    },

    {
      question: "What comes next: 5, 10, 15, ?",
      options: ["18", "20", "25", "30"],
      correctIndex: 1,
      correctFeedback: "Great pattern spotting 👀",
      explanation: "The pattern increases by 5 each time.",
      subQuestions: [
        {
          question: "What comes next: 2, 4, 8, ?",
          options: ["10", "12", "14", "16"],
          correctIndex: 3,
          correctFeedback: "Excellent! Pattern skills 💡",
          explanation: "The numbers double each time."
        },
        {
          question: "What comes next: 1, 4, 9, ?",
          options: ["12", "14", "16", "18"],
          correctIndex: 2,
          correctFeedback: "Amazing! Square numbers 🏆",
          explanation: "These are square numbers: 1², 2², 3², 4²."
        }
      ]
    },

    {
      question: "Estimate: 298 + 403 ≈ ?",
      options: ["600", "650", "700", "750"],
      correctIndex: 2,
      correctFeedback: "Great estimation! Real-world maths 💪",
      explanation: "300 + 400 ≈ 700.",
      subQuestions: [
        {
          question: "Estimate: 149 + 351 ≈ ?",
          options: ["400", "450", "500", "550"],
          correctIndex: 2,
          correctFeedback: "Nice! Estimation on point 👌",
          explanation: "150 + 350 ≈ 500."
        },
        {
          question: "Estimate: 702 − 298 ≈ ?",
          options: ["300", "350", "400", "450"],
          correctIndex: 2,
          correctFeedback: "Fantastic! Strong number sense 🎯",
          explanation: "700 − 300 ≈ 400."
        }
      ]
    }
  ]
};
