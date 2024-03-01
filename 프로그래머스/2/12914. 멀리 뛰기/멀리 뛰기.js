function solution(n) {
    let answer = 0;

    if(n == 0) {
        return 0;
    }

    let jump = new Array(n+1);

    jump[1] = 1;
    jump[2] = 2;

    for(let i=3; i<=n; i++) {
        jump[i] = (jump[i-1] + jump[i-2]) % 1234567;
    }

    answer = jump[n];

    return answer;
}