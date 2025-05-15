let requests = [("excavator", 50000), ("bulldozer", 70000)];
let sellers = [
  ("excavator", 45000),
  ("bulldozer", 68000),
  ("excavator", 48000),
];

function dealMathching(requests, sellers) {
  let mathces = [];
  for (let i = 0; i < requests.length; i++) {
    let minPrice = Infinity;
    let minSeller = null;
    for (let j = 0; j < sellers.length; j++) {
      if (
        sellers[j][0] === requests[i][0] &&
        sellers[j][1] <= requests[i][1] &&
        sellers[j][1] < minPrice
      ) {
        minPrice = sellers[j][1];
        minSeller = sellers[j];
      }
    }
    mathces.push(minSeller ? minSeller[1] : null);
  }
  return mathces;
}

console.log(dealMathching(requests, sellers));
