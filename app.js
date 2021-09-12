// chapter 17 to 20
// task1
// let mutliarr = [
//     [],[],[]
// ]

// task2
// let mutliarr = [
//     [0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]
// ]
// for (var i = 0; i < mutliarr.length; i++) {

//     for (var j = 0; j < 4; j++) {

//         document.write(mutliarr[i][j])


//     }
//     document.write("<br>")
// }

// task3
// for(i=1;i<=10;i++){
//     document.write(i+"<br>")
// }

// task4
// write any number in a prompt this code will give you that table 
// otherwise it will generate table of 5 with 10 repitetions

// var table = prompt("What table do you want", "5")
// var tablelength = prompt("Enter the length you want", "10")
// document.write("TABLE OF " + table + "<br>");
// for (var i = 1; i <= tablelength; i++) {
//     var answer = table * i
//     document.write(table + " x " + i + " = " + answer)
//     document.write("<br>")
// }

// task5
// fruits= ["apple","bannana","mango","orange","strawberry"]

// for(i=0;i<fruits.length;i++){
//     document.write(fruits[i]+"<br>")
// }
// for(i=0;i<fruits.length;i++){
//     document.write("Element at index "+i+" is "+ fruits[i] + "<br>")
// }

// task6

// document.write("Counting <br>")
// for (var i = 0; i < 16; i++) {
//     document.write( +i +",")

// }

// document.write(" <br> Reverse Counting <br> " )
// for (var i = 10; i > 0; i--) {
//     document.write( +i +",")
    
// }
// document.write(" <br> Even <br> " )
// for (var i = 0; i < 20; i++) {
//     if(i%2 == 0){
        
//         document.write( +i +",")
//     }
    
// }
// document.write(" <br> ODD <br> " )
// for (var i = 0; i < 20; i++) {
//     if(i%2 !== 0){
        
//         document.write( +i +",")
//     }
    
// }
// document.write(" <br> Even <br> " )
// for (var i = 1; i < 20; i++) {
//     if(i%2 == 0){
        
//         document.write( +i +"k,")
//     }
    
// }

// task7

// fruits= ["apple","bannana","mango","orange","strawberry"]
// a=prompt("Welcome to abc what do you want?")
// b= a.toLowerCase();
// x=true
// for(var i=0;i<fruits.length;i++){

//     if(b == fruits[i]){
//         alert(fruits[i]+" is available")
//        x=false
//         break
//     }
   
    
    
// }
// if(x == true){
// alert(b +" is not available")
// }

// task8
// points = [40, 3, 100, 500, 600, 3];

// for (let k = 0; k < 5; k++) {
    
    
//     for(i=0;i<5;i++){
//     a= points[i]
//     b= points[i+1]
//    if(a>b){
//     points[i+1] =a
//     points[i]=b
// }
// else if (b>a) {
//     points[i+1] =b
//     points[i]=a
//    } else {
//        continue
//    }

// }
    
// }

// // console.log(points)
// // for maximum num
// document.write(points[points.length-1])


// task9
// points = [40, 3, 100, 500, 600, -5];

// for (let k = 0; k < 5; k++) {
    
    
//     for(i=0;i<5;i++){
//     a= points[i]
//     b= points[i+1]
//    if(a>b){
//     points[i+1] =a
//     points[i]=b
// }
// else if (b>a) {
//     points[i+1] =b
//     points[i]=a
//    } else {
//        continue
//    }

// }
    
// }

// console.log(points)
// for smnallest num
// document.write(points[0])

// task10
// for(var i=0;i<=100;i++)
// {
//     if(i%5 ==0 ){
//         document.write(i +",")
//     }
// }

// chapters 21-25

// task1
// a=prompt("first name?")
// b=prompt("second name?")

// alert("Welcome "+a+" "+b)

// task2
// b=prompt("Your favourite phone?")
// alert(b.length)

// task3
// a = "PAKISTANI"
// alert (a.indexOf("N"))

// task4
// a = "hello world"
// alert (a.lastIndexOf("l"))

// task5
// a = "PAKISTANI"
// alert (a.charAt(3))

// task6
// a=prompt("first name?")
// b=prompt("second name?")

// let res = a.concat(b);
// alert("Welcome "+res)

// task7

// let str = "Hyderabad";
// document.write(str +"<br>")
// str= str.replace("Hyder", "Islam");
// document.write(str)

// task8

// var message = "Ali and Sami are best friends. They play cricket and football together."
// document.write(message +"<br>")
// message= message.replace(/and/g, "&")
// document.write(message)

// task9
// a="string"
// document.write(typeof(a))
// a=parseInt(a)
// document.write(typeof(a))

// task10
// a=prompt("Enter somthing in small letters",)
// document.write(a +"<br>")

// document.write(a.toUpperCase())

// task11
// not done
// a=prompt("Enter somthing in small letters",)
// document.write(a +"<br>")

// document.write(a.toTitleCase())

// task12

// a= 30.56
// document.write(typeof(a))
// b=a.toString()
// document.write(typeof(b))

// task13
// not done
// a=prompt("enter a user name")
// if(a.charCode==33 || a.charCode==44 || a.charCode==46 || a.charCode==64){
//     alert("Please enter a valid username")
// }

// task14
// fruits= ["apple","bannana","mango","orange","strawberry"]
// a=prompt("Welcome to abc what do you want?")
// b= a.toLowerCase();
// x=true
// for(var i=0;i<fruits.length;i++){

//     if(b == fruits[i]){
//         alert(fruits[i]+" is available")
//        x=false
//         break
//     }
   
    
    
// }
// if(x == true){
// alert(b +" is not available")
// }

// task15
// a=prompt("Enter a password")
// b= a.charCodeAt(0)

// for(i=0; i<a.length;i++){
 
    
// if(a.charCodeAt(i) <=47 && a.charCodeAt(i)>=32){
//         alert("You can not use special characters ")
//         x=false
//         break
//     }
//     x=true
// }

// if(x==true){

// if(b<=57 && b>=48 ){
//     alert("You can not use a number in the begining")
// }

// else if(a.length<=6){
//     alert("Password should be greater than 6 characters")

// }
// else{
//    alert("successfull")
// }

// }

// task16
// var university = "University of Karachi";
// myArr = university.split("");
// for(i=0;i<=myArr.length-1 ;i++){
//     document.write(myArr[i]+"<br>")

// }

// task17
// a=prompt("Enter anything")
// document.write(a.slice(a.length-1))

// task18
// not done
// str="The quick brown fox jumps over the lazy dog"
// str= str.toLowerCase()

// chapter26-30
// task1
// a=+prompt("enter a positive integer")

// document.write(a  +"<br>")
// document.write(Math.round(a)  +"<br>")
// document.write(Math.floor(a)  +"<br>")
// document.write(Math.ceil(a)  +"<br>")

// task2
// a=+prompt("enter a negative float value ")

// document.write(a  +"<br>")
// document.write(Math.round(a)  +"<br>")
// document.write(Math.floor(a)  +"<br>")
// document.write(Math.ceil(a)  +"<br>")

// task3
// a=+prompt("enter a negative  value ")

// document.write(Math.abs(a)  +"<br>")

// task4
// a=Math.floor(Math.random()*(7 - 1)) + 1
// alert("Random dice value"+ a)


// task5
// a=Math.floor(Math.random()*(3 - 1)) + 1
// // alert(a)
// if(a==1){
//     alert("Random coin value: Heads")
    
// }
// else if(a==2){

//     alert("Random coin value: Tails")
// }

// task6

// a=Math.floor(Math.random()*(100 - 1)) + 1
// alert("Random number between 1 to 100: "+ a)

// task7
// a=prompt("Enter your age")
// a=parseInt(a)
// alert("The user's age is " + a  )

// task8
// b=+prompt("Enter a number between 1 to 10 ")
// a=Math.floor(Math.random()*(11 - 1)) + 1
// // alert("Random dice value"+ a)
// if (a==b) {
//     alert("Congratulations")
    
// }
// else{
    
//     alert("Try again" )
// }