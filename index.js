// Code your solution here
// findMatching()
// 1) returns all drivers that match the passed in name
// 2) returns matching drivers if case does not match but letters do
// 3) returns an empty array if there is no match
function findMatching(drivers, query) {
    return drivers.filter(driver => {
      
      const lowercasedDriver = driver.toLowerCase();
      const lowercasedQuery = query.toLowerCase();
      
      return lowercasedDriver === lowercasedQuery;
    });
  }
  function fuzzyMatch(drivers, query) {
    
    const lowercasedQuery = query.toLowerCase();
    
    
    return drivers.filter(driver => {
   
      const lowercasedDriver = driver.toLowerCase();
      
  
      return lowercasedDriver.startsWith(lowercasedQuery);
    });
  }
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }