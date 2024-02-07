function solution(s) {
    let openBrackets = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            openBrackets++;
        } else if(s[i] === ')') {
            openBrackets--;
            if(openBrackets < 0) {
                return false;
            }
        }
    }

    return openBrackets === 0;
}