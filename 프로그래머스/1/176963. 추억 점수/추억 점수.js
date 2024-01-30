function solution(name, yearning, photo) {
    let memory = {}
    for(let i=0; i<name.length; i++) {
        memory = {...memory, [name[i]] : yearning[i]}
    }
    
    return photo.map(item => {
        let sum = 0;
        item.map(name => {
            if(memory[name] !== undefined) {
                sum += memory[name]
            }
        })
        return sum
        
        
    })
}