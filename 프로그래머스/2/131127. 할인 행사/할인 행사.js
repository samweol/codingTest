function solution(want, number, discount) {
    let result = 0;
    const buy_list = [];
    for(let i=0; i<want.length; i++) {
        for(let j=0; j<number[i]; j++) {
            buy_list.push(want[i])
        }
    }
    
    buy_list.sort();
    
    let i=0
    while(10 + i <= discount.length) {
        if(JSON.stringify(buy_list) === JSON.stringify(discount.slice(i, 10 + i).sort())) {
       result++;
   }
        i++;
    }
   
return result
}