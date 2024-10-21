"use strict";
// let a = 22/7;
// let b ="hello";
// let c =[1,2,3,4]
// let e={
//     name:"arun",
//     id:32
// }
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof e)

// function display(){
//     let x = promt("enter your name" ,"Ayush");
//     alert(x);
// }

function validate(){
    let login=document.getElementById("login").value;
    let pass=document.getElementById("pass").value;
    let p1=document.getElementById("result");
    if(login=="admin"&&pass=="admin"){
       p1.innerText="Login Successful";
    }else{
        p1.innerText="Invalid Login";
    }
}

