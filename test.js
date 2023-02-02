const students = [
  {
    id: 1,
    name: "Harry",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 2,
    name: "Ron",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 3,
    name: "Neville",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 4,
    name: "Dean",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 5,
    name: "Seamus",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 6,
    name: "Hermoine",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 7,
    name: "Lavender",
    house: "Gryffindor",
    expelled: false,
  },

  {
    id: 9,
    name: "Ernie",
    house: "Hufflepuff",
    expelled: false,
  },
  {
    id: 10,
    name: "Justin",
    house: "Hufflepuff",
    expelled: false,
  },
  {
    id: 11,
    name: "Hannah",
    house: "Hufflepuff",
    expelled: false,
  },
  {
    id: 12,
    name: "Susan",
    house: "Hufflepuff",
    expelled: false,
  },
  {
    id: 13,
    name: "Terry",
    house: "Ravenclaw",
    expelled: false,
  },
  {
    id: 14,
    name: "Mandy",
    house: "Ravenclaw",
    expelled: false,
  },
  {
    id: 27,
    name: "Daphne",
    house: "Slytherin",
    expelled: false,
  },

  {
    id: 15,
    name: "Michael",
    house: "Ravenclaw",
    expelled: false,
  },
  {
    id: 16,
    name: "Anthony",
    house: "Ravenclaw",
    expelled: false,
  },
  {
    id: 17,
    name: "Padma",
    house: "Ravenclaw",
    expelled: false,
  },
  {
    id: 18,
    name: "Lisa",
    house: "Ravenclaw",
    expelled: false,
  },
  {
    id: 8,
    name: "Parvati",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 19,
    name: "Draco",
    house: "Slytherin",
    expelled: false,
  },
  {
    id: 20,
    name: "Draco",
    house: "Slytherin",
    expelled: true,
  },
  {
    id: 21,
    name: "Vincent",
    house: "Slytherin",
    expelled: false,
  },
  {
    id: 22,
    name: "Gregory",
    house: "Slytherin",
    expelled: false,
  },
  {
    id: 23,
    name: "Blaise",
    house: "Slytherin",
    expelled: false,
  },
  {
    id: 24,
    name: "Theodore",
    house: "Slytherin",
    expelled: false,
  },
  {
    id: 25,
    name: "Pansy",
    house: "Slytherin",
    expelled: false,
  },
  {
    id: 26,
    name: "Millicent",
    house: "Slytherin",
    expelled: false,
  },
];

students.sort((a, b) => (a.house > b.house ? 1 : -1));

console.log(students);
