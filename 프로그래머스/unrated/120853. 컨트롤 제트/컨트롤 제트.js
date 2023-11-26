function solution(s) {
    let result = 0;
    const arr = s.split(" ");
    arr.forEach((item, idx) => {
        if(item === "Z") {
            result -= Number(arr[idx - 1])
        } else {
            result += Number(item);
        }
    })
    
    return result;
}