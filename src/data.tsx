type Question = {
  question: string;
  option: {
    correct: string;
    wrong: string;
  }[];
};

export const defaultOptions: Question = {
  question: "What are the ideal conditions inside an office?",
  option: [
    { correct: "good pay", wrong: "bad pay" },
    { correct: "lot of meetings", wrong: "less meetings" },
    { correct: "free coffee", wrong: "expensive coffee)" },
    { correct: "dog in office", wrong: "bear in office" },
  ],
};

export const altOptions: Question = {
  question: "What day is it today?",
  option: [
    { correct: "The day is", wrong: "The month is" },
    { correct: "Saturday", wrong: "Sunday" },
  ],
};
