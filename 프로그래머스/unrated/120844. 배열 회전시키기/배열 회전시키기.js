function solution(numbers, direction) {
    let result = [];
    const end = numbers.length - 1;
    if(direction === "left") {
        numbers.forEach((item, idx) => {
            if(idx === 0) {
                result [end] = item
            } else {
            result[idx - 1] = item;
                
            }
        })
    } else {
        numbers.forEach((item, idx) => {
            if(idx === end) {
                result[0] = item
            } else {
            result [idx + 1] = item;
                
            }
        })
        
    }
    
    return result;
}