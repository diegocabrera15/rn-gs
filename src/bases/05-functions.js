//Javascripts funtions

const sayHi = function (name) {
  return `Hi, ${name}`;
};

const sayHi2 = (name) => `Hi, ${name}`;

//console.log(sayHi('Caddy'));
console.log(sayHi);
console.log(sayHi2("Caddy"));

const getUser = () => ({
  uid: "ASDAS",
  username: "Caddy123",
});

const user = getUser();
console.log(user);

//Test
// function getUserACtive(name) {
//     return {
//         uid: 'SDFSD',
//         username: name
//     }
// }
// const userActive = getUserACtive('Fer')
// console.log(userActive);

// const getUserACtive = (name) => {
//   const userActive = {
//     uid: "SDFSD",
//     username: name,
//   };
//   return {userActive};
// };

// const userActive = getUserACtive("Fer");
// console.log(userActive);

const getUserACtive = (name) => ({
  uid: "SDFSD",
  username: name,
});

const userActive = getUserACtive("Fer");
console.log(userActive);
