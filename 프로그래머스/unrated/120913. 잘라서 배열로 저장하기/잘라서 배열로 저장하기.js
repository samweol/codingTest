function solution(my_str, n) {
    let result = []
    for (let i = 0; i<my_str.length; i+=n) {
        let str = my_str.substr(i, n);
        result.push(str)
    }
    
    return result;
}