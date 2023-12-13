function solution(polynomial) {
    const seperateArr = polynomial.split(" ");
    // x만 있는 배열로 만들기
    const onlyX = seperateArr.filter(item => item.includes("x")).map(item => {     
        if(item === "x") {
            return 1
        } else {
            return Number(item.replace("x", ""))
        }
    })
    
    let sumX = onlyX.reduce((acc, cur) => acc + cur, 0) + "x";
    if(sumX ==="1x") {
        sumX = "x"
    } else if(sumX === "0x") {
        sumX = ""
    }
    
    
    // 숫자만 있는 배열 만들기
    const onlyNum = seperateArr.filter(item => !item.includes("x") && !item.includes("+"))
    
    const sumNum = onlyNum.reduce((acc, cur) => Number(acc) + Number(cur), 0);
    
    if(sumNum >=1 && sumX !== "") {
        return `${sumX} + ${sumNum}`
    } else if(sumX === "") {
        return `${sumNum}`
    } else {
        return `${sumX}`
    }
    
     // return sumNum >= 1 ? `${sumX} + ${sumNum}` : `${sumX}`
}