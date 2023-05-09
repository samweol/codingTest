function solution(num_list) {
    let evenCount = 0;
    let oddCount = 0;
    num_list.map(item => {
        item % 2 === 0 ? evenCount ++ : oddCount ++
    })
    
    return [evenCount, oddCount]
}