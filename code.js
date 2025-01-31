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

const rps = (p1, p2) => {
    if (p1 === "scissors") {
        if (p2 === "paper") {
            return "Player 1 won!";
        } else if (p2 === "rock") {
            return "Player 2 won!";
        } else {
            return "Draw!";
        }
    } else if (p1 === "paper") {
        if (p2 === "scissors") {
            return "Player 2 won!";
        } else if (p2 === "rock") {
            return "Player 1 won!";
        } else {
            return "Draw!";
        }
    } else if (p1 === "rock") {
        if (p2 === "paper") {
            return "Player 2 won!";
        } else if (p2 === "scissors") {
            return "Player 1 won!";
        } else {
            return "Draw!";
        }
    }
};

rps("paper", "scissors");
/////////////////////////////////////////

/////////////////////////////////////////
// Дополните функцию/метод так, чтобы он возвращал URL-адрес, #удалив все, что находится после якоря ( ).
// Примеры
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

const removeUrlAnchor = (url) => url.split("#")[0]
 url.indexOf("#") === -1 ? url : url.slice(0, url.indexOf("#"));

console.log(removeUrlAnchor("wqerty#3qwrqrrrwer"));
/////////////////////////////////////////

/////////////////////////////////////////
// Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. Все пробелы в строке должны быть сохранены.

// Примеры
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

const reverseWords = (str) => str.split(" ").map((el)=> el.split("").reverse().join("")).join(" ")
console.log(reverseWords("Qwert qwerty"));
/////////////////////////////////////////

/////////////////////////////////////////
//? Например, башня с 3этажами выглядит так:
//? [
//?   "  *  ",
//?   " *** ",
//?   "*****"
//? ]
//? А башня с 6 этажами выглядит вот так:
// ?[
// ?  "     *     ",
//?   "    ***    ",
//?   "   *****   ",
//?   "  *******  ",
// ?  " ********* ",
// ?  "***********"
// ?]

///////////////////////////////////
const towerBuilder = (nFloors) => {
    let arrElLegth = ["*"];
    for (let idx = 1; idx < nFloors; idx++) {
        arrElLegth.push("**");
    }
    const arr = [];
    for (let idx = 0; idx < nFloors; idx++) {
        arr.push(" ".repeat(arrElLegth.join("").length));
        arr.map((el) => el.concat(idx === 0 ? "*" : arr[idx].concat("**")));
    }
    return arr.forEach((el, idx, arr) => {
        return el.split("").splice(Math.floor(el.length / 2), 0, "*");
    });
};
console.log(towerBuilder(3));
/////////////////////////////////

/////////////////////////////////
// Американцы — странные люди: в их зданиях первый этаж на самом деле является цокольным, а 13-го этажа нет (из-за суеверия).
// Напишите функцию, которая по указанному полу в американской системе возвращает пол в европейской системе.
// С заменой 1-го этажа на первый этаж и удалением 13-го этажа цифры смещаются вниз, чтобы занять их место. В случае выше 13 они смещаются вниз на два, потому что под ними есть два пропущенных числа.
// Подвалы (негативы) остаются такими же, как и на универсальном уровне.

// Примеры
// 1  =>  0
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

const getRealFloor = (n) =>
    n < 15 && n > 0
        ? n - 1 === 13
            ? 13 - 1
            : n - 1
        : n >= 15
        ? n - 2
        : n === 0
        ? n
        : n < 0 && n;
console.log(getRealFloor(14));
////////////////////////////////

//////////////////////////////////
// Вы пишете код для управления светофорами вашего города. Вам нужна функция для обработки каждого изменения с green, на yellow, на red, а затем снова greenна .
// Завершите функцию, которая принимает строку в качестве аргумента, представляющего текущее состояние света, и возвращает строку, представляющую состояние, в которое должен измениться свет.
// Например, если входные данные равны green, выходные данные должны быть равны yellow.
const updateLight = (current) =>
    current === "green"
        ? "yellow"
        : current === "yellow"
        ? "red"
        : current === "red" && "green";
console.log(updateLight("red"));
//////////////////////////////////

/////////////////////////////////
// Создайте функцию, которая принимает на входе 2 целых числа в виде строки и выводит сумму (также в виде строки):
// Пример: ( Вход1, Вход2 -->Выход )
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Примечания:
// Если какой-либо из входных данных представляет собой пустую строку, считайте ее нулем.
// Входные данные и ожидаемый вывод никогда не превысят предел 32-битного целого числа со знаком ( 2^31 - 1)

const sumStr = (a, b) => [+a + +b].join("");
console.log(sumStr("-5", "2"));
/////////////////////////////////

////////////////////////////////
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
// For example:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

const solution = (nums) => (nums === null ? [] : nums.sort((a, b) => a - b));
console.log(solution([1, 2, 10, 50, 5]));
////////////////////////////////
