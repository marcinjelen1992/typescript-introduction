import "./App.css";
import { Exercise2 } from "./Exercise2";
import { Exercise3 } from "./Exercise3";
import { Exercise4 } from "./Exercise4";

function App() {

let name: string = 'Andrzej';
// const isAdmin: boolean = true;

const getFullName = (lastName: string): string => `${name} ${lastName}`;

console.log(getFullName('Kowalski'));

const myNumber: number = 99;

const addNumber = (a: number, b: number): number => a + b;
console.log(addNumber(myNumber, 2));

const logger = (log: number | string): void => console.log(log);

logger(addNumber(myNumber, 2));

const countCharacters = (str: string): number => str.length;
const isEven = (num: number): boolean => num % 2 === 0;
const getParityMessage = (isEven: boolean) => isEven ? 'ta liczba jest parzysta' : 'Ta liczba jest nieparzysta';

const processString = (str?: string) => {
  if(!str) {
    return 'Nie podano argumentu'
  }
  const strLength = countCharacters(str);
  const strIsEvenInfo = getParityMessage(isEven(strLength));
  return `${str}: Liczba znaków to: ${strLength}, ${strIsEvenInfo}`
}

  return (
    <>
      <h2>Exercise 1</h2>
      <ol>
        <li>{getFullName('Nowak')}</li>
        <li>{addNumber(2, 7)}</li>
        <li>{countCharacters('Andrzej')}</li>
        <li>{String(isEven(3))}</li>
        <li>{String(isEven(4))}</li>
        <li>{processString('Andrzej')}</li>
        <li>{processString()}</li>
        <li>{processString('')}</li>
      </ol>
      <Exercise2 />
      <Exercise3 />
      <Exercise4 />
    </>
  );
}

export default App;
