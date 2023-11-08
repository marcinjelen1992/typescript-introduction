import "./App.css";

function consoleString(str?: string) {
    if (str) {
        return console.log(str)
    }
    return console.log("Nie podano żadnego stringa");
}

consoleString('to jest string');
consoleString();

function showString(str?: string) {
    if (str) {
        return str
    }
    return "Nie podano żadnego stringa";
}

function showNumOfOnlinePersons(num?: number): string {
    if (num) {
        return `Jest ${num} osób online`
    }
    return 'Nikt nie jest dostępny'
}

// Przy zapodaniu stringa właśnie dobrze, że podkreśla jako błąd gdyż właśnie o to chodzi żeby tak wskazywało

const Exercise2 = () => {

    return (
        <><h2>Exercise 2</h2>
        <ol><li>{showString('jakiś string')}</li>
        <li>{showString()}</li>
        <li>{showNumOfOnlinePersons(7)}</li>
        <li>{showNumOfOnlinePersons(0)}</li>
        </ol>
        </>
    )
}

export { Exercise2 };