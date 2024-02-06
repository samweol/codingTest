function solution(nums) {
    let arr = []
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            for(let k=j+1; k<nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                arr.push(sum);
            }
        }
    }
    
    const isDiv = (num) => {
        let arr = [];
        for(let i=2; i<=Math.sqrt(num); i++) {
            if(num % i === 0) {
                return false
            }
        }
        
        return true
    }
    let result = 0;
    arr.forEach(item => {
        if(isDiv(item)) {
            result ++
        }
    })
    
    return result
}
