function solution(rsp) {
    // 가위 2, 바위 0, 보 5
    return [...rsp].map(item => {
        if(item === "0") {
            return "5"
        } else if(item ==="2") {
            return "0"
        } else if(item === "5") {
            return "2"
        }
    }).join("")
}