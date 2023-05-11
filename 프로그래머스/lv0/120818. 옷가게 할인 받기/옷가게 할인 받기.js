function solution(price) {
    let percent = 0
    if(price >= 100000) {
        percent = 0.05
    }
    if (price >= 300000) {
        percent = 0.1
    }
    if (price >= 500000) {
        percent = 0.2
    } 
    
    return Math.floor(price * (1 - percent))
}