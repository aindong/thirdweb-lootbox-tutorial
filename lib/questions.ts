export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "Who is ASH ketchum's first pokemon?",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e4/Ash_Ketchum_Journeys.png",
    answers: ["Evee", "Squirtle", "Charmander", "Pikachu"],
    correctAnswerIndex: 3,
  },
  {
    questionText: "Who is professor OAK?",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/3/3e/Lets_Go_Pikachu_Eevee_Professor_Oak.png/180px-Lets_Go_Pikachu_Eevee_Professor_Oak.png",
    answers: ["A bystander", "An Enemy", "A Professor", "A Pokemon"],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "How many gym badges are needed on Pokemon Yellow to enter Pokemon League?",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/c/c9/Ash_Unova_Badges.png/800px-Ash_Unova_Badges.png",
    answers: ["2", "5", "6", "8"],
    correctAnswerIndex: 3,
  },
  {
    questionText: "Who is suicune?",
    answers: ["Pokemon", "Legendary Pokemon", "An item", "No one"],
    correctAnswerIndex: 1,
  },
  {
    questionText: "First Pokemon Version on Gameboy?",
    answers: ["Yellow", "White", "Blue", "Red"],
    correctAnswerIndex: 0,
  },
];

export default quizQuestions;
