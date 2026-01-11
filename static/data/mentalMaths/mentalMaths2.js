export const mentalMaths2 = {
  id: "mm2",
  title: "Mental Maths 2",
  summary: "Harder mental calculations to push speed, accuracy, and confidence.",
  xpPerQuestion: 15,
  requiredXP: 120,
  passMark: 60,

  questions: [
    {
      question: "Calculate 27 × 8 mentally.",
      options: ["216", "224", "208", "212"],
      correctIndex: 0,
      explanation: "27 × 8 = (20×8) + (7×8) = 160 + 56 = 216.",
      subQuestions: [
        {
          question: "Calculate 19 × 6 mentally.",
          options: ["114", "116", "112", "118"],
          correctIndex: 0,
          explanation: "19 × 6 = (20×6) − 6 = 120 − 6 = 114."
        },
        {
          question: "Calculate 24 × 7 mentally.",
          options: ["168", "164", "172", "176"],
          correctIndex: 0,
          explanation: "24 × 7 = (20×7) + (4×7) = 140 + 28 = 168."
        }
      ]
    },
    {
      question: "Find 15% of 240 mentally.",
      options: ["36", "32", "30", "40"],
      correctIndex: 0,
      explanation: "10% = 24, 5% = 12 → 24 + 12 = 36.",
      subQuestions: [
        {
          question: "Find 20% of 180 mentally.",
          options: ["36", "32", "40", "30"],
          correctIndex: 0,
          explanation: "20% = one-fifth → 180 ÷ 5 = 36."
        },
        {
          question: "Find 25% of 200 mentally.",
          options: ["40", "45", "50", "55"],
          correctIndex: 2,
          explanation: "25% is one quarter → 200 ÷ 4 = 50."
        }
      ]
    },
    {
      question: "Calculate 504 ÷ 12 mentally.",
      options: ["42", "40", "44", "48"],
      correctIndex: 0,
      explanation: "12×40 = 480, remainder 24 → 12×2 = 24 → 42.",
      subQuestions: [
        {
          question: "Calculate 360 ÷ 9 mentally.",
          options: ["40", "45", "36", "42"],
          correctIndex: 0,
          explanation: "9 × 40 = 360."
        },
        {
          question: "Calculate 420 ÷ 7 mentally.",
          options: ["60", "55", "65", "70"],
          correctIndex: 0,
          explanation: "7 × 60 = 420."
        }
      ]
    },
    {
      question: "Add 378 + 469 mentally.",
      options: ["847", "837", "857", "867"],
      correctIndex: 0,
      explanation: "378 + 469 = 847.",
      subQuestions: [
        {
          question: "Add 465 + 235 mentally.",
          options: ["700", "690", "710", "720"],
          correctIndex: 0,
          explanation: "465 + 235 = 700."
        },
        {
          question: "Add 589 + 211 mentally.",
          options: ["800", "790", "810", "820"],
          correctIndex: 0,
          explanation: "589 + 211 = 800."
        }
      ]
    },
    {
      question: "Subtract 804 − 368 mentally.",
      options: ["436", "426", "446", "456"],
      correctIndex: 0,
      explanation: "804 − 368 = 436.",
      subQuestions: [
        {
          question: "Subtract 700 − 458 mentally.",
          options: ["242", "252", "262", "272"],
          correctIndex: 0,
          explanation: "700 − 458 = 242."
        },
        {
          question: "Subtract 1000 − 675 mentally.",
          options: ["325", "335", "345", "355"],
          correctIndex: 0,
          explanation: "1000 − 675 = 325."
        }
      ]
    },
    {
      question: "Multiply 36 × 4 mentally.",
      options: ["144", "148", "152", "136"],
      correctIndex: 0,
      explanation: "36 × 4 = (30×4) + (6×4) = 120 + 24 = 144.",
      subQuestions: [
        {
          question: "Multiply 28 × 5 mentally.",
          options: ["140", "135", "145", "150"],
          correctIndex: 0,
          explanation: "28 × 5 = 140."
        },
        {
          question: "Multiply 45 × 2 mentally.",
          options: ["90", "85", "95", "100"],
          correctIndex: 0,
          explanation: "45 × 2 = 90."
        }
      ]
    },
    {
      question: "Round 6 847 to the nearest hundred.",
      options: ["6 800", "6 900", "6 700", "6 850"],
      correctIndex: 1,
      explanation: "47 rounds up → 6 900.",
      subQuestions: [
        {
          question: "Round 4 249 to nearest hundred.",
          options: ["4 200", "4 300", "4 250", "4 400"],
          correctIndex: 1,
          explanation: "49 rounds up → 4 300."
        },
        {
          question: "Round 7 051 to nearest hundred.",
          options: ["7 000", "7 100", "7 050", "7 200"],
          correctIndex: 0,
          explanation: "51 rounds down → 7 000."
        }
      ]
    },
    {
      question: "Find the next number: 3, 9, 27, ___",
      options: ["81", "54", "72", "90"],
      correctIndex: 0,
      explanation: "Each number is ×3 → 27 × 3 = 81.",
      subQuestions: [
        {
          question: "Pattern: 2, 6, 18, ___",
          options: ["54", "36", "48", "60"],
          correctIndex: 0,
          explanation: "×3 pattern → 18 × 3 = 54."
        },
        {
          question: "Pattern: 5, 10, 20, ___",
          options: ["40", "30", "50", "35"],
          correctIndex: 0,
          explanation: "×2 pattern → 20 × 2 = 40."
        }
      ]
    },
    {
      question: "Half of 486 mentally.",
      options: ["243", "236", "246", "256"],
      correctIndex: 0,
      explanation: "486 ÷ 2 = 243.",
      subQuestions: [
        {
          question: "Half of 738 mentally.",
          options: ["369", "359", "379", "389"],
          correctIndex: 0,
          explanation: "738 ÷ 2 = 369."
        },
        {
          question: "Half of 914 mentally.",
          options: ["457", "467", "447", "437"],
          correctIndex: 0,
          explanation: "914 ÷ 2 = 457."
        }
      ]
    }
  ]
};
