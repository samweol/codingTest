function solution(players, callings) {
    let playerObj = {};
    players.forEach((item, idx) => {
        playerObj[item] = idx;
    })
    for(let i=0; i<callings.length; i++) {
        const currentPosition = playerObj[callings[i]];
        let front = players[currentPosition - 1];
        let current = players[currentPosition];
        let temp = "";
        players[currentPosition - 1] = current;
        players[currentPosition] = front
        
        playerObj[current] = playerObj[current] - 1;
        playerObj[front] = playerObj[front] + 1;
    }
    
    return players
}