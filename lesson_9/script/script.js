// let number1 = Number(prompt('enter the number'));

// console.log(number1);

//функция тайп оф проверяет какое значение присвоено string или number
// console.log(typeof(number1)); //number
// console.log(typeof(Infinity)); //number
// console.log(typeof('123')); //string
// console.log(typeof(NaN)); //number

//логические типы данных 

// true //истинно
// false //ложно

// age >= 18 например проверить возраст, или проверить точно ли хотим применить изменения

// Условные операторы

// if(условие){
//     действие
// }

//операторы сравнения
// > больше
// < меньше
// >= больше/равно
// <= меньше/равно
// == равно
// === строгое равенство
// != не равно

//логические операторы
// && and - и
// || or - или


// let userage = prompt('enter your age');

// if(userage >=18){
//     console.log('доступ открыт');
    
// }
// console.log(userage);

// if(userage <=17){
//     console.log('доступ закрыт');
// }

// if(условие){
//     действие
// }

// else{
//     альтернативное действие
// }

// if(userage >= 18){
//     console.log('Доступ откыт');
// }
// else{
//     console.log('Доступ закрыт');
// }

// if(условие1){
//     действие1
// }
// else if(условие2){
//     действие2
// }
// ...
// else{
//     альтернативное действие
// }

// <16 нет доступа
// >16 <=18 есть доступ к книгам
// >18 <50 есть доступ к книгам и статям
// >50 есть полный доступ

// if(userage <=16){
//     console.log('нет доступа');
    
// }
// else if(userage <=18 ){
//     console.group('есть доступ к книгам');
// }
// else if(userage <50){
//     console.log('есть доступ к книгам и статтям');
// }
// // else if(userage >=50){
// //     console.log('есть полный доступ');
// // }
// //можно просто через елс, так как условие больше 50 не обьязательно проверять через иф
// else {
//     console.log('есть полный доступ')
// }

// let number = prompt('enter the number');
// console.log(number);
// '20' == 20 true строка выводится (двоеное равенство)
// if(number==20){
//     console.log('number = 20');
//  }

// '20' === 20 false строка не выводится (тройное равенство)

// if(number===20){
//     console.log('number = 20');
// }

// 11%2==1
// 13%2==1

// 10%2==0
// 8%2==0

// let number2 = +prompt('enter the number');

// if(number2 % 2== 0){
//     console.log('четное');
    
// }
// else{
//     console.log('нечетное');
// }

//число проверить на кратность 3.

// let number3=+prompt('enter the number');
// if(number3%3==0){
//     console.log('true');
// }
// else{
//     console.log('fasle');
// }

// let number=+prompt('enter the number');

// if(number>=0){
//     console.log(number*2);
// }

// let number1 =+prompt('enter the first number');
// let number2 =+prompt('enter the second number');

// if(number1 > number2){
//     console.log(number1 + number2);
// }
// else if(number1<number2){
//     console.log(number1 * number2);
// }
// else{
//     console.log("числа одинаковые");
// }

//массивым - Array (это списки)

// let newarray = [elem1,elem2,elem3,...];
// let emptyarray = [];

// let fruits=['apple','kiwi','banana'];

// console.log(fruits);

// console.log(fruits.length); // длина массива (количество елементов)

// // array_name[index]

// console.log(fruits[0]); // первый элемент всегда с индексом 0
// console.log(fruits[2]); // 3й= элемент
// console.log(fruits[fruits.length-1]); // последний элемент

// //добавление элемента/ов в начало массива
// // fruits.unshift('avocado');
// fruits.unshift('avocado','mango');
// console.log(fruits);
// //добавление элемента в конец массива
// fruits.push('cherry','orange');
// console.log(fruits);

// //удаление элемента из массива

// //первого элемента
// fruits.shift();
// console.log(fruits);

// //последнего элемента
// fruits.pop();
// fruits.pop();
// console.log(fruits);

// // Изменение значение элементов
// fruits[2]= 'Pear';
// console.log(fruits);

//добавление элемента в середину массива

// let styles =['Джаз','блюз'];
// console.log(styles);
// styles.push('рок-н-ролл');
// console.log(styles);
// styles[1]='классика'; 
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift('регги','рэп');
// console.log(styles);
