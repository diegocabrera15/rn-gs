// const characters = ["Goku", "Vegeta", "Trunks"];
// const [, p1] = characters;
// console.log(p1);

const getArray = () => {
  return ["ABC", 123];
};

const [words, numb] = getArray();
console.log(words, numb);

const usosStados = (value1) => {
  return [ value1,() => { console.log("Hi all")}]
};

const [name, setName] = usosStados('Caddy');
// arr[1]();
console.log(name);
setName()