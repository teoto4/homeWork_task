let countNumber = 0;

function numbers(...theNumb) {
  for (const number of theNumb) {
    if (typeof number === "number") {
      countNumber++;
    }
  }
  console.log(countNumber);
}

numbers(1, 2, 3, 5, true, false, 85, true, "34");
