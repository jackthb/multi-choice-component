type Question = {
  id: number;
  question: string;
  option: {
    label: string;
    isCorrect: boolean;
  }[][];
};

export const defaultOptions: Question = {
  id: 0,
  question: "What are the ideal conditions inside an office?",
  option: [
    [
      { label: "Good Pay", isCorrect: true },
      { label: "Bad pay", isCorrect: false },
    ],
    [
      { label: "lot of meetings", isCorrect: false },
      { label: "less meetings", isCorrect: true },
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
  id: 1,
  question: "An animal cell contains:",
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
  id: 2,
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
