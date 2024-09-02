console.log("connect 5");

function User(name, age, gender, mail, state, money, post, department) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.mail = mail;
  this.state = state;
  this.money = money;
  this.post = post;
  this.department = department;
}

const userArr = [];
userArr.push(
  new User(
    "Nilolas Wimpl",
    34,
    "male",
    "qwerasd@gmail.com",
    "France",
    3200,
    "worker",
    322
  ),
  new User(
    "Maks Washington",
    42,
    "male",
    "sadqsd12@gmail.com",
    "USA",
    3200,
    "worker",
    322
  ),
  new User(
    "Mike Welaskis",
    32,
    "male",
    "ghrasd@gmail.com",
    "Italy",
    3200,
    "worker",
    323
  ),
  new User(
    "July Niklsoft",
    32,
    "female",
    "wetoi@gmail.com",
    "Italy",
    3200,
    "worker",
    254
  ),
  new User(
    "Ellizabet Watson",
    29,
    "female",
    "zxceqwei@gmail.com",
    "Ukraine",
    3200,
    "worker",
    254
  ),
  new User(
    "Alen Delon",
    32,
    "male",
    "wetoi@gmail.com",
    "France",
    9200,
    "headOfdepartment",
    323
  ),
  new User(
    "Alice Mirrorwill",
    35,
    "female",
    "qaasstoi@gmail.com",
    "USA",
    8200,
    "headOfdepartment",
    534
  ),
  new User(
    "Sami Naseri",
    34,
    "male",
    "wetoi@gmail.com",
    "France",
    5200,
    "taxist",
    1
  ),
  new User(
    "Angelina Jolie",
    35,
    "female",
    "lkaoq@gmail.com",
    "USA",
    9200,
    "addDepartament",
    254
  ),
  new User(
    "Bread Pit",
    42,
    "male",
    "sertodl@gmail.com",
    "USA",
    12200,
    "President",
    0
  ),
  new User(
    "July Fox",
    29,
    "female",
    "zxcasi@gmail.com",
    "Ukraine",
    5200,
    "secretary",
    5
  )
);

console.log(userArr);

const gmail_user = userArr.filter((User) => User.mail.endsWith("@gmail.com"));
console.log(gmail_user);

const femaleWorker = userArr.filter((User) => User.gender === "female");
const fullAge = femaleWorker.filter((User) => User.age > 18);
const ageFilter = fullAge.filter((User) => User.age < 30);
const stateFilter = ageFilter.filter((User) => User.state === "Ukraine");
const getEmail = stateFilter.map((User) => User.mail);
console.log(getEmail);

const maleWorker = userArr.filter((User) => User.gender === "male");
const fullAgeMan = maleWorker.filter((User) => User.age > 18);
const ageOfMan = fullAgeMan.map((User) => User.age);
console.log(ageOfMan);

console.log("Самый старший");

let old = 0;
for (let user of userArr) {
  if (user.age > old) {
    old = user.age;
  }
}

const oldestUser = userArr.find((User) => User.age === old);
console.log(oldestUser);
