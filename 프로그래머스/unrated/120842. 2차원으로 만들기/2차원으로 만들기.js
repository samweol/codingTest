function solution(num_list, n) {
    let result = [];
    for (let i = 0; i<num_list.length; i+=n) {
        // n이 2라면? i는 0, 2, 4, 6 해서 총 4번 돈다.
        let arr = []
        for (let j = i; j<i+n; j++) {
            // j는 i가 0일 때, 2번, i가 2일 때 2번, 계속 두번씩 돌예정
            arr.push(num_list[j]);
            
        }
        result.push(arr)
    }
    
    return result;
}