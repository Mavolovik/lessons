// for(Start;end;step){
//     body
// }

// let numbers=[-23,-1,5,0,26,4,10,-4,3,5];
// //вывести только четные положительные числа
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0 && numbers[i]>0){
//         console.log(numbers[i]);
        
//     }
    
// }
//из массива вывести числа которые больше 0 или меьше 10

// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]<0 || numbers[i]>10){
//         console.log(numbers[i]);
        
//     }
    
// }

//заполнить массив числами от 0 до 10

// let array =[];
// for(let i=0;i<=10;i++){
//     array.push(i);
// }
// console.log(array);

// Заполнить массив четными числами от 0 до 100.

// let numbers =[];
// for(let i=0;i<=100;i++){
//     if(i %2 == 0){
//         numbers.push(i)
//     }
// }
// let numbers =[];
// for(let i=0;i<=100;i+=2){
//         numbers.push(i)
// }
// console.log(numbers);


//Objects


// let array = [['john','bob','alex'],
//             [2000,2500,1500]];

// индекс: элемент

// let obj={}; //пустой объект

// // свойства = ключ: значение

// let user={
//     first_name: 'John',
//     last_name: 'Smith',
//     age: 30
// }
// console.log(user.first_name);

// let users={
//     first_names: ['john','bob','alex'],
//     last_names: ['smith','brown','jameson'],
//     ages:[22,26,30]
// };
// console.log(users.first_names[0]);//john
// console.log(users.last_names[1]);//brown

// let users = [
//     {
//         first_name: 'john',
//         last_name: 'smith',
//         age: 30
//     },
//     {
//         first_name: 'bob',
//         last_name: 'brown',
//         age: 29
//     },
//     {
//         first_name: 'alex',
//         last_name: 'jameson',
//         age: 25
//     }
// ]
// console.log(users[0]);
// console.log(users[1].first_name);
// console.log(users[1].last_name);
// console.log(users[1].age);

// let phone={
//     title: 'iPhone 14 pro',
//     color: 'black',
//     price: 1000
// };
// //Добавление нового свойства
// phone.quantity =10;

// // Изменить значение свойства
// phone.color ='white';

// //удаление свойства
// delete phone.quantity;

// console.log(phone);

// let user={
//     firstname: 'John',
//     surname: 'Smith',
// };
// user.firstname='Pete';
// delete user.surname;
// console.log(user);

// let phone={
//     title: 'iPhone 14 pro',
//     color: 'black',
//     price: 1000
// };

// for (let key in phone){
//     // console.log(key); //title,color,price
//     console.log(phone[key]);
// }

// let phones=[
//     {
//         name:'iphone 14',
//         price: 1000,
//         quantity: 10
//     },
//     {
//         name:'iphone 15',
//         price: 1100,
//         quantity: 4
//     },
//     {
//         name:'iphone 14 pro max',
//         price: 1200,
//         quantity: 9
//     },
//     {
//         name:'iphone 15 pro max',
//         price: 1300,
//         quantity: 7
//     },
//     {
//         name:'iphone 14 pro',
//         price: 1250,
//         quantity: 12
//     },
//     {
//         name:'iphone 15 pro',
//         price: 1400,
//         quantity: 11
//     },
// ]
// //вывести все элементы мссива
// for(let i=0; i< phones.length; i++){
//     console.log(phones[i]);
// }
// // вывести только имена товаров
// for( let i=0; i<phones.length; i++){
//     console.log(phones[i].name);
    
// }
//вывести количество товаров больше 10
// for(let i=0; i<phones.length; i++){
//     if(phones[i].quantity>10){
//         console.log(phones[i].name);
        
//     }

// }
//найти сумму price всех товаров.
//  let sum =0;
//  for(let i=0; i<phones.length;i++){
//     sum=sum+phones[i].price;
//  }
//  console.log(sum);

//найти сумму price тех товаров к.во которых меньше-равно 10

// let sum=0;

// for(let i=0; i<phones.length;i++){
//     if(phones[i].quantity<=10){
//         sum=sum+phones[i].price;
//     }
// }
// console.log(sum);

//вывести для каждого товара строку по маске:'name:price'
// console.log(`${phones[0].name}: ${phones[0].price}`);

// for(let i=0;i<phones.length;i++){
//     console.log(`${phones[i].name}:${phones[i].price}`);
// }

let user={
    firstname: 'John',
    lastmane:  'Smith',
    age: 30,
    friends_count: 12
};
//вывести только те значения свойств, которые являются строками.

for(let key in user){
    if(typeof(user[key]) =='string'){
        console.log(user[key]);
        
    }
}