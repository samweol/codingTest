function solution(s) {
    return s.split(" ").map(item => {
        return [...item].map((it, idx) => {
            if(idx === 0) {
                return it.toUpperCase();
            } else {
                return it.toLowerCase();
            }
        }).join("")
    }).join(" ")
    

}