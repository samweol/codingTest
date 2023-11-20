function solution(box, n) {
    // 배열 box, [가로, 세로, 높이]
    // 주사위 모서리의 길이 n (주사위는 정육면체)
    
    const x = Math.floor(box[0] / n);
    const y = Math.floor(box[1] / n);
    const z = Math.floor(box[2] / n)
    return x * y * z
}