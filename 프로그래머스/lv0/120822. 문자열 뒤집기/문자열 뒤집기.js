function solution(my_string) {
    const arr = []
    Array.from(my_string).map(item => arr.unshift(item))
    return arr.join('');
}