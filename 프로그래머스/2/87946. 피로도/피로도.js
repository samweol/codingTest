function solution(k, dungeons) {
    let visited = Array(dungeons.length).fill(false);
    let answer = 0;
    
    const dfs = (k, visitedDungeons) => {
        answer = Math.max(answer, visitedDungeons);
        for(let i=0; i<dungeons.length; i++) {
            if(k >= dungeons[i][0] && !visited[i]) {
                visited[i] = true;
                dfs(k-dungeons[i][1], visitedDungeons + 1);
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0);
    return answer;
    
}