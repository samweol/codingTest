function solution(array, commands) {
    return commands.map(item => {
        const start = item[0];
        const end = item[1];
        const idx = item[2]
        
       return array.slice(start - 1, end).sort((a, b) => a - b)[idx-1]
    })
}