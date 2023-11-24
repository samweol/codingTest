function solution(s) {
   let obj = {};
    [...s].map(item => {
        if(Object.keys(obj).includes(item)) {
            obj[item] = obj[item] + 1
        } else {
            obj[item] = 0;
        }
    })
    
    let result = ""
    for(let key in obj) {
        if(obj[key] === 0) {
            result += key
        }
    }
    
    return [...result].sort().join("");
}