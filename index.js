function findPossibleCombinations(candidates, target) {
  let result = [];
  let temp = [];
  let tempMatchedPatterns = [''];
  let matchedPatterns = [];

  getCombinations(candidates, 0, target, 0, temp, result, matchedPatterns, tempMatchedPatterns);
  return result;
}

function getCombinations (candidates, start, target, sum, temp, result, matchedPatterns, tempMatchedPatterns) {
  if (sum > target) {
    return;
  }

  if (sum == target) {
    if (!matchedPatterns.includes(tempMatchedPatterns[0].split("").sort().join(""))) {
      result.push([...temp]);
      matchedPatterns.push(tempMatchedPatterns[0].split("").sort().join(""));
    }
    
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    temp.push(candidates[i]);
    tempMatchedPatterns[0] += candidates[i].toString();
    getCombinations(candidates, i, target, sum + candidates[i], temp, result, matchedPatterns, tempMatchedPatterns);
    temp.pop();
    tempMatchedPatterns[0] = tempMatchedPatterns[0].slice(0, -1);
  }
}

let firstTest = findPossibleCombinations ([2,1,3, 1, 6,7,7], 7);
let secondTest = findPossibleCombinations([2,8, 8,2, 3,5, 8], 8);

console.log({ firstTest, secondTest });
