function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = Array(bridge_length).fill(0);
    let sum = 0;

    while(truck_weights.length > 0) {
        sum -= bridge.shift();
        if(sum + truck_weights[0] <= weight) {
            sum += truck_weights[0];
            bridge.push(truck_weights.shift());
        } else {
            bridge.push(0);
        }
        time++;
    }

    return time + bridge_length;
}