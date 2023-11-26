function solution(array) {
    let result = 0;
array.map(item => {
        return String(item).split("")
    }).reduce(function (acc, cur) {
  return [...acc, ...cur];
}).forEach(item => {
    if(item == 7) {
        result ++;
    }
});
    
    return result;
}