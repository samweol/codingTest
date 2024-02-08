function solution(numbers, hand) {
    let leftHandPosition = [0, 0];
    let rightHandPosition = [2, 0];
    
    const leftBtns = {1:[0,3], 4:[0,2], 7:[0,1]};
    const rightBtns = {3:[2,3], 6:[2,2], 9:[2,1]};
    const centerBtns = {2: [1, 3], 5:[1,2], 8:[1,1], 0:[1,0]};
    
    const calculateDistance = ([targetX, targetY], [x, y]) => {
        return Math.abs(targetX - x) + Math.abs(targetY - y)
        // return Math.sqrt(Math.pow(targetX - x, 2) + Math.pow(targetY - y , 2))
    }
    
    return numbers.map(item => {
        if(item in leftBtns) {
            leftHandPosition[0] = leftBtns[item][0]
            leftHandPosition[1] = leftBtns[item][1]
            return "L"
        } else if(item in rightBtns) {
            rightHandPosition[0] = rightBtns[item][0]
            rightHandPosition[1] = rightBtns[item][1]
            return "R"
        } else if(item in centerBtns) {
            const leftDistance = calculateDistance(centerBtns[item], leftHandPosition)
            const rightDistance = calculateDistance(centerBtns[item], rightHandPosition)
            
            if(leftDistance > rightDistance) {
                rightHandPosition[0] = centerBtns[item][0]
                rightHandPosition[1] = centerBtns[item][1]
                return "R"
            } else if(leftDistance < rightDistance) {
                leftHandPosition[0] = centerBtns[item][0]
                leftHandPosition[1] = centerBtns[item][1]
                return "L"
            } else {
                if(hand === "right") {
                    rightHandPosition[0] = centerBtns[item][0]
                    rightHandPosition[1] = centerBtns[item][1]
                    return "R"
                } else {
                    leftHandPosition[0] = centerBtns[item][0]
                    leftHandPosition[1] = centerBtns[item][1]
                    return "L"
                }
                
            }
        }
    }).join("")
}