function solution(arr1, arr2) {
   const length1 = arr1.length;
    const lenght2 = arr2.length;
    if(length1 > lenght2) {
        return 1
    } else if (length1 == lenght2) {
        const sum1 = arr1.reduce((acc, cur) => acc + cur ,0)
        const sum2 = arr2.reduce((acc, cur) => acc + cur ,0)
        if(sum1 > sum2) {
            return 1
        } else if (sum1 < sum2) {
            return -1
        } else {
            return 0
        }
    } else {
        return -1
    }
}