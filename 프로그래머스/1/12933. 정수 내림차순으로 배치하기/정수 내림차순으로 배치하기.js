function solution(n) {
    return Number([...String(n)].sort((a, b) => Number(b) - Number(a)).join().replaceAll(",", ""));
}