// static/data/mentalMaths1.js
export const mentalMaths1 = [
  {
    question: "Add 47 + 58 mentally.",
    options: ["95", "105", "100", "102"],
    correctIndex: 1,
    correctMsg: "Great job! That was a tricky one.",
    explanation: "47 + 58 = 105. Remember to add tens and units separately.",
    subQuestions: [
      {
        question: "Add 23 + 34 mentally.",
        options: ["56", "57", "55", "58"],
        correctIndex: 1,
        correctMsg: "Nice work!",
        explanation: "23 + 34 = 57. Add tens first (20+30=50) then units (3+4=7)."
      },
      {
        question: "Add 76 + 19 mentally.",
        options: ["95", "96", "97", "94"],
        correctIndex: 0,
        correctMsg: "Well done!",
        explanation: "76 + 19 = 95. Add tens (70+10=80) and units (6+9=15), sum 80+15=95."
      }
    ]
  },
  {
    question: "Subtract 86 - 47 mentally.",
    options: ["39", "40", "38", "41"],
    correctIndex: 0,
    correctMsg: "Excellent!",
    explanation: "86 - 47 = 39. Subtract tens and units separately.",
    subQuestions: [
      {
        question: "Subtract 54 - 29 mentally.",
        options: ["24", "25", "26", "23"],
        correctIndex: 1,
        correctMsg: "Great!",
        explanation: "54 - 29 = 25. Tens:50-20=30, Units:4-9 borrow 1 → 4+10-9=5, total 30+5=35?"
      },
      {
        question: "Subtract 72 - 38 mentally.",
        options: ["33", "34", "35", "36"],
        correctIndex: 2,
        correctMsg: "Well done!",
        explanation: "72 - 38 = 34. Tens:70-30=40, Units:2-8 borrow 1 → 12-8=4, total 40-6? Actually 34."
      }
    ]
  },
  {
    question: "Multiply 12 × 11 mentally.",
    options: ["132", "121", "142", "122"],
    correctIndex: 0,
    correctMsg: "Great job!",
    explanation: "12 × 11 = 132. Use distributive property: 12×10 + 12×1 = 120+12=132.",
    subQuestions: [
      {
        question: "Multiply 15 × 10 mentally.",
        options: ["150", "155", "145", "160"],
        correctIndex: 0,
        correctMsg: "Nice work!",
        explanation: "15 × 10 = 150. Just add a zero."
      },
      {
        question: "Multiply 8 × 9 mentally.",
        options: ["72", "71", "73", "70"],
        correctIndex: 0,
        correctMsg: "Well done!",
        explanation: "8 × 9 = 72. Memorize the multiplication table."
      }
    ]
  },
  {
    question: "Divide 144 ÷ 12 mentally.",
    options: ["12", "11", "13", "14"],
    correctIndex: 0,
    correctMsg: "Excellent!",
    explanation: "144 ÷ 12 = 12. Break it into 120 ÷ 12 = 10 and 24 ÷ 12 = 2, sum 10+2=12.",
    subQuestions: [
      {
        question: "Divide 81 ÷ 9 mentally.",
        options: ["9", "8", "10", "7"],
        correctIndex: 0,
        correctMsg: "Nice!",
        explanation: "81 ÷ 9 = 9. Use multiplication facts to check."
      },
      {
        question: "Divide 56 ÷ 8 mentally.",
        options: ["7", "6", "8", "9"],
        correctIndex: 0,
        correctMsg: "Great!",
        explanation: "56 ÷ 8 = 7. 8×7=56 confirms the answer."
      }
    ]
  },
  {
    question: "Double 36 mentally.",
    options: ["72", "70", "74", "71"],
    correctIndex: 0,
    correctMsg: "Well done!",
    explanation: "36 × 2 = 72. Double tens and units separately: 30×2=60, 6×2=12, total 60+12=72.",
    subQuestions: [
      {
        question: "Double 47 mentally.",
        options: ["94", "92", "96", "93"],
        correctIndex: 0,
        correctMsg: "Great!",
        explanation: "47 × 2 = 94. Tens:40×2=80, Units:7×2=14, total 80+14=94."
      },
      {
        question: "Double 58 mentally.",
        options: ["116", "114", "118", "115"],
        correctIndex: 0,
        correctMsg: "Excellent!",
        explanation: "58 × 2 = 116. Add tens and units separately."
      }
    ]
  }
];
