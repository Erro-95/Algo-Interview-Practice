const minMissingChange = (arrOfCoins, change = 0) => {
  if (arrOfCoins.length) {
    let missingChange;

    while (missingChange === undefined) {
      change++;
      let newChange = change;
      for (let coin of arrOfCoins) {
        if (newChange > 0) newChange -= coin;
        else if (newChange < 0) newChange += coin;
        else break;
      }
      if (newChange === 0) missingChange = newChange;
    }

    return missingChange;
  } else return 1;
};
