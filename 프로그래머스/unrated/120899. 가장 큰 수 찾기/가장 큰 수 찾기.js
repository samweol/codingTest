function solution(array) {
  const normal = [...array];
    const max = array.sort((a, b) => b - a) [0];
    const index = normal.indexOf(max)
    return [max, index]
}