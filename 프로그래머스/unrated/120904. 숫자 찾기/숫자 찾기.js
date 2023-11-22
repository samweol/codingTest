function solution(num, k) {
    const numArr = [...String(num)];
    return numArr.indexOf(String(k)) !== -1 ? numArr.indexOf(String(k))+1 : -1
}