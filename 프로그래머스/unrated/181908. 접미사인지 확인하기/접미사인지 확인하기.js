function solution(my_string, is_suffix) {
    const checkLength = is_suffix.length;
    const checkWord = my_string.substr(my_string.length - checkLength);
    if(checkWord === is_suffix) {
        return 1
    } else {
        return 0
    }
}