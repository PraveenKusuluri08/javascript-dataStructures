function decendingOrder(n){
  //first approach
//   let convert = n.toString();
//  let  newConvert = convert.split("");
//  let sortArray = newConvert.sort();
//  let reverseArray = sortArray.reverse();
//  let combine= reverseArray.join("");
//  let number = Number(combine);
//  return number ;
//  second approach is

return parseInt(String(n).split("").sort().reverse().join(""))
}

let n =123456

decendingOrder(n);
console.log(decendingOrder(n))
