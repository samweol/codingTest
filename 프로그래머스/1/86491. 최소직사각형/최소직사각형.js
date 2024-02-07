function solution(sizes) {
    let width = [];
    let height = [];
    sizes.forEach(item => {
        item.sort((a, b) => b - a)
        width.push(item[0]);
        height.push(item[1])
    })
    
    return Math.max(...width) * Math.max(...height)
}