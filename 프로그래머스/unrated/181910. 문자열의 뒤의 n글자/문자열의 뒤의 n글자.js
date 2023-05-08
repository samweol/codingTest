function solution(my_string, n) {
    var answer = '';
    const cutNumber = my_string.length - n;
    answer = my_string.substr(cutNumber)
    return answer;
}