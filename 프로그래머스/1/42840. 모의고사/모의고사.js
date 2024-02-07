function solution(answers) {
    let student1 = [1, 2, 3, 4, 5];
    let student2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let answerCount = [0, 0, 0];
    
    for(let i=0; i<answers.length; i++) {
        if(answers[i] === student1[i % 5]) {
            answerCount[0] = answerCount[0] + 1;
        }
    }
    
     for(let i=0; i<answers.length; i++) {
        if(answers[i] === student2[i % 8]) {
            answerCount[1] = answerCount[1] + 1;
        }
    }
    
     for(let i=0; i<answers.length; i++) {
        if(answers[i] === student3[i % 10]) {
            answerCount[2] = answerCount[2] + 1;
        }
    }
    
    const maxCount = Math.max(...answerCount);
    return answerCount.map((item, idx) => {
        if(maxCount === item) {
            return idx + 1
        }
    }).filter(item => item)
}