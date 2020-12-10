// import { heroes } from "./data/heroes";

import heroes, { owners } from "../data/heroes";

const getHeoreByID = (id) => {
  return heroes.find((el) => el.id === id);
};

// console.log(getHeoreByID(2));

const getHeroesByOwner = (owner) => {
  return heroes.filter((el) => el.owner === owner);
};

// console.log(getHeroesByOwner("Marvel"));
export { getHeoreByID, getHeroesByOwner };
