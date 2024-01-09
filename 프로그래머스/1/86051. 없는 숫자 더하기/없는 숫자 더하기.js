function solution(numbers) {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return nums.filter(item => !numbers.includes(item)).reduce((acc, cur) => acc + cur, 0)
}