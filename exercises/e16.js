import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902


export function getGreatestDiscoveryYear(data) {
  const discoveryYears = data.asteroids.map(obj => obj.discoveryYear);

  const thisIsIt = (years) => {
    const yearCount = years.reduce((allYears, year) => {
        const count = allYears[year] ?? 0;
        return {
          ...allYears,
          [year]: count + 1,
        };
      },{});
        const winnerYear = Math.max(...Object.values(yearCount));
        return Number(Object.keys(yearCount).find((key) => yearCount[key] === winnerYear));
    }
return thisIsIt(discoveryYears);
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
