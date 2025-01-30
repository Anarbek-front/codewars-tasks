// Завершите решение так, чтобы оно разделило строку на пары из двух символов. Если строка содержит нечетное количество символов, то следует заменить отсутствующий второй символ последней пары подчеркиванием ('_').

// Примеры:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// const solution = (str) => {
//     const arrStr = str.match(/.{1,2}/g);
//     arrStr.forEach((item, index) => {
//         if (item.length === 1) {
//             arrStr[index] += "_";
//         }
//     });
//     return arrStr;
// };
// console.log(solution("abc"));

/////////////////////////
// const func = (str) => {
//     if (str.length > 1) {
//         return func(str.slice(1));
//     }
//     return str;
// };

// console.log(func("Hello World"));

//! 1: ello World
//! 2: Hello World
//! 3: World
//! 4: d
///////////////////////\\\\\\\\

//////////////////////////////////
// Камень-ножницы-бумага
// Давайте играть! Вам нужно вернуть, какой игрок выиграл! В случае ничьей верните Draw!.

// Примеры (Вход1, Вход2 -> Выход):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// const rps = (p1, p2) => {
//     if (p1 === "scissors") {
//         if (p2 === "paper") {
//             return "Player 1 won!";
//         } else if (p2 === "rock") {
//             return "Player 2 won!";
//         } else {
//             return "Draw!";
//         }
//     } else if (p1 === "paper") {
//         if (p2 === "scissors") {
//             return "Player 2 won!";
//         } else if (p2 === "rock") {
//             return "Player 1 won!";
//         } else {
//             return "Draw!";
//         }
//     } else if (p1 === "rock") {
//         if (p2 === "paper") {
//             return "Player 2 won!";
//         } else if (p2 === "scissors") {
//             return "Player 1 won!";
//         } else {
//             return "Draw!";
//         }
//     }
// };

// rps("paper", "scissors");
/////////////////////////////////////////

/////////////////////////////////////////
// Дополните функцию/метод так, чтобы он возвращал URL-адрес, #удалив все, что находится после якоря ( ).
// Примеры
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

const removeUrlAnchor = (url) => url.split("#")[0]
    //  url.indexOf("#") === -1 ? url : url.slice(0, url.indexOf("#"));

console.log(removeUrlAnchor("wqerty#3qwrqrrrwer"));
