function solution(myString) {
    return [...myString].map(item => {
        if(item ==="a") {
            return "A"
        }else if(item ==="A") {
            return item
        } else {
            return item.toLowerCase()
        }
    }).join("")
}