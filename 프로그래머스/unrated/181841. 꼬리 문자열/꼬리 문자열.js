function solution(str_list, ex) {
    return str_list.reduce((acc, cur) => {
        if(!cur.includes(ex)) {
            return acc + cur
        } else {
            return acc
        }
    } , '')
}