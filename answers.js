// answer 1
// numbers = [1, 2, 3, 4, 5];

// function sumArray(numbers) {
//   let sum = 0;
//   sum += numbers.reduce((a, b) => a + b);
//   return sum;
// }
// sumArray(numbers);
// // # Expected result: 15

//answer 2
// numbers = [1, 2, 3, 4, 5];

// function findLargestNumber(numbers) {
//   let largestNumber = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largestNumber) {
//       largestNumber = numbers[i];
//     }
//   }
//   return largestNumber;
// }
// findLargestNumber(numbers);
// # Expected result: 5

//answer 3
// numbers = [1, 2, 3, 4, 5];

// function filterEvenNumbers(numbers) {
//   let evenNumbers = [];
//   evenNumbers = Array.from(numbers.filter((s) => s % 2 == 0));
//   return evenNumbers;
// }
// filterEvenNumbers(numbers);
// # Expected result: [2,4]

//answer 4
// words = ["hello", "world"];
// function getLengthsOfStrings(strings) {
//   let lengths = [];
//   strings.forEach((element) => {
//     lengths.push(element.length);
//   });
//   return lengths;
// }
// getLengthsOfStrings(words);
// # Expected result: [5, 5]

//answer 5
//saya tambah (a, b) => a - b di dalam sort supaya jika arraynya 2 digit atau lebih code masih bisa berfungsi dengan baik
// kekurangannya jika array berisi string maka stringnya tidak akan berurutan berdasarkan abjad.
// numbers = [1, 2, 3, 4, 5];

// function reverseArray(numbers) {
//   let reversedNumbers = [];
//   reversedNumbers = Array.from(numbers);
//   return reversedNumbers.sort((a, b) => a - b).reverse();
// }
// reverseArray(numbers);
// # Expected result: [5,4,3,2,1]

//answer 6
//hasil coba-coba supaya tidak merubah isi dari question code selain yang ada di ... entah kenapa bisa jalan
// aku kira yang di shift() index[0], yang terjadi malah index[1] yang di shift()
// numbers = [1, 2, 3, 4, 5];
// function findSecondSmallestNumber(numbers) {
//   let secondSmallestNumber = 0;
//   secondSmallestNumber = numbers.sort((a, b) => a - b).shift();
//   return secondSmallestNumber;
// }
// findSecondSmallestNumber(numbers);
// console.log(findSecondSmallestNumber(numbers))
// // # Expected result: 2

//alt answer 6 mengubah returnnya sedikit
// numbers = [1, 2, 3, 4, 5];
// function findSecondSmallestNumber(numbers) {
//   let secondSmallestNumber = 0;
//   secondSmallestNumber = numbers.sort((a, b) => a - b);
//   return secondSmallestNumber[1];
// }
// findSecondSmallestNumber(numbers);
// // # Expected result: 2

// answer 7
// words = ["apple", "banana", "avocado"];

// function filterStringsStartingWithA(strings) {
//   let filteredStrings = [];
//   filteredStrings = Array.from(strings);
//   return filteredStrings.filter((e) => e.startsWith("a"));
// }

// filterStringsStartingWithA(words);
// # Expected result: ["apple", "avocado"]
