/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены. */

let str1 = 'aaa@bbb@ccc';

console.log(str1.replace(/@/g, '!'));

/*2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.*/

let date2 = '2025-12-31';
console.log(date2.replace(/(2025)-(12)-(31)/, '$3/$2/$1'));

/*3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).*/

let str3 = 'Я учу javascript!';

// учу
console.log(str3.substr(2, 3));
console.log(str3.substring(2, 5));
console.log(str3.slice(2, 5));


//javascript

console.log(str3.substr(6, 10)); 
console.log(str3.substring(6, 16));
console.log(str3.slice(6, 16));

/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/

let array4 = [4, 2, 5, 19, 13, 0, 10];
let cubeArray = 0;

for (let i = 0; i < array4.length; i++) {
    cubeArray += Math.pow(array4[i], 3);
}

let result = Math.sqrt(cubeArray);

console.log(result);

/*5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1.*/

const task5 = function(a, b) {
    let c = Math.abs(a - b);
    return c;
}

console.log(task5(3, 5));
console.log(task5(6, 1));

/*6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014).*/

// ?????

/*let dateNow = new Date();

dateNow.setMonth(5);

console.log(dateNow.toLocaleString('de'));

let dayNow = dateNow.getDate();

let monthNow = dateNow.getMonth();

const task6 = function(num) {
    if (dayNow.length < 2 && monthNow.length < 2) { 
		return '0' + num;
    }
}

console.log(task6());*/


/*7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'.*/

let str7 = 'aa aba abba abbba abca abea';
console.log(str7);

let regexp = /ab+a/g;

console.log(str7.match(regexp));
