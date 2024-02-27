function solution(brown, yellow) {
    let possibleBrown = [];
    for(let i=brown/2; i>0; i--) {
        if(i < brown / 2 - i + 2) {
            break
        }
        const wTile = i;
        const hTile = brown / 2 - wTile;
        possibleBrown.push([wTile, hTile + 2])
    }
    
    for(let tile of possibleBrown) {
        const [w, h] = tile
        if((w - 2) * (h - 2) === yellow) {
            return [w, h]
        }
    }
    
}