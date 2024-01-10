function solution(left, right) {
    const findDivisorCount = (num) => {
        let arr = [];
        for(let i=1; i<=num; i++) {
            if(num % i === 0) {
                arr.push(i)
            }
        }
        
        return arr.length % 2 === 0 ? true : false;
        
    }
    
    let even = [];
    let odd = [];
    for(let i=left; i<=right; i++) {
        if(findDivisorCount(i)) {
            even.push(i)
        } else {
            odd.push(i)
        }
    }
    
    return even.reduce((acc, cur) => acc + cur, 0) - odd.reduce((acc, cur) => acc + cur, 0)
    
    
}