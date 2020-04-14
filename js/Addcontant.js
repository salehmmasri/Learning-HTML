
var name=prompt("please enter your name");
var salary=prompt("please enter your salary");
if (salary<=100){
    document.write('<h2>'+" you cant bay any thig right now "+name+'</h2>');

}
else if (salary >= 100){
    document.write('<h2>'+" now you can bay "+name+'</h2>');
}

else{
    document.write('<h2>'+ "please enter number btween 100 -1000"+'</h2>');
}
alert("welcome "+name);
confirm("show your resalt at the end of the page");