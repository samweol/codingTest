function solution(emergency) {
    const copyArr = [...emergency].sort((a, b) => b - a);
    return emergency.map(item => {
        return copyArr.indexOf(item) + 1
    })
}