function solution(my_string, n) {
    let result = ''
    Array.from(my_string).map(item => {
        for(let i = 0; i< n; i ++) {
            result += item
        }
    })
    return result
}