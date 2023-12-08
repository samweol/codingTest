function solution(sides) {
    // 내림차순으로 정렬먼저하기
    sides.sort((a, b) => b - a);
    // 11이 제일 길 때
    let count1 = 0
    for(let i = sides[0] - sides[1]; i<sides[0]; i++) {
        count1++;
    }

    // 다른 한변이 제일 길 때
    let count2 = 0;
    for(let i = sides[0] + 1; i<sides[0] + sides[1]; i++){
        count2++
    }
    
    return count1 + count2
}