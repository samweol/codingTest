function solution(k, dungeons) {
    // 방문한 던전인지 확인할 배열
    // 인덱스로 접근하는 것이 좋기때문에 빈배열이 아니라 초기화를 해준다 (인덱스를 맞추기)
    let visited = Array(dungeons.length).fill(false);
    
    let result = 0;
    
    // dfs 탐색 함수 만들기
    // 탐색 함수를 돌 때 마다 피로도와 방문 횟수가 변경되므로 매개변수로 넘김
    const dfs = (k, visitCount) => {
        result = Math.max(result, visitCount);
        // N개의 던전을 시작점으로 다 돌아봐야하기때문에 던전의 갯수만큼 반복시킴
        for(let i=0; i<dungeons.length; i++) {
            // 해당 조건일때 던전에 방문할 수 있으므로 그때 visitCount를 추가시켜줘야함
            // 1. 한번도 방문하지 않은 던전
            // 2. 내 현재 피로도가 최소 피로도보다 높은 경우
            // 그리고 다음 던전을 다시 찾으러 가야함 -> 피로도가 소모되고 visitCount가 추가된 상태로
            if(k >= dungeons[i][0] && !visited[i]) {
                // 방문했기때문에 방문배열의 값을 true로 변경해줌
                visited[i] = true;
                dfs(k-dungeons[i][1], visitCount + 1);
                // 이 위치는 dfs 함수가 돌다가 return을 만나서 다시 이 위치로 왔다는 뜻, 즉 if문에도 조건이 걸리지 않고 for문도 다 돌았다는 뜻
                // 다시 던전을 돌다가 탐색을 멈추고 돌아왔을 때 이전에 방문한 던전을 방문하지 않았다고 처리 해 놓아야 다른 시작점에서 던전을 돌 때 방문 할 수 있음
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0);
    return result;
}