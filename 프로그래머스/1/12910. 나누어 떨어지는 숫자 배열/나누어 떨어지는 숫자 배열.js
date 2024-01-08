function solution(arr, divisor) {
    const result = arr.filter(item => item % divisor === 0)
    return result.length ? result.sort((a, b) => a - b) : [-1]
}