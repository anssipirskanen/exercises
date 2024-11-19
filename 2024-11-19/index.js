//a) Basic Functions

//a.1
function max1(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

console.log(max1(5, 10));
console.log(max1(20, 15));

//a.2
function max2(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log(max2(5, 10));
console.log(max2(20, 15));

//a.3
const max3 = (num1, num2) => (num1 > num2 ? num1 : num2);

console.log(max3(5, 10));
console.log(max3(20, 15));

//b) arguments - “array” (1p)

function concatenate() {
  let result = "";
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

console.log(concatenate("a")); // outputs a
console.log(concatenate("a", "b")); // outputs ab
console.log(concatenate("a", "b", "c")); // outputs abc

//c) Functions and properties

function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 5)); // 25

multiply.showDetails = function () {
  console.log("Function name: " + multiply.name);
  console.log("Argument amount: " + multiply.length);
};
multiply.showDetails();

//d) Callbacks

function isPositiveInteger(value, onSuccess, onError) {
  if (Number.isInteger(value) && value > 0) {
    onSuccess();
  } else {
    onError();
  }
}

function success() {
  console.log("Positive integer.");
}

function error() {
  console.log("Not a positive integer.");
}

isPositiveInteger(5, success, error);
isPositiveInteger(-3, success, error);

isPositiveInteger(
  5,
  function () {
    console.log("Positive integer (anonymous).");
  },
  function () {
    console.log("Not a positive integer (anonymous).");
  },
);

isPositiveInteger(
  -5,
  () => {
    console.log("Positive integer (arrow).");
  },
  () => {
    console.log("Not a positive integer (arrow).");
  },
);
