let str = prompt('input string');
let strArr = [...str];
let index=0;
console.log(strArr);
for(let i = 0; i<strArr.length;i++){
    if(strArr[i]=='a'&&strArr[i+1]=='a'){
       index=i+1;
       break;
    }
}
console.log(index);