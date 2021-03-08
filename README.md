# Opdracht: Array methods - deel 2

Voor elk van de onderstaande opdrachtjes heb je één van onderstaande array methods nodig. Om de puzzel op te lossen heb je eerst de test data nodig.

Er zijn meerdere oplossingen mogelijk voor 1 probleem.

- [ ] de `.find` method
- [ ] de `.forEach` method
- [ ] de `.some` method
- [ ] de `.every` method
- [ ] de `.includes` method

De volgende 3 methods zijn wat advanced. Er zijn een aantal opdrachten waar je deze functies **kunt** gebruiken. We gaan er later vandaag nog meer mee oefenen:

- [ ] de `.map` method
- [ ] de `.filter` method
- [ ] de `.reduce` method

- **A** Schrijf een JavaScript functie die een bepaald item weet te **vinden** en terug geeft op basis van een bepaalde value.
  Zoek het hele object van Spiderman, gebaseerd op de **name "Spiderman"**. Gebruik `.find`.

  - Test Data

  ```javascript
  const superheroes = [
    { name: 'Batman', alter_ego: 'Bruce Wayne' },
    { name: 'Superman', alter_ego: 'Clark Kent' },
    { name: 'Spiderman', alter_ego: 'Peter Parker' },
  ];

  // Hier komt jouw functie

  console.log(findSpiderMan(superheroes));
  // Find Spiderman
  // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}
  ```

- **B** In een array met integers. Zorg dat je een `array` returned met de integers verdubbeld. Gebruik de `.forEach` method of, een level hoger: de `.map` method.

  - Test Data

  ```javascript
  doubleArrayValues([1, 2, 3]);
  // result should be [2, 4, 6]
  ```

- **C** In een array met integers. Schrijf een JavaScript functie die checkt of er een nummer (integer) in de array aanwezig is dat groter is dan 10.

  - Test Data

  ```javascript
  containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
  // result should be true
  containsNumberBiggerThan10([1,2,1,2,1,2]})
  // result should be false
  ```

- **D** In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde string: `"Italy"` in de array aanwezig is.

  - Test Data

  ```javascript
  isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']);
  // result should be true
  ```

- **E** In een array met integers. Schrijf een JavaScript functie die elke integer vertienvoudigt. Gebruik `.forEach`.

  - Test data

    ```javascript
    console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
    // result should be [10, 40, 30, 60, 90, 70, 110]
    ```

- **F** In een array met integers. Schrijf een JavaScript functie die checkt of alle waardes in de array onder de 100 zijn, en `true` or `false` retourneert.

  - Test Data

  ```javascript
  console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]));
  // result should be: false
  ```

- **G Bonus!** Deze laatste is wat extra uitdagend. We hopen dat jullie deze challenge accepteren. Gebruik Google en wees een beetje baldadig (gebruik wellicht een klein stukje code die je kopieert).

  In een array met integers. Schrijf een JavaScript functie die alle waardes in de array bij elkaar optelt en **het totaal** van de som retourneert. Gebruik de `.reduce` method. En echt, gebruik Google.

  - Test Data

  ```javascript
  console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]));
  // result should be 1118
  ```
