let hw = "iremekseraaa";
let frekans = function(hw) {
  hw = hw.split("");
  const letter = {};
  let maxLet = 0;
  let maxI = 0;
  hw.forEach(n => {
    if (!Object.keys(letter).includes(n)) letter[n] = [];
    letter[n]++;

    if (maxLet < letter[n]) {
      maxLet = letter[n];
      maxI = n;
    } else if (maxLet == letter[n]) {
      if (n < maxI) {
        maxLet = letter[n];
        maxI = n;
      }
    }
  });

  return maxI;
};
console.log(frekans(hw));
