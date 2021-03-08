// Opdracht A
const superheroes = [
  { name: 'Batman', alter_ego: 'Bruce Wayne' },
  { name: 'Superman', alter_ego: 'Clark Kent' },
  { name: 'Spiderman', alter_ego: 'Peter Parker' },
];

// Hier komt jouw functie
// const findSpiderMan = (heroes) => {
//   return heroes.find((superhero) => superhero.name === 'Spiderman');
// };

const findSpiderMan = (heroes) => heroes.find((superhero) => superhero.name === 'Spiderman');

console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// Opdracht B
// Gebruik de .forEach method of, een level hoger: de .map method.
const doubleArrayValues = (inputArray) => {
  console.log(inputArray.map((value) => value * 2));
};

doubleArrayValues([1, 2, 3]);
// result should be [2, 4, 6]

// Opdracht C
const containsNumberBiggerThan10 = () => {
  // code here
};

containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]);
// result should be true
containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]);
// result should be false

// Opdracht D

// Opdracht E

// Opdracht F

// Opdracht G
