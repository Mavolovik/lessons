// users.splice(start_index, deletedCount, value1, value2, ...users);
//удалить двух пользователей начиная с третего.
//splice
// let users=['john','tom','alex','bob','james'];
// // users.splice(2, 2);
// // console.log(users);
// //удалить двух пользователей начиная с третего и добавть пользователей Den, Jack 
// users.splice(2, 2, 'den','jack');


// //добавить пользователя sam после bob.
// // users.splice(4,0,'sam');

// console.log(users.indexOf('jack'));

// users.splice(users.indexOf('jack')+1,0,'sam');

// //добавить Leo до tom
//  users.splice(users.indexOf('tom'),0,'leo');

// console.log(users);

// //Удалить пользователя den и вставить двух пользователей nick и dereck.

//  users.splice(users.indexOf('den'),1,'nick','dereck');

//  console.log(users);

//Циклы

// for(начало; условие выхода; шаг){
//     //тело цикла
// }

// let num1=5;

// num1= um1 +1;
// num1++;

// num1+=3;


// num1=num1-1;
// num1--;

// num1-=1=4;

// for(let num=0; num <5; num ++){
//     console.log(num);
// }

//вывести все числа от 1 до 10 которые деляться на 3 без остатка

// for(let num=1;num<=10;num++){
//     if(num%3==0){
//         console.log(num);
//     }
// }

//вывести все четные числа от 20 до 100

// for(let num=20;num<=100;num++){
//     if(num%2==0){
//         console.log(num);
//     }
// }

// for(let num=20; num<=100; num+=2){
//     console.log(num);
// }

//Обратный цикл

// for(let num=10; num>=1; num--){
//     console.log(num);
// }

// for(let num=20;num>=1;num--){
//     if(num%2!=0){
//         console.log(num);
//     }
// }

// for(let num=19; num>=1; num-=2){
//     console.log(num);
// }

// let users=['john','tom','alex','bob','james','jeck','ben','sam','leo'];

//вывести в консоль всех пользователей


// for(let index=0;index <users.length; index++){
//     console.log(users[index]);
    
// }

//вывести первых 3х пользователей

// for(let i=0;i<3;i++){
//     console.log(users[i]);
    
// }
//вывести последних 3х пользоватетей

// let users=['john','tom','alex','bob','james','jeck','ben','sam','leo'];

// for(let k = users.length -1; k >= users.length -3; k--){
//     console.log(users[k]);
// }

// let prices =[1200,3000,230,120,400,5400,2000];

//вывести цены меньше 2000

// for(let i=0; i < prices.length; i++){
//     if(prices[i]<2000){
//         console.log(prices[i]);
        
//     }
// }

// найти сумму всех елементов массива

// let sum =prices[0]=prices[1]=prices[3]+...

// let sum=prices[0];
// sum=sum+prices[1];
// sum=sum+prices[2];
// sum=sum+prices[3];
// sum=sum+prices[4];
// sum=sum+prices[5];
// console.log(sum);

// sum=1200;

// sum=1200+3000;//4200
// sum=4200+230;//4430

let prices =[1200,3000,230,120,400,5400,2000];
let sum=0;
for(let i=0;i<prices.length;i++){
    sum=sum+prices[i];
    // console.log(sum)
}
console.log(sum);

// sum=0
// sum=0+1200
// sum=1200+3000
// sum=4200+230
// ...
