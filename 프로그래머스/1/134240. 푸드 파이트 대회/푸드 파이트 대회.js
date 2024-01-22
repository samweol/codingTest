function solution(food) {
    let result = "";
    for(let i = 1; i<food.length; i++) {
        for(let j = 1; j<=Math.floor(food[i] / 2); j++) {
            result += i;
        }
    }
    
    return result + "0" + [...result].reverse().join("")
}