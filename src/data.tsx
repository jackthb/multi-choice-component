type Question = {
  question: string;
  option: {
    label: string;
    isCorrect: boolean;
  }[][];
};

export const defaultOptions: Question = {
  question: "What are the ideal conditions inside an office?",
  option: [
    [
      { label: "Good Pay", isCorrect: true },
      { label: "Bad pay", isCorrect: false },
    ],
    [
      { label: "lot of meetings", isCorrect: true },
      { label: "less meetings", isCorrect: false },
    ],
    [
      { label: "free coffee", isCorrect: true },
      { label: "expensive coffee", isCorrect: false },
    ],
    [
      { label: "dog in office", isCorrect: true },
      { label: "bear in office", isCorrect: false },
    ],
  ],
};

export const animalCell: Question = {
  question: "An animal cell contains",
  option: [
    [
      { label: "Ribosomes", isCorrect: true },
      { label: "Cell wall", isCorrect: false },
    ],
    [
      { label: "Cytoplasm", isCorrect: true },
      { label: "Chloroplast", isCorrect: false },
    ],
    [
      { label: "Partially permeable membrane", isCorrect: true },
      { label: "Impermeable membrane", isCorrect: false },
    ],
    [
      { label: "Mitochondria", isCorrect: true },
      { label: "Cellulose", isCorrect: false },
    ],
  ],
};

export const altOptions: Question = {
  question: "What day is it today?",
  option: [
    [
      { label: "The day is", isCorrect: true },
      { label: "The month is", isCorrect: false },
    ],
    [
      { label: "Saturday", isCorrect: true },
      { label: "Sunday", isCorrect: false },
    ],
  ],
};
