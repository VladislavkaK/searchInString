function searchStr(str, position) {
  let firstPath = str.slice(0, position);// находим 1ую часть строки
  let secondPath = str.slice(position);// находим 2ую часть строки
  let start = firstPath.lastIndexOf("\n") !== -1 ? firstPath.lastIndexOf("\n") : 0; // ищем последние вхождение \n или ноль
  let end = secondPath.indexOf("\n") !== -1 ? firstPath.length + secondPath.indexOf("\n") : str.length-1;// ищем первое вхождение \n или ноль
  
  return [start, end];
}

//let position = 7;
let position = 16;
//let position = 23;
let str = "abcderwerwe\neqwrewtwer\neeqwrtrter";
console.log(searchStr(str, position));