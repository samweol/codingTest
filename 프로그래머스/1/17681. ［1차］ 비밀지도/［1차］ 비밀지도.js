function solution(n, arr1, arr2) {
    let code = []
    let map1 = arr1.map(item => {
        if(item.toString(2).length !== n) {
            let zero =""
            for (let i=0; i<n-item.toString(2).length; i++) {
                zero +="0"
            }
            return [...(zero + item.toString(2))]
        } else {
            return [...item.toString(2)]
        }
    })
    let map2 = arr2.map(item => {
         if(item.toString(2).length !== n) {
            let zero =""
            for (let i=0; i<n-item.toString(2).length; i++) {
                zero +="0"
            }
            return [...(zero + item.toString(2))]
        } else {
            return [...item.toString(2)]
        }
    })
    for(let i=0; i<n; i++) {
        let str = ""
        for(let j=0; j<map1.length; j++) {
            if(map1[i][j] === "1" || map2[i][j] === "1") {
                str += "#"
            } else {
                str += " "
            }
        }
        code.push(str)
    }
    
    return code
}