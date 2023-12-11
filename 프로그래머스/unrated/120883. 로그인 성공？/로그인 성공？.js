function solution(id_pw, db) {
    const id = id_pw[0];
    const pw = id_pw[1];
    let loginFlag = false;
    let idFlag = false;
    let pwFlag = false;
    for (let i = 0; i<db.length; i++) {
        if(db[i][0] === id && db[i][1] === pw) {
            // id와 비밀번호 모두 일치하면
             loginFlag = true;
        } else if(db[i][0] === id && db[i][1] !== pw) {
            idFlag = true;
        } else if(db[i][0] !== id) {
            pwFlag = true;
        }
    }
    
    if(loginFlag) {
        return "login"
    } else if(idFlag) {
        return "wrong pw"
    } else if(pwFlag) {
        return "fail"
    }
}