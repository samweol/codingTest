function solution(my_string) {
    const number = ["0", "1", "2", "3", "4", "5", "6", "7","8","9"]
    const result = [...my_string].filter(item => number.includes(item));
    return result.map(item => Number(item)).sort((a, b) => a - b)
}