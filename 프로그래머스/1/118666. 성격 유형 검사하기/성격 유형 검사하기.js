function solution(survey, choices) {
    let scores = {
        1: 3,
        2: 2,
        3: 1,
        4: 0,
        5: 1,
        6: 2,
        7: 3
    }
    
    let numObj = {
        1: ["R", "T"],
        2: ["C", "F"],
        3: ["J", "M"],
        4: ["A", "N"]
    };
    
    let typeObj = {
        A : 0,
        N : 0,
        C : 0,
        F: 0,
        M: 0,
        J: 0,
        R: 0,
        T: 0,
        N: 0,
        A: 0
    }
    
    survey.forEach((item, idx) => {
        if(choices[idx] > 4) {
            const type = [...item][1];
            typeObj[type] = typeObj[type] + scores[choices[idx]];
        } else if(choices[idx] < 4) {
            const type = [...item][0];
            typeObj[type] = typeObj[type] + scores[choices[idx]];
        }
    })
    
    let result = "";
    for(let key in numObj) {
        const type1 = numObj[key][0];
        const type2 = numObj[key][1];
        
        if(typeObj[type1] > typeObj[type2]) {
            result += type1
        } else if(typeObj[type1] < typeObj[type2]) {
            result +=type2
        } else {
           result+= numObj[key].sort((a, b) => a - b)[0]
        }
    }
    return result;
}