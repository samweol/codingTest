function solution(dots) {
    let width = [];
    let height = [];
    dots.forEach(item => {
        if(!width.includes(item[0])) {
            width.push(item[0]);
        }
        
        if(!height.includes(item[1])) {
            height.push(item[1]);
        }
        
    })
    
    width.sort((a, b) => b - a);
    height.sort((a, b) => b - a);
    
    const w = width[1] - width[0];
    const h = height[1] - height[0];
    
    return Math.abs(w * h)
    
    return width;
}