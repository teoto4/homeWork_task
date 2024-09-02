const get_number = document.querySelector(".get_number");
const number_send = document.querySelector("#send_reverse");
const number_result = document.querySelector(".number_result");

function reverseNumb(number, number_to_log = "") {
  if (number < 10) {
    console.log(number);
    number_to_log += number;
    return number_to_log;
  }

  console.log(number % 10);
  number_to_log += number % 10;

  return reverseNumb(Math.floor(number / 10), number_to_log);
}

const reversed = reverseNumb(get_number.value);
console.log(reversed);

number_send.addEventListener("click", (e) => {
  console.log(get_number);
  const reversed = reverseNumb(get_number.value);
  number_result.textContent = `Reversed number: ${reversed}`;
});
