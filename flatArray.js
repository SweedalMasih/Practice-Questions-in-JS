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
const newArr2 = [];
const flattenArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i]);
    } else {
      newArr2.push(arr[i]);
    }
  }
};

flattenArray(arr3);
console.log(newArr2);

// to flatten multiple depths and no duplicates should be present in the flattened array
const arr4 = [1, 2, 3, 4, 5, [6, 7, [8]], [6, 7]];
const newArr3 = [];
const flattenArray2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray2(arr[i]);
    } else {
      if (newArr3.indexOf(arr[i]) === -1) {
        newArr3.push(arr[i]);
      }
    }
  }
};

flattenArray2(arr4);
console.log(newArr3);
