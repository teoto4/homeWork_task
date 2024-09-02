console.log("connect 4");

const ticket = {
  movie: "Shrek 5",
  date: "20.12.2028",
  place: "5B",
  time: "18:24",
};

const project = {
  name: "FaceBook",
  developer: "BestDeveloper",
  adress: "BestAddress",
  country: "GoodCountry",
  city: "LovelyCity",
};

console.log(ticket, project);

const player = {
  name: "Player1",
  lastName: "Winner",
};

function copyObj({ ...n }) {
  return n;
}

const copy_player = copyObj(player);
copy_player.name = "Player 2";
copy_player.lastName = "loser";
console.log(copy_player);
console.log(player);

function haveIt(name, val) {
  let result;
  for (let key in name) {
    if (key === val) {
      result = true;
      return true;
    } else {
      result = false;
    }
  }
  return result;
}

console.log(haveIt(player, "lastName"));
