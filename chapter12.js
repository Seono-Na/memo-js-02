// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 3000);
// }

// add(1, 2, (value) => {
//   console.log(value);
// });

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "chicken";
    callback(food);
  }, 3000);
}

function coolDownFood(food, callback) {
  setTimeout(() => {
    const coolDownFood = `식은 ${food}`;
    callback(coolDownFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezeFood = `냉동된 ${food}`;
    callback(freezeFood);
  }, 1000);
}

orderFood((food) => {
  console.log(food);

  coolDownFood(food, (coolDownFood) => {
    console.log(coolDownFood);

    freezeFood(coolDownFood, (freezeFood) => {
      console.log(freezeFood);
    });
  });
});
