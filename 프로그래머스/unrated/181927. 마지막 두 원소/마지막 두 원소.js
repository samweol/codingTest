function solution(num_list) {
    const length = num_list.length
    const result = [...num_list]
    if(num_list[length - 1] > num_list[length - 2]) {
        result.push(num_list[length-1] - num_list[length - 2])
    } else {
        result.push(num_list[length-1] *2)
    }
    
    return result;
}