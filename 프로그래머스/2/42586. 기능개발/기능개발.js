function solution(progresses, speeds) {
    let days = [];
    for(let i=0; i<progresses.length; i++) {
        const day = Math.ceil((100 - progresses[i]) / speeds[i]);
        days.push(day)
    }
    
    let answer = [];
    while(days.length > 0) {
        let count = 1;
        let front = days.shift();
        
        while(days[0] <= front) {
            days.shift();
            count++;
        }
        
        answer.push(count);
    }
    
    return answer
}