import { getHeoreByID, getHeroesByOwner } from "./bases/08-imp.exp";

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const hero = getHeoreByID(2);
//     //   console.log(hero);
//     resolve(hero);
//     // reject('Hero no found')
//   }, 2000);
// });

// promise
//   .then((hero) => {
//     console.log("hero", hero);
//   })
//   .catch((err) => console.warn(err));

const getHeroByIDAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeoreByID(id);
      if (hero) {
        resolve(hero);
      } else {
        reject('Hero not found');
      }
      //   console.log(hero);
      //   resolve(hero);
    }, 2000);
  });
};

getHeroByIDAsync(2)
  .then(console.log)
  .catch(console.warn)
