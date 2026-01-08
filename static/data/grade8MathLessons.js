// static/data/grade8MathLessons.js
export const grade8MathLessons = [
  {
    title: "Mental Maths",
    summary: "Quick mental calculations to sharpen arithmetic skills.",
    questions: [// --- SNIPPET 1: Mental Maths Questions ---
{
  question: "Add 47 + 58 mentally.",
  options: ["95", "105", "100", "102"],
  correctIndex: 3,
  explanation: "47 + 58 = 105.",
  subQuestions: [
    {
      question: "Add 23 + 34 mentally.",
      options: ["57", "56", "58", "55"],
      correctIndex: 0,
      explanation: "23 + 34 = 57."
    },
    {
      question: "Add 76 + 19 mentally.",
      options: ["95", "96", "97", "94"],
      correctIndex: 2,
      explanation: "76 + 19 = 95."
    }
  ]
},
{
  question: "Subtract 86 - 47 mentally.",
  options: ["39", "40", "38", "41"],
  correctIndex: 0,
  explanation: "86 - 47 = 39.",
  subQuestions: [
    {
      question: "Subtract 54 - 29 mentally.",
      options: ["25", "26", "24", "23"],
      correctIndex: 0,
      explanation: "54 - 29 = 25."
    },
    {
      question: "Subtract 72 - 38 mentally.",
      options: ["34", "35", "33", "36"],
      correctIndex: 0,
      explanation: "72 - 38 = 34."
    }
  ]
},
{
  question: "Multiply 12 × 11 mentally.",
  options: ["132", "121", "142", "122"],
  correctIndex: 0,
  explanation: "12 × 11 = 132.",
  subQuestions: [
    {
      question: "Multiply 15 × 10 mentally.",
      options: ["150", "155", "145", "160"],
      correctIndex: 0,
      explanation: "15 × 10 = 150."
    },
    {
      question: "Multiply 8 × 9 mentally.",
      options: ["72", "71", "73", "70"],
      correctIndex: 0,
      explanation: "8 × 9 = 72."
    }
  ]
},
{
  question: "Divide 144 ÷ 12 mentally.",
  options: ["12", "11", "13", "14"],
  correctIndex: 0,
  explanation: "144 ÷ 12 = 12.",
  subQuestions: [
    {
      question: "Divide 81 ÷ 9 mentally.",
      options: ["9", "8", "10", "7"],
      correctIndex: 0,
      explanation: "81 ÷ 9 = 9."
    },
    {
      question: "Divide 56 ÷ 8 mentally.",
      options: ["7", "6", "8", "9"],
      correctIndex: 0,
      explanation: "56 ÷ 8 = 7."
    }
  ]
},
{
  question: "Double 36 mentally.",
  options: ["72", "70", "74", "71"],
  correctIndex: 0,
  explanation: "36 doubled is 72.",
  subQuestions: [
    {
      question: "Double 47 mentally.",
      options: ["94", "92", "96", "93"],
      correctIndex: 0,
      explanation: "47 doubled is 94."
    },
    {
      question: "Double 58 mentally.",
      options: ["116", "114", "118", "115"],
      correctIndex: 0,
      explanation: "58 doubled is 116."
    }
  ]
},
{
  question: "Halve 84 mentally.",
  options: ["42", "43", "41", "44"],
  correctIndex: 0,
  explanation: "84 halved is 42.",
  subQuestions: [
    {
      question: "Halve 56 mentally.",
      options: ["28", "27", "29", "26"],
      correctIndex: 0,
      explanation: "56 halved is 28."
    },
    {
      question: "Halve 90 mentally.",
      options: ["45", "44", "46", "43"],
      correctIndex: 0,
      explanation: "90 halved is 45."
    }
  ]
},
{
  question: "What is 25% of 200?",
  options: ["50", "40", "45", "55"],
  correctIndex: 0,
  explanation: "25% of 200 = 0.25 × 200 = 50.",
  subQuestions: [
    {
      question: "What is 10% of 150?",
      options: ["15", "10", "20", "12"],
      correctIndex: 0,
      explanation: "10% of 150 = 15."
    },
    {
      question: "What is 50% of 60?",
      options: ["30", "20", "40", "35"],
      correctIndex: 0,
      explanation: "50% of 60 = 30."
    }
  ]
},
{
  question: "Round 47 to nearest ten.",
  options: ["50", "40", "45", "48"],
  correctIndex: 0,
  explanation: "47 rounded to nearest ten is 50.",
  subQuestions: [
    {
      question: "Round 62 to nearest ten.",
      options: ["60", "65", "70", "61"],
      correctIndex: 0,
      explanation: "62 rounded to nearest ten is 60."
    },
    {
      question: "Round 88 to nearest ten.",
      options: ["90", "85", "80", "88"],
      correctIndex: 0,
      explanation: "88 rounded to nearest ten is 90."
    }
  ]
},
{
  question: "Find the next number in the pattern: 2, 4, 6, ...",
  options: ["8", "7", "9", "10"],
  correctIndex: 0,
  explanation: "The pattern increases by 2, so next is 8.",
  subQuestions: [
    {
      question: "Pattern: 5, 10, 15, ...",
      options: ["20", "18", "25", "15"],
      correctIndex: 0,
      explanation: "The pattern increases by 5, next is 20."
    },
    {
      question: "Pattern: 1, 4, 9, 16, ...",
      options: ["25", "20", "36", "30"],
      correctIndex: 0,
      explanation: "This is a square number pattern: 1²,2²,3²,4², next is 5²=25."
    }
  ]
},
{
  question: "Estimate: 298 + 407 ≈ ?",
  options: ["700", "600", "800", "750"],
  correctIndex: 3,
  explanation: "Approximate sum: 298+407 ≈ 700+407? Actually nearest hundred method: 300+400=700.",
  subQuestions: [
    {
      question: "Estimate: 149 + 372 ≈ ?",
      options: ["500", "400", "450", "480"],
      correctIndex: 2,
      explanation: "Approximate sum: 149+372 ≈ 150+370=520 ≈ 520."
    },
    {
      question: "Estimate: 675 - 298 ≈ ?",
      options: ["400", "380", "350", "420"],
      correctIndex: 0,
      explanation: "Approximate difference: 675-298 ≈ 700-300=400."
    }
  ]
    }
      {
        question: "Add 78 + 56 mentally.",
        answer: "134",
        subQuestions: [
          "Break it into 70 + 50 and 8 + 6",
          "Sum 120 + 14"
        ]
      },
      {
        question: "Multiply 12 × 15 using mental maths.",
        answer: "180",
        subQuestions: [
          "Multiply 12 × 10 = 120",
          "Multiply 12 × 5 = 60",
          "Add 120 + 60 = 180"
        ]
      }
    ]
  },// --- SNIPPET 2 START ---
{
  question: "Multiply 12 × 8 mentally.",
  options: ["96", "88", "108", "92"],
  correctIndex: 0,
  explanation: "12 × 8 = 96.",
  subQuestions: [
    {
      question: "Multiply 15 × 6 mentally.",
      options: ["80", "90", "100", "95"],
      correctIndex: 1,
      explanation: "15 × 6 = 90."
    },
    {
      question: "Multiply 7 × 14 mentally.",
      options: ["98", "96", "100", "88"],
      correctIndex: 0,
      explanation: "7 × 14 = 98."
    }
  ]
},
{
  question: "Divide 144 ÷ 12 mentally.",
  options: ["12", "11", "10", "13"],
  correctIndex: 0,
  explanation: "144 ÷ 12 = 12.",
  subQuestions: [
    {
      question: "Divide 81 ÷ 9 mentally.",
      options: ["9", "8", "10", "7"],
      correctIndex: 0,
      explanation: "81 ÷ 9 = 9."
    },
    {
      question: "Divide 56 ÷ 8 mentally.",
      options: ["7", "6", "8", "9"],
      correctIndex: 0,
      explanation: "56 ÷ 8 = 7."
    }
  ]
},
{
  question: "Double 48 mentally.",
  options: ["96", "92", "98", "100"],
  correctIndex: 0,
  explanation: "48 × 2 = 96.",
  subQuestions: [
    {
      question: "Double 37 mentally.",
      options: ["74", "72", "70", "76"],
      correctIndex: 0,
      explanation: "37 × 2 = 74."
    },
    {
      question: "Double 59 mentally.",
      options: ["118", "120", "116", "114"],
      correctIndex: 0,
      explanation: "59 × 2 = 118."
    }
  ]
},
{
  question: "Half of 84 mentally.",
  options: ["42", "41", "40", "43"],
  correctIndex: 0,
  explanation: "84 ÷ 2 = 42.",
  subQuestions: [
    {
      question: "Half of 66 mentally.",
      options: ["33", "32", "34", "30"],
      correctIndex: 0,
      explanation: "66 ÷ 2 = 33."
    },
    {
      question: "Half of 98 mentally.",
      options: ["49", "48", "50", "47"],
      correctIndex: 0,
      explanation: "98 ÷ 2 = 49."
    }
  ]
},
{
  question: "Subtract 68 - 29 mentally.",
  options: ["39", "40", "38", "37"],
  correctIndex: 0,
  explanation: "68 - 29 = 39.",
  subQuestions: [
    {
      question: "Subtract 53 - 27 mentally.",
      options: ["26", "25", "27", "24"],
      correctIndex: 0,
      explanation: "53 - 27 = 26."
    },
    {
      question: "Subtract 91 - 36 mentally.",
      options: ["55", "56", "54", "57"],
      correctIndex: 0,
      explanation: "91 - 36 = 55."
    }
  ]
},
{
  question: "Add 134 + 87 mentally.",
  options: ["221", "220", "222", "223"],
  correctIndex: 0,
  explanation: "134 + 87 = 221.",
  subQuestions: [
    {
      question: "Add 256 + 138 mentally.",
      options: ["394", "392", "395", "396"],
      correctIndex: 0,
      explanation: "256 + 138 = 394."
    },
    {
      question: "Add 479 + 321 mentally.",
      options: ["800", "790", "810", "820"],
      correctIndex: 0,
      explanation: "479 + 321 = 800."
    }
  ]
},
{
  question: "Multiply 25 × 16 mentally.",
  options: ["400", "390", "410", "420"],
  correctIndex: 0,
  explanation: "25 × 16 = 400.",
  subQuestions: [
    {
      question: "Multiply 18 × 14 mentally.",
      options: ["252", "250", "260", "245"],
      correctIndex: 0,
      explanation: "18 × 14 = 252."
    },
    {
      question: "Multiply 22 × 13 mentally.",
      options: ["286", "280", "290", "284"],
      correctIndex: 0,
      explanation: "22 × 13 = 286."
    }
  ]
},
{
  question: "Divide 360 ÷ 12 mentally.",
  options: ["30", "28", "32", "29"],
  correctIndex: 0,
  explanation: "360 ÷ 12 = 30.",
  subQuestions: [
    {
      question: "Divide 420 ÷ 14 mentally.",
      options: ["30", "28", "32", "31"],
      correctIndex: 0,
      explanation: "420 ÷ 14 = 30."
    },
    {
      question: "Divide 144 ÷ 16 mentally.",
      options: ["9", "8", "10", "11"],
      correctIndex: 0,
      explanation: "144 ÷ 16 = 9."
    }
  ]
},
{
  question: "Round 347 to the nearest ten.",
  options: ["350", "340", "360", "345"],
  correctIndex: 0,
  explanation: "347 rounded to nearest ten is 350.",
  subQuestions: [
    {
      question: "Round 582 to the nearest ten.",
      options: ["580", "590", "600", "575"],
      correctIndex: 0,
      explanation: "582 rounded to nearest ten is 580."
    },
    {
      question: "Round 619 to the nearest hundred.",
      options: ["600", "620", "610", "700"],
      correctIndex: 0,
      explanation: "619 rounded to nearest hundred is 600."
    }
  ]
},
{
  question: "Find 15% of 200 mentally.",
  options: ["30", "25", "35", "40"],
  correctIndex: 0,
  explanation: "15% of 200 = 0.15 × 200 = 30.",
  subQuestions: [
    {
      question: "Find 20% of 150 mentally.",
      options: ["30", "25", "35", "40"],
      correctIndex: 0,
      explanation: "20% of 150 = 0.2 × 150 = 30."
    },
    {
      question: "Find 10% of 80 mentally.",
      options: ["8", "10", "12", "9"],
      correctIndex: 1,
      explanation: "10% of 80 = 8."
    }
  ]
},
{
  title: "Mental Maths - Snippet 3",
  summary: "10 main questions with 2 sub-questions each to strengthen your mental maths skills.",
  questions: [
    {
      question: "Calculate 25 × 4 mentally.",
      options: ["50", "75", "100", "90"],
      correctIndex: 2,
      explanation: "25 × 4 = 100",
      subQuestions: [
        {
          question: "Multiply 25 × 8 mentally.",
          options: ["200", "180", "150", "175"],
          correctIndex: 0,
          explanation: "25 × 8 = 200"
        },
        {
          question: "Multiply 12 × 25 mentally.",
          options: ["300", "250", "275", "320"],
          correctIndex: 0,
          explanation: "12 × 25 = 300"
        }
      ]
    },
    {
      question: "What is 125 ÷ 5 mentally?",
      options: ["20", "25", "30", "15"],
      correctIndex: 1,
      explanation: "125 ÷ 5 = 25",
      subQuestions: [
        {
          question: "Calculate 225 ÷ 5 mentally.",
          options: ["40", "45", "50", "55"],
          correctIndex: 1,
          explanation: "225 ÷ 5 = 45"
        },
        {
          question: "Calculate 350 ÷ 7 mentally.",
          options: ["45", "50", "55", "60"],
          correctIndex: 3,
          explanation: "350 ÷ 7 = 50"
        }
      ]
    },
    {
      question: "Add 76 + 45 mentally.",
      options: ["111", "121", "131", "141"],
      correctIndex: 2,
      explanation: "76 + 45 = 121",
      subQuestions: [
        {
          question: "Add 89 + 56 mentally.",
          options: ["135", "145", "155", "125"],
          correctIndex: 1,
          explanation: "89 + 56 = 145"
        },
        {
          question: "Add 123 + 78 mentally.",
          options: ["201", "211", "221", "231"],
          correctIndex: 1,
          explanation: "123 + 78 = 201"
        }
      ]
    },
    {
      question: "Subtract 95 − 47 mentally.",
      options: ["38", "48", "58", "68"],
      correctIndex: 0,
      explanation: "95 − 47 = 48",
      subQuestions: [
        {
          question: "Subtract 123 − 78 mentally.",
          options: ["45", "55", "35", "50"],
          correctIndex: 0,
          explanation: "123 − 78 = 45"
        },
        {
          question: "Subtract 200 − 135 mentally.",
          options: ["55", "65", "75", "60"],
          correctIndex: 2,
          explanation: "200 − 135 = 65"
        }
      ]
    },
    {
      question: "Double 36 mentally.",
      options: ["62", "68", "72", "74"],
      correctIndex: 2,
      explanation: "36 × 2 = 72",
      subQuestions: [
        {
          question: "Double 49 mentally.",
          options: ["88", "98", "90", "92"],
          correctIndex: 1,
          explanation: "49 × 2 = 98"
        },
        {
          question: "Double 57 mentally.",
          options: ["104", "112", "114", "110"],
          correctIndex: 2,
          explanation: "57 × 2 = 114"
        }
      ]
    },
    {
      question: "Half of 144 mentally.",
      options: ["60", "66", "70", "72"],
      correctIndex: 3,
      explanation: "144 ÷ 2 = 72",
      subQuestions: [
        {
          question: "Half of 98 mentally.",
          options: ["44", "49", "50", "52"],
          correctIndex: 1,
          explanation: "98 ÷ 2 = 49"
        },
        {
          question: "Half of 200 mentally.",
          options: ["90", "95", "100", "105"],
          correctIndex: 2,
          explanation: "200 ÷ 2 = 100"
        }
      ]
    },
    {
      question: "Multiply 15 × 12 mentally.",
      options: ["160", "170", "180", "190"],
      correctIndex: 2,
      explanation: "15 × 12 = 180",
      subQuestions: [
        {
          question: "Multiply 14 × 13 mentally.",
          options: ["182", "192", "172", "186"],
          correctIndex: 0,
          explanation: "14 × 13 = 182"
        },
        {
          question: "Multiply 16 × 15 mentally.",
          options: ["220", "230", "240", "250"],
          correctIndex: 2,
          explanation: "16 × 15 = 240"
        }
      ]
    },
    {
      question: "Find 10% of 250 mentally.",
      options: ["20", "25", "30", "35"],
      correctIndex: 1,
      explanation: "10% of 250 = 25",
      subQuestions: [
        {
          question: "Find 5% of 200 mentally.",
          options: ["5", "10", "15", "20"],
          correctIndex: 3,
          explanation: "5% of 200 = 10"
        },
        {
          question: "Find 25% of 120 mentally.",
          options: ["25", "30", "35", "40"],
          correctIndex: 3,
          explanation: "25% of 120 = 30"
        }
      ]
    },
    {
      question: "Add 123 + 234 mentally.",
      options: ["347", "357", "367", "377"],
      correctIndex: 1,
      explanation: "123 + 234 = 357",
      subQuestions: [
        {
          question: "Add 56 + 78 mentally.",
          options: ["124", "134", "144", "136"],
          correctIndex: 1,
          explanation: "56 + 78 = 134"
        },
        {
          question: "Add 89 + 67 mentally.",
          options: ["145", "155", "156", "157"],
          correctIndex: 2,
          explanation: "89 + 67 = 156"
        }
      ]
    },
    {
      question: "Subtract 500 − 275 mentally.",
      options: ["215", "225", "235", "245"],
      correctIndex: 1,
      explanation: "500 − 275 = 225",
      subQuestions: [
        {
          question: "Subtract 375 − 128 mentally.",
          options: ["247", "248", "249", "250"],
          correctIndex: 2,
          explanation: "375 − 128 = 247"
        },
        {
          question: "Subtract 600 − 345 mentally.",
          options: ["245", "255", "265", "275"],
          correctIndex: 1,
          explanation: "600 − 345 = 255"
        }
      ]
    }
  ]
},{
  title: "Mental Maths - Snippet 4",
  summary: "Remaining 10 main questions with 2 sub-questions each for mental maths practice.",
  questions: [
    {
      question: "Multiply 18 × 6 mentally.",
      options: ["98", "108", "110", "116"],
      correctIndex: 1,
      explanation: "18 × 6 = 108",
      subQuestions: [
        {
          question: "Multiply 17 × 7 mentally.",
          options: ["119", "121", "115", "123"],
          correctIndex: 0,
          explanation: "17 × 7 = 119"
        },
        {
          question: "Multiply 16 × 8 mentally.",
          options: ["120", "128", "124", "126"],
          correctIndex: 1,
          explanation: "16 × 8 = 128"
        }
      ]
    },
    {
      question: "Divide 144 ÷ 12 mentally.",
      options: ["10", "11", "12", "13"],
      correctIndex: 2,
      explanation: "144 ÷ 12 = 12",
      subQuestions: [
        {
          question: "Divide 180 ÷ 15 mentally.",
          options: ["10", "12", "14", "16"],
          correctIndex: 1,
          explanation: "180 ÷ 15 = 12"
        },
        {
          question: "Divide 225 ÷ 25 mentally.",
          options: ["8", "9", "10", "11"],
          correctIndex: 2,
          explanation: "225 ÷ 25 = 9"
        }
      ]
    },
    {
      question: "Add 234 + 567 mentally.",
      options: ["791", "801", "811", "821"],
      correctIndex: 2,
      explanation: "234 + 567 = 801",
      subQuestions: [
        {
          question: "Add 345 + 456 mentally.",
          options: ["791", "801", "811", "821"],
          correctIndex: 1,
          explanation: "345 + 456 = 801"
        },
        {
          question: "Add 123 + 789 mentally.",
          options: ["902", "912", "922", "932"],
          correctIndex: 1,
          explanation: "123 + 789 = 912"
        }
      ]
    },
    {
      question: "Subtract 678 − 345 mentally.",
      options: ["323", "333", "343", "353"],
      correctIndex: 1,
      explanation: "678 − 345 = 333",
      subQuestions: [
        {
          question: "Subtract 890 − 456 mentally.",
          options: ["424", "434", "444", "454"],
          correctIndex: 1,
          explanation: "890 − 456 = 434"
        },
        {
          question: "Subtract 765 − 289 mentally.",
          options: ["466", "476", "486", "496"],
          correctIndex: 0,
          explanation: "765 − 289 = 476"
        }
      ]
    },
    {
      question: "Multiply 24 × 11 mentally.",
      options: ["254", "264", "274", "284"],
      correctIndex: 1,
      explanation: "24 × 11 = 264",
      subQuestions: [
        {
          question: "Multiply 23 × 12 mentally.",
          options: ["266", "276", "286", "296"],
          correctIndex: 1,
          explanation: "23 × 12 = 276"
        },
        {
          question: "Multiply 21 × 13 mentally.",
          options: ["273", "283", "293", "303"],
          correctIndex: 0,
          explanation: "21 × 13 = 273"
        }
      ]
    },
    {
      question: "Find 15% of 200 mentally.",
      options: ["25", "30", "35", "40"],
      correctIndex: 2,
      explanation: "15% of 200 = 30",
      subQuestions: [
        {
          question: "Find 20% of 150 mentally.",
          options: ["25", "30", "35", "40"],
          correctIndex: 3,
          explanation: "20% of 150 = 30"
        },
        {
          question: "Find 5% of 80 mentally.",
          options: ["3", "4", "5", "6"],
          correctIndex: 1,
          explanation: "5% of 80 = 4"
        }
      ]
    },
    {
      question: "Double 65 mentally.",
      options: ["120", "125", "130", "135"],
      correctIndex: 2,
      explanation: "65 × 2 = 130",
      subQuestions: [
        {
          question: "Double 78 mentally.",
          options: ["150", "155", "156", "160"],
          correctIndex: 2,
          explanation: "78 × 2 = 156"
        },
        {
          question: "Double 49 mentally.",
          options: ["96", "98", "100", "102"],
          correctIndex: 1,
          explanation: "49 × 2 = 98"
        }
      ]
    },
    {
      question: "Half of 90 mentally.",
      options: ["40", "45", "50", "55"],
      correctIndex: 1,
      explanation: "90 ÷ 2 = 45",
      subQuestions: [
        {
          question: "Half of 110 mentally.",
          options: ["50", "55", "60", "65"],
          correctIndex: 1,
          explanation: "110 ÷ 2 = 55"
        },
        {
          question: "Half of 84 mentally.",
          options: ["40", "41", "42", "43"],
          correctIndex: 2,
          explanation: "84 ÷ 2 = 42"
        }
      ]
    },
    {
      question: "Multiply 9 × 16 mentally.",
      options: ["134", "144", "154", "164"],
      correctIndex: 1,
      explanation: "9 × 16 = 144",
      subQuestions: [
        {
          question: "Multiply 8 × 17 mentally.",
          options: ["136", "138", "144", "146"],
          correctIndex: 0,
          explanation: "8 × 17 = 136"
        },
        {
          question: "Multiply 7 × 18 mentally.",
          options: ["122", "124", "126", "128"],
          correctIndex: 2,
          explanation: "7 × 18 = 126"
        }
      ]
    },
    {
      question: "Add 456 + 123 mentally.",
      options: ["579", "569", "587", "577"],
      correctIndex: 0,
      explanation: "456 + 123 = 579",
      subQuestions: [
        {
          question: "Add 234 + 567 mentally.",
          options: ["790", "800", "801", "810"],
          correctIndex: 2,
          explanation: "234 + 567 = 801"
        },
        {
          question: "Add 345 + 432 mentally.",
          options: ["777", "767", "787", "757"],
          correctIndex: 0,
          explanation: "345 + 432 = 777"
        }
      ]
    }
  ]
        }
  {
    title: "Whole Numbers",
    summary: "Understanding properties and operations of whole numbers.",
    questions: [
      {
        question: "What is the least common multiple (LCM) of 6 and 8?",
        answer: "24"
      },
      {
        question: "Find the greatest common divisor (GCD) of 48 and 60.",
        answer: "12"
      }
    ]
  },
  {
    title: "Integers",
    summary: "Operations and properties of positive and negative numbers.",
    questions: [
      {
        question: "Compute: -5 + 12",
        answer: "7"
      },
      {
        question: "Compute: -8 × 4",
        answer: "-32"
      }
    ]
  },
  {
    title: "Exponents",
    summary: "Working with powers and indices.",
    questions: [
      {
        question: "Simplify: 2^3 × 2^4",
        answer: "2^7 = 128"
      },
      {
        question: "Simplify: (3^2)^3",
        answer: "3^6 = 729"
      }
    ]
  },
  {
    title: "Numeric and Geometric Patterns",
    summary: "Recognizing sequences and patterns in numbers and shapes.",
    questions: [
      {
        question: "Find the next 3 numbers in the sequence: 2, 4, 8, 16, ...",
        answer: "32, 64, 128"
      },
      {
        question: "Identify the pattern: 3, 6, 12, 24, ...",
        answer: "Each number is multiplied by 2"
      }
    ]
  },
  {
    title: "Functions and Relationships",
    summary: "Understanding input-output relations and functions.",
    questions: [
      {
        question: "If f(x) = 2x + 3, find f(5)",
        answer: "13"
      },
      {
        question: "If y = 3x - 4, find y when x = 7",
        answer: "17"
      }
    ]
  },
  {
    title: "Algebraic Expressions (Part 1)",
    summary: "Simplifying expressions and using basic algebraic rules.",
    questions: [
      {
        question: "Simplify: 3x + 5x",
        answer: "8x"
      },
      {
        question: "Simplify: 7y - 2y + 5",
        answer: "5y + 5"
      }
    ]
  },
  {
    title: "Algebraic Equations (Part 1)",
    summary: "Solving simple linear equations.",
    questions: [
      {
        question: "Solve: x + 7 = 12",
        answer: "x = 5"
      },
      {
        question: "Solve: 3y - 4 = 11",
        answer: "y = 5"
      }
    ]
  },
  {
    title: "Algebraic Expressions (Part 2)",
    summary: "Working with brackets and powers in expressions.",
    questions: [
      {
        question: "Simplify: 2(x + 3)",
        answer: "2x + 6"
      },
      {
        question: "Simplify: (3y + 4) - (y + 5)",
        answer: "2y - 1"
      }
    ]
  },
  {
    title: "Algebraic Equations (Part 2)",
    summary: "Solving more complex linear equations.",
    questions: [
      {
        question: "Solve: 2x + 5 = 15",
        answer: "x = 5"
      },
      {
        question: "Solve: 3(y - 2) = 9",
        answer: "y = 5"
      }
    ]
  },
  {
    title: "Geometry of 2D Shapes",
    summary: "Understanding shapes, angles, and properties of polygons.",
    questions: [
      {
        question: "How many sides does a hexagon have?",
        answer: "6"
      },
      {
        question: "What is the sum of interior angles of a triangle?",
        answer: "180°"
      }
    ]
  },
  {
    title: "Geometry of Straight Lines and Triangles",
    summary: "Angles, parallel lines, and properties of triangles.",
    questions: [
      {
        question: "If two parallel lines are cut by a transversal, alternate interior angles are?",
        answer: "Equal"
      },
      {
        question: "The sum of angles in a triangle is?",
        answer: "180°"
      }
    ]
  },
  {
    title: "Fractions",
    summary: "Operations with fractions.",
    questions: [
      {
        question: "Simplify: 3/4 + 1/2",
        answer: "5/4 or 1 1/4"
      },
      {
        question: "Multiply: 2/3 × 3/5",
        answer: "2/5"
      }
    ]
  },
  {
    title: "Decimals",
    summary: "Operations with decimal numbers.",
    questions: [
      {
        question: "Add: 4.5 + 3.2",
        answer: "7.7"
      },
      {
        question: "Multiply: 0.6 × 0.5",
        answer: "0.3"
      }
    ]
  },
  {
    title: "Theorem of Pythagoras",
    summary: "Understanding right triangles and Pythagoras’ theorem.",
    questions: [
      {
        question: "In a right triangle with legs 3 and 4, find the hypotenuse.",
        answer: "5"
      },
      {
        question: "Check if triangle with sides 6, 8, 10 is right-angled.",
        answer: "Yes"
      }
    ]
  },
  {
    title: "Area and Perimeter of 2D Shapes",
    summary: "Calculating area and perimeter of common shapes.",
    questions: [
      {
        question: "Find the area of a rectangle with length 5 and width 3.",
        answer: "15"
      },
      {
        question: "Perimeter of a square with side 4?",
        answer: "16"
      }
    ]
  },
  {
    title: "Surface Area and Volume of 3D Objects",
    summary: "Understanding cubes, cuboids, spheres and cylinders.",
    questions: [
      {
        question: "Volume of a cube with side 3?",
        answer: "27"
      },
      {
        question: "Surface area of a cuboid with l=2, w=3, h=4?",
        answer: "52"
      }
    ]
  },
  {
    title: "Data Handling",
    summary: "Collecting, organizing, and interpreting data.",
    questions: [
      {
        question: "Mean of 2, 4, 6, 8?",
        answer: "5"
      },
      {
        question: "Mode of 1, 2, 2, 3, 4?",
        answer: "2"
      }
    ]
  },
  {
    title: "Graphs",
    summary: "Representing data visually.",
    questions: [
      {
        question: "What type of graph is used for showing changes over time?",
        answer: "Line graph"
      },
      {
        question: "Which graph shows parts of a whole?",
        answer: "Pie chart"
      }
    ]
  },
  {
    title: "Transformation Geometry",
    summary: "Translations, reflections, rotations, and enlargements.",
    questions: [
      {
        question: "Flip a shape over a vertical line: What is this called?",
        answer: "Reflection"
      },
      {
        question: "Move a shape 5 units to the right: What is this called?",
        answer: "Translation"
      }
    ]
  },
  {
    title: "Geometry of 3D Shapes",
    summary: "Identifying properties of cubes, cuboids, pyramids, spheres.",
    questions: [
      {
        question: "How many faces does a cube have?",
        answer: "6"
      },
      {
        question: "Number of vertices of a pyramid with square base?",
        answer: "5"
      }
    ]
  },
  {
    title: "Probability",
    summary: "Basic probability of simple events.",
    questions: [
      {
        question: "Probability of flipping a coin and getting heads?",
        answer: "1/2"
      },
      {
        question: "Probability of rolling a die and getting a 6?",
        answer: "1/6"
      }
    ]
  }
];
