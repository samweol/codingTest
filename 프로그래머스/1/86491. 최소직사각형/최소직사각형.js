function solution(sizes) {
    let widths = [];
    let heights = [];
    
    sizes.forEach(item => {
        if(item[0] > item[1]) {
            widths.push(item[0]);
            heights.push(item[1]);
        } else {
            widths.push(item[1]);
            heights.push(item[0]);
        }
    })
    
    return Math.max(...widths) * Math.max(...heights)
}