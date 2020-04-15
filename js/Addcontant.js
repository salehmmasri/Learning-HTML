
var name=prompt("please enter your name");
var salary=prompt("please enter your salary"); 

var git= function () { 
    var value;
if (salary>=100){
    value='<h2>'+" you cant bay any thig right now "+name+'</h2>';

}
else if (salary <= 100){
     value=" now you can bay "+name;
}

else{
    value="please enter number btween 100 -1000";
}
console.log(value);
return value;

}
document.write('<h2>'+ git() + '</h2>');
var addpic=prompt("choose any number to ad new pic");
for (let i = 0; i < addpic; i++) {
    document.write('<<img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/chocolate-11-84551.png">');
    
}
