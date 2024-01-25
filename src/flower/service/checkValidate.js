export const vaildatenumber = (e) => {
    const value = e.target.value;
    const num = /^[0-9]+$/;
    if(num.value === 0 ){
        return " ";
    } else if(num.test(value)){
        return " ";
    } else {
        return "숫자로만 입력해주세요"
    }

} 