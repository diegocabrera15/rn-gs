const person = {
  name: "Sandra",
  surname: "Tulcan",
  age: 32,
  addres: {
      coutry: 321654,
      zip: 156,
      lat: 1236.651654,
      lng: 1236.651654,
  }
};
// console.table({ person });

const person2 = {...person} //if we need a object copy 
person2.name = 'Cecy'

console.log({ person });
console.log({ person2 });