function minimumCoin(coins, m, w) {
  if (w === 0) {
    //if cost is zero there is no result
    return 0
  }
  let res = Number.MAX_VALUE

  for (let i = 0; i < m; i++) {
    if (coins[i] <= w) {
      let subRes = minimumCoin(coins, m, w - coins[i])

      if (subRes != res && subRes + 1 < res) {
        res = subRes + 1
      }
    }
  }
  return res
}
let arr = [2, 3, 5, 10]
let m = arr.length
console.log(minimumCoin(arr, m, 15))
