function solution(num_list) {
    let even = '';
    let odd = '';
    
    num_list.map(item => {
        if(item % 2 === 0) {
            even += item
        } else {
            odd += item
        }
    })
    
    return Number(even) + Number(odd)
    
    
}