function solution(n) {
   // 한판을 여섯 조각으로 잘라줌
    let pizzaBox = 6
    while(pizzaBox%n !== 0) {
        pizzaBox+=6
    } 
    return pizzaBox/6
}