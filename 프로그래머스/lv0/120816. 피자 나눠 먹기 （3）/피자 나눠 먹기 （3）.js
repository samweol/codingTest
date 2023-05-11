function solution(slice, n) {
    const pizza = Math.floor(n / slice);
    if(n % slice === 0) {
        return pizza
    } else {
        return pizza + 1
    }
}