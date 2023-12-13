function solution(common) {
        const first = common[1] - common[0];
        const second = common[2] - common[1];
        
        const third = common[1] / common[0];
        const forth = common[2] / common[1];
        
        if(first === second) {
            // 등차
            return common[common.length - 1] + first
        } else if(third === forth) {
            // 등비
            return common[common.length - 1] * third
        }
}