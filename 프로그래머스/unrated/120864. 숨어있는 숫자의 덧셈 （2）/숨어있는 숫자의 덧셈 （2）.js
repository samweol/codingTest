function solution(my_string) {
    const numArr = [...my_string].map(item => {
        return item.replace(/[^0-9]/g, "-")
    }).join("")
    
    return numArr.split("-").reduce((acc, cur) => {
        if(cur !== "") {
            return acc + Number(cur)
        }
        return acc
    } , 0)
}