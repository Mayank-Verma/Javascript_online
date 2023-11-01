function getCheese() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      const cheese = '🧀';
      if (cheese)
        resolve(` ${cheese}`)
      else
        reject('Chees was rotten!');

    }, 2000)

  })
}

function makeDough(cheese) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const dough = '🍞';

      if (dough)
        resolve(`${cheese} + ${dough}`);
      else reject("Unable to make dough!");
    }, 2000)
  })

}
function bakePizza(dough) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + ' + 🍕';
      if (pizza)
        resolve(`${pizza}`);
      else reject("Unable to make pizza!");
    }, 2000)
  })

}

getCheese().then((data) => {
  console.log(data);
  return makeDough(data);
}).then((data) => {
  console.log(data);
  return bakePizza(data);
}).then((data) => {
  console.log(data);

}).catch((data) => console.log(data))