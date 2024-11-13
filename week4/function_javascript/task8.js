// DEFFERENCW BETWEEN LOCAL AND GLOBAL VARIABLE
let nationalPopulation = 45000000; 

function displayStats() {
  let localPopulation = 50000; 
  console.log(`National population: ${nationalPopulation}`);
  console.log(`Local population: ${localPopulation}`);
}
displayStats();
