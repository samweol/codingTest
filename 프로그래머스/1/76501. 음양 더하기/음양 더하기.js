function solution(absolutes, signs) {
    var nums = [];
    for(let i=0; i<absolutes.length; i++) {
        if(signs[i]) {
            nums.push(absolutes[i])
        } else {
            nums.push(absolutes[i] * -1)
        }
    }
    
    return nums.reduce((acc, cur) => {
        return acc + cur
    }, 0)
}