function solution(sides) {
    sides.sort((a, b) => b - a); // 내림차순
    if(sides[0] < sides[1] + sides[2]) {
        return 1
    } else {
        return 2
    }
}