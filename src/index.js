const questions = [
  {
    q: "when did pele die",
    o: [1991, 1992, 2002, 2022],
    a: 3,
  },
  {
    q: "what is the capital of France",
    o: ["London", "Paris", "Berlin", "Madrid"],
    a: 1,
  },
  {
    q: "who wrote the novel 'To Kill a Mockingbird'",
    o: ["Harper Lee", "John Steinbeck", "F. Scott Fitzgerald", "Mark Twain"],
    a: 0,
  },
  {
    q: "what is the name of the first man to walk on the moon",
    o: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Alan Shepard"],
    a: 0,
  },
  {
    q: "which planet is closest to the sun",
    o: ["Venus", "Mars", "Mercury", "Jupiter"],
    a: 2,
  },
  {
    q: "which country is known as the 'Land of the Rising Sun'",
    o: ["China", "Japan", "India", "Thailand"],
    a: 1,
  },
  {
    q: "who painted the famous artwork 'The Starry Night'",
    o: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Rembrandt"],
    a: 0,
  },
  {
    q: "what is the highest mountain in the world",
    o: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    a: 0,
  },
  {
    q: "what is the name of the longest river in the world",
    o: ["Amazon", "Nile", "Yangtze", "Yellow"],
    a: 1,
  },
  {
    q: "who is considered the father of modern physics",
    o: [
      "Albert Einstein",
      "Isaac Newton",
      "Stephen Hawking",
      "Galileo Galilei",
    ],
    a: 1,
  },
  {
    q: "which country is the birthplace of soccer (football)",
    o: ["England", "Brazil", "Argentina", "Spain"],
    a: 0,
  },
];

export const questionAndAnswers = questions.sort(() => Math.random() - 0.5);
