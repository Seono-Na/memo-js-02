//단락 평가

// function returnFalse() {
//   console.log("function of False");
//   return undefined;
// }

// function returnTrue() {
//   console.log("function of True");
//   return 10;
// }

// console.log(returnFalse() && returnTrue());
// console.log(returnTrue() && returnFalse());
// console.log(returnTrue() || returnFalse());

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "James" });
