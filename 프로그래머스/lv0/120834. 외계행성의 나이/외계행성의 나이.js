function solution(age) {
    // a = 0, b = 1, c = 2, ... j = 9
    const numberToStr = String(age);
    return [...numberToStr].map(item => {
        return String.fromCharCode(item.charCodeAt() + 49);
    }).join("")
}