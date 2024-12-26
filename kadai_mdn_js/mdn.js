const strToday = new Date();
//console.log(strToday);

let strYYYY = strToday.getFullYear();
let strMM = strToday.getMonth();
let strDD = strToday.getDate();
console.log(strYYYY + "年" + (Number(strMM) + 1) + "月" + strDD + "日");