function solution(cipher, code) {
    return [...cipher].map((item, idx) => {
        if((idx + 1) % code === 0) {
            return item
        }
    }).join("")
}