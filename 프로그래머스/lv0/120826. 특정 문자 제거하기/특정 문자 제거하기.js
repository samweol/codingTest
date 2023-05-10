function solution(my_string, letter) {
   const arr = Array.from(my_string);
    var result = ''
    arr.map(item => {
        if(item !== letter) {
            result += item
        }
    })
    
    return result;
    
    
}