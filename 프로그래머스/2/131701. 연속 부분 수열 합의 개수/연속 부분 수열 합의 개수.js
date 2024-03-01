function solution(elements) {
    let sumArr = [];
    function sumElements(arr) {
        const sum = arr.reduce((acc, cur) => acc + cur, 0);
        sumArr.push(sum)
    }
    
    function getElements(arr) {
        for(let i=1; i<=arr.length; i++) {
            const sliceArr = arr.slice(0, i);
            sumElements(sliceArr);
        }
    }
    
    for(let i=0; i<elements.length; i++) {
        getElements(elements);
        const firstElement = elements.shift();
        elements.push(firstElement);
    }
    
    const set = new Set(sumArr);
    return set.size
    
}