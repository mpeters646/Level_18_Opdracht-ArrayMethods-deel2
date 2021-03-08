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
const doubleArrayValues = (arr) => {
  console.log(arr.forEach((element) => console.log(element)));
};

doubleArrayValues([1, 2, 3]);
// result should be [2, 4, 6]

// Opdracht C

// Opdracht D

// Opdracht E

// Opdracht F

// Opdracht G
