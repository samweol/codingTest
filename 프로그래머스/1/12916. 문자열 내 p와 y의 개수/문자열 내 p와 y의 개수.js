function solution(s){

    let pCount = 0;
    let yCount = 0;
    [...s.toUpperCase()].map(item => {
        if(item === "P") {
            pCount++;
        } else if(item ==="Y") {
            yCount++;
        }
    })

    return pCount === yCount ? true: false;
}