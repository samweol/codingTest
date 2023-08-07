function solution(names) {
    // 인덱스 번호가 0, 5, 10 순으로 갈 예정
    const arr = [];
    for (let i = 0; i< names.length; i +=5) {
        arr.push(names[i]);
    }
    return arr;
}