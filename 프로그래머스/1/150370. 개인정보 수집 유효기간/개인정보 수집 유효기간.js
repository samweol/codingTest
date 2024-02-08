function solution(today, terms, privacies) {
    let termObj = {};
    terms.forEach(item => {
        const [term, month] = item.split(" ");
        termObj[term] = month;
    })
    // {"A":"6","B":"12","C":"3"}
    
    let result = [];
    privacies.forEach((item, idx) => {
        const [date, term] = item.split(" ");
        const [year, month, day] = date.split(".");
        
        const timestamp = +day + +month*28 + +year*12*28 + +termObj[term]*28;
        
        const [todayYear, todayMonth, todayDay] = today.split(".");
        const todaystamp = +todayDay+ +todayMonth*28 + +todayYear*12*28
        
        if(todaystamp >= timestamp) {
            result.push(idx + 1)
        }
        
    })
    
    return result
}