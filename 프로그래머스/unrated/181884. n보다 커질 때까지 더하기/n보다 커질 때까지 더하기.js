function solution(numbers, n) {
    const sum = numbers.reduce((acc, cur) => {
        if (acc > n) return acc;
        return acc + cur;
    }, 0)
    return sum
}