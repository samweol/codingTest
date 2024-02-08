function solution(new_id) {
    let tempId = new_id;
    // 1단계 : 대문자 -> 소문자로 변환
    tempId = tempId.toLowerCase();
    // 2단계 : 소문자, 숫자, 빼기(-), (_), (.) 제외하고 모두 제거한다.
    tempId = tempId.replace(/[^a-z0-9_.-]/g, "");
    // 3단계 : 마침표가 2번 이상 연속된 부분을 하나의 마침표로 치환하기
    tempId = tempId.replace(/\.{2,}/g, ".");
    // 4단계 : 마침표가 처음이나 끝에 위치한다면 제거한다.
    tempId = tempId.replace(/^\./,"").replace(/\.$/, "");
    // 5단계 : 빈문자열이라면, a를 대입한다.
    if(!tempId.length) {
        tempId = "a"
    }
    // 6단계 : 길이가 16자 이상이라면 첫 15개 문자만 살리고 다 삭제한다.
    if(tempId.length >= 16) {
        tempId = tempId.slice(0, 15).replace(/\.$/, "");
    }
    // 7단계 : 길이가 2 이하라면, 길이가 3이 될 때까지 마지막 문자를 반복해서 끝에 붙인다.
    if(tempId.length <= 2) {
        const letter = [...tempId][tempId.length - 1];
        while(true) {
            tempId += letter;
            if(tempId.length === 3) {
                break;
            }
        }
    }
    
    return tempId
}