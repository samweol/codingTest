function solution(arr, n) {
    const flag = arr.length % 2 === 0;
    let answer = []
    if(flag) {
        answer = arr.map((item, idx) => {
            if(idx % 2 !== 0) {
                return item + n
            } else {
                return item
            }
        })
    } else {
           answer =  arr.map((item, idx) => {
            if(idx % 2 === 0) {
                return item + n
            } else {
                return item
            }
        })
    }
    return answer
}