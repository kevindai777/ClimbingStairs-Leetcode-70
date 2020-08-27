//Objective is to find the # of ways to climb 'n' number of stairs.
//For example, 1 stair is '1', 2 stairs is '2'

let n = 3


//O(n) solution where n is the number of stairs to climb
//We use dynamic programming to memoize and update the number of ways to climb

//We realize that as the number of stairs grows, the number of ways to climb
//is the sum of the previous two terms

//Solutions for 0 and 1 stairs respectfully
let dp = [0, 1]

//Get the sum of the previous two terms and expand array
for (let i = 2; i < n + 2; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
}

return dp[dp.length - 1]
