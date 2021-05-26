function arraySum(arr1, arr2) {
  let arr3 = []
  let count = 0
  let i
  //checking Array is non zero or not
  if (arr1.length === 0) {
    console.log("array1 is empty")
  }
  if (arr2.length === 0) {
    console.log("array2 is empty")
  }

  //addition process
  while (count < arr1.length && count < arr2.length) {
    arr3.push(arr1[count] + arr2[count])
    count++
  }

  if (count === arr1.length) {
    for (i = count; i < arr1.length; i++) {
      arr3.push(arr1[i])
    }
  } else {
    for (i = count; i < arr2.length; i++) {
      arr3.push(arr2[i])
    }
  }
  return arr3
}
let arr1 = [1, 2, 3, 4, 4, 5]
let arr2 = [0, 2, 1, 4, 2]
console.log(arraySum(arr1, arr2))
