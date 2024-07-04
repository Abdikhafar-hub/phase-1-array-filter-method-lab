// Code your solution here
function findMatching(drivers, name) {
    const lowerCaseName = name.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === lowerCaseName);
  }
  function fuzzyMatch(drivers, letters) {
    const lowerCaseLetters = letters.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowerCaseLetters));
  }
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  