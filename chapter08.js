// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 맞게 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

let doubleArr = [];

arr1.forEach((item) => {
  doubleArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 1, 2];
let index = arr3.indexOf(20);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백 획수를 만족하는
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item === 999);

// 얉은 비교, 깊은 비교
let objectArr = [{ name: "홍길동" }, { name: "James" }];

console.log(objectArr.indexOf({ name: "홍길동" }));

console.log(objectArr.findIndex((item) => item.name === "홍길동"));

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "홍길동" }, { name: "James" }];

const finded = arr5.find((item) => item.name === "홍길동");

console.log(finded);
