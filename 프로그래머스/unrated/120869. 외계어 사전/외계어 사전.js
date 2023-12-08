function solution(spell, dic) {
    spell.sort()
    const arr =  dic.map(item => [...item].sort());
    const flag = arr.map(item => {
        return JSON.stringify(item) === JSON.stringify(spell)
    })
    
    return flag.some(item => item)? 1 : 2
}