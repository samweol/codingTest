function solution(hp) {
    // 장군개미 5, 병정개미 3, 일개미 1
    const general = Math.floor(hp / 5);
    const normal = Math.floor((hp-general*5) / 3);
    const work = Math.floor((hp-general*5-normal*3)/ 1)
    return general + normal + work;
}