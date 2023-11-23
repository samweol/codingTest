function solution(my_string) {
    let arr = [];
    [...my_string].map(item => {
        if(!arr.includes(item)) {
            arr.push(item)
        }
    })
    
    return arr.join("")
}