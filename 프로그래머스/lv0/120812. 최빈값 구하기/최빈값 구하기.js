function solution(array) {
      let map = new Map();
        let count = 1;
        array.sort((a, b) => a - b);
        array.map(item => {
            if (map.has(item)) {
                map.set(item, map.get(item) + 1)
            } else {
                map.set(item, 1);
            }
        })

        const result = [...map].sort((a, b) => b[1] - a[1])[0][1];

         const nextResult = [...map].length > 1 ? [...map].sort((a, b) => b[1] - a[1])[1][1] : 0;


        if (result === nextResult) {
            return -1
        } else {
            return [...map].sort((a, b) => b[1] - a[1])[0][0]
        }
}