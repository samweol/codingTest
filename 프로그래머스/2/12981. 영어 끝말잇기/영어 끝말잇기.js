function solution(n, words) {
    let tellWords = [words[0]];
    for(let i=1; i<words.length; i++) {
        const currentWord = words[i];
        const prevWord = tellWords[tellWords.length - 1];
        // 이미 말한 단어를 또 말한 경우
        if(tellWords.includes(words[i])) {
            return [i % n + 1, parseInt(i / n) + 1]
        } else if(currentWord[0] !== prevWord[prevWord.length - 1]) {
            return [i % n + 1, parseInt(i / n) + 1]
        }
        
        tellWords.push(words[i]);
    }
    
    return[0,0]
}