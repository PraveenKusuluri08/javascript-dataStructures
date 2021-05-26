function twoSum(arr,tar){
  var sum=[];
  var i,j;
  for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]===tar){
        sum.push([indexof(arr[i]),indexof(arr[j])]);

      }
    }
  }
  console.log(sum)
}
var arr=[2,7,11,15]
 var tar=9
 
 twoSum(arr,tar)