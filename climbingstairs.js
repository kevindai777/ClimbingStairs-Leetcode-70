//Objective is to find the # of ways to climb 'n' number of stairs.
//For example, 1 stair is '1', 2 stairs is '2'

let n = 3



//O(n) solution via fibonacci sequence

//We realize that as the number of stairs grows, the number of ways to climb
//is the sum of the previous two terms

//For 0 and 1 stairs
let arr = [0, 1]

for (let i = 2; i < n + 2; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
}

return arr[arr.length - 1]