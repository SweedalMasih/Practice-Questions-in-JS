// Using flat method

const arr = [1, 2, 3, 4, [5, 6]];
console.log(arr.flat()); // by default is no params are sent then its 1, if you do not know the depth(nested) of the array the pass infinity

// to solve 1 depth of array
const arr2 = [1, 2, 3, 4, [5, 6]];
let newArr = [];
for (let i = 0; i < arr2.length; i++) {
  if (Array.isArray(arr2[i])) {
    newArr = newArr.concat(arr2[i]);
  } else {
    newArr.push(arr2[i]);
  }
}

console.log(newArr);

// to flatten multiple depths
const arr3 = [1, 2, 3, 4, 5, [6, 7, [8]]];
