const person = {
  name: "Diego",
  age: 45,
  password: "Asd",
};

const { name, age, password } = person;

console.log(name);
console.log(age);
console.log(password);

// console.log(person.age);
// console.log(person.name);
// console.log(person.password);

const returnPerson = ({ name, age, password }) => {
  //console.log(name, age, password);
  return {
    namePerson: name,
    agePerson: age,
    passPerson: password,
    location: {
      lat: 123,
      lng: 345,
    },
  };
};

const {
  namePerson,
  agePerson,
  passPerson,
  location: { lat, lng },
} = returnPerson(person);

console.log(namePerson, agePerson, passPerson);
console.log(lat, lng);
