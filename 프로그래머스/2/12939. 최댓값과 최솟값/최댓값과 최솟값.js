function solution(s) {
    const numArr = s.split(" ").map(item => parseInt(item));
    return `${Math.min(...numArr)} ${Math.max(...numArr)}`
}