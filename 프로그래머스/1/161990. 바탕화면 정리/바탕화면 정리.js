function solution(wallpaper) {
    let position = [];
    for(let i=0; i<wallpaper.length; i++) {
        for(let j=0; j<wallpaper[i].length; j++) {
            if(wallpaper[i][j] === "#") {
                position.push([i,j])
            }
        }
    }
    
    position.sort((a, b) => a[0] - b[0])
    const x1 = position[0][0];
    const x2 = position[position.length -1][0];
    
    position.sort((a, b) => a[1] - b[1]);
    const y1 = position[0][1];
    const y2 = position[position.length -1][1];
    return [x1, y1, x2+1, y2+1]
}