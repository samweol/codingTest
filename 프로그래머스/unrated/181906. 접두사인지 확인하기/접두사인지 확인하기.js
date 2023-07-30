function solution(my_string, is_prefix) {
   const length = is_prefix.length;
   const key = my_string.substr(0, length);
    if(key === is_prefix) {
        return 1
    } else {
        return 0
    }
}