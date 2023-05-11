function solution(my_string, alp) {
    return [...my_string].map(item => {
        if(item === alp) {
            return item.toUpperCase()
        } else {return item}
    }).join('')
}