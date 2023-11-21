function solution(my_string, num1, num2) {
    return [...my_string].map((item, idx) => {
        if(idx === num1) {
            return [...my_string][num2]
        } else if(idx === num2) {
            return [...my_string][num1]
        } else {
            return item
        }
    }).join("")
}