function solution(my_string) {
    return [...my_string].map(item =>{
        if(item === item.toUpperCase()) {
            return item.toLowerCase()
        } else {
             return item.toUpperCase()
        }
    }).join('');
}