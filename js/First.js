// alert("Function - 1");
const water_input = document.querySelector(".water");
const water_send = document.querySelector("#water_send");
const result = document.querySelector(".result");

console.dir(water_input);

let water = water_input;
const alerts = 10;
let days;

function water_consumption() {
  let daysCalc = 0;
  const consumption = Math.round((water.value / 100) * alerts);
  console.log(consumption);

  while (water.value > alerts) {
    water.value = water.value - consumption;
    if (water.value < alerts) {
      return daysCalc;
    }

    daysCalc++;
    days = daysCalc;
    console.log(days);
  }
}

water_send.addEventListener("click", (e) => {
  console.log(water);
  water_consumption(water.value);
  result.textContent = `Result: ${days} days`;
});

// water_consumption(water);
// alert(days);
// console.log(days);
