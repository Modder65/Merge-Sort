/* Fibonnaci Sequence */
// normaly
function fibs(n) {
  let fibArray = [0, 1];
  for (let i = 2; i < n; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray;
}

// recursively
function fibsRecursive(n) {
  if (n <= 0) {
      return [];
  } else if (n === 1) {
      return [0];
  } else if (n === 2) {
      return [0, 1];
  } else {
      let fibArray = fibsRecursive(n - 1);
      fibArray.push(fibArray[n - 2] + fibArray[n - 3]);
      return fibArray;
  }
}





/* Merge Sort */

// generates 8 random numbers from 1 - 100, and appends them to an array
let unsortedArray = [];

function fillArray(unsortedArray) {
    while (unsortedArray.length < 8) {
      let num = Math.floor(Math.random() * 100);
      if (!unsortedArray.includes(num)) {
        unsortedArray.push(num);
      }
    }
  }

fillArray(unsortedArray);


// recursive mergeSort algorithm
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    // splits the array into 2 separate halves
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    // recursively calls the merge function,
    // passing in the values of mergeSort(left) and mergeSort(right)
    // as the left and right parameters for the merge function
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  // creates empty array for final result
  // creates variables to reference the index of left and right half of the array
  const sorted = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // while the left and right half of the array remain unsorted
  // compare an the left and right index 
  // add the smaller number to the final array
  // increase the index value for both sides so the loop continues
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sorted.push(left[leftIndex]);
      leftIndex++;
    } else {
      sorted.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // finally return the sortedArray as a concatenation of the newly sorted left and right halves,
  // of the original array
  return sorted.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);


// alternate method that
// Continuosly finds the smallest number in the array
// removes it from the old array
// transfers it to a new array, until old array is empty
// new array is sorted least to greatest
function sortBySmallest(arr) {
    const sortedArray = [];
  
    while (arr.length > 0) {
      const smallestIndex = arr.indexOf(Math.min(...arr));
      const smallestNumber = arr.splice(smallestIndex, 1)[0];
      sortedArray.push(smallestNumber);
    }
  
    return sortedArray;
}
  //const sortedNumbers = sortBySmallest(unsortedArray);
  //console.log(sortedNumbers);


