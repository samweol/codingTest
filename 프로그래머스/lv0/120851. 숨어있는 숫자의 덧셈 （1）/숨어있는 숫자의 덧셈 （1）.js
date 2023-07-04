function solution(my_string) {
    const arr = [...my_string];
    const resultArr = []
    arr.map(item => {
        if(!!Number(item)) {
            resultArr.push(Number(item))
        }
    })
    
    const result = resultArr.reduce((acc, cur) => acc + cur, 0)
    
    return result;
}