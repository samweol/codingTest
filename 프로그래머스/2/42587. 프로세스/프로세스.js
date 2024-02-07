function solution(priorities, location) {
    let queue = priorities.map((priority, index) => ({
        index: index,
        priority: priority,
    }));

    let order = 0;

    while (queue.length > 0) {
        let current = queue.shift();
        if (queue.some(item => item.priority > current.priority)) {
            queue.push(current);
        } else {
            order++;
            if (current.index === location) {
                return order;
            }
        }
    }
}