let a=Number(prompt("Введите число a: "));
let b=Number(prompt("Введите число b: "));
while (a!=b){
    if (a>b){
        a=a-b;
    }else{
        b=b-a;
    }
}
if (a==1){
    alert("Эти числа взаимно простые");
}else{
    alert("Эти числа не взаимно простые");
}