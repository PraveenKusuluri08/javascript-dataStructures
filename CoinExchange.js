function costCoin(s,m,n){
  if(n===0){
    //if cost is zero there is result
    return 1;
  }
  if(n<0){
    //if cost is zero then there is no result
    return 0;
  }
  //if array length is zero and cost is greater than 1 no result
  if(m<=0 && n>=1)
  return 0;

  return costCoin(s,m-1,n)+costCoin(s,m,n-s[m-1])

}
let arr =[2,3,5,10]
let m = arr.length;
console.log(costCoin(arr,m,15))