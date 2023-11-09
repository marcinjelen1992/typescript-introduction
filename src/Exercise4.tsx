import "./App.css";
// Promise
function promiseDelay(delay: number): Promise<string> {
    return new Promise ((reslove) => {
        setTimeout(() => {
            reslove(`Promise rozwiązany z opóźnieniem ${delay / 1000} sekund`)
        }, 2000)
    })
}

promiseDelay(1500).then((result) => console.log(result));
promiseDelay(3000).then((result) => console.log(result));

// generic types
function getFirstElement<Type>(array: Array<Type>): Type {
    return array[0];
}

const numArray: Array<number> = [1, 2, 3];
const strArray: Array<string> = ['banana', 'apple', 'orange'];
const boolArray: Array<boolean> = [true, false, false];
const firstNum = getFirstElement(numArray);
const firstStr = getFirstElement(strArray);
const firstBool = getFirstElement(boolArray);

// Utility types
interface User {
    name: string;
    age: number;
}

const recordUser: Record<string, User> = {
    jacek: { name: 'Jacek', age: 17 },
    ewa: { name: 'Ewa', age: 32 },
}

const recordUser2: Record<string, string> = {
    user1: 'Alicja',
    user2: 'Bartosz',
}

const partialUser: Partial<User> = { name: 'Karol' }
const readonlyUser: Readonly<User> = { name: 'Basia', age: 20}

console.log(partialUser.name);
console.log(readonlyUser.name);
console.log(recordUser);
console.log(recordUser2);

// Summary
// Type number - const num: number = 10;
// Type string - const str: string = '10';
// Type boolean - const bool: boolean = true;
// Arrays -  Array<boolean>
// Objects - interface User { name: string; } lub type User = { name: string; }
// Promises - Promise<Type>
// Generics - getFirstElement<T>(array: Array<T>): T
// Utlility/Partial - Partial<T>
// Utlility/Readonly - Readonly<T>
// Utlility/Record - Record<Key,Type>

const Exercise4 = () => {

    return (
        <><h2>Exercise 4</h2>
        <ol><li>{firstNum}</li>
        <li>{firstStr}</li>
        <li>{String(firstBool)}</li></ol>
        </>
    )
}

export { Exercise4 };