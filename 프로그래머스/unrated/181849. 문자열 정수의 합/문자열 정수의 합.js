function solution(num_str) {
    const arr = Array.from(num_str, (item) => Number(item));
    return arr.reduce((acc, cur) => acc + cur , 0)
}