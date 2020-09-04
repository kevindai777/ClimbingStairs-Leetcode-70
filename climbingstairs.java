//Java Solution

class Solution {
    public int climbStairs(int n) {
        int arr[] = new int[n + 2];
        arr[0] = 0;
        arr[1] = 1;
        
        for (int i = 2; i < n + 2; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        
        return arr[arr.length - 1];
    }
}
