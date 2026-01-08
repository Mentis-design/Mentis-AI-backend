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
  },
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
