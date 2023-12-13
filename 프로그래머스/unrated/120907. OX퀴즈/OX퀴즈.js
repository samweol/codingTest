function solution(quiz) {
    const calculate = (input) => {
        // " 3 - 4"
        const cal = input.split(" ");
        if(cal[1] === "+") {
            return String(Number(cal[0]) + Number(cal[2]));
        } else {
            return String(Number(cal[0]) - Number(cal[2]))
        }
        
    }
    return quiz.map(item => {
        const divideArr = item.split("=");
        const answer =  calculate(divideArr[0]);
        const compare = divideArr[1].split(" ")[1]
        
        return answer === compare ? "O" : "X"
    })
}