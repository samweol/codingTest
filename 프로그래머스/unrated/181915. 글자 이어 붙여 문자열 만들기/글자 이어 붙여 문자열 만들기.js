function solution(my_string, index_list) {
    const strArray = [...my_string];
    const result = []
    index_list.map(item => {
    result.push(strArray[item]);    
    })
    
    const word = result.reduce((acc, cur) => acc + cur , '')
    
    return word;
}