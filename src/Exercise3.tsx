import "./App.css";

const myName= 'Andrzej';

// const myNameArray: (string | number | boolean)[] = myName.split('');
// myNameArray.push('Ania');
// myNameArray.push(22);
// myNameArray.push(true);

type MyNameArray = 'Andrzej' | 'Ania' | number | boolean;

const myNameArray: MyNameArray[] = [myName];
myNameArray.push('Ania');
myNameArray.push(22);
myNameArray.push(true);
console.log(myNameArray);

// Array<number> === number[]
const myAge= 37;
const myAge2= 54;
const myAgeArray: Array<number> = [myAge, myAge2, 77]
console.log(myAgeArray);

const myAgeAndNameArray: Array<number | string> =
['Szczepan', 19, 'Kasia', 20]

// OBIEKTY
interface Address {
    country: string;
    city: string;
}

interface Person {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    address: Address
    getFullName: () => string;
}

const person: Person = {
    id: 1,
    firstName: 'Stefan',
    lastName: 'Nowak',
    age: 30,
    address: {
        country: 'Poland',
        city: 'Gdynia'
    },
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
      }
}

console.log(person.firstName);
console.log(person.age);
console.log(person.address)
console.log(person.address.city)
console.log(person.getFullName());

const person2: Person = {
    id: 2,
    firstName: 'Karolina',
    lastName: 'Kowalska',
    age: 23,
    address: {
        country: 'Poland',
        city: 'Gdynia'
    },
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  
  // TABLICE + OBIEKTY
  const people: Person[] = [person, person2];
  console.log(people);

const Exercise3 = () => {

    return (
        <><h2>Exercise 3</h2>
        <ol><li>{myNameArray}</li>
        <li>{myAgeArray}</li>
        <li>{myAgeAndNameArray}</li></ol>
        <div>{
            people.map(person => {
                return (
                    <div key={person.id}>
                        <p>Name: {person.firstName} {person.lastName}</p>
                        <p>Age: {person.age}</p>
                        <p>City: {person.address.city}</p>
                    </div>
                )
            })
        }</div>
        </>
    )
}

export { Exercise3 };