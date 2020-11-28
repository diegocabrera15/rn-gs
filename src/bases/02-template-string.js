const name = "Diego";
const surname = "Cabrera";

const fullName = name + surname;
console.log(fullName);

const fullName2 = `${name} ${surname} `;
console.log(fullName2);

function getHi(name) {
  return "Hi! all" + name;
}

console.log(`This is a text ${getHi}`);
